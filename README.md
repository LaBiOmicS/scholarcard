# ScholarCard • Cartão Acadêmico Digital

> **Monocard Acadêmico Digital** leve, prático e sem exageros, desenvolvido especialmente para pesquisadores, docentes e pós-graduandos.  
> Roda **100% no navegador (Client-Side)** no **GitHub Pages**, sem necessidade de backend, banco de dados ou compilação (zero npm/Node).

---

## 🎯 Proposta & Utilidade Acadêmica

Ao invés de páginas pessoais pesadas ou difíceis de manter, o **ScholarCard** resolve o dia a dia do pesquisador em congressos, reuniões e submissões de fomento:

1. **Networking Ágil (QR Code):** Gera dinamicamente um QR Code com alto contraste para escanear com a câmera do celular em sessões de pôsteres, crachás ou apresentações orais.
2. **Como Citar Oficial:** Botão de 1 clique para copiar o nome em citações bibliográficas (ex: `MENEGIDIO, F. B.; Menegidio, Fabiano Bezerra`).
3. **Mini-Bio Pronta:** Cópia instantânea da biografia acadêmica em 1 parágrafo para programas de eventos, convites para palestras e propostas de bolsas/fomento.
4. **Salvar Contato (.vcf):** Exporta um cartão de contato digital vCard para salvar direto na agenda do celular (com link Lattes e ORCID embutidos).
5. **Busca Rápida de Artigos:** Filtro em tempo real por periódico, palavra-chave, autor ou ano, com links diretos com DOI clicável.
6. **Dossiê para Impressão / PDF:** Estilos de impressão dedicados (`@media print`) que transformam a página em uma ficha curricular limpa e elegante em A4.
7. **Troca Dinâmica de Pesquisador (Lattes XML):** Começa carregado com o perfil do **Prof. Dr. Fabiano Bezerra Menegidio**, mas permite arrastar e soltar **qualquer arquivo `.xml` exportado da Plataforma Lattes** para carregar instantaneamente o perfil de qualquer pesquisador do país.

---

## 🚀 Como Publicar no GitHub Pages (Passo a Passo)

Como a aplicação é composta exclusivamente por HTML5, CSS3 e JavaScript puro:

1. Crie um repositório no seu GitHub (exemplo: `meu-card` ou `scholarcard`).
2. Faça o upload ou push dos arquivos desta pasta:
   - `index.html`
   - `style.css`
   - `app.js`
   - `lattes-parser.js`
   - `sample-profiles.js`
   - `qrcode.min.js`
   - `Prof Fabiano.xml`
3. No GitHub, acesse as configurações do repositório:
   - **Settings** > **Pages**
   - Em **Build and deployment**, selecione a branch `main` (ou `master`) e a pasta `/ (root)`.
   - Clique em **Save**.
4. Em 1 a 2 minutos, o GitHub Pages fornecerá o link público:
   `https://seu-usuario.github.io/meu-card/`

---

## 🔄 Como Usar

### 1. Visualização Padrão
Ao abrir o site, ele carrega automaticamente o perfil acadêmico do **Prof. Dr. Fabiano Bezerra Menegidio** (Biotecnologia, Engenharia Biomédica, Bioinformática, UMC).

### 2. Carregar o seu próprio Currículo Lattes
1. Acesse a [Plataforma Lattes](https://lattes.cnpq.br/) e acesse seu currículo.
2. No menu superior direito do Lattes, clique em **Exportar Currículo** e escolha o formato **XML**.
3. No **ScholarCard**, clique no botão **"Trocar Pesquisador (XML)"** na barra superior.
4. Arraste o arquivo XML ou clique para selecioná-lo.
5. Pronto! O cartão se transforma imediatamente com seu nome, biografia, filiação, ORCID, artigos, softwares, orientações e QR Code.

### 3. Seleção de Docentes Pré-Carregados
O modal também conta com um seletor rápido contendo os docentes do programa da UMC para testes e comparações instantâneas.

---

## 🛠️ Personalização Permanente (Para ser o seu cartão próprio)

Se você quiser que o site abra **sempre com o seu currículo por padrão**:
1. Abra o arquivo `Prof Fabiano.xml` e substitua pelo seu arquivo XML (ou renomeie para o seu).
2. O parser `lattes-parser.js` lida automaticamente com codificação **ISO-8859-1** (padrão Lattes) e **UTF-8**, garantindo acentuação perfeita.

---

## 📁 Estrutura de Arquivos

```text
├── index.html           # Estrutura semântica e acessível da página
├── style.css            # Estilo moderno, paleta acadêmica sóbria, suporte a Dark Mode e Print
├── app.js               # Lógica da interface, eventos, filtros, clipboard e exportação vCard
├── lattes-parser.js     # Parser client-side DOMParser para extração de XMLs do Lattes
├── sample-profiles.js   # Perfis pré-processados para exibição imediata e catálogo de demonstração
├── qrcode.min.js        # Gerador autônomo de QR Code sem dependência de rede externa
└── Prof Fabiano.xml     # Currículo Lattes oficial em XML do Prof. Fabiano
```

---

## ⚖️ Licença e Privacidade

- **Privacidade total:** O processamento do XML ocorre **100% dentro do navegador** do usuário. Nenhum dado ou arquivo é enviado para servidores externos.
- Código aberto e adaptável para qualquer instituição de ensino superior e pesquisa.
