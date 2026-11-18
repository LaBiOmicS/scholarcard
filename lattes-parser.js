/**
 * LattesParser - Client-side XML parser for CNPq Lattes CVs.
 * Runs 100% in the browser. Zero dependencies.
 */
class LattesParser {
  /**
   * Reads a File object and decodes with correct charset (ISO-8859-1 / UTF-8).
   * @param {File} file
   * @returns {Promise<Object>} parsed profile
   */
  static async readFile(file) {
    const arrayBuffer = await file.arrayBuffer();
    // Peak at header to detect encoding
    const sample = new Uint8Array(arrayBuffer.slice(0, 200));
    const headerStr = String.fromCharCode(...sample);
    
    let encoding = 'iso-8859-1'; // Lattes offline standard
    if (/encoding=["']utf-8["']/i.test(headerStr)) {
      encoding = 'utf-8';
    }

    const decoder = new TextDecoder(encoding);
    const xmlText = decoder.decode(arrayBuffer);
    return LattesParser.parseXml(xmlText, file.name);
  }

  /**
   * Parses an XML text string into a normalized researcher profile object.
   * @param {string} xmlText
   * @param {string} [sourceId]
   * @returns {Object}
   */
  static parseXml(xmlText, sourceId = 'custom') {
    const domParser = new DOMParser();
    const doc = domParser.parseFromString(xmlText, 'text/xml');

    const parserError = doc.querySelector('parsererror');
    if (parserError) {
      throw new Error('Falha ao processar o XML do Lattes: ' + parserError.textContent.slice(0, 200));
    }

    const root = doc.documentElement;
    if (root.tagName !== 'CURRICULO-VITAE') {
      throw new Error('O arquivo selecionado não parece ser um XML de Currículo Lattes válido (raiz esperada: CURRICULO-VITAE).');
    }

    const lattesId = root.getAttribute('NUMERO-IDENTIFICADOR') || '';
    let dataAtualizacao = root.getAttribute('DATA-ATUALIZACAO') || '';
    if (dataAtualizacao.length === 8) {
      dataAtualizacao = `${dataAtualizacao.slice(0, 2)}/${dataAtualizacao.slice(2, 4)}/${dataAtualizacao.slice(4)}`;
    }

    const dg = doc.querySelector('DADOS-GERAIS') || {};
    const getAttr = (el, attr) => (el && typeof el.getAttribute === 'function' ? el.getAttribute(attr) || '' : '');

    const nome = getAttr(dg, 'NOME-COMPLETO');
    const nomeCitacoesRaw = getAttr(dg, 'NOME-EM-CITACOES-BIBLIOGRAFICAS');
    const nomeCitacoes = nomeCitacoesRaw ? nomeCitacoesRaw.split(';').map(c => c.trim()).filter(Boolean) : [];
    const orcid = getAttr(dg, 'ORCID-ID');
    const nacionalidade = getAttr(dg, 'PAIS-DE-NACIONALIDADE') || getAttr(dg, 'PAIS-DE-NASCIMENTO') || 'Brasil';

    const resumoNode = doc.querySelector('DADOS-GERAIS > RESUMO-CV');
    const resumo = getAttr(resumoNode, 'TEXTO-RESUMO-CV-RH');

    // Endereço Profissional / Vínculo
    const endProf = doc.querySelector('ENDERECO-PROFISSIONAL');
    const instituicao = getAttr(endProf, 'NOME-INSTITUICAO-EMPRESA');
    const departamento = getAttr(endProf, 'NOME-UNIDADE') || getAttr(endProf, 'NOME-ORGAO');
    const cidade = getAttr(endProf, 'CIDADE');
    const uf = getAttr(endProf, 'UF');

    // Formação Acadêmica
    const formacoes = [];
    const formNodes = doc.querySelectorAll('FORMACAO-ACADEMICA-TITULACAO > *');
    const orderDegree = { 'Doutorado': 1, 'Mestrado': 2, 'Pos Doutorado': 0, 'Especializacao': 3, 'Graduacao': 4 };

    formNodes.forEach(f => {
      const tipo = f.tagName.replace(/-/g, ' ').toLowerCase()
        .replace(/(?:^|\s)\S/g, a => a.toUpperCase());
      const curso = getAttr(f, 'NOME-CURSO') || getAttr(f, 'TITULO-DA-DISSERTACAO-TESE');
      const inst = getAttr(f, 'NOME-INSTITUICAO');
      const ano = getAttr(f, 'ANO-DE-CONCLUSAO') || getAttr(f, 'ANO-DE-INICIO');
      if (curso || inst) {
        formacoes.push({ tipo, curso, instituicao: inst, ano });
      }
    });

    formacoes.sort((a, b) => {
      const ordA = orderDegree[a.tipo] ?? 99;
      const ordB = orderDegree[b.tipo] ?? 99;
      if (ordA !== ordB) return ordA - ordB;
      return (parseInt(b.ano) || 0) - (parseInt(a.ano) || 0);
    });

    // Áreas do Conhecimento
    const areas = [];
    doc.querySelectorAll('AREAS-DO-CONHECIMENTO *').forEach(a => {
      ['NOME-DA-ESPECIALIDADE', 'NOME-DA-SUB-AREA-DO-CONHECIMENTO', 'NOME-DA-AREA-DO-CONHECIMENTO', 'NOME-GRANDE-AREA-DO-CONHECIMENTO'].forEach(k => {
        const val = getAttr(a, k).trim();
        if (val && !areas.includes(val) && val.length > 2) {
          areas.push(val);
        }
      });
    });

    // Artigos Publicados
    const artigos = [];
    doc.querySelectorAll('ARTIGO-PUBLICADO').forEach(a => {
      const db = a.querySelector('DADOS-BASICOS-DO-ARTIGO');
      const det = a.querySelector('DETALHAMENTO-DO-ARTIGO');
      if (db) {
        const autores = Array.from(a.querySelectorAll('AUTORES')).map(aut => 
          getAttr(aut, 'NOME-PARA-CITACAO') || getAttr(aut, 'NOME-COMPLETO-DO-AUTOR')
        ).filter(Boolean);

        const pagIni = getAttr(det, 'PAGINA-INICIAL');
        const pagFim = getAttr(det, 'PAGINA-FINAL');
        const paginas = pagIni ? (pagFim ? `${pagIni}-${pagFim}` : pagIni) : '';

        artigos.push({
          ano: getAttr(db, 'ANO-DO-ARTIGO'),
          titulo: getAttr(db, 'TITULO-DO-ARTIGO'),
          doi: getAttr(db, 'DOI').trim(),
          periodico: getAttr(det, 'TITULO-DO-PERIODICO-OU-REVISTA'),
          volume: getAttr(det, 'VOLUME'),
          paginas: paginas,
          autores: autores
        });
      }
    });

    artigos.sort((a, b) => (parseInt(b.ano) || 0) - (parseInt(a.ano) || 0));

    // Contadores
    const livrosCount = doc.querySelectorAll('LIVRO-PUBLICADO-OU-ORGANIZADO').length;
    const capitulosCount = doc.querySelectorAll('CAPITULO-DE-LIVRO-PUBLICADO').length;
    const eventosCount = doc.querySelectorAll('TRABALHO-EM-EVENTOS').length;

    // Softwares
    const softwares = [];
    doc.querySelectorAll('PRODUCAO-TECNICA > SOFTWARE').forEach(s => {
      const dbs = s.querySelector('DADOS-BASICOS-DO-SOFTWARE');
      const dets = s.querySelector('DETALHAMENTO-DO-SOFTWARE');
      if (dbs) {
        softwares.push({
          titulo: getAttr(dbs, 'TITULO-DO-SOFTWARE'),
          ano: getAttr(dbs, 'ANO'),
          finalidade: getAttr(dets, 'FINALIDADE'),
          plataforma: getAttr(dets, 'PLATAFORMA')
        });
      }
    });
    softwares.sort((a, b) => (parseInt(b.ano) || 0) - (parseInt(a.ano) || 0));

    // Patentes
    const patentes = [];
    doc.querySelectorAll('PRODUCAO-TECNICA > PATENTE').forEach(p => {
      const dbp = p.querySelector('DADOS-BASICOS-DA-PATENTE');
      if (dbp) {
        patentes.push({
          titulo: getAttr(dbp, 'TITULO'),
          ano: getAttr(dbp, 'ANO-DESENVOLVIMENTO')
        });
      }
    });

    // Orientações Concluídas
    const orientacoesConcluidas = [];
    doc.querySelectorAll('OUTRA-PRODUCAO > ORIENTACOES-CONCLUIDAS > *').forEach(o => {
      const tipoTag = o.tagName
        .replace('ORIENTACOES-CONCLUIDAS-PARA-', '')
        .replace('OUTRAS-ORIENTACOES-CONCLUIDAS', 'OUTRAS')
        .replace(/-/g, ' ')
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, a => a.toUpperCase());

      const db = o.querySelector('[class*="DADOS-BASICOS"], *[ANO]') || o.children[0];
      const det = o.querySelector('[class*="DETALHAMENTO"], *[NOME-DO-ORIENTADO]') || o.children[1];

      orientacoesConcluidas.push({
        tipo: tipoTag,
        titulo: getAttr(db, 'TITULO'),
        ano: getAttr(db, 'ANO'),
        orientado: getAttr(det, 'NOME-DO-ORIENTADO'),
        instituicao: getAttr(det, 'NOME-DA-INSTITUICAO')
      });
    });

    // Orientações em Andamento
    const orientacoesAndamento = [];
    doc.querySelectorAll('OUTRA-PRODUCAO > ORIENTACOES-EM-ANDAMENTO > *').forEach(o => {
      const tipoTag = o.tagName
        .replace('ORIENTACAO-EM-ANDAMENTO-DE-', '')
        .replace(/-/g, ' ')
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, a => a.toUpperCase());

      const db = o.children[0];
      const det = o.children[1];

      orientacoesAndamento.push({
        tipo: tipoTag,
        titulo: getAttr(db, 'TITULO-DO-TRABALHO') || getAttr(db, 'TITULO'),
        ano: getAttr(db, 'ANO'),
        orientado: getAttr(det, 'NOME-DO-ORIENTANDO'),
        instituicao: getAttr(det, 'NOME-INSTITUICAO')
      });
    });

    return {
      id: sourceId,
      lattes_id: lattesId,
      data_atualizacao: dataAtualizacao,
      nome: nome || 'Pesquisador(a)',
      nome_citacoes: nomeCitacoes,
      orcid: orcid,
      nacionalidade: nacionalidade,
      resumo: resumo,
      instituicao: instituicao,
      departamento: departamento,
      cidade: cidade,
      uf: uf,
      formacoes: formacoes,
      areas: areas.slice(0, 8),
      metricas: {
        artigos: artigos.length,
        livros: livrosCount,
        capitulos: capitulosCount,
        eventos: eventosCount,
        softwares: softwares.length,
        patentes: patentes.length,
        orientacoes_concluidas: orientacoesConcluidas.length,
        orientacoes_andamento: orientacoesAndamento.length
      },
      artigos: artigos,
      softwares: softwares,
      patentes: patentes,
      orientacoes_concluidas: orientacoesConcluidas,
      orientacoes_andamento: orientacoesAndamento
    };
  }
}

if (typeof window !== 'undefined') {
  window.LattesParser = LattesParser;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LattesParser };
}
