// Pré-carregamento dos pesquisadores para navegação e fallback imediato no GitHub Pages
var SAMPLE_PROFILES = {
  "fabiano": {
    "id": "Prof Fabiano.xml",
    "lattes_id": "2745899638505571",
    "data_atualizacao": "18/09/2026",
    "nome": "Fabiano Bezerra Menegidio",
    "nome_citacoes": [
      "MENEGIDIO, F. B.",
      "MENEGIDIO, FB",
      "Menegidio, Fabiano Bezerra",
      "Menegidio F.B",
      "Menegidio F.B.",
      "MENEGIDIO, FABIANO B.",
      "MENEGIDIO, FABIANO B",
      "Fabiano Menegidio",
      "MENEGIDIO, Fabiano",
      "MENEGIDO, F.",
      "MENEGÍDIO, FABIANO BEZERRA",
      "BEZERRA MENEGIDIO, FABIANO",
      "FABIANO BEZERRA MENEGÍDIO"
    ],
    "orcid": "https://orcid.org/0000-0002-4705-8352",
    "nacionalidade": "Brasil",
    "resumo": "Doutor e Mestre em Biotecnologia pela Universidade de Mogi das Cruzes (UMC). É graduado em Ciências Biológicas e em Ciência da Computação. Atualmente, é Coordenador do Programa de Pós-Graduação (PPG) Integrado em Engenharia Biomédica e do Núcleo de Pesquisas Tecnológicas (NPT) da UMC, onde também atua como Editor-Chefe da Revista Científica UMC. É docente permanente nos programas de pós-graduação stricto sensu em Engenharia Biomédica e em Biotecnologia, e coordena o Laboratório de Bioinformática e Ciências Ômicas (LaBiOmicS). Lidera projetos de pesquisa em Bioinformática com foco em Microbioma, Metagenômica, Transcriptômica e Mitogenômica, com ênfase em arquiteturas de Machine Learning e Deep Learning. No ecossistema de empreendedorismo tecnológico, é Co-fundador e Chief Technology Officer (CTO) das startups Brycon Soluções Biotecnológicas, EasyOmics e Dayhoff Solutions. Possui histórico de captação de recursos para inovação, tendo sido contemplado com fomento do PIPE-FAPESP (Pesquisa Inovativa em Pequenas Empresas) e do Programa Centelha.",
    "instituicao": "Universidade de Mogi das Cruzes",
    "departamento": "Laboratório de Bioinformática e Ciências Ômicas (LaBiOmics)",
    "cidade": "Mogi das Cruzes",
    "uf": "SP",
    "formacoes": [
      {
        "tipo": "Doutorado",
        "curso": "Biotecnologia",
        "instituicao": "Universidade de Mogi das Cruzes",
        "ano": "2020"
      },
      {
        "tipo": "Mestrado",
        "curso": "Biotecnologia",
        "instituicao": "Universidade de Mogi das Cruzes",
        "ano": "2016"
      },
      {
        "tipo": "Especializacao",
        "curso": "MBA em Empreendedorismo e Negócios Digitais",
        "instituicao": "Faculdade Focus",
        "ano": "2024"
      },
      {
        "tipo": "Especializacao",
        "curso": "Computação Forense",
        "instituicao": "Faculdade Focus",
        "ano": "2024"
      },
      {
        "tipo": "Especializacao",
        "curso": "Gestão da Tecnologia de Informação",
        "instituicao": "Faculdade Focus",
        "ano": "2024"
      },
      {
        "tipo": "Especializacao",
        "curso": "Redes Estruturadas de Computadores",
        "instituicao": "Centro de Estudos de Especialização e Extensão",
        "ano": "2023"
      },
      {
        "tipo": "Especializacao",
        "curso": "Computação em Nuvem e Aplicativos Móveis",
        "instituicao": "Centro de Inovação VincIT",
        "ano": "2023"
      },
      {
        "tipo": "Especializacao",
        "curso": "Inteligência Artificial, Machine Learning e Data Science",
        "instituicao": "Centro de Inovação VincIT",
        "ano": "2023"
      },
      {
        "tipo": "Especializacao",
        "curso": "Gestão de Riscos e Cibersegurança",
        "instituicao": "Centro de Estudos de Especialização e Extensão",
        "ano": "2023"
      },
      {
        "tipo": "Especializacao",
        "curso": "Administração de Servidores Linux",
        "instituicao": "Faculdade Focus",
        "ano": "2023"
      },
      {
        "tipo": "Especializacao",
        "curso": "Segurança da Informação",
        "instituicao": "Centro de Estudos de Especialização e Extensão",
        "ano": "2023"
      },
      {
        "tipo": "Especializacao",
        "curso": "Administração de Servidores Windows",
        "instituicao": "Faculdade Focus",
        "ano": "2023"
      },
      {
        "tipo": "Especializacao",
        "curso": "MBA em Big Data e Inteligência na Gestão de Dados",
        "instituicao": "Centro de Inovação VincIT",
        "ano": "2021"
      },
      {
        "tipo": "Graduacao",
        "curso": "Ciências Biológicas - Bacharelado",
        "instituicao": "Universidade Nove de Julho",
        "ano": "2013"
      },
      {
        "tipo": "Graduacao",
        "curso": "Formação Específica em Gestão Ambiental",
        "instituicao": "Universidade Nove de Julho",
        "ano": "2013"
      },
      {
        "tipo": "Graduacao",
        "curso": "Ciências Biológicas - Licenciatura Plena",
        "instituicao": "Universidade Nove de Julho",
        "ano": "2013"
      }
    ],
    "areas": [
      "Bioinformática",
      "Biologia Geral",
      "CIENCIAS_BIOLOGICAS",
      "Genômica Estrutural",
      "Genética",
      "Biotecnologia",
      "Microbiologia",
      "Bioinformática e Biologia Computacional"
    ],
    "metricas": {
      "artigos": 53,
      "livros": 3,
      "capitulos": 5,
      "eventos": 69,
      "softwares": 10,
      "patentes": 0,
      "orientacoes_concluidas": 50,
      "orientacoes_andamento": 0
    },
    "artigos": [
      {
        "ano": "2026",
        "titulo": "Development of genomic resources to support population assessment and breeding strategies in the dusky grouper (Epinephelus marginatus)",
        "doi": "10.1016/j.aquaculture.2025.743581",
        "periodico": "AQUACULTURE",
        "volume": "615",
        "paginas": "743581-",
        "autores": [
          "CORRÊA, PÂMELA SOUZA",
          "PERAZZA, CAIO AUGUSTO",
          "KERBER, CLAUDIA EHLERS",
          "VILLELA, PRISCILLA M.S.",
          "MENEGIDIO, FABIANO B.",
          "HILSDORF, ALEXANDRE W.S."
        ]
      },
      {
        "ano": "2026",
        "titulo": "Dysbiosis of the enteric DNA virome correlates with the development of cachexia in a murine Lewis lung carcinoma (LLC) model",
        "doi": "10.1007/s00705-026-06522-7",
        "periodico": "ARCHIVES OF VIROLOGY",
        "volume": "171",
        "paginas": "1-",
        "autores": [
          "ACIOLE BARBOSA, DAVID",
          "DE MARIA, YARA N.L.F.",
          "MENEGIDIO, FABIANO B.",
          "DE OLIVEIRA, REGINA COSTA",
          "JABES, DANIELA L.",
          "NUNES, LUIZ R."
        ]
      },
      {
        "ano": "2026",
        "titulo": "Evolutionary patterns in squamate mitogenomes: Are selective regimes associated with fossoriality and limblessness?",
        "doi": "10.1590/1678-4685-gmb-2025-0226",
        "periodico": "GENETICS AND MOLECULAR BIOLOGY",
        "volume": "49",
        "paginas": "1-",
        "autores": [
          "PEREIRA, ANIELI GUIRRO",
          "ANELLI, VINICIUS",
          "PASA, RUBENS",
          "KAVALCO, KARINE FREHNER",
          "Menegidio, Fabiano Bezerra",
          "KOHLSDORF, TIANA"
        ]
      },
      {
        "ano": "2026",
        "titulo": "The Therapeutic Drug Monitoring of Vancomycin: Mathematical Complexity and the Role of Digital Tools in Risk Reduction - A Systematic Review",
        "doi": "10.36557/2674-9432.2026v5n3p154-173",
        "periodico": "Periódicos Brasil. Pesquisa Científica",
        "volume": "5",
        "paginas": "154-173",
        "autores": [
          "RODRIGUES DA SILVA, ROGER",
          "RODRIGUES DA SILVA, ROBSON",
          "BEZERRA MENEGIDIO, FABIANO"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Effect of green propolis crude extract on the modulation of intestinal microbiota and on the productive performance of juvenile Nile tilapia",
        "doi": "10.1007/s11259-025-10683-2",
        "periodico": "VETERINARY RESEARCH COMMUNICATIONS",
        "volume": "49",
        "paginas": "1-",
        "autores": [
          "ZAMINHAN-HASSEMER, MICHELI",
          "ZAGOLIN, GUSTAVO BOTTON",
          "ARÁUJO, BRUNO CAVALHEIRO",
          "PERAZZA, CAIO AUGUSTO",
          "BARBOSA, DAVID ACIOLE",
          "MENEGIDIO, FABIANO B.",
          "COUTINHO, LUIZ LEHMANN",
          "TIZIOTO, POLYANA",
          "HILSDORF, ALEXANDRE WAGNER SILVA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Description and characterization of the small mitochondrial genome of Trichoderma cerinum</i> (Hypocreales, Hypocreaceae) and its evolutionary perspectives",
        "doi": "10.1080/24701394.2025.2482202",
        "periodico": "Mitochondrial DNA Part A",
        "volume": "1",
        "paginas": "1-9",
        "autores": [
          "DE ASSIS, PRISCILA MARTINS",
          "RODRIGUES-OLIVEIRA, IGOR HENRIQUE",
          "BATISTA DA SILVA, IURI",
          "PASA, RUBENS",
          "MENEGIDIO, FABIANO B.",
          "KAVALCO, KARINE FREHNER"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Role of public DNA-Seq data in mitogenomics research: A case study on the flying fish family (Beloniformes: Exocoetidae)",
        "doi": "10.1007/s12038-025-00502-w",
        "periodico": "Journal of Biosciences",
        "volume": "50",
        "paginas": "1-",
        "autores": [
          "BATISTA DA SILVA, IURI",
          "RODRIGUES-OLIVEIRA, IGOR HENRIQUE",
          "KAVALCO, KARINE FREHNER",
          "Menegidio, Fabiano Bezerra",
          "PASA, RUBENS"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Unraveling a 150-Year-Old Enigma: Psalidodon rivularis (Acestrorhamphidae: Acestrorhampinae), a Species Complex or a Polymorphic Species?",
        "doi": "10.3390/biology14121793",
        "periodico": "BIOLOGY",
        "volume": "14",
        "paginas": "1793-",
        "autores": [
          "RODRIGUES-OLIVEIRA, IGOR HENRIQUE",
          "DE ASSIS, PRISCILA MARTINS",
          "PIMENTEL, LUIZ GUILHERME PEREIRA",
          "SOARES, RAFAEL AUGUSTO SILVA",
          "BATISTA DA SILVA, IURI",
          "ROCHA, RENAN RODRIGUES",
          "Menegidio, Fabiano Bezerra",
          "PASA, RUBENS",
          "KAVALCO, KARINE FREHNER"
        ]
      },
      {
        "ano": "2025",
        "titulo": "MACHINE LEARNING IN CORONARY ARTERY DISEASE DETECTION: A TECHNICAL-SCIENTIFIC REVIEW",
        "doi": "10.56238/arev7n10-039",
        "periodico": "ARACÊ - DIREITOS HUMANOS EM REVISTA",
        "volume": "7",
        "paginas": "e8638-",
        "autores": [
          "RIBEIRO, HELIO DE ARAUJO",
          "MENEGÍDIO, FABIANO BEZERRA",
          "DA SILVA, ROBSON RODRIGUES"
        ]
      },
      {
        "ano": "2025",
        "titulo": "CIÊNCIA CIDADÃ COMO PRÁTICA PEDAGÓGICA NA FORMAÇÃO DE PROFESSORES",
        "doi": "10.29327/268346.9.22-17",
        "periodico": "Revista Communitas",
        "volume": "9",
        "paginas": "1-",
        "autores": [
          "SOUZA, CAIO HENRIQUE MARTINS DE",
          "Menegidio, Fabiano Bezerra",
          "JABES, DANIELA LEITE"
        ]
      },
      {
        "ano": "2025",
        "titulo": "EMPRENDIMIENTO SOCIAL EN LA EDUCACIÓN",
        "doi": "10.56579/rei.v7i3.2367",
        "periodico": "Revista de Estudos Interdisciplinares",
        "volume": "7",
        "paginas": "01-16",
        "autores": [
          "SOUZA, CAIO HENRIQUE MARTINS DE",
          "ALMEIDA-SCABBIA, RENATA JIMENEZ DE",
          "Menegidio, Fabiano Bezerra",
          "JABES, DANIELA LEITE"
        ]
      },
      {
        "ano": "2025",
        "titulo": "De novo assembly and annotation of the pantranscriptome of Astyanax lacustris on the liver and pituitary-gonadal axis",
        "doi": "10.1016/j.margen.2025.101190",
        "periodico": "Marine Genomics",
        "volume": "81",
        "paginas": "101190-",
        "autores": [
          "ACIOLE BARBOSA, DAVID",
          "MENEGIDIO, FABIANO B.",
          "BRANCO, GIOVANA SOUZA",
          "DALOLIO GOMES, ALINE",
          "TOLUSSI, CARLOS EDUARDO",
          "MUÑOZ-PEÑUELA, MARCELA",
          "ARAÚJO, BRUNO C.",
          "DA SILVA, IURI BATISTA",
          "MOREIRA, RENATA GUIMARÃES",
          "NUNES, LUIZ R."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Formação Empreendedora na Pós-Graduação Stricto Senso em Biotecnologia e Engenharia Biomédica",
        "doi": "10.17921/2447-8733.2025v26n1p55-61",
        "periodico": "REVISTA DE ENSINO, EDUCAÇÃO E CIÊNCIAS HUMANAS",
        "volume": "26",
        "paginas": "55-61",
        "autores": [
          "JABES, DANIELA LEITE",
          "Menegidio, Fabiano Bezerra"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Evaluation of the correlation between salivary metabolites of conventional cigarette smokers, clinical data, and tobacco",
        "doi": "10.1016/j.oooo.2025.01.645",
        "periodico": "Oral Surgery Oral Medicine Oral Pathology Oral Radiology",
        "volume": "139",
        "paginas": "e133-",
        "autores": [
          "THEODORO, LURYE SILVA",
          "BARBOSA, DAVID ACIOLE",
          "GREENFIELD, ELLEN",
          "CAVALCANTI, DESIREE ROSA",
          "MENDES, MARIA ANITA",
          "Menegidio, Fabiano Bezerra",
          "ALVES, MÔNICA GHISLAINE OLIVEIRA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Big jaw, small genome: first description of the mitochondrial genome of Odontomachus (Formicidae, Ponerinae): evolutionary implications for Ponerinae ants",
        "doi": "10.1080/24701394.2024.2343477",
        "periodico": "Mitochondrial Dna Part A",
        "volume": "1",
        "paginas": "1-12",
        "autores": [
          "VIDAL, M. P. V. T.",
          "RODRIGUES-OLIVEIRA, I. H.",
          "SILVA, I. B.",
          "ROCHA, R. R.",
          "PASA, R.",
          "KAVALCO, K. F.",
          "MENEGIDIO, FABIANO B",
          "GARCIA, C."
        ]
      },
      {
        "ano": "2024",
        "titulo": "EDUCAÇÃO EMPREENDEDORA: sequência didática para promover o Empreendedorismo e a Inovação no ensino superior",
        "doi": "10.21920/recei.v10i33.5756",
        "periodico": "REVISTA ELETRÔNICA CIENTÍFICA ENSINO INTERDISCIPLINAR",
        "volume": "10",
        "paginas": "--",
        "autores": [
          "JABES, D. L.",
          "MENEGIDIO, FB"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Genetic chronicle of the capybara: the complete mitochondrial genome of Hydrochoerus hydrochaeris",
        "doi": "10.1007/s42991-024-00417-3",
        "periodico": "MAMMALIAN BIOLOGY",
        "volume": "1",
        "paginas": "--",
        "autores": [
          "DA SILVA, IURI BATISTA",
          "MENEGÍDIO, FABIANO BEZERRA",
          "GARCIA, CAROLINE",
          "KAVALCO, KARINE FREHNER",
          "PASA, RUBENS"
        ]
      },
      {
        "ano": "2024",
        "titulo": "In silico Characterization of Satellitomes and Cross-Amplification of Putative satDNAs in Two Species of the Hypostomus ancistroides Complex (Siluriformes, Loricariidae)",
        "doi": "10.1159/000539429",
        "periodico": "CYTOGENETIC AND GENOME RESEARCH",
        "volume": "x",
        "paginas": "1-12",
        "autores": [
          "REIS, D. A. R.",
          "RODRIGUES-OLIVEIRA, I. H.",
          "RUBENS PASA",
          "MENEGIDIO, FABIANO B",
          "HESLOP-HARRISON, JOHN SEYMOUR",
          "SCHWARZACHER, T.",
          "KARINE FREHNER KAVALCO"
        ]
      },
      {
        "ano": "2024",
        "titulo": "First description of the mitogenome of the endangered turtle Erymnochelys madagascariensis</i> (Testudines: Podocnemididae) and its implications for conservation",
        "doi": "10.11606/issn.2316-9079.v23i1p3-19",
        "periodico": "PHYLLOMEDUSA: JOURNAL OF HERPETOLOGY",
        "volume": "23",
        "paginas": "3-19",
        "autores": [
          "GARCIA, CAROLINE",
          "RODRIGUES-OLIVEIRA, IGOR HENRIQUE",
          "SILVA, IURI BATISTA DA",
          "ROCHA, RENAN RODRIGUES",
          "PASA, RUBENS",
          "Menegidio, Fabiano Bezerra",
          "KAVALCO, KARINE FREHNER"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Interações entre malassezia restricta e o micobioma humano: uma perspectiva abrangente",
        "doi": "10.32749/nucleodoconhecimento.com.br/biologia/interacoes-entre-malassezia",
        "periodico": "Revista Científica Multidisciplinar Núcleo do Conhecimento",
        "volume": "1",
        "paginas": "21-34",
        "autores": [
          "BERLOFA, MARIA VITÓRIA CAVALHEIRO",
          "SIQUEIRA, ANA CAROLINA DE OLIVEIRA RAMOS",
          "MARIA, YARA NATÉRCIA LIMA FAUSTINO DE",
          "OLIVEIRA, RAFAELA DE CAMPOS",
          "TAKAO, PAULO SALARROLA",
          "SILVA, ANA CLARA DA",
          "NATUCCI, MILENA COUTINHO",
          "Menegidio, Fabiano Bezerra",
          "JABES, DANIELA LEITE"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Impacto da pandemia de Covid-19 no comportamento de crianças com autismo",
        "doi": "",
        "periodico": "Boletim Informativo Unimotrisaúde em Sociogerontologia",
        "volume": "48",
        "paginas": "1-",
        "autores": [
          "VASCONCELOS, R. N.",
          "SOUSA, L. R.",
          "SANTOS, N. C. M.",
          "CARVALHO, P. H. C. T.",
          "MARTINI, S. C.",
          "Menegidio F.B",
          "THEODORIO, D. P."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Microbiota vaginal e o uso de Lactobacillus como probiótico: evidências e controvérsias",
        "doi": "10.55905/revconv.17n.10-462",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "17",
        "paginas": "e12148-",
        "autores": [
          "OLIVEIRA, RAFAELA DE CAMPOS",
          "CÔRREA, PÂMELA SOUZA",
          "TAKAO, PAULO SALLAROLA",
          "ROCHA, RENAN RODRIGUES",
          "PASA, RUBENS",
          "KAVALCO, KARINE FREHNER",
          "JABES, DANIELA LEITE",
          "Menegidio, Fabiano Bezerra"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Charles Darwin e a eugenia: Uma análise crítica das interpretações e distinções entre a Teoria da Evolução e o Movimento Eugenista",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "9",
        "paginas": "ES000002-",
        "autores": [
          "Menegidio, Fabiano Bezerra"
        ]
      },
      {
        "ano": "2024",
        "titulo": "TRANSFORMAÇÕES NA EDUCAÇÃO EMPREENDEDORA uma abordagem interdisciplinar para a pós-graduação",
        "doi": "10.29327/268346.8.20-2",
        "periodico": "Revista Communitas",
        "volume": "8",
        "paginas": "23?44-",
        "autores": [
          "JABES, DANIELA LEITE",
          "Menegidio, Fabiano Bezerra"
        ]
      },
      {
        "ano": "2024",
        "titulo": "When paleontology meets genomics: complete mitochondrial genomes of two saber-toothed cats? species (Felidae: Machairodontinae)",
        "doi": "10.1080/24701394.2024.2439433",
        "periodico": "Mitochondrial DNA Part A",
        "volume": "1",
        "paginas": "1-9",
        "autores": [
          "RODRIGUES-OLIVEIRA, IGOR HENRIQUE",
          "BATISTA DA SILVA, IURI",
          "ROCHA, RENAN RODRIGUES",
          "SOARES, RAFAEL AUGUSTO SILVA",
          "Menegidio, Fabiano Bezerra",
          "GARCIA, CAROLINE",
          "PASA, RUBENS",
          "KAVALCO, KARINE FREHNER"
        ]
      },
      {
        "ano": "2024",
        "titulo": "A ciência cidadã como ferramenta pedagógica: narrativas de formação docente e transformação do cotidiano escolar",
        "doi": "10.55905/revconv.17n.13-080",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "17",
        "paginas": "e13345-",
        "autores": [
          "SOUZA, CAIO HENRIQUE MARTINS DE",
          "MARIA, YARA NATÉRCIA LIMA FAUSTINO DE",
          "BERLOFA, MARIA VITÓRIA CAVALHEIRO",
          "OLIVEIRA, RAFAELA DE CAMPOS",
          "CÔRREA, PÂMELA SOUZA",
          "ALMEIDA-SCABBIA, RENATA JIMENEZ DE",
          "Menegidio, Fabiano Bezerra",
          "JABES, DANIELA LEITE"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Mitochondrial Genomes of Mammals from the Brazilian Cerrado and Phylogenetic Considerations for the Orders Artiodactyla, Carnivora, and Chiroptera (Chordata: Mammalia)",
        "doi": "10.3390/life14121597",
        "periodico": "Life-Basel",
        "volume": "14",
        "paginas": "1597-",
        "autores": [
          "PIMENTEL, LUIZ GUILHERME PEREIRA",
          "MENEGÍDIO, FABIANO BEZERRA",
          "GARCIA, CAROLINE",
          "PASA, RUBENS",
          "SOARES, RAFAEL AUGUSTO SILVA",
          "DE ASSIS, PRISCILA MARTINS",
          "BATISTA DA SILVA, IURI",
          "RODRIGUES-OLIVEIRA, IGOR HENRIQUE",
          "ROCHA, RENAN RODRIGUES",
          "DE MIRANDA, VINÍCIUS GONÇALVES",
          "BASSAM, LAIENA LUZ",
          "KAVALCO, KARINE FREHNER"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Visão computacional na saúde: revisão de métodos e desafios educacionais para integração multidisciplinar",
        "doi": "10.55905/cuadv16n13-169",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "16",
        "paginas": "e7088-",
        "autores": [
          "TAVARES, ALMIR RODRIGUES",
          "RIBEIRO, HELIO DE ARAÚJO",
          "CAMPOS, HIGOR BARRETO",
          "OLIVEIRA, CLEBER SILVA DE",
          "SILVA, ROBSON RODRIGUES DA",
          "BISSACO, MARCIA APARECIDA SILVA",
          "MARTINI, SILVIA CRISTINA",
          "Menegidio, Fabiano Bezerra"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Preservação de Tecidos Moles em Fósseis: Revisão de Mecanismos e Implicações Paleobiológicas",
        "doi": "",
        "periodico": "TARAIRIÚ. REVISTA ELETRÔNICA DO LABORATÓRIO DE ARQUEOLOGIA E PALEONTOLOGIA DA UEPB.",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "MENEGIDIO, FABIANO B"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Characterization of six new complete mitochondrial genomes of Chiasmodontidae (Scombriformes, Percomorpha) and considerations about the phylogenetic relationships of the family",
        "doi": "10.5808/gi.22041",
        "periodico": "Genomics & Informatics",
        "volume": "21",
        "paginas": "e10-",
        "autores": [
          "RODRIGUES-OLIVEIRA, IGOR HENRIQUE",
          "PASA, RUBENS",
          "Menegidio, Fabiano Bezerra",
          "KAVALCO, KARINE FREHNER"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Post-feeding Molecular Responses of Cobia (Rachycentron canadum): RNA-Sequencing as a Tool to Evaluate Postprandial Effects in Hepatic Lipid Metabolism",
        "doi": "10.1007/s10126-023-10209-4",
        "periodico": "MARINE BIOTECHNOLOGY",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "ARAÚJO, BRUNO C.",
          "DE MELLO, PAULO H.",
          "HILSDORF, ALEXANDRE W. S.",
          "BARBOSA, DAVID ACIOLE",
          "HONJI, RENATO M.",
          "BRANCO, GIOVANA S.",
          "MENEGIDIO, FABIANO B.",
          "MARQUES, VICTOR H.",
          "MOREIRA, RENATA G.",
          "KITAHARA, MARCELO V.",
          "ROMBENSO, ARTUR N."
        ]
      },
      {
        "ano": "2023",
        "titulo": "Phylogeography and karyotypic evolution of some Deuterodon species from southeastern Brazil (Characiformes, Characidae, Stethaprioninae)",
        "doi": "10.1590/1678-4685-gmb-2023-0044",
        "periodico": "GENETICS AND MOLECULAR BIOLOGY (ONLINE VERSION)",
        "volume": "46",
        "paginas": "1-",
        "autores": [
          "RODRIGUES-OLIVEIRA, IGOR HENRIQUE",
          "PENTEADO, PIERRE RAFAEL",
          "PASA, RUBENS",
          "MENEGÍDIO, FABIANO BEZERRA",
          "KAVALCO, KARINE FREHNER"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Discovery of putative long non-coding RNAs expressed in the eyes of Astyanax mexicanus (Actinopterygii: Characidae)",
        "doi": "10.1038/s41598-023-34198-5",
        "periodico": "Scientific Reports",
        "volume": "13",
        "paginas": "1-",
        "autores": [
          "BATISTA DA SILVA, IURI",
          "ACIOLE BARBOSA, DAVID",
          "KAVALCO, KARINE FREHNER",
          "NUNES, LUIZ R.",
          "PASA, RUBENS",
          "MENEGIDIO, FABIANO B."
        ]
      },
      {
        "ano": "2023",
        "titulo": "Description of eight new mitochondrial genomes for the genus Neoarius and phylogenetic considerations for the family Ariidae (Siluriformes)",
        "doi": "10.5808/gi.23059",
        "periodico": "Genomics &amp; Informatics",
        "volume": "21",
        "paginas": "e51-",
        "autores": [
          "PIMENTEL, LUIZ GUILHERME PEREIRA",
          "DA SILVA, IURI BATISTA",
          "RODRIGUES-OLIVEIRA, IGOR HENRIQUE",
          "PASA, RUBENS",
          "MENEGÍDIO, FABIANO BEZERRA",
          "KAVALCO, KARINE FREHNER"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Molecular diagnosis of SARS-CoV-2: A validation of saliva samples",
        "doi": "10.30574/gscarr.2022.10.2.0037",
        "periodico": "GSC Advanced Research and Reviews",
        "volume": "10",
        "paginas": "001-003",
        "autores": [
          "NATALIA VERISSIMO RODRIGUES DA SILVA",
          "SAMYRA STÉPHANE NEVES PEREIRA",
          "KARINE FREHNER KAVALCO",
          "FABIANO BEZERRA MENEGÍDIO",
          "LUANDA MEDEIROS-SANTANA",
          "LILIANE EVANGELISTA VISÔTTO",
          "RUBENS PASA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Colorimetric Reverse Transcription-Loop-Mediated Isothermal Amplification (RT-LAMP) in rapid detection of SARS-CoV-2",
        "doi": "10.30574/msarr.2022.4.2.0026",
        "periodico": "Magna Scientia Advanced Research and Reviews",
        "volume": "4",
        "paginas": "001-004",
        "autores": [
          "SAMYRA STHÉFANE NEVES PEREIRA",
          "RUBENS PASA",
          "FABIANO BEZERRA MENEGÍDIO",
          "LUANDA MEDEIROS-SANTANA",
          "LILIANE EVANGELISTA VISÔTTO",
          "EVERALDO ANTONIO LOPES",
          "KARINE FREHNER KAVALCO"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Prospecção e análise de biomarcadores associados à nefropatia diabética utilizados no diagnóstico",
        "doi": "",
        "periodico": "Revista Científica Multidisciplinar Núcleo do Conhecimento",
        "volume": "03",
        "paginas": "56-",
        "autores": [
          "FONSECA, R. L.",
          "HITZSCHKY, B. L.",
          "MIOTO, E. B.",
          "YEUNG, W. K. C.",
          "MENEGIDIO, FB"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Adding an essential oil blend to the diet of juvenile Nile tilapia improves growth and alters the gut microbiota",
        "doi": "10.1016/j.aquaculture.2022.738581",
        "periodico": "AQUACULTURE",
        "volume": "560",
        "paginas": "738581-",
        "autores": [
          "ZAMINHAN-HASSEMER, MICHELI",
          "ZAGOLIN, GUSTAVO BOTTON",
          "PERAZZA, CAIO AUGUSTO",
          "ACIOLE BARBOSA, DAVID",
          "MENEGIDIO, FABIANO B.",
          "COUTINHO, LUIZ LEHMANN",
          "TIZIOTO, POLYANA",
          "HILSDORF, ALEXANDRE WAGNER SILVA"
        ]
      },
      {
        "ano": "2021",
        "titulo": "The Quorum Sensing Auto-Inducer 2 (AI-2) Stimulates Nitrogen Fixation and Favors Ethanol Production over Biomass Accumulation in Zymomonas mobilis",
        "doi": "10.3390/ijms22115628",
        "periodico": "INTERNATIONAL JOURNAL OF MOLECULAR SCIENCES",
        "volume": "22",
        "paginas": "5628-",
        "autores": [
          "ALENCAR, VALQUÍRIA CAMPOS",
          "JABES, DANIELA L.",
          "MENEGIDIO, FABIANO B.",
          "COSTA DE OLIVEIRA, REGINA",
          "RODRIGUES, TIAGO",
          "TERSARIOL, IVARNE LUIS DOS SANTOS",
          "WALMSLEY, ADRIAN R.",
          "NUNES, LUIZ R.",
          "SILVA, JULIANA DE FÁTIMA DOS SANTOS",
          "VILAS BOAS, RENATA OZELAMI",
          "FARNÉZIO, VINÍCIUS MANGANARO",
          "DE MARIA, YARA N. L. F.",
          "ACIOLE BARBOSA, DAVID",
          "ALMEIDA, ALEX TRAMONTIN",
          "DE SOUZA, EMANUEL MALTEMPI",
          "MÜLLER-SANTOS, MARCELO"
        ]
      },
      {
        "ano": "2021",
        "titulo": "Perfil de ensaios clínicos pediátricos para COVID-19 no ClinicalTrials.gov: uma revisão sistemática",
        "doi": "",
        "periodico": "REV. RESIDÊNCIA PEDIÁTRICA",
        "volume": "x",
        "paginas": "x-",
        "autores": [
          "COVOLAN, M. R. Z.",
          "TSURUDA, L.",
          "SILVA, Daniela Sampaio",
          "ACIOLE BARBOSA, DAVID",
          "PASA, RUBENS",
          "KAVALCO, K. F.",
          "MENEGIDIO, F. B."
        ]
      },
      {
        "ano": "2021",
        "titulo": "Ten Complete Mitochondrial Genomes of Gymnocharacini (Stethaprioninae, Characiformes). Insights Into Evolutionary Relationships and a Repetitive Element in the Control Region (D-loop)",
        "doi": "10.3389/fevo.2021.650783",
        "periodico": "FRONTIERS IN ECOLOGY AND EVOLUTION",
        "volume": "9",
        "paginas": "650783-",
        "autores": [
          "PASA, RUBENS",
          "MENEGÍDIO, FABIANO BEZERRA",
          "RODRIGUES-OLIVEIRA, IGOR HENRIQUE",
          "DA SILVA, IURI BATISTA",
          "DE CAMPOS, MATHEUS LEWI CRUZ BONACCORSI",
          "ROCHA-REIS, DINAÍZA ABADIA",
          "HESLOP-HARRISON, JOHN SEYMOUR",
          "SCHWARZACHER, TRUDE",
          "KAVALCO, KARINE FREHNER"
        ]
      },
      {
        "ano": "2021",
        "titulo": "Analysis of mouse faecal dysbiosis, during the development of cachexia, induced by transplantation with Lewis lung carcinoma cells",
        "doi": "10.1099/mic.0.001088",
        "periodico": "MICROBIOLOGY-SGM",
        "volume": "167",
        "paginas": "mic.0.001088-",
        "autores": [
          "DE MARIA, YARA N. L. F.",
          "NUNES, LUIZ R.",
          "JABES, DANIELA L.",
          "ACIOLE BARBOSA, DAVID",
          "MENEGIDIO, FABIANO B.",
          "SANTOS, KALTINAITIS B. N. H.",
          "HUMBERTO, ANA CAROLINA",
          "ALENCAR, VALQUÍRIA C.",
          "SILVA, JULIANA F. S.",
          "COSTA DE OLIVEIRA, REGINA",
          "BATISTA JR, MIGUEL L."
        ]
      },
      {
        "ano": "2021",
        "titulo": "Transcriptomic Profiling and Microsatellite Identification in Cobia (Rachycentron canadum), Using High-Throughput RNA Sequencing",
        "doi": "10.1007/s10126-021-10081-0",
        "periodico": "MARINE BIOTECHNOLOGY",
        "volume": "X",
        "paginas": "X-",
        "autores": [
          "ACIOLE BARBOSA, DAVID",
          "ARAÚJO, BRUNO C.",
          "BRANCO, GIOVANA SOUZA",
          "SIMEONE, ALEXANDRE S.",
          "HILSDORF, ALEXANDRE W. S.",
          "JABES, DANIELA L.",
          "NUNES, LUIZ R.",
          "MOREIRA, RENATA G.",
          "MENEGIDIO, FABIANO B."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Transcriptomic profiling identifies novel transcripts, isomorphs, and noncoding RNAs in Paracoccidioides brasiliensis",
        "doi": "10.1093/mmy/myaa062",
        "periodico": "MEDICAL MYCOLOGY",
        "volume": "00",
        "paginas": "1-4",
        "autores": [
          "MENEGIDIO, FABIANO B",
          "ACIOLE BARBOSA, DAVID",
          "ALENCAR, VALQUÍRIA C",
          "VILAS BOAS, RENATA O",
          "COSTA DE OLIVEIRA, REGINA",
          "JABES, DANIELA L",
          "NUNES, LUIZ R"
        ]
      },
      {
        "ano": "2020",
        "titulo": "Complete mitochondrial genome of the endangered species Brycon nattereri (Characiformes, Characidae)",
        "doi": "10.12688/f1000research.26524.1",
        "periodico": "F1000RESEARCH",
        "volume": "9",
        "paginas": "1343-",
        "autores": [
          "RESENDE, SNAYDIA VIEGAS",
          "PASA, RUBENS",
          "MENEGÍDIO, FABIANO BEZERRA",
          "HESLOP-HARRISON, JOHN SEYMOUR (PAT)",
          "SCHWARZACHER, TRUDE",
          "KAVALCO, KARINE FREHNER"
        ]
      },
      {
        "ano": "2020",
        "titulo": "The Complete Mitochondrial Genome of Two Armored Catfish Populations of the Genus Hypostomus (Siluriformes, Loricariidae, Hypostominae)",
        "doi": "10.3389/fevo.2020.579965",
        "periodico": "FRONTIERS IN ECOLOGY AND EVOLUTION",
        "volume": "8",
        "paginas": "1-",
        "autores": [
          "ROCHA-REIS, DINAÍZA ABADIA",
          "PASA, RUBENS",
          "Menegidio, Fabiano Bezerra",
          "HESLOP-HARRISON, JOHN SEYMOUR",
          "SCHWARZACHER, TRUDE",
          "KAVALCO, KARINE FREHNER"
        ]
      },
      {
        "ano": "2020",
        "titulo": "Fungal Dysbiosis Correlates with the Development of Tumor-Induced Cachexia in Mice",
        "doi": "10.3390/jof6040364",
        "periodico": "JOURNAL OF FUNGI",
        "volume": "6",
        "paginas": "364-",
        "autores": [
          "JABES, DANIELA L.",
          "MENEGIDIO, FABIANO B.",
          "NUNES, LUIZ R.",
          "DE MARIA, YARA N. L. F.",
          "ACIOLE BARBOSA, DAVID",
          "SANTOS, KALTINAITIS B. N. H.",
          "CARVALHO, LUCAS M.",
          "HUMBERTO, ANA CAROLINA",
          "ALENCAR, VALQUÍRIA C.",
          "COSTA DE OLIVEIRA, REGINA",
          "BATISTA, MIGUEL L."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Bioportainer Workbench: a versatile and user-friendly system that integrates implementation, management, and use of bioinformatics resources in Docker environments",
        "doi": "10.1093/gigascience/giz041",
        "periodico": "GigaScience",
        "volume": "8",
        "paginas": "1-9",
        "autores": [
          "MENEGIDIO, FABIANO B",
          "ACIOLE BARBOSA, DAVID",
          "GONÇALVES, RAFAEL DOS S",
          "NISHIME, MARCIO M",
          "JABES, DANIELA L",
          "COSTA DE OLIVEIRA, REGINA",
          "NUNES, LUIZ R"
        ]
      },
      {
        "ano": "2019",
        "titulo": "ParaDB: A manually curated database containing genomic annotation for the human pathogenic fungi Paracoccidioides spp.",
        "doi": "10.1371/journal.pntd.0007576",
        "periodico": "PLoS Neglected Tropical Diseases",
        "volume": "13",
        "paginas": "e0007576-",
        "autores": [
          "ACIOLE BARBOSA, DAVID",
          "NUNES, LUIZ R.",
          "Menegidio, Fabiano Bezerra",
          "ALENCAR, VALQUÍRIA CAMPOS",
          "GONÇALVES, RAFAEL S.",
          "SILVA, JULIANA DE FÁTIMA SANTOS",
          "VILAS BOAS, RENATA OZELAMI",
          "FAUSTINO DE MARIA, YARA NATÉRCIA LIMA",
          "JABES, DANIELA LEITE",
          "COSTA DE OLIVEIRA, REGINA"
        ]
      },
      {
        "ano": "2018",
        "titulo": "Dugong: a Docker image, based on Ubuntu Linux, focused on reproducibility and replicability for bioinformatics analyses",
        "doi": "10.1093/bioinformatics/btx554",
        "periodico": "Bioinformatics",
        "volume": "34",
        "paginas": "514-515",
        "autores": [
          "MENEGIDIO, FABIANO B",
          "JABES, DANIELA L",
          "COSTA DE OLIVEIRA, REGINA",
          "NUNES, LUIZ R"
        ]
      },
      {
        "ano": "2017",
        "titulo": "Functional and Evolutionary Characterization of a UDP-Xylose Synthase Gene from the Plant Pathogen Xylella fastidiosa</i> , Involved in the Synthesis of Bacterial Lipopolysaccharide",
        "doi": "10.1021/acs.biochem.6b00886",
        "periodico": "BIOCHEMISTRY",
        "volume": "56",
        "paginas": "6b00886-",
        "autores": [
          "ALENCAR, VALQUÍRIA CAMPOS",
          "DE OLIVEIRA, REGINA COSTA",
          "NUNES, LUIZ R.",
          "JABES, DANIELA LEITE",
          "Menegidio, Fabiano Bezerra",
          "SASSAKI, GUILHERME LANZI",
          "DE SOUZA, LUCAS RODRIGO",
          "PUZER, LUCIANO",
          "MENEGHETTI, MARIA CECÍLIA ZORÉL",
          "LIMA, MARCELO ANDRADE",
          "TERSARIOL, IVARNE LUIS DOS SANTOS"
        ]
      },
      {
        "ano": "2016",
        "titulo": "Draft Genome Sequence of 11399, a Transformable Citrus-Pathogenic Strain of",
        "doi": "10.1128/genomeA.01124-16",
        "periodico": "GENOME ANNOUNCEMENTS",
        "volume": "4",
        "paginas": "e01124-16-",
        "autores": [
          "NIZA, BÁRBARA",
          "MERFA, MARCUS V.",
          "ALENCAR, VALQUÍRIA C.",
          "MENEGIDIO, FABIANO B.",
          "NUNES, LUIZ R.",
          "MACHADO, MARCOS A.",
          "TAKITA, MARCO A.",
          "DE SOUZA, ALESSANDRA A."
        ]
      },
      {
        "ano": "2016",
        "titulo": "Thioridazine inhibits gene expression control of the cell wall signaling pathway (CWI) in the human pathogenic fungus Paracoccidioides brasiliensis",
        "doi": "10.1007/s00438-016-1184-1",
        "periodico": "MOLECULAR GENETICS AND GENOMICS",
        "volume": "291",
        "paginas": "1347-1362",
        "autores": [
          "JABES, DANIELA LEITE",
          "RODRIGUES, TIAGO",
          "COSTA DE OLIVEIRA, REGINA",
          "NUNES, LUIZ R.",
          "DE FREITAS OLIVEIRA, ANA CLAUDIA",
          "ALENCAR, VALQUÍRIA CAMPOS",
          "Menegidio, Fabiano Bezerra",
          "RENO, DÉBORA LILIANE SOUZA",
          "SANTOS, DAIENE SOUZA",
          "BARBOSA, DAVID ACIOLE",
          "VILAS BOAS, RENATA OZELAMI",
          "DE OLIVEIRA RODRIGUES CUNHA, RODRIGO LUIZ"
        ]
      }
    ],
    "softwares": [
      {
        "titulo": "Metagenome Cleaner",
        "ano": "2024",
        "finalidade": "Software científico para a limpeza de contaminantes para dados de metagenômica",
        "plataforma": "Python; Shell Script"
      },
      {
        "titulo": "IMCCAL - Calculadora de IMC",
        "ano": "2024",
        "finalidade": "Extensão do Google Chrome para cálculo de IMC",
        "plataforma": "HTML, Javascript, CSS, IndexedDB"
      },
      {
        "titulo": "Galaxy Launcher",
        "ano": "2024",
        "finalidade": "Galaxy Launcher is a Google Chrome extension designed to quickly access the Galaxy.org, Galaxy.eu, and Galaxy.org.au platforms.",
        "plataforma": "HTML, Javascript, CSS, IndexedDB"
      },
      {
        "titulo": "ResearchReflect",
        "ano": "2024",
        "finalidade": "Software para análise de dados bibliométricos",
        "plataforma": "Python; Shell Script"
      },
      {
        "titulo": "EasyOmics Diogenes Analysis Suite",
        "ano": "2023",
        "finalidade": "Software para análise de dados moleculares",
        "plataforma": "R"
      },
      {
        "titulo": "ParaDB: A manually curated database containing genomic annotation for the human pathogenic fungi Paracoccidioides spp.",
        "ano": "2019",
        "finalidade": "Database Biológico",
        "plataforma": "Docker, Mysql"
      },
      {
        "titulo": "AmpFLow: a containerized pipeline to assist in Reproducible and Replicable Microbiome research",
        "ano": "2019",
        "finalidade": "Pipeline para análises de microbioma e micobioma",
        "plataforma": "Docker"
      },
      {
        "titulo": "LncFLOW - an Integrated Bioinformatics Pipeline for prediction and identification of long non-coding RNAs (lncRNAs) from RNA-seq data",
        "ano": "2018",
        "finalidade": "Pipeline para análises de lncRNA",
        "plataforma": "Unix, Docker"
      },
      {
        "titulo": "BioPortainer: a Portainer fork, carrying templates for lightweight graphic management of bioinformatics-related Docker environments.",
        "ano": "2018",
        "finalidade": "Replicabilidade e Reprodutibilidade em pesquisas científicas",
        "plataforma": "Unix, Docker"
      },
      {
        "titulo": "Dugong: a Docker image, inspired on Ubuntu Linux, designed to enhance reproducibility and replicability during computational analyses of biological data",
        "ano": "2017",
        "finalidade": "Replicabilidade e Reprodutibilidade em pesquisas científicas",
        "plataforma": "Unix, Docker"
      }
    ],
    "patentes": [],
    "orientacoes_concluidas": [
      {
        "tipo": "Mestrado",
        "titulo": "Identification and characterization of long non-coding RNA in pathogenic fungi",
        "ano": "2020",
        "orientado": "Alexandre Santos Simeone",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Implementação de um banco de dados biológico para os fungos patogênicos negligenciados do gênero Paraoccidioides",
        "ano": "2021",
        "orientado": "Gledison Eric Teixeira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Prospecção e caracterização in silico de genes de resistência antimicrobiana e integrons em dados publicos de metagenômica veterinário",
        "ano": "2022",
        "orientado": "Paulo Sallarola Takao",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Prospecção e caracterização in silico de genes de resistência antimicrobiana e integrons em dados publicos de metagenômica de esgoto",
        "ano": "2022",
        "orientado": "Rafaela de Campos Oliveira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Arquitetura Taxonômica De Microbiomas De Leite Em  Escala Global: Uma Metanálise Baseada Em Dados De  Amplicon 16s Rrna",
        "ano": "2026",
        "orientado": "Renan Rodrigues Rocha",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise funcional do microbioma intestinal de camundongos durante o desenvolvimento de caquexia induzida por transplante de células de câncer pulmonar (LLC)",
        "ano": "2019",
        "orientado": "Rafael dos Santos Gonçalves",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise de replicabilidade e reprodutibilidade de um fluxo de trabalho para análises de microbioma utilizando dados de videiras apresentando sintomas da doença galha-de-coroa",
        "ano": "2019",
        "orientado": "Marcos Vinicius Yano",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Ensaios clínicos envolvendo diferentes medicamentos no tratamento de crianças acometidas por COVID-19: Uma revisão sistemática.",
        "ano": "2020",
        "orientado": "Marina Romi Zanatta Covalan",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Prospecção e caraterização in silico do genoma mitocondrial de fungos patogênicos do gênero Malassezia utilizando dados de sequenciamento públicos",
        "ano": "2021",
        "orientado": "Gabriel Huszcz",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Construção in silico de primers específicos para detecção de Candida auris através do método de amplificação isotérmica mediada por loop (LAMP)",
        "ano": "2021",
        "orientado": "Mariana Prado Vieira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "PROSPECÇÃO E CARACTERIZAÇÃO DE LONG NON-CODING RNAs (lncRNAs) NO FUNGO PATOGÊNICO Malassezia globosa",
        "ano": "2021",
        "orientado": "Letícia Rodrigues Gonçalves Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Estágio Supervisionado em Bioinformática e Biologia Computacional",
        "ano": "2021",
        "orientado": "Rafaela de Campos Oliveira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "O papel do fungo Malassezia restricta na microbiota fúngica humana: uma revisão narrativa",
        "ano": "2021",
        "orientado": "Ana Carolina de Oliveira Ramos Siqueira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do nível de conhecimento em primeiros socorros pelos acadêmicos da universidade de Mogi das Cruzes",
        "ano": "2021",
        "orientado": "Karen Kofity Grigoletto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do nível de conhecimento em primeiros socorros pelos acadêmicos da universidade de Mogi das Cruzes",
        "ano": "2021",
        "orientado": "Gustavo Ghirelli Nunes Galvão",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do nível de conhecimento em primeiros socorros pelos acadêmicos da universidade de Mogi das Cruzes",
        "ano": "2021",
        "orientado": "Victoria Sideri de Carvalho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do nível de conhecimento em primeiros socorros pelos acadêmicos da universidade de Mogi das Cruzes",
        "ano": "2021",
        "orientado": "Gregory Carvalho Rodrigues",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do nível de conhecimento em primeiros socorros pelos acadêmicos da universidade de Mogi das Cruzes",
        "ano": "2021",
        "orientado": "Maria Fernanda Marques Lima",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do nível de conhecimento em primeiros socorros pelos acadêmicos da universidade de Mogi das Cruzes",
        "ano": "2021",
        "orientado": "Pedro Rogatis Nunez",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Ensaios clínicos envolvendo diferentes medicamentos no tratamento de crianças acometidas por COVID-19: Uma revisão sistemática.",
        "ano": "2020",
        "orientado": "Luiza Regina Vilela Costa Tsuruda",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise de fatores de risco associados a pacientes portadores de nefropatia diabética atendidos na policlínica da UMC e prospecção de biomarcadores utilizados no diagnóstico.",
        "ano": "2020",
        "orientado": "Bruno Lima Hitzschky",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise de fatores de risco associados a pacientes portadores de nefropatia diabética atendidos na policlínica da UMC e prospecção de biomarcadores utilizados no diagnóstico.",
        "ano": "2020",
        "orientado": "Enrico Barreto Mioto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise de fatores de risco associados a pacientes portadores de nefropatia diabética atendidos na policlínica da UMC e prospecção de biomarcadores utilizados no diagnóstico.",
        "ano": "2020",
        "orientado": "Rodolfo Lima Fonseca",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise de fatores de risco associados a pacientes portadores de nefropatia diabética atendidos na policlínica da UMC e prospecção de biomarcadores utilizados no diagnóstico.",
        "ano": "2020",
        "orientado": "Willy Kin Chun Yeung",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Prospecção in silico de peptídeos antimicrobianos (AMP) do grilo comestível Gryllus bimaculatus",
        "ano": "2021",
        "orientado": "Robinson Antonio Bezerra Menegidio",
        "instituicao": "Universidade Anhembi Morumbi"
      },
      {
        "tipo": "Outras",
        "titulo": "Prospecção in silico de peptídeos antimicrobianos (AMP) do grilo comestível Gryllus bimaculatus",
        "ano": "2021",
        "orientado": "Daniela Sampaio Silva",
        "instituicao": "Instituto de Pesquisa e Educação em Saúde de São Paulo"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do conhecimento dos discentes de Medicina de diferentes universidades do Estado de São Paulo com relação a pandemia de COVID-19",
        "ano": "2021",
        "orientado": "Aline Placa Ferreira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do conhecimento dos discentes de Medicina de diferentes universidades do Estado de São Paulo com relação a pandemia de COVID-19",
        "ano": "2021",
        "orientado": "Gabriel Resende Aquino",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Perfil de ensaios clínicos focados em pacientes pediátricos durante a pandemia de COVID-19: uma análise integrativa",
        "ano": "2020",
        "orientado": "Daniela Sampaio Silva",
        "instituicao": "Instituto de Pesquisa e Educação em Saúde de São Paulo"
      },
      {
        "tipo": "Outras",
        "titulo": "Linfadenectomia retroperitoneal robótica no câncer testicular: relato de caso",
        "ano": "2021",
        "orientado": "Manoela Dalwitte Alvarenga",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Linfadenectomia retroperitoneal robótica no câncer testicular: relato de caso",
        "ano": "2021",
        "orientado": "Paula Costa Furtado",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Linfadenectomia retroperitoneal robótica no câncer testicular: relato de caso",
        "ano": "2021",
        "orientado": "Julia Bertuci Pereira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Qualidade de vida de estudantes de graduação em Medicina: uma análise por meio dos domínios do WHOQOL-bref",
        "ano": "2021",
        "orientado": "Jean da Silva Carneiro",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Qualidade de vida de estudantes de graduação em Medicina: uma análise por meio dos domínios do WHOQOL-bref",
        "ano": "2021",
        "orientado": "Júlia Périgo Chiuzi",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Qualidade de vida de estudantes de graduação em Medicina: uma análise por meio dos domínios do WHOQOL-bref",
        "ano": "2021",
        "orientado": "Luiz Eduardo Carmignani",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Qualidade de vida de estudantes de graduação em Medicina: uma análise por meio dos domínios do WHOQOL-bref",
        "ano": "2021",
        "orientado": "Mariana Prado Vieira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Qualidade de vida de estudantes de graduação em Medicina: uma análise por meio dos domínios do WHOQOL-bref",
        "ano": "2021",
        "orientado": "Vitória Arantes Carvalho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do conhecimento dos discentes de Medicina de diferentes universidades do Estado de São Paulo com relação a pandemia de COVID-19",
        "ano": "2021",
        "orientado": "Diego Antonio de Lima Martins",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do conhecimento dos discentes de Medicina de diferentes universidades do Estado de São Paulo com relação a pandemia de COVID-19",
        "ano": "2021",
        "orientado": "Fernando Luis Teixeira Arruda",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Influência da pandemia da COVID-19 na automedicação de estudantes de medicina de diferentes períodos",
        "ano": "2021",
        "orientado": "Pedro Guilherme Pomente Caselli",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Influência da pandemia da COVID-19 na automedicação de estudantes de medicina de diferentes períodos",
        "ano": "2021",
        "orientado": "Michael Sabbag Neto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Influência da pandemia da COVID-19 na automedicação de estudantes de medicina de diferentes períodos",
        "ano": "2021",
        "orientado": "Sara Godoi Righeto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Influência da pandemia da COVID-19 na automedicação de estudantes de medicina de diferentes períodos",
        "ano": "2021",
        "orientado": "Matheus Oliveira Paixão",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Além das marcas visíveis: uma análise da violência doméstica contra a mulher",
        "ano": "2022",
        "orientado": "Marina de Almeida Pinna Moretti",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Além das marcas visíveis: uma análise da violência doméstica contra a mulher",
        "ano": "2022",
        "orientado": "Graziela Chamone Zarate",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Além das marcas visíveis: uma análise da violência doméstica contra a mulher",
        "ano": "2022",
        "orientado": "Isabela Vincenzi de Souza",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Além das marcas visíveis: uma análise da violência doméstica contra a mulher",
        "ano": "2022",
        "orientado": "Giulia Tomaz Carvallo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Além das marcas visíveis: uma análise da violência doméstica contra a mulher",
        "ano": "2022",
        "orientado": "Julia Soler",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Impacto do Uso de Cigarro Eletrônico e Tabagismo na Comunidade Microbiana da Saliva Humana: Uma Análise Metagenômica",
        "ano": "2023",
        "orientado": "Alessandra de Souza Fernandes",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Influência da pandemia da COVID-19 na automedicação de estudantes de medicina de diferentes períodos",
        "ano": "2021",
        "orientado": "André Lucas de Moraes Moro",
        "instituicao": "Universidade de Mogi das Cruzes"
      }
    ],
    "orientacoes_andamento": []
  },
  "alessandro": {
    "id": "Prof Alessandro.xml",
    "lattes_id": "0994881596597293",
    "data_atualizacao": "18/09/2026",
    "nome": "Alessandro Pereira da Silva",
    "nome_citacoes": [
      "SILVA, A. P.",
      "SILVA, ALESSANDRO P",
      "A. P. Silva",
      "Silva, Alessandro Pereira",
      "Silva, A. P.",
      "SILVA, ALESSANDRO",
      "SILVA, A.P.",
      "Alessandro Pereira da Silva",
      "DA SILVA, ALESSANDRO PEREIRA",
      "SILVA, ALESSANDRO P. DA",
      "SILVA, ALESSANDRO PEREIRA DA",
      "Silva, A.",
      "Alessandro P. da Silva",
      "da Silva, Alessandro P.",
      "Silva, Alessandro P.",
      "Alessandro P Silva",
      "Silva AP",
      "AP Silva",
      "Alessandro Pereira Silva",
      "Silva APD",
      "P. DA SILVA, ALESSANDRO",
      "PEREIRA DA SILVA, ALESSANDRO"
    ],
    "orcid": "https://orcid.org/0000-0003-4766-8617",
    "nacionalidade": "Brasil",
    "resumo": "Possuo graduação em Engenharia da Computação (2003), mestrado em Engenharia Biomédica (2007), doutorado em Engenharia Biomédica (2009) pela Universidade de Mogi das Cruzes (UMC) e pós-doutorado em Engenharia Biomédica pela Pontifícia Universidade Católica de São Paulo (2016). Atualmente, sou docente e pesquisador no Programa Integrado de Engenharia Biomédica da UMC, onde coordeno o laboratório de ambientes virtuais e tecnologia assistiva (LAVITA) no Núcleo de Pesquisas Tecnológicas (NPT). No PPG Engenharia biomédica eu leciono as seguintes disciplinas: Transdução de grandezas biomédicas, Introdução à informática médica, Introdução à técnicas de ciências exatas, Tecnologia assistiva e Escrita científica. Assim como oriento alunos de Mestrado e Doutorado. Como pesquisador, tenho experiência na área de Engenharia Biomédica, com ênfase em Instrumentação biomédica e tecnologias assistivas, atuando principalmente nos seguintes temas: tecnologia assistiva, processamento de imagens médicas e desenvolvimento de simulações computacionais para auxílio ao diagnóstico e aos portadores de deficiência física e também no desenvolvimento de tecnologias computacionais e ambientes virtuais aplicados à reabilitação. Atuei como coordenador de mestrado profissional em Bioengenharia na Universidade Brasil (2016 - 2017).  Nos cursos de graduação da Universidade de Mogi das Cruzes leciono para a Engenharia Elétrica, Superior em Tecnologia em Automação Industrial, Engenharia de Software, Sistemas de Informação e Superior em Análise e Desenvolvimento de Sistemas. Nesses cursos leciono as seguintes disciplinas: Eletrônica analógica, Sistemas digitais, Sistemas elétricos e magnéticos, Microcontroladores, Lógica de programação (python), Administração de sistemas de informação, Gestão de projetos, Engenharia de Software. Ainda na graduação, oriento alunos de iniciação científica e também sou responsável pelo Trabalho de conclusão de curso (TCC) dos cursos de Sistemas de informação e de Engenharia de software da Universidade de Mogi das Cruzes. Fundador e Chief Executive Officer (CEO) da startup Kerygma Technology que visa desenvolver soluções tecnológicas por meio da criação de dispositivos, sistemas e softwares que auxiliam no diagnóstico, tratamento e reabilitação musculoesquelética.",
    "instituicao": "Universidade de Mogi das Cruzes",
    "departamento": "Centro de Ciências Exatas e de Tecnologia",
    "cidade": "Mogi das Cruzes",
    "uf": "SP",
    "formacoes": [
      {
        "tipo": "Pos Doutorado",
        "curso": "",
        "instituicao": "Pontifícia Universidade Católica de São Paulo",
        "ano": "2016"
      },
      {
        "tipo": "Doutorado",
        "curso": "Engenharia Biomédica",
        "instituicao": "Universidade de Mogi das Cruzes",
        "ano": "2009"
      },
      {
        "tipo": "Mestrado",
        "curso": "Engenharia Biomédica",
        "instituicao": "Universidade de Mogi das Cruzes",
        "ano": "2007"
      },
      {
        "tipo": "Graduacao",
        "curso": "Engenharia de Computação",
        "instituicao": "Universidade de Mogi das Cruzes",
        "ano": "2003"
      }
    ],
    "areas": [
      "Engenharia Biomédica",
      "ENGENHARIAS"
    ],
    "metricas": {
      "artigos": 73,
      "livros": 0,
      "capitulos": 18,
      "eventos": 89,
      "softwares": 21,
      "patentes": 1,
      "orientacoes_concluidas": 54,
      "orientacoes_andamento": 0
    },
    "artigos": [
      {
        "ano": "2026",
        "titulo": "CONTRIBUTIONS OF BEHAVIORAL NUTRITION TO THE MENTAL HEALTH OF BARIATRIC PATIENTS: INTEGRATIVE LITERATURE REVIEW",
        "doi": "10.36238/2359-5787.2026.v12n61.1900",
        "periodico": "Revista Acadêmica Online",
        "volume": "12",
        "paginas": "e1900-",
        "autores": [
          "POIANA, BRUNA MARIANA BRAGA RÊGO",
          "SANTIAGO, TATIANA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MARTINI, SILVIA CRISTINA",
          "Scardovelli, Terigi Augusto"
        ]
      },
      {
        "ano": "2026",
        "titulo": "Balance analysis system with a sensorized wobbleboard and an exergame",
        "doi": "10.1007/s42600-026-00497-9",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "42",
        "paginas": "50-",
        "autores": [
          "DA SILVA, ANDRÉ ROBERTO FERNANDES",
          "DA SILVA, ALESSANDRO PEREIRA",
          "DE OLIVEIRA GONZALEZ, TABAJARA",
          "DA SILVA BOSCHI, SILVIA REGINA MATOS",
          "SILVA, LUANA A. ALVES",
          "DOS SANTOS VIEIRA, RAQUEL",
          "SILVA, STEFANI LOPES",
          "DE ALMEIDA MOURA, LUAN",
          "MARTINI, SILVIA CRISTINA",
          "Scardovelli, Terigi Augusto"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Importância do acolhimento com classificação de risco nos serviços de urgência e emergência",
        "doi": "10.55905/revconv.18n.1-007",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "18",
        "paginas": "e14257-",
        "autores": [
          "ABRAHAO, K.",
          "GOUET, J. B.",
          "GOUET, M. C. M. S.",
          "MARTINI, S. C.",
          "SILVA, A.P.",
          "SCARDOVELLI, T. A.",
          "GONZALEZ, T. O.",
          "ANACLETO, G. M. C.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Proposal of a Serious Game for Dynamic Balance Training Using a Force Platform: A Pilot Study",
        "doi": "10.1089/g4h.2023.0194",
        "periodico": "Games for Health Journal",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "VALÉRIO, MARIANA DA PALMA",
          "SCARDOVELLI, T. A.",
          "SILVA, A. P.",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "RIBEIRO, DANILO LUQUE",
          "FERNANDES DA SILVA, ANDRÉ ROBERTO",
          "MOURA, LUAN DE ALMEIDA",
          "ALEXANDRE, GABRIELLI DELBONE",
          "COPESKI, THAMIRES DA SILVA",
          "LONGUINHO, GIOVANNA CORDEIRO",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "DOSE FÁCIL: A LEARNING TOOL FOR VETERINARY STUDENTS",
        "doi": "10.56238/arev7n3-307",
        "periodico": "ARACÊ - DIREITOS HUMANOS EM REVISTA",
        "volume": "7",
        "paginas": "15516-15530",
        "autores": [
          "VALÉRIO, MARIANA DA PALMA",
          "Scardovelli, Terigi Augusto",
          "MORAES, ISABELLA TITICO",
          "MOURA, LUAN DE ALMEIDA",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "DA SILVA, ALESSANDRO PEREIRA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Efeitos Motores e cognitivos relacionados com o treino musical: uma revisão narrativa",
        "doi": "10.33871/2317417X.2025.22.9751",
        "periodico": "INCANTARE",
        "volume": "22",
        "paginas": "e9751-",
        "autores": [
          "Moniz, Y. F.",
          "SILVA, A. P.",
          "MARTINI, S. C.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Comparação entre o aplicativo Physio Pro com os aplicativos existentes nas plataformas iOS e Android",
        "doi": "10.59464/2359-4632.2025.3529",
        "periodico": "REVISTA CIENTIFICA INTEGRADA UNAERP CAMPUS GUARUJÁ",
        "volume": "8",
        "paginas": "e202514-",
        "autores": [
          "MOREIRA, LUCYANA DE MIRANDA",
          "MARTINI, SILVIA CRISTINA",
          "ALVES, NAZARETI PEREIRA FERREIRA",
          "Silva, Alessandro Pereira",
          "Scardovelli, Terigi Augusto",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Uso de aplicativo como recurso para o tratamento de incontinência urinária em gestantes",
        "doi": "10.55892/jrg.v8i19.2345",
        "periodico": "Revista JRG de Estudos Acadêmicos",
        "volume": "8",
        "paginas": "e082345-",
        "autores": [
          "NEVES, KELLY GONÇALVES MARTINEZ",
          "PRADO, ELI CRISTINA RIBEIRO DO",
          "MARTINI, SILVIA CRISTINA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "Scardovelli, Terigi Augusto",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Validação de dispositivo auxiliar para a mão do terapeuta na realização de técnicas de liberação miofascial",
        "doi": "10.55905/revconv.18n.5-268",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "18",
        "paginas": "e18014-",
        "autores": [
          "ROCHA, TATHIANE NAYARA DE OLIVEIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "ROCHA, SILVIO JOSÉ SANTOS DA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "MARTINI, SILVIA CRISTINA",
          "Scardovelli, Terigi Augusto",
          "GONZALEZ, TABAJARA DE OLIVEIRA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Acompanhamento de pacientes pós bariátricos e deficiências nutricionais: Uma revisão da literatura",
        "doi": "",
        "periodico": "REVISTA BRASILEIRA DE OBESIDADE, NUTRIÇÃO E EMAGRECIMENTO",
        "volume": "19",
        "paginas": "672-683",
        "autores": [
          "Erica da Costa Aguiar Oliveira",
          "Tatiana Santiago",
          "Alessandro Pereira da Silva",
          "Silvia Cristina Martini",
          "Silvia Regina Matos da Silva Boschi",
          "Terigi Augusto Scardovelli"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Telerehabilitation in musculoskeletal disorders: a systematic review and meta-analysisTelerehabilitación en trastornos musculoesqueléticos: una revisión sistemática y metanálisisTelerreabilitação nos distúrbios musculoesqueléticos: uma revisão sistemática e meta-análise",
        "doi": "10.59681/2175-4411.v17.2025.1402",
        "periodico": "journal of health informatics",
        "volume": "17",
        "paginas": "1402-",
        "autores": [
          "MOREIRA, LUCYANA DE MIRANDA",
          "Silva, Alessandro Pereira",
          "Scardovelli, Terigi Augusto",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Construction and adaptation of a robotic equipment for blocking execution in sitting volleyball practices",
        "doi": "10.1007/s42600-023-00332-5",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "DE OLIVEIRA, RONALDO GONÇALVES",
          "Silva, Alessandro Pereira",
          "Scardovelli, Terigi Augusto",
          "MARTINI, SILVIA CRISTINA",
          "DE MIRANDA MOREIRA, LUCYANA",
          "TEIXEIRA, WELLINGTON CÉLIO RODRIGUES",
          "DA SILVA BOSCHI, SILVIA REGINA MATOS"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Moniz Game: Usability and User Experience Evaluation of a Musical Game for Motor Coordination",
        "doi": "10.1089/g4h.2023.0133",
        "periodico": "Games for Health Journal",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "MONIZ, YASMIM FERNANDES",
          "GUNJI, BRUNO TOSHIO GOMES",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCADOVELLI, TERIGI AUGUSTO",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Acomodações, intervenções e modificações em sala de aula para estudantes universitários com o Transtorno do Déficit de Atenção com Hiperatividade - TDAH: uma revisão sistemática",
        "doi": "10.54033/cadpedv21n4-099",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e3808-",
        "autores": [
          "FERREIRA, JOÃO CARLOS PEIXOTO",
          "MARTINI, SÍLVIA CRISTINA",
          "GALLO, ROSÂNGELA PEIXOTO",
          "FERREIRA, ROSILENE PEIXOTO",
          "ROCHA, GABRIELLE PEIXOTO",
          "PRADO, ANA CAROLINA DO",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SANTOS, CLAYTON EDUARDO DOS",
          "BOSCHI, SÍLVIA REGINA MATOS DA SILVA",
          "Scardovelli, Terigi Augusto"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Knowledge Of Brazilian University Professors About Attention Deficit Hyperactivity Disorder - Adhd",
        "doi": "10.9790/487X-2605020111",
        "periodico": "IOSR Journal of Business and Management",
        "volume": "26",
        "paginas": "1-11",
        "autores": [
          "FERREIRA, J. C. P.",
          "COUTINHO, R.",
          "GALLO, R. P.",
          "FERREIRA, R. P.",
          "ROCHA, G. P.",
          "SILVA, A.P.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T. A.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Uso de aplicativos e softwares para práticas clínicas e educacionais na medicina veterinária: uma revisão integrativa",
        "doi": "10.54033/cadpedv21n5-142",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e4169-",
        "autores": [
          "MORAES, ISABELLA TITICO",
          "MARTINI, SILVIA CRISTINA",
          "VALÉRIO, MARIANA DA PALMA",
          "MOURA, LUAN DE ALMEIDA",
          "CAMPOS, HIGOR BARRETO",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "Scardovelli, Terigi Augusto",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Aplicativos móveis para orientação de mulheres no período do climatério e menopausa",
        "doi": "10.54033/cadpedv21n10-428",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e10002-",
        "autores": [
          "SILVA, J. N.",
          "SCARDOVELLI, T. A.",
          "SANTOS, M. F.",
          "SILVA, A.P.",
          "BOSCHI, S. R. M. S.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2024",
        "titulo": "O uso da gameterapia para diminuir a oscilação postural",
        "doi": "10.25248/reas.e16983.2024",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "24",
        "paginas": "e16983-",
        "autores": [
          "MOURA, LUAN DE ALMEIDA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "REIS, PAULO CESAR",
          "SILVA, ANDRÉ ROBERTO FERNANDES DA",
          "VALÉRIO, MARIANA DA PALMA",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "MARTINI, SILVIA CRISTINA",
          "Scardovelli, Terigi Augusto",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Uma visão geral dos dispositivos robóticos para reabilitação do cotovelo",
        "doi": "10.25248/reas.e18292.2024",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "24",
        "paginas": "e18292-",
        "autores": [
          "SANTOS, M. F.",
          "PEDROSO, B. M.",
          "MARTINI, S. C.",
          "BOSCHI, S. R. M. S.",
          "SILVA, A.P.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Aplicativo móvel: caderneta de saúde digital do adolescente surdo",
        "doi": "10.1590/1980-220x-reeusp-2023-0366pt",
        "periodico": "REVISTA DA ESCOLA DE ENFERMAGEM DA USP",
        "volume": "58",
        "paginas": "1-8",
        "autores": [
          "YASUE, THIAGO YUKIO MURAYAMA",
          "OLIVEIRA, CLÁUDIA DOS SANTOS",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "Scardovelli, Terigi Augusto",
          "BISSACO, MARCIA APARECIDA SILVA",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "SILVA, ROBSON RODRIGUES DA",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Proposta de sistema microcontrolado para monitoramento e controle de pressão arterial utilizando Python",
        "doi": "10.55905/rdelosv17.n60-022",
        "periodico": "DELOS: DESARROLLO LOCAL SOSTENIBLE",
        "volume": "17",
        "paginas": "e2104-",
        "autores": [
          "VALÉRIO, MARIANA DA PALMA",
          "Scardovelli, Terigi Augusto",
          "MOURA, LUAN DE ALMEIDA",
          "MORAES, ISABELLA TITICO",
          "SILVA, ANDRÉ ROBERTO FERNANDES DA",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Analysis of anticipatory and compensatory postural adjustment in women of different age groups using surface electromyography.",
        "doi": "10.1088/2057-1976/ad8ce2",
        "periodico": "BIOMEDICAL PHYSICS & ENGINEERING EXPRESS",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "MOURA, LUAN DE ALMEIDA",
          "DE OLIVEIRA GONZALEZ, TABAJARA",
          "DA SILVA, ALESSANDRO PEREIRA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "FERNANDES DA SILVA, ANDRÉ ROBERTO",
          "DA PALAM VALERIO, MARIANA",
          "BARRETO CAMPOS, HIGOR",
          "DE CAMARGO, MATHEUS LEONARDO ALVES",
          "MORAES, ISABELLA TITICO",
          "MARTINI, SILVIA CRISTINA",
          "DA SILVA BOSCHI, SILVIA REGINA MATOS"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Mocks fluido-mecânicos de simulação do sistema cardiovascular: uma revisão de literatura",
        "doi": "10.55905/cuadv16n13-018",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "16",
        "paginas": "e6742-",
        "autores": [
          "VIANA, F. M.",
          "CAMARGO, M. L. A.",
          "ROCHA, S. J. S.",
          "SILVA, A.P.",
          "SILVA, R. R."
        ]
      },
      {
        "ano": "2024",
        "titulo": "A identificação dos estágios de envelhecimento reprodutivo: desafios e implicações para a saúde da mulher",
        "doi": "10.55905/cuadv16n13-092",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "16",
        "paginas": "e6965-",
        "autores": [
          "SILVA, J. N.",
          "SCARDOVELLI, T. A.",
          "VIANA, J. S.",
          "SILVA, A.P.",
          "GONZALEZ, T. O.",
          "BOSCHI, S. R. M. S.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Reabilitação baseada em jogos digitais para crianças com encefalopatia crônica não evolutiva da infância: uma revisão sistemática",
        "doi": "10.18265/1517-0306a2022id7300",
        "periodico": "PRINCIPIA (JOÃO PESSOA)",
        "volume": "61",
        "paginas": "915-930",
        "autores": [
          "MONIZ, YASMIM FERNANDES",
          "GUNJI, BRUNO TOSHIO GOMES",
          "SILVA, ALESSANDRO PEREIRA DA",
          "Scardovelli, Terigi Augusto",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Desenvolvimento de uma bengala branca com ponteira omnidirecional mecânica (?Omni-Tip?) para deficientes visuais",
        "doi": "10.5281/zenodo.7897294",
        "periodico": "REVISTA FISIO&TERAPIA",
        "volume": "122",
        "paginas": "1-",
        "autores": [
          "ALVES, C. C.",
          "BOCK, E. G. P.",
          "SCARDOVELLI, T. A.",
          "SILVA, A.P.",
          "BOSCHI, S. R. M. S.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2023",
        "titulo": "TECNOLOGIAS ASSISTIVAS DESENVOLVIDAS NA ESCOLA PARA PROMOÇÃO DA INCLUSÃO SOCIAL",
        "doi": "10.56083/rcv3n6-097",
        "periodico": "CONTEMPORÂNEA - REVISTA DE ÉTICA E FILOSOFIA POLÍTICA",
        "volume": "3",
        "paginas": "6497-6532",
        "autores": [
          "ALVES, CLAUDEMIR CLAUDINO",
          "DE RESENDE JUNIOR, RICARDO AGOSTINHO",
          "CAVALCANTI, FABIANA RODRIGUES SILVA DE MIRANDA",
          "DA SILVA, ALESSANDRO PEREIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "Scardovelli, Terigi Augusto",
          "DA SILVA, ROBSON RODRIGUES",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "TRANSFERÊNCIA DE APRENDIZADO PARA CATEGORIZAÇÃO DE PATOLOGIAS",
        "doi": "10.56083/rcv3n9-022",
        "periodico": "CONTEMPORÂNEA - REVISTA DE ÉTICA E FILOSOFIA POLÍTICA",
        "volume": "3",
        "paginas": "13857-13878",
        "autores": [
          "LIMA, CÉSAR ALEXANDRE SILVA",
          "MARTINI, SILVIA CRISTINA",
          "DOS SANTOS, CLAYTON EDUARDO",
          "BISSACO, MÁRCIA APARECIDA SILVA",
          "AMATE, FLÁVIO CÉZAR",
          "GIANCOLI, ANA PAULA MULLER",
          "DA SILVA, ALESSANDRO PEREIRA",
          "Scardovelli, Terigi Augusto",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Conteúdo on-line para curso de imagens pneumológicas",
        "doi": "10.55905/revconv.16n.9-265",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "16",
        "paginas": "18303-18313",
        "autores": [
          "LEITE, LORRANE SOUZA",
          "MARTINI, SILVIA CRISTINA",
          "SANTOS, ANA MARIA VITARELLI DE CASTRO EMERY",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "DA SILVA, ALESSANDRO PEREIRA",
          "Scardovelli, Terigi Augusto",
          "BISSACO, MÁRCIA APARECIDA DA SILVA",
          "MOREIRA, LUCYANA DE MIRANDA",
          "DE LIMA, DAYANA APARECIDA MACHADO",
          "BORGES, ROBSON FERREIRA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Tecido adiposo marrom: uma alternativa para manutenção de peso em pacientes com obesidade",
        "doi": "10.25248/reas.e13720.2023",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "23",
        "paginas": "e13720-",
        "autores": [
          "SANTIAGO, TATIANA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "MOREIRA, LUCYANA DE MIRANDA",
          "DENARDO, VIVIAN CLEIA BENITES",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MARTINI, SILVIA CRISTINA",
          "Scardovelli, Terigi Augusto"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Revisão integrativa sobre jogos em análise do comportamento",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "08",
        "paginas": "01-10",
        "autores": [
          "GOUET, J. B.",
          "ABRAHAO, K.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "MARTINI, S. C.",
          "GONZALEZ, T. O.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Automated methodology for breast segmentation and mammographic density classification using co-occurrence and statistical and SURF descriptors",
        "doi": "10.1504/ijbet.2022.10048891",
        "periodico": "International Journal of Biomedical Engineering and Technology",
        "volume": "39",
        "paginas": "213-248",
        "autores": [
          "PAVUSA JUNIOR, R.",
          "FERNANDES, J. C. L.",
          "SILVA, A.P.",
          "BISSACO, M. A. S.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T. A.",
          "RODRIGUES, S. C. M."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Risk Factor Forecasting System for Pressure Injuries Through Artificial Neural Network",
        "doi": "10.1109/tla.2022.9675469",
        "periodico": "IEEE Latin America Transactions",
        "volume": "20",
        "paginas": "634-642",
        "autores": [
          "PEDROSO, B. M.",
          "GUAZZELLI, J. V. S.",
          "SILVA, A.P.",
          "BOSCHI, S. R. M. S.",
          "MARTINI, S. C.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Uso de imagens infravermelhas em tendinopatia calcânea traumática",
        "doi": "10.33448/rsd-v11i5.27829",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e9011527829-",
        "autores": [
          "SILVA, J. N.",
          "MARTINS, R. A. B. L.",
          "MARTINI, S. C.",
          "BOSCHI, S. R. M. S.",
          "SILVA, A.P.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Gastroplastia no Brasil: um retrato da evolução do estado nutricional",
        "doi": "10.25248/reas.e9786.2022",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "15",
        "paginas": "e9786-",
        "autores": [
          "SANTIAGO, T.",
          "SILVA, A.P.",
          "SZEGO, T.",
          "ANTONACCI JUNIOR, E.",
          "BASSOLS, G. F.",
          "SILVA, T. G.",
          "BOSCHI, S. R. M. S.",
          "MARTINI, S. C.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Dispositivos musicais na reabilitação neurológica no membro superior: uma revisão integrativa",
        "doi": "10.33448/rsd-v11i5.27907",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e10011527907-",
        "autores": [
          "MONIZ, Y. F.",
          "SILVA, A.P.",
          "GUNJI, B. T. G.",
          "SCARDOVELLI, T. A.",
          "MARTINI, S. C.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Design of automated adaptive controller for mean arterial pressure in hypotensive situations using a vasopressor drug",
        "doi": "10.1007/s42600-022-00216-0",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "COELHO, MARCELO SARAIVA",
          "DA SILVA, SAMUEL JUSTINO",
          "Scardovelli, Terigi Augusto",
          "DA SILVA BOSCHI, SILVIA REGINA MATOS",
          "Rodrigues, Silvia Cristina Martini",
          "DA SILVA, ALESSANDRO PEREIRA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Dispositivo de barras paralelas com estímulo vibratório controlado via Interface Homem Máquina (IHM) para reabilitação de neuropatologias",
        "doi": "10.33448/rsd-v11i7.29964",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e28411729964-",
        "autores": [
          "MORAIS, ANTONIO VINÍCIUS DE",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MOURA, LUAN DE ALMEIDA",
          "MONIZ, YASMIM FERNANDES",
          "MARTINI, SILVIA CRISTINA",
          "Scardovelli, Terigi Augusto",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Método não invasivo versus método invasivo para medição de pressão arterial em roedores: uma revisão integrativa da literatura",
        "doi": "10.33448/rsd-v11i8.30789",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "1-8",
        "autores": [
          "Mariana da Palma Valério",
          "Silvia Cristina Martini",
          "Silvia Regina Matos da Silva Boschi",
          "Terigi Augusto Scardovelli",
          "Alessandro Pereira da Silva"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Development of a dynamic balance analysis and training system through posturography in a bipodal force platform with biaxial rotation",
        "doi": "10.1007/s42600-022-00223-1",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "ISHIZAKI, MARCIO TADASHI",
          "DA SILVA, ANDRÉ ROBERTO FERNANDES",
          "DE ALMEIDA MOURA, LUAN",
          "DOS REIS, PAULO CESAR",
          "LAZZARESCHI, LEANDRO",
          "DA SILVA BOSCHI, SILVIA REGINA MATOS",
          "MARTINI, SILVIA CRISTINA",
          "Scardovelli, Terigi Augusto",
          "DA SILVA, ALESSANDRO PEREIRA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Dispositivos para ortostatismo para pessoas com mobilidade reduzida: revisão integrativa",
        "doi": "10.33448/rsd-v11i9.30278",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e35911930278-",
        "autores": [
          "ALVES, NAZARETI PEREIRA FERREIRA",
          "CECÍLIO, MARIANA DE MORAES",
          "MOREIRA, LUCYANA DE MIRANDA",
          "MARTINI, SILVA CRISTINA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "Scardovelli, Terigi Augusto",
          "SILVA, SÉRGIO GOMES DA",
          "LIRA NETO, JOSÉ CLAUDIO GARCIA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2021",
        "titulo": "Construção de um equipamento para auxiliar no treinamento de ataque e defesa para a modalidade voleibol sentado",
        "doi": "",
        "periodico": "COLEÇÃO PESQUISA EM EDUCAÇÃO FÍSICA",
        "volume": "20",
        "paginas": "47-54",
        "autores": [
          "OLIVEIRA, R. G.",
          "SILVA, A.P.",
          "SCARDOVELLI, T. A.",
          "MARTINI, S. C.",
          "BOSCHI, S.R.M.S."
        ]
      },
      {
        "ano": "2021",
        "titulo": "Impact of a virtual zoo on the learning and effectiveness motivation of children with reading difficulties in the initial phase of literacy",
        "doi": "",
        "periodico": "HUMANIDADES & INOVAÇÃO",
        "volume": "8",
        "paginas": "314-337",
        "autores": [
          "Andréia Miranda Domingues",
          "Alessandro Pereira da Silva",
          "Silvia Cristina Martini",
          "Terigi Augusto Scardovelli",
          "Marcus Vasconcelos de Castro",
          "Marcia Aparecida Silva Bissaco"
        ]
      },
      {
        "ano": "2021",
        "titulo": "The use and impact of mHealth by community health workers in developing and least developed countries: a systematic review",
        "doi": "10.1007/s42600-021-00154-3",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "37",
        "paginas": "563-582",
        "autores": [
          "ABREU, F. D. L.",
          "BISSACO, M. A. S.",
          "Silva, A. P.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T. A.",
          "SANTOS, M. F.",
          "RODRIGUES, C. C. M.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Interface assistiva para auxiliar a formação profissional de pessoas com limitações motoras",
        "doi": "",
        "periodico": "HUMANIDADES & INOVAÇÃO",
        "volume": "7",
        "paginas": "46-51",
        "autores": [
          "ALEXANDRUK, M.",
          "SCARDOVELLI, T. A.",
          "SILVA, A. R. F.",
          "MARTINI, S. C.",
          "MARTUCCI, H. N.",
          "BOSCHI, S. R. M. S.",
          "SILVA, A.P."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Percepções dos agentes comunitários de saúde sobre as tecnologias de informação e comunicação na atenção primária à saúde - uma pesquisa exploratória",
        "doi": "",
        "periodico": "HUMANIDADES & INOVAÇÃO",
        "volume": "8",
        "paginas": "32-45",
        "autores": [
          "ABREU, F. D. L.",
          "ZANIN, N. B.",
          "BISSACO, M. A. S.",
          "SILVA, A.P.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T. A.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Mechanical tensile test of the body adhesive elastic tape",
        "doi": "",
        "periodico": "INTERNATIONAL JOURNAL OF RECENT SCIENTIFIC RESEARCH",
        "volume": "11",
        "paginas": "37150-37157",
        "autores": [
          "MORINI JUNIOR, N.",
          "MARTINI, S. C.",
          "MARTINS, R. A. B. L.",
          "CANUTO, G.",
          "SILVA, R. R.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S.",
          "SILVA, A.P."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Real-time simulation device for mean arterial pressure of hypotensive patient subjected phenylephrine infusion",
        "doi": "10.1049/el.2020.1383",
        "periodico": "ELECTRONICS LETTERS",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "COELHO, M.S.",
          "SILVA, S.J.",
          "BOSCHI, S.R.M.S.",
          "RODRIGUES, S.C.M.",
          "SCARDOVELLI, T.A.",
          "BARBUY, H.S.",
          "SILVA, A.P."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Jogos sérios brasileiros para auxílio do diagnóstico e tratamento de TDAH:  Revisão integrativa",
        "doi": "10.26514/inter.v11i32.4298",
        "periodico": "INTERFACES DA EDUCAÇÃO",
        "volume": "11",
        "paginas": "60-78",
        "autores": [
          "THEODORIO, D. P.",
          "SILVA, A.P.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Prospects and Risks of Injuries in the Resumption of High-performance Sports Activities After Social Isolation due to COVID-19 Pandemic",
        "doi": "10.34119/bjhrv3n4-298",
        "periodico": "Brazilian Journal of health Review",
        "volume": "3",
        "paginas": "10319-10330",
        "autores": [
          "ATTI, G. P.",
          "SILVA, A.P.",
          "LAZZARESCHI, L.",
          "FILONI, E."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Distribution of mass and center of pressure in dynamic balance presented by an instrumented wobble board",
        "doi": "10.1007/s42600-020-00092-6",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "",
        "paginas": "1-",
        "autores": [
          "SILVA, A. R. F.",
          "LAZZARESCHI, L.",
          "BISCHOF, K. P.",
          "ISHIZAKI, M. T.",
          "MARTINI, S. C.",
          "SCARDOVELLI, T. A.",
          "Boschi, Silvia R. M. S.",
          "SILVA, A.P."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Montelukast, Leukotriene Inhibitor, Reduces LPS-Induced Acute Lung Inflammation and Human Neutrophil Activation",
        "doi": "10.1016/j.arbres.2019.05.003",
        "periodico": "ARCHIVOS DE BRONCONEUMOLOGIA",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "DAVINO-CHIOVATTO, J. E.",
          "OLIVEIRA, A. P. L.",
          "SILVA, A.P.",
          "CONSOLIM-COLOMBO, F. M.",
          "AIMBIRE, F.",
          "CASTRO-FARIA-NETO, H. C.",
          "VIEIRA, R. P.",
          "OLIVEIRA-JUNIOR, M. C.",
          "MACKENZIE, B.",
          "SANTOS-DIAS, A.",
          "ALMEIDA-OLIVEIRA, A. R.",
          "AQUINO-JUNIOR, J. C. J.",
          "BRITO, A. A.",
          "RIGONATO-OLIVEIRA, N. C.",
          "DAMACENO-RODRIGUES, N. R."
        ]
      },
      {
        "ano": "2019",
        "titulo": "ALTRIRAS: A Computer Game for Training Children with Autism Spectrum Disorder in the Recognition of Basic Emotions",
        "doi": "10.1155/2019/4384896",
        "periodico": "INTERNATIONAL JOURNAL OF COMPUTER GAMES TECHNOLOGY",
        "volume": "2019",
        "paginas": "1-16",
        "autores": [
          "ALMEIDA, LEANDRO M.",
          "SILVA, DIEGO P. DA",
          "THEODÓRIO, DAIENY P.",
          "SILVA, WOLLEY W.",
          "RODRIGUES, SILVIA CRISTINA M.",
          "SCARDOVELLI, TERIGI A.",
          "SILVA, ALESSANDRO P. DA",
          "BISSACO, MARCIA APARECIDA S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Whole-body vibration on parallel bar device for gait and balance rehabilitation in stroke patients",
        "doi": "10.1007/s42600-019-00014-1",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "MORAIS, A. V.",
          "TOMAZ, G.",
          "LAZZARESCHI, L.",
          "ALMEIDA, D. V.",
          "SANTOS, M. F.",
          "BOSCHI, S. R. M. S.",
          "MARTINI, S. C.",
          "SCARDOVELLI, T. A.",
          "SILVA, A.P."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Simple adaptive PI controller development and evaluation for mean arterial pressure regulation",
        "doi": "10.1007/s42600-019-00017-y",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "SILVA, S. J.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S.",
          "RODRIGUES, S. C. M.",
          "SILVA, A.P."
        ]
      },
      {
        "ano": "2019",
        "titulo": "A virtual environment to motivate children's handgrip",
        "doi": "",
        "periodico": "AMERICAN JOURNAL OF ENGINEERING RESEARCH",
        "volume": "8",
        "paginas": "157-164",
        "autores": [
          "MATOS, M. P.",
          "SILVA, A.P.",
          "CROCHI, D.",
          "SANTOS, M. F.",
          "MARTINI, S. C.",
          "SCARDOVELLI, T.A.",
          "BOSCHI, SILVIA"
        ]
      },
      {
        "ano": "2019",
        "titulo": "Development and pilot testing of a new electromyography device ? EMG Lavita",
        "doi": "",
        "periodico": "IOSR JOURNAL OF ENGINEERING",
        "volume": "9",
        "paginas": "37-44",
        "autores": [
          "CROCHI, D.",
          "SCARDOVELLI, T. A.",
          "SILVA, A.P.",
          "SILVA, T. R. S.",
          "SILVA, A. R. F.",
          "SANTOS, M. F.",
          "OTA, N. H.",
          "BISCHOF, K.",
          "MOURA, L. A.",
          "MARTINI, S. C.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Development and pilot testing of a new device for q-angle measurement",
        "doi": "10.9790/9622-0911026268",
        "periodico": "INTERNATIONAL JOURNAL OF ENGINEERING RESEARCH AND APPLICATIONS (IJERA)",
        "volume": "9",
        "paginas": "62-68",
        "autores": [
          "CROCHI, D.",
          "SILVA, A.P.",
          "BOSCHI, S. R. M. S.",
          "SILVA, T. R. S.",
          "MOURA, L. A.",
          "SILVA, A. R. F.",
          "BISCHOF, K.",
          "SANTOS, M. F.",
          "OTA, N. H.",
          "SCARDOVELLI, T.A.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Use of Platform in the training of medical students",
        "doi": "10.31354/globalce.v2iSpecial%20Is",
        "periodico": "Global Clinical Engineering Journal",
        "volume": "2",
        "paginas": "133-",
        "autores": [
          "ABREU, F. D. L.",
          "SILVA, S. M.",
          "SILVA, A.P.",
          "BISSACO, M. A. S.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T. A.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2019",
        "titulo": "PHCHAT: A chatbot mobile application to assist professionals in primary health care",
        "doi": "",
        "periodico": "Global Clinical Engineering Journal",
        "volume": "2",
        "paginas": "138-",
        "autores": [
          "BISSACO, M. A. S.",
          "SILVA, A.P.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S.",
          "MARTINI, S. C.",
          "ABREU, F. D. L."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Desenvolvimento de uma palmilha sensorial para marcha em pacientes pós - acidente vascular encefálico",
        "doi": "",
        "periodico": "REVISTA DIÁLOGOS INTERDISCIPLINARES",
        "volume": "8",
        "paginas": "54-58",
        "autores": [
          "MUFFO, C. P.",
          "SANTOS, M. F.",
          "CAVALCANTI, F. R. S. M.",
          "SILVA, A.P.",
          "SCARDOVELLI, T. A.",
          "OTA, N. H.",
          "MARTINI, S. C.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Leap Motion para treinamento do movimento de preensão para adultos com limitação motora leve",
        "doi": "",
        "periodico": "REVISTA DIÁLOGOS INTERDISCIPLINARES",
        "volume": "8",
        "paginas": "1-16",
        "autores": [
          "ALVES, J.",
          "BOSCHI, S. R. M. S.",
          "SANTOS, L. L.",
          "SILVA, R. C.",
          "MARTINI, S. C.",
          "SILVA, A. P.",
          "DIRANI, E. A. T.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2018",
        "titulo": "Multiple Sclerosis: Comparison of the Conventional Spin-Echo T2-Weighted and Flair Techniques Through Image Processing",
        "doi": "10.1166/jmihi.2018.2329",
        "periodico": "Journal of Medical Imaging and Health Informatics",
        "volume": "8",
        "paginas": "425-430",
        "autores": [
          "SIMAO, R. S.",
          "ALVES, R. F. A.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T. A.",
          "RODRIGUES, S. C. M.",
          "BIANCHI, C.",
          "Silva, A. P."
        ]
      },
      {
        "ano": "2018",
        "titulo": "Peripheral device to quantify grip and pinch capacity of children",
        "doi": "10.1590/2446-4740.03017",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "",
        "paginas": "1-",
        "autores": [
          "BISCHOF, K.",
          "SILVA, A.P.",
          "MOTTA, W. M. A.",
          "SILVA, A. R. F.",
          "MORAIS, A. V.",
          "SCARDOVELLI, T. A.",
          "MARTUCCI, H. N.",
          "MANRIQUE, A. L.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2018",
        "titulo": "The late effect of Kinesio Taping ® on handgrip strength",
        "doi": "10.1016/j.jbmt.2017.09.024",
        "periodico": "JOURNAL OF BODYWORK AND MOVEMENT THERAPIES",
        "volume": "22",
        "paginas": "598-604",
        "autores": [
          "AGUIAR, RODRIGO SOUSA NILO DE ARAÚJO",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "LAZZARESCHI, LEANDRO",
          "SILVA, ALESSANDRO PEREIRA DA",
          "Scardovelli, Terigi Augusto",
          "FILONI, EDUARDO",
          "MANRIQUE, ANA LÚCIA",
          "FRÈRE, ANNIE FRANCE"
        ]
      },
      {
        "ano": "2017",
        "titulo": "Mean arterial pressure-embedded model for real-time simulation and controller validation",
        "doi": "10.1049/el.2016.4788",
        "periodico": "ELECTRONICS LETTERS (ONLINE)",
        "volume": "53",
        "paginas": "450-452",
        "autores": [
          "SILVA, S.J.",
          "SCARDOVELLI, T.A.",
          "MARTUCCI, H.N.",
          "BOSCHI, S.R.M.S.",
          "SILVA, A.P."
        ]
      },
      {
        "ano": "2015",
        "titulo": "Virtual Environment to Aid the Assessment of Basic Math Concepts in Children with ADHD",
        "doi": "10.4028/www.scientific.net/kem.638.339",
        "periodico": "Key Engineering Materials (Online)",
        "volume": "638",
        "paginas": "339-343",
        "autores": [
          "IANAGUIVARA, E. S.",
          "CANDIAGO, A.",
          "KAWAMOTO Jr., L. T.",
          "RODRIGUES, S. C. M.",
          "SCARDOVELLI, T. A.",
          "Silva, A. P."
        ]
      },
      {
        "ano": "2015",
        "titulo": "Measurement of the Effect of Physical Exercise on the Concentration of Individuals with ADHD",
        "doi": "10.1371/journal.pone.0122119",
        "periodico": "Plos One",
        "volume": "10",
        "paginas": "e0122119-",
        "autores": [
          "Silva, A. P.",
          "PRADO, S. O. S.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S.",
          "CAMPOS, L. C.",
          "Frère, A. F."
        ]
      },
      {
        "ano": "2014",
        "titulo": "Virtual Environment to Aid in the Teaching of Multiplication Tables to Elementary and Middle School Students with ADHD",
        "doi": "10.4028/www.scientific.net/amm.610.638",
        "periodico": "Applied Mechanics and Materials",
        "volume": "610",
        "paginas": "638-641",
        "autores": [
          "SANCHEZ, W. M.",
          "KAWAMOTO Jr., L. T.",
          "RODRIGUES, S. C. M.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2014",
        "titulo": "Meniscal tears: comparison of the conventional spin-echo and fast spin-echo techniques through image processing",
        "doi": "10.1186/1475-925X-13-33",
        "periodico": "Biomedical Engineering Online (Online)",
        "volume": "13",
        "paginas": "33-",
        "autores": [
          "NOGUEIRA, IBEVAN A",
          "FRÈRE, ANNIE F",
          "SILVA, ALESSANDRO P",
          "DE OLIVEIRA, HEVERTON C"
        ]
      },
      {
        "ano": "2014",
        "titulo": "Free Software for the Detection of Structures in Breast Images",
        "doi": "10.4028/www.scientific.net/amm.590.814",
        "periodico": "Applied Mechanics and Materials",
        "volume": "590",
        "paginas": "814-818",
        "autores": [
          "MAGALHAES, R. C.",
          "RODRIGUES, S. C. M.",
          "BISSACO, M. A. S.",
          "KAWAMOTO Jr., L. T.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2014",
        "titulo": "Proposal of a magnetic resonance technique for the evaluation of the calcaneofibular ligament minimizing false positive results",
        "doi": "10.1186/1475-925x-13-168",
        "periodico": "Biomedical Engineering Online (Online)",
        "volume": "13",
        "paginas": "168-",
        "autores": [
          "NOGUEIRA, IBEVAN A",
          "FRÈRE, ANNIE F",
          "SILVA, ALESSANDRO P",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S.",
          "DE OLIVEIRA, HEVERTON C"
        ]
      },
      {
        "ano": "2011",
        "titulo": "Virtual environment to quantify the influence of colour stimuli on the performance of tasks requiring attention",
        "doi": "10.1186/1475-925X-10-74",
        "periodico": "BioMedical Engineering Online (Online)",
        "volume": "10",
        "paginas": "74-",
        "autores": [
          "SILVA, A. P.",
          "FRÈRE, A.  F."
        ]
      }
    ],
    "softwares": [
      {
        "titulo": "Coleta de Dados IA",
        "ano": "2024",
        "finalidade": "classificar gestos e movimentos de acordo com a Redes Neurais Convolucionais de 1 Dimensão (CNNs 1D), registrar tempo de exercício e quantidade de repetições de um movimento",
        "plataforma": "Python"
      },
      {
        "titulo": "Relógio Motion Controller",
        "ano": "2024",
        "finalidade": "viabilizar: o comando de cursores virtuais (mouse); a gestão de movimentos virtuais dos membros superiores (braço e antebraço); a captação de gestos da mão; o registro de dados do movimento e a exibição visual do horário.",
        "plataforma": "C"
      },
      {
        "titulo": "Jogo Reabilitação MS",
        "ano": "2024",
        "finalidade": "Promover a reabilitação do membro superior através da terapia de espelho adjunto ao treinamento resistido unilateral.",
        "plataforma": "C#"
      },
      {
        "titulo": "Movib",
        "ano": "2024",
        "finalidade": "O software desenvolvido tem por finalidade reabilitar o membro superior através da terapia de espelho adjunto ao treinamento resistido unilateral",
        "plataforma": "Unity; C#"
      },
      {
        "titulo": "WaterFalls Balance",
        "ano": "2024",
        "finalidade": "O software desenvolvido tem por finalidade controlar  um sistema de plataforma inclinável, com protocolo de teste de equilíbrio postural, causando estímulos visuais e auditivos que podem ser analisados através de ativação muscular ou do córtex.",
        "plataforma": "Unity; C#"
      },
      {
        "titulo": "MenoFeme",
        "ano": "2024",
        "finalidade": "Auxiliar mulheres no período do climatério e menopausa; Apresentar orientações sobre os sintomas típicos deste estágio da vida feminina e formas de amenizá-los; Incentivar às mulheres transcorrer por esta fase com hábitos e estilo de vida saudáveis.",
        "plataforma": "Kotlin"
      },
      {
        "titulo": "ECG Rats",
        "ano": "2024",
        "finalidade": "O software ECG Rats é um software de fácil aplicação  para determinar parâmetros e armazenar dados relacionados ao eletrocardiograma de ratos.",
        "plataforma": "Python"
      },
      {
        "titulo": "Qualylife",
        "ano": "2024",
        "finalidade": "O aplicativo visa avaliar a saúde física e mental do usuário por meio de cinco questionários padronizados. Ele aborda preocupações com quedas, cinesiofobia, qualidade de vida e percepção de saúde.",
        "plataforma": "Kotlin"
      },
      {
        "titulo": "Dispositivo para quantificar o grau de espasticidade em membros superiores utilizando a escala modificada de Ashworth",
        "ano": "2024",
        "finalidade": "O software visa quantificar a espasticidade em membros superiores utilizando dados do acelerômetro, correlacionados com a Escala Modificada de Ashworth (EMA). Ele fornece análises em tempo real e exportáveis, auxiliando no monitoramento clínico",
        "plataforma": "C++"
      },
      {
        "titulo": "Maze Game",
        "ano": "2023",
        "finalidade": "Treinamento do equilíbrio estático e dinâmico",
        "plataforma": "Unity"
      },
      {
        "titulo": "Music Game",
        "ano": "2023",
        "finalidade": "Reabilitação dos movimentos das mãos em pacientes com alteração motora",
        "plataforma": "UNITY"
      },
      {
        "titulo": "Passos de Verão",
        "ano": "2023",
        "finalidade": "Estimular a caminhada de idosos sedentários",
        "plataforma": "C#; UNITY"
      },
      {
        "titulo": "BPC - Blood Pressure Controler app",
        "ano": "2023",
        "finalidade": "Determinar parâmetros e armazenar dados relacionados a pressão arterial, controle de temperatura caudal em ratos e controle de uma bomba de infusão.",
        "plataforma": "Python; Kotlin"
      },
      {
        "titulo": "Yuki Ski",
        "ano": "2023",
        "finalidade": "Aprimorar o equilíbrio postural, utilizando uma plataforma de força que é movimentada conforme o Avatar se desloca no ambiente virtual",
        "plataforma": "HTML; C#"
      },
      {
        "titulo": "Dose Facil",
        "ano": "2023",
        "finalidade": "Controle de dose de fármacos para uso animal",
        "plataforma": "Outros"
      },
      {
        "titulo": "Prototipagem de um software para determinar a taxa de infusão",
        "ano": "2022",
        "finalidade": "Prototipagem de um software de fácil aplicação que determina a taxa de infusão e demonstra os cálculos da concentração individual de fármacos vasoativos para roedores.",
        "plataforma": "Kotlin; Java"
      },
      {
        "titulo": "Prototipagem de um software para reabilitar o membro superior",
        "ano": "2021",
        "finalidade": "Prototipagem de um software para reabilitar o membro superior através da terapia de espelho adjunto ao treinamento resistido unilateral.",
        "plataforma": "C#; UNITY"
      },
      {
        "titulo": "Prototipagem de um software musical que estimula a mobilidade dos membros superiores",
        "ano": "2021",
        "finalidade": "Prototipagem de um software musical que estimula e capta dados de mobilidade dos membros superiores.",
        "plataforma": "C#; UNITY"
      },
      {
        "titulo": "Ambiente virtual para a quantificação da influência dos estímulos coloridos no desempenho de tarefas que exigem atenção",
        "ano": "2009",
        "finalidade": "Software para quantificar a influência de estímulos coloridos em pessoas com falta de atenção.",
        "plataforma": "Windows"
      },
      {
        "titulo": "Desenvolvimento e validação de um simulador para aprendizagem da técnica Pompage na fisioterapia.",
        "ano": "2009",
        "finalidade": "Software desenvolvido para captação do movimento durante a execução da técnica Pompage.",
        "plataforma": "Windows"
      },
      {
        "titulo": "Desenvolvimento de dispositivos computacionais para profissionalização de pessoas tetraplégicas",
        "ano": "2003",
        "finalidade": "Software emulador de mouse desenvolvido em Visual Basic para acessar os programas de edição de imagem e impressão.",
        "plataforma": "Windows"
      }
    ],
    "patentes": [
      {
        "titulo": "Sistema de alerta de risco de insolação e hipertermia em criança dentro de automóvel com sensor infravermelho",
        "ano": "2017"
      }
    ],
    "orientacoes_concluidas": [
      {
        "tipo": "Mestrado",
        "titulo": "Avaliar atraves de um jogo computadorizado o efeito do exercício físico sobre a concentração do hiperativo",
        "ano": "2011",
        "orientado": "Sueli de Oliveira Silva do Prado",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Ambiente virtual para avaliar conhecimentos básicos de alunos com falta de atenção",
        "ano": "2012",
        "orientado": "Eduardo Seige Ianaguivara",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Simulação computacional do crescimento tumoral no ducto mamário",
        "ano": "2014",
        "orientado": "Rafaela Ferreira de Azevedo Alves",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Ambiente virtual para a quantificação de movimentos angulares do punho baseado em realidade aumentada",
        "ano": "2014",
        "orientado": "Aguinaldo Alberto de Sousa Junior",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Desenvolvimento e validação de um ambiente virtual controlado pela frequência cardíaca",
        "ano": "2013",
        "orientado": "Carlos Taigi Matsuo Júnior",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Interface integrada para implementação de bases de dados relacionais como tecnologia assistiva",
        "ano": "2013",
        "orientado": "Marcos Alexandruk",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Quantificação da força proporcionada pelo impacto do chute Dollyo Tchagui na região da ATM",
        "ano": "2014",
        "orientado": "Joyce Vieira Martins dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Dispositivo vibratório com frequência controlada para tratamento de pacientes com AVE",
        "ano": "2013",
        "orientado": "Eric Fabiano dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Comparação das Sequências SPIN ECO e FLAIR por processamento de imagens na avaliação da Esclerose Múltipla",
        "ano": "2014",
        "orientado": "Ricardo Silva Simão",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Jogo computadorizado para auxiliar no diagnóstico de TDAH em crianças",
        "ano": "2015",
        "orientado": "Ernesto Teodoro da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Sistema computadorizado com feedback visual para análise eletromiográfica do músculo tibial anterior",
        "ano": "2016",
        "orientado": "Gilberto Tomaz Junior",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Sistema computadorizado para quantificar a força palmar em pacientes com baixa mobilidade",
        "ano": "2016",
        "orientado": "Geraldo Canuto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Sistema computadorizado para apresentar as variações no centro de massa no disco proprioceptivo de Freeman",
        "ano": "2018",
        "orientado": "André Roberto Fernandes da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Sistema vibratório para tratamento de pacientes com AVE",
        "ano": "2018",
        "orientado": "Antonio Vinicius de Morais",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Sistema de processamento de imagem para definir a região muscular recrutada em exercício resistido",
        "ano": "2017",
        "orientado": "Palle Grandjean Thomsen",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Proposta de sistema de alerta de risco de insolação e hipertemia em crianças dentro de automóvel sensor infravermelho",
        "ano": "2017",
        "orientado": "João Roberto Broggio",
        "instituicao": "Universidade Brasil"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Sistema computadorizado de acelerometria triaxial para rastreamento movimentos funcionais",
        "ano": "2020",
        "orientado": "Tiago Rodrigues Santana Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Proposta de treinamento de equilíbrio baseado em jogo computadorizado utilizando uma plataforma de força com rotação biaxial",
        "ano": "2020",
        "orientado": "Danilo Luque Ribeiro",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Proposta de sistema computadorizado baseado em gameterapia para diminuir a oscilação postural",
        "ano": "2020",
        "orientado": "Paulo César dos Reis",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Análise do equilíbrio dinâmico em mulheres por meio de posturografia em plataforma de força com rotação biaxial",
        "ano": "2021",
        "orientado": "Luan de Almeida Moura",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Ambiente virtual imersivo para o treinamento de equilíbrio em uma plataforma de força",
        "ano": "2019",
        "orientado": "Caique Silva Pereira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Sistema computadorizado para auxiliar a musicalização de crianças com síndrome de Down",
        "ano": "2021",
        "orientado": "Jurandir Evangelista de Jesus Filho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Pletismógrafo integrado com bomba de infusão e controle de temperatura caudal para ensaios hemodinâmicos em ratos",
        "ano": "2022",
        "orientado": "Mariana da Palma Valério",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Desenvolvimento de um sistema Responsivo com imersão em ambiente virtual  integrado em plataforma de força biaxial para treinamento de equilíbrio",
        "ano": "2023",
        "orientado": "Bruno Toshio Gomes Gunji",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Protótipo de relógio para reconhecimento de gestos e movimento do membro superior",
        "ano": "2024",
        "orientado": "Higor Barreto Campos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Efeitos da caminhada com vibração de corpo inteiro no controle postural e EMG dos eretores da espinha e tibial anterior",
        "ano": "2024",
        "orientado": "Leticia Araujo Rios",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Dispositivo para quantificar o grau de Espasticidade em membros superiores utilizando a Escala modificada de Ashworth",
        "ano": "2025",
        "orientado": "Silvio José Santos da Rocha",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Ambiente virtual para auxiliar no processo de reabilitação sensório-motora de lesões articulares de quadril",
        "ano": "2014",
        "orientado": "Denilson Jose Schäffer",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Método de concepção de serious game para avaliar conceitos básicos de matemática de alunos com falta de atenção",
        "ano": "2016",
        "orientado": "Eduardo Seige Ianaguivara",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Quantificação do centro de pressão em idosos através de uma plataforma de força dinâmica",
        "ano": "2016",
        "orientado": "Leandro Lazzareschi",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Desenvolvimento e validação de uma ferramenta computadorizada para classificar os padrões de CDIS",
        "ano": "2018",
        "orientado": "Rafaela Ferreira de Azevedo Alves",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Dinamômetro eletrônico com biofeedback para medição da força em pacientes com mobilidade reduzida",
        "ano": "2020",
        "orientado": "Geraldo Canuto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Desenvolvimento de sistema de análise do equilíbrio através de posturografia em plataforma de força com rotação biaxial combinada com eletromiografia",
        "ano": "2019",
        "orientado": "Marcio Tadashi Ishizaki",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Jogo computadorizado para treinar o equilíbrio por meio de uma plataforma instável sensoriada com regulagem de dificuldade",
        "ano": "2022",
        "orientado": "André Roberto Fernandes da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Dispositivo de barras paralelas com estímulo vibratório controlado via IHM para reabilitação de neuropatologias",
        "ano": "2022",
        "orientado": "Antônio Vinícius de Morais",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Ensaio Mecânico de Tração da Bandagem Elástica Adesiva Corporal",
        "ano": "2019",
        "orientado": "Nelson Morini Júnior",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Modelagem, simulação e controle adaptativo simples da pressão arterial média embarcado em hardware de baixo custo",
        "ano": "2019",
        "orientado": "Samuel Justino da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Sistema computadorizado de treinamento baseado em jogos para melhorar a amplitude de movimento e a força muscular dos membros superiores de pacientes pós AVC",
        "ano": "2024",
        "orientado": "Douglas Crochi",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Controlador adaptativo automatizado para pressão arterial média em situações hipotensivas com uso de fenilefrina",
        "ano": "2022",
        "orientado": "Marcelo Saraiva Coelho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Análise do intervalo de tempo entre a ativação muscular e ativação cerebral após um estímulo visual em uma plataforma de força com rotação biaxial",
        "ano": "2025",
        "orientado": "Luan de Almeida Moura",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Uma ferramenta computacional de código aberto em Python para avaliação da variabilidade da frequência cardíaca em ratos",
        "ano": "2026",
        "orientado": "Mariana da Palma Valério",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Efeitos da bandagem elástica adesiva na quantificação eletromiográfica do esforço isométrico do músculo flexor do punho",
        "ano": "2018",
        "orientado": "Roque Antônio de Moura",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação de um dispositivo de reabilitação da marcha a partir da estimulação proprioceptiva",
        "ano": "2012",
        "orientado": "Fernanda de Almeida Nagayama",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Quantificação do centro de pressão por meio de um disco proprioceptivo de Freeman instrumentado",
        "ano": "2015",
        "orientado": "André Roberto Fernandes da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Dispositivo para localização e quantificação da força no movimento de pinça",
        "ano": "2016",
        "orientado": "Willian Molizane Almeida Motta",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Sistema computadorizado baseado em modelos matemáticos para treinamento e controle de modelo virtual de membros superiores",
        "ano": "2019",
        "orientado": "Eli Fellipe Valadão Belo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Sistema de inteligência artificial para classificação de movimentos de membros superiores (MMSS)",
        "ano": "2020",
        "orientado": "Eli Fellipe Valadão Belo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Verificação da eficiência de um sistema computadorizado baseado em realidade virtual no treinamento de equilíbrio",
        "ano": "2021",
        "orientado": "Allan Christian Trugillo Heitor",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliar a eficiência de um sistema baseado em disco de Freeman e um exergame com dashboard capaz de monitorar o equilíbrio do jogador",
        "ano": "2022",
        "orientado": "Raquel dos Santos Vieira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliar a eficiência de um jogo computadorizado no processo de reabilitação funcional das mãos em pacientes com alteração motora",
        "ano": "2023",
        "orientado": "Felipe Henrique Campos Gonçalves",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Ferramenta computadorizada para a determinação da taxa de infusão de fármacos vasoativos",
        "ano": "2023",
        "orientado": "Sarah Pinheiro",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Verificação da usabilidade do aplicativo dose fácil para determinação da taxa de administração de fármacos em roedores de pequeno porte",
        "ano": "2024",
        "orientado": "Isabella Titico Moraes",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento de uma ferramenta computadorizada para quantificação da atenção",
        "ano": "2025",
        "orientado": "Matheus Augusto da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento do modelo computacional do joelho e simulações de posicionamento em exames de imagens diagnóstico",
        "ano": "2011",
        "orientado": "Caryne Camilo Ferreira",
        "instituicao": "Universidade de Mogi das Cruzes"
      }
    ],
    "orientacoes_andamento": []
  },
  "elis": {
    "id": "Prof Elis.xml",
    "lattes_id": "3183193287564839",
    "data_atualizacao": "25/09/2026",
    "nome": "Elis Andrade de Lima Zutin",
    "nome_citacoes": [
      "LIMA, E. A.",
      "ZUTIN, ELIS ANDRADE DE LIMA",
      "LIMA ZUTIN, ELIS ANDRADE",
      "LIMA ZUTIN, ELIS A."
    ],
    "orcid": "https://orcid.org/0000-0002-7585-1868",
    "nacionalidade": "Brasil",
    "resumo": "Possui graduação em Odontologia pela Universidade do Vale do Paraíba - UNIVAP (2010), mestrado (2013) e doutorado (2017) em Biopatologia Bucal, área de Patologia pelo Instituto de Ciência e Tecnologia ICT UNESP de São José dos Campos-SP. Doutorado com período Sanduíche na Universidade de Michigan (2015 - 2016). Atua como docente de Odontologia na Universidade de Mogi das Cruzes-SP (UMC) nas unidades curriculares de Diagnóstico e Propedêutica Clínica Aplicada a Odontologia e na de Pacientes com Necessidades Especiais,  no Programa Integrado de Pós-graduação Stricto Sensu em Engenharia Biomédica da UMC e como pesquisadora de pós-doutorado no ICT-Unesp de São José dos Campos. Participa como coordenadora docente da Liga Acadêmica de Estomatologia e Radiologia Oral e como colaboradora da Liga Interdisciplinar de Farmacologia e Anestesiologia; e de Pacientes com Necessidades Especiais da UMC. https://orcid.org/0000-0002-7585-1868",
    "instituicao": "Universidade de Mogi das Cruzes",
    "departamento": "Centro de Ciências Biomédicas",
    "cidade": "Mogi das Cruzes",
    "uf": "SP",
    "formacoes": [
      {
        "tipo": "Pos Doutorado",
        "curso": "",
        "instituicao": "Instituto de Ciência e Tecnologia ICT Unesp Campus de São José dos Campos",
        "ano": "2026"
      },
      {
        "tipo": "Doutorado",
        "curso": "Biopatologia Bucal",
        "instituicao": "Faculdade de Odontologia de São José dos Campos",
        "ano": "2017"
      },
      {
        "tipo": "Mestrado",
        "curso": "Biopatologia Bucal",
        "instituicao": "Faculdade de Odontologia de São José dos Campos",
        "ano": "2013"
      },
      {
        "tipo": "Graduacao",
        "curso": "Odontologia",
        "instituicao": "Universidade do Vale do Paraíba",
        "ano": "2010"
      }
    ],
    "areas": [],
    "metricas": {
      "artigos": 6,
      "livros": 0,
      "capitulos": 3,
      "eventos": 113,
      "softwares": 0,
      "patentes": 0,
      "orientacoes_concluidas": 22,
      "orientacoes_andamento": 0
    },
    "artigos": [
      {
        "ano": "2026",
        "titulo": "Epidemiological Assessment of oral lesions at the Mogi das Cruzes University Clinic",
        "doi": "10.5327/2525-5711.479",
        "periodico": "JOURNAL OF ORAL DIAGNOSIS - JORDI",
        "volume": "11",
        "paginas": "e479-",
        "autores": [
          "SODRE, A. C. S.",
          "PUIM, S. M.",
          "CUNHA, M. M.",
          "FERNANDES, A. S.",
          "MENEGIDIO, F. B.",
          "MELLO, T. R. C.",
          "ZUTIN, ELIS ANDRADE DE LIMA"
        ]
      },
      {
        "ano": "2021",
        "titulo": "Nanoscale hybrid implant surfaces and Osterix</i> -mediated osseointegration",
        "doi": "10.1002/jbm.a.37323",
        "periodico": "Journal of Biomedical Materials Research Part A",
        "volume": "110",
        "paginas": "1-12",
        "autores": [
          "MORANDINI RODRIGUES, LAÍS",
          "MENDONÇA, GUSTAVO",
          "LIMA ZUTIN, ELIS A.",
          "SARTORI, ELISA M.",
          "RIZZANTE, FABIO A. P.",
          "MENDONÇA, DANIELA B. S.",
          "KREBSBACH, PAUL H.",
          "JEPSEN, KARL J.",
          "COOPER, LYNDON F.",
          "VASCONCELLOS, LUANA M. R."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Influence of Titanium Alloy Scaffolds on Enzymatic Defense against Oxidative Stress and Bone Marrow Cell Differentiation",
        "doi": "10.1155/2020/1708214",
        "periodico": "INTERNATIONAL JOURNAL OF BIOMATERIALS",
        "volume": "2020",
        "paginas": "1-8",
        "autores": [
          "RODRIGUES, LAIS MORANDINI",
          "LIMA ZUTIN, ELIS ANDRADE",
          "SARTORI, Elisa Mattias",
          "MENDONÇA, DANIELA BACCELLI SILVEIRA",
          "MENDONÇA, GUSTAVO",
          "CARVALHO, YASMIN RODARTE",
          "REIS DE VASCONCELLOS, LUANA MAROTTA"
        ]
      },
      {
        "ano": "2018",
        "titulo": "Influence of chronic alcoholism and estrogen deficiency on the immunohistochemical expression of regulatory proteins of the bone resorption process in the periodontium of Wistar rats",
        "doi": "10.1016/j.archoralbio.2018.07.006",
        "periodico": "ARCHIVES OF ORAL BIOLOGY",
        "volume": "95",
        "paginas": "7-14",
        "autores": [
          "MARCHINI, ADRIANA MATHIAS PEREIRA DE SILVA",
          "SANTANA-MELO, GABRIELA DE FÁTIMA",
          "SALGADO, MIRIANE CARNEIRO MACHADO",
          "ZUTIN, ELIS ANDRADE DE LIMA",
          "MARCHINI, LEONARDO",
          "ROCHA, ROSILENE FERNANDES DA",
          "VASCONCELLOS, LUANA MAROTTA REIS DE"
        ]
      },
      {
        "ano": "2017",
        "titulo": "The Antimicrobial Peptide LL-37 as a Possible Adjunct for the Proliferation and Differentiation of Dental Pulp Stem Cells",
        "doi": "10.1016/j.joen.2017.08.010",
        "periodico": "JOURNAL OF ENDODONTICS",
        "volume": "43",
        "paginas": "2048-2053",
        "autores": [
          "Milhan NV",
          "LIMA, E. A.",
          "BARROS, P. P.",
          "OLIVEIRA, F. E.",
          "CAMARGO, C. H.",
          "CAMARGO, S. E."
        ]
      },
      {
        "ano": "2012",
        "titulo": "Patients expectation and satisfaction with implant-supported fixed bridges and single crowns",
        "doi": "",
        "periodico": "INTERNATIONAL JOURNAL OF PROSTHODONTICS",
        "volume": "25",
        "paginas": "484-",
        "autores": [
          "LIMA, E. A.",
          "FERNANDES, M. B. S.",
          "MARCHINI, L."
        ]
      }
    ],
    "softwares": [],
    "patentes": [],
    "orientacoes_concluidas": [
      {
        "tipo": "Mestrado",
        "titulo": "Identificação de oncometabólitos salivares em pacientes fumantes de narguilé e cigarro convencional",
        "ano": "2025",
        "orientado": "Lurye Silva Theodoro",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "AVALIAÇÃO IMUNO-HISTOQUÍMICA E EPIDEMIOLÓGICA DOS TUMORES INTRAORAIS DE ORIGEM NEURAL DO INSTITUTO DE CIÊNCIA E TECNOLOGIA DE SÃO JOSÉ DOS CAMPOS",
        "ano": "2017",
        "orientado": "Bruna Emi Takamura",
        "instituicao": "Faculdade de Odontologia de São José dos Campos"
      },
      {
        "tipo": "Outras",
        "titulo": "CONHECIMENTO DE CIRURGIÕES DENTISAS FRENTE A SITUAÇÕES DE URGÊNCIA E EMERGÊNCIA EM CONSULTÓRIO",
        "ano": "2023",
        "orientado": "Sara Martins Puim",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "AVALIAÇÃO DO CONHECIMENTO DO CIRURGIÃO DENTISTA SOBRE O USO DE ANTI-INFLAMATÓRIOS NÃO-ESTEROIDAIS",
        "ano": "2023",
        "orientado": "Jeniffer de Paula Reis",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "MANEJO DA OSTEONECROSE DOS MAXILARES INDUZIDA PELO USO DE MEDICAMENTOS",
        "ano": "2023",
        "orientado": "Gabriel Cassio Matos de Camargo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "CARCINOMA DE CÉLULAS ESCAMOSAS: EPIDEMIOLOGIA, PRINCIPAIS FATORES DE RISCO, IMPORTÂNCIA DO DIAGNÓSTICO PRECOCE, TRATAMENTO E MANEJO ODONTOLÓGICO CORRETO FRENTE AOS EFEITOS DELETÉRIOS DA TERAPIA ANTINEOPLÁSICA",
        "ano": "2023",
        "orientado": "Raphaela Machado Cruz",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Efeitos adversos dos cigarros eletrônicos no microbioma e no viroma oral",
        "ano": "2024",
        "orientado": "Alessandra de Souza Fernades",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Carcinoma verrucoso coexistente com carcinoma de células escamosas convencional",
        "ano": "2023",
        "orientado": "Maria Cecília Barbosa",
        "instituicao": "Faculdade Santo Antônio - Caçapava"
      },
      {
        "tipo": "Outras",
        "titulo": "MANEJO ODONTOLÓGIO EM PACIENTES ONCOLÓGICOS",
        "ano": "2024",
        "orientado": "BARBARA SILVA NUNES",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "MANIFESTAÇÕES ORAIS EM PACIENTES SOROPOSITIVOS PARA HIV/AIDS",
        "ano": "2024",
        "orientado": "VICTÓRIA EMANUELLE BRAZ AMARAL",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "AVALIAÇÃO EPIDEMIOLÓGICA DAS LESÕES ORAIS DA CLÍNICA ODONTOLÓGICA DA UNIVERSIDADE DE MOGI DAS CRUZES",
        "ano": "2024",
        "orientado": "ANA CAROLINA SILVA SODRÉ",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "LASERTERAPIA PARA MUCOSITE ORAL EM PACIENTES ONCOLÓGICOS",
        "ano": "2024",
        "orientado": "TAYNA BRUNA LEITE TERRA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "ANOMALIAS RELACIONADAS AO NÚMERO DENTÁRIO: Dentes   Supranumerários",
        "ano": "2024",
        "orientado": "GABRIELA DE MIRANDA DIAS",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "DIAGNÓSTICO DIFERENCIAL ENTRE DISPLASIAS CEMENTO-ÓSSEAS E LESÕES INFLAMATÓRIAS PERIAPICAIS",
        "ano": "2024",
        "orientado": "SABRINA DE BRITO DOS PASSOS",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "IMPACTO DO ÁLCOOL E DO TABACO NO CÂNCER DE BOCA",
        "ano": "2024",
        "orientado": "BRUNA MAYUMI FUKUDA ELEUTERIO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do Conhecimento e da Abordagem Clínica entre&#8203; Acadêmicos de Odontologia e Cirurgiões-Dentistas",
        "ano": "2026",
        "orientado": "Luiz Henrique de Sousa Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Alterações na mucosa oral em usuários de tabaco&#8203;",
        "ano": "2026",
        "orientado": "Gabriele de Amorim Rodrigues",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Xerostomia em Cuidados Paliativos Desafios e Estratégias de Cuidados",
        "ano": "2026",
        "orientado": "Núbia Santos Mendes Pereira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Manifestações Bucais em Pacientes com Insuficiência Renal Crônica submetidos à hemodiálise",
        "ano": "2026",
        "orientado": "Milena Rodrigues Lima Flor",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "A importância das atividades de extensão para prevenção de câncer bucal",
        "ano": "2025",
        "orientado": "Samara Garcia Zaidan",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Efeitos adversos dos cigarros eletrônicos no micobioma oral",
        "ano": "2025",
        "orientado": "Alessandra de Souza Fernandes",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Diversidade de microalgas no microbioma oral de usuários de cigarros eletrônicos",
        "ano": "2026",
        "orientado": "Alessandra de Souza Fernades",
        "instituicao": "Universidade de Mogi das Cruzes"
      }
    ],
    "orientacoes_andamento": []
  },
  "silvia m": {
    "id": "Prof Silvia M.xml",
    "lattes_id": "1239530829485063",
    "data_atualizacao": "26/10/2026",
    "nome": "Silvia Cristina Martini",
    "nome_citacoes": [
      "RODRIGUES, S. C. M.",
      "RODRIGUES, SILVIA CRISTINA MARTINI",
      "Rodrigues, Silvia C. M.",
      "Rodrigues, Silvia Cristina M.",
      "Rodrigues, S.C.M.",
      "Rodrigues, S. C. M.",
      "Silvia C.M. Rodrigues",
      "Rodrigues, C.M.S.",
      "Rodrigues, Silvia Cristina Martini",
      "Rodriguez, S.C.M.",
      "SC Martini Rodrigues",
      "Martini Rodrigues, S.",
      "S.C.M. Rodrigues",
      "S.C. M Rodrigues",
      "Martini, S.C.",
      "MARTINI RODRIGUES, SILVIA CRISTINA",
      "Rodrigrues, S. C. M.",
      "Martini, S. C.",
      "Martini, Silvia C.",
      "Martini S",
      "Silvia Martini",
      "MARTINI, SILVIA CRISTINA",
      "MARTINI, SILVA CRISTINA",
      "Silvia C. Martini",
      "MARTINI, SÍLVIA CRISTINA",
      "Martini, Silvia",
      "Silvia Cristina Martini"
    ],
    "orcid": "https://orcid.org/0000-0003-3442-9932",
    "nacionalidade": "Brasil",
    "resumo": "Possui graduação em Matemática pela Universidade Federal de São Carlos (1995), mestrado (1999), doutorado (2004) e pós-doutorado (2005) em Engenharia Elétrica pela Universidade de São Paulo (USP) e Tecnólogo em Analise e Desenvolvimento de Sistemas. Atualmente é coordenadora adjunta do programa de Políticas Públicas, pesquisadora e professora auxiliar nível PCA-4 da Universidade de Mogi das Cruzes (UMC). Atua na área de Engenharia Biomédica, Ciência e Tecnologia em Saúde e Políticas Públicas, desenvolvendo pesquisas nos temas: Ambiente virtual para: ensino e atendimento primário de deficientes surdos e cuidados paliativos, Treinamento de especialistas em interpretação de imagens médicas e Diagnóstico Auxiliado por Computador (CAD) em Imagens mamográficas. É  assessora interna do Programa de Iniciação Científica da Universidade de Mogi das Cruzes (UMC), membro Titular do Colegiado do Programa de Engenharia Biomédica. Tem atuado como assessora ad-hoc da FAPESP, CNPq e CAPES nas áreas de estatística, informática médica e ensino de matemática.",
    "instituicao": "Universidade de Mogi das Cruzes",
    "departamento": "Núcleo de Pesquisa Tecnologica",
    "cidade": "Mogi das Cruzes",
    "uf": "SP",
    "formacoes": [
      {
        "tipo": "Pos Doutorado",
        "curso": "",
        "instituicao": "Universidade de São Paulo",
        "ano": "2006"
      },
      {
        "tipo": "Doutorado",
        "curso": "Engenharia Elétrica",
        "instituicao": "Universidade de São Paulo",
        "ano": "2004"
      },
      {
        "tipo": "Mestrado",
        "curso": "Engenharia Elétrica",
        "instituicao": "Universidade de São Paulo",
        "ano": "1999"
      },
      {
        "tipo": "Graduacao",
        "curso": "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
        "instituicao": "CENTRO UNIVERSITÁRIO JOAQUIM NABUCO",
        "ano": "2022"
      },
      {
        "tipo": "Graduacao",
        "curso": "Matemática",
        "instituicao": "Universidade Federal de São Carlos",
        "ano": "1995"
      }
    ],
    "areas": [
      "Engenharia Biomédica",
      "ENGENHARIAS"
    ],
    "metricas": {
      "artigos": 117,
      "livros": 7,
      "capitulos": 18,
      "eventos": 85,
      "softwares": 19,
      "patentes": 1,
      "orientacoes_concluidas": 70,
      "orientacoes_andamento": 0
    },
    "artigos": [
      {
        "ano": "2026",
        "titulo": "CONTRIBUTIONS OF BEHAVIORAL NUTRITION TO THE MENTAL HEALTH OF BARIATRIC PATIENTS: INTEGRATIVE LITERATURE REVIEW",
        "doi": "10.36238/2359-5787.2026.v12n61.1900",
        "periodico": "Revista Acadêmica Online",
        "volume": "12",
        "paginas": "e1900-",
        "autores": [
          "POIANA, BRUNA MARIANA BRAGA RÊGO",
          "SANTIAGO, TATIANA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "RODRIGUES, S. C. M.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2026",
        "titulo": "Balance analysis system with a sensorized wobbleboard and an exergame",
        "doi": "10.1007/s42600-026-00497-9",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "42",
        "paginas": "42-50",
        "autores": [
          "DA SILVA, ANDRÉ ROBERTO FERNANDES",
          "DA SILVA, ALESSANDRO PEREIRA",
          "DE OLIVEIRA GONZALEZ, TABAJARA",
          "DA SILVA BOSCHI, SILVIA REGINA MATOS",
          "SILVA, LUANA A. ALVES",
          "DOS SANTOS VIEIRA, RAQUEL",
          "SILVA, STEFANI LOPES",
          "DE ALMEIDA MOURA, LUAN",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2026",
        "titulo": "Esportes paralímpicos e lesão esportiva: uso de tecnologia assistiva - uma pesquisa sistemática integrativa",
        "doi": "10.55905/revconv.19n.9-016",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "19",
        "paginas": "e24839-",
        "autores": [
          "ALBUQUERQUE, VANESSA GOMES",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2025",
        "titulo": "O uso de ferramentas tecnológicas e midiáticas no ensino de Química a partir de três vertentes: Realidade Aumentada (RA), Realidade Virtual (RV) e da Mídia Social Tik Tok",
        "doi": "10.55892/jrg.v8i18.2261",
        "periodico": "Revista JRG de Estudos Acadêmicos",
        "volume": "8",
        "paginas": "e082261-",
        "autores": [
          "CARVALHO, EVANDRO HENRIQUE DE",
          "MELLO, TATIANA RIBEIRO DE CAMPOS",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Educação Inclusiva: O ensino de Matemática para alunos com Transtorno do Espectro Autista",
        "doi": "10.55892/jrg.v8i19.2371",
        "periodico": "Revista JRG de Estudos Acadêmicos",
        "volume": "8",
        "paginas": "e082371-",
        "autores": [
          "CARVALHO, EVANDRO HENRIQUE DE",
          "MELLO, TATIANA RIBEIRO DE CAMPOS",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Proposal of a Serious Game for Dynamic Balance Training Using a Force Platform: A Pilot Study",
        "doi": "10.1089/g4h.2023.0194",
        "periodico": "GAMES FOR HEALTH: RESEARCH, DEVELOPMENT, AND CLINICAL APPLICATIONS",
        "volume": "14",
        "paginas": "312-320",
        "autores": [
          "VALÉRIO, MARIANA DA PALMA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "RIBEIRO, DANILO LUQUE",
          "FERNANDES DA SILVA, ANDRÉ ROBERTO",
          "MOURA, LUAN DE ALMEIDA",
          "ALEXANDRE, GABRIELLI DELBONE",
          "COPESKI, THAMIRES DA SILVA",
          "LONGUINHO, GIOVANNA CORDEIRO",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Efeitos Motores e cognitivos relacionados com o treino musical: uma revisão narrativa",
        "doi": "10.33871/2317417x.2025.22.9751",
        "periodico": "INCANTARE",
        "volume": "22",
        "paginas": "1-13",
        "autores": [
          "FERNANDES MONIZ, YASMIM",
          "PEREIRA DA SILVA, ALESSANDRO",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MATOS DA SILVA BOSCHI, SILVIA REGINA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Validação de dispositivo auxiliar para a mão do terapeuta na realização de técnicas de liberação miofascial",
        "doi": "10.55905/revconv.18n.5-268",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "18",
        "paginas": "e18014-",
        "autores": [
          "ROCHA, TATHIANE NAYARA DE OLIVEIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "ROCHA, SILVIO JOSÉ SANTOS DA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "GONZALEZ, TABAJARA DE OLIVEIRA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Comparação entre o aplicativo Physio Pro com os aplicativos existentes nas plataformas iOS e Android",
        "doi": "10.59464/2359-4632.2025.3529",
        "periodico": "REVISTA CIENTIFICA INTEGRADA UNAERP CAMPUS GUARUJÁ",
        "volume": "8",
        "paginas": "e202514-",
        "autores": [
          "MOREIRA, LUCYANA DE MIRANDA",
          "RODRIGUES, S. C. M.",
          "ALVES, NAZARETI PEREIRA FERREIRA",
          "SILVA, ALESSANDRO PEREIRA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "DOSE FÁCIL: UMA FERRAMENTA DE APRENDIZAGEM PARA ESTUDANTES DE VETERINÁRIA",
        "doi": "10.56238/arev7n3-307",
        "periodico": "ARACÊ - DIREITOS HUMANOS EM REVISTA",
        "volume": "7",
        "paginas": "15516-15530",
        "autores": [
          "VALÉRIO, MARIANA DA PALMA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MORAES, ISABELLA TITICO",
          "MOURA, LUAN DE ALMEIDA",
          "RODRIGUES, S. C. M.",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "DA SILVA, ALESSANDRO PEREIRA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "El-dorado senses: jogo sério para modular a reatividade a estímulos sensoriais apresentados por mídias digitais",
        "doi": "10.55905/oelv23n1-120",
        "periodico": "OBSERVATORIO DE LA ECONOMÍA LATINOAMERICANA",
        "volume": "23",
        "paginas": "e8657-",
        "autores": [
          "SOUZA, RICHARD RIBEIRO BRANCATO DE",
          "FONTES, JANY MAZINI",
          "FALSONI, MARINA",
          "MARQUES, MATHEUS AUGUSTO",
          "COIAHY, MARIANA GOMES AMORIM",
          "RODRIGUES, S. C. M."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Importância do acolhimento com classificação de risco nos serviços de urgência e emergência",
        "doi": "10.55905/revconv.18n.1-007",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "18",
        "paginas": "e14257-",
        "autores": [
          "ABRAHÃO, KATIÚSCIA",
          "GOUET, JONATHAN BELLO",
          "GOUET, MAYARA CRISTINA MARTINS SILVA",
          "RODRIGUES, S. C. M.",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "ANACLETO, GEOVANA MELLISA CASTREZANA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Jogos digitais para auxiliar no processamento e organização de informações sensoriais no TEA: revisão integrativa",
        "doi": "10.55905/oelv23n1-122",
        "periodico": "OBSERVATORIO DE LA ECONOMÍA LATINOAMERICANA",
        "volume": "23",
        "paginas": "e8659-",
        "autores": [
          "SOUZA, RICHARD RIBEIRO BRANCATO DE",
          "FONTES, JANY MAZINI",
          "FALSONI, MARINA",
          "MARQUES, MATHEUS AUGUSTO",
          "COIAHY, MARIANA GOMES AMORIM",
          "RODRIGUES, S. C. M."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Acompanhamento de pacientes pós bariátricos e deficiências nutricionais: uma revisão da literatura",
        "doi": "",
        "periodico": "REVISTA BRASILEIRA DE OBESIDADE, NUTRIÇÃO E EMAGRECIMENTO",
        "volume": "19",
        "paginas": "672-683",
        "autores": [
          "OLIVEIRA, E. C. A.",
          "SANTIAGO, T.",
          "SILVA, A. P.",
          "RODRIGUES, S. C. M.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Telerreabilitação nos distúrbios musculoesqueléticos: uma revisão sistemática e meta-análise",
        "doi": "",
        "periodico": "journal of health informatics",
        "volume": "17",
        "paginas": "1402-",
        "autores": [
          "MOREIRA, L. M.",
          "SILVA, A.P.",
          "SCARDOVELLI, T. A.",
          "RODRIGUES, S. C. M.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Uso de aplicativo como recurso para o tratamento de incontinência urinária em gestantes",
        "doi": "10.55892/jrg.v8i19.2345",
        "periodico": "Revista JRG de Estudos Acadêmicos",
        "volume": "8",
        "paginas": "e082345-",
        "autores": [
          "NEVES, KELLY GONÇALVES MARTINEZ",
          "PRADO, ELI CRISTINA RIBEIRO DO",
          "MARTINI, SILVIA CRISTINA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Construction and adaptation of a robotic equipment for blocking execution in sitting volleyball practices",
        "doi": "10.1007/s42600-023-00332-5",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "DE OLIVEIRA, RONALDO GONÇALVES",
          "SILVA, ALESSANDRO PEREIRA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MARTINI, SILVIA CRISTINA",
          "DE MIRANDA MOREIRA, LUCYANA",
          "TEIXEIRA, WELLINGTON CÉLIO RODRIGUES",
          "DA SILVA BOSCHI, SILVIA REGINA MATOS"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Acomodações, intervenções e modificações em sala de aula para estudantes universitários com o Transtorno do Déficit de Atenção com Hiperatividade - TDAH: uma revisão sistemática",
        "doi": "10.54033/cadpedv21n4-099",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e3808-",
        "autores": [
          "FERREIRA, JOÃO CARLOS PEIXOTO",
          "MARTINI, SÍLVIA CRISTINA",
          "GALLO, ROSÂNGELA PEIXOTO",
          "FERREIRA, ROSILENE PEIXOTO",
          "ROCHA, GABRIELLE PEIXOTO",
          "PRADO, ANA CAROLINA DO",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SANTOS, CLAYTON EDUARDO DOS",
          "BOSCHI, SÍLVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Moniz Game: Usability and User Experience Evaluation of a Musical Game for Motor Coordination",
        "doi": "10.1089/g4h.2023.0133",
        "periodico": "Games for Health Journal",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "MONIZ, YASMIM FERNANDES",
          "GUNJI, BRUNO TOSHIO GOMES",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCADOVELLI, TERIGI AUGUSTO",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Knowledge Of Brazilian University Professors About Attention Deficit Hyperactivity Disorder Adhd",
        "doi": "10.9790/487X-2605020111",
        "periodico": "International Organization of Scientific Research",
        "volume": "26",
        "paginas": "1-",
        "autores": [
          "FERREIRA, JOÃO CARLOS PEIXOTO",
          "COUTINHO, R.",
          "GALLO, ROSÂNGELA PEIXOTO",
          "FERREIRA, R. P.",
          "ROCHA, GABRIELLE PEIXOTO",
          "SILVA, A. P.",
          "Boschi, Silvia R. M. da S.",
          "SCARDOVELLI, T.",
          "Martini, Silvia C."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Uso de aplicativos e softwares para práticas clínicas e educacionais na medicina veterinária: uma revisão integrativa",
        "doi": "10.54033/cadpedv21n5-142",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e4169-",
        "autores": [
          "MORAES, ISABELLA TITICO",
          "MARTINI, SILVIA CRISTINA",
          "VALÉRIO, MARIANA DA PALMA",
          "MOURA, LUAN DE ALMEIDA",
          "CAMPOS, HIGOR BARRETO",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Inteligência artificial aplicada ao diagnóstico de câncer por exames de imagem",
        "doi": "10.25248/reac.e16193.2024",
        "periodico": "Revista Eletrônica Acervo Científico",
        "volume": "47",
        "paginas": "e16193-",
        "autores": [
          "CROFFI, LETICIA BRUM",
          "JUDICE, WAGNER",
          "BOSCHI, SILVIA",
          "Martini, Silvia"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Proposta de sistema microcontrolado para monitoramento e controle de pressão arterial utilizando Python",
        "doi": "10.55905/rdelosv17.n60-022",
        "periodico": "DELOS: DESARROLLO LOCAL SOSTENIBLE",
        "volume": "17",
        "paginas": "e2104-",
        "autores": [
          "VALÉRIO, MARIANA DA PALMA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MOURA, LUAN DE ALMEIDA",
          "MORAES, ISABELLA TITICO",
          "SILVA, ANDRÉ ROBERTO FERNANDES DA",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Aplicativos móveis para orientação de mulheres no período do climatério e menopausa",
        "doi": "10.54033/cadpedv21n10-428",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e10002-",
        "autores": [
          "SILVA, JULIANA NOBRE DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SANTOS, MARCELLO FRANCISCO DOS",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "IMPACTO DA PANDEMIA DE COVID-19 NO COMPORTAMENTO DE CRIANÇAS COM AUTISMO",
        "doi": "",
        "periodico": "Boletim Informativo Unimotrisaúde em Sociogerontologia",
        "volume": "48",
        "paginas": "1-",
        "autores": [
          "VASCONCELOS, R. N.",
          "SOUSA, L. R.",
          "SANTOS, 3. N. C. M.",
          "CARVALHO, 4. P. H. C. T.",
          "Silvia C. Martini",
          "MENEGIDIO, F. B.",
          "THEODORIO, D. P."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Uma visão geral dos dispositivos robóticos para reabilitação do cotovelo",
        "doi": "10.25248/reas.e18292.2024",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "24",
        "paginas": "e18292-",
        "autores": [
          "SANTOS, MARCELLO FRANCISCO DOS",
          "PEDROSO, BRUNO MEDINA",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Reabilitação baseada em jogos digitais para crianças com encefalopatia crônica não evolutiva da infância: uma revisão sistemática",
        "doi": "10.18265/1517-0306a2022id7300",
        "periodico": "PRINCIPIA (JOÃO PESSOA)",
        "volume": "61",
        "paginas": "915-",
        "autores": [
          "MONIZ, YASMIM FERNANDES",
          "GUNJI, BRUNO TOSHIO GOMES",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Analysis of anticipatory and compensatory postural adjustment in women of different age groups using surface electromyography.",
        "doi": "10.1088/2057-1976/ad8ce2",
        "periodico": "BIOMEDICAL PHYSICS & ENGINEERING EXPRESS",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "MOURA, L. A.",
          "GONZALEZ, T. O.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "SILVA, A. R. F.",
          "VALERIO, M. P.",
          "CAMPOS, H. B.",
          "CAMARGO, M. L. A.",
          "MORAES, ISABELLA TITICO",
          "RODRIGUES, S. C. M.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Aplicativo móvel: caderneta de saúde digital do adolescente surdo",
        "doi": "10.1590/1980-220x-reeusp-2023-0366pt",
        "periodico": "REVISTA DA ESCOLA DE ENFERMAGEM DA USP",
        "volume": "58",
        "paginas": "e20230366-",
        "autores": [
          "YASUE, THIAGO YUKIO MURAYAMA",
          "OLIVEIRA, CLÁUDIA DOS SANTOS",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, T. A.",
          "BISSACO, MARCIA APARECIDA SILVA",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "SILVA, ROBSON RODRIGUES DA",
          "RODRIGUES, S. C. M."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Os cuidados interdisciplinares em pacientes pós AVE: revisão integrativa",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "08",
        "paginas": "1-12",
        "autores": [
          "THEODORO, L. S.",
          "GOUET, J. B.",
          "COPESKI, T. S.",
          "FRANCO, T. S.",
          "ALVES, M. G. O.",
          "RODRIGUES, S. C. M.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2024",
        "titulo": "A identificação dos estágios de envelhecimento reprodutivo: desafios e implicações para a saúde da mulher",
        "doi": "10.55905/cuadv16n13-092",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "16",
        "paginas": "e6965-",
        "autores": [
          "SILVA, JULIANA NOBRE DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "VIANA, JAQUELINE SANTOS",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "RODRIGUES, S. C. M."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Abordagem diagnóstica de lesões cerebrais em imagens de ressonância magnética por IA",
        "doi": "10.54033/cadpedv21n13-199",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e11960-",
        "autores": [
          "TAVARES, ALMIR RODRIGUES",
          "FRANCO, THIAGO DE SOUZA",
          "OLIVEIRA, CLEBER SILVA DE",
          "SILVA, ROBSON RODRIGUES DA",
          "RODRIGUES, S. C. M.",
          "FAREZ, MAURICIO",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "ROCHA, ANTONIO JOSE DA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Integração de redes neurais e inteligência artificial no diagnóstico de tumores cerebrais: convergência entre tecnologia e saúde",
        "doi": "10.55905/cuadv16n13-154",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "16",
        "paginas": "e7065-",
        "autores": [
          "TAVARES, ALMIR RODRIGUES",
          "FRANCO, THIAGO DE SOUZA",
          "OLIVEIRA, CLEBER SILVA DE",
          "SILVA, ROBSON RODRIGUES DA",
          "RODRIGUES, S. C. M.",
          "FAREZ, MAURICIO",
          "ROCHA, ANTONIO JOSE DA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "O uso da gameterapia para diminuir a oscilação postural",
        "doi": "10.25248/reas.e16983.2024",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "24",
        "paginas": "e16983-",
        "autores": [
          "MOURA, LUAN DE ALMEIDA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "REIS, PAULO CESAR",
          "SILVA, ANDRÉ ROBERTO FERNANDES DA",
          "VALÉRIO, MARIANA DA PALMA",
          "RODRIGUES, S. C. M.",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Visão computacional na saúde: revisão de métodos e desafios educacionais para integração multidisciplinar",
        "doi": "10.55905/cuadv16n13-169",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "16",
        "paginas": "e7088-",
        "autores": [
          "TAVARES, ALMIR RODRIGUES",
          "RIBEIRO, HELIO DE ARAÚJO",
          "CAMPOS, HIGOR BARRETO",
          "OLIVEIRA, CLEBER SILVA DE",
          "SILVA, ROBSON RODRIGUES DA",
          "RODRIGUES, S. C. M.",
          "MENEGIDIO, FABIANO BEZERRA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Desenvolvimento de uma bengala branca com ponteira omnidirecional mecânica ('omini-trip') para deficientes visuais",
        "doi": "10.5281/zenodo.7897294",
        "periodico": "REVISTA FISIO&TERAPIA",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "ALVES, C. C.",
          "BOCK, E. G. P.",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, A. P.",
          "Boschi, Silvia R. M. da S.",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "TECNOLOGIAS ASSISTIVAS DESENVOLVIDAS NA ESCOLA PARA PROMOÇÃO DA INCLUSÃO SOCIAL",
        "doi": "10.56083/rcv3n6-097",
        "periodico": "CONTEMPORÂNEA - REVISTA DE ÉTICA E FILOSOFIA POLÍTICA",
        "volume": "3",
        "paginas": "6497-6532",
        "autores": [
          "ALVES, CLAUDEMIR CLAUDINO",
          "DE RESENDE JUNIOR, RICARDO AGOSTINHO",
          "CAVALCANTI, FABIANA RODRIGUES SILVA DE MIRANDA",
          "DA SILVA, ALESSANDRO PEREIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "DA SILVA, ROBSON RODRIGUES",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "CUIDADORES DE PESSOAS IDOSAS NÃO PODEM CONTAR COM AS INFORMAÇÕES CONTIDAS EM APLICATIVOS E SITES OFICIAIS BRASILEIROS SOBRECONTROLE DE SINTOMAS NOS CUIDADOS PALIATIVOS",
        "doi": "10.5281/zenodo.7931283",
        "periodico": "REVISTA FISIO&TERAPIA",
        "volume": "122",
        "paginas": "1-15",
        "autores": [
          "BEZ, J. P. O.",
          "Martini, Silvia C.",
          "YASUE, T. Y. M."
        ]
      },
      {
        "ano": "2023",
        "titulo": "TRANSFERÊNCIA DE APRENDIZADO PARA CATEGORIZAÇÃO DE PATOLOGIAS",
        "doi": "10.56083/RCV3N9-022",
        "periodico": "CONTEMPORÂNEA - REVISTA DE ÉTICA E FILOSOFIA POLÍTICA",
        "volume": "3",
        "paginas": "13857-13878",
        "autores": [
          "LIMA, CÉSAR ALEXANDRE SILVA",
          "MARTINI, SILVIA CRISTINA",
          "DOS SANTOS, CLAYTON EDUARDO",
          "BISSACO, MÁRCIA APARECIDA SILVA",
          "AMATE, FLÁVIO CÉZAR",
          "GIANCOLI, ANA PAULA MULLER",
          "DA SILVA, ALESSANDRO PEREIRA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Conteúdo on-line para curso de imagens pneumológicas",
        "doi": "10.55905/revconv.16n.9-265",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "16",
        "paginas": "18303-18313",
        "autores": [
          "LEITE, LORRANE SOUZA",
          "MARTINI, SILVIA CRISTINA",
          "SANTOS, ANA MARIA VITARELLI DE CASTRO EMERY",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "DA SILVA, ALESSANDRO PEREIRA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "BISSACO, MÁRCIA APARECIDA DA SILVA",
          "MOREIRA, LUCYANA DE MIRANDA",
          "DE LIMA, DAYANA APARECIDA MACHADO",
          "BORGES, ROBSON FERREIRA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Usabilidade de Aplicativos móveis na fisioterapia: revisão integrativa",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "FRANCO, T. S.",
          "FRANCO, T. S.",
          "DE LIMA, DAYANA APARECIDA MACHADO",
          "Boschi, Silvia R. M. da S.",
          "Martini, Silvia C."
        ]
      },
      {
        "ano": "2023",
        "titulo": "Tecido adiposo marrom: uma alternativa para manutenção de peso em pacientes com obesidade",
        "doi": "10.25248/reas.e13720.2023",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "23",
        "paginas": "e13720-",
        "autores": [
          "SANTIAGO, TATIANA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "MOREIRA, LUCYANA DE MIRANDA",
          "DENARDO, VIVIAN CLEIA BENITES",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "RODRIGUES, S. C. M.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2023",
        "titulo": "Revisão integrativa sobre jogos em análise do comportamento",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "08",
        "paginas": "01-10",
        "autores": [
          "GOUET, J. B.",
          "ABRAHAO, K.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "RODRIGUES, S. C. M.",
          "GONZALEZ, T. O.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2023",
        "titulo": "Software para triagem em pronto socorro por classificação de cores",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "8",
        "paginas": "e080300067-",
        "autores": [
          "SANTOS, E. N.",
          "ABRAHAO, K.",
          "GOUET, J. B.",
          "GONZALEZ, T. O.",
          "RODRIGUES, S. C. M.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Automated methodology for breast segmentation and mammographic density classification using co-occurrence and statistical and SURF descriptors",
        "doi": "10.1504/ijbet.2022.124185",
        "periodico": "INTERNATIONAL JOURNAL OF BIOMEDICAL ENGINEERING AND TECHNOLOGY",
        "volume": "39",
        "paginas": "213-",
        "autores": [
          "PAVUSA JUNIOR, R.",
          "FERNANDES, J. C. L.",
          "BISSACO, M. A. S.",
          "SILVA, A. P.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T.",
          "Martini, S.C."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Risk Factor Forecasting System for Pressure InjuriesThrough Artificial Neural Network",
        "doi": "",
        "periodico": "IEEE Latin America Transactions",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "PEDROSO, B. M.",
          "GUAZZELLI, J. V. S.",
          "SILVA, A. P.",
          "Boschi, Silvia R. M. S.",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, T."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Uso de imagens infravermelhas em tendinopatia calcânea traumática",
        "doi": "10.33448/rsd-v11i5.27829",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e9011527829-",
        "autores": [
          "SILVA, J. N.",
          "MARTINS, R. A. B. L.",
          "Martini, Silvia C.",
          "Boschi, Silvia R. M. da S.",
          "SILVA, A. P.",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Gastroplastia no Brasil: um retrato da evolução do estado nutricional",
        "doi": "10.25248/reas.e9786.2022",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "15",
        "paginas": "p. e9786-",
        "autores": [
          "SANTIAGO, T.",
          "SILVA, A. P.",
          "SZEGO, T.",
          "ANTONACCI JUNIOR, E.",
          "BASSOLS, G. F.",
          "SILVA, T. G.",
          "Boschi, Silvia R. M. da S.",
          "Martini, S.C.",
          "SCARDOVELLI, T."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Dispositivos musicais na reabilitação neurológica no membro superior: uma revisão integrativa",
        "doi": "10.33448/rsd-v11i5.27907",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e10011527907-",
        "autores": [
          "MONIZ, YASMIM FERNANDES",
          "SILVA, ALESSANDRO PEREIRA DA",
          "GUNJI, BRUNO TOSHIO GOMES",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Design of Automated Adaptive Controller for Mean Arterial Pressure in Hypotensive Situations using a Vasopressor Drug",
        "doi": "10.1007/s42600-022-00216-0",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "COELHO, M. S.",
          "DA SILVA, SAMUEL JUSTINO",
          "SCARDOVELLI, T.",
          "Boschi, Silvia R. M. da S.",
          "Martini, S. C.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Dispositivo de barras paralelas com estímulo vibratório controlado via Interface Homem Máquina (IHM) para reabilitação de neuropatologias",
        "doi": "10.33448/rsd-v11i7.29964",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e28411729964-",
        "autores": [
          "MORAIS, ANTONIO VINÍCIUS DE",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MOURA, LUAN DE ALMEIDA",
          "MONIZ, YASMIM FERNANDES",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Método não invasivo versus método invasivo para medição de pressão arterial em roedores: uma revisão integrativa da literatura",
        "doi": "10.33448/rsd-v11i8.30789",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e4911830789-",
        "autores": [
          "VALÉRIO, MARIANA DA PALMA",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Development of a dynamic balance analysis and training system through posturography in a bipodal force platform with biaxial rotation",
        "doi": "10.1007/s42600-022-00223-1",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "ISHIZAKI, MARCIO TADASHI",
          "DA SILVA, ANDRÉ ROBERTO FERNANDES",
          "DE ALMEIDA MOURA, LUAN",
          "DOS REIS, PAULO CESAR",
          "LAZZARESCHI, LEANDRO",
          "DA SILVA BOSCHI, SILVIA REGINA MATOS",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "DA SILVA, ALESSANDRO PEREIRA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Dispositivos para ortostatismo para pessoas com mobilidade reduzida: revisão integrativa",
        "doi": "10.33448/rsd-v11i9.30278",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e35911930278-",
        "autores": [
          "ALVES, NAZARETI PEREIRA FERREIRA",
          "CECÍLIO, MARIANA DE MORAES",
          "MOREIRA, LUCYANA DE MIRANDA",
          "MARTINI, SILVA CRISTINA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, SÉRGIO GOMES DA",
          "LIRA NETO, JOSÉ CLAUDIO GARCIA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "EL DORADO: JOGO SÉRIO DESENVOLVIDO PARA ESTIMULAÇÃO SENSORIAL EM CRIANÇAS COM TRANSTORNO DO ESPECTRO AUTISTA",
        "doi": "10.24325/issn.2446-5763.v8i23p1-24",
        "periodico": "SOUTH AMERICAN DEVELOPMENT SOCIETY JOURNAL",
        "volume": "8",
        "paginas": "1-24",
        "autores": [
          "SOUZA, R. R. B.",
          "BRAVIN, M.",
          "RODRIGUES, H. C.",
          "RODRIGUES, SILVIA CRISTINA MARTINI",
          "Bissaco, Márcia A. S."
        ]
      },
      {
        "ano": "2022",
        "titulo": "ONTOLOGIA COMPUTACIONAL ? UM MODELO DE DADOS PARA REPRESENTAÇÃO DO CONHECIMENTO",
        "doi": "",
        "periodico": "REVISTA UNIVERSITAS",
        "volume": "31",
        "paginas": "11-",
        "autores": [
          "MACEDO, R. C. C.",
          "MACEDO, P. C.",
          "Martini, S.C."
        ]
      },
      {
        "ano": "2021",
        "titulo": "Construção de um equipamento para auxiliar no treinamento de ataque e defesa para a modalidade voleibol sentado",
        "doi": "",
        "periodico": "COLEÇÃO PESQUISA EM EDUCAÇÃO FÍSICA",
        "volume": "20",
        "paginas": "47-54",
        "autores": [
          "OLIVEIRA, R. G.",
          "SILVA, A. P.",
          "SCARDOVELLI, T.",
          "Martini, S. C.",
          "Boschi, Silvia R. M. da S."
        ]
      },
      {
        "ano": "2021",
        "titulo": "The use and impact of mHealth by community health workers in developing and least developed countries: a systematic review",
        "doi": "10.1007/s42600-021-00154-3",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "37",
        "paginas": "1-",
        "autores": [
          "ABREU, F. D. L.",
          "BISSACO, M. A. S.",
          "SILVA, A. P.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T.",
          "SANTOS, M. F.",
          "Rodrigues, Camila Cristina Martini",
          "Martini, S. C."
        ]
      },
      {
        "ano": "2021",
        "titulo": "AS IMPRESSÕES DOS AGENTES DE COMBATE ÀS ENDEMIAS NO BRASIL SOBRE AS TECNOLOGIAS MÓVEIS UTILIZADAS",
        "doi": "10.21920/recei72021721416430",
        "periodico": "REVISTA ELETRÔNICA CIENTÍFICA ENSINO INTERDISCIPLINAR",
        "volume": "7",
        "paginas": "21-",
        "autores": [
          "ABREU, F. D. L.",
          "ZANIN, N. B.",
          "Martini, S. C."
        ]
      },
      {
        "ano": "2021",
        "titulo": "Políticas públicas de humanização voltadas à qualidade de vida após câncer ginecológico e de mama",
        "doi": "10.5935/2675-5602.20200134",
        "periodico": "Global Academic Nursing Journal",
        "volume": "2",
        "paginas": "1-",
        "autores": [
          "FERNANDES, INGRIDY TAYANE GONÇALVES PIRES",
          "VIANA, JAQUELINE SANTOS",
          "PANHOCA, IVONE",
          "Rodrigues, Silvia Cristina Martini",
          "PAIVA, ELIZIA ESTHER CALIXTO"
        ]
      },
      {
        "ano": "2021",
        "titulo": "Impact of a virtual zoo on the learning and effectiveness motivation of children with reading difficulties in the initial phase of literacy",
        "doi": "",
        "periodico": "HUMANIDADES & INOVAÇÃO",
        "volume": "8",
        "paginas": "314-",
        "autores": [
          "DOMINGUES, A. M.",
          "SILVA, A. P.",
          "Martini, Silvia C.",
          "SCARDOVELLI, T.",
          "CASTRO, M. V.",
          "Bissaco, Márcia A. S."
        ]
      },
      {
        "ano": "2021",
        "titulo": "PERFIL EPIDEMIOLÓGICO DO PACIENTE PÓS ACIDENTE VASCULAR ENCEFÁLICO: REVISÃO iNTEGRATIVA",
        "doi": "",
        "periodico": "REVISTA CIENTIFICA INTEGRADA UNAERP CAMPUS GUARUJÁ",
        "volume": "5",
        "paginas": "1-",
        "autores": [
          "MIRANDA, P. A.",
          "MOREIRA, L. M.",
          "Martini Rodrigues, S.",
          "ALVES, N. P. F."
        ]
      },
      {
        "ano": "2021",
        "titulo": "ATUAÇÃO DA FISIOTERAPIA NA DOR LOMBAR CRÔNICA: UMA REVISÃO INTEGRATIVA DA LITERATURA",
        "doi": "",
        "periodico": "REVISTA CIENTIFICA INTEGRADA UNAERP CAMPUS GUARUJÁ",
        "volume": "5",
        "paginas": "1-",
        "autores": [
          "MOREIRA, E. C. S.",
          "ALVES, N. P. F.",
          "ALVES, R. L. P.",
          "Martini Rodrigues, S.",
          "MOREIRA, L. M."
        ]
      },
      {
        "ano": "2021",
        "titulo": "DESENVOLVIMENTO DE PROTÓTIPO E ANÁLISE DE PROJETO DE ANDADOR DE BAIXO CUSTO CONSTRUÍDO COM TUBOS DE PVC",
        "doi": "",
        "periodico": "REVISTA CIENTIFICA INTEGRADA UNAERP CAMPUS GUARUJÁ",
        "volume": "5",
        "paginas": "1-",
        "autores": [
          "JARDIM, E. G. G.",
          "ALVES, N. P. F.",
          "ALVES, R. L. P.",
          "Martini Rodrigues, S.",
          "MOREIRA, L. M."
        ]
      },
      {
        "ano": "2021",
        "titulo": "patologIA: online platform for improving image-based diagnostics applied to medical students",
        "doi": "",
        "periodico": "PROCEEDINGS OF SPIE, THE INTERNATIONAL SOCIETY FOR OPTICAL ENGINEERING",
        "volume": "11601",
        "paginas": "116010T-",
        "autores": [
          "LIMA, C. A. S.",
          "SANTOS, C. E. S.",
          "BISSACO, M. A. S.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S.",
          "RODRIGUES, S. C. M."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Memorization of Daily Routines by Children with Down Syndrome Assisted by Playful Virtual Environment",
        "doi": "10.1038/s41598-020-60014-5",
        "periodico": "Scientific Reports",
        "volume": "10",
        "paginas": "3144-",
        "autores": [
          "NETTO, O. L. C.",
          "RODRIGUES, S. C. M.",
          "CASTRO, M. V.",
          "SILVA, D. P.",
          "Bissaco, Márcia A. S."
        ]
      },
      {
        "ano": "2020",
        "titulo": "PERCEPÇÕES DOS AGENTES COMUNITÁRIOS DE SAÚDE SOBRE AS TECNOLOGIAS DE INFORMAÇÃO E COMUNICAÇÃO NA ATENÇÃO PRIMÁRIA À SAÚDE: UMA PESQUISA EXPLORATÓRIA",
        "doi": "",
        "periodico": "HUMANIDADES & INOVAÇÃO",
        "volume": "7",
        "paginas": "32-",
        "autores": [
          "Abreu, Francisco Douglas Lima",
          "ZANIN, N. B.",
          "BISSACO, M. A. S.",
          "SILVA, A. P.",
          "Boschi, Silvia R. M. da S.",
          "SCARDOVELLI, T.",
          "Martini, S. C."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Distribution of mass and center of pressure in dynamic balance presented by an instrumented wobble board",
        "doi": "10.1007/s42600-020-00092-6",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "DA SILVA, ANDRÉ ROBERTO FERNANDES",
          "LAZZARESCHI, LEANDRO",
          "DE PAULA BISCHOF, KAROLINE",
          "ISHIZAKI, MARCIO TADASHI",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "DA SILVA BOSCHI, SILVIA REGINA MATOS",
          "DA SILVA, ALESSANDRO PEREIRA"
        ]
      },
      {
        "ano": "2020",
        "titulo": "DESENVOLVIMENTO DE CONTEÚDO PARA PLATAFORMA ONLINE PARA TREINAMENTO NA INTERPRETAÇÃO DE IMAGENS MÉDICAS",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "5",
        "paginas": "1-",
        "autores": [
          "GATICA, C.",
          "ABREU, F. D. L.",
          "Martini, S.C."
        ]
      },
      {
        "ano": "2020",
        "titulo": "ENSINO E APLICAÇÕES DOS NÚMEROS COMPLEXOS NA ENGENHARIA ELÉTRICA",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "5",
        "paginas": "2-",
        "autores": [
          "SANTOS, B. H. S.",
          "SIQUEIRA, R. A. M.",
          "SILVA, R. R.",
          "Martini, S. C."
        ]
      },
      {
        "ano": "2020",
        "titulo": "UTILIZAÇÃO DE KITS DIDÁTICOS PARA COMPLEMENTAR O ENSINO DE CÁLCULO DIFERENCIAL E INTEGRAL NAS ENGENHARIAS (PARTE II)",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "5",
        "paginas": "3-",
        "autores": [
          "CORREA, K. A. M.",
          "SILVA, R. R.",
          "Martini, S.C."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Interface assistiva para auxiliar a formação profissional de pessoas com limitações motoras",
        "doi": "",
        "periodico": "HUMANIDADES & INOVAÇÃO",
        "volume": "7",
        "paginas": "46-51",
        "autores": [
          "ALEXANDRUK, M.",
          "SCARDOVELLI, T.",
          "SILVA, A. R. F.",
          "Martini, S. C.",
          "MARTUCCI NETO, H.",
          "Boschi, Silvia R. M. da S.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Mechanical tensile teste of the body adhesive elastic tape",
        "doi": "10.24327/ijrsr.2020.1101.5062",
        "periodico": "INTERNATIONAL JOURNAL OF RECENT SCIENTIFIC RESEARCH",
        "volume": "11",
        "paginas": "37150-",
        "autores": [
          "MORINI JUNIOR, N.",
          "Martini, S. C.",
          "MARTINS, R. A. B. L.",
          "CANUTO, G.",
          "SILVA, R. R.",
          "SCARDOVELLI, T.",
          "Boschi, Silvia R. M. da S.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Real-time simulation device for mean arterial pressure of hypotensive patient subjected phenylephrine infusion",
        "doi": "10.1049/el.2020.1383",
        "periodico": "ELECTRONICS LETTERS (ONLINE)",
        "volume": "56",
        "paginas": "865-868",
        "autores": [
          "COELHO, M.S.",
          "SILVA, S.J.",
          "BOSCHI, S.R.M.S.",
          "Rodrigues, S.C.M.",
          "SCARDOVELLI, T.A.",
          "BARBUY, H.S.",
          "SILVA, A.P."
        ]
      },
      {
        "ano": "2019",
        "titulo": "ALTRIRAS: A Computer Game for Training Children with Autism Spectrum Disorder in the Recognition of Basic Emotions",
        "doi": "10.1155/2019/4384896",
        "periodico": "INTERNATIONAL JOURNAL OF COMPUTER GAMES TECHNOLOGY",
        "volume": "2019",
        "paginas": "1-16",
        "autores": [
          "ALMEIDA, L. M.",
          "SILVA, D. P.",
          "THEODORIO, D. P.",
          "SILVA, W. W.",
          "Rodrigues, S.C.M.",
          "SCARDOVELLI, T.",
          "SILVA, A. P.",
          "BISSACO, M. A. S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Whole-body vibration on parallel bar device for gait and balance rehabilitation in stroke patients",
        "doi": "10.1007/s42600-019-00014-1",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "35",
        "paginas": "123-129",
        "autores": [
          "MOREIRA NETO, A. A.",
          "THOMAS JUNIOR, G.",
          "LAZZARESCHI, L.",
          "ALMEIDA, D. V.",
          "SANTOS, M. F.",
          "BOSCHI, S. R. M. S.",
          "Martini, S.C.",
          "SCARDOVELLI, T.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Simple adaptive PI controller development and evaluation for mean arterial pressure regulation",
        "doi": "10.1007/s42600-019-00017-y",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "35",
        "paginas": "157-168",
        "autores": [
          "DA SILVA, SAMUEL JUSTINO",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "DA SILVA BOSCHI, SILVIA REGINA MATOS",
          "Rodrigues, Silvia Cristina Martini",
          "DA SILVA, ALESSANDRO PEREIRA"
        ]
      },
      {
        "ano": "2019",
        "titulo": "Use of Platform in the Training of Medical Students",
        "doi": "",
        "periodico": "Global Clinical Engineering Journal",
        "volume": "2",
        "paginas": "133-133",
        "autores": [
          "ABREU, F. D. L.",
          "SILVA, S. M.",
          "SILVA, A. P.",
          "BISSACO, M. A. S.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T.",
          "Martini, S.C."
        ]
      },
      {
        "ano": "2019",
        "titulo": "PHCHAT: A Chatbot Mobile Application to Assist Professionals in Primary Health Care",
        "doi": "",
        "periodico": "Global Clinical Engineering Journal",
        "volume": "2",
        "paginas": "138-138",
        "autores": [
          "BISSACO, M. A. S.",
          "SILVA, A. P.",
          "SCARDOVELLI, T.",
          "BOSCHI, S. R. M. S.",
          "MARTINI, S.",
          "Martini, S. C.",
          "ABREU, F. D. L."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Desenvolvimento de conteúdo para plataforma online para a disciplina fisioterapia pneumológica",
        "doi": "",
        "periodico": "Revista Científica UMC",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "LEITE, L. S.",
          "ABREU, F. D. L.",
          "BISSACO, M. A. S.",
          "RODRIGUES, S. C. M."
        ]
      },
      {
        "ano": "2019",
        "titulo": "ANALYSIS OF COLLAGEN PRODUCTION IN HYPERTROPHIC CARDIAC TISSUE OF RATS TREATED WITH L-NAME AND L-ARGININE BY IMAGE PROCESSING",
        "doi": "10.18066/revistaunivap.v25i48.2283",
        "periodico": "Revista UniVap",
        "volume": "25",
        "paginas": "24-",
        "autores": [
          "MARSON, VANESSA OLIVEIRA COLOMBO",
          "BISSACO, MÁRCIA APARECIDA SILVA",
          "RAMOS, LUCIANO",
          "Rodrigues, Silvia Cristina Martini",
          "DA SILVA, ROMILDO TORRES",
          "MAFRA, FERNANDO FRANCISCO PAZELLO",
          "MACEDO, MICHEL MONTEIRO",
          "MARTINS, PATRÍCIA SARDINHA LEONARDO LOPES",
          "MARTINS, RODRIGO ALVARO BRANDÃO LOPES"
        ]
      },
      {
        "ano": "2019",
        "titulo": "Leap motion for grip movement training for adults with fine motor limitation",
        "doi": "",
        "periodico": "REVISTA DIÁLOGOS INTERDISCIPLINARES",
        "volume": "8",
        "paginas": "1-",
        "autores": [
          "ALVES, J. C.",
          "BOSCHI, S. R. M. S.",
          "SANTOS, L. L.",
          "SILVA, R. C.",
          "Martini, S. C.",
          "SILVA, A. P.",
          "Dirani, E.A.T.",
          "SCARDOVELLI, T."
        ]
      },
      {
        "ano": "2019",
        "titulo": "GAME ELIGERE NATURALIS: AWARENESS ABOUT PRESERVATION OF ENVIRONMENT ? A CASE STUDY",
        "doi": "",
        "periodico": "REVISTA DIÁLOGOS INTERDISCIPLINARES",
        "volume": "8",
        "paginas": "1-",
        "autores": [
          "OLIVEIRA, D. V.",
          "MORINI, M. S. C.",
          "BONINI, L. M. M.",
          "SILVA, D. P.",
          "BISSACO, M. A. S.",
          "MARTINI, S.",
          "Martini Rodrigues, S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "DESENVOLVIMENTO DE UMA PALMILHA SENSORIAL PARA MARCHA EM PACIENTES PÓS - ACIDENTE VASCULAR ENCEFÁLICO",
        "doi": "",
        "periodico": "REVISTA DIÁLOGOS INTERDISCIPLINARES",
        "volume": "8",
        "paginas": "1-",
        "autores": [
          "MUFFO, C.",
          "SANTOS, M. F.",
          "CAVALCANTI, F. R. S. M.",
          "SCARDOVELLI, T.",
          "DA SILVA BOSCHI, SILVIA REGINA MATOS",
          "SILVA, A. P.",
          "Martini, Silvia C."
        ]
      },
      {
        "ano": "2019",
        "titulo": "A Virtual Environment to Motivate Children's Handgrip",
        "doi": "",
        "periodico": "AMERICAN JOURNAL OF ENGINEERING RESEARCH",
        "volume": "8",
        "paginas": "157-164",
        "autores": [
          "MATOS, M. P.",
          "SILVA, A. P.",
          "CROCHI, D.",
          "SANTOS, M. F.",
          "RODRIGUES, S. C. M.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Development and pilot testing of a new device for q-angle measurement",
        "doi": "10.9790/9622- 0911026268",
        "periodico": "INTERNATIONAL JOURNAL OF ENGINEERING RESEARCH AND APPLICATIONS (IJERA)",
        "volume": "9",
        "paginas": "62-68",
        "autores": [
          "CROCHI, D.",
          "SILVA, A. P.",
          "Boschi, Silvia R. M. S.",
          "Silva, Tiago R. S.",
          "SILVA, A. R. F.",
          "SANTOS, M. F.",
          "Ota, Natasha H.",
          "BISCHOF, K.",
          "MOURA, L. A.",
          "RODRIGUES, S. C. M.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Development and pilot testing of a new electromyography device - EMG Lavita",
        "doi": "",
        "periodico": "IOSR JOURNAL OF ENGINEERING",
        "volume": "9",
        "paginas": "37-44",
        "autores": [
          "Crochi, Douglas",
          "SCARDOVELLI, T. A.",
          "SILVA, A. P.",
          "Silva, Tiago R. S.",
          "SILVA, A. R. F.",
          "SANTOS, M. F.",
          "Ota, Natacha H.",
          "BISCHOF, K.",
          "MOURA, L. A.",
          "RODRIGUES, S. C. M.",
          "Boschi, Silvia R. M. S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Leap Motion para treinamento do movimento de preensão para adultos com limitação motora leve",
        "doi": "",
        "periodico": "REVISTA DIÁLOGOS INTERDISCIPLINARES",
        "volume": "8",
        "paginas": "1-16",
        "autores": [
          "ALVES, J.",
          "BOSCHI, S. R. M. S.",
          "SANTOS, L. L.",
          "SILVA, R. C.",
          "RODRIGUES, S. C. M.",
          "SILVA, A. P.",
          "DIRANI, E. A. T.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2018",
        "titulo": "Multiple Sclerosis: Comparison of the Conventional Spin-Echo T2-Weighted and Flair Techniques Through Image Processing",
        "doi": "10.1166/jmihi.2018.2329",
        "periodico": "Journal of Medical Imaging and Health Informatics",
        "volume": "8",
        "paginas": "425-430",
        "autores": [
          "SIMAO, R. S.",
          "ALVES, R. F. A.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T.",
          "Rodrigues, S.C.M.",
          "BIANCHI, C.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2018",
        "titulo": "AACVOX: mobile application for augmentative alternative communication to help people with speech disorder and motor impairment",
        "doi": "10.1590/2446-4740.06117",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "34",
        "paginas": "166-175",
        "autores": [
          "SILVA, D. P.",
          "AMATE, F. C.",
          "BISSACO, M. A. S.",
          "Rodrigues, S.C.M."
        ]
      },
      {
        "ano": "2018",
        "titulo": "O ensino a distância como método de aprendizagem para o ensino superior presencial",
        "doi": "",
        "periodico": "Revista Científica UMC",
        "volume": "3",
        "paginas": "1-4",
        "autores": [
          "FERREIRA, A. C. V. S.",
          "Rodrigues, S. C. M."
        ]
      },
      {
        "ano": "2018",
        "titulo": "Jogo Computadorizado para Auxiliar no Ensino da Língua Brasileira de Sinais (Libras): teste de efetividade",
        "doi": "",
        "periodico": "Revista Científica UMC",
        "volume": "1",
        "paginas": "5-",
        "autores": [
          "ANTUNES, B. R.",
          "Rodrigues, S.C.M.",
          "BISSACO, M. A. S."
        ]
      },
      {
        "ano": "2018",
        "titulo": "ESTUDO DA APLICAÇÃO DO CÁLCULO DIFERENCIAL E INTEGRAL NA ENGENHARIA",
        "doi": "",
        "periodico": "Revista Científica UMC",
        "volume": "1",
        "paginas": "10-",
        "autores": [
          "MENDES, N. D.",
          "CAMARGO, L. S.",
          "SILVA, R. R.",
          "Rodrigues, S.C.M."
        ]
      },
      {
        "ano": "2018",
        "titulo": "CARACTERÍSTICA DO JOGO DE BOCHA DA CLASSE BC1 A PARTIR DA ANÁLISE DA ÁREA DE ARREMESSO",
        "doi": "",
        "periodico": "REVISTA BRASILEIRA DE MEDICINA DO ESPORTE (ONLINE)",
        "volume": "24",
        "paginas": "54-",
        "autores": [
          "BERTOLDO, S. S.",
          "ALVES, N. P. F.",
          "Martini, S.C.",
          "MOREIRA, L. M."
        ]
      },
      {
        "ano": "2018",
        "titulo": "Knowledge and Attitudes of Brazilian Dental Students About Bisphosphonate-Related Osteonecrosis of the Jaw",
        "doi": "10.1016/j.oooo.2018.02.630",
        "periodico": "Oral Surgery Oral Medicine Oral Pathology Oral Radiology",
        "volume": "126",
        "paginas": "e158-",
        "autores": [
          "MAEDA, CLAUDIA YUMI",
          "DA MATA, PAULA SENA",
          "CAVALCANTI, DESIREE ROSA",
          "MARTINI RODRIGUES, SILVIA CRISTINA",
          "MARCUCCI, MARCELO"
        ]
      },
      {
        "ano": "2016",
        "titulo": "AMBIENTE VIRTUAL DE APRENDIZAGEM NA EDUCAÇÃO DE DEFICIENTES AUDITIVOS",
        "doi": "",
        "periodico": "RIT - REVISTA INOVAÇÃO TECNOLÓGICA",
        "volume": "6",
        "paginas": "80-",
        "autores": [
          "FERNANDES, J. C. L.",
          "Rodrigues, S. C. M."
        ]
      },
      {
        "ano": "2016",
        "titulo": "IC4U: O Desenvolvimento de um Método de Navegação Indoor Para Deficientes Visuais de Baixo Custo",
        "doi": "",
        "periodico": "Revista de Estudos e Reflexões Tecnológicas da Fatec Indaiatuba",
        "volume": "14",
        "paginas": "1-",
        "autores": [
          "OSSADA, S.",
          "OSSADA, J.",
          "Kawamoto Jr., L. T.",
          "Rodrigues, S. C. M."
        ]
      },
      {
        "ano": "2016",
        "titulo": "COMPUTATIONAL SOLUTION FOR THE AUXILIARY IN THE LITERACY OF DEAF",
        "doi": "",
        "periodico": "ENIAC Pesquisa",
        "volume": "5",
        "paginas": "193-",
        "autores": [
          "FERNANDES, J. C. L.",
          "Rodrigues, S. C. M."
        ]
      },
      {
        "ano": "2016",
        "titulo": "A Tecnologia da informação em colaboração na comunicação dos deficientes auditivos",
        "doi": "",
        "periodico": "FaSCi-Tech",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "OSSADA, S.",
          "RODRIGUES, S. C. M."
        ]
      },
      {
        "ano": "2016",
        "titulo": "SOLUÇÃO COMPUTACIONAL PARA AUXILIAR NA ALFABETIZAÇÃO DE SURDOS",
        "doi": "",
        "periodico": "ENIAC Pesquisa",
        "volume": "5",
        "paginas": "193-203",
        "autores": [
          "FERNANDES, J. C. L.",
          "RODRIGUES, S. C. M."
        ]
      },
      {
        "ano": "2015",
        "titulo": "Virtual Environment to Aid the Assessment of Basic Math Concepts in Children with ADHD",
        "doi": "10.4028/www.scientific.net/KEM.638.339",
        "periodico": "Key Engineering Materials (Online)",
        "volume": "638",
        "paginas": "339-343",
        "autores": [
          "IANAGUIVARA, E. S.",
          "CANDIAGO, A",
          "Kawamoto Jr., L. T.",
          "RODRIGUES, S. C. M.",
          "SILVA, A. P.",
          "SCARDOVELLI, T."
        ]
      },
      {
        "ano": "2015",
        "titulo": "Instrumental Assistance to the Restorative Dentistry Treatments",
        "doi": "10.4028/www.scientific.net/KEM.638.322",
        "periodico": "Key Engineering Materials (Online)",
        "volume": "638",
        "paginas": "322-326",
        "autores": [
          "KAWAMOTO, W. O.",
          "RODRIGUES, S. C. M.",
          "Kawamoto Jr., L. T."
        ]
      },
      {
        "ano": "2015",
        "titulo": "Quality Comparison of Analog and Digital X-Ray Equipment and Materials in a Dental Clinic",
        "doi": "10.4028/www.scientific.net/KEM.660.330",
        "periodico": "Key Engineering Materials (Online)",
        "volume": "660",
        "paginas": "330-334",
        "autores": [
          "Kawamoto Jr., L. T.",
          "KAWAMOTO, W. O.",
          "FORMIGONI, A.",
          "RODRIGUES, E. F.",
          "CAMPOS, I. P. A.",
          "RODRIGUES, S. C. M."
        ]
      },
      {
        "ano": "2015",
        "titulo": "Uma análise de softwares para inclusão de deficientes auditivos na educação à distância",
        "doi": "",
        "periodico": "Reverte",
        "volume": "1",
        "paginas": "30-37",
        "autores": [
          "OSSADA, S.",
          "RODRIGUES, S. C. M."
        ]
      },
      {
        "ano": "2014",
        "titulo": "ISOLAMENTO OU COLABORAÇÃO: PERCURSOS, TRAFEGOS E CAMINHOS NA EDUCAÇÃO A DISTÂNCIA",
        "doi": "10.18264/eadf.v3i1.142",
        "periodico": "EAD em Foco",
        "volume": "4",
        "paginas": "8-16",
        "autores": [
          "CARDOSO, A. M.",
          "CARLETO, N.",
          "GENOVEZ, M. S.",
          "RODRIGUES, S. C. M."
        ]
      },
      {
        "ano": "2014",
        "titulo": "Virtual Environment to Aid in the Teaching of Multiplication Tables to Elementary and Middle School Students with ADHD",
        "doi": "10.4028/www.scientific.net/AMM.610.638",
        "periodico": "Applied Mechanics and Materials",
        "volume": "610",
        "paginas": "638-641",
        "autores": [
          "SANCHES, W. M.",
          "Kawamoto Jr., L. T.",
          "Rodrigues, S.C.M.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2014",
        "titulo": "Free Software for the Detection of Structures in Breast Images",
        "doi": "10.4028/www.scientific.net/AMM.590.814",
        "periodico": "Applied Mechanics and Materials",
        "volume": "590",
        "paginas": "814-818",
        "autores": [
          "CAMPELO, R.",
          "Rodrigues, S. C. M.",
          "BISSACO, M. A. S.",
          "Kawamoto Jr., L. T.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2014",
        "titulo": "As novas tecnologias da informação e da comunicação (NTICs) na gestão educacional e no ensino",
        "doi": "",
        "periodico": "EAD em Foco",
        "volume": "4",
        "paginas": "27-35",
        "autores": [
          "GENOVEZ, M. S.",
          "CARDOSO, A. M.",
          "CARLETO, N.",
          "Rodrigues, S. C. M."
        ]
      },
      {
        "ano": "2014",
        "titulo": "Effect of a Virtual Environment on the Development of Mathematical Skills in Children with Dyscalculia",
        "doi": "10.1371/journal.pone.0103354",
        "periodico": "Plos One",
        "volume": "9",
        "paginas": "e103354-",
        "autores": [
          "CASTRO, M. V.",
          "BISSACO, M. A. S.",
          "PANCCIONI, B. M.",
          "Rodrigues, S.C.M.",
          "DOMINGUES, A. M."
        ]
      },
      {
        "ano": "2014",
        "titulo": "Ambiente mediado por computador para auxiliar alunos com necessidades especiais auditivas na aprendizagem da língua portuguesa",
        "doi": "10.22287/ag.v1i14.241",
        "periodico": "Augusto Guzzo Revista Acadêmica (São Paulo)",
        "volume": "1",
        "paginas": "135-",
        "autores": [
          "FERNANDES, J. C. L.",
          "Rodrigues, Silvia Cristina Martini"
        ]
      },
      {
        "ano": "2014",
        "titulo": "EDUCAÇÃO, TECNOLOGIAS DA INFORMAÇÃO E COMUNICAÇÃO: POSSIBILIDADES E DESAFIOS",
        "doi": "10.18264/eadf.v4i1.192",
        "periodico": "EAD em Foco",
        "volume": "4",
        "paginas": "27-35",
        "autores": [
          "GENOVEZ, M. S.",
          "CARLETO, N.",
          "CARDOSO, A. M.",
          "Rodrigues, S.C.M."
        ]
      },
      {
        "ano": "2014",
        "titulo": "Virtual Environment: assistance in nursing care for the deaf based on the protocol of Primary Care",
        "doi": "10.1590/S0080-623420140000400022",
        "periodico": "Revista da Escola de Enfermagem da USP",
        "volume": "48",
        "paginas": "731-738",
        "autores": [
          "Rodrigues, Silvia Cristina Martini",
          "DAMIÃO, GARDÊNIA COSTA"
        ]
      },
      {
        "ano": "2013",
        "titulo": "Tecnologias associadas ao diagnóstico do Câncer de Mama",
        "doi": "",
        "periodico": "REVERTE",
        "volume": "11",
        "paginas": "81-84",
        "autores": [
          "FURGERI, S.",
          "Silvia C.M. Rodrigues",
          "SILVA, S. M."
        ]
      },
      {
        "ano": "2013",
        "titulo": "A virtual environment to help deaf students with written language",
        "doi": "10.1504/ijbet.2013.056283",
        "periodico": "INTERNATIONAL JOURNAL OF BIOMEDICAL ENGINEERING AND TECHNOLOGY",
        "volume": "12",
        "paginas": "26-",
        "autores": [
          "LOPES FERNANDES, JOAO CARLOS",
          "Rodrigues, Silvia Cristina Martini",
          "NETTO, OVÍDIO LOPES DA CRUZ"
        ]
      },
      {
        "ano": "2012",
        "titulo": "Development and Validation of a Virtual Environment to Evaluate the Capacity in Executing the Safety Procedures in Recreational Scuba Diving",
        "doi": "10.1089/g4h.2011.0013",
        "periodico": "Games for Health Journal",
        "volume": "1",
        "paginas": "104-114",
        "autores": [
          "Kawamoto Jr., L. T.",
          "Slaets, Annie France Frère",
          "RODRIGUES, S. C. M."
        ]
      },
      {
        "ano": "2000",
        "titulo": "New Method to Analysis of Results Obtained by Computer Aided Diagnosis in Digital Radiography",
        "doi": "",
        "periodico": "Medical Physics",
        "volume": "27",
        "paginas": "-",
        "autores": [
          "RODRIGUES, S. C. M.",
          "FRERE, A. F."
        ]
      },
      {
        "ano": "1999",
        "titulo": "Method for Evaluation of Processing Algorithms for Mammary Microcalcifications Diagnoses",
        "doi": "",
        "periodico": "Medical & Biological Engineering & Computing",
        "volume": "37",
        "paginas": "672-673",
        "autores": [
          "RODRIGUES, S. C. M.",
          "Slaets, Annie France Frère"
        ]
      }
    ],
    "softwares": [
      {
        "titulo": "TutorRad",
        "ano": "2026",
        "finalidade": "O TutorRad é uma plataforma educacional inteligente desenvolvida para apoiar o ensino, o treinamento e a capacitação na interpretação de imagens radiológicas. O sistema integra recursos de inteligência artificial, processamento de imagens e ferramentas de",
        "plataforma": "Python; JavaScript; CSS"
      },
      {
        "titulo": "GymGuardian ? Aluno",
        "ano": "2025",
        "finalidade": "Software para uso de gestantes (alunos) para atividades físicas",
        "plataforma": "AJAX, CSS, HTML, Java Script, JQUERY, JSON, PHP e SQL"
      },
      {
        "titulo": "GymGuardian ? Personal",
        "ano": "2025",
        "finalidade": "Uso para o educador físico controlar, gerenciar e propor atividades fisicas para gestantes",
        "plataforma": "AJAX, CSS, HTML, Java Script, JQUERY, JSON, PHP e SQL"
      },
      {
        "titulo": "HOMECAREFINDER",
        "ano": "2025",
        "finalidade": "Auxilio ao fisioterapeuta",
        "plataforma": "java script"
      },
      {
        "titulo": "Plataforma online para Aprimoramento de Treinamento Baseados em Imagens Aplicada a Estudantes do Curso de Medicina",
        "ano": "2024",
        "finalidade": "Plataforma de treinamento médico",
        "plataforma": "DJANGO"
      },
      {
        "titulo": "QualyLife",
        "ano": "2024",
        "finalidade": "Aplicativo para auxilio a anlaise quantitativa do questionário WHOQOL",
        "plataforma": "outros"
      },
      {
        "titulo": "MenoFeme",
        "ano": "2024",
        "finalidade": "Conhecimento sobre o climatério",
        "plataforma": "Java"
      },
      {
        "titulo": "Physio Pro",
        "ano": "2024",
        "finalidade": "Permitir a interação fisioterapeuta-paciente, na reabilitação musculoesquelética, com o uso de TR, a partir das necessidades dos profissionais da área, com uma interface  compatível tanto com o sistema Android quanto com o sistema iOS.",
        "plataforma": "Framework"
      },
      {
        "titulo": "Melhor em casa",
        "ano": "2023",
        "finalidade": "cuidados paliativos",
        "plataforma": "java, outros"
      },
      {
        "titulo": "Operação Braille",
        "ano": "2023",
        "finalidade": "ensino braille",
        "plataforma": "c#, unity"
      },
      {
        "titulo": "PROTÓTIPO DE UM SOFTWARE, CONTRAST GAME, PARA TREINAMENTO DE TÉCNICOS EM RADIOLOGIA NA OBTENÇÃO DE EXAMES RADIOLÓGICOS",
        "ano": "2022",
        "finalidade": "Treinamento de técnicos em radiologia",
        "plataforma": "C#"
      },
      {
        "titulo": "LANE: UM ASSISTENTE VIRTUAL PARA SUPORTE ÀS DÚVIDAS NA ATENÇÃO PRIMÁRIA À SAÚDE",
        "ano": "2022",
        "finalidade": "CHATBOOT PARA AGENTES COMUNITÁRIOS A SAÚDE",
        "plataforma": "Yaml, Ajax, Unified Modeling Language 2.5,"
      },
      {
        "titulo": "APLICATIVO MOBILE PARA SURDOS TEREM ACESSO A CADERNETA DE SAÚDE DO ADOLESCENTE",
        "ano": "2021",
        "finalidade": "Caderneta de saúde para adolescente surdos",
        "plataforma": "JAVA"
      },
      {
        "titulo": "PROTÓTIPO DE UM SOFTWARE PARA SURDOS TEREM ACESSO A CADERNETA DE SAÚDE DO ADOLESCENTE",
        "ano": "2021",
        "finalidade": "Surdos terem acesso a caderneta de saúde do adolescente",
        "plataforma": "em desenvolvimento"
      },
      {
        "titulo": "AMBIENTE VIRTUAL PARA APRENDIZAGEM ENTRE SURDOS E OUVINTES",
        "ano": "2020",
        "finalidade": "APRENDIZAGEM ENTRE SURDOS E OUVINTES",
        "plataforma": "C#, HTML e Bootstrap"
      },
      {
        "titulo": "Breastshare ? A Web Environment for Training, Processing Mammographic Images and Assisting In Making Diagnoses",
        "ano": "2018",
        "finalidade": "PLATAFORMA ONLINE DE APOIO PEDAGÓGICO PARA AUXÍLIO NA INTERPRETAÇÃO DE IMAGENS MÉDICAS",
        "plataforma": "HTML, PHP,"
      },
      {
        "titulo": "Mammographic Image Processor",
        "ano": "2012",
        "finalidade": "Auxílio ao Diagnóstico",
        "plataforma": "Microsoft Visual Studio 2010"
      },
      {
        "titulo": "Web Breast Process",
        "ano": "2009",
        "finalidade": "Detecção da Densidade e Assimetria Mamária pela WEB.",
        "plataforma": "Windows"
      },
      {
        "titulo": "DENSIRADS",
        "ano": "2004",
        "finalidade": "Detecção da Densidade Mamária",
        "plataforma": "Windows"
      }
    ],
    "patentes": [
      {
        "titulo": "Afastador de lingua e bochecha unilateral de mandíbula",
        "ano": "2013"
      }
    ],
    "orientacoes_concluidas": [
      {
        "tipo": "Mestrado",
        "titulo": "Detecção computadorizada da Assimetria Mamária",
        "ano": "2006",
        "orientado": "Jaqueline Goncalves",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "QUANTIFICAÇÃO DA INFLUÊNCIA DA COMPRESSÃO NA QUALIDADE DA IMAGEM MAMOGRÁFICA",
        "ano": "2007",
        "orientado": "Alecio Fiel Filho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "MÉTODO PARA PROFISSIONALIZAR COM O ENSINO À DISTÂNCIA PESSOAS COM LIMITAÇÕES MOTORAS SEVERAS",
        "ano": "2007",
        "orientado": "Marisa Aparecida Olivieri",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "POSTO DE TRABALHO ADAPTADO A PESSOAS COM LIMITAÇÕES MOTORAS SEVERAS",
        "ano": "2007",
        "orientado": "REGINA PIRES GUIMARÃES",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Desenvolvimento de um Simulador Mamográfico Flexível com Microcalcificações Simuladas",
        "ano": "2010",
        "orientado": "Luciane Alvarez Bordini do Amaral",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Detecção da Assimetria Mamária, Classificação da Densidade e Validação dos Resultados na  WEB",
        "ano": "2009",
        "orientado": "Patricia Sarno Mendes Garcia",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "METODOLOGIA AUTOMATIZADA PARA A SEGMENTAÇÃO E CLASSIFICAÇÃO DA DENSIDADE MAMOGRÁFICA UTILIZANDO DESCRITORES DE COOCORRÊNCIA, ESTATÍSTICOS E SURF",
        "ano": "2012",
        "orientado": "Roberto Pavusa Junior",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Estatística da Localização de Lesões Mamárias nas Bases de Imagens MIAS e DDSM",
        "ano": "2010",
        "orientado": "Maria Filomena de Amorin Veloso",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Ambiente Virtual: Auxílio do Atendimento de Enfermagem para Surdos Baseado no Protocolo de Atenção Básica",
        "ano": "2011",
        "orientado": "Gardênia Costa Damião",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "DESENVOLVIMENTO DE UM MODELO FÍSICO DE AFASTADOR UNILATERAL DE LÍNGUA E BOCHECHA PARA TRATAMENTO DE DENTES POSTERIORES EM MANDÍBULA",
        "ano": "2012",
        "orientado": "Waltraudi Orchulhak Kawamoto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Mensuração da dose de radiação ionizante nos exames de tomografia computadoriza multidetectores nas regiões adjacentes a de interesse.",
        "ano": "2011",
        "orientado": "Alcino Tadeu Ferreira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Ferramenta assistiva para deficientes auditivos não oralizados na colaboração da comunicação em agências bancárias",
        "ano": "2015",
        "orientado": "Sandra Aparecida Ribeiro Ossada",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Mensuração da Dose de Radiação Secundária no Pescoço durante Exame de Tomografia Computadorizada de Crânio",
        "ano": "2015",
        "orientado": "Alcino Tadeu Ferreira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Ambiente virtual como ferramenta complementar ao aprendizado da imagenologia odontológica",
        "ano": "2015",
        "orientado": "Pasqual Bonzanini Neto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "m-ACS: Protótipo móvel para agentes comunitários de saúde",
        "ano": "2018",
        "orientado": "Francisco Douglas Lima Abreu",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Sistema web para marcação de área de densidade em imagens de mama com correção em tempo real",
        "ano": "2018",
        "orientado": "Jorge Luis Pezzuol",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Viabilidade de uma ferramenta on-line para treinamento de radiologistas",
        "ano": "2018",
        "orientado": "Simone Mendes da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Avaliação da dose de radiação recebida pelo phantom na realização de exames da região do tórax em tomografia computadorizada multislice, utilizando a manta de blindagem",
        "ano": "2018",
        "orientado": "Denise de Almeida",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Análise de imagens de um phantom de tórax adulto para mensuração do índice cardiotorácico (ICT) com baixa dose de radiação",
        "ano": "2017",
        "orientado": "Denilson Silvestre Araujo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Impacto econômico do diagnostico falso positivo e negativo na câncer de mama",
        "ano": "2020",
        "orientado": "Jaqueline Santos Viana",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Modelagem computacional de prótese para articulação temporomandibular",
        "ano": "2018",
        "orientado": "Marcelo Gimenez",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Desenvolvimento de um tapete sensorial para avaliação de ganho de velocidade marcha em pacientes pós AVE",
        "ano": "2020",
        "orientado": "Cecilia Ponte Muffo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Efeito da realidade virtual sobre o desempenho motor e equilíbrio em crianças com alteração motora",
        "ano": "2020",
        "orientado": "Fabiana Rodrigues Silva de Miranda Cavalcanti",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "OPERAÇÃO BRAILLE: Jogo sérop acessível para usuários com deficiência visual para o auxílio do ensino de braile",
        "ano": "2023",
        "orientado": "Thiago Yukio Murayama Yasue",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "CONFECÇÃO DE PROTOCOLO PARA DESENVOLVIMENTO DE APLICATIVO M-HEALTH PARA PACIENTES COM INCONTINÊNCIA URINÁRIA",
        "ano": "2024",
        "orientado": "Dayana Aparecida Machado de Lima",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Mulheres em vulnerabilidade que possuem ?intromissão? familiar por dependência financeira",
        "ano": "2024",
        "orientado": "Tatiane Nascimento Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Aplicativo web para treinamento de técnico em radiologia na obtenção de exames radiológicos com o uso de meios de contraste na modalidade de diagnóstico por imagem",
        "ano": "2022",
        "orientado": "Robson Ferreira Borges",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "FORMAÇÃO DE PROFESSORES E O USO DE TECNOLOGIA EM SALA DE AULA",
        "ano": "2025",
        "orientado": "Renata Iara Quartim de Albuquerque",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Alteração da fração de ejeção em pacientes com câncer de mama HER2 + submetidos a terapia com trastuzumabe, atendidos no Hospital São José Avaí (HSJA) ? Itaperuna/RJ.",
        "ano": "2024",
        "orientado": "ANA MARIA VITARELLI DE CASTRO EMERY SANTOS",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Visão computacional para detecção de câncer em imagens de citologia cervical",
        "ano": "2025",
        "orientado": "LETICIA BRUM CROFFI",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Tecnologias no Ensino de Matemática: Inclusão de Alunos com TEA nas Políticas Públicas Educacionais",
        "ano": "2025",
        "orientado": "EVANDRO HENRIQUE DE CARVALHO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Aplicativo para agendamento de atendimento com geolocalização de profissionais da fisioterapia",
        "ano": "2025",
        "orientado": "Thiago Souza Franco",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Ambiente Virtual para Avaliação de Capacidade em Executar os Procedimentos de Segurança do Mergulho Recreativo",
        "ano": "2009",
        "orientado": "Luiz Teruo Kawamoto Júnior",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Desenvolvimento de um ambiente virtual para auxiliar os portadores de necessidades especiais auditivas",
        "ano": "2012",
        "orientado": "João Carlos Lopes Fernandes",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Desenvolvimento e Avaliação Clínica de Afastador Unilateral de Língua e Bochecha para Tratamento de Dentes Posteriores em Mandíbula",
        "ano": "2015",
        "orientado": "Waltraudi Orchulhak Kawamoto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Protocolo de rastreabilidade - o uso da cloud computing atendendo as normas HIPAA",
        "ano": "2016",
        "orientado": "Paulo César de Macedo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Ferramenta assistiva para deficientes auditivos não oralizados na colaboração da comunicação",
        "ano": "2016",
        "orientado": "Sandra Aparecida Ribeiro Ossada",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "AMBIENTE VIRTUAL PARA APRENDIZAGEM ENTRE SURDOS E OUVINTES",
        "ano": "2020",
        "orientado": "Adilson Ferreira da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Visão Computacional para definição dos pontos chave e segmentos corporais na pose e em marcha humana",
        "ano": "2021",
        "orientado": "Renato de Brito Sanchez",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Aplicativo mobile para surdos terem acesso a caderneta de Saúde do Adolescente",
        "ano": "2021",
        "orientado": "Cláudia dos Santos Oliveira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "LANE: um assistente virtual para suporte às dúvidas na atenção primária à saúde",
        "ano": "2022",
        "orientado": "Francisco Douglas Lima Abreu",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Desenvolvimento de aplicativo para smartphone de um jogo sério para deficientes auditivos na memorização de notas musicais",
        "ano": "2019",
        "orientado": "Sandra Aparecida Ribeiro Ossada",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "PATOLOGIA: PLATAFORMA ONLINE PARA APRIMORAMENTO DE TREINAMENTO BASEADOS EM IMAGENS APLICADA A ESTUDANTES DO CURSO DE MEDICINA",
        "ano": "2024",
        "orientado": "César Alexandre Silva Lima",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Desenvolvimento de aplicativo para cuidados paliativos em idosos",
        "ano": "2023",
        "orientado": "Joelita Pessoa de Oliveira Bez",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "TDAHuni: GUIA PARA PROFESSORES DO ENSINO SUPERIOR COM ESTRATÉGIAS DE ACOLHIMENTO PARA ESTUDANTES UNIVERSITÁRIOS COM TRANSTORNO DO DÉFICIT DE ATENÇÃO COM HIPERATIVIDADE?.",
        "ano": "2024",
        "orientado": "João Carlos Peixoto Ferreira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Aplicativo móvel para mulheres no período do climatério",
        "ano": "2025",
        "orientado": "Juliana Nobre da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Modelagem de sistemas enativos para monitoramento de atividade física na gestação",
        "ano": "2025",
        "orientado": "Rita de Cássia Catini",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Smyledent: concepção de um protótipo de aplicativo móvel para gestão financeira de profissionais autônomos na área odontológica",
        "ano": "2026",
        "orientado": "João André Tavares Fernandes",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "DESENVOLVIMENTO DE BENGALA BRANCA MECÂNICA PARA DEFICIENTES VISUAIS COM PONTEIRA OMNIDIRECIONAL ESFÉRICA, COM ROTAÇÕES PARA DIREITA, ESQUERDA, FRENTE E TRÁS?.",
        "ano": "2023",
        "orientado": "Claudemir Claudino Alves",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "DESENVOLVIMENTO DE UM APLICATIVO DE TELERREABILITAÇÃO PARA ALTERAÇÕES MUSCULOESQUELÉTICAS",
        "ano": "2024",
        "orientado": "LUCYANA DE MIRANDA MOREIRA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Ambiente web para aprendizado, compartilhamento e processamento de imagens mamográficas",
        "ano": "2016",
        "orientado": "Sérgio Furgeri",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Metadados para descrição e recuperação de imagens odontológicas digitalizadas na WEB",
        "ano": "2010",
        "orientado": "Rosemary Cobra Perez",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Metadados para descrição e recuperação de imagens digitalizadas odontológicas",
        "ano": "2009",
        "orientado": "Rosemary Cobra Perez",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Detecção de estruturas de interesse diagnóstico em imagens médicas com softwares livres",
        "ano": "2010",
        "orientado": "Roger Campelo Magalhães",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Aplicativo android para auxiliar no desenvolvimento matemático de pessoas com autismo",
        "ano": "2015",
        "orientado": "Francisco Douglas Lima  Abreu",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Sistemas de impermeabilização na construção civil",
        "ano": "2015",
        "orientado": "Dênis Henrique da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Aplicativo móvel: Assistente do atendimento de enfermagem para deficientes auditivos na atenção básica",
        "ano": "2016",
        "orientado": "Fábio Prado da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Indicativo de formulário aos médicos requisitantes do exame de mamografia",
        "ano": "2016",
        "orientado": "Angela Alves Correia de Souza",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Estudo e aplicação do cálculo diferencial e integral na engenharia",
        "ano": "2016",
        "orientado": "Letícia dos Santos Camargo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "DESENVOLVIMENTO DE CONTEÚDO PARA PLATAFORMA ON-LINE PARA A DISCIPLINA FISIOTERAPIA PNEUMOLÓGICA II",
        "ano": "2018",
        "orientado": "Lorrane Souza Leite",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento de Conteúdo para plataforma on-line para treinamento na Interpretação de Imagens Médicas",
        "ano": "2020",
        "orientado": "CARLA PAOLA GATICA DE MORAES",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Utilização de kits didáticos para complementar o ensino de Cálculo Diferencial e Integral nas engenharias",
        "ano": "2020",
        "orientado": "Karina Aparecida de Moraes Correa",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Aplicativo móvel: Caderneta de Saúde do Adolescente para Deficientes Auditivos",
        "ano": "2020",
        "orientado": "Thiago Yukio Murayama Yasue",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Gastos Públicos em cuidados no câncer de mama",
        "ano": "2020",
        "orientado": "Isabelly Fernanda Rodrigues da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Título: Aplicativo Móvel para Inclusão de Dados de Sujeitos em Pesquisas Clínicas",
        "ano": "2023",
        "orientado": "Beatriz Santos Almeida",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Método de conversão de arquivos PDF para plataforma on-line",
        "ano": "2023",
        "orientado": "Maria Fernanda Lima",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Estatística sobre características de Aplicativos nas lojas Google e Apple para gerenciamento ou atendimento de clínicas veterinárias",
        "ano": "2024",
        "orientado": "Luciana dos Santos Alves Rodrigues",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Sistema de Monitoramento Geoespacial das principais Doenças Endêmicas em cães e gatos do Alto Tietê, São Paulo",
        "ano": "2024",
        "orientado": "Simone Risardi Nisiaymamoto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "MODELOS MATEMÁTICOS APLICADOS À ENGENHARIA QUÍMICA: UMA PROPOSTA DIDÁTICA",
        "ano": "2023",
        "orientado": "Tamires Rodrigues Pereira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Ferramenta Mobile Para Classificação Do Estadiamento Do Envelhecimento Reprodutivo Feminino",
        "ano": "2021",
        "orientado": "Felipe Alabarce",
        "instituicao": "Universidade de Mogi das Cruzes"
      }
    ],
    "orientacoes_andamento": []
  },
  "terigi": {
    "id": "Prof Terigi.xml",
    "lattes_id": "3659689745568252",
    "data_atualizacao": "23/09/2026",
    "nome": "Terigi Augusto Scardovelli",
    "nome_citacoes": [
      "SCARDOVELLI, T. A.",
      "SCARDOVELLI, TERIGI AUGUSTO",
      "SCARDOVELLI, TERIGI",
      "Scardovelli, Terigi A.",
      "Scardovelli, T.",
      "SCARDOVELLI, T.A.",
      "AUGUSTO SCARDOVELLI, TERIGI",
      "SCADOVELLI, TERIGI AUGUSTO"
    ],
    "orcid": "https://orcid.org/0000-0002-6523-9376",
    "nacionalidade": "Brasil",
    "resumo": "Possui graduação em Engenharia de Computação pela Universidade de Mogi das Cruzes, mestrado e doutorado em Engenharia Biomédica pela Universidade de Mogi das Cruzes e pós-doutorado em Engenharia Biomédica pela Pontifícia Universidade Católica de São Paulo. Atualmente, é docente e pesquisador no Programa Integrado de Engenharia Biomédica da Universidade de Mogi das Cruzes, atuando no Laboratório de Ambientes Virtuais e Tecnologia Assistiva (LAVITA) no Núcleo de Pesquisas Tecnológicas (NPT). Na graduação da Universidade de Mogi das Cruzes leciona para a Engenharia Elétrica, Superior em Tecnologia em Automação Industrial, Sistemas de Informação e Superior em Análise e Desenvolvimento de Sistemas. Tem experiência na área de Engenharia Biomédica, com ênfase em Tecnologia Assistiva, atuando principalmente nos seguintes temas: tecnologia assistiva e desenvolvimento de sistemas, jogos computadorizados e processamento de imagem aplicados a reabilitação e nutrição.",
    "instituicao": "Universidade de Mogi das Cruzes",
    "departamento": "Núcleo de Pesquisas Tecnológicas",
    "cidade": "Mogi das Cruzes",
    "uf": "SP",
    "formacoes": [
      {
        "tipo": "Pos Doutorado",
        "curso": "",
        "instituicao": "Pontifícia Universidade Católica de São Paulo",
        "ano": "2016"
      },
      {
        "tipo": "Doutorado",
        "curso": "Engenharia Biomédica",
        "instituicao": "Universidade de Mogi das Cruzes",
        "ano": "2010"
      },
      {
        "tipo": "Mestrado",
        "curso": "Engenharia Biomédica",
        "instituicao": "Universidade de Mogi das Cruzes",
        "ano": "2007"
      },
      {
        "tipo": "Graduacao",
        "curso": "Engenharia de Computação",
        "instituicao": "Universidade de Mogi das Cruzes",
        "ano": "2003"
      }
    ],
    "areas": [
      "Processamento de Sinais e Imagens Médicas",
      "Engenharia Biomédica",
      "ENGENHARIAS"
    ],
    "metricas": {
      "artigos": 70,
      "livros": 0,
      "capitulos": 14,
      "eventos": 78,
      "softwares": 9,
      "patentes": 0,
      "orientacoes_concluidas": 35,
      "orientacoes_andamento": 0
    },
    "artigos": [
      {
        "ano": "2026",
        "titulo": "CONTRIBUTIONS OF BEHAVIORAL NUTRITION TO THE MENTAL HEALTH OF BARIATRIC PATIENTS: INTEGRATIVE LITERATURE REVIEW",
        "doi": "10.36238/2359-5787.2026.v12n61.1900",
        "periodico": "Revista Acadêmica Online",
        "volume": "12",
        "paginas": "e1900-",
        "autores": [
          "POIANA, BRUNA MARIANA BRAGA RÊGO",
          "SANTIAGO, TATIANA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2026",
        "titulo": "NUTRICIÓN CONDUCTUAL Y DEFICIENCIAS NUTRICIONALES EN LA CIRUGÍA BARIÁTRICA: IMPACTO EN EL COMPORTAMIENTO Y EL BIENESTAR PSICOLÓGICO: UNA REVISIÓN INTEGRAL",
        "doi": "10.47820/recima21.v7i3.7419",
        "periodico": "RECIMA21 - Revista Científica Multidisciplinar  - ISSN 2675-6218",
        "volume": "7",
        "paginas": "e737419-",
        "autores": [
          "POIANA, B. M. B. R.",
          "SCARDOVELLI, T.A."
        ]
      },
      {
        "ano": "2026",
        "titulo": "Desafios e Estratégias de Gestão Hospitalar para o Atendimento a Pacientes com Transtorno do Espectro Autista",
        "doi": "",
        "periodico": "REVISTA DIÁLOGOS INTERDISCIPLINARES",
        "volume": "19",
        "paginas": "78-93",
        "autores": [
          "SIQUEIRA, B. C. D.",
          "SILVERIO, G. K.",
          "NASCIMENTO, L. S.",
          "GOMES, A. L. C. A.",
          "SCARDOVELLI, T.A."
        ]
      },
      {
        "ano": "2026",
        "titulo": "O papel do enfermeiro frente a pacientes pediátricos autistas no atendimento intra-hospitalar",
        "doi": "",
        "periodico": "REVISTA DIÁLOGOS INTERDISCIPLINARES",
        "volume": "19",
        "paginas": "66-76",
        "autores": [
          "SIQUEIRA, B. C. D.",
          "FERREIRA, A. C.",
          "COSTA, N. C.",
          "SCARDOVELLI, T.A."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Comparação entre o aplicativo Physio Pro com os aplicativos existentes nas plataformas iOS e Android",
        "doi": "10.59464/2359-4632.2025.3529",
        "periodico": "REVISTA CIENTIFICA INTEGRADA UNAERP CAMPUS GUARUJÁ",
        "volume": "8",
        "paginas": "e202514-",
        "autores": [
          "MOREIRA, L. M.",
          "MARTINI, S. C.",
          "ALVES, N. P. F.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "GONZALEZ, T. O.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Importância do acolhimento com classificação de risco nos serviços de urgência e emergência",
        "doi": "10.55905/revconv.18n.1-007",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "18",
        "paginas": "e14257-",
        "autores": [
          "ABRAHÃO, KATIÚSCIA",
          "GOUET, JONATHAN BELLO",
          "GOUET, MAYARA CRISTINA MARTINS SILVA",
          "MARTINI, SILVIA CRISTINA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "ANACLETO, GEOVANA MELLISA CASTREZANA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Acompanhamento de pacientes pós bariátricos e deficiências nutricionais: uma revisão da literatura",
        "doi": "",
        "periodico": "REVISTA BRASILEIRA DE OBESIDADE, NUTRIÇÃO E EMAGRECIMENTO",
        "volume": "19",
        "paginas": "672-683",
        "autores": [
          "OLIVEIRA, E. C. A.",
          "SANTIAGO, T.",
          "SILVA, A.P.",
          "MARTINI, S. C.",
          "BOSCHI, S.R.M.S.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Proposal of a Serious Game for Dynamic Balance Training Using a Force Platform: A Pilot Study",
        "doi": "10.1089/g4h.2023.0194",
        "periodico": "Games for Health Journal",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "VALÉRIO, MARIANA DA PALMA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "RIBEIRO, DANILO LUQUE",
          "FERNANDES DA SILVA, ANDRÉ ROBERTO",
          "MOURA, LUAN DE ALMEIDA",
          "ALEXANDRE, GABRIELLI DELBONE",
          "COPESKI, THAMIRES DA SILVA",
          "LONGUINHO, GIOVANNA CORDEIRO",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Efeitos Motores e cognitivos relacionados com o treino musical: uma revisão narrativa",
        "doi": "10.33871/2317417X.2025.22.9751",
        "periodico": "INCANTARE",
        "volume": "22",
        "paginas": "e9751-",
        "autores": [
          "Moniz, Y. F.",
          "SILVA, A.P.",
          "MARTINI, S. C.",
          "SCARDOVELLI, T.A.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Uso de aplicativo como recurso para o tratamento de incontinência urinária em gestantes",
        "doi": "10.55892/jrg.v8i19.2345",
        "periodico": "Revista JRG de Estudos Acadêmicos",
        "volume": "8",
        "paginas": "e082345-",
        "autores": [
          "NEVES, KELLY GONÇALVES MARTINEZ",
          "PRADO, ELI CRISTINA RIBEIRO DO",
          "MARTINI, SILVIA CRISTINA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "DOSE FÁCIL: A LEARNING TOOL FOR VETERINARY STUDENTS",
        "doi": "10.56238/arev7n3-307",
        "periodico": "ARACÊ - DIREITOS HUMANOS EM REVISTA",
        "volume": "7",
        "paginas": "15516-15530",
        "autores": [
          "VALÉRIO, MARIANA DA PALMA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MORAES, ISABELLA TITICO",
          "MOURA, LUAN DE ALMEIDA",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "DA SILVA, ALESSANDRO PEREIRA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Validação de dispositivo auxiliar para a mão do terapeuta na realização de técnicas de liberação miofascial",
        "doi": "10.55905/revconv.18n.5-268",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "18",
        "paginas": "e18014-",
        "autores": [
          "ROCHA, TATHIANE NAYARA DE OLIVEIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "ROCHA, SILVIO JOSÉ SANTOS DA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "GONZALEZ, TABAJARA DE OLIVEIRA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Telerreabilitação nos distúrbios musculoesqueléticos: uma revisão sistemática e meta-análise",
        "doi": "",
        "periodico": "journal of health informatics",
        "volume": "17",
        "paginas": "1402-",
        "autores": [
          "MOREIRA, L. M.",
          "SILVA, A.P.",
          "SCARDOVELLI, T.A.",
          "MARTINI, S. C.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Construction and adaptation of a robotic equipment for blocking execution in sitting volleyball practices",
        "doi": "10.1007/s42600-023-00332-5",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "DE OLIVEIRA, RONALDO GONÇALVES",
          "SILVA, ALESSANDRO PEREIRA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MARTINI, SILVIA CRISTINA",
          "DE MIRANDA MOREIRA, LUCYANA",
          "TEIXEIRA, WELLINGTON CÉLIO RODRIGUES",
          "DA SILVA BOSCHI, SILVIA REGINA MATOS"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Moniz Game: Usability and User Experience Evaluation of a Musical Game for Motor Coordination",
        "doi": "10.1089/g4h.2023.0133",
        "periodico": "Games for Health Journal",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "MONIZ, YASMIM FERNANDES",
          "GUNJI, BRUNO TOSHIO GOMES",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCADOVELLI, TERIGI AUGUSTO",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Acomodações, intervenções e modificações em sala de aula para estudantes universitários com o Transtorno do Déficit de Atenção com Hiperatividade - TDAH: uma revisão sistemática",
        "doi": "10.54033/cadpedv21n4-099",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e3808-",
        "autores": [
          "FERREIRA, JOÃO CARLOS PEIXOTO",
          "MARTINI, SÍLVIA CRISTINA",
          "GALLO, ROSÂNGELA PEIXOTO",
          "FERREIRA, ROSILENE PEIXOTO",
          "ROCHA, GABRIELLE PEIXOTO",
          "PRADO, ANA CAROLINA DO",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SANTOS, CLAYTON EDUARDO DOS",
          "BOSCHI, SÍLVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Uso de aplicativos e softwares para práticas clínicas e educacionais na medicina veterinária: uma revisão integrativa",
        "doi": "10.54033/cadpedv21n5-142",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e4169-",
        "autores": [
          "MORAES, ISABELLA TITICO",
          "MARTINI, SILVIA CRISTINA",
          "VALÉRIO, MARIANA DA PALMA",
          "MOURA, LUAN DE ALMEIDA",
          "CAMPOS, HIGOR BARRETO",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Knowledge Of Brazilian University Professors About Attention Deficit Hyperactivity Disorder - Adhd",
        "doi": "",
        "periodico": "IOSR Journal of Business and Management (IOSR-JBM)",
        "volume": "26",
        "paginas": "1-11",
        "autores": [
          "FERREIRA, J. C. P.",
          "COUTINHO, R.",
          "GALLO, R. P.",
          "FERREIRA, R. P.",
          "ROCHA, G. P.",
          "SILVA, A. P.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T.A.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Universidade empreendedora: um estudo de caso para implementação em uma universidade do Alto Tietê",
        "doi": "10.5281/zenodo.11120831",
        "periodico": "REVISTA FISIO&TERAPIA",
        "volume": "28",
        "paginas": "1-23",
        "autores": [
          "GARZI, R. P.",
          "SANTOS, M. F.",
          "AMODIO, F. R.",
          "MELLO, T. R. C.",
          "SCARDOVELLI, T.A.",
          "SCABBIA, R. J. A.",
          "JABES, D. L."
        ]
      },
      {
        "ano": "2024",
        "titulo": "O uso da gameterapia para diminuir a oscilação postural",
        "doi": "10.25248/reas.e16983.2024",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "24",
        "paginas": "e16983-",
        "autores": [
          "MOURA, LUAN DE ALMEIDA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "REIS, PAULO CESAR",
          "SILVA, ANDRÉ ROBERTO FERNANDES DA",
          "VALÉRIO, MARIANA DA PALMA",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Aplicativo móvel: caderneta de saúde digital do adolescente surdo",
        "doi": "10.1590/1980-220x-reeusp-2023-0366pt",
        "periodico": "REVISTA DA ESCOLA DE ENFERMAGEM DA USP",
        "volume": "58",
        "paginas": "e20230366-",
        "autores": [
          "YASUE, THIAGO YUKIO MURAYAMA",
          "OLIVEIRA, CLÁUDIA DOS SANTOS",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "BISSACO, MARCIA APARECIDA SILVA",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "SILVA, ROBSON RODRIGUES DA",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Proposta de sistema microcontrolado para monitoramento e controle de pressão arterial utilizando Python",
        "doi": "10.55905/rdelosv17.n60-022",
        "periodico": "DELOS: DESARROLLO LOCAL SOSTENIBLE",
        "volume": "17",
        "paginas": "e2104-",
        "autores": [
          "VALERIO, M. P.",
          "SCARDOVELLI, T. A.",
          "MOURA, L. A.",
          "MORAES, ISABELLA TITICO",
          "SILVA, A. R. F.",
          "MARTINI, S. C.",
          "BOSCHI, S. R. M. S.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Analysis of anticipatory and compensatory postural adjustment in women of different age groups using surface electromyography.",
        "doi": "10.1088/2057-1976/ad8ce2",
        "periodico": "BIOMEDICAL PHYSICS & ENGINEERING EXPRESS",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "MOURA, L. A.",
          "GONZALEZ, T. O.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "SILVA, A. R. F.",
          "VALERIO, M. P.",
          "CAMPOS, H. B.",
          "CAMARGO, M. L. A.",
          "MORAES, ISABELLA TITICO",
          "MARTINI, S. C.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Aplicativos móveis para orientação de mulheres no período do climatério e menopausa",
        "doi": "10.54033/cadpedv21n10-428",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e10002-",
        "autores": [
          "SILVA, JULIANA NOBRE DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SANTOS, MARCELLO FRANCISCO DOS",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Reabilitação baseada em jogos digitais para crianças com encefalopatia crônica não evolutiva da infância: uma revisão sistemática",
        "doi": "10.18265/1517-0306a2022id7300",
        "periodico": "PRINCIPIA (JOÃO PESSOA)",
        "volume": "61",
        "paginas": "915-",
        "autores": [
          "MONIZ, YASMIM FERNANDES",
          "GUNJI, BRUNO TOSHIO GOMES",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "A identificação dos estágios de envelhecimento reprodutivo: desafios e implicações para a saúde da mulher",
        "doi": "10.55905/cuadv16n13-092",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "16",
        "paginas": "e6965-",
        "autores": [
          "SILVA, JULIANA NOBRE DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "VIANA, JAQUELINE SANTOS",
          "SILVA, ALESSANDRO PEREIRA DA",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Uma visão geral dos dispositivos robóticos para reabilitação do cotovelo",
        "doi": "10.25248/reas.e18292.2024",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "24",
        "paginas": "e18292-",
        "autores": [
          "SANTOS, MARCELLO FRANCISCO DOS",
          "PEDROSO, BRUNO MEDINA",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2023",
        "titulo": "DESENVOLVIMENTO DE UMA BENGALA BRANCA COM PONTEIRA OMNIDIRECIONAL MECÂNICA (?OMNI-TIP?) PARA DEFICIENTES VISUAIS",
        "doi": "10.5281/zenodo.7897294",
        "periodico": "REVISTA FISIO&TERAPIA",
        "volume": "122",
        "paginas": "1-",
        "autores": [
          "ALVES, C. C.",
          "BOCK, E. G. P.",
          "SCARDOVELLI, T.A.",
          "SILVA, A. P.",
          "BOSCHI, S.R.M.S.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2023",
        "titulo": "Tecido adiposo marrom: uma alternativa para manutenção de peso em pacientes com obesidade",
        "doi": "10.25248/reas.e13720.2023",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "23",
        "paginas": "e13720-",
        "autores": [
          "SANTIAGO, TATIANA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "MOREIRA, LUCYANA DE MIRANDA",
          "DENARDO, VIVIAN CLEIA BENITES",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2023",
        "titulo": "TRANSFERÊNCIA DE APRENDIZADO PARA CATEGORIZAÇÃO DE PATOLOGIAS",
        "doi": "10.56083/rcv3n9-022",
        "periodico": "CONTEMPORÂNEA - REVISTA DE ÉTICA E FILOSOFIA POLÍTICA",
        "volume": "3",
        "paginas": "13857-13878",
        "autores": [
          "LIMA, CÉSAR ALEXANDRE SILVA",
          "MARTINI, SILVIA CRISTINA",
          "DOS SANTOS, CLAYTON EDUARDO",
          "BISSACO, MÁRCIA APARECIDA SILVA",
          "AMATE, FLÁVIO CÉZAR",
          "GIANCOLI, ANA PAULA MULLER",
          "DA SILVA, ALESSANDRO PEREIRA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "TECNOLOGIAS ASSISTIVAS DESENVOLVIDAS NA ESCOLA PARA PROMOÇÃO DA INCLUSÃO SOCIAL",
        "doi": "10.56083/rcv3n6-097",
        "periodico": "CONTEMPORÂNEA - REVISTA DE ÉTICA E FILOSOFIA POLÍTICA",
        "volume": "3",
        "paginas": "6497-6532",
        "autores": [
          "ALVES, CLAUDEMIR CLAUDINO",
          "DE RESENDE JUNIOR, RICARDO AGOSTINHO",
          "CAVALCANTI, FABIANA RODRIGUES SILVA DE MIRANDA",
          "DA SILVA, ALESSANDRO PEREIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "DA SILVA, ROBSON RODRIGUES",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Conteúdo on-line para curso de imagens pneumológicas",
        "doi": "10.55905/revconv.16n.9-265",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "16",
        "paginas": "18303-18313",
        "autores": [
          "LEITE, LORRANE SOUZA",
          "MARTINI, SILVIA CRISTINA",
          "SANTOS, ANA MARIA VITARELLI DE CASTRO EMERY",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "DA SILVA, ALESSANDRO PEREIRA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "BISSACO, MÁRCIA APARECIDA DA SILVA",
          "MOREIRA, LUCYANA DE MIRANDA",
          "DE LIMA, DAYANA APARECIDA MACHADO",
          "BORGES, ROBSON FERREIRA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Automated methodology for breast segmentation and mammographic density classification using co-occurrence and statistical and SURF descriptors",
        "doi": "10.1504/ijbet.2022.10048891",
        "periodico": "INTERNATIONAL JOURNAL OF BIOMEDICAL ENGINEERING AND TECHNOLOGY",
        "volume": "39",
        "paginas": "213-",
        "autores": [
          "PAVUSA JUNIOR, R.",
          "FERNANDES, J. C. L.",
          "SILVA, A. P.",
          "BISSACO, M. A. S.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Risk Factor Forecasting System for Pressure Injuries Through Artificial Neural Network",
        "doi": "10.1109/tla.2022.9675469",
        "periodico": "IEEE Latin America Transactions",
        "volume": "20",
        "paginas": "634-642",
        "autores": [
          "MEDINA PEDROSO, BRUNO",
          "SARTORI GUAZZELLI, JOAO VITOR",
          "PEREIRA DA SILVA, ALESSANDRO",
          "MATOS DA SILVA BOSCHI, SILVIA REGINA",
          "CRISTINA MARTINI, SILVIA",
          "AUGUSTO SCARDOVELLI, TERIGI"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Uso de imagens infravermelhas em tendinopatia calcânea traumática",
        "doi": "10.33448/rsd-v11i5.27829",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e9011527829-",
        "autores": [
          "SILVA, JULIANA NOBRE DA",
          "LOPES-MARTINS, RODRIGO ÁLVARO BRANDÃO",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Design of automated adaptive controller for mean arterial pressure in hypotensive situations using a vasopressor drug",
        "doi": "10.1007/s42600-022-00216-0",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "38",
        "paginas": "747-759",
        "autores": [
          "COELHO, MARCELO SARAIVA",
          "DA SILVA, SAMUEL JUSTINO",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "DA SILVA BOSCHI, SILVIA REGINA MATOS",
          "Rodrigues, Silvia Cristina Martini",
          "DA SILVA, ALESSANDRO PEREIRA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Dispositivos musicais na reabilitação neurológica no membro superior: uma revisão integrativa",
        "doi": "10.33448/rsd-v11i5.27907",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e10011527907-",
        "autores": [
          "MONIZ, YASMIM FERNANDES",
          "SILVA, ALESSANDRO PEREIRA DA",
          "GUNJI, BRUNO TOSHIO GOMES",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Dispositivo de barras paralelas com estímulo vibratório controlado via Interface Homem Máquina (IHM) para reabilitação de neuropatologias",
        "doi": "10.33448/rsd-v11i7.29964",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e28411729964-",
        "autores": [
          "MORAIS, ANTONIO VINÍCIUS DE",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MOURA, LUAN DE ALMEIDA",
          "MONIZ, YASMIM FERNANDES",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Método não invasivo versus método invasivo para medição de pressão arterial em roedores: uma revisão integrativa da literatura",
        "doi": "10.33448/rsd-v11i8.30789",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e4911830789-",
        "autores": [
          "VALÉRIO, MARIANA DA PALMA",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Development of a dynamic balance analysis and training system through posturography in a bipodal force platform with biaxial rotation",
        "doi": "10.1007/s42600-022-00223-1",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-17",
        "autores": [
          "ISHIZAKI, MARCIO TADASHI",
          "DA SILVA, ANDRÉ ROBERTO FERNANDES",
          "DE ALMEIDA MOURA, LUAN",
          "DOS REIS, PAULO CESAR",
          "LAZZARESCHI, LEANDRO",
          "DA SILVA BOSCHI, SILVIA REGINA MATOS",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "DA SILVA, ALESSANDRO PEREIRA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Dispositivos para ortostatismo para pessoas com mobilidade reduzida: revisão integrativa",
        "doi": "10.33448/rsd-v11i9.30278",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e35911930278-",
        "autores": [
          "ALVES, N. P. F.",
          "CECILIO, M. M.",
          "MOREIRA, L. M.",
          "MARTINI, S. C.",
          "SILVA, A. P.",
          "SCARDOVELLI, T.A.",
          "SILVA, S. G.",
          "LIRA NETO, J. C. G.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Gastroplastia no Brasil: um retrato da evolução do estado nutricional",
        "doi": "10.25248/reas.e9786.2022",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "15",
        "paginas": "e9786-",
        "autores": [
          "SANTIAGO, TATIANA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SZEGO, TIAGO",
          "ANTONACCI JUNIOR, EDSON",
          "BASSOLS, GUILHERME FAGUNDES",
          "SILVA, THAIZY GERALDA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2021",
        "titulo": "CONSTRUÇÃO DE UM EQUIPAMENTO PARA AUXILIAR NO TREINAMENTO DE ATAQUE E DEFESA PARA A MODALIDADE VOLEIBOL SENTADO",
        "doi": "",
        "periodico": "COLEÇÃO PESQUISA EM EDUCAÇÃO FÍSICA",
        "volume": "20",
        "paginas": "47-54",
        "autores": [
          "OLIVEIRA, R. G.",
          "SILVA, A. P.",
          "SCARDOVELLI, T.A.",
          "MARTINI, SILVIA CRISTINA",
          "Boschi, Silvia R. M. da S."
        ]
      },
      {
        "ano": "2021",
        "titulo": "IMPACT OF A VIRTUAL ZOO ON THE LEARNING AND EFFECTIVENESS MOTIVATION OF CHILDREN WITH READING DIFFICULTIES IN THE INITIAL PHASE OF LITERACY",
        "doi": "",
        "periodico": "HUMANIDADES & INOVAÇÃO",
        "volume": "8",
        "paginas": "314-337",
        "autores": [
          "DOMINGUES, A. M.",
          "SILVA, A. P.",
          "MARTINI, S. C.",
          "SCARDOVELLI, T.A.",
          "CASTRO, M. V.",
          "BISSACO, M. A. S."
        ]
      },
      {
        "ano": "2021",
        "titulo": "The use and impact of mHealth by community health workers in developing and least developed countries: a systematic review",
        "doi": "10.1007/s42600-021-00154-3",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "37",
        "paginas": "563-582",
        "autores": [
          "ABREU, F. D. L.",
          "BISSACO, M. A. S.",
          "SILVA, A. P.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T. A.",
          "SANTOS, M. F.",
          "RODRIGUES, C. C. M.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2020",
        "titulo": "INTERFACE ASSISTIVA PARA AUXILIAR A FORMAÇÃO PROFISSIONAL DE PESSOAS COM LIMITAÇÕES MOTORAS",
        "doi": "",
        "periodico": "HUMANIDADES & INOVAÇÃO",
        "volume": "7",
        "paginas": "46-51",
        "autores": [
          "ALEXANDRUK, M.",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, A. R. F.",
          "Martini, Silvia C.",
          "MARTUCCI, H. N.",
          "BOSCHI, S. R. M. S.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2020",
        "titulo": "PERCEPÇÕES DOS AGENTES COMUNITÁRIOS DE SAÚDE SOBRE AS TECNOLOGIAS DE INFORMAÇÃO E COMUNICAÇÃO NA ATENÇÃO PRIMÁRIA À SAÚDE: UMA PESQUISA EXPLORATÓRIA",
        "doi": "",
        "periodico": "HUMANIDADES & INOVAÇÃO",
        "volume": "7",
        "paginas": "32-45",
        "autores": [
          "ABREU, F. D. L.",
          "ZANIN, N. B.",
          "Bissaco, Márcia A. S.",
          "SILVA, A. P.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Mechanical tensile test of the body adhesive elastic tape",
        "doi": "",
        "periodico": "INTERNATIONAL JOURNAL OF RECENT SCIENTIFIC RESEARCH",
        "volume": "11",
        "paginas": "37150-37157",
        "autores": [
          "MORINI JUNIOR, N.",
          "MARTINI, S. C.",
          "LOPES-MARTINS, R. A. B.",
          "CANUTO, G.",
          "SILVA, R. R.",
          "SCARDOVELLI, TERIGI",
          "Boschi, Silvia Regina Matos S.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Real-time simulation device for mean arterial pressure of hypotensive patient subjected phenylephrine infusion",
        "doi": "10.1049/el.2020.1383",
        "periodico": "ELECTRONICS LETTERS",
        "volume": "56",
        "paginas": "865-868",
        "autores": [
          "COELHO, M.S.",
          "SILVA, S.J.",
          "BOSCHI, S.R.M.S.",
          "RODRIGUES, S.C.M.",
          "SCARDOVELLI, T.A.",
          "BARBUY, H.S.",
          "SILVA, A.P."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Jogos sérios brasileiros para auxílio do diagnóstico e tratamento de TDAH: revisão integrativa",
        "doi": "10.26514/inter.v11i32.4298",
        "periodico": "INTERFACES DA EDUCAÇÃO",
        "volume": "11",
        "paginas": "60-78",
        "autores": [
          "THEODÓRIO, DAIENY PANHAN",
          "DA SILVA, ALESSANDRO PEREIRA",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2020",
        "titulo": "Distribution of mass and center of pressure in dynamic balance presented by an instrumented wobble board",
        "doi": "10.1007/s42600-020-00092-6",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "36",
        "paginas": "501-510",
        "autores": [
          "DA SILVA, ANDRÉ ROBERTO FERNANDES",
          "LAZZARESCHI, LEANDRO",
          "DE PAULA BISCHOF, KAROLINE",
          "ISHIZAKI, MARCIO TADASHI",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "DA SILVA BOSCHI, SILVIA REGINA MATOS",
          "DA SILVA, ALESSANDRO PEREIRA"
        ]
      },
      {
        "ano": "2019",
        "titulo": "ALTRIRAS: A Computer Game for Training Children with Autism Spectrum Disorder in the Recognition of Basic Emotions",
        "doi": "10.1155/2019/4384896",
        "periodico": "INTERNATIONAL JOURNAL OF COMPUTER GAMES TECHNOLOGY",
        "volume": "2019",
        "paginas": "1-16",
        "autores": [
          "ALMEIDA, L. M.",
          "SILVA, D. P.",
          "THEODORIO, D. P.",
          "SILVA, W. W.",
          "RODRIGUES, S. C. M.",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, A. P.",
          "BISSACO, M. A. S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Whole-body vibration on parallel bar device for gait and balance rehabilitation in stroke patients",
        "doi": "10.1007/s42600-019-00014-1",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-7",
        "autores": [
          "MORAIS, A. V.",
          "JUNIOR, G.",
          "LAZZARESCHI, L.",
          "ALMEIDA, D. V.",
          "SANTOS, M. F.",
          "BOSCHI, S. R. M. S.",
          "MARTINI, S. C.",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Simple adaptive PI controller development and evaluation for mean arterial pressure regulation",
        "doi": "10.1007/s42600-019-00017-y",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-9",
        "autores": [
          "SILVA, S. J.",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "BOSCHI, S. R. M. S.",
          "MARTINI, S. C.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Using a Dance Mat to Assess Inhibitory Control of Foot in Young Children",
        "doi": "10.3389/fphys.2019.01302",
        "periodico": "Frontiers in Physiology",
        "volume": "10",
        "paginas": "1-7",
        "autores": [
          "PETRACONI, N.",
          "GIORJIANI, G. M.",
          "SAAD, A. G. F.",
          "SCARDOVELLI, TERIGI",
          "SILVA, S. G.",
          "BALARDIN, J. B."
        ]
      },
      {
        "ano": "2019",
        "titulo": "A Virtual Environment to Motivate Children's Handgrip",
        "doi": "",
        "periodico": "AMERICAN JOURNAL OF ENGINEERING RESEARCH",
        "volume": "8",
        "paginas": "157-164",
        "autores": [
          "MATOS, M. P.",
          "SILVA, A. P.",
          "CROCHI, D.",
          "SANTOS, M. F.",
          "MARTINI, S. C.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Use of platform in the training of medical students",
        "doi": "",
        "periodico": "Global Clinical Engineering Journal",
        "volume": "1",
        "paginas": "133-",
        "autores": [
          "ABREU, F. D. L.",
          "SILVA, S. M.",
          "SILVA, A. P.",
          "BISSACO, M. A. S.",
          "BOSCHI, SILVIA",
          "SCARDOVELLI, TERIGI",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Phchat: A chatbot mobile application to assist professionals in primary health care",
        "doi": "10.31354/globalce.v2iSpecial%20Is",
        "periodico": "Global Clinical Engineering Journal",
        "volume": "1",
        "paginas": "138-",
        "autores": [
          "ABREU, F. D. L.",
          "BISSACO, M. A. S.",
          "SILVA, A. P.",
          "SCARDOVELLI, TERIGI",
          "BOSCHI, SILVIA",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Leap Motion para treinamento do movimento de preensão para adultos com limitação motora leve",
        "doi": "",
        "periodico": "REVISTA DIÁLOGOS INTERDISCIPLINARES",
        "volume": "8",
        "paginas": "1-16",
        "autores": [
          "ALVES, J.",
          "BOSCHI, S. R. M. S.",
          "SANTOS, L. L.",
          "SILVA, R. C.",
          "MARTINI, S. C.",
          "SILVA, A. P.",
          "DIRANI, E. A. T.",
          "Scardovelli, Terigi A."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Development and pilot testing of a new device for q-angle measurement",
        "doi": "10.9790/9622- 0911026268",
        "periodico": "INTERNATIONAL JOURNAL OF ENGINEERING RESEARCH AND APPLICATIONS (IJERA)",
        "volume": "9",
        "paginas": "62-68",
        "autores": [
          "CROCHI, D.",
          "SILVA, A. P.",
          "Boschi, Silvia R. M. S.",
          "Silva, Tiago R. S.",
          "SILVA, A. R. F.",
          "SANTOS, M. F.",
          "Ota, Natasha H.",
          "BISCHOF, K.",
          "MOURA, L. A.",
          "MARTINI, S. C.",
          "Scardovelli, Terigi A."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Development and pilot testing of a new electromyography device - EMG Lavita",
        "doi": "",
        "periodico": "IOSR JOURNAL OF ENGINEERING",
        "volume": "9",
        "paginas": "37-44",
        "autores": [
          "Crochi, Douglas",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, A. P.",
          "Silva, Tiago R. S.",
          "SILVA, A. R. F.",
          "SANTOS, M. F.",
          "Ota, Natacha H.",
          "BISCHOF, K.",
          "MOURA, L. A.",
          "MARTINI, S. C.",
          "Boschi, Silvia R. M. S."
        ]
      },
      {
        "ano": "2018",
        "titulo": "Multiple Sclerosis: Comparison of the Conventional Spin-Echo T2-Weighted and Flair Techniques Through Image Processing",
        "doi": "10.1166/jmihi.2018.2329",
        "periodico": "Journal of Medical Imaging and Health Informatics",
        "volume": "8",
        "paginas": "425-430",
        "autores": [
          "SIMA&#771;O, R. S.",
          "ALVES, R. F. A.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "RODRIGUES, S. C. M.",
          "BIANCHI, C.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2018",
        "titulo": "Peripheral device to quantify grip and pinch capacity of children",
        "doi": "10.1590/2446-4740.03017",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "BISCHOF, K.",
          "MOTTA, W.",
          "SILVA, A. R. F.",
          "MORAIS, A. V.",
          "SILVA, A. P.",
          "SCARDOVELLI, TERIGI",
          "MARTUCCI, H. N.",
          "MANRIQUE, ANA LÚCIA",
          "BOSCHI, SILVIA"
        ]
      },
      {
        "ano": "2018",
        "titulo": "The late effect of Kinesio Taping® on handgrip strength",
        "doi": "10.1016/j.jbmt.2017.09.024",
        "periodico": "JOURNAL OF BODYWORK AND MOVEMENT THERAPIES",
        "volume": "22",
        "paginas": "598-604",
        "autores": [
          "AGUIAR, RODRIGO SOUSA NILO DE ARAÚJO",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "LAZZARESCHI, LEANDRO",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "FILONI, EDUARDO",
          "MANRIQUE, ANA LÚCIA",
          "FRÈRE, ANNIE FRANCE"
        ]
      },
      {
        "ano": "2017",
        "titulo": "Mean arterial pressure-embedded model for real-time simulation and controller validation",
        "doi": "10.1049/el.2016.4788",
        "periodico": "ELECTRONICS LETTERS",
        "volume": "53",
        "paginas": "450-452",
        "autores": [
          "SILVA, S. J.",
          "SCARDOVELLI, T. A.",
          "MARTUCCI, H. N.",
          "BOSCHI, S. R. M. S.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2017",
        "titulo": "Computer tool to evaluate the cue reactivity of chemically dependent individuals",
        "doi": "10.1016/j.cmpb.2016.11.014",
        "periodico": "COMPUTER METHODS AND PROGRAMS IN BIOMEDICINE",
        "volume": "140",
        "paginas": "139-149",
        "autores": [
          "SILVA, MEIRE LUCI DA",
          "FRÈRE, ANNIE FRANCE",
          "OLIVEIRA, HENRIQUE JESUS QUINTINO DE",
          "MARTUCCI NETO, HELIO",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2015",
        "titulo": "The design and evaluation of a peripheral device for use with a computer game intended for children with motor disabilities",
        "doi": "10.1016/j.cmpb.2014.10.002",
        "periodico": "Computer Methods and Programs in Biomedicine (Print)",
        "volume": "118",
        "paginas": "44-58",
        "autores": [
          "SCARDOVELLI, TERIGI AUGUSTO",
          "FRÈRE, ANNIE FRANCE"
        ]
      },
      {
        "ano": "2015",
        "titulo": "Measurement of the Effect of Physical Exercise on the Concentration of Individuals with ADHD",
        "doi": "10.1371/journal.pone.0122119",
        "periodico": "Plos One",
        "volume": "10",
        "paginas": "e0122119-",
        "autores": [
          "SILVA, A. P.",
          "PRADO, S. O. S.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S.",
          "CAMPOS, L. C.",
          "FRÈRE, A. F."
        ]
      },
      {
        "ano": "2015",
        "titulo": "Virtual Environment to Aid the Assessment of Basic Math Concepts in Children with ADHD",
        "doi": "10.4028/www.scientific.net/kem.638.339",
        "periodico": "Key Engineering Materials (Online)",
        "volume": "638",
        "paginas": "339-343",
        "autores": [
          "IANAGUIVARA, E. S.",
          "CANDIAGO, A.",
          "KAWAMOTO Jr., L. T.",
          "RODRIGUES, S. C. M.",
          "SCARDOVELLI, T. A.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2014",
        "titulo": "Proposal of a magnetic resonance technique for the evaluation of the calcaneofibular ligament minimizing false positive results",
        "doi": "10.1186/1475-925x-13-168",
        "periodico": "Biomedical Engineering Online (Online)",
        "volume": "13",
        "paginas": "168-",
        "autores": [
          "NOGUEIRA, I. A.",
          "FRÈRE, A. F.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S.",
          "OLIVEIRA, H. C."
        ]
      }
    ],
    "softwares": [
      {
        "titulo": "Bariatric Health Care",
        "ano": "2026",
        "finalidade": "Apoiar a avaliação nutricional de pacientes pós-bariátricos, correlacionando sinais e sintomas às deficiências nutricionais, auxiliando profissionais na tomada de decisão clínica e no acompanhamento contínuo.",
        "plataforma": "Dart"
      },
      {
        "titulo": "MenoFeme",
        "ano": "2024",
        "finalidade": "Auxiliar mulheres no período do climatério e menopausa. Apresenta orientações sobre os sintomas típicos deste estágio da vida feminina e formas de amenizá-los. Incentiva às mulheres a transcorrer por esta fase com hábitos e estilo de vida saudáveis.",
        "plataforma": "Kotlin"
      },
      {
        "titulo": "NeoBari",
        "ano": "2024",
        "finalidade": "Registrar porções alimentares e quantificar macronutrientes em pacientes pós-bariátricos.",
        "plataforma": "Kotlin"
      },
      {
        "titulo": "QualyLife",
        "ano": "2024",
        "finalidade": "Facilitar a avaliação da qualidade de vida, eficácia de quedas e cinesiofobia em indivíduos, por meio de questionários validados",
        "plataforma": "Kotlin"
      },
      {
        "titulo": "Software de pós-processamento de imagens termográficas para quantificar a ativação do tecido adiposo marrom em obesos",
        "ano": "2022",
        "finalidade": "Software para pós-processamento de imagens termográficas para posterior anáise e comparação em diversos estágios da ativação do tecido adiposo marrom em obesos",
        "plataforma": "Python"
      },
      {
        "titulo": "Simulador web para dimensionamento de doses de medicamentos",
        "ano": "2021",
        "finalidade": "Treinamento",
        "plataforma": "HTML/Javascript"
      },
      {
        "titulo": "Aplicativo para monitoramento e planejamento das ações inerentes ao pré-natal, parto e puerpério",
        "ano": "2017",
        "finalidade": "Gerar os relatórios necessários para as ações inerentes ao pré-natal, parto e puerpério",
        "plataforma": "Delphi"
      },
      {
        "titulo": "SCPM - Sistema Colaborativo para Prescrição de Medicamentos",
        "ano": "2017",
        "finalidade": "Sistema Colaborativo para Prescrição de Medicamentos",
        "plataforma": "C#, HTML, JAVASCRIPT, POSTGRESQL"
      },
      {
        "titulo": "SISTEMA PARA MONITORAMENTO E PLANEJAMENTO PARA AS DOENC&#807;AS CRO&#770;NICAS NA&#771;O-TRANSMISSI&#769;VEIS",
        "ano": "2017",
        "finalidade": "Auxiliar no planejamento para doenças crônicas não-transmissíveis nas unidades de saúde",
        "plataforma": "Delphi"
      }
    ],
    "patentes": [],
    "orientacoes_concluidas": [
      {
        "tipo": "Mestrado",
        "titulo": "Sistema para Treinamento do Movimento de Preensão para Adultos com Limitação Motora Leve",
        "ano": "2015",
        "orientado": "Jefferson Carlos Alves",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Sistema eletrônico para monitoramento de úlceras por pressão sob o conceito de internet of things",
        "ano": "2016",
        "orientado": "Bruno Medina Pedroso",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Proposta de simulador para treinamento de reconstituição, diluição e volume de infusão de medicamentos liofilizados injetáveis",
        "ano": "2018",
        "orientado": "Alex Dias",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Proposta de ambiente virtual para auxiliar na reabilitação do movimento de pinça das mãos",
        "ano": "2018",
        "orientado": "Marco Robson Pereira de Sales",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Desenvolvimento de um ambiente virtual para avaliar os efeitos da privação de sono sobre a atenção em caminhoneiros",
        "ano": "2019",
        "orientado": "Rizieri Pizzolito da Silva Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Validação de serious game para auxiliar no treinamento de graduandos de enfermagem em fototerapia neonatal",
        "ano": "2018",
        "orientado": "Júlio Cesar Nascimento dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Software para avaliação do risco de reganho de peso em pacientes submetidos à cirurgia bariátrica",
        "ano": "2018",
        "orientado": "Tatiana Santiago",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Sistema para Monitoramento e Planejamento para as Doenças Crônicas Não-Transmissíveis",
        "ano": "2017",
        "orientado": "Adaleia Regina Pontes SantAna Vazarin",
        "instituicao": "Universidade Brasil"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Aplicativo para Monitoramento e Planejamento das Ações Inerentes ao Pré-Natal, Parto e Puerpério",
        "ano": "2017",
        "orientado": "Karen Fernanda Silva Bortoleto Garcia",
        "instituicao": "Universidade Brasil"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Sistema Colaborativo para Prescrição de Medicamentos",
        "ano": "2017",
        "orientado": "Fernando Datorre",
        "instituicao": "Universidade Brasil"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Quantificação de alteração de temperatura em lesão tendinea por trauma por meio de processamento de imagens termográficas",
        "ano": "2018",
        "orientado": "Juliana Nobre da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Desenvolvimento de um dispositivo pneumático para a reabilitação da articulação do cotovelo em pacientes com alterações motoras",
        "ano": "2019",
        "orientado": "Marcello Francisco dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Simulador web para dimensionamento de doses de medicamentos",
        "ano": "2021",
        "orientado": "Moyses Brito Filho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Desenvolvimento de barra paralela dupla modular multifuncional",
        "ano": "2023",
        "orientado": "Jeremias Silva de Souza",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Proposta de aplicativo para auxílio no aumento do consumo de proteína para pacientes submetidos a gastroplastia",
        "ano": "2024",
        "orientado": "Graziela Priscila Furtuozo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Proposta de aplicativo para identificação de deficiências nutricionais de vitaminas e minerais para paciente pós-bariátrico",
        "ano": "2026",
        "orientado": "Erica da Costa Aguiar Oliveira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "PERIFÉRICO DE IMPLEMENTAÇÃO DE DIAGRAMA  DE FLUXO DE DADOS PARA CEGOS",
        "ano": "2014",
        "orientado": "DAISY EBOLI CASELLA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "TDAH e tipos de atenc&#807;a&#771;o identificados por meio de jogos se&#769;rios em alunos do ensino fundamental",
        "ano": "2020",
        "orientado": "Daieny Panhan Theodório",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Monitoramento da freque&#770;ncia cardi&#769;aca em meninas com si&#769;ndrome de rett: indicadores para melhoria da qualidade de vida de cuidadores",
        "ano": "2020",
        "orientado": "Ana Lucia Grici Zacarin Mamede",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Ativação do tecido adiposo marrom por termogênico em obesos quantificado pelo método de termografia infravermelho",
        "ano": "2022",
        "orientado": "Tatiana Santiago",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Sistema para previsão do fator de risco para lesões por pressão através de redes neurais artificiais",
        "ano": "2021",
        "orientado": "Bruno Medina Pedroso",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Desenvolvimento e avaliação de um dispositivo pneumático no processo de melhoria da mobilidade da articulação do cotovelo em pacientes com comprometimento neurológico",
        "ano": "2025",
        "orientado": "Marcello Francisco dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Controle Automático da Pressão Arterial Média em Pacientes Hipertensos via Otimização Adaptativa em Tempo Real",
        "ano": "2019",
        "orientado": "Samuel Justino da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Pos Doutorado",
        "titulo": "",
        "ano": "2025",
        "orientado": "Daieny Panhan Theodório",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Dispositivo para auxiliar no treinamento de enfermeiros na administração de medicamentos injetáveis",
        "ano": "2016",
        "orientado": "Eli Fellipe Valadão Belo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolver um dispositivo para monitoramento de úlceras por pressão via ?IOT?",
        "ano": "2016",
        "orientado": "Fernando Antonio de Souza Junior",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Proposta de treinamento do movimento de preensão em adultos com alteração motora",
        "ano": "2016",
        "orientado": "Leonardo Lucas dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Utilização de um ambiente 3d para treinamento do movimento de preensão em crianças com alteração motora",
        "ano": "2018",
        "orientado": "Beatriz Marques de Assis",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Sistema para controle de cadeira odontológica por profissionais com limitação motora",
        "ano": "2023",
        "orientado": "João Pedro Palacios de Andrade",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Qualidade de vida e dor lombar em cuidadores informais de pacientes neurológicos",
        "ano": "2025",
        "orientado": "Maria Eduarda Santos Kushita",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "ACIONAMENTO DE BRAÇO ROBÓTICO COM UTILIZAÇÃO DE LUVA SENSORIZADA",
        "ano": "2023",
        "orientado": "GIOVANI BELO SANTOS ALMEIDA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "AUTOMAÇÃO RESIDENCIAL COM USO DOS CONCEITOS DE INTERNET DAS COISAS",
        "ano": "2020",
        "orientado": "GABRIEL REIS",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "QUADRO DE COMANDO PARA PLATAFORMA DE ELEVAÇÃO MOTORIZADA PARA PESSOAS COM MOBILIDADE REDUZIDA",
        "ano": "2020",
        "orientado": "DOUGLAS DA SILVA VIEIRA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "DESENVOLVIMENTO DE SOFTWARE DE CONTROLE E MONITORAMENTO E PROGRAMAÇÃO DE ROBÔ INDUSTRIAL",
        "ano": "2020",
        "orientado": "JULIA FLÁVIA BARBOSA DA MATA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Aplicação web para auxílio no registro de porções alimentares",
        "ano": "2023",
        "orientado": "Felipe Kenzo Ochiai",
        "instituicao": "Universidade de Mogi das Cruzes"
      }
    ],
    "orientacoes_andamento": []
  },
  "mauricio": {
    "id": "Prof mauricio.xml",
    "lattes_id": "7147660467035657",
    "data_atualizacao": "27/10/2026",
    "nome": "Mauricio Ferreira Marcondes Machado",
    "nome_citacoes": [
      "MACHADO, MF",
      "Machado, Maurício F.",
      "Machado, Mauricio F.",
      "MACHADO, MAURICIO M",
      "MACHADO, MAURICIO M.",
      "MACHADO, MAURICIO F.M.",
      "MACHADO, MAURÍCIO F. M.",
      "MACHADO, M.F.M.",
      "MACHADO, MAURÍCIO FERREIRA MARCONDES",
      "MACHADO, MAURICIO FERREIRA MARCONDES",
      "MACHADO, MAURICIO F. M.",
      "Maurício Ferreira Marcondes Machado"
    ],
    "orcid": "https://orcid.org/0000-0003-0313-0866",
    "nacionalidade": "Brasil",
    "resumo": "Perfil Profissional Professor e Pesquisador Sênior com Doutorado em Biologia Molecular (UNIFESP), Pós-Doutorado internacional (Universidade de Groningen, Holanda) e sólida formação em Biomedicina. Atualmente, atua como Docente nos programas de graduação e pós-graduação (Biotecnologia e Engenharia Biomédica) da Universidade de Mogi das Cruzes (UMC). Destaca-se pela habilidade de integrar pesquisa científica de alto impacto à excelência no ensino, formando profissionais e pesquisadores altamente capacitados nas áreas de Ciências Biológicas e da Saúde.  Principais Qualificações  Docência Multidisciplinar: Vasta experiência ministrando disciplinas básicas (Biologia Molecular, Bioquímica, Biologia Celular, Biotecnologia, Imunologia, Fisiologia) e clínicas (Hematologia, Imunologia, Bioquímica, Microbiologia) para cursos de Biomedicina e Farmácia, além de disciplinas avançadas na pós-graduação. Mentoria e Formação de Talentos: Forte histórico na orientação acadêmica, com dezenas de supervisões concluídas e em andamento, englobando Iniciação Científica (PIBIC), Trabalhos de Conclusão de Curso (TCC), Mestrado e Doutorado. Liderança Científica e Gestão: Coordenador do LabMUN (Laboratório de Morte em Unicelulares) no CIIB/UMC, liderando equipes e gerenciando projetos de pesquisa com apoio de agências de fomento (FAPESP, CAPES, CNPq). Integração Teoria-Prática: Capacidade de transformar pesquisas complexas (clonagem, mutações sítio-dirigidas, caracterização enzimática) em aprendizado prático e engajador, atuando também como supervisor de estágios em análises clínicas. Reconhecimento Acadêmico: Atuação como membro de comitês de assessoramento, revisor de periódicos internacionais e de projetos de agências de fomento, aliada a uma expressiva produção bibliográfica (Índice H: 13).",
    "instituicao": "Universidade de Mogi das Cruzes",
    "departamento": "Centro de Ciências Biomédicas",
    "cidade": "Mogi das Cruzes",
    "uf": "SP",
    "formacoes": [
      {
        "tipo": "Pos Doutorado",
        "curso": "",
        "instituicao": "Universidade Federal de São Paulo",
        "ano": "2015"
      },
      {
        "tipo": "Pos Doutorado",
        "curso": "",
        "instituicao": "Universidade Federal de São Paulo",
        "ano": "2012"
      },
      {
        "tipo": "Pos Doutorado",
        "curso": "",
        "instituicao": "University of Groningen",
        "ano": "2011"
      },
      {
        "tipo": "Doutorado",
        "curso": "Ciências Biológicas (Biologia Molecular)",
        "instituicao": "Universidade Federal de São Paulo",
        "ano": "2008"
      },
      {
        "tipo": "Mestrado",
        "curso": "Biotecnologia",
        "instituicao": "Universidade de Mogi das Cruzes",
        "ano": "2004"
      },
      {
        "tipo": "Graduacao",
        "curso": "Biomedicina",
        "instituicao": "Universidade de Mogi das Cruzes",
        "ano": "2000"
      }
    ],
    "areas": [
      "Enzimologia",
      "Bioquímica",
      "CIENCIAS_BIOLOGICAS",
      "Biologia Molecular",
      "Biofísica Molecular",
      "Biofísica",
      "Biotecnologia"
    ],
    "metricas": {
      "artigos": 35,
      "livros": 0,
      "capitulos": 0,
      "eventos": 17,
      "softwares": 0,
      "patentes": 1,
      "orientacoes_concluidas": 67,
      "orientacoes_andamento": 0
    },
    "artigos": [
      {
        "ano": "2026",
        "titulo": "Calcium dependence and biochemical characterization of metacaspase-3 from Trypanosoma cruzi",
        "doi": "10.1016/j.bbapap.2025.141122",
        "periodico": "BIOCHIMICA ET BIOPHYSICA ACTA-PROTEINS AND PROTEOMICS",
        "volume": "1874",
        "paginas": "141122-",
        "autores": [
          "DUARTE, ANE CAROLINE MOREIRA",
          "DE OLIVEIRA, VINICIUS HENRIQUE",
          "COSTA, JOÃO PEDRO MARTINS SILVA",
          "TRUJILHO, MARIANA NASCIMENTO ROMERO",
          "DE SOUZA JUDICE, WAGNER ALVES",
          "MACHADO, MAURÍCIO FERREIRA MARCONDES"
        ]
      },
      {
        "ano": "2026",
        "titulo": "The structural, functional, and therapeutic potential of metacaspases in fungi and protozoa",
        "doi": "10.1111/febs.70327",
        "periodico": "FEBS Journal",
        "volume": "293",
        "paginas": "948-958",
        "autores": [
          "DUARTE, ANE C. M.",
          "MACHADO, MAURÍCIO F. M.",
          "TRUJILHO, MARIANA N. R.",
          "VALDIVIA, KAROLAINE S. S. M.",
          "ARAUJO, ALINE F.",
          "DE LORENA, LAURA M. C.",
          "DE OLIVEIRA, VINICIUS H.",
          "PEREIRA, BEATRIZ V.",
          "LEME, EMILLY R.",
          "JÚDICE, WAGNER A. S."
        ]
      },
      {
        "ano": "2026",
        "titulo": "Chalcones and flavonoids: New perspectives in the modulation of Trypanosoma brucei metacaspase-2",
        "doi": "10.1016/j.abb.2026.110881",
        "periodico": "ARCHIVES OF BIOCHEMISTRY AND BIOPHYSICS",
        "volume": "782",
        "paginas": "110881-",
        "autores": [
          "ARAUJO, LAURA HELENA",
          "MACHADO, MAURÍCIO FERREIRA MARCONDES",
          "TRUJILHO, MARIANA NASCIMENTO ROMERO",
          "LOURENÇO, ESTELA MARIANA GUIMARÃES",
          "DUARTE, ANE CAROLINE MOREIRA",
          "COSTA, JOÃO PEDRO MARTINS SILVA",
          "JULIANO, MARIA APARECIDA",
          "JÚDICE, WAGNER ALVES DE SOUZA",
          "LIMA, DENIS PIRES DE",
          "FERREIRA, TARSIS GESTEIRA"
        ]
      },
      {
        "ano": "2026",
        "titulo": "Natural Metabolites from Tabebuia aurea Reveal Isoform-Specific and Cooperative Modulation of Cathepsins B and L",
        "doi": "10.1016/j.abb.2026.110971",
        "periodico": "ARCHIVES OF BIOCHEMISTRY AND BIOPHYSICS",
        "volume": "",
        "paginas": "110971-",
        "autores": [
          "EMILIANO, M. F. C.",
          "ROSA, M. L. G. G.",
          "RODRIGUES, T.",
          "FARIAS, R. L.",
          "PIMENTEL, A. S.",
          "COSTA, R. K. M.",
          "SILVA, V. C. P.",
          "JUDICE, WAGNER ALVES DE SOUZA",
          "GONCALVES, M. R. S.",
          "NOVAIS, L. M. R.",
          "JACINTO, M. J.",
          "SOUSA JR, P. T.",
          "CARVALHO, M. G.",
          "LOPES, R. M.",
          "MACHADO, M.F.M.",
          "VICCO, A. L. F."
        ]
      },
      {
        "ano": "2026",
        "titulo": "SELF-REPORTED PSYCHOACTIVE SUBSTANCE USE AND KNOWLEDGE OF PREGNANCY AND FETAL RISKS AMONG PREGNANT WOMEN IN PRIMARY HEALTH CARE: AN EXPLORATORY CROSS-SECTIONAL STUDY",
        "doi": "10.66104/09zsy209",
        "periodico": "REVISTA MULTIDISCIPLINAR DO NORDESTE MINEIRO",
        "volume": "13",
        "paginas": "1-35",
        "autores": [
          "NAKAYAMA, CAMILA MIKI AIHARA",
          "BRITO, JORDANA FEITAL BATISTA E",
          "SILVA, NATHÁLIA MARQUES LEME",
          "ANDRADE, RAFAELA OKAGAWA DE",
          "ÂNGELO, GIULIA GIOVANNA BOM",
          "GOMES, JULIANA BELLINCANTA",
          "MACHADO, MAURICIO FERREIRA MARCONDES"
        ]
      },
      {
        "ano": "2026",
        "titulo": "Synthetic FlavonoidAnalogues as CatB/CatL Inhibitorswith Potential Anti-SARS-CoV-2 Activity",
        "doi": "10.1021/acsomega.6c07800",
        "periodico": "ACS Omega",
        "volume": "xxx",
        "paginas": "x-",
        "autores": [
          "LOURENCO, ESTELA M. G.",
          "MACHADO, MAURICIO F. M.",
          "BEATRIZ, ADILSON",
          "PONTES, LETICIA G. DE",
          "GODOY, MARIANA O. DE",
          "OLIVA, GLAUCIUS",
          "GUIDO, RAFAEL V. C.",
          "COELHO-DOS-REIS, JORDANA G. A.",
          "JUDICE, WAGNER A. DE S.",
          "LIMA, DENIS P. DE",
          "FERREIRA, RAFAELA S.",
          "EMILIANO, MARLI DE F. C.",
          "RIBEIRO, SILVANA",
          "CLARINDO, FELIPE A.",
          "VIANNA, LUAN D. S.",
          "MORAES, THAIS DE F. S.",
          "REIS, ERIK V. DE S.",
          "SOUZA, ALINE A. DE",
          "BARRETO, LUIZA V."
        ]
      },
      {
        "ano": "2026",
        "titulo": "Critical role of Asp283 in modulating calcium-dependent autoprocessing of yeast Metacaspase ScMCA-Ia",
        "doi": "10.1016/j.bbagen.2026.130985",
        "periodico": "BIOCHIMICA ET BIOPHYSICA ACTA-GENERAL SUBJECTS",
        "volume": "1870",
        "paginas": "130985-",
        "autores": [
          "TRUJILHO, M. N. R.",
          "DALZOTO, L. A. M.",
          "REIS, T.",
          "DUARTE, A. C. M.",
          "LEME, E. R.",
          "MARCONDES, M. F.",
          "JUDICE, W. A. S.",
          "MACHADO, MF"
        ]
      },
      {
        "ano": "2026",
        "titulo": "Biochemistry of protozoan Metacaspases: Structure, processing, and inhibition",
        "doi": "10.1016/j.bcp.2026.118557",
        "periodico": "BIOCHEMICAL PHARMACOLOGY",
        "volume": "x",
        "paginas": "118557-",
        "autores": [
          "OLIVEIRA, V. H.",
          "DUARTE, A. C. M.",
          "ARAUJO, A. F.",
          "CANDIDO, R. C. M.",
          "LORENA, L. M. C.",
          "MACHADO, M.F.M."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Role of N-terminal of metacaspase of Candida albicans in calcium binding.",
        "doi": "10.1016/j.bbapap.2025.141090",
        "periodico": "BIOCHIMICA ET BIOPHYSICA ACTA-PROTEINS AND PROTEOMICS",
        "volume": "1873",
        "paginas": "141090-",
        "autores": [
          "SANTOS, T. R.",
          "JUDICE, W. A.",
          "Marcondes, MF",
          "MACHADO, M.F.M.",
          "TRUJILHO, M. N. R.",
          "COSTA, J. P. M. S.",
          "DALZOTO, L. A. M.",
          "DUARTE, A. C. M.",
          "MORAES, K. S. S.",
          "MACHADO, A. J. O.",
          "RIOS, V. C. D.",
          "MORAES, T. F."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Oximic compounds as potential inhibitors of metacaspase-2 (TbMCA2) of Trypanosoma brucei",
        "doi": "10.1016/j.bbrc.2024.150657",
        "periodico": "BIOCHEMICAL AND BIOPHYSICAL RESEARCH COMMUNICATIONS",
        "volume": "735",
        "paginas": "150657-",
        "autores": [
          "ARAUJO, LAURA HELENA",
          "VELOSO, MÁRCIA PARANHO",
          "MACHADO, MAURÍCIO FERREIRA MARCONDES",
          "BUENO CHAGAS, THAYNAN APARECIDA",
          "REIS, TAIZ",
          "DE MORAIS BORBA, JOÃO RICARDO BUENO",
          "TRUJILHO, MARIANA NASCIMENTO ROMERO",
          "DALZOTO, LAURA DE AZEVEDO MAFFEIS",
          "MARCONDES, MARCELO FERREIRA",
          "JULIANO, MARIA APARECIDA",
          "JÚDICE, WAGNER ALVES DE SOUZA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Psychiatric comorbidities and emotional vulnerabilities in Borderline Personality Disorder",
        "doi": "10.54033/cadpedv21n13-174",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e11871-",
        "autores": [
          "MORENO, BEATRIZ GARCIA",
          "JÚDICE, WAGNER ALVES DE SOUZA",
          "BUZI, LETÍCIA GUIMARÃES",
          "SALES, VITOR ALMEIDA",
          "CANZI, GIULIA LA FALCE",
          "OSVALDO, ANNA JULIA FERREIRA",
          "SILVA, BIANCA LETÍCIA DE SOUZA",
          "MADRUGA, GUILHERME SOUZA",
          "MACHADO, MAURÍCIO FERREIRA MARCONDES",
          "LANZARIN JÚNIOR, SADI"
        ]
      },
      {
        "ano": "2023",
        "titulo": "A Clerodane Diterpene from Aquarius scaber</i> (Rataj) Christenh. &amp; Byng leaves as Inhibitor of Leishmania mexicana</i> Trypanosomatid Enzymes",
        "doi": "10.1080/22311866.2023.2256311",
        "periodico": "JOURNAL OF BIOLOGICALLY ACTIVE PRODUCTS FROM NATURE",
        "volume": "1",
        "paginas": "1-11",
        "autores": [
          "LOPES, KHEYTIANY H.S.",
          "SILVA, VIRGÍNIA C.P.",
          "JACINTO, MARCOS J.",
          "DE SOUZA, ALINE A.",
          "PADOVANI, CAMILA G.D.",
          "Machado, Maurício F.M.",
          "JUDICE, WAGNER A.S.",
          "SOUSA, PAULO T."
        ]
      },
      {
        "ano": "2023",
        "titulo": "Metacaspase of Saccharomyces cerevisiae (ScMCA-Ia) presents different catalytic cysteine in a processed and non-processed form",
        "doi": "10.1016/j.bbrc.2023.149185",
        "periodico": "BIOCHEMICAL AND BIOPHYSICAL RESEARCH COMMUNICATIONS",
        "volume": "687",
        "paginas": "149185-",
        "autores": [
          "DALZOTO, LAURA DE AZEVEDO MAFFEIS",
          "TRUJILHO, MARIANA NASCIMENTO ROMERO",
          "SANTOS, TAIZ DOS REIS",
          "COSTA, JOÃO PEDRO MARTINS SILVA",
          "DUARTE, ANE CAROLINE MOREIRA",
          "JUDICE, WAGNER ALVES DE SOUZA",
          "MARCONDES, MARCELO FERREIRA",
          "MACHADO, MAURÍCIO FERREIRA MARCONDES"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Mutações sítio-dirigidas na metacaspase de S. cerevisiae: Uma  abordagem, metodológica avançada para estudos estruturais e  funcionais",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "8",
        "paginas": "1-17",
        "autores": [
          "TRUJILHO, M. N. R.",
          "MACHADO, MF",
          "DALZOTO, L. A. M.",
          "SANTOS, T. R.",
          "ARAUJO, LAURA HELENA",
          "COSTA, J. P. M. S.",
          "DUARTE, A. C. M.",
          "MORAES, T. F.",
          "JUDICE, W. A.",
          "Marcondes, MF"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Probing the Conformational States of Thimet Oligopeptidase in Solution",
        "doi": "10.3390/ijms23137297",
        "periodico": "INTERNATIONAL JOURNAL OF MOLECULAR SCIENCES",
        "volume": "23",
        "paginas": "7297-",
        "autores": [
          "MARCONDES, MARCELO F. M.",
          "SANTOS, GABRIEL S.",
          "BRONZE, FELLIPE",
          "MACHADO, MAURICIO F. M.",
          "PEREZ, KÁTIA R.",
          "HESSELINK, RENSKE",
          "DE VRIES, MARCEL P.",
          "BROOS, JAAP",
          "OLIVEIRA, VITOR"
        ]
      },
      {
        "ano": "2021",
        "titulo": "Cysteine proteases as potential targets for anti-trypanosomatid drug discovery",
        "doi": "10.1016/j.bmc.2021.116365",
        "periodico": "BIOORGANIC & MEDICINAL CHEMISTRY",
        "volume": "46",
        "paginas": "116365-",
        "autores": [
          "JUDICE, W. A.",
          "MACHADO, MAURICIO M",
          "RODRIGUES, T.",
          "FERRAZ, L. S.",
          "LOPES, R. M.",
          "VIANNA, L. S.",
          "SIQUEIRA, F. S.",
          "IORIO, J. F.",
          "DALZOTO, L. A. M.",
          "TRUJILHO, M. N. R.",
          "REIS, T."
        ]
      },
      {
        "ano": "2021",
        "titulo": "Substrate specificity, physicochemical and kinetic properties of a trypsin from the giant Amazonian fish pirarucu (Arapaima gigas)",
        "doi": "10.1016/j.bcab.2021.102073",
        "periodico": "BIOCATALYSIS AND AGRICULTURAL BIOTECHNOLOGY",
        "volume": "35",
        "paginas": "102073-",
        "autores": [
          "DE FREITAS-JÚNIOR, AUGUSTO CÉZAR V.",
          "Bezerra, Ranilson S.",
          "DA COSTA, HELANE MARIA S.",
          "Marcuschi, Marina",
          "Icimoto, Marcelo Y.",
          "Machado, Marcelo F.M.",
          "Machado, Maurício F.M.",
          "Ferreira, Juliana C.",
          "DE OLIVEIRA, VITOR M.S.B.B.",
          "BUARQUE, DIEGO S."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Classification and Nomenclature of Metacaspases and Paracaspases: No More Confusion with Caspases",
        "doi": "10.1016/j.molcel.2019.12.020",
        "periodico": "MOLECULAR CELL",
        "volume": "77",
        "paginas": "927-929",
        "autores": [
          "MININA, E.",
          "CAZZULO, J.",
          "CHOI, C. J.",
          "COLL, N.",
          "DIXIT, V.",
          "DOLINAR, M.",
          "FASEL, N.",
          "FUNK, C.",
          "GALLOIS, P.",
          "GEVAERT, K.",
          "GUTIERREZ-BELTRAN, E.",
          "STAAL, J.",
          "MACHADO, MF",
          "ALVAREZ, V.",
          "BERGES, J.",
          "BERMAN-FRANK, I.",
          "BEYAERT, R.",
          "BIDLE, K.",
          "BORNANCIN, F.",
          "CASANOVA, M.",
          "et.al"
        ]
      },
      {
        "ano": "2020",
        "titulo": "CPP-Ala-Ala-Tyr-PABA inhibitor analogs with improved selectivity for neurolysin or thimet oligopeptidase",
        "doi": "10.1016/j.bbrc.2019.11.097",
        "periodico": "BIOCHEMICAL AND BIOPHYSICAL RESEARCH COMMUNICATIONS",
        "volume": "522",
        "paginas": "368-373",
        "autores": [
          "Dalio, Fernanda M.",
          "MACHADO, MF",
          "MARCONDES, MARCELO F.",
          "JULIANO, MARIA A.",
          "CHAGAS, J. R.",
          "CUNHA, RODRIGO L.O.R.",
          "Oliveira, Vitor"
        ]
      },
      {
        "ano": "2018",
        "titulo": "Thermodynamic analysis of Kex2 activity: The acylation and deacylation steps are potassium- and substrate-dependent",
        "doi": "10.1016/j.bpc.2017.11.007",
        "periodico": "BIOPHYSICAL CHEMISTRY",
        "volume": "235",
        "paginas": "29-39",
        "autores": [
          "ANTUNES, ALYNE ALEXANDRINO",
          "JUDICE, WAGNER ALVES DE SOUZA",
          "JESUS, LARISSA DE OLIVEIRA PASSOS",
          "MANFREDI, MARCELLA ARAÚJO",
          "DE SOUZA, ALINE APARECIDA",
          "MACHADO, MAURÍCIO FERREIRA MARCONDES",
          "E SILVA, PAMELA MORAES",
          "ICIMOTO, MARCELO YUDI",
          "JULIANO, MARIA APARECIDA",
          "JULIANO, LUIZ"
        ]
      },
      {
        "ano": "2018",
        "titulo": "Biological and In silico Studies on Synthetic Analogues of Tyrosine Betaine as Inhibitors of Neprilysin - A Drug Target for the Treatment of Heart Failure",
        "doi": "10.2174/1381612824666180515114236",
        "periodico": "CURRENT PHARMACEUTICAL DESIGN",
        "volume": "24",
        "paginas": "1899-1904",
        "autores": [
          "KAWANO, DANIEL FABIO",
          "DE CARVALHO, MARCELO RODRIGUES",
          "MACHADO, MAURICIO FERREIRA MARCONDES",
          "CARMONA, ADRIANA KARAOGLANOVIC",
          "BRAGA, GILBERTO UBIDA LEITE",
          "CARVALHO, IVONE"
        ]
      },
      {
        "ano": "2017",
        "titulo": "Processing of metacaspase 2 from Trypanosoma brucei (TbMCA2) broadens its substrate specificity",
        "doi": "10.1016/j.bbapap.2017.01.002",
        "periodico": "Biochimica et Biophysica Acta. Proteins and Proteomics",
        "volume": "",
        "paginas": "388-394",
        "autores": [
          "GILIO, JOYCE M.",
          "Marcondes, Marcelo F.",
          "FERRARI, DÉBORA",
          "Juliano, Maria A.",
          "Juliano, Luiz",
          "Oliveira, Vitor",
          "Machado, Maurício F.M."
        ]
      },
      {
        "ano": "2017",
        "titulo": "PAR-1 and PAR-2 Expression Is Enhanced in Inflamed Odontoblast Cells",
        "doi": "10.1177/0022034517719415",
        "periodico": "JOURNAL OF DENTAL RESEARCH",
        "volume": "96",
        "paginas": "002203451771941-1525",
        "autores": [
          "ALVAREZ, M.M.P.",
          "MOURA, G.E.",
          "MACHADO, M.F.M.",
          "VIANA, G.M.",
          "DE SOUZA COSTA, C.A.",
          "TJÄDERHANE, L.",
          "NADER, H.B.",
          "TERSARIOL, I.L.S.",
          "NASCIMENTO, F.D."
        ]
      },
      {
        "ano": "2013",
        "titulo": "Mycoplasma hyopneumoniae in vitro peptidase activities: Identification and cleavage of kallikrein-kinin system-like substrates",
        "doi": "10.1016/j.vetmic.2013.01.011",
        "periodico": "Veterinary Microbiology (Amsterdam. Print)",
        "volume": "",
        "paginas": "264-273",
        "autores": [
          "MOITINHO-SILVA, LUCAS",
          "Juliano, Maria A.",
          "FERREIRA, HENRIQUE B.",
          "Juliano, Luiz",
          "GOUVEA, IURI E.",
          "KONDO, MARCIA Y.",
          "OLIVEIRA, LILIAN C.G.",
          "OKAMOTO, DEBORA N.",
          "PAES, JÉSSICA A.",
          "MACHADO, MAURICIO M.",
          "VERONEZ, CAMILA L.",
          "MOTTA, GUACYARA",
          "ANDRADE, SHEILA S."
        ]
      },
      {
        "ano": "2013",
        "titulo": "Plasma Ndel1 enzyme activity is reduced in patients with schizophrenia ¿ A potential biomarker?",
        "doi": "10.1016/j.jpsychires.2013.01.009",
        "periodico": "Journal of Psychiatric Research",
        "volume": "47",
        "paginas": "657-663",
        "autores": [
          "GADELHA, ARY",
          "MACHADO, MAURICIO F.M.",
          "YONAMINE, CAMILA M.",
          "SATO, JOÃO R.",
          "Juliano, Maria A.",
          "Oliveira, Vitor",
          "BRESSAN, RODRIGO A.",
          "Hayashi, Mirian A.F."
        ]
      },
      {
        "ano": "2013",
        "titulo": "Substrate specificity and the effect of calcium on Trypanosoma&nbsp;brucei</i> metacaspase 2",
        "doi": "10.1111/febs.12248",
        "periodico": "The FEBS Journal (Print)",
        "volume": "280",
        "paginas": "2608-2621",
        "autores": [
          "MACHADO, MAURÍCIO F. M.",
          "Marcondes, Marcelo F.",
          "Juliano, Maria A.",
          "MCLUSKEY, KAREN",
          "MOTTRAM, JEREMY C.",
          "MOSS, CATHERINE X.",
          "Juliano, Luiz",
          "Oliveira, Vitor"
        ]
      },
      {
        "ano": "2012",
        "titulo": "Acute cocaine treatment increases thimet oligopeptidase in the striatum of rat brain",
        "doi": "10.1016/j.bbrc.2012.02.088",
        "periodico": "Biochemical and Biophysical Research Communications (Print)",
        "volume": "419",
        "paginas": "724-727",
        "autores": [
          "Dalio, Fernanda M.",
          "Ferro, Emer S.",
          "Andersen, Monica L.",
          "Toledo, Cláudio A.B.",
          "Chagas, Jair R.",
          "Oliveira, Vitor",
          "Visniauskas, Bruna",
          "Bicocchi, Eliane S.",
          "Perry, Juliana C.",
          "Freua, Rodrigo",
          "Gesteira, Tarsis F.",
          "Nader, Helena B.",
          "Machado, Maurício F.M.",
          "Tufik, Sergio"
        ]
      },
      {
        "ano": "2011",
        "titulo": "Hysteretic Behavior of Proprotein Convertase 1/3 (PC1/3)",
        "doi": "10.1371/journal.pone.0024545",
        "periodico": "Plos One",
        "volume": "6",
        "paginas": "e24545-",
        "autores": [
          "Icimoto, Marcelo Y.",
          "Oliveira, Vitor",
          "Barros, Nilana M.",
          "Ferreira, Juliana C.",
          "Marcondes, Marcelo F.",
          "Andrade, Douglas",
          "Machado, Mauricio F.",
          "Juliano, Maria A.",
          "Júdice, Wagner A.",
          "Juliano, Luiz"
        ]
      },
      {
        "ano": "2010",
        "titulo": "Catalytic properties of thimet oligopeptidase H600A mutant",
        "doi": "10.1016/j.bbrc.2010.03.045",
        "periodico": "Biochemical and Biophysical Research Communications (Print)",
        "volume": "394",
        "paginas": "429-433",
        "autores": [
          "MACHADO, MF",
          "Marcondes, Marcelo F.",
          "Rioli, Vanessa",
          "Ferro, Emer S.",
          "Juliano, Maria A.",
          "Juliano, Luiz",
          "Oliveira, Vitor"
        ]
      },
      {
        "ano": "2010",
        "titulo": "Assessing the role of endooligopeptidase activity of Ndel1 (nuclear-distribution gene E homolog like-1) in neurite outgrowth",
        "doi": "10.1016/j.mcn.2010.04.006",
        "periodico": "Molecular and Cellular Neurosciences",
        "volume": "44",
        "paginas": "353-361",
        "autores": [
          "Hayashi, Mirian A.F.",
          "Camargo, Antonio C.M.",
          "Guerreiro, Juliano R.",
          "Charych, Erik",
          "Kamiya, Atsushi",
          "Barbosa, Rosicler L.",
          "MACHADO, MF",
          "Campeiro, Joana D.",
          "Oliveira, Vitor",
          "Sawa, Akira"
        ]
      },
      {
        "ano": "2010",
        "titulo": "Purification, characterization and substrate specificity of a trypsin from the Amazonian fish tambaqui (Colossoma macropomum)",
        "doi": "10.1016/j.bbrc.2010.04.155",
        "periodico": "Biochemical and Biophysical Research Communications (Print)",
        "volume": "396",
        "paginas": "667-673",
        "autores": [
          "Marcuschi, Marina",
          "Espósito, Talita S.",
          "Machado, Maurício F.M.",
          "Hirata, Izaura Y.",
          "Machado, Marcelo F.M.",
          "Silva, Márcia V.",
          "Carvalho Jr., Luiz B.",
          "Oliveira, Vitor",
          "Bezerra, Ranilson S."
        ]
      },
      {
        "ano": "2010",
        "titulo": "Kinetic characterization of the Escherichia coli oligopeptidase A (OpdA) and the role of the Tyr607 residue",
        "doi": "10.1016/j.abb.2010.05.025",
        "periodico": "Archives of Biochemistry and Biophysics (Print)",
        "volume": "500",
        "paginas": "131-136",
        "autores": [
          "Lorenzon, Ricardo Z.",
          "Cunha, Carlos E.L.",
          "Marcondes, Marcelo F.",
          "Machado, Maurício F.M.",
          "Juliano, Maria A.",
          "Oliveira, Vitor",
          "Travassos, Luiz R.",
          "Paschoalin, Thaysa",
          "Carmona, Adriana K."
        ]
      },
      {
        "ano": "2009",
        "titulo": "Bradykinin-related peptides in the venom of the solitary wasp Cyphononyx fulvognathus",
        "doi": "10.1016/j.bcp.2009.08.020",
        "periodico": "Biochemical Pharmacology",
        "volume": "",
        "paginas": "478-486",
        "autores": [
          "Picolo, Gisele",
          "Cury, Yara",
          "Hisada, Miki",
          "Moura, Analuê B.",
          "MACHADO, MF",
          "Sciani, Juliana M.",
          "Conceição, Isaltino M.",
          "Melo, Robson L.",
          "Oliveira, Vitor",
          "Lima-Landman, Maria Teresa R."
        ]
      },
      {
        "ano": "2007",
        "titulo": "The role of Tyr605 and Ala607 of thimet oligopeptidase and Tyr606 and Gly608 of neurolysin in substrate hydrolysis and inhibitor binding",
        "doi": "10.1042/BJ20070060",
        "periodico": "Biochemical Journal (London. 1984)",
        "volume": "404",
        "paginas": "279-",
        "autores": [
          "MACHADO, MF",
          "Rioli, Vanessa",
          "Dalio, Fernanda&nbsp;M.",
          "Castro, Leandro&nbsp;M.",
          "Juliano, Maria&nbsp;A.",
          "Tersariol, Ivarne&nbsp;L.",
          "Ferro, Emer&nbsp;S.",
          "Juliano, Luiz",
          "Oliveira, Vitor"
        ]
      },
      {
        "ano": "2006",
        "titulo": "Substrate phosphorylation affects degradation and interaction to endopeptidase 24.15, neurolysin, and angiotensin-converting enzyme",
        "doi": "10.1016/j.bbrc.2005.11.041",
        "periodico": "Biochemical and Biophysical Research Communications (Print)",
        "volume": "339",
        "paginas": "520-525",
        "autores": [
          "MACHADO, M",
          "CUNHA, F",
          "BERTI, D",
          "HEIMANN, A",
          "KLITZKE, C",
          "RIOLI, V",
          "OLIVEIRA, V",
          "FERRO, E"
        ]
      }
    ],
    "softwares": [],
    "patentes": [
      {
        "titulo": "Método e kit para diagnósticos de condições neuropsiquiátricas, métodos para avaliação de tratamento de condições neuropsiquiátricas e método de identificação de fármacos potencialmente úteis no tratamento de condições neurosiquiátricas.",
        "ano": "2010"
      }
    ],
    "orientacoes_concluidas": [
      {
        "tipo": "Mestrado",
        "titulo": "Obtenção e caracterização bioquímica da metacaspase (YCA1) de Saccharomyces cerevisiae",
        "ano": "2018",
        "orientado": "Grazielle Dias Frasson",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Obtenção e caracterização bioquímica da metacaspase de Candida albicans",
        "ano": "2020",
        "orientado": "Taíz dos Reis Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Avaliação do efeito de compostos derivados oxímicos sobre a atividade proteolítica da TbMCA2 processada e não processada.",
        "ano": "2020",
        "orientado": "Laura Helena Araujo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "USO DO POLICLORETO DE ALUMÍNIO (PAC): VANTAGENS SOBRE O SULFATO DE ALUMÍNIO EM SISTEMA DE TRATAMENTO DE ÁGUA",
        "ano": "2020",
        "orientado": "Angel Campos Moreno",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Produção da metacaspase (ScMCA-Ia) de Saccharomyces cerevisiae selvagem e com truncamento do N-terminal contendo mutações sítio dirigidas: Deleção da cisteína catalítica e da porção de reconhecimento para o autoprocessamento",
        "ano": "2021",
        "orientado": "Laura de Azevedo Maffeis Dalzoto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "OBTENÇÃO DA METACASPASE RECOMBINANTE DE Leishmania major",
        "ano": "2025",
        "orientado": "João Pedro Martins Silva Costa",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Estudo dos resíduos do sítio de cálcio da metacaspase de Candida albicans",
        "ano": "2026",
        "orientado": "Karolaine Stela Siqueira de Moraes Valdivia",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Obtenção e caracterização bioquímica da metacaspase-3 de Trypanosoma cruzi",
        "ano": "2025",
        "orientado": "Ane Caroline Moreira Duarte",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Processamento da metacaspase 2 de Trypanossoma brucei.",
        "ano": "2016",
        "orientado": "Joyce Meire Gilio",
        "instituicao": "Universidade Federal de São Paulo"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Produção da metacaspase (CaMCA) de Candida albicans com truncamento do N-terminal e contendo mutações sítio dirigidas: Papel de resíduos cruciais para ativação e atividade desta peptidase",
        "ano": "2024",
        "orientado": "Taiz dos Reis Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "ESTUDO DE RESÍDUOS CRUCIAIS PARA A MODULAÇÃO DE METACASPASES DE DIFERENTES ORGANISMOS",
        "ano": "2025",
        "orientado": "Mariana Nascimento Romero Trujilho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Prospecção de moléculas como possíveis moduladores para a Metacaspase (TbMCA-2) de Trypanossoma brucei",
        "ano": "2024",
        "orientado": "Laura Helena Araujo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Produção de proteínas recombinantes em sistema de expressão Pichia pastoris",
        "ano": "2006",
        "orientado": "Marcelo Ferreira Marcondes Machado",
        "instituicao": "Faculdades Osvaldo Cruz"
      },
      {
        "tipo": "Outras",
        "titulo": "Expressão e Purificação da Metacaspase de Saccharomyces cerevisiae",
        "ano": "2015",
        "orientado": "Débora Ferrari Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação de inibidores para a Thimet oligopeptidase (EC 3.4.21.15)",
        "ano": "2016",
        "orientado": "Tayná Torino Mendes Crepaldi",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação de inibidores para a neurolisina (EC 3.4.21.16).",
        "ano": "2016",
        "orientado": "Thaís Louise Silva Fortunato",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Clonagem da metacaspase de Candida albicans (CaMCA)",
        "ano": "2017",
        "orientado": "Kauani Lusvarghi",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Clonagem da metacaspase (PbMCA) de Paraccoccidioides brasilienses",
        "ano": "2017",
        "orientado": "Laura Francisca Leite do Prado de Souza",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "AVALIAÇÃO DO EFEITO IN VIVO DE ISOLADOS DE PRODUTOS NATURAIS SOBRE A METACASPASE (YCA1) DE SACCHAROMYCES CEREVISIAE",
        "ano": "2017",
        "orientado": "Taiz dos Reis Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Otimização do processo de fermentação da cerveja, através da enzima &#945;-acetolactato-descarboxilase",
        "ano": "2015",
        "orientado": "Daniel C. Prado",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "OBTENÇÃO DE ETANOL PELA LEVEDURA Saccharomyces cerevisiae A PARTIR DA CASCA DE BANANA",
        "ano": "2016",
        "orientado": "Beatriz F. Nascimento",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do efeito in vivo de peptídeos antimicrobianos sobre a metacaspase (YCA1) de Saccharomyces cerevisiae",
        "ano": "2017",
        "orientado": "Jaqueline Moreira dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "PRODUÇÃO DE SABONETE LÍQUIDO COM PRINCÍPIO ATIVO FARMACOLÓGICO A PARTIR DO ÓLEO ESSENCIAL EXTRAÍDO DE TRÊS DIFERENTES TIPOS DE CASCAS DE FRUTAS CÍTRICAS",
        "ano": "2017",
        "orientado": "Ramon Christiano de  Morais Candido",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do efeito da metacaspase (YCA1) sobre o stress oxidativo da Saccharomyces cerevisiae",
        "ano": "2017",
        "orientado": "Taíz dos Reis Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Clonagem da metacaspase (CaMCA) de Candida albicans em E.coli",
        "ano": "2017",
        "orientado": "Kauani Duarte Lusvarghi",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Obtenção da metacaspase YCA1 contendo mutações sítio dirigidas",
        "ano": "2018",
        "orientado": "Isabela Ramos Sales Prado",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do efeito da super-expressão da metacaspase YCA1 sobre o ciclo de vida da Saccharomyces cerevisiae",
        "ano": "2018",
        "orientado": "Laura de Azevedo Maffeis Dalzoto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Expressão e purificação da Paracaspase de Dictyostelium discoideum",
        "ano": "2018",
        "orientado": "Mariana Nascimento Romero Trujilho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Diagnóstico Imunológico de doenças oportunistas em paciente com a síndrome da imunodeficiência adquirida (AIDS)",
        "ano": "2018",
        "orientado": "Rebeca Lobato Alves",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Expressão de proteína recombinante em Escherichia coli",
        "ano": "2018",
        "orientado": "Jamile Rodrigues Franco",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Metacaspases: Morte celular em programada em eucariotos simples",
        "ano": "2018",
        "orientado": "Juliana Maria Souza Cavalcante",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do efeito in vivo da Estaurosporina sobre a metacaspase de Saccharomyces cerevisiae",
        "ano": "2019",
        "orientado": "Mariana da Palma Valério",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Obtenção da metacaspase CaMCA1 de Candida albinas contendo mutações sítio dirigidas do centro ativo e do sub-sítio S1",
        "ano": "2019",
        "orientado": "Vitoria Caroline Domingues Rios",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Caracterização Bioquímica da Metacaspase de Saccharomyces cerevisiae (ScMCIa) na forma selvagem e truncada",
        "ano": "2020",
        "orientado": "Karolaine Stela Siqueira de Moraes",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Produção da metacaspase (YCA1) de Saccharomyces cerevisiae contendo mutações sítio dirigidas: Importância do sítio de interação do cálcio para ativação e controle da atividade enzimática.",
        "ano": "2020",
        "orientado": "Mariana Nascimento Romero Trujilho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Construção de uma biblioteca de substratos FRET para a metacaspase de Saccharomyces cerevisiae (ScMCA-Ia)",
        "ano": "2021",
        "orientado": "Ane Caroline Moreira Duarte",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Obtenção da metacaspase de Candida albicans (CaMCA-Ia) com truncamento de 86 aminoácidos na porção N-terminal",
        "ano": "2021",
        "orientado": "João Pedro Martins Silva Costa",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "CLONAGEM, EXPRESSÃO E PURIFICAÇÃO DA METACASPASE YCA1 COM A DELEÇÃO DO N-TERMINAL",
        "ano": "2019",
        "orientado": "ISABELA RAMOS SALES PRADO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "PRINCIPAIS MODIFICAÇÕES GENÉTICAS RESPONSÁVEIS PELA RESISTÊNCIA DO Staphylococcus aureus A METICILINA E VANCOMICINA.",
        "ano": "2019",
        "orientado": "AMANDA MARTINS LOZANO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "CLONAGEM, EXPRESSÃO E PURIFICAÇÃO DA METACASPASE (PbMCA) DE Paracoccidioides brasiliensis INTEGRA E COM A DELEÇÃO DA PORÇÃO N-TERMINAL",
        "ano": "2019",
        "orientado": "LAURA FRANCISCA LEITE DO PRADO DE SOUZA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "AVALIAÇÃO DA METACASPASE (YCA1) SOBRE O METABOLISMO DE Saccharomyces cerevisiae:",
        "ano": "2019",
        "orientado": "Jaqueline Moreira dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "SÍNDROME DO ANTICORPO ANTIFOSFOLÍPIDIO E A SUA RELAÇÃO COM COMPLICAÇÕES GESTACIONAIS",
        "ano": "2020",
        "orientado": "AMANDA RODRIGUES MORAES DA SILVA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "O desenvolvimento de diabetes mellitus tipo 2 induzido por alterações de cálcio e vitamina D",
        "ano": "2020",
        "orientado": "KÉTINI DUTRA DE BRITO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "A INFLUÊNCIA DO SISTEMA ENDOCANABINÓIDE NA OBESIDADE INDUZIDA PELA DIETA",
        "ano": "2020",
        "orientado": "GLAUCIA MENDES SOUSA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "KAROLAINE STELA SIQUEIRA DE MORAES",
        "ano": "2020",
        "orientado": "Caracterização bioquímica da metacaspase-1 (ScMCA-Ia) de Sac",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "DOENÇA DE GAUCHER",
        "ano": "2020",
        "orientado": "ANA KAROLINA DE ARAÚJO SANTIAGO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "ISABELLE LUNARDI FERNANDES PEIXOTO",
        "ano": "2021",
        "orientado": "ISABELLE LUNARDI FERNANDES PEIXOTO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "PRODUÇÃO DA METACASPASE (YCA1) DE Saccharomyces cerevisiae COM MUTAÇÃO SÍTIO DIRIGIDA NA CISTEÍNA CATALÍTICA",
        "ano": "2020",
        "orientado": "Laura de Azevedo Maffeis Dalzoto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "UM REPONTAR A FAGOTERAPIA: POSSÍVEL ALTERNATIVA AO TRATAMENTO DE INFECÇÕES POR BACTÉRIAS MULTIRRESISTENTES A ANTIBIOTICOTERAPIA CONVENCIONAL",
        "ano": "2021",
        "orientado": "RODRIGO LOPES CONDE",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Produção da metacaspase (YCA1) de Saccharomyces cerevisiae contendo mutações sítio dirigidas: Importância do sítio de interação do cálcio para ativação e controle da atividade enzimática.",
        "ano": "2020",
        "orientado": "MARIANA NASCIMENTO ROMERO TRUJIHO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "ABORDAGEM ACERCA DOS AVANÇOS FARMACOLÓGICOS PARA O TRATAMENTO DODIABETES MELLITUS",
        "ano": "2021",
        "orientado": "MILENA SOARES",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "INTOLERÂNCIA AO ÁLCOOL EM INDIVÍDUOS DO LESTE DA ÁSIA",
        "ano": "2022",
        "orientado": "ANA SAE DOS SANTOS SUZUKI",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "TÉCNICAS DA BIOLOGIA MOLECULAR APLICADAS EM ANÁLISE DE AMOSTRAS PARA INVESTIGAÇÃO DE VIOLÊNCIA SEXUAL",
        "ano": "2022",
        "orientado": "ISABELY SANTOS DE ALENCAR LIMA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "APLICAÇÕES DA PCR EM TEMPO REAL PARA O DIAGNÓSTICO MOLECULAR DE DOENÇAS INFECCIOSAS BACTERIANAS",
        "ano": "2022",
        "orientado": "Leticia Barros Coimbra",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "A IMPORTÂNCIA DO DIAGNÓSTICO PRECOCE DA ANEMIA FALCIFORME",
        "ano": "2022",
        "orientado": "TAYNA MELLO DE SIQUEIRA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Clonagem da metacaspase 1 de Plasmodium falciparum",
        "ano": "2025",
        "orientado": "Beatriz Vieira Pereira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Produção da metacaspase YCA1 com mutação da histidina catalitica",
        "ano": "2023",
        "orientado": "Bianca Pereira Carvalho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Caracterização bioquímica da metacaspase-3 de Trypanossoma cruzi",
        "ano": "2025",
        "orientado": "Vinícius Henrique de Oliveira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Clonagem, expressão e purificação da metacaspase (PfMCA-Ia) de Plasmodium falciparum",
        "ano": "2025",
        "orientado": "Beatriz Vieira Pereira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Obtenção da metacaspase (ScMCA-IA) de Saccharomyces cerevisiae contendo mutações sítio dirigidas do sítio de interação com o cálcio",
        "ano": "2025",
        "orientado": "Emilly Rolim Leme",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Caracterização bioquímica da metacaspase-3 de Trypanosoma cruzi",
        "ano": "2025",
        "orientado": "Vinícius Henrique Oliveira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "A EFICÁCIA DA TERAPIA CAR-T EM LEUCEMIAS E LINFOMAS",
        "ano": "2025",
        "orientado": "Giuliana Keren Branco",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "TÉCNICAS AVANÇADAS PARA DETECÇÃO DE ENVENENAMENTO NA PERÍCIA CRIMINAL",
        "ano": "2025",
        "orientado": "JULIA FIGUEIREDO PAZ DE SOUZA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "UMA REVISÃO SOBRE MICROAGULHAMENTO E POSSÍVEIS INTERCORRÊNCIAS RELACIONADAS A TÉCNICA",
        "ano": "2025",
        "orientado": "LUDMILA RODRIGUES KUNZ",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "TÉCNICAS DE ANÁLISE DE DNA PARA INVESTIGAÇÃO FORENSE EM CASOS DE ESTUPRO",
        "ano": "2025",
        "orientado": "VICTÓRIA EDWIGES ALCÂNTARA DE SOUZA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "INDICADORES DE INTERNAÇÕES POR TROMBOSE E TROMBOEMBOLISMO PULMONAR, PRÉ E PÓS COVID 19",
        "ano": "2025",
        "orientado": "THAIS CRISTINA GUESSE",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Obtenção da metacaspase de S.cerevisiae contendo mutações nos aspartatos do sítio de cálcio",
        "ano": "2025",
        "orientado": "Emilly Rolim Leme",
        "instituicao": "Universidade de Mogi das Cruzes"
      }
    ],
    "orientacoes_andamento": []
  },
  "caio": {
    "id": "prof Caio.xml",
    "lattes_id": "0291770262791779",
    "data_atualizacao": "01/07/2026",
    "nome": "Caio Junji Tanaka",
    "nome_citacoes": [
      "TANAKA, C. J.",
      "TANAKA, Caio Junji",
      "Tanaka C",
      "Tanaka CJ",
      "Tanaka, C",
      "Tanaka, CJ",
      "Tanaka, Caio",
      "Tanaka, C.",
      "Caio Junji Tanaka",
      "Tanaka, C.J."
    ],
    "orcid": "",
    "nacionalidade": "Brasil",
    "resumo": "Bacharel em Odontologia (Bolsista IC - CNPq), Mestre em Dentistica Operatória (Bolsista MS I/MS II - FAPESP) e PhD em Periodontia (Bolsista PROSUP - CAPES) pela Universidade Guarulhos, onde também atuou como professor celetista e coordenador do curso de Odontologia no período de 2019 a 2022. Professor permanente dos programas de graduação, mestrado e doutorado da Universidade de Mogi das Cruzes (UMC) desde 2022. Pesquisador visitante do Departamento de Cariologia e Dentistica Operatória da Tokyo Medical and Dental University (Japão).",
    "instituicao": "Universidade de Mogi das Cruzes",
    "departamento": "Centro de Ciências Biomédicas",
    "cidade": "Mogi das Cruzes",
    "uf": "SP",
    "formacoes": [
      {
        "tipo": "Doutorado",
        "curso": "Odontologia",
        "instituicao": "Universidade de Guarulhos",
        "ano": "2020"
      },
      {
        "tipo": "Mestrado",
        "curso": "Odontologia",
        "instituicao": "Universidade de Guarulhos",
        "ano": "2019"
      },
      {
        "tipo": "Mestrado",
        "curso": "Cariology & Operative Dentistry",
        "instituicao": "Tokyo Medical and Dental University",
        "ano": "2018"
      },
      {
        "tipo": "Graduacao",
        "curso": "Odontologia",
        "instituicao": "Universidade de Guarulhos",
        "ano": "2016"
      }
    ],
    "areas": [
      "Dentística Operatória",
      "Odontologia",
      "CIENCIAS_DA_SAUDE",
      "Cariologia",
      "Biomateriais",
      "Ciências da Saúde",
      "Biomateriais e Materiais Biocompatíveis"
    ],
    "metricas": {
      "artigos": 24,
      "livros": 0,
      "capitulos": 0,
      "eventos": 10,
      "softwares": 0,
      "patentes": 0,
      "orientacoes_concluidas": 20,
      "orientacoes_andamento": 0
    },
    "artigos": [
      {
        "ano": "2026",
        "titulo": "BONE GRAFT AND ITS USE IN DENTISTRY: AN INTEGRATIVE REVIEW",
        "doi": "10.5281/zenodo.20262966",
        "periodico": "Brazilian Journal of Oral and Systemic Health",
        "volume": "2",
        "paginas": "1-",
        "autores": [
          "PAGAN, L. C.",
          "HOLANDA, J. K. A.",
          "CAYETANO, M. H.",
          "Caio Junji Tanaka"
        ]
      },
      {
        "ano": "2025",
        "titulo": "AVALIAÇÃO MICROBIOLÓGICA DE ESCOVAS DENTÁRIAS UTILIZADAS EM PACIENTES DE UNIDADES DE TERAPIA INTENSIVA",
        "doi": "10.5281/zenodo.16732416",
        "periodico": "BRAZILIAN JOURNAL OF ORAL AND SYSTEMIC HEALTH",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "CHIESA, C.",
          "JESUS, A. M.",
          "TANAKA, Caio Junji"
        ]
      },
      {
        "ano": "2025",
        "titulo": "EFEITOS DO LASER EM BAIXA INTENSIDADE EM PACIENTES DIAGNOSTICADOS COM GLOSSITE MIGRATÓRIA BENIGNA ? ACOMPANHAMENTO CLÍNICO DE 6 MESES",
        "doi": "10.5281/zenodo.15701106",
        "periodico": "BRAZILIAN JOURNAL OF ORAL AND SYSTEMIC HEALTH",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "MARANGONI, ANALUCIA FERREIRA",
          "SANTOS, T. F.",
          "TANAKA, Caio Junji",
          "SILVA, L. T.",
          "SILVA, L. R. F.",
          "BENEDITO, L. C. B.",
          "CAYETANO, M. H."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Implante Imediato Pós-Exodontia com Enxerto Ósseo e Uso de Cicatrizador Personalizado: Relato de Caso Clínico",
        "doi": "10.36557/2674-8169.2025v7n10p134-157",
        "periodico": "Brazilian Journal of Implantology and Health Sciences",
        "volume": "7",
        "paginas": "134-157",
        "autores": [
          "OLIVEIRA, CHRISTOPHER",
          "CHIESA, CAMILLA",
          "ANDRADE HOLANDA, JONANTHAN KERUAK",
          "TANAKA, Caio Junji",
          "ANGELETTI, PIERANGELO",
          "DE OLIVEIRA DIAS, RAFAEL"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Osteonecrose dos Maxilares Relacionada a Medicamentos: Prevenção e tratamento à luz das evidências atuais: Revisão integrativa",
        "doi": "10.36557/2674-8169.2025v7n10p168-183",
        "periodico": "BRAZILIAN JOURNAL OF ORAL AND SYSTEMIC HEALTH",
        "volume": "1",
        "paginas": "420-",
        "autores": [
          "CAYETANO, M. H.",
          "SANTOS, E. B.",
          "Tanaka, C.",
          "MARANGONI, A."
        ]
      },
      {
        "ano": "2025",
        "titulo": "ENXERTOS AUTÓGENOS, HETERÓGENOS E SINTÉTICOS NA IMPLANTODONTIA ? REVISÃO DE LITERATURA",
        "doi": "10.5281/zenodo.17305913",
        "periodico": "BRAZILIAN JOURNAL OF ORAL AND SYSTEMIC HEALTH",
        "volume": "1",
        "paginas": "406-",
        "autores": [
          "HOLANDA, J. K. A.",
          "CHIESA, C.",
          "OLIVEIRA, C. A.",
          "Tanaka, C.",
          "VENTRE, R. B.",
          "HOLANDA, I. B. S.",
          "DIAS, R. O."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Osteonecrose Associada ao Uso de Bifosfonatos: Perspectivas Atuais de Prevenção e Manejo em Intervenções Odontológicas",
        "doi": "10.36557/2674-8169.2025v7n10p241-257",
        "periodico": "Brazilian Journal of Implantology and Health Sciences",
        "volume": "7",
        "paginas": "241-257",
        "autores": [
          "OLIVEIRA, CHRISTOPHER",
          "DE FARIA, SAMARA GONÇALVES",
          "CHIESA, CAMILLA",
          "TANAKA, Caio Junji",
          "DE JESUS, ALBERTO MARTINS",
          "SAKAGUCHI, VALTER TOSHIMITSU"
        ]
      },
      {
        "ano": "2025",
        "titulo": "A dengue e suas manifestações bucais",
        "doi": "10.5281/zenodo.17334640",
        "periodico": "BRAZILIAN JOURNAL OF ORAL AND SYSTEMIC HEALTH",
        "volume": "1",
        "paginas": "420-429",
        "autores": [
          "SANTOS, E. B.",
          "Tanaka, C.J.",
          "MARANGONI, ANALUCIA FERREIRA",
          "CAYETANO, MARISTELA HONÓRIO"
        ]
      },
      {
        "ano": "2024",
        "titulo": "EFEITO DOS LÍQUIDOS MODELADORES NA SUPERFÍCIE DA RESINA COMPOSTA - UMA REVISÃO DE LITERATURA",
        "doi": "10.47820/recima21.v5i2.4899",
        "periodico": "RECIMA21 - Revista Científica Multidisciplinar - ISSN 2675-6218",
        "volume": "5",
        "paginas": "e524899-",
        "autores": [
          "DIAS, SAMUEL SILVA",
          "LOPES, MATHEUS FERNANDO",
          "DIAS, JEFFISON TELES",
          "TANAKA, Caio Junji",
          "RODRIGUES, JOSE AUGUSTO"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Influence of gender on periodontal outcomes: A retrospective analysis of eight randomized clinical trials",
        "doi": "10.1111/jre.13272",
        "periodico": "JOURNAL OF PERIODONTAL RESEARCH",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "CASTRO DOS SANTOS, NIDIA",
          "FERMIANO, DAIANE",
          "BORGES, IVAN",
          "GONCALVES, CRISTIANE",
          "TANAKA, Caio Junji",
          "TELES, FLAVIA",
          "GOODSON, MAX",
          "HASTURK, HATICE",
          "VAN DYKE, THOMAS",
          "EHMKE, BENJAMIN",
          "EICKHOLZ, PETER",
          "WESTPHAL, MIRIAM R.",
          "NICKLES, KATRIN",
          "RETAMAL'VALDES, BELEN",
          "DUARTE, POLIANA MENDES",
          "FIGUEIREDO, LUCIENE CRISTINA",
          "FAVERI, MARCELO",
          "SHIBLI, JAMIL",
          "SOARES, GEISLA",
          "MIRANDA, TAMIRES",
          "et.al"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Use of laser in Pediatric Dentistry frenectomy surgery: A scoping review",
        "doi": "10.33448/rsd-v13i4.45452",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "13",
        "paginas": "e1313445452-",
        "autores": [
          "SILVA, LUDIMILA RIBEIRO FIALHO DA",
          "CAYETANO, MARISTELA HONÓRIO",
          "CARRER, FERNANDA CAMPOS DE ALMEIDA",
          "FERREIRA, SUZANA CRUZ",
          "MARANGONI, ANALUCIA FERREIRA",
          "TANAKA, Caio Junji"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Antibacterial Activity of a Bioactive Tooth-Coating Material Containing Surface Pre-Reacted Glass in a Complex Multispecies Subgingival Biofilm",
        "doi": "10.3390/pharmaceutics15061727",
        "periodico": "PHARMACEUTICS",
        "volume": "15",
        "paginas": "1727-",
        "autores": [
          "TANAKA, Caio Junji",
          "RODRIGUES, JOSÉ AUGUSTO",
          "PINGUEIRO, JOÃO MARCOS SPESSOTO",
          "MACEDO, TATIANE TIEMI",
          "FERES, MAGDA",
          "SHIBLI, JAMIL AWAD",
          "BUENO-SILVA, BRUNO"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Interdisciplinary treatment for temporomandibular disorders: an integrative review with a physiotherapeutic and dental approach",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "8",
        "paginas": "1-",
        "autores": [
          "SILVA, L. R. F.",
          "ROCHA, T. N. O.",
          "ROCHA, S. J. S.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T. A.",
          "TANAKA, Caio Junji",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2022",
        "titulo": "WHOLE TOOTH REGENERATION: CAN ANIMAL STUDIES BE TRANSLATED INTO CLINICAL APPLICATION?",
        "doi": "10.1089/ten.tec.2022.0022",
        "periodico": "Tissue Engineering",
        "volume": "2022",
        "paginas": "3-",
        "autores": [
          "FURQUIM, CAMILA",
          "KUMAGAI, ROSE",
          "BUSTILLOS-TORREZ, WILLY",
          "MEZA-MAURICIO, JONATHAN",
          "Tanaka, Caio",
          "SANTANA, VERONICA",
          "RETAMAL-VALDES, BELEN",
          "SHIBLI, JAMIL"
        ]
      },
      {
        "ano": "2022",
        "titulo": "IMPACTO MUNDIAL PSICOLÓGICO DA PANDEMIA CORONAVÍRUS EM DENTISTAS NA PRÁTICA CLÍNICA PRIVADA",
        "doi": "10.51891/rease.v8i2.4165",
        "periodico": "Revista Ibero-Americana de Humanidades, Ciências e Educação",
        "volume": "8",
        "paginas": "229-246",
        "autores": [
          "COUTINHO, JÔOBEYA",
          "BOEHM, FRANCIELLY CENSI",
          "AVELINO, CINTIA APARECIDA SANTANA",
          "AQUINO, MARIA VANDERLANDIA MENDES BEZERRA",
          "GOMES, TATIANE CRISTINA ALBINO",
          "CAVALERO, CLARA",
          "TANAKA, Caio Junji"
        ]
      },
      {
        "ano": "2021",
        "titulo": "Evaluation of the influence of Different Culture Media and Atmospheric Conditions on ex vivo Biofilms of Individuals with Advanced Periodontitis",
        "doi": "",
        "periodico": "Journal of the International Academy of Periodontology",
        "volume": "23",
        "paginas": "246-252",
        "autores": [
          "TANAKA, Caio Junji",
          "FIGUEIREDO, L. C.",
          "TROVISCO, P.",
          "TELES, F.",
          "LISBOA, T.",
          "FERES, M.",
          "SOARES, G. M."
        ]
      },
      {
        "ano": "2021",
        "titulo": "ANÁLISE DA MICRODUREZA DE DIFERENTES MATERIAIS RESTAURADORES",
        "doi": "10.19177/jrd.v9e220215-9",
        "periodico": "Journal of Research in Dentistry",
        "volume": "9",
        "paginas": "5-9-",
        "autores": [
          "MENDES, R. M. A.",
          "ARAUJO, P. R.",
          "BOEHM, F. C.",
          "BUENO-SILVA, B.",
          "RODRIGUES, J. A.",
          "TANAKA, Caio Junji"
        ]
      },
      {
        "ano": "2021",
        "titulo": "RESTORATIVE MATERIALS FOR RESTORATIONS OF NON-CARIOUS CERVICAL LESIONS: AN OVERVIEW",
        "doi": "10.19177/jrd.v9e4202112-19",
        "periodico": "JOURNAL OF RESEARCH IN DENTISTRY",
        "volume": "9",
        "paginas": "12-",
        "autores": [
          "BOEHM, F. C.",
          "Tanaka CJ"
        ]
      },
      {
        "ano": "2020",
        "titulo": "Biogenic synthesis and antimicrobial activity of silica-coated silver nanoparticles for esthetic dental applications",
        "doi": "10.1016/j.jdent.2020.103327",
        "periodico": "JOURNAL OF DENTISTRY",
        "volume": "95",
        "paginas": "103327-",
        "autores": [
          "RODRIGUES, M. C.",
          "ROLIM, W. R.",
          "VIANA, M. M.",
          "SOUZA, T. R.",
          "GONCALVES, F.",
          "TANAKA, Caio Junji",
          "BUENO-SILVA, B.",
          "SEABRA, A. B."
        ]
      },
      {
        "ano": "2020",
        "titulo": "In vitro evaluation of enamel surface roughness and morphology after orthodontic debonding: Traditional cleanup systems versus polymer bur",
        "doi": "10.1016/j.ortho.2020.04.006",
        "periodico": "International Orthodontics",
        "volume": "",
        "paginas": "403-",
        "autores": [
          "TENORIO, K. C. S.",
          "FERES, M. F. N.",
          "TANAKA, Caio Junji",
          "AUGUSTO, M. K. M.",
          "RODRIGUES, J. A.",
          "SILVA, H. D. P.",
          "ARANA-CHAVEZ, V. E.",
          "ROSCOE, M. G."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Influence of polymerization on the color stability of resin composites",
        "doi": "10.19177/jrd.v8e6202063-66",
        "periodico": "JOURNAL OF RESEARCH IN DENTISTRY",
        "volume": "8",
        "paginas": "1-",
        "autores": [
          "LORENZO, M.",
          "ARAUJO, P. R.",
          "MENDES, R. M. A.",
          "PIZZOLOTTO, L.",
          "RODRIGUES, J. A.",
          "TANAKA, Caio Junji"
        ]
      },
      {
        "ano": "2019",
        "titulo": "Brazilian red propolis in dentistry",
        "doi": "10.19177/jv8e6202063-66",
        "periodico": "Revista da APCD",
        "volume": "73",
        "paginas": "10-14-",
        "autores": [
          "TANAKA, C. J.",
          "AZEVEDO-FIGUEIREDO, K.",
          "BUENO-SILVA, B."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Subgingival microbial profile of women with breast cancer: a cross-sectional study",
        "doi": "10.1186/s41241-019-0082-3",
        "periodico": "APPLIED CANCER RESEARCH (ONLINE)",
        "volume": "39",
        "paginas": "13-",
        "autores": [
          "BERNHARD, V. R.",
          "FAVERI, M.",
          "SANTOS, M. S.",
          "GOMES, M. C. M.",
          "BATITUCCI, R. G.",
          "TANAKA, C. J.",
          "FERES, M.",
          "FEITOSA, A."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Grau de conversão e ação antibacteriana em materiais resinosos contendo diferentes percentuais de AgNPs recobertas com dióxido de silício",
        "doi": "10.19177/je6202063-66",
        "periodico": "BRAZILIAN ORAL RESEARCH",
        "volume": "33",
        "paginas": "370-",
        "autores": [
          "SOUZA, T. R.",
          "TANAKA, Caio Junji",
          "BUENO-SILVA, B.",
          "BRAGA, R. R.",
          "RODRIGUES, M. C."
        ]
      }
    ],
    "softwares": [],
    "patentes": [],
    "orientacoes_concluidas": [
      {
        "tipo": "Mestrado",
        "titulo": "EFEITO DO TRATAMENTO DE SUPERFÍCIE NA CERÂMICA DE DISSILICATO DE LÍTIO REFORÇADA COM ZIRCÔNIA",
        "ano": "2025",
        "orientado": "DÁRIO CUNHA DA SILVA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "PREVALÊNCIA DE MALOCLUSÃO EM CRIANÇAS EM UMA CLÍNICA-ESCOLA",
        "ano": "2024",
        "orientado": "LUDIMILA RIBEIRO FIALHO DA SILVA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Influence of polymerization on color stability of resin composites",
        "ano": "2019",
        "orientado": "Murilo de Lorenzo",
        "instituicao": "Universidade de Guarulhos"
      },
      {
        "tipo": "Outras",
        "titulo": "Evaluation of antimicrobial activity of surface pre-reacted glass filler particles (S-PRG) against Streptococcus mutans - an in vitro study",
        "ano": "2019",
        "orientado": "Paula de Araújo",
        "instituicao": "Universidade de Guarulhos"
      },
      {
        "tipo": "Outras",
        "titulo": "Biocompatibility of composite resins - a literature review",
        "ano": "2020",
        "orientado": "Rebeca Marjorie Alves Mendes",
        "instituicao": "Universidade de Guarulhos"
      },
      {
        "tipo": "Outras",
        "titulo": "Psychological impact of the COVID-19 pandemic on dentists in worldwide clinical private practice",
        "ano": "2020",
        "orientado": "Jôobeya Coutinho",
        "instituicao": "UNIVERITAS - campus Itaquaquecetuba"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise da microdureza de diferentes materiais restauradores",
        "ano": "2020",
        "orientado": "Paula de Araujo",
        "instituicao": "Universidade de Guarulhos"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação da atividade antimicrobiana de partículas de ionômero vidro com superfície pré-reagida (S-PRG) contra Streptococcus mutans",
        "ano": "2020",
        "orientado": "Rebeca Marjorie Alves Mendes",
        "instituicao": "Universidade de Guarulhos"
      },
      {
        "tipo": "Outras",
        "titulo": "Psychological impact of the COVID-19 pandemic on dentists in worldwide clinical private practice",
        "ano": "2020",
        "orientado": "Cintia Aparecida Santana Avelino",
        "instituicao": "UNIVERITAS - campus Itaquaquecetuba"
      },
      {
        "tipo": "Outras",
        "titulo": "Psychological impact of the COVID-19 pandemic on dentists in worldwide clinical private practice",
        "ano": "2020",
        "orientado": "Maria Vanderlandia Mendes Bezerra Aquino",
        "instituicao": "UNIVERITAS - campus Itaquaquecetuba"
      },
      {
        "tipo": "Outras",
        "titulo": "Psychological impact of the COVID-19 pandemic on dentists in worldwide clinical private practice",
        "ano": "2020",
        "orientado": "Tatiane Cristina Albino Gomes",
        "instituicao": "UNIVERITAS - campus Itaquaquecetuba"
      },
      {
        "tipo": "Outras",
        "titulo": "Materiais bioativos na odontologia",
        "ano": "2025",
        "orientado": "Gustavo Heyiti Akama",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Tecnologia GIOMER em odontopediatria",
        "ano": "2025",
        "orientado": "Heloisa Carrinho Martins",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "MANUFATURA ADITIVA: TECNOLOGIAS E APLICAÇÕES DA IMPRESSÃO 3D EM PROTOCOLOS DENTOGENGIVAIS",
        "ano": "2025",
        "orientado": "Hugnelson Roosevelt Soares Ribeiro",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Relação da Doença Periodontal com a Saúde e Perfomance do Atleta",
        "ano": "2025",
        "orientado": "Leonardo de Campos Nascimento",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "SOBREDIAGNÓSTICO E SOBRETRATAMENTO EM ODONTOLOGIA ESTÉTICA ELETIVA",
        "ano": "2025",
        "orientado": "Luís Felipe de Paula Silva Ori",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "DDESENVOLVIMENTO DE DISPOSITIVO DE IMPRESSÃO 3D PARA ARMAZENAMENTO DE SISTEMAS ADESIVOS ODONTOLÓGICOS",
        "ano": "2025",
        "orientado": "LUIZ FELIPE DE SIQUEIRA RIBEIRO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "INFLUÊNCIA DO GÊNERO NO TRATAMENTO DA DOENÇA PERIODONTAL",
        "ano": "2025",
        "orientado": "MATHEUS DE PAULA SPINELLI",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "EFICIÊNCIA DE FIBRINA RICA EM PLAQUETAS (PRF) NA CICATRIZAÇÕ PÓS-OPERATÓRIA EM EXTRAÇÕES DE TERCEIROS MOLARES",
        "ano": "2025",
        "orientado": "VICTOR OLIVEIRA DIRIENZO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "REALIDADE VIRTUAL NO ATENDIMENTO EM ODONTOPEDIATRIA",
        "ano": "2025",
        "orientado": "VITOR DE PAULA GERMANO",
        "instituicao": "Universidade de Mogi das Cruzes"
      }
    ],
    "orientacoes_andamento": []
  },
  "daniel": {
    "id": "prof Daniel.xml",
    "lattes_id": "5595354530663180",
    "data_atualizacao": "07/08/2026",
    "nome": "Daniel Gustavo Goroso",
    "nome_citacoes": [
      "GOROSO, D. G.",
      "Goroso, Daniel G.",
      "Goroso, Gustavo",
      "Goroso, G",
      "D. G. Goroso",
      "Goroso, D. G.",
      "GOROSO, DANIEL GUSTAVO",
      "GOROSO, D G",
      "G. Goroso, D.",
      "Goroso, Daniel G",
      "Goroso, Daniel",
      "GUSTAVO GOROSO, DANIEL"
    ],
    "orcid": "https://orcid.org/0000-0001-5454-9873",
    "nacionalidade": "Argentina",
    "resumo": "Possui graduação em Bachelerado Universitario (1992) e Licenciatura Plena em Física (1994) pela  Universidad Nacional de Tucumán - Argentina. Mestrado em Engenharia Elétrica pela Universidade de São Paulo (1999) e doutorado em Engenharia Elétrica (orientação Biomédica) pela Universidade de São Paulo (2004). Atualmente é Coordenador de Pesquisa e Desenvolvimento do Instituto de Medicina Física e Reabilitação (IMREA) do HC-FMUSP e professor/pesquisador da Universidade de Mogi das Cruzes. Líder da Rede de Inovação Industrial das ''Redes de Apoio ao Centro de Tecnologia e Inovação em Benefício das Pessoas com Deficiência - CETI-D'' nomeado pela Secretaria de Estado do Governo de São Paulo. Tem experiência na área de Engenharia Biomédica, com ênfase na área de Modelagem de Sistemas Biológicos e Controle Motor, atuando principalmente nos seguintes temas:neurociência experimental e computacional,  biomecanica e processamento de sinais biológicos. Membro Fundador do Núcleo de Estudos Avançados em Reabilitação (NEAR) integrado por professores/pesquisadores do IMREA/HC/FMUSP, EACH/USPLeste, EESC/USP, EMEP/USP, UNESP/Rio Claro e NPT/UMC. Professor Visitante UNIFESP SJC. Pós-doutorado no Medical Center / University of California - Davis, EU. Professor colaborador do College of Medicine&#10;California North State University, EU.",
    "instituicao": "Universidade de Mogi das Cruzes",
    "departamento": "Núcleo de Pesquisas Tecnológicos",
    "cidade": "Mogi das Cruzes",
    "uf": "SP",
    "formacoes": [
      {
        "tipo": "Pos Doutorado",
        "curso": "",
        "instituicao": "University of California (Davis, Sacramento)",
        "ano": "2017"
      },
      {
        "tipo": "Doutorado",
        "curso": "Engenharia Elétrica",
        "instituicao": "Universidade de São Paulo",
        "ano": "2004"
      },
      {
        "tipo": "Mestrado",
        "curso": "Engenharia Elétrica",
        "instituicao": "Universidade de São Paulo",
        "ano": "1999"
      },
      {
        "tipo": "Graduacao",
        "curso": "Licenciatura em Física",
        "instituicao": "Universidad Nacional de Tucumán",
        "ano": "1994"
      },
      {
        "tipo": "Graduacao",
        "curso": "Bachiller Universitario em Física",
        "instituicao": "Universidad Nacional de Tucumán",
        "ano": "1992"
      }
    ],
    "areas": [
      "Engenharia Biomédica",
      "ENGENHARIAS",
      "Bioengenharia",
      "Neurociência Computacional",
      "Engenharia Médica"
    ],
    "metricas": {
      "artigos": 63,
      "livros": 2,
      "capitulos": 18,
      "eventos": 67,
      "softwares": 8,
      "patentes": 7,
      "orientacoes_concluidas": 35,
      "orientacoes_andamento": 0
    },
    "artigos": [
      {
        "ano": "2026",
        "titulo": "Physical activity as a system: A network perspective on behavioral attributes and self-efficacy",
        "doi": "10.1177/13591053261443208",
        "periodico": "JOURNAL OF HEALTH PSYCHOLOGY",
        "volume": "1",
        "paginas": "1-15",
        "autores": [
          "ALVES, DOUGLAS SILVA",
          "Watanabe, William Tsutomu",
          "GOROSO, DANIEL GUSTAVO",
          "DE ARAUJO, FERNANDA RIBEIRO",
          "PIRES, FLÁVIO DE OLIVEIRA",
          "ASANO, RICARDO YUKIO"
        ]
      },
      {
        "ano": "2026",
        "titulo": "Assessing autonomic nervous system imbalance in long COVID-19 patients through heart rate variability during tilt testing",
        "doi": "10.1038/s41598-026-38800-4",
        "periodico": "Scientific Reports",
        "volume": "8",
        "paginas": "1-",
        "autores": [
          "CAMARGO, SAMUEL MINUCCI",
          "DOS SANTOS, ANA LETICIA GOMES",
          "MAXIMO, STELLA TASSINARI",
          "DA SILVA, KELLY CORREA BAIOCO",
          "DE OLIVEIRA MACHADO, BEATRIZ",
          "SASSAKI, CHRISTIAN GONÇALVES",
          "de Paula, Silvia Helena Bastos",
          "PUGLISI, JOSÉ LUIS",
          "GOROSO, DANIEL GUSTAVO"
        ]
      },
      {
        "ano": "2026",
        "titulo": "From Electrical Morphology to Physiological Dynamics: Lessons From Adoption for the Clinical Integration of Heart Rate Variability",
        "doi": "10.1111/eci.70249",
        "periodico": "EUROPEAN JOURNAL OF CLINICAL INVESTIGATION",
        "volume": "56",
        "paginas": "1-",
        "autores": [
          "PUGLISI, JOSÉ LUIS",
          "SODHI, GURPREET",
          "CARMARGO, SAMUEL MINUCCI",
          "GOROSO, DANIEL GUSTAVO"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Feed Forward Modeling: an efficient approach for mathematical modeling of the force frequency relationship in the rabbit isolated ventricular myocyte",
        "doi": "10.1088/2057-1976/ad78e3",
        "periodico": "BIOMEDICAL PHYSICS & ENGINEERING EXPRESS",
        "volume": "10",
        "paginas": "065020-",
        "autores": [
          "Silva, Robson Rodrigues da",
          "MOTTA, GABRIEL MARCOS DE SOUSA",
          "DE CAMARGO, MATHEUS LEONARDO ALVES",
          "GOROSO, DANIEL GUSTAVO",
          "PUGLISI, E JOSÉ LUIS"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Wastewater monitoring of SARS-CoV-2 gene for COVID-19 epidemiological surveillance in Tucumán, Argentina",
        "doi": "10.1002/jobm.202300773",
        "periodico": "JOURNAL OF BASIC MICROBIOLOGY",
        "volume": "64",
        "paginas": "1-15",
        "autores": [
          "D'ARPINO, MARÍA CECILIA",
          "CHAHLA, ROSSANA ELENA",
          "BELLOMIO, AUGUSTO",
          "ALBARRACÍN, VIRGINIA HELENA",
          "SINELI, PEDRO EUGENIO",
          "Goroso, Gustavo",
          "WATANABE, WILLIAM",
          "SAAVEDRA, MARÍA LUCILA",
          "HEBERT, ELVIRA MARÍA",
          "MARTÍNEZ, MARÍA ALEJANDRA",
          "MIGLIAVACCA, JULIETA",
          "GERSTENFELD, SILVINA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "CARDIO JUNCTION: COMPUTATIONAL TOOL IMPLEMENTED BASED ON A COMPARTMENT MODEL FOR THE VENTRICULAR MYOCYTE OF A RAT.",
        "doi": "10.5281/zenodo.7934209",
        "periodico": "REVISTA FISIO&TERAPIA",
        "volume": "122",
        "paginas": "1-9",
        "autores": [
          "Junior, R.A.R.",
          "GOROSO, D. G.",
          "PUGLISI, J. L.",
          "SILVA, R. R."
        ]
      },
      {
        "ano": "2023",
        "titulo": "Economic evaluation of the cost-utility of remote monitoring in children with obese in rural zone",
        "doi": "10.55905/oelv21n10-176",
        "periodico": "OBSERVATORIO DE LA ECONOMÍA LATINOAMERICANA",
        "volume": "21",
        "paginas": "17782-17805",
        "autores": [
          "Lopes, Walter Saraiva",
          "BERTOLANI, NICOLI BERTTI ZANIN",
          "Watanabe, William Tsutomu",
          "da Silva, Robson Rodrigues",
          "de Paula, Silvia Helena Bastos",
          "SARAIVA, ANTONIA FRANCISCA DA SILVA",
          "GOROSO, DANIEL GUSTAVO"
        ]
      },
      {
        "ano": "2023",
        "titulo": "FFMsim: Ferramenta computacional para simular o processo de Feed Forward Modeling para o miócito ventricular de coelho",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "8",
        "paginas": "1-8",
        "autores": [
          "MOTTA, G. M. S.",
          "GOROSO, D. G.",
          "PUGLISI, J. L.",
          "SILVA, R. R."
        ]
      },
      {
        "ano": "2023",
        "titulo": "FERRAMENTAS COMPUTACIONAIS PARA ESTUDO DOS CANAIS IÔNICOS UTILIZANDO DIAGRAMAS DE ESTADOS: MATLAB® VS PYTHON",
        "doi": "10.56083/RCV3N6-018",
        "periodico": "CONTEMPORÂNEA - REVISTA DE ÉTICA E FILOSOFIA POLÍTICA",
        "volume": "3",
        "paginas": "5013-5024",
        "autores": [
          "SILVA, R. R.",
          "GOROSO, D. G.",
          "PUGLISI, JOSE LUIS",
          "DE REZENDE JUNIOR, RICARDO AGOSTINHO"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Observational Study: Application of Therapy with Equine Serum for Patients Diagnosed with COVID-19 in Tucumán, Argentina",
        "doi": "10.35248/2332-0877.22.10.S2:003",
        "periodico": "JOURNAL OF INFECTIOUS DISEASES AND THERAPY",
        "volume": "10",
        "paginas": "1-5",
        "autores": [
          "CHAHLA, ROSSANA E.",
          "MEDINA RUIZ, LUIS",
          "CONTRERAS, M. E. F.",
          "RAYA, M.",
          "HERRERA, N.",
          "ORTEGA, EUGENIA S.",
          "GOROSO, D. G.",
          "PERAL DE BRUNO, MARIA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "PharmaLab: A Tool to Study the Drug Action on the Mouse Ventricular Myocyte",
        "doi": "10.1088/1742-6596/2224/1/012031",
        "periodico": "JOURNAL OF PHYSICS. CONFERENCE SERIES (PRINT)",
        "volume": "2224",
        "paginas": "012031-",
        "autores": [
          "CAMARGO, M L A",
          "GOROSO, D G",
          "BISSACO, M A S",
          "SILVA, R R"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Cadastro e consulta de parâmetros biofísicos utilizando a plataforma MyocyteDB",
        "doi": "10.33448/rsd-v11i8.30712",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e14711830712-",
        "autores": [
          "PLOVAS, RONALDO",
          "PIMENTEL, RODRIGO",
          "BISSACO, MÁRCIA APARECIDA SILVA",
          "GOROSO, DANIEL GUSTAVO",
          "PUGLISI, JOSE LUIS",
          "Silva, Robson Rodrigues da"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Randomized trials - Ivermectin repurposing for COVID-19 treatment of outpatients with mild disease in primary health care centers",
        "doi": "10.33448/rsd-v11i8.30844",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e35511830844-",
        "autores": [
          "CHAHLA, ROSSANA ELENA",
          "RUIZ, LUIS MEDINA",
          "MENA, TERESA",
          "BREPE, YOLANDA",
          "TERRANOVA, PAOLA",
          "ORTEGA, EUGENIA SILVANA",
          "BARRENECHEA, GUILLERMO GABRIEL",
          "GOROSO, DANIEL GUSTAVO",
          "PERAL DE BRUNO, MARÍA DE LOS ÁNGELES"
        ]
      },
      {
        "ano": "2021",
        "titulo": "REMOTE MONITORING OF HEART RATE VARIABILITY FOR OBESE CHILDREN",
        "doi": "10.1016/j.bspc.2021.102453",
        "periodico": "Biomedical Signal Processing and Control",
        "volume": "66",
        "paginas": "1-9",
        "autores": [
          "GOROSO, D G",
          "Watanabe, William Tsutomu",
          "NAPOLEONE, F.",
          "SILVA, D. P.",
          "SALINET JUNIOR, J. L.",
          "SILVA, R. R.",
          "PUGLISI, J. L."
        ]
      },
      {
        "ano": "2021",
        "titulo": "Automatic segmentation to characterize anthropometric parameters and cardiovascular indicators in children",
        "doi": "10.1002/widm.1411",
        "periodico": "Wiley Interdisciplinary Reviews-Data Mining and Knowledge Discovery",
        "volume": "1411",
        "paginas": "1-16",
        "autores": [
          "GOROSO, D G",
          "MARCIN, J.",
          "DHARMAR, M.",
          "FRAGA, A.",
          "MACEDO, M.",
          "RODRIGUES, C.",
          "SILVA, B. M.",
          "WATANABE, W.",
          "SILVA, D. P.",
          "SILVA, R. R.",
          "PUGLISI, J. L."
        ]
      },
      {
        "ano": "2021",
        "titulo": "Geolocation of uterine cervical neoplasms (UCN) in the context of a prevention program in Tucumán, Argentina.",
        "doi": "10.1200/JCO.2021.39.15_suppl.e13535",
        "periodico": "JOURNAL OF CLINICAL ONCOLOGY",
        "volume": "39",
        "paginas": "e13535-e13535",
        "autores": [
          "HOLGADO, SILVIA VICTORIA",
          "VINUALES, ANA",
          "GOROSO, DANIEL GUSTAVO",
          "Watanabe, William Tsutomu",
          "ZARBA, JUAN JOSE",
          "GONZALEZ, ADRIANA",
          "BLISS, NATALIA",
          "VEGA, ITALIA"
        ]
      },
      {
        "ano": "2021",
        "titulo": "Scientifically validated applications for monitoring the practice of physical activities and energy expenditure using the smartphone accelerometer: a integrative review",
        "doi": "10.33448/rsd-v10i13.21399",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "10",
        "paginas": "e511101321399-",
        "autores": [
          "Zanin, Nicoli Bertti",
          "Watanabe, William Tsutomu",
          "RESCIGNO, WILSON ROGÉRIO",
          "ISHIZAKI, MÁRCIO TADASHI",
          "Silva, Robson Rodrigues da",
          "GOROSO, DANIEL GUSTAVO"
        ]
      },
      {
        "ano": "2021",
        "titulo": "Detección precoz de insuficiencia respiratoria mediante monitorización continua de la saturación de O2 en pacientes afectados por COVID-19: Estudio comparativo con distintos sistemas de medición",
        "doi": "",
        "periodico": "Revista medica de Tucumán",
        "volume": "25",
        "paginas": "1220-1227",
        "autores": [
          "GOROSO, D. G.",
          "GARCIA, L. G.",
          "WATANABE, William Tsutomu",
          "CORONEL, M. A.",
          "NOBLE, F. P."
        ]
      },
      {
        "ano": "2021",
        "titulo": "Intensive Treatment With Ivermectin and Iota-Carrageenan as Pre-exposure Prophylaxis for COVID-19 in Health Care Workers From Tucuman, Argentina",
        "doi": "10.1097/MJT.0000000000001433",
        "periodico": "AMERICAN JOURNAL OF THERAPEUTICS",
        "volume": "28",
        "paginas": "e601-e604",
        "autores": [
          "CHAHLA, ROSSANA E.",
          "Goroso, Daniel G.",
          "PERAL DE BRUNO, MARIA",
          "MEDINA RUIZ, LUIS",
          "ORTEGA, EUGENIA S.",
          "MORALES, RN, MARCELO F.",
          "BARREIRO, FRANCISCO",
          "GEORGE, ALEXIA",
          "MANCILLA, RN, CESAR",
          "D' AMATO, RN, SYLVIA",
          "BARRENECHEA, GUILLERMO"
        ]
      },
      {
        "ano": "2020",
        "titulo": "The segmentary mechanical work as a new instrument to postural control evaluation",
        "doi": "10.11606/issn.2317-0190.v26i4a168984",
        "periodico": "Acta Fisiatrica (USP)",
        "volume": "26",
        "paginas": "209-214",
        "autores": [
          "Castro, Pedro Claudio Gonsales de",
          "Goroso, Daniel G",
          "Lopes, JAF",
          "Moreira, Maria Cecília dos Santos",
          "BATTISTELLA, L. R."
        ]
      },
      {
        "ano": "2020",
        "titulo": "AVALIAÇÃO DE TECNOLOGIA ON-LINE PARA PREVENÇÃO PRIMÁRIA DE DCNT EM USUÁRIOS DE SERVIÇOS BÁSICOS DE SAÚDE DO SUS",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "5",
        "paginas": "1-4",
        "autores": [
          "MAIA, P. B.",
          "SILVA, R. R.",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "2020",
        "titulo": "DESENVOLVIMENTO DE UM MODELO HIDRÁULICO DO SISTEMA CIRCULATÓRIO HUMANO CONTROLADO POR MICROCONTROLADOR",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "5",
        "paginas": "1-5",
        "autores": [
          "SILVA, A. G.",
          "OLIVEIRA, M. S. N.",
          "GOROSO, D. G.",
          "SILVA, R. R."
        ]
      },
      {
        "ano": "2020",
        "titulo": "BODY PERCEPTION IN PRE-ADOLESCENTS AND ADOLESCENTS WITH OVERWEIGHT AND OBESITY: A JUNGUIAN ANALYSIS",
        "doi": "10.15448/1980-8623.2020. 4.34216",
        "periodico": "PSICO (PUCRS. ONLINE)",
        "volume": "51",
        "paginas": "1-13",
        "autores": [
          "TAVARES, S. M. G.",
          "VIEIRA, D. C.",
          "PAULA, S. H. B.",
          "FIGUEIREDO, R. M. D.",
          "GOROSO, D G"
        ]
      },
      {
        "ano": "2020",
        "titulo": "PERCEPÇÃO CORPORAL EM PRÉ-ADOLESCENTES E ADOLESCENTES COM SOBREPESO E OBESIDADE: UMA ANÁLISE JUNGUIANA'",
        "doi": "10.15448/1980-8623.2020.4.34216",
        "periodico": "PSICO (PUCRS. IMPRESSO)",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "Tavares SMG",
          "Vieira DC",
          "Bastos  S",
          "Figueiredo R",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Quantificação dos níveis de sedentarismo e atividade física em crianças utilizando Smartphone",
        "doi": "10.5281/zenodo.3461058",
        "periodico": "XII SIMPÓSIO DE ENGENHARIA BIOMÉDICA - IX SIMPÓSIO DE INSTRUMENTAÇÃO E IMAGENS MÉDICAS",
        "volume": "11",
        "paginas": "1-4",
        "autores": [
          "ZANIN, N. B.",
          "LOPES, W. S.",
          "SILVA, D. P.",
          "MAIA, P. B.",
          "WATANABE, W. T.",
          "RODRIGUES, H. C.",
          "PAULA, S. H. B.",
          "SILVA, R. R.",
          "Goroso, Daniel G"
        ]
      },
      {
        "ano": "2019",
        "titulo": "Aplicação do fármaco SS-68 no miócito ventricular de camundongo: um experimento 'in silico'",
        "doi": "10.5281/zenodo.3459807",
        "periodico": "XII SIMPÓSIO DE ENGENHARIA BIOMÉDICA - IX SIMPÓSIO DE INSTRUMENTAÇÃO E IMAGENS MÉDICAS",
        "volume": "1",
        "paginas": "1-4",
        "autores": [
          "SILVA, A. G.",
          "Goroso, D. G.",
          "SOUZA FILHO, O. B.",
          "SILVA, R. R."
        ]
      },
      {
        "ano": "2019",
        "titulo": "AJUSTE DAS FAIXAS CARACTERÍSTICAS DO ÍNDICE CINTURA QUADRIL PARA CRIANÇAS E ADOLESCENTES",
        "doi": "",
        "periodico": "Acta Fisiatrica (USP)",
        "volume": "4",
        "paginas": "1-4",
        "autores": [
          "MAIA, P. B.",
          "SILVA, R. R.",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "2019",
        "titulo": "SCHSim: UM SIMULADOR DO SISTEMA CIRCULATÓRIO HUMANO UTILIZANDO CIRCUITOS ELÉTRICOS EQUIVALENTES",
        "doi": "",
        "periodico": "Revista Científica UMC",
        "volume": "4",
        "paginas": "1-",
        "autores": [
          "SILVA, A. G.",
          "GOROSO, D. G.",
          "SILVA, R. R."
        ]
      },
      {
        "ano": "2018",
        "titulo": "UMA ANÁLISE DA MODELAGEM DO SISTEMA CIRCULATÓRIO HUMANO (SCH) UTILIZANDO CIRCUITOS ELÉTRICOS EQUIVALENTES",
        "doi": "",
        "periodico": "Revista Científica UMC - Edição Especial - PIBIC",
        "volume": "1",
        "paginas": "1-4",
        "autores": [
          "SILVA, A. G.",
          "GOROSO, D. G.",
          "SILVA, R. R."
        ]
      },
      {
        "ano": "2017",
        "titulo": "MarkoLAB: A simulator to study ionic channel's stochastic behavior",
        "doi": "10.1016/j.compbiomed.2017.05.032",
        "periodico": "COMPUTERS IN BIOLOGY AND MEDICINE",
        "volume": "87",
        "paginas": "258-270",
        "autores": [
          "SILVA, R. R.",
          "GOROSO, D. G.",
          "BERS, D. M.",
          "PUGLISI, J. L."
        ]
      },
      {
        "ano": "2017",
        "titulo": "Slow Versus Fast Robot-Assisted Locomotor Training After Severe Stroke",
        "doi": "10.1097/PHM.0000000000000810",
        "periodico": "AMERICAN JOURNAL OF PHYSICAL MEDICINE & REHABILITATION",
        "volume": "4",
        "paginas": "1-",
        "autores": [
          "RODRIGUES, THAIS AMANDA",
          "GOROSO, DANIEL GUSTAVO",
          "WESTGATE, PHILIP M.",
          "CARRICO, CHERYL",
          "BATISTELLA, LINAMARA R.",
          "SAWAKI, LUMY"
        ]
      },
      {
        "ano": "2016",
        "titulo": "Adolescentes grávidas vítimas de violência: desafio a ser enfrentado na atenção básica Pregnant adolescents victims of violence",
        "doi": "",
        "periodico": "BIS. Boletim do Instituto de Saúde (Impresso)",
        "volume": "17",
        "paginas": "29-36",
        "autores": [
          "Camargo NF",
          "Zicchella J",
          "Ortolani PE",
          "Barrientos DMS",
          "Miura P",
          "Nishimura S",
          "Bastos  S",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "2015",
        "titulo": "MioLab, a rat cardiac contractile force simulator: applications to teaching cardiac cell physiology and biophysics",
        "doi": "10.1016/j.cmpb.2015.09.012",
        "periodico": "Computer Methods and Programs in Biomedicine (Print)",
        "volume": "122",
        "paginas": "3-28",
        "autores": [
          "SILVA, R. R.",
          "BISSACO, M. A. S.",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "2014",
        "titulo": "No. 19 Upper Limbs Post-Stroke Robotic Rehabilitation",
        "doi": "10.1016/j.pmrj.2014.08.357",
        "periodico": "PM & R (Philadelphia, 2009): the journal of injury, function and rehabilitation",
        "volume": "6",
        "paginas": "S85-S86",
        "autores": [
          "Goroso, Daniel G.",
          "TERRANOVA, THAIS",
          "TSUKIMOTO, DENISE R.",
          "BATTISTELLA, LINAMARA R."
        ]
      },
      {
        "ano": "2014",
        "titulo": "No. 70 Mechanical Work as a Tool for the Assessment of Muscle Synergism",
        "doi": "10.1016/j.pmrj.2014.08.207",
        "periodico": "PM & R (Philadelphia, 2009): the journal of injury, function and rehabilitation",
        "volume": "6",
        "paginas": "S110-",
        "autores": [
          "GONSALES DE CASTRO, PEDRO CLAUDIO",
          "GOROSO, DANIEL GUSTAVO",
          "AUGUSTO, JOSÉ",
          "LOPES, FERNANDES",
          "BATTISTELLA, LINAMARA RIZZO"
        ]
      },
      {
        "ano": "2014",
        "titulo": "No. 75 Posture Analysis in Motion Laboratory. The Impact in&nbsp;Rehabilitation Stroke Patients: Case Report",
        "doi": "10.1016/j.pmrj.2014.08.210",
        "periodico": "PM & R (Philadelphia, 2009): the journal of injury, function and rehabilitation",
        "volume": "6",
        "paginas": "S110-",
        "autores": [
          "DE CÁSSIA BORTE FERREIRA, AMÁBILE",
          "GONSALES DE CASTRO, PEDRO CLAUDIO",
          "GOROSO, DANIEL GUSTAVO",
          "BATTISTELLA, LINAMARA R."
        ]
      },
      {
        "ano": "2014",
        "titulo": "Balance quantification with videogame: pilot study",
        "doi": "10.5935/0104-7795.20140005",
        "periodico": "Acta Fisiatrica (USP)",
        "volume": "21",
        "paginas": "21-25",
        "autores": [
          "BARBOSA, ALESSANDRA FERREIRA",
          "COSTA, THAIS DELAMUTA AYRES DA",
          "OLIVEIRA, MARIA FERNANDA PAULETTI",
          "Castro, Pedro Claudio Gonsales de",
          "Moreira, Maria Cecília dos Santos",
          "GOROSO, DANIEL GUSTAVO",
          "LOPES, JOSÉ AUGUSTO FERNANDES",
          "AYRES, DENISE VIANNA MACHADO",
          "BATTISTELLA, LINAMARA RIZZO"
        ]
      },
      {
        "ano": "2014",
        "titulo": "Validación de un algoritmo para el cálculo de las dimensiones dentarias basado en el método de Bloise",
        "doi": "10.4321/S1135-76062014000300004",
        "periodico": "Cuadernos de Medicina Forense",
        "volume": "20",
        "paginas": "180-190",
        "autores": [
          "ROSPIDE, M. A.",
          "Goroso, D. G."
        ]
      },
      {
        "ano": "2014",
        "titulo": "COMPARAÇÃO DAS ESCALAS DE AVALIAÇÃO WOLF MOTOR FUNCTION TEST E FULG-MEY ER ASSESSMENT COM AS CAPACIDADES DOS ROBÔS INMOTION® E ARMEO®POWER.",
        "doi": "",
        "periodico": "XXIV CBEB",
        "volume": "1",
        "paginas": "2456-2459",
        "autores": [
          "K. P. Bischof",
          "YAMAMOTO, M. A.",
          "L. Moreira",
          "L. A. Constâncio",
          "ALVES, N. D.",
          "CANUTO, G.",
          "COSTA, V.",
          "JUNIOR, G",
          "FUMAGALLI, M. A.",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "2013",
        "titulo": "Analysis of postural control after the application of functional electrical stimulation in stroke patients",
        "doi": "10.5935/0104-7795.20130009",
        "periodico": "Acta Fisiatrica (USP)",
        "volume": "20",
        "paginas": "50-54",
        "autores": [
          "COSTA, THAIS DELAMUTA AYRES DA",
          "BARBOSA, ALESSANDRA FERREIRA",
          "OLIVEIRA, MARIA FERNANDA PAULETTI",
          "CASTRO, Pedro Cláudio Gonsales de",
          "AYRES, DENISE VIANNA MACHADO",
          "Moreira, Maria Cecília dos Santos",
          "LOPES, JOSÉ AUGUSTO FERNANDES",
          "GOROSO, DANIEL GUSTAVO"
        ]
      },
      {
        "ano": "2013",
        "titulo": "Monitoring heart rate variability online using e-health oriented 3G mobile telephone services",
        "doi": "10.1088/1742-6596/477/1/012036",
        "periodico": "Journal of Physics. Conference Series (Online)",
        "volume": "477",
        "paginas": "012036-",
        "autores": [
          "GOROSO, D G",
          "SILVA, R R DA",
          "BATTISTELLA, L R",
          "ODSTRCIL, M",
          "PAOLINI, M"
        ]
      },
      {
        "ano": "2013",
        "titulo": "MioLab: Simulator for cardiac myocyte contractile force of rat based on the dynamics of calcium",
        "doi": "10.1016/j.medengphy.2012.05.010",
        "periodico": "Medical Engineering & Physics",
        "volume": "35",
        "paginas": "338-349",
        "autores": [
          "SILVA, R. R.",
          "GOROSO, D. G.",
          "BISSACO, M. A. S."
        ]
      },
      {
        "ano": "2013",
        "titulo": "APLICAÇÃO DE SISTEMA MULTICANAL NA DETECÇÃO DE QUEDAS PARA IDOSOS",
        "doi": "10.18816/r-bits.v3i2.3550",
        "periodico": "Revista Brasileira de Inovação Tecnologica em Saúde",
        "volume": "3",
        "paginas": "39-47",
        "autores": [
          "BARBOSA VENTURA, J.",
          "LOPEZ, L. J. R.",
          "D. G. Goroso"
        ]
      },
      {
        "ano": "2012",
        "titulo": "A natural interaction system as a device for measuring human body joint angles",
        "doi": "",
        "periodico": "Acta Fisiatrica (USP)",
        "volume": "1",
        "paginas": "227-232",
        "autores": [
          "SULINO, R. M.",
          "MAMMANA, A. P.",
          "PELLEGRINI, A. M.",
          "GOROSO, D. G.",
          "HIRAGA, C. Y."
        ]
      },
      {
        "ano": "2012",
        "titulo": "Biotelemetry Tool for Healthcare in Local Area",
        "doi": "",
        "periodico": "Global Telemedicine and eHealth Updates: Knowledge Resources",
        "volume": "5",
        "paginas": "649-653",
        "autores": [
          "LOPEZ, L. J. R.",
          "BARBOSA VENTURA, J.",
          "Goroso, D. G."
        ]
      },
      {
        "ano": "2012",
        "titulo": "A Customizable Mobile Tool to Promote Healt and Prevent Non - Communicable Diseases",
        "doi": "",
        "periodico": "Global Telemedicine and eHealth Updates: Knowledge Resources",
        "volume": "5",
        "paginas": "52-56",
        "autores": [
          "Goroso, D. G.",
          "LOPEZ, L. J. R."
        ]
      },
      {
        "ano": "2011",
        "titulo": "EFFECTS OF LONG-TERM BLINDNESS ON PREPARATORY EMG MODULATION IN HUMANS PERFORMING LANDING MOVEMENTS",
        "doi": "10.2466/06.15.25.PMS.113.5.519-533",
        "periodico": "Perceptual and Motor Skills",
        "volume": "113",
        "paginas": "519-533",
        "autores": [
          "MAGALHÃES, FERNANDO HENRIQUE",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "2011",
        "titulo": "The effect of Functional Electric Stimulation in stroke patients&apos; motor control ¿ a case report",
        "doi": "10.1088/1742-6596/332/1/012011",
        "periodico": "Journal of Physics. Conference Series (Online)",
        "volume": "332",
        "paginas": "012011-",
        "autores": [
          "Pripas, Denise",
          "Beas, Allan Rogers Venditi",
          "Fioramonte, Caroline",
          "Castro, Pedro Claudio Gonsales de",
          "GOROSO, D. G.",
          "Moreira, Maria Cecília dos Santos"
        ]
      },
      {
        "ano": "2010",
        "titulo": "Monitoring system of assessment of energy expenditure to human in free-living conditions by Mean of Information and Communication Technologies",
        "doi": "",
        "periodico": "Global Telemedicine and eHealth Updates: Knowledge Resources",
        "volume": "3",
        "paginas": "551-555",
        "autores": [
          "LOPEZ, L. J. R.",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "2010",
        "titulo": "Optometric-lab: a Stereophotogrammetry Tool for Eye Movements Records",
        "doi": "",
        "periodico": "WORLD  ACADEMY OF SCIENCE, ENGINEERING AND TECHNOLOGY",
        "volume": "6",
        "paginas": "224-229",
        "autores": [
          "LEME, E. F. P.",
          "LOPEZ, L. J. R.",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "2010",
        "titulo": "Ferramenta de Diagnóstico para Prevenção do Acidente Vascular Encefálico",
        "doi": "",
        "periodico": "Acta Fisiatrica (USP)",
        "volume": "01",
        "paginas": "90-94",
        "autores": [
          "LOPEZ, L. J. R.",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "2009",
        "titulo": "PREPARATORY EMG ACTIVITY REVEALS A RAPID ADAPTATION PATTERN IN HUMANS PERFORMING LANDING MOVEMENTS IN BLINDFOLDED CONDITION 1,2</sup>",
        "doi": "10.2466/pms.109.2.500-516",
        "periodico": "Perceptual and Motor Skills",
        "volume": "109",
        "paginas": "500-516",
        "autores": [
          "MAGALHÃES, F.H.",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "2009",
        "titulo": "Postural stability of young adults during momentary absence of vision",
        "doi": "",
        "periodico": "Acta Fisiátrica",
        "volume": "16",
        "paginas": "19-24",
        "autores": [
          "COSTA, R. M. C. L.",
          "GOROSO, D. G.",
          "LOPES, J. A. F."
        ]
      },
      {
        "ano": "2009",
        "titulo": "MECHANICAL WORK AS A QUANTITATIVE METHOD TO ASSESS POSTURE CONTROL IN SITUATIONS OF MOTOR AND VISUAL PERTURBATION",
        "doi": "",
        "periodico": "Acta Fisiatrica (USP)",
        "volume": "16",
        "paginas": "179-185",
        "autores": [
          "CASTRO, Pedro Cláudio Gonsales de",
          "GOROSO, D. G.",
          "COELHO, D. B.",
          "LOPES, J. A. F."
        ]
      },
      {
        "ano": "2009",
        "titulo": "Analise estabilográfica global na autoperturbação motora em indivíduos com privação momentânea da visâo",
        "doi": "",
        "periodico": "Brazilian Journal of Motor Behavior",
        "volume": "4",
        "paginas": "41-42",
        "autores": [
          "COSTA, R. M. C. L.",
          "GOROSO, D. G.",
          "LOPES, J. A. F."
        ]
      },
      {
        "ano": "2009",
        "titulo": "A investigação do controle postural pelo trabalho mecânico",
        "doi": "",
        "periodico": "Brazilian Journal of Motor Behavior",
        "volume": "4",
        "paginas": "57-58",
        "autores": [
          "CASTRO, Pedro Cláudio Gonsales de",
          "GOROSO, D. G.",
          "COELHO, D. B.",
          "LOPES, J. A. F."
        ]
      },
      {
        "ano": "2009",
        "titulo": "Padrôes sequenciais de ação sinérgica em músculos posturais durante a extensão do tronco",
        "doi": "",
        "periodico": "Brazilian Journal of Motor Behavior",
        "volume": "4",
        "paginas": "65-67",
        "autores": [
          "BITTENCOURT, D.",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "2009",
        "titulo": "A quantificação do trabalho mecânico como recurso de avaliação do controle postural",
        "doi": "",
        "periodico": "Acta Fisiatrica (USP)",
        "volume": "16",
        "paginas": "179-185",
        "autores": [
          "Castro, PCG",
          "GOROSO, D. G.",
          "COELHO, Daniel Boari",
          "Lopes, JAF"
        ]
      },
      {
        "ano": "2007",
        "titulo": "Simulação em LabHEART de fatores que causam arritmia ventricular",
        "doi": "10.1007/978-3-540-74471-9_231",
        "periodico": "IFMBE Proceedings",
        "volume": "18",
        "paginas": "996-999",
        "autores": [
          "GOROSO, D. G.",
          "PUGLISI, J.",
          "GURGÃO, C. M. G. de"
        ]
      },
      {
        "ano": "2007",
        "titulo": "Ajuste Postural no Processo de Equilíbrio Instável Em Indivíduos com Privação Momentânea da Visão",
        "doi": "10.1007/978-3-540-74471-9_174",
        "periodico": "IFMBE Proceedings",
        "volume": "18",
        "paginas": "748-752",
        "autores": [
          "FONSECA, Tânia Dora Anastásio",
          "GOROSO, D. G.",
          "MAGALHÃES, F.H.",
          "LOPES, J. A. F."
        ]
      },
      {
        "ano": "2000",
        "titulo": "The amplitude and phase responses of the firing rates of some motoneuron models",
        "doi": "10.1016/S0303-2647(00)00104-0",
        "periodico": "Biosystems (Amsterdam. Print)",
        "volume": "58",
        "paginas": "33-39",
        "autores": [
          "Goroso, D",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "1998",
        "titulo": "Codman's paradox of the arm rotations is not a paradox: mathematical validation",
        "doi": "10.1016/S1350-4533(98)00020-4",
        "periodico": "Medical Engineering & Physics",
        "volume": "20",
        "paginas": "257-260",
        "autores": [
          "Politti, J",
          "GOROSO, D. G.",
          "Valentinuzzi, M.E.",
          "Bravo, O."
        ]
      },
      {
        "ano": "1996",
        "titulo": "Potencia muscular en movimiento de flexoextension del sistema tronco-muslo",
        "doi": "",
        "periodico": "Revista Argentina de Bioingenieria",
        "volume": "2",
        "paginas": "29-38",
        "autores": [
          "GOROSO, D. G.",
          "Yamin Turbay, C.E.",
          "Bravo, O."
        ]
      }
    ],
    "softwares": [
      {
        "titulo": "Software de análise de dados de acelerometria para estudo da marcha de seres humanos.",
        "ano": "2025",
        "finalidade": "Aquisição e processamento de dados de acelerometria",
        "plataforma": "português, inglês."
      },
      {
        "titulo": "Ferramenta on-line para cálculo de variabilidade de frequência cardíaca coletada com relógio inteligente",
        "ano": "2024",
        "finalidade": "Fornecer aos usuários uma análise detalhada da sua saúde cardiovascular e do seu bem-estar geral. A VFC é uma medida importante da função do sistema nervoso autônomo e reflete a capacidade do coração de responder a diferentes estímulos fisiológicos e ambi",
        "plataforma": "PYTHON; MYSQL"
      },
      {
        "titulo": "Ferramentas para facilitar o monitoramento da obesidade em crianças e adolescentes",
        "ano": "2023",
        "finalidade": "seguimento de crianças obesas",
        "plataforma": "HTML; JAVA SCRIPT; PHP; MYSQL"
      },
      {
        "titulo": "Aplicativo em Wear OS para monitoramento cardíaco durante teste de inclinação.",
        "ano": "2023",
        "finalidade": "aquisição de dados de frequência cardiaca e angulo de orientação postural com taxa de amostragem de 40Hz.",
        "plataforma": "JAVA; XML; MYSQL"
      },
      {
        "titulo": "Aplicativo para telefone celular para detecção de arritmia cardíaca e queda.",
        "ano": "2015",
        "finalidade": "Prevenção Primária da Saúde. Monitoramento remoto de sinais fisiológicas.",
        "plataforma": "Android, Matlab"
      },
      {
        "titulo": "MioLab: Laboratório de Miócito Cardíaco",
        "ano": "2014",
        "finalidade": "Pesquisa e ensino da biofísica do miócito cardíaco",
        "plataforma": "Delphi, C++, Matlab"
      },
      {
        "titulo": "Aplicativos para telefone celular: Fleem System",
        "ano": "2012",
        "finalidade": "Monitoramento remoto de sinais fisiológicas",
        "plataforma": "Android"
      },
      {
        "titulo": "Plataforma web Fleem System",
        "ano": "2012",
        "finalidade": "Monitoramento remoto de sinais fisiológicas",
        "plataforma": "HTML, SQL"
      }
    ],
    "patentes": [
      {
        "titulo": "Sistema de monitoramento do gasto energético humano",
        "ano": "2011"
      },
      {
        "titulo": "Sistema integrado de monitoramiento de señales fisiológicas en linea",
        "ano": "2013"
      },
      {
        "titulo": "Sistema integrado de monitoramento de sinais fisiológicos em linha com aparelho celular",
        "ano": "2014"
      },
      {
        "titulo": "Sistema integrado de monitoramiento de señales fisiológicas en linea com aparato celular",
        "ano": "2014"
      },
      {
        "titulo": "Sistema de monitoramento de sinais fisiológicos e respectivos dispositivos auxiliares",
        "ano": "2014"
      },
      {
        "titulo": "Sistema  de monitoreo de señales fisiológicas",
        "ano": "2013"
      },
      {
        "titulo": "Sistema de monitoramento do gasto energético humano",
        "ano": "2011"
      }
    ],
    "orientacoes_concluidas": [
      {
        "tipo": "Mestrado",
        "titulo": "Controle Postural em indivíduos com deficiência visual durante atividade motora específica",
        "ano": "2007",
        "orientado": "Tânia Dora Anastásio Fonseca",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Estratégias motoras durante as fases pré e pós-aterrissagem de saltos de diferentes alturas em indivíduos com deficiência visual",
        "ano": "2007",
        "orientado": "Fernando Henrique Magalhães",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Análise estabilográfico da postura ereta em adultos jovens na extensão de tronco.",
        "ano": "2008",
        "orientado": "Regina Maria Carvalho Leme Costa.",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Quantificação do trabalho mecânico durante situações de perturbações motoras e visual.",
        "ano": "2008",
        "orientado": "Pedro Cláudio Gonsales de Castro",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Padrôes posturais entre a inclinação lateral do tronco e a distribuição de carga",
        "ano": "2009",
        "orientado": "Paulo Henrique Cintra Soares",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Atividade muscular preparatória na extensão do tronco em indivíduos com visão preservada",
        "ano": "2009",
        "orientado": "Elton Carlos Pereira Rita",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Estudo comparativo entre hipoterapia e hidroterapia na função motora grossa de crianças com paralisia cerebral",
        "ano": "2009",
        "orientado": "Rodrigo Vieira Hudson",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "QUANTIFICAÇÃO DE VARIÁVEIS ELETROMIOGRÁFICAS NA EXTENSÃO DO TRONCO E QUADRIL EM DIFERENTES CONDIÇÕES VISUAIS",
        "ano": "2009",
        "orientado": "DANIELLE BITTENCOURT DA SILVA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "OPTOMETRIC-LAB: ferramenta videogrametrica para quantificação da movimentação ocular",
        "ano": "2010",
        "orientado": "Eduardo Fratari Paes Leme",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Sistema Multicanal para Biotelemetria",
        "ano": "2012",
        "orientado": "Jocelio Ventura Barbosa",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "COMPARAÇÃO ENTRE UM SISTEMA ONLINE E UM DISPOSITIVO OFFLINE PARA QUANTIFICAÇÃO DE GASTO CALÓRICO EM RELAÇÃO AO PADRÃO OURO",
        "ano": "2014",
        "orientado": "Rafael Palmeira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Estudo da velocidade da Marcha robótica na Lokomat durante o treino de marcha em pacientes com Acidente Vascular Encefálico.",
        "ano": "2016",
        "orientado": "Thais Amanda Rodrigues",
        "instituicao": "Universidade de São Paulo"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Influencia dos componentes alimentares na pressão arterial em crianças acima do peso",
        "ano": "2019",
        "orientado": "Carla Fernanda de Miranda Rodrigues",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Quantificação dos níveis de atividade física utilizando dispositivo Smartphone",
        "ano": "2021",
        "orientado": "Nicoli Bertti Zanin",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Validação de Métricas Fisiológicas em Smartwatch: Impacto das Variações na Cor da Pele dos Participantes",
        "ano": "2026",
        "orientado": "Kelly Correa Baioco da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "VALIDAÇÃO DE TECNOLOGIA M-HEALTH APLICADA A ANÁLISE DE MARCHA",
        "ano": "2026",
        "orientado": "Lucas de Paula Vieira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "COMPARAÇÃO ENTRE GASTO CALÓRICO  DURANTE CAMINHADA CALCULADO COM DISPOSITIVOS CELULARES DIFERENTES UTILIZANDO SISTEMA ONLINE E SOFTWARE OFF-LINE",
        "ano": "2013",
        "orientado": "Marcio Tadashi Ishizaki",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "MioLab: Simulator of Excitation-Contraction-Relaxation Coupling in Cardiac Myocyte of Rat",
        "ano": "2012",
        "orientado": "Robson Rodrigues da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Sistema de monitoramento remoto de sinais fisiológicas",
        "ano": "2016",
        "orientado": "Diego Pereira da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "TECNOLOGIA PARA APOIAR A TOMADA DE DECISÃO CLÍNICA: FERRAMENTAS ON-LINE PARA MONITORAR A OBESIDADE EM CRIANÇAS E ADOLESCENTES",
        "ano": "2022",
        "orientado": "William Tsutomu Watanabe",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Impacto socioeconômico do serviço de monitoramento remoto de sinais vitais",
        "ano": "2021",
        "orientado": "Walter Saraiva Lopes",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "DESENVOLVIMENTO DE UMA INTERFACE GRÁFICA COM IMPACTO NA COLETA DE DADOS DA FREQUÊNCIA CARDÍACA VIA SMARTWATCH EM DIFERENTES POSTURAS CORPORAIS",
        "ano": "2025",
        "orientado": "Alexandre Messias da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "MODELO PARA QUANTIFICAR O GASTO ENERGÉTICO HUMANO DESENVOLVIDO EM PLATAFORMA MÓVEL",
        "ano": "2012",
        "orientado": "Leonardo Juan Ramirez Lopez",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Pos Doutorado",
        "titulo": "",
        "ano": "2022",
        "orientado": "William Tsutomu Watanabe",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Pos Doutorado",
        "titulo": "",
        "ano": "2014",
        "orientado": "João Loures Salinet Júnior",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Implementação e avaliação do modelo de fibra muscular cardíaca de Negroni e Lascano",
        "ano": "2007",
        "orientado": "Rogério Guedes da Silva Castro Martins",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliar a qualidade de vida e satisfação dos usuários",
        "ano": "2016",
        "orientado": "Ana Caroline Leite",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Suporte técnico para atualização da plataforma FLEEM System.",
        "ano": "2017",
        "orientado": "William Tsutomu Watanabe",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliar a qualidade de vida e satisfação dos sujeitos participantes do estudo",
        "ano": "2017",
        "orientado": "Bruno Mendes de Oliveira Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Ajustes das faixas características do índice cintura quadril para crianças e adolescentes",
        "ano": "2018",
        "orientado": "Priscila Britos Maia",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "CALIBRAÇÃO E SINCRONIZAÇÃO DE SISTEMA VIDEOGRAVIMÉTRICO PARA AQUISIÇÃO DE DADOS BIOMECÂNICOS",
        "ano": "2021",
        "orientado": "Lucas de Paula Vieira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "RELAÇÃO DE LIPIDIOS SÉRICOS E CARBOIDRATOS COM INDICES ANTROPOMÉTRICOS",
        "ano": "2020",
        "orientado": "Priscila Brito Maia",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Anamnese em pacientes pós-Covid19",
        "ano": "2023",
        "orientado": "Ana Leticia Gomes dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Padrões Fisiológicos e Implicações Cardíacas da Infecção por COVID-19 e da Vacinação: Uma Análise Integrada",
        "ano": "2025",
        "orientado": "Ana Leticia Gomes dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Banco de dados de parâmetros biofísicos do miocíto de mamíferos",
        "ano": "2016",
        "orientado": "André Petraconi",
        "instituicao": "Universidade de Mogi das Cruzes"
      }
    ],
    "orientacoes_andamento": []
  },
  "marcia": {
    "id": "prof Marcia.xml",
    "lattes_id": "7308927546311934",
    "data_atualizacao": "10/08/2026",
    "nome": "Marcia Aparecida Silva Bissaco",
    "nome_citacoes": [
      "Bissaco, M. A. S.",
      "Bissaco, M. A.",
      "M. A. Bissaco",
      "M. A. S. Bissaco",
      "MAS Bissaco",
      "Bissaco MAS",
      "Bissaco MA",
      "Marcia  A. S. Bissaco",
      "Bissaco, Marcia A S",
      "Marcia Aparecida Bissaco da Silva",
      "Silva, M. A.",
      "Bissaco, Marcia Aparecida Silva",
      "Bissaco, M. A. SE",
      "M.A.S, BISSACO",
      "BISSACO, MARCIA APARECIDA S.",
      "Bissaco M.",
      "Bissaco, Márcia A S",
      "Márcia A. S. Bissaco",
      "Marcia A. Bissaco",
      "Bissaco, Márcia A. S.",
      "A. S. BISSACO, MÁRCIA",
      "BISSACO, MÁRCIA APARECIDA SILVA",
      "Márcia Aparecida da Silva Bissaco",
      "BISSACO, MÁRCIA APARECIDA DA SILVA"
    ],
    "orcid": "https://orcid.org/0000-0002-3219-2567",
    "nacionalidade": "Brasil",
    "resumo": "Possui graduação em Tecnologia em Processamento de Dados pela Universidade Estadual Paulista Júlio de Mesquita Filho (UNESP - Bauru, 1993), mestrado em Engenharia Elétrica pela Universidade de São Paulo (USP - São Carlos, 1997) com bolsa do CNPq, doutorado em Física Computacional pela Universidade de São Paulo (USP - São Carlos, 2001) com bolsa da Fapesp e pós-doutorado pela Universidade de Mogi das Cruzes (NPT/UMC, 2001-2003) com bolsa da Fapesp. Atualmente, é docente e pesquisadora na Universidade de Mogi das Cruzes (UMC), atuando no Programa de Mestrado e Doutorado em Engenharia Biomédica, Mestrado Profissional em Ciência e Tecnologia em Saúde e nos cursos de graduação em Sistemas de Informação e Análise e Desenvolvimento de Sistemas. É Membro Titular da Sociedade Brasileira de Engenharia Biomédica (SBEB). É membro do Comitê de Ética em Pesquisas envolvendo Seres Humanos da Universidade de Mogi das Cruzes. Recentemente, iniciou atividade docente na Faculdade de Tecnologia de Ferraz de Vasconcelos. Tem experiência na área de Engenharia Biomédica, atuando no processamento de imagens médicas e desenvolvimento de simulações computacionais para auxílio ao diagnóstico e aos portadores de deficiência física e também no desenvolvimento de tecnologias computacionais para auxílio à educação, especialmente para auxiliar crianças com dificuldade de aprendizagem.",
    "instituicao": "Universidade de Mogi das Cruzes",
    "departamento": "Núcleo de Pesquisas Tecnológicas",
    "cidade": "Mogi das Cruzes",
    "uf": "SP",
    "formacoes": [
      {
        "tipo": "Pos Doutorado",
        "curso": "",
        "instituicao": "Universidade de Mogi das Cruzes",
        "ano": "2003"
      },
      {
        "tipo": "Doutorado",
        "curso": "Física",
        "instituicao": "Universidade de São Paulo",
        "ano": "2001"
      },
      {
        "tipo": "Mestrado",
        "curso": "Engenharia Elétrica",
        "instituicao": "Universidade de São Paulo",
        "ano": "1997"
      },
      {
        "tipo": "Graduacao",
        "curso": "Tecnologia Em Processamento de Dados",
        "instituicao": "Universidade Estadual Paulista Júlio de Mesquita Filho",
        "ano": "1993"
      }
    ],
    "areas": [
      "Engenharia Biomédica",
      "ENGENHARIAS",
      "Imagem Médica",
      "Engenharia Médica",
      "Controle de Qualidade",
      "Ciência e Tecnologia em Saúde"
    ],
    "metricas": {
      "artigos": 55,
      "livros": 0,
      "capitulos": 15,
      "eventos": 107,
      "softwares": 46,
      "patentes": 0,
      "orientacoes_concluidas": 74,
      "orientacoes_andamento": 0
    },
    "artigos": [
      {
        "ano": "2026",
        "titulo": "SOFTWARE PARA ENSINO E DESENVOLVIMENTO DA ACURÁCIA EM INTERPRETAÇÃO ELETROCARDIOGRÁFICA",
        "doi": "10.36238/2359-5787.2026.v12n62.1956",
        "periodico": "Revista Acadêmica Online",
        "volume": "12",
        "paginas": "e1956-26",
        "autores": [
          "BORGES, RAFAEL GOUVEIA",
          "SANTOS, KEVEN MAXIMUS DA SILVA",
          "BISSACO, MÁRCIA APARECIDA SILVA",
          "SILVA, ROBSON RODRIGUES DA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Teaching electrocardiographic interpretation: a review of the latest models",
        "doi": "10.55905/cuadv17n1-002",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "17",
        "paginas": "e7130-22",
        "autores": [
          "BORGES, RAFAEL GOUVEIA",
          "Bissaco, Marcia Aparecida Silva",
          "SILVA, ROBSON RODRIGUES DA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Jogos digitais para auxiliar no processamento e organização de informações sensoriais no TEA: revisão integrativa",
        "doi": "10.55905/oelv23n1-122",
        "periodico": "OBSERVATORIO DE LA ECONOMÍA LATINOAMERICANA",
        "volume": "23",
        "paginas": "e8659-17",
        "autores": [
          "SOUZA, RICHARD RIBEIRO BRANCATO DE",
          "FONTES, JANY MAZINI",
          "FALSONI, MARINA",
          "MARQUES, MATHEUS AUGUSTO",
          "COIAHY, MARIANA GOMES AMORIM",
          "MARTINI, SILVIA CRISTINA",
          "BISSACO, MÁRCIA APARECIDA SILVA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "El-dorado senses: jogo sério para modular a reatividade a estímulos sensoriais apresentados por mídias digitais",
        "doi": "10.55905/oelv23n1-120",
        "periodico": "OBSERVATORIO DE LA ECONOMÍA LATINOAMERICANA",
        "volume": "23",
        "paginas": "e8657-20",
        "autores": [
          "SOUZA, RICHARD RIBEIRO BRANCATO DE",
          "FONTES, JANY MAZINI",
          "FALSONI, MARINA",
          "MARQUES, MATHEUS AUGUSTO",
          "COIAHY, MARIANA GOMES AMORIM",
          "MARTINI, SILVIA CRISTINA",
          "BISSACO, MÁRCIA APARECIDA SILVA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Avançando na precisão diagnóstica: detecção de lesões hipointensas da substância branca guiada por IA",
        "doi": "10.34119/bjhrv8n1-360",
        "periodico": "Brazilian Journal of Health Review",
        "volume": "8",
        "paginas": "e77510-",
        "autores": [
          "TAVARES, ALMIR RODRIGUES",
          "SANTOS, VITÓRIA LORRANI DOS",
          "RIBEIRO, HÉLIO DE ARAÚJO",
          "OLIVEIRA, CLEBER SILVA DE",
          "SILVA, ROBSON RODRIGUES DA",
          "FRANCO, THIAGO DE SOUZA",
          "ROCHA, ANTONIO JOSE DA",
          "Bissaco, Marcia Aparecida Silva"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Cost-effectiveness of spinal cord stimulation: a long-term analysis of closed-loop scs in chronic pain treatment",
        "doi": "10.55905/cuadv17n4-028",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "17",
        "paginas": "e7958-13",
        "autores": [
          "SÁ, GABRIELY GOMES DE",
          "OLIVEIRA, CLEBER SILVA DE",
          "ROCHA, ANTONIO JOSE DA",
          "Bissaco, Marcia Aparecida Silva",
          "TAVARES, ALMIR RODRIGUES",
          "ENOMURA, DANILO KENZO",
          "COLAÇO, GUILHERME ALVES",
          "ARANHA FILHO, FERNANDO",
          "DIAS, LAURA JAMELLI",
          "MUCOUCAH, BRUNA SOARES",
          "SANTOS, VITÓRIA LORRANI DOS",
          "FRANCO, THIAGO DE SOUZA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "PROGNOSIS OF NEURODEGENERATIVE DISEASES: ARTIFICIAL INTELLIGENCE IN THE DIAGNOSIS OF ALZHEIMER'S, PARKINSON'S AND MULTIPLE SCLEROSIS",
        "doi": "10.56238/arev7n4-167",
        "periodico": "ARACÊ - DIREITOS HUMANOS EM REVISTA",
        "volume": "7",
        "paginas": "18554-18566",
        "autores": [
          "MUCOUCAH, BRUNA SOARES",
          "TAVARES, ALMIR RODRIGUES",
          "DE SÁ, GABRIELY GOMES",
          "DOS SANTOS, VITÓRIA LORRANI",
          "DE OLIVEIRA, CLEBER SILVA",
          "FRANCO, THIAGO DE SOUZA",
          "DA ROCHA, ANTONIO JOSE",
          "Bissaco, Marcia Aparecida Silva"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Comprehensive Assessment of CNN Sensitivity in Automated Microorganism Classification: Effects of Compression, Non-Uniform Scaling, and Data Augmentation",
        "doi": "10.3390/biomedinformatics5040061",
        "periodico": "BioMedInformatics",
        "volume": "5",
        "paginas": "61-94",
        "autores": [
          "BOUKOUVALAS, DIMITRIA THEOPHANIS",
          "BISSACO, MÁRCIA APARECIDA SILVA",
          "DELLÊ, HUMBERTO",
          "DEANA, ALESSANDRO MELO",
          "BELAN, PETERSON ADRIANO",
          "ARAÚJO, SIDNEI ALVES DE"
        ]
      },
      {
        "ano": "2025",
        "titulo": "State of the art in ms Black-Hole segmentation: -End-To-End- deep learning techniques",
        "doi": "10.55905/oelv23n9-042",
        "periodico": "OBSERVATORIO DE LA ECONOMÍA LATINOAMERICANA",
        "volume": "23",
        "paginas": "e11381-17",
        "autores": [
          "TAVARES, ALMIR RODRIGUES",
          "SÁ, GABRIELY GOMES DE",
          "SANTOS, VITÓRIA LORRANI DOS",
          "PANCIONI, BRUNO MARQUES",
          "OLIVEIRA, CLEBER SILVA DE",
          "FRANCO, THIAGO DE SOUZA",
          "ROCHA, ANTONIO JOSE DA",
          "Bissaco, Marcia Aparecida Silva"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Tecnologias utilizadas no ensino da interpretação do sinal de ECG e sua relação com a aprendizagem",
        "doi": "10.54033/cadpedv21n9-221",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e8058-20",
        "autores": [
          "BORGES, R. G.",
          "Bissaco, M. A. S.",
          "Silva, R. R."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Mobile application: digital health card for deaf adolescents",
        "doi": "10.1590/1980-220x-reeusp-2023-0366en",
        "periodico": "REVISTA DA ESCOLA DE ENFERMAGEM DA USP",
        "volume": "58",
        "paginas": "1-8",
        "autores": [
          "YASUE, THIAGO YUKIO MURAYAMA",
          "OLIVEIRA, CLÁUDIA DOS SANTOS",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "Scardovelli, Terigi Augusto",
          "Bissaco, Marcia Aparecida Silva",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "SILVA, ROBSON RODRIGUES DA",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Abordagem diagnóstica de lesões cerebrais em imagens de ressonância magnética por IA",
        "doi": "10.54033/cadpedv21n13-199",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e11960-17",
        "autores": [
          "TAVARES, ALMIR RODRIGUES",
          "FRANCO, THIAGO DE SOUZA",
          "OLIVEIRA, CLEBER SILVA DE",
          "SILVA, ROBSON RODRIGUES DA",
          "MARTINI, SILVIA CRISTINA",
          "FAREZ, MAURICIO",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "ROCHA, ANTONIO JOSE DA",
          "Bissaco, Marcia Aparecida Silva"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Integração de redes neurais e inteligência artificial no diagnóstico de tumores cerebrais: convergência entre tecnologia e saúde",
        "doi": "10.55905/cuadv16n13-154",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "16",
        "paginas": "e7065-10",
        "autores": [
          "TAVARES, ALMIR RODRIGUES",
          "FRANCO, THIAGO DE SOUZA",
          "OLIVEIRA, CLEBER SILVA DE",
          "SILVA, ROBSON RODRIGUES DA",
          "MARTINI, SILVIA CRISTINA",
          "FAREZ, MAURICIO",
          "ROCHA, ANTONIO JOSE DA",
          "Bissaco, Marcia Aparecida Silva"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Visão computacional na saúde: revisão de métodos e desafios educacionais para integração multidisciplinar",
        "doi": "10.55905/cuadv16n13-169",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "16",
        "paginas": "e7088-19",
        "autores": [
          "TAVARES, ALMIR RODRIGUES",
          "RIBEIRO, HELIO DE ARAÚJO",
          "CAMPOS, HIGOR BARRETO",
          "OLIVEIRA, CLEBER SILVA DE",
          "SILVA, ROBSON RODRIGUES DA",
          "Bissaco, Marcia Aparecida Silva",
          "MARTINI, SILVIA CRISTINA",
          "MENEGIDIO, FABIANO BEZERRA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Computacional tool for sizing batch type reactions with multiple reactions",
        "doi": "10.5281/zenodo.10011928",
        "periodico": "REVISTA FISIO&TERAPIA",
        "volume": "127",
        "paginas": "1-5",
        "autores": [
          "MOTTA, G. M. S.",
          "ORNELAS JUNIOR, M. M.",
          "Bissaco, M. A. S.",
          "BRANDAO, H. S.",
          "SILVA, R. R."
        ]
      },
      {
        "ano": "2023",
        "titulo": "TRANSFERÊNCIA DE APRENDIZADO PARA CATEGORIZAÇÃO DE PATOLOGIAS",
        "doi": "10.56083/rcv3n9-022",
        "periodico": "CONTEMPORÂNEA - REVISTA DE ÉTICA E FILOSOFIA POLÍTICA",
        "volume": "3",
        "paginas": "13857-13878",
        "autores": [
          "LIMA, CÉSAR ALEXANDRE SILVA",
          "MARTINI, SILVIA CRISTINA",
          "DOS SANTOS, CLAYTON EDUARDO",
          "BISSACO, MÁRCIA APARECIDA SILVA",
          "AMATE, FLÁVIO CÉZAR",
          "GIANCOLI, ANA PAULA MULLER",
          "da Silva, Alessandro Pereira",
          "Scardovelli, Terigi Augusto",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Conteúdo on-line para curso de imagens pneumológicas",
        "doi": "10.55905/revconv.16n.9-265",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "16",
        "paginas": "18303-18313",
        "autores": [
          "LEITE, LORRANE SOUZA",
          "MARTINI, SILVIA CRISTINA",
          "SANTOS, ANA MARIA VITARELLI DE CASTRO EMERY",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "da Silva, Alessandro Pereira",
          "Scardovelli, Terigi Augusto",
          "BISSACO, MÁRCIA APARECIDA DA SILVA",
          "MOREIRA, LUCYANA DE MIRANDA",
          "DE LIMA, DAYANA APARECIDA MACHADO",
          "BORGES, ROBSON FERREIRA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Automated methodology for breast segmentation and mammographic density classification using co-occurrence and statistical and SURF descriptors",
        "doi": "10.1504/ijbet.2022.124185",
        "periodico": "INTERNATIONAL JOURNAL OF BIOMEDICAL ENGINEERING AND TECHNOLOGY",
        "volume": "39",
        "paginas": "213-248",
        "autores": [
          "PAVUSA JUNIOR, R.",
          "FERNANDES, J. C. L.",
          "Bissaco, M. A. S.",
          "Silva, A. P.",
          "Scardovelli, T. A.",
          "BOSCH, S. R. M. S.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2022",
        "titulo": "PharmaLab: a tool to study the drug action on the mouse ventricular myocyte",
        "doi": "10.1088/1742-6596",
        "periodico": "JOURNAL OF PHYSICS. CONFERENCE SERIES (PRINT)",
        "volume": "2224",
        "paginas": "1-5",
        "autores": [
          "CAMARGO, M. L. A.",
          "GOROSO, D. G.",
          "Bissaco, M. A. S.",
          "Silva, R. R."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Educational platform for support in the experience, communication and behavior of children with autism spectrum disorder",
        "doi": "10.1007/s42600-022-00203-5",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-16",
        "autores": [
          "DA SILVA, ADILSON LIMA",
          "Bissaco, Marcia Aparecida Silva"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Impact of a virtual zoo on the learning and effectiveness motivation of children with reading difficulties in the initial phase of literacy",
        "doi": "",
        "periodico": "HUMANIDADES & INOVAÇÃO",
        "volume": "8",
        "paginas": "317-337",
        "autores": [
          "DOMINGUES, A. M.",
          "MARTINI, S. C.",
          "Castro, M.",
          "Silva, A. P.",
          "Scardovelli, T. A.",
          "Bissaco, M. A. S."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Computational Intelligence in Serious Games: A Case Study to Identify Patterns in a Game for Children with Learning Disabilities",
        "doi": "10.5120/ijca2022922044",
        "periodico": "INTERNATIONAL JOURNAL OF COMPUTER APPLICATIONS",
        "volume": "184",
        "paginas": "40-44",
        "autores": [
          "DOMINGUES, A. M.",
          "DELGADO, S.",
          "Bissaco, M. A. S.",
          "ARAUJO, S. A."
        ]
      },
      {
        "ano": "2022",
        "titulo": "SpaceGeo_AR: augmented reality application for teaching and learning spatial geometry by deaf and non-deaf students",
        "doi": "10.33448/rsd-v11i7.29656",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e23211729656-15",
        "autores": [
          "OLIVEIRA, FRANCISCO CÉSAR DE",
          "TOLEDO, WESLEY EVANGELISTA",
          "BISSACO, MÁRCIA APARECIDA SILVA",
          "SILVA, ROBSON RODRIGUES DA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Cadastro e consulta de parâmetros biofísicos utilizando a plataforma MyocyteDB",
        "doi": "10.33448/rsd-v11i8.30712",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e14711830712-20",
        "autores": [
          "PLOVAS, RONALDO",
          "PIMENTEL, RODRIGO",
          "BISSACO, MÁRCIA APARECIDA SILVA",
          "GOROSO, DANIEL GUSTAVO",
          "PUGLISI, JOSE LUIS",
          "SILVA, ROBSON RODRIGUES DA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "ELDORADO: Jogo sério desenvolvido para estimulação sensorial em crianças com transtorno do espectro autista",
        "doi": "10.24325/issn.2446-5763.v8i23p1-24",
        "periodico": "SOUTH AMERICAN DEVELOPMENT SOCIETY JOURNAL",
        "volume": "8",
        "paginas": "1-24",
        "autores": [
          "BRANCATO, RICHARD",
          "BRAVIN, MARCELO",
          "RODRIGUES, HENRIQUE DA COSTA",
          "RODRIGUES, SILVIA CRISTINA MARTINI",
          "BISSACO, MÁRCIA APARECIDA SILVA"
        ]
      },
      {
        "ano": "2021",
        "titulo": "PatologIA: online platform for improving image-based diagnostics applied to medical students.",
        "doi": "",
        "periodico": "PROCEEDINGS OF SPIE, THE INTERNATIONAL SOCIETY FOR OPTICAL ENGINEERING",
        "volume": "11601",
        "paginas": "116010T-15",
        "autores": [
          "LIMA, C. A. S.",
          "SANTOS, Clayton Eduardo dos",
          "MARTINI, S. C.",
          "Silva, A. P.",
          "Scardovelli, T. A.",
          "BOSCHI, SILVIA",
          "Bissaco, M. A. S."
        ]
      },
      {
        "ano": "2021",
        "titulo": "The use and impact of mHealth by community health workers in developing and least developed countries: a systematic review",
        "doi": "10.1007/s42600-021-00154-3",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "37",
        "paginas": "563-582",
        "autores": [
          "ABREU, F. D. L.",
          "Bissaco, M. A. S.",
          "SILVA, A. P.",
          "BOSCHI, S. R. M. S.",
          "Scardovelli, T. A.",
          "SANTOS, M. F.",
          "RODRIGUES, C. C. M.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2021",
        "titulo": "A  lateralidade  humana:  Quais  explicações existem?",
        "doi": "",
        "periodico": "Revista Científica da FAMINAS",
        "volume": "16",
        "paginas": "119-127",
        "autores": [
          "Almeida, I. D.",
          "SILVA, S. G.",
          "BISSACO, M. A. S."
        ]
      },
      {
        "ano": "2021",
        "titulo": "O uso de tecnologias digitais no ensino de geometria espacial: uma revisão da literatura",
        "doi": "10.33448/rsd-v10i15.22743",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "10",
        "paginas": "e235101522743-11",
        "autores": [
          "OLIVEIRA, FRANCISCO CÉSAR DE",
          "SILVA, ROBSON RODRIGUES DA",
          "BISSACO, MÁRCIA APARECIDA SILVA"
        ]
      },
      {
        "ano": "2020",
        "titulo": "A computerized tool to assess reading skills of students with motor impairment",
        "doi": "10.1016/j.medengphy.2020.01.001",
        "periodico": "MEDICAL ENGINEERING & PHYSICS",
        "volume": "77",
        "paginas": "31-42",
        "autores": [
          "Bissaco, M. A. S.",
          "FRÈRE, Annie France",
          "Bissaco, L.F",
          "Marinque, A. L.",
          "DIRANI, E.",
          "RUGGIERO, N.",
          "AMATE, FLAVIO CEZAR"
        ]
      },
      {
        "ano": "2020",
        "titulo": "Memorization of daily routines by children with Down syndrome assisted by a playful virtual environment",
        "doi": "10.1038/s41598-020-60014-5",
        "periodico": "Scientific Reports",
        "volume": "10",
        "paginas": "3144-",
        "autores": [
          "NETTO, O. L. C.",
          "RODRIGUES, S. C. M.",
          "Castro, M. V.",
          "SILVA, D. P.",
          "Silva, R. R.",
          "SOUZA, R. R. B.",
          "SOUZA, A. A. F.",
          "Bissaco, M. A. S."
        ]
      },
      {
        "ano": "2020",
        "titulo": "EMBASAMENTO PSICOLÓGICO COMPORTAMENTAL NO DESENVOLVIMENTO DE JOGOS SÉRIOS DIGITAIS PARA INDIVÍDUOS COM TRANSTORNO DO ESPECTRO AUTISTA: REVISÃO SISTEMÁTICA",
        "doi": "",
        "periodico": "HUMANIDADES & INOVAÇÃO",
        "volume": "7",
        "paginas": "251-263",
        "autores": [
          "SOUZA, R. R. B.",
          "ABREU, F. D. L.",
          "RODRIGUES, H. C.",
          "MARTINI, S.",
          "BONINI, L.",
          "Bissaco, M. A. S."
        ]
      },
      {
        "ano": "2020",
        "titulo": "PERCEPÇÕES DOS AGENTES COMUNITÁRIOS DE SAÚDE SOBRE AS TECNOLOGIAS DE INFORMAÇÃO E COMUNICAÇÃO NA ATENÇÃO PRIMÁRIA À SAÚDE: UMA PESQUISA EXPLORATÓRIA",
        "doi": "",
        "periodico": "HUMANIDADES & INOVAÇÃO",
        "volume": "7",
        "paginas": "33-45",
        "autores": [
          "ABREU, F. D. L.",
          "ZANIN, N. B.",
          "Bissaco, M. A. S.",
          "Silva, A. P.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Arquitetura em cluster para aplicação em saúde com o modelo de banco de dados distribuído",
        "doi": "",
        "periodico": "Revista Científica UMC",
        "volume": "4",
        "paginas": "1-16",
        "autores": [
          "AZANHA NETO, J. S.",
          "CANNE, D. V.",
          "SANTOS, A. A.",
          "YBARRA, L. A. C.",
          "BISSACO, M. A. S.",
          "GARAY, J. R. B."
        ]
      },
      {
        "ano": "2019",
        "titulo": "ALTRIRAS: A Computer Game for Training Children with Autism Spectrum Disorder in the Recognition of Basic Emotions",
        "doi": "10.1155/2019/4384896",
        "periodico": "INTERNATIONAL JOURNAL OF COMPUTER GAMES TECHNOLOGY",
        "volume": "2019",
        "paginas": "1-16",
        "autores": [
          "ALMEIDA, LEANDRO M.",
          "SILVA, DIEGO P. DA",
          "THEODÓRIO, DAIENY P.",
          "SILVA, WOLLEY W.",
          "RODRIGUES, SILVIA CRISTINA M.",
          "SCARDOVELLI, TERIGI A.",
          "SILVA, ALESSANDRO P. DA",
          "BISSACO, MARCIA APARECIDA S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Use of platform in the training of medical students",
        "doi": "10.31354/globalce.v2iSpecial%20Is",
        "periodico": "Global Clinical Engineering Journal",
        "volume": "2",
        "paginas": "133-133",
        "autores": [
          "ABREU, F. D. L.",
          "SILVA, M. S.",
          "Silva, A. P.",
          "Bissaco, M. A.",
          "BOSCH, S. R. M. S.",
          "Scardovelli, T. A.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2019",
        "titulo": "PHCHAT: A chatbot mobile application to assist professionals in primary health care",
        "doi": "",
        "periodico": "Global Clinical Engineering Journal",
        "volume": "2",
        "paginas": "138-138",
        "autores": [
          "Bissaco M.",
          "SILVA, A.",
          "SCARDOVELLI, T.",
          "BOSCHI, S.",
          "MARTINI, S.",
          "ABREU, F."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Plataforma protocolar para detecção de traços do transtorno do espectro autista através de jogos: análise e projeto",
        "doi": "",
        "periodico": "Revista Científica UMC",
        "volume": "4",
        "paginas": "1-4",
        "autores": [
          "BULGURLU, H. S.",
          "ALMEIDA, P. J. C.",
          "ALMEIDA, L. M.",
          "Bissaco, M. A. S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Desenvolvimento de conteu&#769;do para plataforma on-line para a disciplina fisioterapia pneumolo&#769;gica",
        "doi": "",
        "periodico": "Revista Cientifica UMC",
        "volume": "4",
        "paginas": "1-4",
        "autores": [
          "LEITE, L. S.",
          "ABREU, F. D. L.",
          "Bissaco, M. A. S.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Analysis of collagen production in hypertrophic cardiac tissue of rats treated with l-name and l-arginine by image processing",
        "doi": "",
        "periodico": "Revista UniVap",
        "volume": "25",
        "paginas": "24-31",
        "autores": [
          "MARSON, V. O. C.",
          "Bissaco, M. A. S.",
          "MARTINI, S. C.",
          "SILVA, R. T.",
          "MAFRA, F. F. P.",
          "MACEDO, M. M.",
          "LEONARDO, P. S.",
          "LOPES-MARTINS, R. A. B."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Jogo Eligere Nayuralis: Conscientização sobre a preservacão do meio ambiente - um estudo de caso",
        "doi": "",
        "periodico": "REVISTA DIÁLOGOS INTERDISCIPLINARES",
        "volume": "8",
        "paginas": "30-45",
        "autores": [
          "OLIVEIRA, D. V.",
          "MORINI, M. S. C.",
          "BONINI, L.",
          "MARTINI, S. C.",
          "SILVA, D. P.",
          "Bissaco, M. A. S."
        ]
      },
      {
        "ano": "2018",
        "titulo": "AACVOX: mobile application for augmentative alternative communication to help people with speech disorder and motor impairment",
        "doi": "10.1590/2446-4740.06117",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "34",
        "paginas": "166-175",
        "autores": [
          "SILVA, DIEGO PEREIRA DA",
          "AMATE, FLAVIO CEZAR",
          "BASILE, FELIPE RODRIGUES MARTINÊZ",
          "BIANCHI FILHO, CESÁRIO",
          "RODRIGUES, SILVIA CRISTINA MARTINI",
          "Bissaco, Marcia Aparecida Silva"
        ]
      },
      {
        "ano": "2018",
        "titulo": "Jogo computadorizado para auxiliar no ensino da língua brasileira de sinais (libras): teste de efetividade piloto",
        "doi": "",
        "periodico": "Revista Científica da UMC",
        "volume": "3",
        "paginas": "1-5",
        "autores": [
          "ANTUNES, B. R.",
          "RODRIGUES, S. C. M.",
          "BISSACO, M. A. S."
        ]
      },
      {
        "ano": "2018",
        "titulo": "Interface para acessibilidade de alunos cegos na construção de um diagrama de entidade relacionamento (der) em banco de dados: modelagem conceitual",
        "doi": "",
        "periodico": "Revista Científica UMC",
        "volume": "3",
        "paginas": "1-",
        "autores": [
          "PAVON, G. J.",
          "GOMES, M. A.",
          "EBOLI, D.",
          "BISSACO, M. A. S."
        ]
      },
      {
        "ano": "2017",
        "titulo": "Diferenças cerebrais entre homens e mulheres: Mitos ou verdades?",
        "doi": "",
        "periodico": "NEUROCIÊNCIAS (RIO DE JANEIRO)",
        "volume": "13",
        "paginas": "60-",
        "autores": [
          "Almeida, I. D.",
          "FRANCA, C. E.",
          "BISSACO, M. A. S."
        ]
      },
      {
        "ano": "2015",
        "titulo": "MioLab, a rat cardiac contractile force simulator: applications to teaching cardiac cell physiology and biophysics",
        "doi": "10.1016/j.cmpb.2015.09.012",
        "periodico": "Computer Methods and Programs in Biomedicine (Print)",
        "volume": "122",
        "paginas": "480-490",
        "autores": [
          "SILVA, ROBSON RODRIGUES DA",
          "Bissaco, Marcia Aparecida Silva",
          "GOROSO, DANIEL GUSTAVO"
        ]
      },
      {
        "ano": "2015",
        "titulo": "Desenvolvimento De Ambiente Virtual Para Auxiliar A Memorização De Rotinas Diárias Importantes Para Crianças Com Síndrome De Down .",
        "doi": "",
        "periodico": "Brasil Para Todos-Revista Internacional",
        "volume": "1",
        "paginas": "50-60-60",
        "autores": [
          "NETTO, O. L. C.",
          "BISSACO, M. A. S."
        ]
      },
      {
        "ano": "2015",
        "titulo": "Systematic Review of Magnetic Resonance Imaging Signs in Patients with Epilepsy BAOJ Neurology",
        "doi": "10.24947/baojn/1/1/106",
        "periodico": "BAOJ Neurology",
        "volume": "1",
        "paginas": "1-6",
        "autores": [
          "DUARTE, I",
          "Bissaco, M. A. S.",
          "SOUZA, L. P."
        ]
      },
      {
        "ano": "2014",
        "titulo": "Free Software for the Detection of Structures In Breast Images",
        "doi": "",
        "periodico": "Applied Mechanics and Materials",
        "volume": "590",
        "paginas": "814-818",
        "autores": [
          "Campelo, R.",
          "RODRIGUES, S. C. M.",
          "Bissaco, M. A. S.",
          "KAWAMOTO JUNIOR, L. T.",
          "Silva, A. P."
        ]
      },
      {
        "ano": "2014",
        "titulo": "Effect of a Virtual Environment on the Development of Mathematical Skills in Children with Dyscalculia",
        "doi": "10.1371/journal.pone.0103354",
        "periodico": "Plos One",
        "volume": "9",
        "paginas": "e103354-16",
        "autores": [
          "Castro, M. V.",
          "Bissaco, M. A. S.",
          "BISSACO, M. A. S.",
          "Pancioni, B. M.",
          "LIMA, A. D. M.",
          "RODRIGUES, S. C. M."
        ]
      },
      {
        "ano": "2013",
        "titulo": "MioLab: Simulator for cardiac myocyte contractile force of rat based on the dynamics of calcium",
        "doi": "10.1016/j.medengphy.2012.05.010",
        "periodico": "Medical Engineering & Physics",
        "volume": "35",
        "paginas": "338-349",
        "autores": [
          "SILVA, R. R.",
          "GOROSO, D. G.",
          "Bissaco, M. A. S."
        ]
      },
      {
        "ano": "2008",
        "titulo": "Otimização dos parâmetros de exposição radiográfica através de método computacional para aquisição de imagens de boa qualidade para diagnóstico",
        "doi": "",
        "periodico": "Revista Brasileira de Engenharia Biomédica (Impresso)",
        "volume": "24",
        "paginas": "109-119",
        "autores": [
          "TONDO, Rosane",
          "WATANABE, William Tsutomu",
          "Bissaco, M. A. S."
        ]
      },
      {
        "ano": "2006",
        "titulo": "Determinação automática dos parâmetros de exposição radiográfica por método computacional",
        "doi": "",
        "periodico": "Revista Brasileira de Engenharia Biomédica (Impresso)",
        "volume": "22",
        "paginas": "170-171",
        "autores": [
          "TONDO, Rosane",
          "Bissaco, M. A. S."
        ]
      },
      {
        "ano": "1999",
        "titulo": "Heel effect's influence on the performance of screen-film combinations",
        "doi": "",
        "periodico": "Medical & Biological Engineering & Computing",
        "volume": "37",
        "paginas": "1258-1259",
        "autores": [
          "Bissaco, M. A. S.",
          "FRÈRE, Annie France",
          "MARQUES, Márcio Alexandre",
          "MATTOS, L. S."
        ]
      },
      {
        "ano": "1998",
        "titulo": "Computer simulation technique to preview the influence of the recording system on the image shapness in mammography",
        "doi": "",
        "periodico": "Spie Medical Imaging",
        "volume": "3336",
        "paginas": "65-65",
        "autores": [
          "SCHIABEL, H.",
          "Bissaco, M. A. S.",
          "OLIVEIRA, H. J. Q.",
          "MARQUES, P. M. A.",
          "FRÈRE, Annie France"
        ]
      }
    ],
    "softwares": [
      {
        "titulo": "SUSE - TEA (Sistema Unificado para Suporte Educacional para TEA)",
        "ano": "2025",
        "finalidade": "Desenvolver uma plataforma web para melhorar o acompanhamento do Plano de Ensino Individualizado (PEI) de alunos com TEA, promovendo educação inclusiva e acessível.",
        "plataforma": "HTML, JavaScript, PHP, MySQL, JQuery, CSS"
      },
      {
        "titulo": "ECG MASTER CLASS: Plataforma web para ensino da interpretação do sinal de ECG",
        "ano": "2025",
        "finalidade": "A plataforma ECG Master Class tem como objetivo oferecer ensino interativo e acessível da interpretação do sinal de ECG, permitindo que estudantes e profissionais de saúde desenvolvam habilidades práticas na análise de eletrocardiogramas.",
        "plataforma": "HTML; OUTROS; PYTHON"
      },
      {
        "titulo": "Pipeline_Tiramisu_2.5D_EM",
        "ano": "2025",
        "finalidade": "detecção de buracos negros em imagens de ressonância magnética",
        "plataforma": "Python"
      },
      {
        "titulo": "El-Dorado 2.0 - Jogo sério para auxiliar na integração sensorial de crianças com TEA",
        "ano": "2024",
        "finalidade": "Auxiliar na integração sensorial de crianças com TEA",
        "plataforma": "Java, Unity"
      },
      {
        "titulo": "Dec Quedas 1.0 -  Jogo sério via mobile para prevenção de quedas da pessoa idosa em domicilio",
        "ano": "2024",
        "finalidade": "Auxiliar na prevenção de quedas em idosos",
        "plataforma": "C#,  Unity"
      },
      {
        "titulo": "ZaitTinyFramework",
        "ano": "2023",
        "finalidade": "Facilitar o desenvolvimento de outros aplicativos",
        "plataforma": "java"
      },
      {
        "titulo": "KukaFit Plataforma de treinamento cognitivo",
        "ano": "2023",
        "finalidade": "Auxiliar no treinamento cognitivo de idosos com e sem Alzheimer (início)",
        "plataforma": "JAVA"
      },
      {
        "titulo": "REPENSE 1.0 - Jogo Infantil Interativo",
        "ano": "2023",
        "finalidade": "uxiliar nas relações sociais e emocionais de crianças das séries iniciais do ensino fundamental",
        "plataforma": "Power Point"
      },
      {
        "titulo": "MAMA-OURO  1.0 - Aplicativo móvel para auxiliar no gerenciamento da doação de leite materno",
        "ano": "2023",
        "finalidade": "Ser um facilitador no processo de doação de leite humano, sanando dúvidas, fornecendo as orientações necessárias para compreensão da importância da doação, processo de coleta correto e doação",
        "plataforma": "Node.js, SQLite e React Native."
      },
      {
        "titulo": "PERA 1.0 - Plataforma Educacional Relacionada ao Autismo",
        "ano": "2022",
        "finalidade": "Auxiliar no processo de aprendizagem e comunicação de crianças com autismo",
        "plataforma": "Unity, Visual Studio, MySQL, Bootstrap, C#, PHP, Apache, Photoshop, JavaScript, HTML, Miro, Diagrams.net, phpMyAdmin"
      },
      {
        "titulo": "ODONTODB 2.0 - Estudo de lesões orais, design de interface e integração com banco de dados",
        "ano": "2022",
        "finalidade": "Armazenamento de dados resultantes de atendimentos odontológicos para auxiliar no estudo de lesões orais",
        "plataforma": "Java, Postgres"
      },
      {
        "titulo": "SPACEGEO_AR: aplicação de realidade aumentada para o ensino e aprendizagem da geometria espacial por alunos surdos e não surdos",
        "ano": "2022",
        "finalidade": "Ensino de geometria espacial usando realidade aumentada",
        "plataforma": "Heroku  platform, Javascript, React.JS, MongoDB"
      },
      {
        "titulo": "MYOCYTEDB - Plataforma Web para cadastro e pesquisa de parâmetros biofísicos: modelagem conceitual",
        "ano": "2022",
        "finalidade": "Auxiliar na gestão de parâmetros biofísicos encontrados na literatura",
        "plataforma": "Java"
      },
      {
        "titulo": "EL-DORADO 1.0 - Jogo sério para auxiliar na integração sensorial de crianças com TEA",
        "ano": "2021",
        "finalidade": "Auxiliar na integração sensorial de crianças com TEA",
        "plataforma": "Unity"
      },
      {
        "titulo": "ODONTODB 1.0 - Sistema de armazenamento de dados para auxiliar no estudo de lesões orais",
        "ano": "2021",
        "finalidade": "auxiliar no armazenamento de dados de pacientes em clinica odontológica escola",
        "plataforma": "java"
      },
      {
        "titulo": "CQUALY 1.0 - Aplicativo para controle de qualidade em laboratórios de análises clínicas",
        "ano": "2021",
        "finalidade": "Controle de qualidade em laboratórios de análises clínicas",
        "plataforma": "Java"
      },
      {
        "titulo": "GeraTESTES 1.0 - Framework gerador de testes personalizados",
        "ano": "2020",
        "finalidade": "Auxiliar profissionais da equipe profissional a gerar testes para acompanhamento da evolução de crianças com TEA ou auxiliar na anamnese  junto aos pais.",
        "plataforma": "PHP, JavaScript"
      },
      {
        "titulo": "TechTOUCH 1.0 - Software e periférico adaptado para elaboração de diagramas",
        "ano": "2020",
        "finalidade": "Software e periférico adaptado para auxiliar cegos a elaborar diagramas em projetos de software",
        "plataforma": "Java"
      },
      {
        "titulo": "Nossa Vida v.2.0 - Ambiente virtual lúdico e responsivo para auxiliar crianças na memorização de algumas rotinas diárias do cotidiano na residência",
        "ano": "2018",
        "finalidade": "Auxiliar na memorização de rotinas diárias",
        "plataforma": "HTML5"
      },
      {
        "titulo": "4Emoções 1.0",
        "ano": "2018",
        "finalidade": "Compor um testes sobre as quatro emoções básicas baseado em imagens",
        "plataforma": "PHP"
      },
      {
        "titulo": "QuizEmotion 1.0",
        "ano": "2018",
        "finalidade": "Teste computadorizado para verificar se criança com autismo reconhece as 4 emoções básicas",
        "plataforma": "Unity"
      },
      {
        "titulo": "ALTRIRAS 2.0 - Ambiente virtual para auxilrar crianças com autismo a associar expressões faciais às emoçoes",
        "ano": "2018",
        "finalidade": "Capacitar crianças com autismo no reconhecimento das 4 emoções básicas",
        "plataforma": "Unity"
      },
      {
        "titulo": "NOSSA VIDA .2.0",
        "ano": "2018",
        "finalidade": "Auxiliar crianças com Sindrome de Down a memorizar rotinas diárias",
        "plataforma": "PHP"
      },
      {
        "titulo": "SaberDown 1.0",
        "ano": "2017",
        "finalidade": "Auxiliar o aprimoramento da escrita em Portguês",
        "plataforma": "JAVA"
      },
      {
        "titulo": "Palavras no Silêncio 1.0",
        "ano": "2017",
        "finalidade": "Auxiliar no ensino da linguagem de sinais",
        "plataforma": "RPG Maker"
      },
      {
        "titulo": "Eligere naturalis: Jogo computadorizado para conscientizar sobre biodiversidade e preservação da Serra do Itapeti",
        "ano": "2016",
        "finalidade": "Educação",
        "plataforma": "RPG Maker"
      },
      {
        "titulo": "ALTRIRAS 1.0 - Aventuras no reino de Altriras, um ambiente virtual para auxilrar crianças com autismo a associar expressões faciais às emoçoes",
        "ano": "2016",
        "finalidade": "Educação",
        "plataforma": "Unity"
      },
      {
        "titulo": "SorrisoTur : Ambiente virtual para auxiliar no estímulo cognitivo de idosos com Alzheimer em inicio precoce",
        "ano": "2016",
        "finalidade": "Auxiliar no estímulo cognitivo de idosos com Alzheimer em inicio precoce",
        "plataforma": "Java"
      },
      {
        "titulo": "Quinzinho em Torre de Pedra:  ambiente virtual para auxiliar na minimização do transtorno de expressão escrita",
        "ano": "2015",
        "finalidade": "Auxiiliar crianças com dificuldade na expressão escrita",
        "plataforma": "HTML5, Construct2, Inkscape e Morphvox Junior"
      },
      {
        "titulo": "AACVOX: Aplicativo móvel para comunicação aumentativa alternativa para pessoas com função motora reduzida",
        "ano": "2015",
        "finalidade": "Auxiliar na comunicação",
        "plataforma": "JAVA ANDROID"
      },
      {
        "titulo": "MioLab:Laboratório de Miócito Cardíaco",
        "ano": "2015",
        "finalidade": "simulação computacional",
        "plataforma": "Delphi 7.0"
      },
      {
        "titulo": "O Resgate de Tom : Ambiente Virtual para auxiliar crianças com dificuldade de aprendizagem em matemática",
        "ano": "2015",
        "finalidade": "Ensino de habilidade matemáticas para crianças, especialmente crianças com Discalculia",
        "plataforma": "Flash"
      },
      {
        "titulo": "Nossa Vida: Ambiente virtual para auxiliar a memorização de rotinas diárias importantes para crianças com Síndrome de Down",
        "ano": "2014",
        "finalidade": "computacional",
        "plataforma": "Flash"
      },
      {
        "titulo": "Nick no trânsito: jogo computadorizado para auxiliar a educação para o trânsito de crianças",
        "ano": "2014",
        "finalidade": "educação para o trânsito",
        "plataforma": "scracth"
      },
      {
        "titulo": "Modelagem 3D e simulação do movimento de abdução da articulação glenoumeral",
        "ano": "2013",
        "finalidade": "educacional",
        "plataforma": "Blender 3D"
      },
      {
        "titulo": "SimBaby: Simulador virtual de tomadas de decisão na área de obstetrícia",
        "ano": "2012",
        "finalidade": "capacitação",
        "plataforma": "Visual Basic"
      },
      {
        "titulo": "Algoritmo  para correção da iluminação em imagens de fibras de colágeno",
        "ano": "2011",
        "finalidade": "Algoritmo para minimizar a Influência da iluminação na classificação e quantificação automática de fibras de colágeno",
        "plataforma": "Windows"
      },
      {
        "titulo": "O Resgate de Tom : Ambiente Virtual para auxiliar crianças com dificuldade de aprendizagem  em matemática",
        "ano": "2011",
        "finalidade": "Ambiente virtual para auxiliar crianças com dificuldade de aprendizagem em matemática",
        "plataforma": "Windows"
      },
      {
        "titulo": "Modelagem tridimensional para determinação de novos posicionamentos radiográficos para ombro hemiplégico",
        "ano": "2011",
        "finalidade": "Determinação de novo posicionamento radiográfico para ombro hemiplágico e ensino",
        "plataforma": "Blender 3D"
      },
      {
        "titulo": "As Aventuras de Meg : Ambiente Virtual para auxiliar meninas com dificuldade de aprendizagem em leitura",
        "ano": "2010",
        "finalidade": "Ambiente Virtual para auxiliar meninas com dificuldade de aprendizagem em leitura",
        "plataforma": "Windows"
      },
      {
        "titulo": "CFC_Image v.2.0: Aplicativo para processamento de imagens médicas",
        "ano": "2010",
        "finalidade": "processamento de imagens considerando o descritor de cor, tais como imagens obtidas através de microscopia ótica de luz polarizadaoquímica, reparação tecidual, entre outras",
        "plataforma": "DELPHI"
      },
      {
        "titulo": "CFC_Image v.1.0: Programa para processamento de imagens de imunohistoquímica e de reparação tecidual",
        "ano": "2008",
        "finalidade": "Quantificação da atividade de catepsina B (entre outras enzimas) e classificação de tumores em maligno e benigno",
        "plataforma": "Windows XP"
      },
      {
        "titulo": "Além da Imaginação: Jogo computadorizado em formato RPG para auxiliar crianças com dificuldade na expressão escrita",
        "ano": "2008",
        "finalidade": "Exercitar de forma lúdica a expressão escrita",
        "plataforma": "Windows"
      },
      {
        "titulo": "Programa para edição de e-mail, bate-papo e navegação na Internet",
        "ano": "2005",
        "finalidade": "Inclusão digital de tetraplégicos através da disponibilização de interfaces para facilitar a edição de e-mail, bate-papo e navegação na Internet",
        "plataforma": "Windows 98, XP"
      },
      {
        "titulo": "Seleção automática de parâmetros de exposição radiográfica (tensão e corrente) para adultos",
        "ano": "2005",
        "finalidade": "Auxiliar no treinamento de novos profissionais para setor radiológico",
        "plataforma": "Windows XP"
      },
      {
        "titulo": "Editor de textos para tetraplégicos",
        "ano": "2004",
        "finalidade": "Edição de textos facilitada para tetraplégicos",
        "plataforma": "Windows XP"
      }
    ],
    "patentes": [],
    "orientacoes_concluidas": [
      {
        "tipo": "Mestrado",
        "titulo": "DETERMINAÇÃO AUTOMÁTICA DOS PARÂMETROS DE EXPOSIÇÃO RADIOGRÁFICA POR MÉTODO COMPUTACIONAL",
        "ano": "2005",
        "orientado": "Rosane Tondo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Influência do processo de revelação do filme sobre a formação da densidade óptica",
        "ano": "2006",
        "orientado": "Ronaldo Luiz Vitório",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Classificação de tumores em imagens de imunohistoquímica utilizando técnicas de processamento de imagens",
        "ano": "2009",
        "orientado": "William T. Watanabe",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Ambiente Virtual para auxiliar o letramento de meninas com transtorno de leitura",
        "ano": "2007",
        "orientado": "Andréia Miranda Domingues de Lima",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Avaliação da consolidação óssea em indivíduos portadores de fixador externo circular",
        "ano": "2009",
        "orientado": "Silmara Patrícia Bruno",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Influência do posicionamento mamográfico sobre a detectabilidade de achados clínicos",
        "ano": "2009",
        "orientado": "Carlos André Araújo Villas-Bôas",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "TÉCNICA PARA DETERMINAÇÃO DE NOVOS POSICIONAMENTOS RADIOGRÁFICOS PARA OMBRO HEMIPLÉGICO BASEADA EM MODELAGEM TRIDIMENSIONAL",
        "ano": "2011",
        "orientado": "Francisco Carlos Feitosa",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Influência das condições de Iluminação sobre a Identificação e classificação automática das fibras de colágeno",
        "ano": "2010",
        "orientado": "Wolley Willians Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "DESENVOLVIMENTO DE AMBIENTE VIRTUAL PARA AUXILIAR A MEMORIZAÇÃO DE ROTINAS DIÁRIAS IMPORTANTES PARA CRIANÇAS COM SÍNDROME DE DOWN",
        "ano": "2012",
        "orientado": "OVIDIO LOPES DA CRUZ NETTO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Simulador virtual de tomadas e decisão em Obstetrícia",
        "ano": "2012",
        "orientado": "Silvia Regina M. Fonseca",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "ESTUDO DO MOVIMENTO DE ABDUÇÃO DA ARTICULAÇÃO GLENOUMERAL ATRAVÉS DE MODELAGEM 3D",
        "ano": "2013",
        "orientado": "Igor Duarte de Almeida",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Ambiente virtual para auxilrar crianças com autismo a associar expressões faciais às emoçoes",
        "ano": "2016",
        "orientado": "Leandro Miranda de Almeida",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Utilização de aplicativo de comunicação em massa no diagnóstico por imagem",
        "ano": "2015",
        "orientado": "Raphael Prado Ruiz",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Desenvolvimento de aplicativo baseado em web para auxiliar jovens com sindrome de Down",
        "ano": "2017",
        "orientado": "Evelyn Rodrigues Cid",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Desenvolvimento de Aplicativo para Comunicação Aumentativa Alternativa para Pessoas com Função Motora Reduzida",
        "ano": "2016",
        "orientado": "Diego Pereira da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Análise da produção de colágeno em tecido cardíaco hipertrófico de ratos tratados com L-name e L-arginina através de processamento de imagens",
        "ano": "2016",
        "orientado": "Vanessa Oliveira Colombo Marson",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Aplicativo baseado em dispositivo móvel para auxiliar o diagnóstico de TEA",
        "ano": "2020",
        "orientado": "Douglas Vilela de Oliveira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Diagnóstico de TEA auxiliado por aplicativo móvel: desenvolvimento de interface e dispositivo sensorial lúdicos.",
        "ano": "2020",
        "orientado": "Richard Ribeiro Brancato de Souza",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Exame radiográfico pediátrico: levantamento de condutas utilizadas e desenvolvimento de dispositivo para contenção da cabeça",
        "ano": "2019",
        "orientado": "Marcilio Ferreira da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Plataforma digital para auxiliar no processo de aprendizagem de crianças com transtorno do espectro autista",
        "ano": "2021",
        "orientado": "Adilson Lima da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Aplicativos móveis baseados em mindfulness para a redução da ansiedade e do estresse em acadêmicos: revisão integrativa",
        "ano": "2022",
        "orientado": "Alexandre Henrique Santoro",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "CQUALI ? Aplicativo para controle de qualidade em laboratórios de análises clínicas",
        "ano": "2021",
        "orientado": "Camila Dayane da Silva Bispo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Aplicativo móvel para gerenciamento de doação de leite materno",
        "ano": "2023",
        "orientado": "Erika Estevam de Miranda",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Quantificação e classificação da qualidade da pele em imagens termográficas",
        "ano": "2024",
        "orientado": "Talita Luciana Marques do Vale Pimenta Bovi",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "DESENVOLVIMENTO DE JOGO SÉRIO EDUCATIVO PARA A PREVENÇÃO DE QUEDA DA PESSOA IDOSA EM DOMICÍLIO",
        "ano": "2024",
        "orientado": "Kelly Cristina Sampaio dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "PLATAFORMA WEB DE CONSULTA DE POSSÍVEIS ALTERAÇÕES VISUAIS E OCULARES GERADO POR USO DE FÁRMACO",
        "ano": "2025",
        "orientado": "Marcelo Jesus De Santana",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Sistema de gerenciamento de plano de ensino individualizado para alunos com TEA",
        "ano": "2026",
        "orientado": "Carla Fabiane Calixto Da Silva Soares",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Desenvolvimento e Avaliação de uma Plataforma Online para Ensino e Interpretação do Sinal de ECG",
        "ano": "2026",
        "orientado": "Rafael Gouveia Borges",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Desenvolvimento de ambiente virtual para auxiliar na minimização do transtorno de expressão escrita",
        "ano": "2015",
        "orientado": "ISAÍAS DE ARAÚJO LIMA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "AMBIENTE VIRTUAL PARA AUXILIAR CRIANÇAS COM DIFICULDADE DE APRENDIZAGEM EM MATEMÁTICA",
        "ano": "2011",
        "orientado": "Marcus Vasconcelos de Castro",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Ambiente virtual para auxiliar a Aprendizagem de Meninas com Dificuldade de Leitura",
        "ano": "2010",
        "orientado": "Andréia Miranda Domingues de Lima",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Ambiente virtual para auxiliar a memorização em pessoas portadoas de alzheimer",
        "ano": "2017",
        "orientado": "Bruno Marques Pancioni",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Memorização de rotinas diárias em crianças com Sindrome de Down auxiliada por ambiente virtual lúdico",
        "ano": "2018",
        "orientado": "Ovidio Lopes da Cruz Netto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Modulação da variabildade cardíaca pela atividade física auxiada por aplicativo móvel",
        "ano": "2020",
        "orientado": "Diego Pereira da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Software e periférico adaptado para auxiliar alunos deficientes visuais na elaboração de diagramas em projetos de sistemas de informação",
        "ano": "2020",
        "orientado": "Daisy Eboli Casella",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Ambiente virtual para promover a interação social de idosos",
        "ano": "2021",
        "orientado": "Felipe Pazinatto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Dominância cerebral em humanos..",
        "ano": "2017",
        "orientado": "Igor Duarte de Almeida",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Relação entre anatomia do arco da artéria aorta e dominância cerebral: revisão sistemática",
        "ano": "2021",
        "orientado": "Igor Duarte de Almeida",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Desenvolvimento de uma ferramenta computacional com recursos de realidade aumentada e acessibilidade para surdos aplicada ao ensino da geometria espacial",
        "ano": "2022",
        "orientado": "Francisco Cezar  de Oliveira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "MODELO COMPUTACIONAL DE PLATAFORMA PARA TREINAMENTO COGNITIVO EM IDOSOS COM ALZHEIMER LEVE",
        "ano": "2025",
        "orientado": "Cleber Silva de Oliveira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "EL-DORADO SENSES: DESENVOLVIMENTO DE JOGO SÉRIO PARA MODULAR A REATIVIDADE A ESTÍMULOS SENSORIAIS DE PESSOAS AUTISTAS",
        "ano": "2025",
        "orientado": "Richard Ribeiro Brancato de Souza",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Modelo de inteligência artificial para auxiliar no diagnóstico de doença mental",
        "ano": "2025",
        "orientado": "Almir Rodrigues Tavares",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Um assistente virtual para suporte às dúvidas na atenção primária à saúde",
        "ano": "2022",
        "orientado": "Francisco Douglas Lima Abreu",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento de interfaces para facilitar o acesso do tetraplégico à Internet",
        "ano": "2005",
        "orientado": "William Tsutomu Watanabe",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento de um caça níquel computadorizado para incentivar a alfabetização de crianças especiais",
        "ano": "2003",
        "orientado": "Vírgilio Padovani Neto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento de uma interface para facilitar o uso do computador por tetraplégicos",
        "ano": "2004",
        "orientado": "William Tsutomu Watanabe",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento de programa para facilitar o acesso de pessoas portadoras de tetraplegia à Internet",
        "ano": "2006",
        "orientado": "William T. Watanabe",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento de interfaces para facilitar o acesso do tetraplégico à Internet - Netqueta e Emotions",
        "ano": "2007",
        "orientado": "William T. Watanabe",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Jogo para auxiliar crianças com transtorno da expressão escrita",
        "ano": "2008",
        "orientado": "Henrique Pinto Machado",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Identificação e classificação de fibras de colágeno dos tipos I e III através de processamento de imagens",
        "ano": "2008",
        "orientado": "Wolley Willians Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento de software para auxiliar no processo de ensino-aprendizagem",
        "ano": "2010",
        "orientado": "Victor Sheiji Sato",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Sistema para gerenciamento escolar",
        "ano": "2009",
        "orientado": "Victor Sheiji Sato",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento de algoritmo para minimizar influência de variações na iluminação em imagens de reparação tecidual",
        "ano": "2012",
        "orientado": "GUILHERME VICTOR CAMPANELLI REINPRECHT",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "AVALIAÇÃO DA USABILIDADE DAS INTERFACES GRÁFICAS DO SOFTWARE OPENSOURCE DE PROCESSAMENTO DE IMAGENS IMAGEJ",
        "ano": "2013",
        "orientado": "Jaqueline Sandi da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "DESENVOLVIMENTO DE JOGO COMPUTADORIZADO PARA AUXILIAR A EDUCAÇÃO PARA O TRÂNSITO DE CRIANÇAS: FASE I",
        "ano": "2014",
        "orientado": "Sérgio Henrique Brito",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento de jogo computadorizad sobre a biodiversidade da Serra do Itapeti e sua preservação",
        "ano": "2015",
        "orientado": "Thiago de Oliveira Martins",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Eligere naturalis - Jogo computadorizado para conscientizar sobre biodiversidade e preservação da Serra do Itapeti",
        "ano": "2016",
        "orientado": "Douglas Vilela de Oliveira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Palavras no Silêncio: jogo computadorizado para ensinar linguagem de sinais",
        "ano": "2017",
        "orientado": "Bruno Ribeiro Antunes",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Especificação de requisitos para diagnóstico do espectro do autismo",
        "ano": "2019",
        "orientado": "Henrique de Souza Bulgurlu",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Jogo computadorizado para no ensino da linguagem de sinais (LIBRAS): teste de efetividade piloto",
        "ano": "2018",
        "orientado": "Bruno Ribeiro Antunes",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Rede social com acessibilidade para idosos: modelagem conceitual",
        "ano": "2020",
        "orientado": "João Carlos de Camargo Andrade",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento de base de dados para auxiliar no estudo de lesões orais",
        "ano": "2021",
        "orientado": "Salissa Maria Garrido Bueno Pinto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento de base de dados para auxiliar no estudo de lesões orais: Fase II",
        "ano": "2022",
        "orientado": "Salissa Maria Garrido Bueno Pinto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Aplicativo móvel como suporte para o cuidado da saúde de pets: revisão de literatura e protótipo",
        "ano": "2023",
        "orientado": "Pedro Daniel Braga",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Etiologia de Alzheimer:  uma revisão integrativa sobre o acúmulo de peptídeo beta-amilóide",
        "ano": "2023",
        "orientado": "Larine de Moraes Nunes",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Etiologia da doença de parkinson : uma revisa&#771;o sistema&#769;tica sobre o acu&#769;mulo de alfa-sinucleína",
        "ano": "2024",
        "orientado": "Gabriely Gomes de Sá",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "O que é envelhecimento normal? Distinções morfológicas entre o cérebro no envelhecimento regular e na Doença de Alzheimer",
        "ano": "2024",
        "orientado": "Vitória Lorrane dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Estudo de viabilidade e modelagem conceitual de protótipo de aplicativo móvel para posologia",
        "ano": "2024",
        "orientado": "Milena Pereira de Miranda",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Uso da inteligência artificial para auxiliar no diagnóstico das doenças neurodegenerativas: uma revisão sistemática",
        "ano": "2025",
        "orientado": "Bruna Soares Muçouçah",
        "instituicao": "UNIVERSIDADE MUNICIPAL DE SAO CAETANO DO SUL"
      },
      {
        "tipo": "Outras",
        "titulo": "Using artificial intelligence to help diagnose neurodegenerative diseases such as Alzheimer's: a systematic review",
        "ano": "2024",
        "orientado": "Vitória Lorrane dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "O uso de fórmulas matemáticas para o entendimento da etiologia da doença de parkinson: uma revisão sistemática",
        "ano": "2025",
        "orientado": "Gabriely Gomes de Sá",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Plataforma de suporte para biomédicos no atendimento a pessoas com transtorno do espectro autista : levantamento de requisitos e prototipação",
        "ano": "2026",
        "orientado": "Beatriz Belo Bezerra",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Estudo de funcionalidade de aplicativo móvel para posologia terapêutica e medicamentosa em odontopediatria",
        "ano": "2025",
        "orientado": "Milena Pereira de Miranda",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "O que é envelhecimento normal? Distinções morfológicas entre o cérebro no envelhecimento regular  e  na doença de Alzheimer",
        "ano": "2025",
        "orientado": "Vitória Lorrane dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      }
    ],
    "orientacoes_andamento": []
  },
  "robson": {
    "id": "prof Robson.xml",
    "lattes_id": "2221378532381108",
    "data_atualizacao": "26/10/2026",
    "nome": "Robson Rodrigues da Silva",
    "nome_citacoes": [
      "SILVA, R. R.",
      "Silva, R. R. da",
      "SILVA, R R DA",
      "R. R. Silva",
      "Silva, R. R.",
      "SILVA, ROBSON RODRIGUES DA",
      "R. SILVA, R.",
      "RODRIGUES DA SILVA, ROBSON",
      "DA SILVA, ROBSON RODRIGUES",
      "SILVA, ROBSON RODRIGUES",
      "Robson Rodrigues Silva",
      "DA SILVA, ROBSON",
      "SILVA, R R",
      "R.R. da Silva",
      "da Silva, R.R.",
      "R.R., da Silva",
      "R. R. da Silva",
      "da Silva, RR"
    ],
    "orcid": "https://orcid.org/0000-0003-1082-0777",
    "nacionalidade": "Brasil",
    "resumo": "Possui Licenciatura e Bacharelado em Matemática pela Universidade de Mogi das Cruzes (1992), Mestrado em Ciências (Matemática) pela Universidade de São Paulo (2004), Doutorado em Engenharia Biomédica pela Universidade de Mogi das Cruzes (2012) e Pós-Doutorado em Bioengenharia pelo Centro de Engenharia Biomédica da Universidade Estadual de Campinas (2018). Atualmente é professor da Universidade de Mogi das Cruzes (UMC), onde atua como pesquisador do Núcleo de Pesquisas Tecnológicas (NPT/UMC), vinculado ao Programa de Pós-Graduação em Engenharia Biomédica. É membro titular do Comitê de Ética em Pesquisa (CEP/UMC), coordenador do Laboratório de Matemática (LabMat/UMC) e vice-coordenador do Programa de Mestrado e Doutorado em Engenharia Biomédica da UMC. É pesquisador colaborador do Laboratório Nacional para Estudo do Cálcio Celular, vinculado ao Centro de Engenharia Biomédica da Universidade Estadual de Campinas, e assessor científico da Fundação de Amparo à Pesquisa do Estado de São Paulo (FAPESP). Coordena projeto financiado pela FAPESP (processo 2016/18422-7), intitulado Implementação, avaliação e comparação dos modelos de força de contração e/ou encurtamento celular para miócito ventricular de rato. Possui experiência nas áreas de Matemática e Engenharia Biomédica (Bioengenharia), com ênfase em Cálculo Diferencial e Integral, Álgebra e Modelagem de Sistemas e Fenômenos Biológicos, atuando principalmente em modelagem matemática e simulação computacional da eletrofisiologia cardíaca, bem como em aplicações do cálculo diferencial e integral em sistemas biológicos.",
    "instituicao": "Universidade de Mogi das Cruzes",
    "departamento": "Núcleo de Pesquisas Tecnológicas (NPT / UMC)",
    "cidade": "Mogi das Cruzes",
    "uf": "SP",
    "formacoes": [
      {
        "tipo": "Pos Doutorado",
        "curso": "",
        "instituicao": "Universidade Estadual de Campinas",
        "ano": "2019"
      },
      {
        "tipo": "Pos Doutorado",
        "curso": "",
        "instituicao": "Universidade Estadual de Campinas",
        "ano": "2018"
      },
      {
        "tipo": "Doutorado",
        "curso": "Engenharia Biomédica",
        "instituicao": "Universidade de Mogi das Cruzes",
        "ano": "2012"
      },
      {
        "tipo": "Mestrado",
        "curso": "Matemática",
        "instituicao": "Universidade de São Paulo",
        "ano": "2004"
      },
      {
        "tipo": "Graduacao",
        "curso": "Licenciatura e Bacharelado em Matemática",
        "instituicao": "Universidade de Mogi das Cruzes",
        "ano": "1992"
      }
    ],
    "areas": [
      "Análise Funcional",
      "Análise",
      "Matemática",
      "CIENCIAS_EXATAS_E_DA_TERRA",
      "Engenharia Biomédica",
      "ENGENHARIAS",
      "Biofísica Celular",
      "Biofísica"
    ],
    "metricas": {
      "artigos": 44,
      "livros": 6,
      "capitulos": 12,
      "eventos": 57,
      "softwares": 16,
      "patentes": 0,
      "orientacoes_concluidas": 49,
      "orientacoes_andamento": 0
    },
    "artigos": [
      {
        "ano": "2026",
        "titulo": "SOFTWARE PARA ENSINO E DESENVOLVIMENTO DA ACURÁCIA EM INTERPRETAÇÃO ELETROCARDIOGRÁFICA",
        "doi": "10.36238/2359-5787.2026.V12N62.1956",
        "periodico": "Revista Acadêmica Online",
        "volume": "12",
        "paginas": "1-26",
        "autores": [
          "BORGES, R. G.",
          "SANTOS, K. M. S.",
          "BISSACO, M. A. S.",
          "Silva, R. R."
        ]
      },
      {
        "ano": "2026",
        "titulo": "MONITORAMENTO TERAPÊUTICO DA VANCOMICINA: COMPLEXIDADE MATEMÁTICA E O PAPEL DE FERRAMENTAS DIGITAIS NA REDUÇÃO DE RISCOS - UMA REVISÃO SISTEMÁTICAThe Therapeutic Drug Monitoring of Vancomycin: Mathematical Complexity and the Role of Digital Tools in Risk Reduction - A Systematic ReviewEl Monitorización Terapéutica de la Vancomicina: Complejidad Matemática y el Papel de las Herramientas Digitales e",
        "doi": "10.36557/2674-9432.2026v5n3p154-173",
        "periodico": "Periódicos Brasil. Pesquisa Científica",
        "volume": "5",
        "paginas": "154-173",
        "autores": [
          "RODRIGUES DA SILVA, ROGER",
          "RODRIGUES DA SILVA, ROBSON",
          "BEZERRA MENEGIDIO, FABIANO"
        ]
      },
      {
        "ano": "2026",
        "titulo": "A computational model for temperature effects on myofilament dynamics in rodent ventricular myocytes",
        "doi": "10.1007/s42600-026-00498-8",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "42",
        "paginas": "52-",
        "autores": [
          "CAMARGO, MATHEUS LEONARDO ALVES DE",
          "SATO, DAISUKE",
          "Bassani, José Wilson Magalhães",
          "BASSANI, ROSANA ALMADA",
          "SILVA, ROBSON RODRIGUES DA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Teaching electrocardiographic interpretation: a review of the latest models",
        "doi": "10.55905/cuadv17n1-002",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "17",
        "paginas": "e7130-22",
        "autores": [
          "BORGES, RAFAEL GOUVEIA",
          "BISSACO, MARCIA APARECIDA SILVA",
          "SILVA, ROBSON RODRIGUES DA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Avançando na precisão diagnóstica: detecção de lesões hipointensas da substância branca guiada por IA",
        "doi": "10.34119/bjhrv8n1-360",
        "periodico": "Brazilian Journal of Health Review",
        "volume": "8",
        "paginas": "e77510-16",
        "autores": [
          "TAVARES, ALMIR RODRIGUES",
          "SANTOS, VITÓRIA LORRANI DOS",
          "RIBEIRO, HÉLIO DE ARAÚJO",
          "OLIVEIRA, CLEBER SILVA DE",
          "SILVA, ROBSON RODRIGUES DA",
          "FRANCO, THIAGO DE SOUZA",
          "ROCHA, ANTONIO JOSE DA",
          "BISSACO, MARCIA APARECIDA SILVA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "MACHINE LEARNING IN CORONARY ARTERY DISEASE DETECTION: A TECHNICAL-SCIENTIFIC REVIEW",
        "doi": "10.56238/arev7n10-039",
        "periodico": "ARACÊ - DIREITOS HUMANOS EM REVISTA",
        "volume": "7",
        "paginas": "1-33",
        "autores": [
          "RIBEIRO, H. A.",
          "MENEGIDIO, F. B.",
          "SILVA, R R"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Feed Forward modeling: An efficient approach for mathematical modeling of the force frequency relationship in the rabbit isolated ventricular myocyte",
        "doi": "10.1088/2057-1976/ad78e3",
        "periodico": "BIOMEDICAL PHYSICS & ENGINEERING EXPRESS",
        "volume": "10",
        "paginas": "1/0652020-13",
        "autores": [
          "SILVA, ROBSON RODRIGUES DA",
          "MOTTA, GABRIEL MARCOS DE SOUSA",
          "de Camargo, Matheus Leonardo Alves",
          "GOROSO, DANIEL GUSTAVO",
          "PUGLISI, JOSÉ LUIS"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Tecnologias utilizadas no ensino da interpretação do sinal de ECG e sua relação com a aprendizagem",
        "doi": "10.54033/cadpedv21n9-221",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e8058-",
        "autores": [
          "BORGES, RAFAEL GOUVEIA",
          "BISSACO, MARCIA APARECIDA SILVA",
          "SILVA, ROBSON RODRIGUES DA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Mobile application: digital health card for deaf adolescents",
        "doi": "10.1590/1980-220x-reeusp-2023-0366en",
        "periodico": "REVISTA DA ESCOLA DE ENFERMAGEM DA USP",
        "volume": "58",
        "paginas": "1-15",
        "autores": [
          "YASUE, THIAGO YUKIO MURAYAMA",
          "OLIVEIRA, CLÁUDIA DOS SANTOS",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "BISSACO, MARCIA APARECIDA SILVA",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "SILVA, ROBSON RODRIGUES DA",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Mocks fluido-mecânicos de simulação do sistema cardiovascular: uma revisão de literatura",
        "doi": "10.55905/cuadv16n13-018",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "16",
        "paginas": "e6742-22",
        "autores": [
          "VIANA, FAUSTO MORI",
          "CAMARGO, MATHEUS LEONARDO ALVES DE",
          "ROCHA, SILVIO JOSÉ SANTOS DA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SILVA, ROBSON RODRIGUES DA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Abordagem diagnóstica de lesões cerebrais em imagens de ressonância magnética por IA",
        "doi": "10.54033/cadpedv21n13-199",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e11960-17",
        "autores": [
          "TAVARES, ALMIR RODRIGUES",
          "FRANCO, THIAGO DE SOUZA",
          "OLIVEIRA, CLEBER SILVA DE",
          "SILVA, ROBSON RODRIGUES DA",
          "MARTINI, SILVIA CRISTINA",
          "FAREZ, MAURICIO",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "ROCHA, ANTONIO JOSE DA",
          "BISSACO, MARCIA APARECIDA SILVA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Integração de redes neurais e inteligência artificial no diagnóstico de tumores cerebrais: convergência entre tecnologia e saúde",
        "doi": "10.55905/cuadv16n13-154",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "16",
        "paginas": "e7065-10",
        "autores": [
          "TAVARES, ALMIR RODRIGUES",
          "FRANCO, THIAGO DE SOUZA",
          "OLIVEIRA, CLEBER SILVA DE",
          "SILVA, R. R."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Visão computacional na saúde: revisão de métodos e desafios educacionais para integração multidisciplinar",
        "doi": "10.55905/cuadv16n13-169",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "16",
        "paginas": "e7088-19",
        "autores": [
          "TAVARES, ALMIR RODRIGUES",
          "RIBEIRO, HELIO DE ARAÚJO",
          "CAMPOS, HIGOR BARRETO",
          "OLIVEIRA, CLEBER SILVA DE",
          "SILVA, ROBSON RODRIGUES DA",
          "BISSACO, MARCIA APARECIDA SILVA",
          "MARTINI, SILVIA CRISTINA",
          "MENEGIDIO, FABIANO BEZERRA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "CARDIO JUNCTION: COMPUTATIONAL TOOL IMPLEMENTED BASED ON A COMPARTMENT MODEL FOR THE VENTRICULAR MYOCYTE OF A RAT.",
        "doi": "10.5281/zenodo.7934209",
        "periodico": "REVISTA FISIO&TERAPIA",
        "volume": "122",
        "paginas": "1-9",
        "autores": [
          "Junior, R.A.R.",
          "GOROSO, D. G.",
          "PUGLISI, J. L.",
          "Silva, R. R."
        ]
      },
      {
        "ano": "2023",
        "titulo": "FERRAMENTAS COMPUTACIONAIS PARA ESTUDO DOS CANAIS IÔNICOS UTILIZANDO DIAGRAMAS DE ESTADOS: MATLAB® VS PYTHON",
        "doi": "10.56083/RCV3N6-018",
        "periodico": "CONTEMPORÂNEA - REVISTA DE ÉTICA E FILOSOFIA POLÍTICA",
        "volume": "3",
        "paginas": "5013-5024",
        "autores": [
          "DA SILVA, ROBSON RODRIGUES",
          "GOROSO, DANIEL GUSTAVO",
          "PUGLISI, JOSE LUIS",
          "DE REZENDE JUNIOR, RICARDO AGOSTINHO"
        ]
      },
      {
        "ano": "2023",
        "titulo": "TECNOLOGIAS ASSISTIVAS DESENVOLVIDAS NA ESCOLA PARA PROMOÇÃO DA INCLUSÃO SOCIAL",
        "doi": "10.56083/RCV3N6-097",
        "periodico": "CONTEMPORÂNEA - REVISTA DE ÉTICA E FILOSOFIA POLÍTICA",
        "volume": "3",
        "paginas": "6497-6532",
        "autores": [
          "ALVES, CLAUDEMIR CLAUDINO",
          "DE RESENDE JUNIOR, RICARDO AGOSTINHO",
          "CAVALCANTI, FABIANA RODRIGUES SILVA DE MIRANDA",
          "DA SILVA, ALESSANDRO PEREIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "DA SILVA, ROBSON RODRIGUES",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Economic evaluation of the cost-utility of remote monitoring in children with obese in rural zone",
        "doi": "10.55905/oelv21n10-176",
        "periodico": "OBSERVATORIO DE LA ECONOMÍA LATINOAMERICANA",
        "volume": "21",
        "paginas": "17782-17805",
        "autores": [
          "Lopes, Walter Saraiva",
          "BERTOLANI, NICOLI BERTTI ZANIN",
          "Watanabe, William Tsutomu",
          "DA SILVA, ROBSON RODRIGUES",
          "de Paula, Silvia Helena Bastos",
          "SARAIVA, ANTONIA FRANCISCA DA SILVA",
          "GOROSO, DANIEL GUSTAVO"
        ]
      },
      {
        "ano": "2023",
        "titulo": "CARDIO JUNCTION: FERRAMENTA COMPUTACIONAL IMPLEMENTADA A PARTIR DE UM MODELO DE COMPARTIMENTOS PARA O MIÓCITO VENTRICULAR DE RATO",
        "doi": "10.5281/zenodo.7934209",
        "periodico": "REVISTA FISIO&TERAPIA",
        "volume": "27",
        "paginas": "9-42",
        "autores": [
          "REZENDE JUNIOR, R. A.",
          "GOROSO, D. G.",
          "PUGLISI, J. L.",
          "SILVA, R. R."
        ]
      },
      {
        "ano": "2023",
        "titulo": "COMPUTATIONAL TOOL FOR SIZING BATCH TYPE REACTORS WITH MULTIPLE REACTIONS",
        "doi": "10.5281/zenodo.10011928",
        "periodico": "REVISTA FISIO&TERAPIA",
        "volume": "127",
        "paginas": "1-5",
        "autores": [
          "MOTTA, G. M. S.",
          "ORNELAS JUNIOR, M. M.",
          "BISSACO, M. A. S.",
          "BRANDAO, H. S.",
          "SILVA, R. R."
        ]
      },
      {
        "ano": "2022",
        "titulo": "PharmaLab: A Tool to Study the Drug Action on the Mouse Ventricular Myocyte",
        "doi": "10.1088/1742-6596/2224/1/012031",
        "periodico": "JOURNAL OF PHYSICS. CONFERENCE SERIES (ONLINE)",
        "volume": "2224",
        "paginas": "012031-7",
        "autores": [
          "CAMARGO, M L A",
          "GOROSO, D G",
          "BISSACO, M A S",
          "SILVA, R R"
        ]
      },
      {
        "ano": "2022",
        "titulo": "SpaceGeo_AR: augmented reality application for teaching and learning spatial geometry by deaf and non-deaf students",
        "doi": "10.33448/rsd-v11i7.29656",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e23211729656-15",
        "autores": [
          "OLIVEIRA, FRANCISCO CÉSAR DE",
          "BISSACO, MÁRCIA APARECIDA SILVA",
          "SILVA, ROBSON RODRIGUES DA",
          "TOLEDO, WESLEY EVANGELISTA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Cadastro e consulta de parâmetros biofísicos utilizando a plataforma MyocyteDB",
        "doi": "10.33448/rsd-v11i8.30712",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e14711830712-",
        "autores": [
          "PLOVAS, RONALDO",
          "PIMENTEL, RODRIGO",
          "BISSACO, MÁRCIA APARECIDA SILVA",
          "GOROSO, DANIEL GUSTAVO",
          "PUGLISI, JOSE LUIS",
          "SILVA, ROBSON RODRIGUES DA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Mamografia de rastreamento no SUS antes e durante a Pandemia de Covid-19: uma comparação entre biênios",
        "doi": "10.33448/rsd-v11i10.32738",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e210111032738-10",
        "autores": [
          "VILAS-LOBO, GLAUCIA RIBEIRO",
          "SANTOS, RICARDO DA SILVA",
          "SILVA, ROBSON RODRIGUES DA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Análise do parque tecnológico do Brasil para o rastreamento do câncer de mama",
        "doi": "10.33448/rsd-v11i15.37075",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e159111537075-",
        "autores": [
          "VILAS-LOBO, GLAUCIA RIBEIRO",
          "SANTOS, RICARDO DA SILVA",
          "SILVA, ROBSON RODRIGUES DA"
        ]
      },
      {
        "ano": "2021",
        "titulo": "REMOTE MONITORING OF HEART RATE VARIABILITY FOR OBESE CHILDREN",
        "doi": "10.1016/j.bspc.2021.102453",
        "periodico": "Biomedical Signal Processing and Control",
        "volume": "66",
        "paginas": "1-9",
        "autores": [
          "GOROSO, D. G.",
          "WATANABE, W. T.",
          "NAPOLEONE, F.",
          "SILVA, D. P.",
          "Salinet, JLJ",
          "Silva, R. R.",
          "PUGLISI, J. L."
        ]
      },
      {
        "ano": "2021",
        "titulo": "Automatic segmentation to characterize anthropometric parameters and cardiovascular indicators in children",
        "doi": "10.1002/widm.1411",
        "periodico": "Wiley Interdisciplinary Reviews-Data Mining and Knowledge Discovery",
        "volume": "1",
        "paginas": "1-16",
        "autores": [
          "GOROSO, D. G.",
          "MARCIN, J.",
          "DHARMAR, M.",
          "FRAGA, A.",
          "MACEDO, M.",
          "RODRIGUES, C.",
          "SILVA, B. M.",
          "WATANABE, W. T.",
          "SILVA, D. P.",
          "Silva, R. R.",
          "PUGLISI, J. L."
        ]
      },
      {
        "ano": "2021",
        "titulo": "The ForceLAB simulator: Application to the comparison of current models of cardiomyocyte contraction",
        "doi": "10.1016/j.compbiomed.2021.104240",
        "periodico": "COMPUTERS IN BIOLOGY AND MEDICINE",
        "volume": "131",
        "paginas": "104240-10",
        "autores": [
          "RODRIGUES DA SILVA, ROBSON",
          "BAPTISTA DE SOUZA FILHO, OSIAS",
          "MAGALHÃES BASSANI, JOSÉ WILSON",
          "BASSANI, ROSANA ALMADA"
        ]
      },
      {
        "ano": "2021",
        "titulo": "Scientifically validated applications for monitoring the practice of physical activities and energy expenditure using the smartphone accelerometer: a integrative review",
        "doi": "10.33448/rsd-v10i13.21399",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "10",
        "paginas": "e511101321399-",
        "autores": [
          "Zanin, Nicoli Bertti",
          "WATANABE, W. T.",
          "RESCIGNO, W. R.",
          "ISHIZAKI, M. T.",
          "Silva, R. R.",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "2021",
        "titulo": "The use of digital technologies in spatial geometry teaching: a literature review",
        "doi": "10.33448/rsd-v10i15.22743",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "10",
        "paginas": "1-11",
        "autores": [
          "OLIVEIRA, F. C.",
          "BISSACO, M. A. S.",
          "Silva, R. R."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Memorization of Daily Routines by Children with Down Syndrome Assisted by Playful Virtual Environment.",
        "doi": "10.1038/s41598-020-60014-5",
        "periodico": "Scientific Reports",
        "volume": "10",
        "paginas": "1-",
        "autores": [
          "NETTO, O. L. C.",
          "RODRIGUES, S.C.M.",
          "CASTRO, M. V.",
          "SILVA, D. P.",
          "Silva, R. R.",
          "BRANCATO, R. R.",
          "SOUZA, A. A. F.",
          "BISSACO, M."
        ]
      },
      {
        "ano": "2020",
        "titulo": "MECHANICAL TENSILE TEST OF THE BODY ADHESIVE ELASTIC TAPE",
        "doi": "10.24327/ijrsr.2020.1101.5062",
        "periodico": "INTERNATIONAL JOURNAL OF RECENT SCIENTIFIC RESEARCH",
        "volume": "11",
        "paginas": "37150-37157",
        "autores": [
          "MORINI JUNIOR, N.",
          "RODRIGUES, S.C.M.",
          "MARTINS, R. A. L.",
          "CANUTO, G.",
          "Silva, R. R.",
          "SCARDOVELLI, T.",
          "BOSCHI, S. R. M. S.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2020",
        "titulo": "UTILIZAÇÃO DE KITS DIDÁTICOS PARA COMPLEMENTAR O ENSINO DE CÁLCULO DIFERENCIAL E INTEGRAL NAS ENGENHARIAS",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "5",
        "paginas": "1-5",
        "autores": [
          "CORREA, K. A. M.",
          "Silva, R. R.",
          "RODRIGUES, S.C.M."
        ]
      },
      {
        "ano": "2020",
        "titulo": "ENSINO E APLICAÇÕES DOS NÚMEROS COMPLEXOS NA ENGENHARIA ELÉTRICA",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "5",
        "paginas": "1-4",
        "autores": [
          "SANTOS, B. H. S.",
          "SIQUEIRA, R. A. M.",
          "Silva, R. R.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2020",
        "titulo": "DESENVOLVIMENTO DE UM MODELO HIDRÁULICO DO SISTEMA CIRCULATÓRIO HUMANO CONTROLADO POR MICROCONTROLADOR",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "5",
        "paginas": "1-5",
        "autores": [
          "SILVA, A. G.",
          "OLIVEIRA, M. S. N.",
          "GOROSO, D. G.",
          "Silva, R. R."
        ]
      },
      {
        "ano": "2020",
        "titulo": "AVALIAÇÃO DE TECNOLOGIA ON-LINE PARA PREVENÇÃO PRIMÁRIA DE DCNT EM USUÁRIOS DE SERVIÇOS BÁSICOS DE SAÚDE DO SUS",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "5",
        "paginas": "1-4",
        "autores": [
          "MAIA, P. B.",
          "R. R. Silva",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "2019",
        "titulo": "SCHSim: UM SIMULADOR DO SISTEMA CIRCULATÓRIO HUMANO UTILIZANDO CIRCUITOS ELÉTRICOS EQUIVALENTES",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "4",
        "paginas": "1-",
        "autores": [
          "SILVA, A. G.",
          "GOROSO, D. G.",
          "Silva, R. R."
        ]
      },
      {
        "ano": "2019",
        "titulo": "DESENVOLVIMENTO DE UMA FERRAMENTA COMPUTACIONAL PARA CÁLCULO DA CONCENTRAÇÃO DE POLUENTES GERADOS A PARTIR DA COMBUSTÃO DO GÁS NATURAL",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "4",
        "paginas": "1-4",
        "autores": [
          "RIBEIRO JUNIOR, D. M.",
          "SILVA, J. S.",
          "BRANDAO, H. S.",
          "Silva, R. R."
        ]
      },
      {
        "ano": "2019",
        "titulo": "AJUSTE DAS FAIXAS CARACTERÍSTICAS DO ÍNDICE CINTURA QUADRIL PARA CRIANÇAS E ADOLESCENTES",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "4",
        "paginas": "1-4",
        "autores": [
          "MAIA, P. B.",
          "Silva, R. R.",
          "GOROSO, D. G."
        ]
      },
      {
        "ano": "2018",
        "titulo": "UMA ANÁLISE DA MODELAGEM DO SISTEMA CIRCULATÓRIO HUMANO (SCH) UTILIZANDO CIRCUITOS ELÉTRICOS EQUIVALENTES",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "1",
        "paginas": "1-4",
        "autores": [
          "SILVA, A. G.",
          "GOROSO, D. G.",
          "SILVA, R. R."
        ]
      },
      {
        "ano": "2018",
        "titulo": "ESTUDO DA APLICAÇÃO DO CÁLCULO DIFERENCIAL E INTEGRAL NA ENGENHARIA",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "1",
        "paginas": "1-3",
        "autores": [
          "MENDES, N. D.",
          "CAMARGO, L. S.",
          "SILVA, R. R.",
          "RODRIGUES, S.C.M."
        ]
      },
      {
        "ano": "2017",
        "titulo": "MarkoLAB: A simulator to study ionic channel's stochastic behavior",
        "doi": "10.1016/j.compbiomed.2017.05.032",
        "periodico": "COMPUTERS IN BIOLOGY AND MEDICINE",
        "volume": "87",
        "paginas": "258-270",
        "autores": [
          "Silva, R. R.",
          "GOROSO, D. G.",
          "BERS, D. M.",
          "PUGLISI, J. L."
        ]
      },
      {
        "ano": "2015",
        "titulo": "MioLab, a rat cardiac contractile force simulator: applications to teaching cardiac cell physiology and biophysics",
        "doi": "10.1016/j.cmpb.2015.09.012",
        "periodico": "Computer Methods and Programs in Biomedicine (Print)",
        "volume": "122",
        "paginas": "480-490",
        "autores": [
          "SILVA, ROBSON RODRIGUES DA",
          "BISSACO, MARCIA APARECIDA SILVA",
          "GOROSO, DANIEL GUSTAVO"
        ]
      },
      {
        "ano": "2013",
        "titulo": "MioLab: Simulator for cardiac myocyte contractile force of rat based on the dynamics of calcium",
        "doi": "10.1016/j.medengphy.2012.05.010",
        "periodico": "Medical Engineering & Physics",
        "volume": "35",
        "paginas": "338-349",
        "autores": [
          "SILVA, R. R.",
          "GOROSO, D. G.",
          "BISSACO, M. A. S."
        ]
      },
      {
        "ano": "2013",
        "titulo": "Monitoring heart rate variability online using e-health oriented 3G mobile telephone services",
        "doi": "10.1088/1742-6596/477/1/012036",
        "periodico": "Journal of Physics. Conference Series (Print)",
        "volume": "477",
        "paginas": "012036-",
        "autores": [
          "GOROSO, D G",
          "SILVA, R R DA",
          "BATTISTELLA, L R",
          "ODSTRCIL, M",
          "PAOLINI, M"
        ]
      }
    ],
    "softwares": [
      {
        "titulo": "CardioLoop - Simulador da curva Pressão - Volume",
        "ano": "2026",
        "finalidade": "Pesquisa e Ensino",
        "plataforma": "HTML; PYTHON; CSS"
      },
      {
        "titulo": "VancoLearn: Educação em Farmacocinética Clínica da Vancomicina",
        "ano": "2026",
        "finalidade": "Educação em Farmacocinética Clínica da Vancomicina",
        "plataforma": "HTML; PYTHON; CSS"
      },
      {
        "titulo": "ECG Master Class: Plataforma Web para Ensino da Interpretação do Sinal de ECG",
        "ano": "2025",
        "finalidade": "Pesquisa e Ensino",
        "plataforma": "HTML; PYTHON"
      },
      {
        "titulo": "IKrLab - Simulador Eletrofisiológico",
        "ano": "2025",
        "finalidade": "Pesquisa e Ensino",
        "plataforma": "HTML; JAVA SCRIPT; PYTHON; CSS"
      },
      {
        "titulo": "Alerta Animal",
        "ano": "2025",
        "finalidade": "Pesquisa e Ensino",
        "plataforma": "JAVA; JAVA SCRIPT"
      },
      {
        "titulo": "CardioExergy: ANÁLISE EXERGÉTICA DO CORAÇÃO COM ESTENOSE AÓRTICA",
        "ano": "2025",
        "finalidade": "Pesquisa e Ensino",
        "plataforma": "HTML; JAVA SCRIPT; PYTHON; CSS"
      },
      {
        "titulo": "TERMOLAB - CÁLCULO DE EXERGIA EM MOTORES A COMBUSTÃO",
        "ano": "2025",
        "finalidade": "Pesquisa e Ensino",
        "plataforma": "HTML; PYTHON"
      },
      {
        "titulo": "PharmaLab Simulator: Tool to study the drug action on the mouse ventricular myocyte",
        "ano": "2023",
        "finalidade": "Tool to study the drug action on the mouse ventricular myocyte",
        "plataforma": "MATLAB"
      },
      {
        "titulo": "ForceLAB 2.0 - Application to the comparison of current models of cardiomyocyte contraction",
        "ano": "2023",
        "finalidade": "APPLICATION TO THE COMPARISON OF CURRENT MODELS OF CARDIOMYOCYTE CONTRACTION",
        "plataforma": "MATLAB"
      },
      {
        "titulo": "RDB - DIMENSIONAMENTO DE REATORES BATELADA",
        "ano": "2023",
        "finalidade": "ENSINO",
        "plataforma": "MATLAB"
      },
      {
        "titulo": "FFMsim: Ferramenta computacional para simular o processo de Feed Forward Modeling para o miócito ventricular de coelho",
        "ano": "2023",
        "finalidade": "Pesquisa e Ensino",
        "plataforma": "MATLAB"
      },
      {
        "titulo": "SpaceGeo_AR - augmented reality application for teaching and learning spatial geometry by deaf and non-deaf student",
        "ano": "2022",
        "finalidade": "ENSINO",
        "plataforma": "Javascript"
      },
      {
        "titulo": "MyocyteDB - Plataforma Web para cadastro e pesquisa de parâmetros biofísicos: modelagem conceitual",
        "ano": "2022",
        "finalidade": "Pesquisa",
        "plataforma": "C SHARP"
      },
      {
        "titulo": "PharmaLab: A Tool to Study the Drug Action on the Mouse Ventricular Myocyte",
        "ano": "2022",
        "finalidade": "Pesquisa e Ensino",
        "plataforma": "MATLAB"
      },
      {
        "titulo": "ForceLAB SIMULATOR: Application to the comparison of current models of cardiomyocyte contraction",
        "ano": "2021",
        "finalidade": "Pesquisa e Ensino",
        "plataforma": "MATLAB"
      },
      {
        "titulo": "MioLab: Laboratório de Miócito Cardíaco",
        "ano": "2015",
        "finalidade": "Simulador da força contráctil para miócito cardíaco de rato fundamentado na dinâmica de cálcio",
        "plataforma": "C++, Object Pascal e Matlab"
      }
    ],
    "patentes": [],
    "orientacoes_concluidas": [
      {
        "tipo": "Mestrado",
        "titulo": "Modelo computacional para miócito cardíaco de rato: a influência dos buffers de cálcio e NCLX mitocondrial",
        "ano": "2015",
        "orientado": "Edson Toshio Nakagawa Tobias da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "MarkoLAb Web: plataforma online para estudo do comportamento estocástico dos canais iônicos",
        "ano": "2018",
        "orientado": "Cristiano Pessoa",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Modelagem Computacional da Eletrofisiologia Cardíaca de Rato: uma revisão de literatura",
        "ano": "2017",
        "orientado": "Rodrigo Pimentel",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Modelagem matemática e simulação computacional do metabolismo de ATP no fenômeno do acoplamento da excitação - contração cardíaca em miócito ventricular de rato",
        "ano": "2017",
        "orientado": "Jefferson Valladão Oliveira de Mello",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Aplicativos validados cientificamente e indicados para monitorar a prática de atividades físicas através de acelerômetro interno de smartphone: uma revisão sistemática.",
        "ano": "2018",
        "orientado": "Wilson Rogério  Rescigno",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "PHARMALAB: FERRAMENTA COMPUTACIONAL PARA TESTE DE FÁRMACOS NO MIÓCITO VENTRICULAR DE CAMUNDONGO",
        "ano": "2021",
        "orientado": "Matheus Leonardo Alves de Camargo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Análise do parque tecnológico do Brasil para o rastreamento do câncer de mama",
        "ano": "2021",
        "orientado": "Glaucia Ribeiro Vilas Lobo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "ECG MASTER CLASS: PLATAFORMA WEB PARA ENSINO DA INTERPRETAÇÃO DO SINAL DE ECG",
        "ano": "2026",
        "orientado": "Rafael Gouveia Borges",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "FFMSim: Simulador do processo de Feed Forward Modeling para miócito ventricular de coelho",
        "ano": "2024",
        "orientado": "Gabriel Marcos de Souza Motta",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Modelo tridimensional das características tumorais no ducto mamário.",
        "ano": "2014",
        "orientado": "Rafaela Ferreira de Azevedo Alves",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Cardio Junction: ferramenta computacional online implementada a partir de um modelo de compartimentos para o miócito ventricular de rato",
        "ano": "2015",
        "orientado": "Ricardo Agostinho de Rezende Junior",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "MYOCYTEDB: PLATAFORMA WEB PARA CADASTRO E PESQUISA DE PARÂMETROS BIOFÍSICOS UTILIZADOS NA MODELAGEM COMPUTACIONAL DO MIÓCITO VENTRICULAR",
        "ano": "2022",
        "orientado": "Ronaldo Plovas",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "DESENVOLVIMENTO DE UMA FERRAMENTA COMPUTACIONAL COM RECURSOS DE REALIDADE AUMENTADA E ACESSIBILIDADE PARA SURDOS APLICADA AO ENSINO DA GEOMETRIA ESPACIAL",
        "ano": "2022",
        "orientado": "Francisco Cesar de Oliveira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "ForceLAB: ferramenta computacional para avaliar e comparar os dois principais modelos de contração no miócito ventricular de rato",
        "ano": "2016",
        "orientado": "Osias Baptista de Souza Filho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Modelagem Matemática e Simulação Computacional do Mecanismo de Contração no Miócito Ventricular de Camundongo",
        "ano": "2025",
        "orientado": "Matheus Leonardo Alves de Camargo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "A História da Matemática como meio facilitador no processo de ensino - aprendizagem das equações algébricas",
        "ano": "2005",
        "orientado": "Maria de Fátima F. de Carvalho e Sidnéia B. S. Silva",
        "instituicao": "Faculdade Bandeirantes de Educação Superior"
      },
      {
        "tipo": "Outras",
        "titulo": "O ensino dos números complexos utilizando o recurso da história da matemática e dos fractais",
        "ano": "2005",
        "orientado": "Emmanuelle Isabel Caldas Lopes",
        "instituicao": "Associação de Educação Superior de Suzano"
      },
      {
        "tipo": "Outras",
        "titulo": "O NÚMERO DE EULER: DA ORIGEM ÀS APLICAÇÕES ATUAIS EM DIFERENTES CONTEXTOS",
        "ano": "2007",
        "orientado": "Fernanda Linalda Halax Silva - Patricia Araujo Gonçalves",
        "instituicao": "Associação de Educação Superior de Suzano"
      },
      {
        "tipo": "Outras",
        "titulo": "ESTUDO SOBRE RESOLUÇÃO DAS EQUAÇÕES ALGÉBRICAS ATRAVÉS DA HISTÓRIA",
        "ano": "2007",
        "orientado": "Jefferson Valladão de Mello",
        "instituicao": "Associação de Educação Superior de Suzano"
      },
      {
        "tipo": "Outras",
        "titulo": "Cônicas: Um estudo analítico e aplicações",
        "ano": "2010",
        "orientado": "Gilberto Antonio Elisei e Lucas Silva de Paula",
        "instituicao": "Faculdade Unida de Suzano"
      },
      {
        "tipo": "Outras",
        "titulo": "Geometrias não Euclidianas",
        "ano": "2010",
        "orientado": "Waldir Paes",
        "instituicao": "Faculdade Unida de Suzano"
      },
      {
        "tipo": "Outras",
        "titulo": "Números Complexos: Teoria e Aplicações",
        "ano": "2011",
        "orientado": "Edivaldo Caetano da Silva e Franklin Valdemar do Nascimento",
        "instituicao": "Faculdade Unida de Suzano"
      },
      {
        "tipo": "Outras",
        "titulo": "Cálculo Diferencial e Integral - História e Aplicações",
        "ano": "2012",
        "orientado": "Damião Franscelino e Ricardo Agostino Amorim",
        "instituicao": "Faculdade Unida de Suzano"
      },
      {
        "tipo": "Outras",
        "titulo": "Número Áureo - História e Aplicações",
        "ano": "2012",
        "orientado": "Amanda C. O. Mariano e Jilnete dos Santos Silva",
        "instituicao": "Faculdade Unida de Suzano"
      },
      {
        "tipo": "Outras",
        "titulo": "Os Números Primos e a Criptografia",
        "ano": "2008",
        "orientado": "Bruno Henrique de Souza & Paulo Roberto Portela Rodrigues",
        "instituicao": "Faculdade Unida de Suzano"
      },
      {
        "tipo": "Outras",
        "titulo": "Teoria dos Grupos",
        "ano": "2010",
        "orientado": "Marcelo Davi Pinheiro",
        "instituicao": "Faculdade Unida de Suzano"
      },
      {
        "tipo": "Outras",
        "titulo": "Sequências e Progressões: Teoria e Aplicações",
        "ano": "2010",
        "orientado": "Valdeci dos Santos Ferreira",
        "instituicao": "Faculdade Unida de Suzano"
      },
      {
        "tipo": "Outras",
        "titulo": "Fractais no Ensino Médio",
        "ano": "2013",
        "orientado": "Bianca Giovanini",
        "instituicao": "Faculdade Unida de Suzano"
      },
      {
        "tipo": "Outras",
        "titulo": "Implementação e avaliação do simulador para força contrátil em miócito cardíaco de rato: MioLab",
        "ano": "2014",
        "orientado": "Victor R.G. Prado; Igor R.D. Araújo; Armando R.C. Andrade",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Ferramentas computacionais para estudo dos canais iônicos utilizando diagramas de estado: CellML® vs Python®",
        "ano": "2017",
        "orientado": "Matheus Leonardo Alves de Camargo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Estudo e aplicação do Cálculo Diferencial e Integral na Engenharia - Parte I",
        "ano": "2017",
        "orientado": "Leticia Lucon Belluci",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Modelagem do sistema circulatório humano utilizando circuitos elétricos equivalentes",
        "ano": "2017",
        "orientado": "Andrew Guimarães Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Estudo e aplicação do Cálculo Diferencial e Integral na Engenharia - Parte II",
        "ano": "2017",
        "orientado": "Leticia dos Santos Camargo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "BANCO DE DADOS DE PARÂMETROS BIOFÍSICOS DO MIÓCITO DE MAMÍFEROS",
        "ano": "2017",
        "orientado": "André Petracone",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento de uma ferramenta computacional para cálculo da concentração de poluentes gerados a partir da combustão do gás natural",
        "ano": "2018",
        "orientado": "Douglas Moreira Ribeiro Júnior",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "SCHSim: UMA FERRAMENTA COMPUTACIONAL PARA SIMULAR O SISTEMA CIRCULATÓRIO HUMANO UTILIZANDO CIRCUITOS ELÉTRICOS EQUIVALENTES",
        "ano": "2018",
        "orientado": "Andrew Guimarães Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento de um modelo hidráulico do Sistema Circulatório Humano controlado por microcontrolador",
        "ano": "2019",
        "orientado": "Andrew Guimarães Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Ensino e Aplicações dos Números Complexos na Engenharia Elétrica",
        "ano": "2019",
        "orientado": "Bruno Henrique Serpa dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Desenvolvimento de uma ferramenta computacional para monitoramento da emissão de NOx pela combustão do gás natural",
        "ano": "2020",
        "orientado": "Gabriel Marcos de Souza Motta",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "MyocyteDB - Plataforma Web para cadastro e pesquisa de parâmetros biofísicos: modelagem conceitual",
        "ano": "2022",
        "orientado": "Matheus Souza da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "MODELOS MATEMÁTICOS APLICADOS À ENGENHARIA QUÍMICA",
        "ano": "2022",
        "orientado": "Tamires Rodrigues Pereira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "DESENVOLVIMENTO DE UM MODELO MATEMÁTICO PARA DETERMINAÇÃO DA RESISTÊNCIA EM FUNÇÃO DO TEMPO DE SECAGEM PARA CONCRETOS COM CPII",
        "ano": "2022",
        "orientado": "Fernanda Glayciellen Lisboa Rodrigues",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "CADASTRO E SIMULAÇÃO DOS EFEITOS DE FÁRMACOS ANTIARRÍTMICOS UTILIZANDO A FERRAMENTA COMPUTACIONAL PHARMALAB",
        "ano": "2023",
        "orientado": "GUILHERME GADELHA DA SILVA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "MODELAGEM MATEMÁTICA DAS COLMEIAS E A EFICIÊNCIA DO FORMATO HEXAGONAL: UMA PROPOSTA DIDÁTICA",
        "ano": "2025",
        "orientado": "Felipe Appelt Gomes",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "MODELAGEM CONCEITUAL E IMPLEMENTAÇÃO DA PLATAFORMA ECG MASTERCLASS",
        "ano": "2025",
        "orientado": "Enrique do Nascimento Ferreira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Atividades Práticas Aplicadas na Unidade Curricular Modelos Matemáticos: Relatos de Experiência",
        "ano": "2025",
        "orientado": "Vitoria Caroline de Souza Moreira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "SIMULAÇÕES DE FISIOLOGIA CARDÍACA EM LABORATÓRIO VIRTUAL PARA ESTUDANTES DE MEDICINA UTILIZANDO O SOFTWARE CARDIOLAB: RELATOS DE EXPERIÊNCIA.",
        "ano": "2025",
        "orientado": "Ana Clara Gushikem Renzi",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Economia Circular na Escola: Mapeamento de Hábitos de Consumo e Potencial de Reaproveitamento",
        "ano": "2025",
        "orientado": "Isabele Miho Shibata Aguiar",
        "instituicao": "Colégio Mapple Bear"
      },
      {
        "tipo": "Outras",
        "titulo": "MODELAGEM MATEMÁTICA DO PERFIL EXERGÉTICO DO START-UP E SHUTDOWN DE MOTORES DE COMBUSTÃO INTERNA",
        "ano": "2023",
        "orientado": "Maria Luíza Zitei Brandão",
        "instituicao": "Universidade de Mogi das Cruzes"
      }
    ],
    "orientacoes_andamento": []
  },
  "silvia b": {
    "id": "prof Silvia B.xml",
    "lattes_id": "2950980864934164",
    "data_atualizacao": "29/09/2026",
    "nome": "Silvia Regina Matos da Silva Boschi",
    "nome_citacoes": [
      "BOSCHI, S. R. M. S.",
      "Silvia Regina Matos da Silva Boschi",
      "Boschi, Silvia Regina Matos da Silva",
      "Silvia Boschi",
      "Silvia R. M. S. Boschi",
      "BOSCHI, SILVIA",
      "BOSCHI, S.R.M.S.",
      "BOSCHI, SILVIA REGINA MATOS DA SILVA",
      "Boschi, Silvia R. M. da S.",
      "da Silva Boschi, Silvia Regina Matos",
      "Boschi, SIIvia R. M. S.",
      "Boschi, Silvia R. M. S.",
      "Boschi, Silvia Regina Matos S.",
      "S. R. M. S. Boschi",
      "MATOS DA SILVA BOSCHI, SILVIA REGINA",
      "BOSCHI, SÍLVIA REGINA MATOS DA SILVA",
      "S. R. M. BOSCHI",
      "BOSCHI, SILVIA R M",
      "BOSCHI, SILVIA R. M."
    ],
    "orcid": "https://orcid.org/0000-0001-8125-8844",
    "nacionalidade": "Brasil",
    "resumo": "Possui graduação em Fisioterapia pela Pontifícia Universidade Católica de Campinas (1988), mestrado e doutorado em Engenharia Biomédica pela Universidade de Mogi das Cruzes (2003 e 2011) e pós-doutorado em Engenharia Biomédica pela PUC/SP (2016). Atualmente é coordenadora do programa de Mestrado Profissional em Ciência e Tecnologia em Saúde, professora do programa de Pós-graduação em Engenharia Biomédica, na área de Bioengenharia e Instrumentação Biomédica e dos cursos de Fisioterapia e Educação Física na Universidade de Mogi das Cruzes. Tem experiência na área de Fisioterapia com ênfase em Neurologia Infantil.",
    "instituicao": "Universidade de Mogi das Cruzes",
    "departamento": "Centro de Ciências Biomédicas",
    "cidade": "Mogi das Cruzes",
    "uf": "SP",
    "formacoes": [
      {
        "tipo": "Pos Doutorado",
        "curso": "",
        "instituicao": "Pontifícia Universidade Católica de São Paulo",
        "ano": "2016"
      },
      {
        "tipo": "Doutorado",
        "curso": "Engenharia Biomédica",
        "instituicao": "Universidade de Mogi das Cruzes",
        "ano": "2011"
      },
      {
        "tipo": "Mestrado",
        "curso": "Engenharia Biomédica",
        "instituicao": "Universidade de Mogi das Cruzes",
        "ano": "2003"
      },
      {
        "tipo": "Especializacao",
        "curso": "Didática do Magistério Superior",
        "instituicao": "Faculdade do Clube Náutico Mogiano",
        "ano": "1997"
      },
      {
        "tipo": "Graduacao",
        "curso": "Fisioterapia",
        "instituicao": "Pontifícia Universidade Católica de Campinas",
        "ano": "1988"
      }
    ],
    "areas": [
      "Tecnologia Assistiva",
      "Engenharia Médica",
      "Engenharia Biomédica",
      "ENGENHARIAS"
    ],
    "metricas": {
      "artigos": 76,
      "livros": 0,
      "capitulos": 15,
      "eventos": 92,
      "softwares": 10,
      "patentes": 0,
      "orientacoes_concluidas": 146,
      "orientacoes_andamento": 0
    },
    "artigos": [
      {
        "ano": "2026",
        "titulo": "Profissão e condições de trabalho como fatores de risco cardiovascular em profissionais da área da saúde",
        "doi": "10.25248/reas.e22394.2026",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "26",
        "paginas": "e22394-",
        "autores": [
          "NAKAO, BRUNA CRISTINA MESQUITA",
          "FERNANDES, GIOVANNA DIAS",
          "MENEGIDIO, FABIANO BEZERRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2026",
        "titulo": "CONTRIBUTIONS OF BEHAVIORAL NUTRITION TO THE MENTAL HEALTH OF BARIATRIC PATIENTS: INTEGRATIVE LITERATURE REVIEW",
        "doi": "10.36238/2359-5787.2026.v12n61.1900",
        "periodico": "Revista Acadêmica Online",
        "volume": "12",
        "paginas": "e1900-",
        "autores": [
          "POIANA, BRUNA MARIANA BRAGA RÊGO",
          "SANTIAGO, TATIANA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2026",
        "titulo": "Can a Music Game Improve Motor Coordination in One Week? A Single-Blind Randomized Controlled Trial",
        "doi": "10.1109/ACCESS.2026.3675418",
        "periodico": "IEEE Access",
        "volume": "14",
        "paginas": "47511-47524",
        "autores": [
          "MONIZ, YASMIM F.",
          "PERES, BEATRIZ J.",
          "CAMPOS, HIGOR B.",
          "BOSCHI, SILVIA R. M.",
          "FERREIRA, LUIS A. D."
        ]
      },
      {
        "ano": "2026",
        "titulo": "Balance analysis system with a sensorized wobbleboard and an exergame",
        "doi": "10.1007/s42600-026-00497-9",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "42",
        "paginas": "50-",
        "autores": [
          "DA SILVA, ANDRÉ ROBERTO FERNANDES",
          "da Silva, Alessandro Pereira",
          "DE OLIVEIRA GONZALEZ, TABAJARA",
          "da Silva Boschi, Silvia Regina Matos",
          "SILVA, LUANA A. ALVES",
          "DOS SANTOS VIEIRA, RAQUEL",
          "SILVA, STEFANI LOPES",
          "DE ALMEIDA MOURA, LUAN",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Importância do acolhimento com classificação de risco nos serviços de urgência e emergência",
        "doi": "10.55905/revconv.18n.1-007",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "18",
        "paginas": "e14257-",
        "autores": [
          "ABRAHÃO, KATIÚSCIA",
          "GOUET, JONATHAN BELLO",
          "GOUET, MAYARA CRISTINA MARTINS SILVA",
          "MARTINI, SILVIA CRISTINA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "ANACLETO, GEOVANA MELLISA CASTREZANA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Comparação entre o aplicativo Physio Pro com os aplicativos existentes nas plataformas iOS e Android",
        "doi": "10.59464/2359-4632.2025.3529",
        "periodico": "REVISTA CIENTIFICA INTEGRADA UNAERP CAMPUS GUARUJÁ",
        "volume": "8",
        "paginas": "e202514-",
        "autores": [
          "MOREIRA, LUCYANA DE MIRANDA",
          "MARTINI, SILVIA CRISTINA",
          "ALVES, NAZARETI PEREIRA FERREIRA",
          "SILVA, ALESSANDRO PEREIRA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Proposal of a Serious Game for Dynamic Balance Training Using a Force Platform: A Pilot Study",
        "doi": "10.1089/g4h.2023.0194",
        "periodico": "Games for Health Journal",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "VALÉRIO, MARIANA DA PALMA",
          "SCARDOVELLI, T. A.",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, S. R. M. S.",
          "RIBEIRO, DANILO LUQUE",
          "FERNANDES DA SILVA, ANDRÉ ROBERTO",
          "MOURA, LUAN DE ALMEIDA",
          "ALEXANDRE, GABRIELLI DELBONE",
          "COPESKI, THAMIRES DA SILVA",
          "LONGUINHO, GIOVANNA CORDEIRO",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "DOSE FÁCIL: A LEARNING TOOL FOR VETERINARY STUDENTS",
        "doi": "10.56238/arev7n3-307",
        "periodico": "ARACÊ - DIREITOS HUMANOS EM REVISTA",
        "volume": "7",
        "paginas": "15516-15530",
        "autores": [
          "VALÉRIO, MARIANA DA PALMA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MORAES, ISABELLA TITICO",
          "MOURA, LUAN DE ALMEIDA",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "da Silva, Alessandro Pereira"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Efeitos Motores e cognitivos relacionados com o treino musical: uma revisão narrativa",
        "doi": "10.33871/2317417x.2025.22.9751",
        "periodico": "INCANTARE",
        "volume": "22",
        "paginas": "1-13",
        "autores": [
          "FERNANDES MONIZ, YASMIM",
          "PEREIRA DA SILVA, ALESSANDRO",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MATOS DA SILVA BOSCHI, SILVIA REGINA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Uso de aplicativo como recurso para o tratamento de incontinência urinária em gestantes",
        "doi": "10.55892/jrg.v8i19.2345",
        "periodico": "Revista JRG de Estudos Acadêmicos",
        "volume": "8",
        "paginas": "e082345-",
        "autores": [
          "NEVES, KELLY GONÇALVES MARTINEZ",
          "PRADO, ELI CRISTINA RIBEIRO DO",
          "MARTINI, SILVIA CRISTINA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Validação de dispositivo auxiliar para a mão do terapeuta na realização de técnicas de liberação miofascial",
        "doi": "10.55905/revconv.18n.5-268",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "18",
        "paginas": "e18014-",
        "autores": [
          "ROCHA, TATHIANE NAYARA DE OLIVEIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "ROCHA, SILVIO JOSÉ SANTOS DA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "GONZALEZ, TABAJARA DE OLIVEIRA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Acompanhamento de pacientes pós bariátricos e deficiências nutricionais: uma revisão da literatura",
        "doi": "",
        "periodico": "REVISTA BRASILEIRA DE OBESIDADE, NUTRIÇÃO E EMAGRECIMENTO",
        "volume": "19",
        "paginas": "672-683",
        "autores": [
          "OLIVEIRA, E. C. A.",
          "SANTIAGO, T.",
          "SILVA, A. P.",
          "MARTINI, S. C.",
          "BOSCHI, S.R.M.S.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Telerehabilitation in musculoskeletal disorders: a systematic review and meta-analysis",
        "doi": "10.59681/2175-4411.v17.2025.1402",
        "periodico": "journal of health informatics",
        "volume": "17",
        "paginas": "1-",
        "autores": [
          "MOREIRA, L. M.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "MARTINI, S. C.",
          "BOSCHI, S.R.M.S."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Construction and adaptation of a robotic equipment for blocking execution in sitting volleyball practices",
        "doi": "10.1007/s42600-023-00332-5",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "40",
        "paginas": "1-97",
        "autores": [
          "DE OLIVEIRA, RONALDO GONÇALVES",
          "SILVA, ALESSANDRO PEREIRA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MARTINI, SILVIA CRISTINA",
          "DE MIRANDA MOREIRA, LUCYANA",
          "TEIXEIRA, WELLINGTON CÉLIO RODRIGUES",
          "da Silva Boschi, Silvia Regina Matos"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Moniz Game: Usability and User Experience Evaluation of a Musical Game for Motor Coordination",
        "doi": "10.1089/g4h.2023.0133",
        "periodico": "GAMES FOR HEALTH: RESEARCH, DEVELOPMENT, AND CLINICAL APPLICATIONS",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "MONIZ, YASMIM FERNANDES",
          "GUNJI, BRUNO TOSHIO GOMES",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCADOVELLI, TERIGI AUGUSTO",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Acomodações, intervenções e modificações em sala de aula para estudantes universitários com o Transtorno do Déficit de Atenção com Hiperatividade - TDAH: uma revisão sistemática",
        "doi": "10.54033/cadpedv21n4-099",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e3808-",
        "autores": [
          "FERREIRA, JOÃO CARLOS PEIXOTO",
          "MARTINI, SÍLVIA CRISTINA",
          "GALLO, ROSÂNGELA PEIXOTO",
          "FERREIRA, ROSILENE PEIXOTO",
          "ROCHA, GABRIELLE PEIXOTO",
          "PRADO, ANA CAROLINA DO",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SANTOS, CLAYTON EDUARDO DOS",
          "BOSCHI, SÍLVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Uso de aplicativos e softwares para práticas clínicas e educacionais na medicina veterinária: uma revisão integrativa",
        "doi": "10.54033/cadpedv21n5-142",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e4169-",
        "autores": [
          "MORAES, ISABELLA TITICO",
          "MARTINI, SILVIA CRISTINA",
          "VALÉRIO, MARIANA DA PALMA",
          "MOURA, LUAN DE ALMEIDA",
          "CAMPOS, HIGOR BARRETO",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "O uso da gameterapia para diminuir a oscilação postural",
        "doi": "10.25248/reas.e16983.2024",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "24",
        "paginas": "e16983-",
        "autores": [
          "MOURA, LUAN DE ALMEIDA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "REIS, PAULO CESAR",
          "SILVA, ANDRÉ ROBERTO FERNANDES DA",
          "VALÉRIO, MARIANA DA PALMA",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Reabilitação baseada em jogos para crianças com encefalopatia crônica não evolutiva da infância: uma revisão sistemática",
        "doi": "10.18265/1517-0306a2022id7300",
        "periodico": "PRINCIPIA (JOÃO PESSOA)",
        "volume": "61",
        "paginas": "915-930",
        "autores": [
          "MONIZ, YASMIM FERNANDES",
          "GUNJI, BRUNO TOSHIO GOMES",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Proposta de sistema microcontrolado para monitoramento e controle de pressão arterial utilizando Python",
        "doi": "10.55905/rdelosv17.n60-022",
        "periodico": "DELOS: DESARROLLO LOCAL SOSTENIBLE",
        "volume": "17",
        "paginas": "e2104-",
        "autores": [
          "VALÉRIO, MARIANA DA PALMA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MOURA, LUAN DE ALMEIDA",
          "MORAES, ISABELLA TITICO",
          "SILVA, ANDRÉ ROBERTO FERNANDES DA",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Aplicativo móvel: caderneta de saúde digital do adolescente surdo",
        "doi": "10.1590/1980-220x-reeusp-2023-0366pt",
        "periodico": "REVISTA DA ESCOLA DE ENFERMAGEM DA USP",
        "volume": "58",
        "paginas": "e20230366-",
        "autores": [
          "YASUE, THIAGO YUKIO MURAYAMA",
          "OLIVEIRA, CLÁUDIA DOS SANTOS",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "BISSACO, MARCIA APARECIDA SILVA",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "SILVA, ROBSON RODRIGUES DA",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Aplicativos móveis para orientação de mulheres no período do climatério e menopausa",
        "doi": "10.54033/cadpedv21n10-428",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e10002-",
        "autores": [
          "SILVA, JULIANA NOBRE DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SANTOS, MARCELLO FRANCISCO DOS",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Analysis of anticipatory and compensatory postural adjustment in women of different age groups using surface electromyography.",
        "doi": "10.1088/2057-1976/ad8ce2",
        "periodico": "BIOMEDICAL PHYSICS & ENGINEERING EXPRESS",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "MOURA, LUAN DE ALMEIDA",
          "DE OLIVEIRA GONZALEZ, TABAJARA",
          "PEREIRA DA SILVA, ALESSANDRO",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "FERNANDES DA SILVA, ANDRÉ ROBERTO",
          "da Palma Valério, Mariana",
          "BARRETO CAMPOS, HIGOR",
          "DE CAMARGO, MATHEUS LEONARDO ALVES",
          "MORAES, ISABELLA TITICO",
          "MARTINI, SILVIA CRISTINA",
          "da Silva Boschi, Silvia Regina Matos"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Uma visão geral dos dispositivos robóticos para reabilitação do cotovelo",
        "doi": "10.25248/reas.e18292.2024",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "24",
        "paginas": "e18292-",
        "autores": [
          "SANTOS, M. F.",
          "PEDROSO, B. M.",
          "MARTINI, S. C.",
          "BOSCHI, S. R. M. S.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Abordagem diagnóstica de lesões cerebrais em imagens de ressonância magnética por IA",
        "doi": "10.54033/cadpedv21n13-199",
        "periodico": "CADERNO PEDAGÓGICO (LAJEADO. ONLINE)",
        "volume": "21",
        "paginas": "e11960-",
        "autores": [
          "TAVARES, ALMIR RODRIGUES",
          "FRANCO, THIAGO DE SOUZA",
          "OLIVEIRA, CLEBER SILVA DE",
          "SILVA, ROBSON RODRIGUES DA",
          "MARTINI, SILVIA CRISTINA",
          "FAREZ, MAURICIO",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "ROCHA, ANTONIO JOSE DA",
          "BISSACO, MARCIA APARECIDA SILVA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "A identificação dos estágios de envelhecimento reprodutivo: desafios e implicações para a saúde da mulher",
        "doi": "10.55905/cuadv16n13-092",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "16",
        "paginas": "e6965-",
        "autores": [
          "SILVA, JULIANA NOBRE DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "VIANA, JAQUELINE SANTOS",
          "SILVA, ALESSANDRO PEREIRA DA",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Knowledge Of Brazilian University Professors About Attention Deficit Hyperactivity Disorder - Adhd",
        "doi": "10.9790/487x-2605020111",
        "periodico": "IOSR Journal of Business and Management",
        "volume": "26",
        "paginas": "01-11",
        "autores": [
          "FERREIRA, JOÃO CARLOS PEIXOTO",
          "COUTINHO, ROBERTO",
          "GALLO, ROSÂNGELA PEIXOTO",
          "FERREIRA, ROSILENE PEIXOTO",
          "ROCHA, GABRIELLE PEIXOTO",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SÍLVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MARTINI, SÍLVIA CRISTINA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "Inteligência artificial aplicada ao diagnóstico de câncer por exames de imagem",
        "doi": "10.25248/reac.e16193.2024",
        "periodico": "Revista Eletrônica Acervo Científico",
        "volume": "47",
        "paginas": "e16193-",
        "autores": [
          "CROFFI, LETICIA BRUM",
          "JUDICE, WAGNER",
          "BOSCHI, SILVIA",
          "MARTINI, SILVIA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Desenvolvimento de uma bengala branca com ponteira omnidirecional mecânica ('omini-trip') para deficientes visuais",
        "doi": "10.5281/zenodo.7897294",
        "periodico": "REVISTA FISIO&TERAPIA",
        "volume": "27",
        "paginas": "94-",
        "autores": [
          "ALVES, C. C.",
          "BOCK, E. G. P.",
          "SCARDOVELLI, T. A.",
          "SILVA, A. P.",
          "BOSCHI, S. R. M. S.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2023",
        "titulo": "TECNOLOGIAS ASSISTIVAS DESENVOLVIDAS NA ESCOLA PARA PROMOÇÃO DA INCLUSÃO SOCIAL",
        "doi": "10.56083/rcv3n6-097",
        "periodico": "CONTEMPORÂNEA - REVISTA DE ÉTICA E FILOSOFIA POLÍTICA",
        "volume": "3",
        "paginas": "6497-6532",
        "autores": [
          "ALVES, CLAUDEMIR CLAUDINO",
          "DE RESENDE JUNIOR, RICARDO AGOSTINHO",
          "CAVALCANTI, FABIANA RODRIGUES SILVA DE MIRANDA",
          "da Silva, Alessandro Pereira",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "DA SILVA, ROBSON RODRIGUES",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "TRANSFERÃ?NCIA DE APRENDIZADO PARA CATEGORIZAÃ?Ã?O DE PATOLOGIAS",
        "doi": "10.56083/rcv3n9-022",
        "periodico": "CONTEMPORÂNEA - REVISTA DE ÉTICA E FILOSOFIA POLÍTICA",
        "volume": "3",
        "paginas": "13857-13878",
        "autores": [
          "LIMA, CÉSAR ALEXANDRE SILVA",
          "MARTINI, SILVIA CRISTINA",
          "DOS SANTOS, CLAYTON EDUARDO",
          "BISSACO, MÁRCIA APARECIDA SILVA",
          "AMATE, FLÁVIO CÉZAR",
          "GIANCOLI, ANA PAULA MULLER",
          "da Silva, Alessandro Pereira",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Conteúdo on-line para curso de imagens pneumológicas",
        "doi": "10.55905/revconv.16n.9-265",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "16",
        "paginas": "18303-18313",
        "autores": [
          "LEITE, LORRANE SOUZA",
          "MARTINI, SILVIA CRISTINA",
          "SANTOS, ANA MARIA VITARELLI DE CASTRO EMERY",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "da Silva, Alessandro Pereira",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "BISSACO, MÁRCIA APARECIDA DA SILVA",
          "MOREIRA, LUCYANA DE MIRANDA",
          "DE LIMA, DAYANA APARECIDA MACHADO",
          "BORGES, ROBSON FERREIRA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Tecido adiposo marrom: uma alternativa para manutenção de peso em pacientes com obesidade",
        "doi": "10.25248/reas.e13720.2023",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "23",
        "paginas": "e13720-",
        "autores": [
          "SANTIAGO, TATIANA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "MOREIRA, LUCYANA DE MIRANDA",
          "DENARDO, VIVIAN CLEIA BENITES",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Automated methodology for breast segmentation and mammographic density classification using co-occurrence and statistical and SURF descriptors",
        "doi": "10.1504/IJBET.2022.124185",
        "periodico": "INTERNATIONAL JOURNAL OF BIOMEDICAL ENGINEERING AND TECHNOLOGY",
        "volume": "39",
        "paginas": "213-",
        "autores": [
          "PAVUSA JUNIOR, R.",
          "FERNANDES, J. C. L.",
          "SILVA, A. P.",
          "BISSACO, M. A.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T. A.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Risk Factor Forecasting System for Pressure Injuries Through Artificial Neural Network",
        "doi": "10.1109/tla.2022.9675469",
        "periodico": "IEEE Latin America Transactions",
        "volume": "20",
        "paginas": "634-642",
        "autores": [
          "MEDINA PEDROSO, BRUNO",
          "SARTORI GUAZZELLI, JOAO VITOR",
          "PEREIRA DA SILVA, ALESSANDRO",
          "MATOS DA SILVA BOSCHI, SILVIA REGINA",
          "CRISTINA MARTINI, SILVIA",
          "AUGUSTO SCARDOVELLI, TERIGI"
        ]
      },
      {
        "ano": "2022",
        "titulo": "USO DE IMAGENS INFRAVERMELHAS EM TENDINOPATIA CALCÂNEA TRAUMÁTICA",
        "doi": "10.33448/rsd-v11i5.27829",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e9011527829-",
        "autores": [
          "SILVA, J. N.",
          "LOPES-MARTINS, R. A. B.",
          "MARTINI, S. C.",
          "BOSCHI, S.R.M.S.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Gastroplastia no Brasil: um retrato da evolução do estado nutricional",
        "doi": "10.25248/REAS.e9786.2022",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "15",
        "paginas": "1-8",
        "autores": [
          "SANTIAGO, T.",
          "SILVA, A. P.",
          "SZEGO, T.",
          "ANTONACCI JUNIOR, E.",
          "BASSOLS, G. F.",
          "SILVA, T. G.",
          "BOSCHI, S. R. M. S.",
          "MARTINI, S. C.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Dispositivos musicais na reabilitação neurológica no membro superior: uma revisão integrativa",
        "doi": "10.33448/rsd-v11i5.27907",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e10011527907-",
        "autores": [
          "MONIZ, Y. F.",
          "SILVA, A. P.",
          "GUNJI, B. T. G.",
          "SCARDOVELLI, T. A.",
          "MARTINI, S. C.",
          "BOSCHI, S.R.M.S."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Design of automated adaptive controller for mean arterial pressure in hypotensive situations using a vasopressor drug",
        "doi": "10.1007/s42600-022-00216-0",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "39",
        "paginas": "216-",
        "autores": [
          "COELHO, M. S.",
          "SILVA, S. J.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S.",
          "MARTINI, S. C.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2022",
        "titulo": "Método não invasivo versus método invasivo para medição de pressão arterial em roedores: uma revisão integrativa da literatura",
        "doi": "10.33448/rsd-v11i8.30789",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e4911830789-",
        "autores": [
          "VALÉRIO, MARIANA DA PALMA",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Dispositivo de barras paralelas com estímulo vibratório controlado via Interface Homem Máquina (IHM) para reabilitação de neuropatologias",
        "doi": "10.33448/rsd-v11i7.29964",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e28411729964-",
        "autores": [
          "MORAIS, ANTONIO VINÍCIUS DE",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "MOURA, LUAN DE ALMEIDA",
          "MONIZ, YASMIM FERNANDES",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Development of a dynamic balance analysis and training system through posturography in a bipodal force platform with biaxial rotation",
        "doi": "10.1007/s42600-022-00223-1",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "ISHIZAKI, MARCIO TADASHI",
          "DA SILVA, ANDRÉ ROBERTO FERNANDES",
          "DE ALMEIDA MOURA, LUAN",
          "DOS REIS, PAULO CESAR",
          "LAZZARESCHI, LEANDRO",
          "da Silva Boschi, Silvia Regina Matos",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "da Silva, Alessandro Pereira"
        ]
      },
      {
        "ano": "2022",
        "titulo": "Dispositivos para ortostatismo para pessoas com mobilidade reduzida: revisão integrativa",
        "doi": "10.33448/rsd-v11i9.30278",
        "periodico": "RESEARCH, SOCIETY AND DEVELOPMENT",
        "volume": "11",
        "paginas": "e35911930278-",
        "autores": [
          "ALVES, NAZARETI PEREIRA FERREIRA",
          "CECÍLIO, MARIANA DE MORAES",
          "MOREIRA, LUCYANA DE MIRANDA",
          "MARTINI, SILVA CRISTINA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "SILVA, SÉRGIO GOMES DA",
          "LIRA NETO, JOSÉ CLAUDIO GARCIA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2021",
        "titulo": "Construção de um equipamento para auxiliar no treinamento de ataque e defesa para a modalidade voleibol sentado",
        "doi": "",
        "periodico": "COLEÇÃO PESQUISA EM EDUCAÇÃO FÍSICA",
        "volume": "20",
        "paginas": "47-54",
        "autores": [
          "OLIVEIRA, R. G.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "MARTINI, S. C.",
          "BOSCHI, S.R.M.S."
        ]
      },
      {
        "ano": "2021",
        "titulo": "patologIA: online platform for improving image-based diagnostics applied to medical students",
        "doi": "",
        "periodico": "PROCEEDINGS OF SPIE, THE INTERNATIONAL SOCIETY FOR OPTICAL ENGINEERING",
        "volume": "11601",
        "paginas": "116010T-",
        "autores": [
          "LIMA, C. A. S.",
          "SANTOS, C. E. S.",
          "BISSACO, M. A. S.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "Boschi, SIIvia R. M. S.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2021",
        "titulo": "The use and impact of mHealth by community health workers in developing and least developed countries: a systematic review",
        "doi": "10.1007/s42600-021-00154-3",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "",
        "paginas": "563-582",
        "autores": [
          "ABREU, F. D. L.",
          "BISSACO, M. A.",
          "SILVA, A. P.",
          "S. R. M. S. Boschi",
          "SCARDOVELLI, T. A.",
          "SANTOS, M. F.",
          "C.M.RODRIGUES, C.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2020",
        "titulo": "INTERFACE ASSISTIVA PARA AUXILIAR A FORMAÇÃO PROFISSIONAL DE PESSOAS COM LIMITAÇÕES MOTORAS",
        "doi": "",
        "periodico": "HUMANIDADES & INOVAÇÃO",
        "volume": "7",
        "paginas": "46-51",
        "autores": [
          "ALEXANDRUK, M.",
          "SCARDOVELLI, T. A.",
          "SILVA, A. R. F.",
          "MARTINI, S. C.",
          "MARTUCCI NETO, H.",
          "BOSCHI, S. R. M. S.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2020",
        "titulo": "PERCEPÇÕES DOS AGENTES COMUNITÁRIOS DE SAÚDE SOBRE AS TECNOLOGIAS DE INFORMAÇÃO E COMUNICAÇÃO NA ATENÇÃO PRIMÁRIA À SAÚDE: UMA PESQUISA EXPLORATÓRIA",
        "doi": "",
        "periodico": "HUMANIDADES & INOVAÇÃO",
        "volume": "7",
        "paginas": "32-45",
        "autores": [
          "ABREU, F. D. L.",
          "ZANIN, N. B.",
          "BISSACO, M. A. S.",
          "SILVA, A. P.",
          "BOSCHI, S.R.M.S.",
          "SCARDOVELLI, T. A.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Real-time simulation device for mean arterial pressure of hypotensive patient subjected phenylephrine infusion",
        "doi": "10.1049/el.2020.1383",
        "periodico": "ELECTRONICS LETTERS",
        "volume": "",
        "paginas": "1-",
        "autores": [
          "COELHO, M. S.",
          "SILVA, S. J.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T. A.",
          "MARTINI, S. C.",
          "BARBUY, H. S.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Distribution of mass and center of pressure in dynamic balance presented by an instrumented wobble board.",
        "doi": "10.1007/s42600-020-00092-6",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "36",
        "paginas": "501-510",
        "autores": [
          "SILVA, A. R. F.",
          "LAZZARESCH, L.",
          "BISCHOF, K. P.",
          "ISHIZAKI, M. T.",
          "MARTINI, S. C.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2020",
        "titulo": "AVALIAÇÃO DOS EFEITOS DA BANDAGEM ELÁSTICA NA DOR DE CORREDORES DE RUA AMADORES",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "5",
        "paginas": "1-4",
        "autores": [
          "MULLER, K. C.",
          "SOLEIRO, A. C.",
          "SANTANA, C. P. L.",
          "GLORIA, I. P. S.",
          "BOSCHI, S.R.M.S."
        ]
      },
      {
        "ano": "2020",
        "titulo": "PROPOSTA DE TREINAMENTO MUSICAL PARA ESTIMULAR A MELHORA DE COORDENAÇÃO MOTORA EM CRIANÇAS E ADOLESCENTES COM ALTERAÇÕES MOTORAS",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "5",
        "paginas": "1-4",
        "autores": [
          "MONIZ, Y. F.",
          "DIAS, D. R.",
          "RIBEIRO, L. C.",
          "GLORIA, I. P. S.",
          "BOSCHI, S.R.M.S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Avaliação da efetividade do enfaixamento abdominal em crianças acometidas pela síndrome do lactente chiador",
        "doi": "",
        "periodico": "Revista Científica UMC",
        "volume": "4",
        "paginas": "1-14",
        "autores": [
          "SAYUMI, J.",
          "MOURAO, E.",
          "FERNANDES, C.",
          "FERREIRA, C. L. B. C.",
          "BOSCHI, S. R. M. S.",
          "AGUIAR, R. S. N. A.",
          "LAZZARESCH, L.",
          "HARA, C. C. G."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Whole-body vibration on parallel bar device for gait and balance rehabilitation in stroke patients",
        "doi": "10.1007/s42600-019-00014-1",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "MORAIS, A. V.",
          "JUNIOR, G.",
          "LAZZARESCHI, L.",
          "ALMEIDA, D. V.",
          "SANTOS, M. F.",
          "BOSCHI, S.R.M.S.",
          "MARTINI, S. C.",
          "SCARDOVELLI, T. A.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Simple Adaptive PI Controller Development and Evaluation for Mean Arterial Pressure Regulation",
        "doi": "10.1007/s42600-019-00017-y",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "1",
        "paginas": "1-9",
        "autores": [
          "SILVA, S.J.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S.R.M.S.",
          "MARTINI, S. C.",
          "SILVA, A.P."
        ]
      },
      {
        "ano": "2019",
        "titulo": "UTILIZAÇÃO DE UM AMBIENTE VIRTUAL PARA REALIZAÇÃO DO MOVIMENTO DE PINÇA POLPA-A-POLPA EM INDIVIDUOS SEM ALTERAÇÃO MOTORA",
        "doi": "",
        "periodico": "Revista Científica UMC - Edição Especial PIBIC",
        "volume": "4",
        "paginas": "1-4-4",
        "autores": [
          "ALMEIDA, J. V. S. A.",
          "BRUNETO, G.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S.R.M.S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "NÍVEL DE ATIVIDADE FÍSICA EM ACADÊMICOS NO CURSO DE EDUCAÇÃO FÍSICA DE UMA UNIVERSIDADE DO ALTO TIETÊ",
        "doi": "",
        "periodico": "Revista Científica UMC - edição especial PIBIC",
        "volume": "4",
        "paginas": "1-4",
        "autores": [
          "MULLER, K. C.",
          "ALEGRI, A. J.",
          "PERUCHI, L. H.",
          "BOSCHI, S.R.M.S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "A Virtual Environment to Motivate Children?s Handgrip",
        "doi": "",
        "periodico": "AMERICAN JOURNAL OF ENGINEERING RESEARCH",
        "volume": "8",
        "paginas": "157-164",
        "autores": [
          "MATOS, M. P.",
          "SILVA, A. P.",
          "CROCHI, D.",
          "SANTOS, M. F.",
          "MARTINI, S. C.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S.R.M.S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Development and pilot testing of a ntesting of a new electromyography device - EMG Lavita",
        "doi": "",
        "periodico": "IOSR JOURNAL OF ENGINEERING",
        "volume": "9",
        "paginas": "37-44",
        "autores": [
          "CROCHI, D.",
          "SCARDOVELLI, T. A.",
          "SILVA, A. P.",
          "SILVA, T.",
          "SILVA, A. R. F.",
          "SANTOS, M. F.",
          "OTA, N. H.",
          "BISCHOF, K. P.",
          "MOURA, L. A.",
          "MARTINI, S. C.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Development and pilot testing of a new device for q-angle measurement.",
        "doi": "10.9790/9622- 0911026268",
        "periodico": "INTERNATIONAL JOURNAL OF ENGINEERING RESEARCH AND APPLICATIONS (IJERA)",
        "volume": "9",
        "paginas": "62-69",
        "autores": [
          "CROCHI, D.",
          "SILVA, T.",
          "MOURA, L. A.",
          "BISCHOF, K. P.",
          "OTA, N. H.",
          "SCARDOVELLI, T. A.",
          "MARTINI, S. C.",
          "SILVA, A. P.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2019",
        "titulo": "LEAP MOTION PARA TREINAMENTO DO MOVIMENTO DE PREENSÃO PARA ADULTOS COM LIMITAÇÃO MOTORA LEVE",
        "doi": "",
        "periodico": "REVISTA DIÁLOGOS INTERDISCIPLINARES",
        "volume": "8",
        "paginas": "1-16",
        "autores": [
          "ALVES, J. C.",
          "BOSCHI, S.R.M.S.",
          "SANTOS, L. L.",
          "SILVA, R. C.",
          "MARTINI, S. C.",
          "SILVA, A. P.",
          "DIRANI, E. A. T.",
          "SCARDOVELLI, T. A."
        ]
      },
      {
        "ano": "2019",
        "titulo": "DESENVOLVIMENTO DE UMA PALMILHA SENSORIAL PARA MARCHA EM PACIENTES PÓS - ACIDENTE VASCULAR ENCEFÁLICO",
        "doi": "",
        "periodico": "REVISTA DIÁLOGOS INTERDISCIPLINARES",
        "volume": "8",
        "paginas": "54-58",
        "autores": [
          "MUFFO, C. P.",
          "BOSCHI, S.R.M.S.",
          "SANTOS, M. F.",
          "CAVALCANTE, F. R.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "OTA, N.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2018",
        "titulo": "The late effect of Kinesio Taping ® on handgrip strength",
        "doi": "10.1016/j.jbmt.2017.09.024",
        "periodico": "JOURNAL OF BODYWORK AND MOVEMENT THERAPIES",
        "volume": "22",
        "paginas": "598-604",
        "autores": [
          "AGUIAR, R. S. N. A.",
          "BOSCHI, S. R. M. S.",
          "LAZZARESCHI, L.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "FILONI, E.",
          "MANRIQUE, A. L.",
          "FRERÈ, A. F."
        ]
      },
      {
        "ano": "2018",
        "titulo": "Multiple Sclerosis: Comparison of the Conventional Spin-Echo T2-Weighted and Flair Techniques Through Image Processing",
        "doi": "10.1166/jmihi.2018.2329",
        "periodico": "Journal of Medical Imaging and Health Informatics",
        "volume": "8",
        "paginas": "425-430",
        "autores": [
          "SIMAO, R.",
          "ALVES, R. F. A.",
          "BOSCHI, S. R. M. S.",
          "SCARDOVELLI, T. A.",
          "RODRIGUES, S. C. M.",
          "BIANCHI, C.",
          "SILVA, A. P."
        ]
      },
      {
        "ano": "2018",
        "titulo": "Peripheral device to quantify grip and pinch capacity of children",
        "doi": "10.1590/2446-4740.03017",
        "periodico": "RESEARCH ON BIOMEDICAL ENGINEERING",
        "volume": "34",
        "paginas": "102-109",
        "autores": [
          "BISCHOF, KAROLINE DE PAULA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "MOTTA, WILLIAN MOLIZANE ALMEIDA",
          "SILVA, ANDRÉ ROBERTO FERNANDES DA",
          "MORAIS, ANTÔNIO VINÍCIUS",
          "SCARDOVELLI, TERIGI AUGUSTO",
          "MARTUCCI NETO, HÉLIO",
          "MANRIQUE, ANA LÚCIA",
          "Boschi, Silvia Regina Matos da Silva"
        ]
      },
      {
        "ano": "2018",
        "titulo": "UTILIZAÇÃO DE UM AMBIENTE 3D PARA TREINAMENTO DO MOVIMENTO DE PREENSÃO EM CRIANÇAS COM ALTERAÇÃO MOTORA",
        "doi": "",
        "periodico": "Revista Científica UMC (edição especial PIBIC)",
        "volume": "3",
        "paginas": "1-4",
        "autores": [
          "ASSIS, B. M.",
          "MOREIRA, D. S.",
          "SOUZA, L. L.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2018",
        "titulo": "QUALIDADE DE VIDA E MOTIVAÇÃO DE ATLETAS PARALÍMPICOS NA MODALIDADE GOALBALL, VOLEIBOL SENTADO E BOCHA",
        "doi": "",
        "periodico": "Revista Científica UMC (edição especial PIBIC)",
        "volume": "3",
        "paginas": "1-4",
        "autores": [
          "NASCIMENTO, R.",
          "COSTA JR., M. F.",
          "OLIVEIRA, R. G.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2018",
        "titulo": "COMPARAÇÃO DA EXTUBAÇÃO ENDOTRAQUEAL DE RECÉM- NASCIDOS PREMATUROS NAS POSIÇÕES PRONA E SUPINA",
        "doi": "",
        "periodico": "Revista Científica UMC (edição especial PIBIC)",
        "volume": "3",
        "paginas": "1-4",
        "autores": [
          "MORAES, E. H. F.",
          "SANTOS, J. G.",
          "FERNANDES, L. G. A.",
          "ARRUDA, F. L. T.",
          "BOSCHI, S. R. M. S.",
          "HARA, C. C. G."
        ]
      },
      {
        "ano": "2018",
        "titulo": "AVALIAÇÃO DA FORÇA DE PREENSÃO E PINÇA APÓS TREINAMENTO FUNCIONAL EM CRIANÇAS COM ALTERAÇÃO MOTORA",
        "doi": "",
        "periodico": "Revista Científica UMC (edição especial PIBIC)",
        "volume": "3",
        "paginas": "1-4",
        "autores": [
          "SILVA, C. O.",
          "MAIA, J. P. S.",
          "BISCHOF, K. P.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2017",
        "titulo": "Mean arterial pressure-embedded model for real-time simulation and controller validation",
        "doi": "10.1049/el.2016.4788",
        "periodico": "ELECTRONICS LETTERS (ONLINE)",
        "volume": "53",
        "paginas": "450-452",
        "autores": [
          "SILVA, S.J.",
          "SCARDOVELLI, T.A.",
          "MARTUCCI, H.N.",
          "BOSCHI, S.R.M.S.",
          "SILVA, A.P."
        ]
      },
      {
        "ano": "2016",
        "titulo": "Desenvolvimento motor de lactentes submetidos à ventilação mecânica, por meio da Baylley III",
        "doi": "",
        "periodico": "Revista Científica UMC",
        "volume": "1",
        "paginas": "1-14",
        "autores": [
          "Guerra, C. C.",
          "LOPES, A. M.",
          "SERRANO, L. T.",
          "BOSCHI, S. R. M. S.",
          "LAZZARESCH, L.",
          "AGUIAR, R. S. N. A."
        ]
      },
      {
        "ano": "2015",
        "titulo": "Measurement of the Effect of Physical Exercise on the Concentration of Individuals with ADHD",
        "doi": "10.1371/journal.pone.0122119",
        "periodico": "Plos One",
        "volume": "10",
        "paginas": "e0122119-",
        "autores": [
          "SILVA, A. P.",
          "PRADO, S. O. S.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S.",
          "CAMPOS, L. C.",
          "FRERÈ, A. F."
        ]
      },
      {
        "ano": "2014",
        "titulo": "Proposal of a magnetic resonance technique for the evaluation of the calcaneofibular ligament minimizing false positive results",
        "doi": "",
        "periodico": "Biomedical Engineering Online (Online)",
        "volume": "13",
        "paginas": "168-",
        "autores": [
          "NOGUEIRA, I. A.",
          "FRERÈ, A. F.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "BOSCHI, S. R. M. S.",
          "OLIVEIRA, H. C."
        ]
      },
      {
        "ano": "2013",
        "titulo": "Grip and pinch capability assessment system for children",
        "doi": "10.1016/j.medengphy.2012.07.008",
        "periodico": "Medical Engineering & Physics",
        "volume": "35",
        "paginas": "626-635",
        "autores": [
          "BOSCHI, S. R. M. S.",
          "FRERÈ, A. F."
        ]
      },
      {
        "ano": "2008",
        "titulo": "Exercício resistido, ansiedade e depressão em portadores de Esclerose Múltipla",
        "doi": "",
        "periodico": "Fisioterapia em Movimento",
        "volume": "21",
        "paginas": "83-91",
        "autores": [
          "Rosinha, L.C.",
          "Greve, P.",
          "Nascimento, N.H.",
          "Lopes, P. G.",
          "Calonego, C. A.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2002",
        "titulo": "Desenvolvimentos de jogos musicais computadorizados para auxiliar a reabilitação de crianças com ataxia",
        "doi": "",
        "periodico": "Acta Fisiátrica",
        "volume": "09",
        "paginas": "20-20",
        "autores": [
          "BOSCHI, S. R. M. S."
        ]
      }
    ],
    "softwares": [
      {
        "titulo": "MobEasy",
        "ano": "2025",
        "finalidade": "A finalidade do aplicativo móvel é fornecer aos profissionais da reabilitação uma ferramenta  para a implementação e monitoramento da mobilização precoce com seus pacientes.",
        "plataforma": "C#"
      },
      {
        "titulo": "PELVE & MOVIMENTO",
        "ano": "2025",
        "finalidade": "Auxiliar o fisioterapeuta na área da saúde da mulher a utiliza-lo como um instrumento de prevenção e tratamento para mulheres grávidas, puérperas e com incontinência urinária.",
        "plataforma": "C#"
      },
      {
        "titulo": "Bingo dos Ditongos",
        "ano": "2025",
        "finalidade": "Proporcionar ao aluno o aprendizado de ditongos, criar condições pedagógicas que favoreçam a compreensão dessas estruturas fonológicas e sua aplicação no processo de leitura e escrita.",
        "plataforma": "C#"
      },
      {
        "titulo": "Imuno Match ? jogo de memória",
        "ano": "2025",
        "finalidade": "Tecnologia educacional para prevenção de doenças imunopreveníveis Instituição",
        "plataforma": "C#"
      },
      {
        "titulo": "SpeedClinic",
        "ano": "2024",
        "finalidade": "Jogo para treinamento de estudantes de enfermagem na detecção dos sinais de dor em neonatos",
        "plataforma": "C#"
      },
      {
        "titulo": "Physio Pro",
        "ano": "2024",
        "finalidade": "Permitir a interação fisioterapeuta-paciente, na reabilitação musculoesquelética, com o uso de TR, a partir das necessidades dos profissionais da área, com uma interface  compatível tanto com o sistema Android quanto com o sistema iOS.",
        "plataforma": "FRAMEWORK"
      },
      {
        "titulo": "Decquedas",
        "ano": "2024",
        "finalidade": "Jogo para educação em saúde na prevenção de quedas da pessoa idosa, no qual será elencado os principais riscos relacionados ao ambiente domiciliar.",
        "plataforma": "C#"
      },
      {
        "titulo": "Moniz Game",
        "ano": "2023",
        "finalidade": "Reabilitação",
        "plataforma": "C#"
      },
      {
        "titulo": "Passos de Verão",
        "ano": "2023",
        "finalidade": "reabilitação",
        "plataforma": "C#; Unity"
      },
      {
        "titulo": "Software para triagem em pronto socorro por classificação de cores",
        "ano": "2021",
        "finalidade": "auxiliar na triagem de pacientes em pronto socorro por classificação de cores",
        "plataforma": "programado em HTML5 ,requisição em AJAX, na linguagem PHP"
      }
    ],
    "patentes": [],
    "orientacoes_concluidas": [
      {
        "tipo": "Mestrado",
        "titulo": "Determinar a tensão real e aparente da Kinesio Taping® e avaliar a sua influência sobre a força de preensão palmar",
        "ano": "2016",
        "orientado": "Rodrigo Sousa Nilo de Araújo Aguiar",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "DISPOSITIVO DE ACIONAMENTO DE AMBIENTE VIRTUAL LÚDICO INTERATIVO PARA REABILITAÇÃO DO MOVIMENTO DE PREENSÃO PALMAR",
        "ano": "2015",
        "orientado": "Michele Parente de Matos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "DESENVOLVIMENTO DE ÓRTESE FUNCIONAL DE MEMBRO SUPERIOR PARA ATLETAS TETRAPLÉGICOS PRATICANTES DE BOCHA PARALÍMPICA DA CLASSE BC4",
        "ano": "2016",
        "orientado": "Lucyana Moreira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "CONSTRUÇÃO DE EQUIPAMENTOS PARA TREINAMENTO DOS FUNDAMENTOS TÉCNICOS NA MODALIDADE VOLEIBOL SENTADO",
        "ano": "2016",
        "orientado": "RONALDO GONÇALVES DE OLIVEIRA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "UTILIZAÇÃO DE UM DINAMÔMETRO ELETRÔNICO PARA AVALIAÇÃO DE FORÇA DE PREENSÃO PALMAR E PINÇA EM CRIANÇAS E ADOLESCENTES.",
        "ano": "2018",
        "orientado": "PAULA CRISTINA PACHECO CORREA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "JOGO VIRTUAL PARA ESTIMULAR OS MOVIMENTOS DE PREENSÃO E PINÇA",
        "ano": "2019",
        "orientado": "Domingo Lucio Cancela",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Dispositivo microcontrolado para  movimentação passiva de membros inferiores",
        "ano": "2019",
        "orientado": "Jean Corrêa Rodrigues",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Terapia vibratória associada ao recurso da bola Suiça",
        "ano": "2019",
        "orientado": "CHRYSTIANNE DE MELO SETTER",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "AVALIAÇÃO DO EQUILÍBRIO EM MULHERES PRATICANTES DE ATIVIDADE FÍSICA POR MEIO DE UM DISCO PROPRIOCEPTIVO DE FREEMAN INSTRUMENTADO",
        "ano": "2018",
        "orientado": "GLAUCIA PEREIRA DE SOUZA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Órtese para aprimoramento da função manual de indivíduos com comprometimento motor em membros superiores",
        "ano": "2020",
        "orientado": "Natacha Harumi Ota",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Dispositivo ativo-assistido para a reabilitação da articulação do ombro de pacientes cadeirantes com comprometimento neurológico",
        "ano": "2020",
        "orientado": "Douglas Crochi",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Influência da técnica craniana de CV-4 nas respostas neuroendrócrinas em atletas profissionais de elite.",
        "ano": "2020",
        "orientado": "Thiago Manoel de Oliveira Vasconcelos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Software para triagem em pronto socorro por classificação de cores",
        "ano": "2021",
        "orientado": "EUZARENE NUNES DOS SANTOS",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "JOGO MUSICAL COMPUTADORIZADO PARA O TREINAMENTO DA MOTRICIDADE FINA EM INDIVÍDUOS COM ALTERAÇÃO MOTORA Mogi",
        "ano": "2022",
        "orientado": "YASMIM FERNANDES MONIZ",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "JOGO COMPUTADORIZADO PARA TREINAMENTO DE ESTUDANTES DE ENFERMAGEM DOS SINAIS DE DOR EM NEONATOS",
        "ano": "2023",
        "orientado": "Fernanda Borges Aloe Leal",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Desenvolvimento de um jogo de realidade aumentada para estimular a caminhada em idosos sedentários",
        "ano": "2023",
        "orientado": "Tathiane Keller Torquato Vicco",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "DESENVOLVIMENTO DO PROTÓTIPO DE UM PAINEL DE ATIVIDADES PARA ESTIMULAR A MOVIMENTAÇÃO DE MEMBROS SUPERIORES EM CRIANÇAS NO LEITO DE UNIDADE DE TERAPIA INTENSIVA",
        "ano": "2023",
        "orientado": "Jessica Batista Nobre",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "APLICATIVO PARA ESTIMULAR A MOBILIZAÇÃO PÉLVICA E A PREVENÇÃO E TRATAMENTO DE INCONTINÊNCIA URINÁRIA EM GESTANTES",
        "ano": "2024",
        "orientado": "Eli Cristina Ribeiro do Prado",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "DESENVOLVIMENTO DE UM APLICATIVO MÓVEL DE AVALIAÇÃO DE PACIENTES PARA A VIABILIZAÇÃO DO USO DA MOBILIZAÇÃO PRECOCE",
        "ano": "2024",
        "orientado": "Rudson Sousa Araújo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "Desenvolvimento de Software para classificação de risco por cores para serviços de Pronto Atendimento",
        "ano": "2025",
        "orientado": "Katiúscia Abrahão",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "DESENVOLVIMENTO DE UM PROTÓTIPO DE JOGO PARA DISPOSITIVOS MÓVEIS PARA EXECUÇÃO DA TÉCNICA EXPIRAÇÃO LENTA PROLONGADA ATIVA",
        "ano": "2025",
        "orientado": "Thamires da Silva Copeski",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "AVALIAR A USABILIDADE DE UM APLICATIVO PARA ESTIMULAR A MOBILIZAÇÃO PÉLVICA, O TRATAMENTO E PREVENÇÃO DA INCONTINÊNCIA URINÁRIA EM GESTANTES",
        "ano": "2026",
        "orientado": "KELLY GONÇALVES MARTINEZ NEVES",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "A QUALIDADE DE VIDA INFLUENCIADA PELA AUTOESTIMA E AUTOIMAGEM INCENTIVA A BUSCA POR PROCEDIMENTOS ESTÉTICOS?",
        "ano": "2025",
        "orientado": "FERNANDA APARECIDA FERREIRA CHIASSO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "A USABILIDADE DE UM DISPOSITIVO DE AUXÍLIO PARA REALIZAÇÃO DE LIBERAÇÃO MIOFASCIAL POR PROFISSIONAIS FISIOTERAPEUTAS",
        "ano": "2025",
        "orientado": "Tathiane Nayara Oliveira Rocha",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "CONSTRUÇÃO, DESENVOLVIMENTO E EVIDÊNCIAS DE VALIDADE BASEADA NO CONTEÚDO DO JOGO: QUAL A EVIDÊNCIA DISSO?",
        "ano": "2025",
        "orientado": "Jonathan Bello Gouet",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "PERIFÉRICO PARA QUANTIFICAR A FORÇA FUNCIONAL DE CRIANÇAS DURANTE O MOVIMENTO DE PREENSÃO E PINÇA",
        "ano": "2016",
        "orientado": "Karoline de Paula Bischof",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "QUANTIFICAÇÃO DA DISTRIBUIÇÃO DO CENTRO DE MASSA  POR UMA PLATAFORMA CONTROLADA DE FORÇA  DE REAÇÃO AO SOLO",
        "ano": "2016",
        "orientado": "Leandro Lazzareschi",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "SISTEMA PARA QUANTIFICAR A FORÇA FUNCIONAL DE CRIANÇAS DURANTE O MOVIMENTO DE PREENSÃO E PINÇA",
        "ano": "2020",
        "orientado": "Karoline de Paula Bischof",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "DESENVOLVIMENTO E VALIDAÇÃO DE UM DISPOSITIVO PARA MENSURAÇÃO DA FLEXIBILIDADE POR MEIO DO ACELERÔMETRO EM CRIANÇAS",
        "ano": "2022",
        "orientado": "MARILENE FERREIRA DE LIMA OLIVEIRA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "CONSTRUÇÃO E ADAPTAÇÃO DE EQUIPAMENTOS AJUSTÁVEIS PARA TREINAMENTO DE FUNDAMENTOS TÉCNICOS NA MODALIDADE VOLEIBOL SENTADO",
        "ano": "2020",
        "orientado": "RONALDO GONÇALVES DE OLIVEIRA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "DESENVOLVIMENTO DE UM APLICATIVO DE TELERREABILITAÇÃO PARA ALTERAÇÕES MUSCULOESQUELÉTICAS",
        "ano": "2024",
        "orientado": "Lucyana de Miranda Moreira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "JOGO MUSICAL PARA TREINAMENTO DA COORDENAÇÃO MOTORA: DESENVOLVIMENTO, USABILIDADE E APLICAÇÃO",
        "ano": "2025",
        "orientado": "YASMIM FERNANDES MONIZ",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "Concepção De Uma Prancha Ortostática Compartimentada Para Mudanças Transposturais De Pessoas Com Restrições De Mobilidade",
        "ano": "2022",
        "orientado": "NAZARETI PEREIRA FERREIRA ALVES ELABORAÇÃO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Doutorado",
        "titulo": "DESENVOLVIMENTO DE MODELOS 3D TÁTEIS PARA INTERPRETAÇÃO DE EXAMES DE IMAGEM RADIOLÓGICAS POR ESTUDANTES COM DEFICIÊNCIA VISUAL",
        "ano": "2026",
        "orientado": "Fernanda Mayumi Lourenço Mutou",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Fisioterapia na Inclusão da criança com Paralisia Cerebral no ensino comum",
        "ano": "2001",
        "orientado": "Renata Gonzaga Torcini Amaral",
        "instituicao": "Faculdade do Clube Náutico Mogiano"
      },
      {
        "tipo": "Outras",
        "titulo": "Atuação da fisioterapia na conscientização da hiperlordose lombar em indivíduos obesos",
        "ano": "2002",
        "orientado": "Vanessa Cardoso de Souza",
        "instituicao": "Faculdade do Clube Náutico Mogiano"
      },
      {
        "tipo": "Outras",
        "titulo": "Atividade lúdica no tratamento fisioterapêutico da criança portadora de Síndrome de Down",
        "ano": "2002",
        "orientado": "Michele Aparecida Silva",
        "instituicao": "Faculdade do Clube Náutico Mogiano"
      },
      {
        "tipo": "Outras",
        "titulo": "Recursos de acessibilidade na inclusão do portador de paralisia cerebral na escola",
        "ano": "2003",
        "orientado": "Vislene Maria Ribeiro",
        "instituicao": "Faculdade do Clube Náutico Mogiano"
      },
      {
        "tipo": "Outras",
        "titulo": "A importância das orientações aos pais em crianças portadoras de Paralisia Cerebral",
        "ano": "2003",
        "orientado": "Renata Rodrigues Sato",
        "instituicao": "Faculdade do Clube Náutico Mogiano"
      },
      {
        "tipo": "Outras",
        "titulo": "Dor em estagiários de Fisioterapia",
        "ano": "2003",
        "orientado": "Lizamara Santiago Feichas",
        "instituicao": "Faculdade do Clube Náutico Mogiano"
      },
      {
        "tipo": "Outras",
        "titulo": "Atuação dos professores no processo de inclusão da criança portadora de Paralisia Cerebral",
        "ano": "2003",
        "orientado": "Elisa Miyatake e Carolina Santana Machado Rosa",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "A relação entre os desvios e deflexões mandibulares e a dor na ATM",
        "ano": "2004",
        "orientado": "Rosangela Aparecida de Moraes",
        "instituicao": "Faculdade do Clube Náutico Mogiano"
      },
      {
        "tipo": "Outras",
        "titulo": "Métodos de tratamento da espasticidade (Revisão de literaturas)",
        "ano": "2004",
        "orientado": "Danielle Santos Cardoso e Renata Viana Diniz e Fernando Seik",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Proposta de um protocolo de tratamento baseado no Método Halliwick para pacientes portadores de Paralisia Cerebral",
        "ano": "2004",
        "orientado": "Viviane Feranda Gonçalves de Souza",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Proposta de orientação aos pais de crianças portadoras de Paralisia Cerebral do tipo espástico",
        "ano": "2004",
        "orientado": "Andrea de Oliveira Pereira e Paula Ribeiro Gomes e Ariane Ke",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Proposta de um guia de orientação aos pais de crianças portadoras de Mielomeningocele",
        "ano": "2005",
        "orientado": "Eliane Y. Mory; Fabio T. Akabane; Roberta S. Isomoto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "A hidroterapia e fisioterapia convencional no tratamento de crianças com Paralisia Cerebral",
        "ano": "2005",
        "orientado": "Gustavo A. de Oliveira; Rodrigo de Oliveira Carvalho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Elaboração de um protocolo de tratamento em piscina terapêutica em individuos com Distrofia Muscular de Duchenne",
        "ano": "2005",
        "orientado": "Elizandra Conceição P. Lima; Priscila R. P. Dilon",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Proposta de orientação a pais de crianças com Síndrome de Down",
        "ano": "2006",
        "orientado": "Fernanda Vieira de Almeida; Fabiana Vieira de Almeida",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Percepção do Acadêmico de Fisioterapia quanto a sua Futura Profissão",
        "ano": "2006",
        "orientado": "Ana Flávia Dimarzio de Farias",
        "instituicao": "Faculdade do Clube Náutico Mogiano"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação da aderência a um programa de  alongamento pré e pós prática do tênis de campo",
        "ano": "2007",
        "orientado": "Alessandro Leite; Renata Danielle Reinaldo Manzur",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Prevalência das Complicações respiratórias resultantes da hipertensão arterial sistêmica em pakcientes internados em um hospital público do Alto Tietê",
        "ano": "2007",
        "orientado": "Alessandra Angélica Correa Gonçalves",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Incidência de incontinência urinária no período pós-parto vaginal",
        "ano": "2007",
        "orientado": "Débora Martinez \\Nigro Braga",
        "instituicao": "Faculdade do Clube Náutico Mogiano"
      },
      {
        "tipo": "Outras",
        "titulo": "Fisioterapia na inclusão da criança portadora de paralisia cerebral",
        "ano": "2008",
        "orientado": "Tatiana Américo; Rosangela Pimentel",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise da acessibilidade de crianças com necessidades especiais nas escolas da rede pública do Alto Tietê",
        "ano": "2009",
        "orientado": "CECÍLIA A. RIBEIRO;JÉSSICA S. TOLENTINO;WELLINGTON Y. HARADA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Prevalência de distúrbios maternos que ocorrem nas gestantes adolescentes",
        "ano": "2008",
        "orientado": "Marcela Miazaki Martins do Monte",
        "instituicao": "Faculdade do Clube Náutico Mogiano"
      },
      {
        "tipo": "Outras",
        "titulo": "A inclusão do brinquedo no programa fisioterapêutico junto à criança com hemiparesia: estudo de caso",
        "ano": "2007",
        "orientado": "Neusa Maria Ferreira de Sousa",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "ORIENTAÇÕES AOS PAIS DE CRIANÇAS COM SINDROME DE DOWN SOBRE A IMPORTANCIA DO BRINCAR NO  DESENVOLVIMENTO MOTOR",
        "ano": "2008",
        "orientado": "VANESSA VASSALO; JULIANA; FERNANDA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "A IMORTANCIA DAS ORIENTAÇÕES AOS CUIDADORES DE PORTADORES DE NECESSIDADES ESPECIAIS NO TRATAMENTO FISIOTERAPÊUTICO",
        "ano": "2008",
        "orientado": "ANICHA; FABIANA ALVAREZ",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Orientação a pais de crianças com Paralisia Cerebral",
        "ano": "2008",
        "orientado": "Janaina Araújo do Prado",
        "instituicao": "Clube Nautico Mogiano"
      },
      {
        "tipo": "Outras",
        "titulo": "Protocolo de tratamento hidroterapêutico para pacientes com Distrofia de Duchenne",
        "ano": "2008",
        "orientado": "Camila Marin de Campos",
        "instituicao": "Clube Nautico Mogiano"
      },
      {
        "tipo": "Outras",
        "titulo": "Prevalência de distúrbios musculoesqueléticos em estagiários de Fisioterapia",
        "ano": "2008",
        "orientado": "Karina Ikari; Priscila Kuroda; Leidiane Fully",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Escola de Postura - uma questão de conscientização",
        "ano": "2010",
        "orientado": "Roseli Vida",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Escola de Postura uma questão de conscientização",
        "ano": "2009",
        "orientado": "Roseli Leal Vida",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Orientação a pais de crianças com distrofias musculares",
        "ano": "2009",
        "orientado": "Hariana Carla Fujii",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Colaboração do profissional fisioterapeuta na inclusão de crianças com mobilidade reduzida em escolas da rede pública de ensino - revisão de literatura",
        "ano": "2009",
        "orientado": "Leonardo Santos da Costa Junior",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "ESTUDO ERGONÔMICO DO CONJUNTO CADEIRA E MESA DE SALA DE AULA DO ENSINO FUNDAMENTAL II DA REDE PRIVADA E PÚBLICA DO MUNICÍPIO DE MOGI DAS CRUZES",
        "ano": "2010",
        "orientado": "Melissa C. Tonello Verreschi, Rosemeire de . Barioni",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise do Conhecimento das funções inerentes ao profissional de fisioterapia na equipe multidisciplinar pela equipe médica e pacientes",
        "ano": "2010",
        "orientado": "Aline Marta Glicério",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "O conhecimento dos pais de crianças com dificuldades motoras em relação ao tratamento da fisioterapia aquática",
        "ano": "2010",
        "orientado": "Kaitiana Martins da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "A utilização de brinquedos e brincadeiras durante o tratamento fisioterapêutico",
        "ano": "2010",
        "orientado": "Juliana Ferreira Dela Plata",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Natação e atividade física adaptada em crianças com comprometimento motor: revisão da literatura",
        "ano": "2010",
        "orientado": "Débora Guglielmo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise da sobrecarga e dores musculoesqueléticas em cuidadores informais primários de pacientes com alterações motoras",
        "ano": "2011",
        "orientado": "Jaqueline Brasileiro",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "O impacto do nível sócio-econômico na reabilitação neurológica infantil",
        "ano": "2011",
        "orientado": "Caren Cristina da Silva Gonçalves",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise das alterações posturais de crianças praticantes em balé clássico",
        "ano": "2012",
        "orientado": "Raquel Frias Botelho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Qualidade de vida de cuidadores primários de crianças e adolescentes portadores de necessidades especiais",
        "ano": "2012",
        "orientado": "Nathália Corrêa Quadra",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "A CONTRIBUIÇÃO ECONÔMICA DO IDOSO NA RENDA FAMILIAR E SEU IMPACTO NA QUALIDADE DE VIDA",
        "ano": "2012",
        "orientado": "Raquel Cristina Guerra",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Tratamentos mais utilizados na Paralisia Cerebral: revisão de literatura",
        "ano": "2010",
        "orientado": "Cyro Henrique Jascoscki",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "A contribuição econômica do idoso na renda familiar e seu impacto na qualidade de vida",
        "ano": "2011",
        "orientado": "Raquel Cristina Guerra",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Orientações aos pais de crianças com Paralisia Cerebral - revisão da literatura",
        "ano": "2011",
        "orientado": "Pamela Caroline Buzani Cortês",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "O impacto do nível socioeconômico na reabilitação neurlógica infantil",
        "ano": "2011",
        "orientado": "Caren C. da Silva Gonçalves",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Orientação aos pais de crianças portadoras de necessidades especiais sobre a importância da utilização do brinquedo e da brincadeira na estimulação motora",
        "ano": "2011",
        "orientado": "Alice da Silva Lopes",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Atividade lúdica no tratamento de crianças hospitalizadas com câncer",
        "ano": "2011",
        "orientado": "Cristian Martins dos Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Natação e atividade física adaptados em crianças com comprometimento motor: revisão da literatura",
        "ano": "2010",
        "orientado": "Debora Guglielmo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Prevalência de dores musculoesqueléticas em estagiários de fisioterapia",
        "ano": "2012",
        "orientado": "Edna Aparecida da Silva; Tacyara A. de Souza Franco",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise da dor e sobrecarga e seu impacto na qualidade de vida dos cuidadores primários de pacientes com AVE",
        "ano": "2012",
        "orientado": "Kezia Ferreira da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise da utilização da plataforma de equlibrio e da plataforma do console Wii e seu impacto no equilíbrio estático e dinâmico em pacientes portadores de hemiparesia pós AVE",
        "ano": "2012",
        "orientado": "Ana PaulaSousa de Carlo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Dor em cuidadores primários de crianças com alterações motoras",
        "ano": "2012",
        "orientado": "Hilda Deberaldini; Regina do Rocio Cordeiro Damazio",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise das alterações posturais em estagiários de fisioterapia de uma Universidade do Alto Tietê",
        "ano": "2012",
        "orientado": "Bruna de Lima Rodrigues",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "ACESSIBILIDADE EM ESCOLAS PÚBLICAS NA CIDADE DE IGARATÁ ? REGIÃO DO VALE DO PARAÍBA",
        "ano": "2014",
        "orientado": "ERICK APOLINARIO ROQUE;  NELSON PINCELLI NETO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Prevalência de algias em escolares de 7 a 11 anos de uma escola da rede pública do Alto Tiête",
        "ano": "2014",
        "orientado": "Marília Luisa Idalgo Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "PRINCIPAIS ALTERAÇÕES POSTURAIS EM CRIANÇAS DE 7 A 11 ANOS DE UMA ESCOLA NO MUNICÍPIO DO ALTO TIETÊ",
        "ano": "2014",
        "orientado": "Franciely Cássia da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "AVALIAÇÃO DA CAPACIDADE FUNCIONAL DE CRIANÇAS COM ALTERAÇÃO MOTORA E SUA RELAÇÃO ENTRE O NIVEL DE SOBRECARGA E DOR MUSCOLOESQUELÉTICA DO CUIDADOR INFORMAL",
        "ano": "2014",
        "orientado": "PAULA CRISTINA PACHECO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Motivação em Praticantes de Atividades Físicas na Terceira Idade",
        "ano": "2014",
        "orientado": "Alex Lopes Campos Rissoni;  Tamires Oliveira Araujo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "ANÁLISE DA QUALIDADE DE VIDA EM CRIANÇAS COM ALTERAÇÕES MOTORAS",
        "ano": "2013",
        "orientado": "Lilian de Andrade Assumpção",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "PREVALÊNCIA DE ALGIA EM ESCOLARES DE 7 A 11 ANOS DE UMA ESCOLA DA REDE PÚBLICA DO ALTO TIÊTE",
        "ano": "2013",
        "orientado": "Marília Luisa Idalgo Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "PRINCIPAIS ALTERAÇÕES POSTURAIS EM CRIANÇAS DE 7 A 11 ANOS DE UMA ESCOLA NO MUNICÍPIO DO ALTO TIETÊ",
        "ano": "2013",
        "orientado": "Franciely Cássia da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "ACESSIBILIDADE EM ESCOLAS PÚBLICAS NA CIDADE DE IGARATÁ - REGIÃO DO VALE DO PARAÍBA",
        "ano": "2013",
        "orientado": "Erick Apolinario Roque; Nelson Pincelli Neto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "PREVALÊNCIA DE DOR MUSCULOESQUELÉTICA EM ARTESÃS NA CONFECÇÃO DE TRICÔ, BORDADO E COSTURA",
        "ano": "2015",
        "orientado": "MIRIAM APARECIDA DOS SANTO;CAROLINA DE CÁSSIA DE ALMEIDA;",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "ESTUDO COMPARATIVO ENTRE A FLEXIBILIDADE DE PRATICANTES DE TAEKWONDO DE NÍVEL AVANÇADO COM PRATICANTES DE TAEKWONDO DE NÍVEL BASICO",
        "ano": "2015",
        "orientado": "ELISA VIEIRA MARTINS",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "COMPARAÇÃO DO EFEITO DA UTILIZAÇÃO DO MÉTODO KINESIO TAPING® COM OUTROS TIPOS DE BANDAGENS ELÁSTICAS NA FORÇA DE PREENSÃO PALMAR",
        "ano": "2015",
        "orientado": "PAULA CRISTINA PACHECO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "QUALIDADE DE VIDA DE CRIANÇAS COM ALTERAÇÃO MOTORA",
        "ano": "2016",
        "orientado": "FABIANA RODRIGUES SM CAVALCANTI",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "QUALIDADE DE VIDA E DOR MUSCULOESQUELÉTICA EM ACADÊMICOS DE UMA UNIVERSIDADE DO ALTO TIETÊ",
        "ano": "2016",
        "orientado": "DÉBORA REGINA MAZZARO;  MAIRA SUELEN RODRIGUES DOS SANTOS",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do ambiente domiciliar  e sua importância no desenvolvimento motor da criança com alteração motora",
        "ano": "2016",
        "orientado": "Rudson Sousa Araujo ; Amanda de Paula Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "ANALISE DE FORÇA MUSCULAR DE PREENSÃO PALMAR UTILIZANDO DIFERENTES TENSÕES DA BANDAGEM KINESIO TAPING®",
        "ano": "2016",
        "orientado": "EMANOELE APARECIDA PREMEBIDA DE MOURA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "AVALIAÇÃO DO DESENVOLVIMENTO MOTOR DE CRIANÇAS HOSPITALIZADAS E SUBMETIDAS À VENTILAÇÃO PULMONAR MECÂNICA, POR MEIO DA BAYLEY III",
        "ano": "2015",
        "orientado": "Ananda Marcelino Lopes; Letícia Tojal Serrano",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "AVALIAÇÃO DA EFETIVIDADE DO ENFAIXAMENTO ABDOMINAL EM CRIANÇAS ACOMETIDAS PELA SÍNDROME DO LACTENTE CHIADOR",
        "ano": "2015",
        "orientado": "CAMILA FERNANDES;  CINDY LIA BORGES CESARINO FERREIRA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "PREVALÊNCIA DE LESÕES MÚSCULOESQUELÉTICAS EM CORREDORES  AMADORES DE RUA DO ALTO TIETÊ",
        "ano": "2017",
        "orientado": "ANA JULIA DOS SANTOS STOLEMBERGER; THAYNÁ CARDOSO MANCIO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "MOTIVAÇÃO E QUALIDADE DE VIDA EM CORREDORES AMADORES DE RUA NA REGIÃO DO ALTO TIETÊ",
        "ano": "2017",
        "orientado": "Arthur Okitsu Buark Alves ; Fábio Ujie Campolino",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "UTILIZAÇÃO DE UM DISPOSITIVO E AMBIENTE VIRTUAL PARA TREINAMENTO DO MOVIMENTO DE PREENSÃO PALMAR",
        "ano": "2017",
        "orientado": "INGRID CATARINE DE SOUZA LANA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Hipermobilidade articular e dor musculoesquelética em descendentes asiáticos e caucasianos",
        "ano": "2017",
        "orientado": "RAFAEL RICK MATSUO DE CARVALHO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "INFLUÊNCIA DO JOGO VIRTUAL NO EQUILÍBRIO DE PACIENTES COM ALTERAÇÃO MOTORA",
        "ano": "2017",
        "orientado": "ANNA KARLA DE ANDRADE MELLO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "PROPOSTA DE UM MANUAL DE ORIENTAÇÕES AOS PAIS DE CRIANÇAS COM ALTERAÇÕES MOTORAS",
        "ano": "2017",
        "orientado": "BRUNA G. RODRIGUES; DAIANE O. FERREIRA; MARCELLA C.G.BARBOSA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "UTILIZAÇÃO DE UM AMBIENTE 3D PARA TREINAMENTO DO MOVIMENTO DE PREENSÃO EM CRIANÇAS COM ALTERAÇÃO MOTORA",
        "ano": "2018",
        "orientado": "BEATRIZ M. ASSIS; DANIELE S. MOREIRA; LETÍCIA L. SOUZA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "AVALIAÇÃO DA FORÇA DE PREENSÃO E PINÇA APÓS TREINAMENTO FUNCIONAL EM CRIANÇAS COM ALTERAÇÃO MOTORA",
        "ano": "2018",
        "orientado": "CAROLINE DE OLIVEIRA DA SILVA;  JOICE PROFETA DE SOUZA MAIA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "QUALIDADE DE VIDA E MOTIVAÇÃO DE ATLETAS PARALÍMPICOS NA MODALIDADE GOALBALL, VOLEIBOL SENTADO E BOCHA",
        "ano": "2018",
        "orientado": "RAFAEL DO NASCIMENTO; MOISES FERREIRA COSTA JUNIOR",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Proposta de treinamento do movimento de preensão em adultos com alteração motora",
        "ano": "2017",
        "orientado": "Leonardo Lucas dos Santos; Rafael Cunha da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "NÍVEL DE ATIVIDADE FÍSICA EM ACADÊMICOS DO CURSO DE EDUCAÇÃO FÍSICA DE UMA UNIVERSIDADE DO ALTO TIETÊ",
        "ano": "2019",
        "orientado": "KAREN CHRISTINE MULLER  e  ANA JULIA ALEGRI",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "EFEITO DA BANDAGEM ELÁSTICA NA FORÇA MUSCULAR DE PREENSÃO PALMAR EM DIFERENTES TENSÕES DE APLICAÇÃO",
        "ano": "2018",
        "orientado": "ARTHUR C M S FERREIRA ; JOYCE N P FERNANDES; VANESSA MARTINS",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "USO DE UM AMBIENTE VIRTUAL PARA ESTIMULAR O MOVIMENTO DE PINÇA EM CRIANÇAS SEM ALTERAÇÃO MOTORA",
        "ano": "2018",
        "orientado": "JULIANA CAROLINA DE GOES MARTINS; MAYARA BINOTTI AMANCIO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "UTILIZAÇÃO DE UM AMBIENTE VIRTUAL PARA REALIZAÇÃO DO MOVIMENTO DE PINÇA POLPA-A-POLPA EM INDIVIDUOS SEM ALTERAÇÃO MOTORA",
        "ano": "2019",
        "orientado": "João Victor Sarquis Agra de Almeida;  Gustavo Bruneto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "AVALIAÇÃO DOS EFEITOS DA BANDAGEM ELÁSTICA NA DOR DE CORREDORES DE RUA AMADORES",
        "ano": "2020",
        "orientado": "ANTENOR CHAGAS ;CAIQUE P. L.DE SANTANA;  KAREN C.MULLER",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Proposta de treinamento musical para estimular a melhora de coordenação motora em crianças e adolescentes com alterações motoras",
        "ano": "2020",
        "orientado": "Yasmim F. Moniz;Danielle Rando Dias; Lais C. Ribeiro",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "PREVALÊNCIA DE ALTERAÇÕES MUSCULOESQUELÉTICAS EM CUIDADORES DE CRIANÇAS E ADOLESCENTES EM ATENDIMENTO EM UMA CLINICA ESCOLA DO ALTO TIETÊ",
        "ano": "2019",
        "orientado": "KÁTIA REGINA ROCHA TEIXEIRA; VANESSA SILVA DE CARVALHO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "USO DE UM AMBIENTE VIRTUAL PARA ESTIMULAÇÃO DOS MOVIMENTOS DE PREENSÃO E PINÇA",
        "ano": "2019",
        "orientado": "Lilian E.S.Calasans; Mabelly A.F.Oliveira ;Tatiana M.Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "UTILIZAÇÃO DE UM JOGO COMPUTADORIZADO COM EIXO DE ROTAÇÃO DINÂMICO NO TREINAMENTO DO EQUILÍBRIO   EM INDIVÍDUOS SAUDÁVEIS",
        "ano": "2020",
        "orientado": "GABRIELLI ALEXANDRE; GIOVANNA LONGUINHO; THAMIRES COPESKI",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "LESÕES MUSCULOESQUELÉTICAS EM ACADÊMICOS DO CURSO DE EDUCAÇÃO FÍSICA PRATICANTES DE MUSCULAÇÃO",
        "ano": "2020",
        "orientado": "AMANDA ALVES FERREIRA ; ALINE DE FREITAS ANTUNES ALMEIDA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "INCIDÊNCIA DE DORES MUSCULOESQUELÉTICAS NO PERÍODO PANDÊMICO: UM ESTUDO TRANSVERSAL",
        "ano": "2022",
        "orientado": "Felipe Henrique Campos Gonçalves;  Leonardo Carlos Neiva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "INFLUÊNCIA DO TRATAMENTO MANIPULATIVO OSTEOPÁTICO EM PEDIATRIA: REVISÃO SISTEMÁTICA",
        "ano": "2022",
        "orientado": "LETÍCIA APARECIDA MAIA CUNHA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "A MASSAGEM TERAPÊUTICA E SUAS CONTRIBUIÇÕES PARA O DESENVOVIMENTO DOS BEBÊS",
        "ano": "2021",
        "orientado": "LAURA ALVES DE SOUSA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "AVALIAR A EFICIÊNCIA DE UM SISTEMA BASEADO EM DISCO DE FREEMAN E UM EXERGAME COM DASHBOARD CAPAZ DE MONITORAR O EQUILÍBRIO DO JOGADOR",
        "ano": "2022",
        "orientado": "RAQUEL S. VIEIRA;  LUANA A. A. SILVA; STEFANI LOPES SILVA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "AVALIAR A USABILIDADE DE UM JOGO COMPUTADORIZADO PARA O TREINAMENTO DE EQUILÍBRIO NOS EIXOS ANTERO-POSTERIOR E LATERO-LATERAL",
        "ano": "2020",
        "orientado": "Guilherme T. Caldeira; Isaque S. Magalhães; M. Rocha",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "PERFIL EPIDEMIOLÓGICO DOS PACIENTES EM ATENDIMENTO FISIOTERAPÊUTICO DO SETOR DE NEUROLOGIA INFANTIL DE UMA CLÍNICA ESCOLA DO ALTO TIETÊ",
        "ano": "2020",
        "orientado": "Gabriela L. Okamoto; Maria Vitória C. Vitor; Mariana S. Lima",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "PERCEPÇÃO DOS PAIS DE CRIANÇAS E ADOLESCENTES COM ALTERAÇÕES MOTORAS SOBRE O TRATAMENTO FISIOTERAPÊUTICO",
        "ano": "2021",
        "orientado": "Karine de Deus Santos; Laís Flora de Almeida",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "UTILIZAÇÃO DE UM JOGO COMPUTADORIZADO COM EIXO DE ROTAÇÃO DINÂMICO NO TREINAMENTO DO EQUILÍBRIO   EM INDIVÍDUOS SAUDÁVEIS",
        "ano": "2021",
        "orientado": "GABRIELLI ALEXANDRE; GIOVANNA C. LONGUINHO;THAMIRES COPESKI",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "LESÕES MUSCULOESQUELÉTICAS EM ACADÊMICOS DO CURSO DE EDUCAÇÃO FÍSICA PRATICANTES DE MUSCULAÇÃO",
        "ano": "2021",
        "orientado": "AMANDA ALVES FERREIRA ; ALINE DE FREITAS ANTUNES ALMEIDA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "AVALIAÇÃO DA USABILIDADE DE UM JOGO DE REALIDADE AUMENTADA COMO UM RECURSO PARA ESTIMULAR A CAMINHADA",
        "ano": "2024",
        "orientado": "LUCAS DE OLIVEIRA MARTINS",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "A IMPORTÂNCIA DA FISIOTERAPIA NO TRATAMENTO DE PACIENTES COM DISTROFIA MUSCULAR DE DUCHENNE: REVISÃO INTEGRATIVA",
        "ano": "2024",
        "orientado": "CAROLINE P. P. SANTOS;  JULIA T. LEAL: RAQUEL CARDOSO",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "OTIMIZAÇÃO DOS CONTEÚDOS DO SISTEMA MUSCULOESQUELÉTICO NO JOGO SÉRIO ANATOMY PARA O APRENDIZADO DA ANATOMIA HUMANA",
        "ano": "2025",
        "orientado": "FERNANDO DE OLIVEIRA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "PERCEPÇÃO DOS ACADÊMICOS DO CURSO DE FISIOTERAPIA SOBRE AS TÉCNICAS DE TERAPIAS MANUAIS",
        "ano": "2024",
        "orientado": "BENEDITO M. JUNIOR  LUIS C. S. BRITO TAÍS C. V. SILVA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "INFLUÊNCIA DE UM JOGO LÚDICO COMPUTADORIZADO PARA O  TREINAMENTO DA COORDENAÇÃO MOTORA",
        "ano": "2025",
        "orientado": "Maria Clara  Oliveira ;Ana Claudia Camargo ;Graziela Barbosa",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "PREVALÊNCIA DE CERVICALGIA PELO USO DE TELAS EM ACADÊMICOS DO CURSO DE FISIOTERAPIA",
        "ano": "2025",
        "orientado": "GABRIELA P. FREITAS;  DAYANE F. SANTOS",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Sequelas respiratórias e motoras da Síndrome Pós Covid-19: revisão da literatura",
        "ano": "2024",
        "orientado": "Thaís A. Diogo; Maria Gabriela O. Melo ;Julia F. V. Bezerra",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Influência da fisioterapia pélvica e obstétrica durante a gestação e parto",
        "ano": "2025",
        "orientado": "Bruna Salles Corrêa;  Lygia Galeano Ramos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "NÍVEL DE CONHECIMENTO DE GRADUANDOS EM FISIOTERAPIA EM RELAÇÃO AO TRATAMENTO FISIOTERAPÊUTICO DE LOMBALGIA",
        "ano": "2025",
        "orientado": "LYGIA GALEANO RAMOS;  BRUNA SALLES CORRÊA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "QUALIDADE DE VIDA EM MULHERES COM LIPEDEMA: UM ESTUDO TRANSVERSAL",
        "ano": "2025",
        "orientado": "GIULIA PARRILLO DOMINGOS; AMANDA MAYRA FERREIRA PEREIRA",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "INFLUÊNCIA DE UM JOGO MUSICAL COMPUTADORIZADO NO TREINAMENTO DA MOTRICIDADE FINA",
        "ano": "2023",
        "orientado": "Raisa VS. Albuquerque; Daniela CR.Garcia; FERNANDA F. Souza",
        "instituicao": "Universidade de Mogi das Cruzes"
      }
    ],
    "orientacoes_andamento": []
  },
  "tabajara": {
    "id": "prof Tabajara.xml",
    "lattes_id": "5456151579128999",
    "data_atualizacao": "20/10/2026",
    "nome": "Tabajara de Oliveira Gonzalez",
    "nome_citacoes": [
      "GONZALEZ, T. O.",
      "GONZALEZ, T",
      "GONZALEZ, TABAJARA DE",
      "GONZALEZ, TABAJARA DE OLIVEIRA",
      "GONZALEZ, T.",
      "DE OLIVEIRA GONZALEZ, TABAJARA",
      "GONZALEZ, PT",
      "GONZALEZ, PT, PHD, TABAJARA DE OLIVEIRA"
    ],
    "orcid": "https://orcid.org/0009-0009-1192-6160",
    "nacionalidade": "Brasil",
    "resumo": "Possui graduação em Fisioterapia pela Universidade Federal de São Carlos (1992), Mestre em Reabilitação pela Universidade Federal de São Paulo (2003) e Doutor em Fisioterapia pela Universidade Federal de São Carlos (2009). É sócio fundador da Sociedade Brasileira de Eletromiografia e Cinesiologia (SOBEC). Atuou como Coordenador do Curso de Fisioterapia da UNINOVE (2010-2013) e como Professor Colaborador do Mestrado em Ciências (UNINOVE). Foi Coordenador pedagógico do ensino médio no Colégio Aruã (2019 - 2022). Atua como professor do ensino Superior na Área da Saúde, é professor do programa de pós-graduação do Núcleo de Pesquisas em Tecnologia (NPT) e do programa de Ciência e Tecnologia em Saúde na Universidade de Mogi das Cruzes. Tem experiência na área de Fisioterapia Musculoesquelética, atuando principalmente nos seguintes temas: qualidade de vida, dor, eletromiografia, risco queda e disfunção temporomandibular. Contato: togonzalez23@gmail.com",
    "instituicao": "Universidade de Mogi das Cruzes",
    "departamento": "Fisioterapia",
    "cidade": "Mogi das Cruzes",
    "uf": "SP",
    "formacoes": [
      {
        "tipo": "Doutorado",
        "curso": "Fisioterapia",
        "instituicao": "Universidade Federal de São Carlos",
        "ano": "2009"
      },
      {
        "tipo": "Mestrado",
        "curso": "Reabilitação",
        "instituicao": "Universidade Federal de São Paulo",
        "ano": "2003"
      },
      {
        "tipo": "Graduacao",
        "curso": "Fisioterapia",
        "instituicao": "Universidade Federal de São Carlos",
        "ano": "1992"
      },
      {
        "tipo": "Aperfeicoamento",
        "curso": "Ortopedia e Traumatologia dos Membros Superiores",
        "instituicao": "Faculdade de Medicina de São José do Rio Preto",
        "ano": "1994"
      }
    ],
    "areas": [
      "Fisioterapia e Terapia Ocupacional",
      "CIENCIAS_DA_SAUDE"
    ],
    "metricas": {
      "artigos": 72,
      "livros": 0,
      "capitulos": 1,
      "eventos": 36,
      "softwares": 5,
      "patentes": 0,
      "orientacoes_concluidas": 62,
      "orientacoes_andamento": 0
    },
    "artigos": [
      {
        "ano": "2025",
        "titulo": "Importância do acolhimento com classificação de risco nos serviços de urgência e emergência",
        "doi": "10.55905/revconv.18n.1-007",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "18",
        "paginas": "e14257-",
        "autores": [
          "ABRAHAO, K.",
          "GOUET, J. B.",
          "GOUET, M. C. M. S.",
          "MARTINI, S. C.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "GONZALEZ, T. O.",
          "ANACLETO, G. M. C.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2025",
        "titulo": "Comparação entre o aplicativo Physio Pro com os aplicativos existentes nas plataformas iOS e Android",
        "doi": "10.59464/2359-4632.2025.3529",
        "periodico": "REVISTA CIENTIFICA INTEGRADA UNAERP CAMPUS GUARUJÁ",
        "volume": "8",
        "paginas": "e202514-",
        "autores": [
          "MOREIRA, L. M.",
          "MARTINI, S. C.",
          "ALVES, N. P. F.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "GONZALEZ, T. O.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2025",
        "titulo": "DOSE FÁCIL: A LEARNING TOOL FOR VETERINARY STUDENTS",
        "doi": "10.56238/arev7n3-307",
        "periodico": "ARACÊ - DIREITOS HUMANOS EM REVISTA",
        "volume": "7",
        "paginas": "15516-15530",
        "autores": [
          "VALÉRIO, MARIANA DA PALMA",
          "SCARDOVELLI, T. A.",
          "MORAES, ISABELLA TITICO",
          "MOURA, LUAN DE ALMEIDA",
          "MARTINI, SILVIA CRISTINA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "GONZALEZ, T. O.",
          "DA SILVA, ALESSANDRO PEREIRA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Uso de aplicativo como recurso para o tratamento de incontinência urinária em gestantes",
        "doi": "10.55892/jrg.v8i19.2345",
        "periodico": "Revista JRG de Estudos Acadêmicos",
        "volume": "8",
        "paginas": "e082345-",
        "autores": [
          "NEVES, KELLY GONÇALVES MARTINEZ",
          "PRADO, ELI CRISTINA RIBEIRO DO",
          "MARTINI, SILVIA CRISTINA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "SCARDOVELLI, T. A.",
          "GONZALEZ, T. O.",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA"
        ]
      },
      {
        "ano": "2025",
        "titulo": "Validação de dispositivo auxiliar para a mão do terapeuta na realização de técnicas de liberação miofascial",
        "doi": "10.55905/revconv.18n.5-268",
        "periodico": "CONTRIBUCIONES A LAS CIENCIAS SOCIALES",
        "volume": "18",
        "paginas": "e18014-",
        "autores": [
          "ROCHA, TATHIANE NAYARA DE OLIVEIRA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "ROCHA, SILVIO JOSÉ SANTOS DA",
          "SILVA, ALESSANDRO PEREIRA DA",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, T. A.",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2024",
        "titulo": "A identificação dos estágios de envelhecimento reprodutivo: desafios e implicações para a saúde da mulher",
        "doi": "10.55905/cuadv16n13-092",
        "periodico": "CUADERNOS DE EDUCACIÓN Y DESARROLLO",
        "volume": "16",
        "paginas": "e6965-",
        "autores": [
          "SILVA, J. N.",
          "SCARDOVELLI, T. A.",
          "VIANA, J. S.",
          "SILVA, A. P.",
          "GONZALEZ, T. O.",
          "BOSCHI, S. R. M. S.",
          "MARTINI, S. C."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Analysis of anticipatory and compensatory postural adjustment in women of different age groups using surface electromyography.",
        "doi": "10.1088/2057-1976/ad8ce2",
        "periodico": "BIOMEDICAL PHYSICS & ENGINEERING EXPRESS",
        "volume": "1",
        "paginas": "1-",
        "autores": [
          "MOURA, L. A.",
          "GONZALEZ, T. O.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "SILVA, A. R. F.",
          "VALERIO, M. P.",
          "CAMPOS, H. B.",
          "CAMARGO, M. L. A.",
          "MORAES, ISABELLA TITICO",
          "MARTINI, S. C.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2024",
        "titulo": "Aplicativo móvel: caderneta de saúde digital do adolescente surdo",
        "doi": "10.1590/1980-220x-reeusp-2023-0366pt",
        "periodico": "REVISTA DA ESCOLA DE ENFERMAGEM DA USP",
        "volume": "58",
        "paginas": "e20230366-",
        "autores": [
          "YASUE, THIAGO YUKIO MURAYAMA",
          "OLIVEIRA, CLÁUDIA DOS SANTOS",
          "SILVA, ALESSANDRO PEREIRA DA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "SCARDOVELLI, T. A.",
          "BISSACO, MARCIA APARECIDA SILVA",
          "GONZALEZ, T. O.",
          "SILVA, ROBSON RODRIGUES DA",
          "MARTINI, SILVIA CRISTINA"
        ]
      },
      {
        "ano": "2024",
        "titulo": "O uso da gameterapia para diminuir a oscilação postural",
        "doi": "10.25248/reas.e16983.2024",
        "periodico": "REVISTA ELETRÔNICA ACERVO EM SAÚDE",
        "volume": "24",
        "paginas": "e16983-",
        "autores": [
          "MOURA, LUAN DE ALMEIDA",
          "BOSCHI, SILVIA REGINA MATOS DA SILVA",
          "REIS, PAULO CESAR",
          "SILVA, ANDRÉ ROBERTO FERNANDES DA",
          "VALÉRIO, MARIANA DA PALMA",
          "GONZALEZ, T. O.",
          "MARTINI, SILVIA CRISTINA",
          "SCARDOVELLI, T. A.",
          "SILVA, ALESSANDRO PEREIRA DA"
        ]
      },
      {
        "ano": "2023",
        "titulo": "Revisão integrativa sobre jogos em análise do comportamento",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "08",
        "paginas": "01-10",
        "autores": [
          "GOUET, J. B.",
          "ABRAHAO, K.",
          "SILVA, A. P.",
          "SCARDOVELLI, T. A.",
          "MARTINI, S. C.",
          "GONZALEZ, T. O.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2023",
        "titulo": "Software para triagem em pronto socorro por classificação de cores",
        "doi": "",
        "periodico": "REVISTA CIENTÍFICA UMC",
        "volume": "8",
        "paginas": "e080300067-",
        "autores": [
          "SANTOS, E. N.",
          "ABRAHAO, K.",
          "GOUET, J. B.",
          "GONZALEZ, T. O.",
          "MARTINI, S. C.",
          "BOSCHI, S. R. M. S."
        ]
      },
      {
        "ano": "2020",
        "titulo": "Intraoral photobiomodulation diminishes pain and improves functioning in women with temporomandibular disorder: a randomized, sham-controlled, double-blind clinical trial",
        "doi": "10.1007/s10103-019-02841-1",
        "periodico": "Lasers in Medical Science (on line)",
        "volume": "35",
        "paginas": "439-445",
        "autores": [
          "HERPICH, C. M.",
          "BIASOTTO-GONZALEZ, D. A.",
          "LEAL-JUNIOR, E. C. P.",
          "POLITTI, F.",
          "GOMES, C. A. F. P.",
          "GLORIA, I. P. S.",
          "AMARAL, M. F. R. S.",
          "HERPICH, G.",
          "AZEVEDO, L. M. A.",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2019",
        "titulo": "Effect of pre-game photobiomodulation on muscle recovery in professional soccer players: study protocol for a randomized, cross-over, sham-controlled, triple-blind, clinical trial",
        "doi": "10.17784/mtprehabjournal.2019.17.620",
        "periodico": "REVISTA TERAPIA MANUAL",
        "volume": "17",
        "paginas": "620-626",
        "autores": [
          "GLÓRIA, IGOR PHILLIP DOS SANTOS",
          "LEAL, ERNESTO CESAR PINTO",
          "POLITTI, FABIANO",
          "HERPICH, CAROLINA MARCIELA",
          "SMITH, DENIS",
          "CARVALHO, LEANDRO SILVA DE",
          "GOMES, CID ANDRÉ FIDELIS DE PAULA",
          "GONZALEZ, T. O.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2018",
        "titulo": "Evaluation of pain threshold upon palpation of the masticatory muscles in women with temporomandibular disorder according to the Research Diagnostic Criteria of Temporomandibular Disorders",
        "doi": "10.1590/1982-021620182028616",
        "periodico": "REVISTA CEFAC (ONLINE)",
        "volume": "20",
        "paginas": "175-181",
        "autores": [
          "HERPICH, CAROLINA MARCIELA",
          "BIASOTTO-GONZALEZ, D. A.",
          "POLITTI, FABIANO",
          "GOMES, CID ANDRE FIDELIS DE PAULA",
          "GLORIA, IGOR PHILLIP DOS SANTOS",
          "Amaral, Ana Paula",
          "AMARAL, MAITÊ DE FREITAS ROCHA DE SOUZA",
          "HERPICH, GRACIELA",
          "KALIL, SANDRA BUSSADORI",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2018",
        "titulo": "Combined Use of Diadynamic Currents and Manual Therapy on Myofascial Trigger Points in Patients With Shoulder Impingement Syndrome: A Randomized Controlled Trial",
        "doi": "10.1016/j.jmpt.2017.10.017",
        "periodico": "JOURNAL OF MANIPULATIVE AND PHYSIOLOGICAL THERAPEUTICS",
        "volume": "17",
        "paginas": "30072-6",
        "autores": [
          "GOMES, CID ANDRÉ FIDELIS DE PAULA",
          "DIBAI-FILHO, ALMIR VIEIRA",
          "POLITTI, F.",
          "GONZALEZ, T. O.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2017",
        "titulo": "Kinesio taping does not alter muscle torque, muscle activity or jumping performance in professional soccer players: A randomized, placebo-controlled, blind, clinical trial",
        "doi": "10.3233/bmr-160556",
        "periodico": "JOURNAL OF BACK AND MUSCULOSKELETAL REHABILITATION",
        "volume": "30",
        "paginas": "869-877",
        "autores": [
          "GLORIA, I. P. S.",
          "ARRUDA, E. E. C.",
          "LUCARELI, P. R. G.",
          "BIASOTTO-GONZALEZ, D. A.",
          "POLITTI, F.",
          "GONZALEZ, T. O.",
          "LEAL-JUNIOR, ERNESTO CESAR",
          "Gomes, CAFP",
          "HERPICH, C. M.",
          "ANTONIALLI, F. C.",
          "SERENZA, F.",
          "CALHEIRA, L. S."
        ]
      },
      {
        "ano": "2016",
        "titulo": "Correlation between temporomandibular disorder and quality of sleep in women",
        "doi": "10.1590/1980-5918.029.003.ao10",
        "periodico": "FISIOTERAPIA EM MOVIMENTO (PUCPR. IMPRESSO)",
        "volume": "29",
        "paginas": "527-532",
        "autores": [
          "TOSATO, Juliana de Paiva",
          "POLITTI, F",
          "GARCIA, MARILIA BARBOSA",
          "GONZALEZ, T. O.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2016",
        "titulo": "Is Kinesio taping better than placebo taping for improving performance during unilateral vertical jump and hop tests? Protocol study for a randomized, placebo-controlled, double-blind, clinical trial",
        "doi": "10.17784/mtprehabjournal.2016.14.357",
        "periodico": "Revista Terapia Manual",
        "volume": "14",
        "paginas": "357-",
        "autores": [
          "Glória, I.P.S.",
          "HERPICH, C. M.",
          "SERENZA, F.",
          "POLITTI, F.",
          "GONZALEZ, T. O.",
          "GOMES, C. A. F. P.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2015",
        "titulo": "Correlation of stress and muscle activity of patients with different degrees of temporomandibular disorder",
        "doi": "10.1589/jpts.27.1227",
        "periodico": "Journal of Physical Therapy Science",
        "volume": "27",
        "paginas": "1227-1231",
        "autores": [
          "TOSATO, Juliana de Paiva",
          "CARIA, PAULO HENRIQUE FERREIRA",
          "GOMES, CID ANDRE FIDELIS DE PAULA",
          "BERZIN, Fausto",
          "Politti, Fabiano",
          "GONZALEZ, T. O.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2015",
        "titulo": "ANALYSIS OF LASER THERAPY AND ASSESSMENT METHODS IN THE REHABILITATION OF TEMPOROMANDIBULAR DISORDER: A SYSTEMATIC REVIEW OF THE LITERATURE",
        "doi": "10.1589/jpts.27.295",
        "periodico": "Journal of Physical Therapy Science",
        "volume": "27",
        "paginas": "295-301",
        "autores": [
          "HERPICH, C. M.",
          "Bussadori, Sandra Kalil",
          "BIASOTTO-GONZALEZ, D. A.",
          "LEAL-JUNIOR, ERNESTO CESAR",
          "Amaral,AP",
          "TOSATO, Juliana de Paiva",
          "Gomes, CAFP",
          "Arruda, EEC",
          "El HAGE, Y.",
          "POLITTI, F.",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2015",
        "titulo": "Effects of massage therapy and occlusal splint usage on quality of life and pain in individuals with sleep bruxism: a randomized controlled trial",
        "doi": "10.1298/jjpta.Vol18_001.",
        "periodico": "Journal of Physical Therapy Science",
        "volume": "18",
        "paginas": "1-7",
        "autores": [
          "GOMES, C. A. F. P.",
          "HAJE, Y. E.",
          "AMARAL, ANA P.",
          "HERPICH, C. M.",
          "POLITTI, F.",
          "GONZALEZ, T. O.",
          "BUSSADORI, S. K.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2015",
        "titulo": "Evaluation of the immediate effect of acupuncture on pain, cervical range of motion and electromyographic activity of the upper trapezius muscle in patients with nonspecific neck pain: study protocol for a randomized controlled trial",
        "doi": "10.1186/s13063-015-0623-3",
        "periodico": "Trials (London)",
        "volume": "16",
        "paginas": "100-",
        "autores": [
          "Biasotto-Gonzalez, D.A.",
          "OLIVEIRA, C. S.",
          "AMORIM, César Ferreira",
          "GONZALEZ, T. O.",
          "Fabiano Politti"
        ]
      },
      {
        "ano": "2014",
        "titulo": "Efficacy of pre-exercise low-level laser therapy on isokinetic muscle performance in individuals with type 2 diabetes mellitus: study protocol for a randomized controlled trial",
        "doi": "10.1186/1745-6215-15-116",
        "periodico": "Trials (London)",
        "volume": "15",
        "paginas": "116-",
        "autores": [
          "GOMES, CID ANDRÉ",
          "ANTONIALLI, FERNANDA COLELLA",
          "VANIN, ADRIANE AVER",
          "DE TARSO CAMILLO DE CARVALHO, PAULO",
          "LEAL-JUNIOR, ERNESTO CESAR",
          "BIASOTTO-GONZALEZ, DANIELA APARECIDA",
          "EL-HAGE, YASMIN",
          "POLITTI, FABIANO",
          "GONZALEZ, TABAJARA DE",
          "DIBAI-FILHO, ALMIR VIEIRA",
          "DE OLIVEIRA, ADRIANO RODRIGUES",
          "FRIGERO, MARCELO"
        ]
      },
      {
        "ano": "2014",
        "titulo": "Effects of Massage Therapy and Occlusal Splint Therapy on Mandibular Range of Motion in Individuals With Temporomandibular Disorder: A Randomized Clinical Trial",
        "doi": "10.1016/j.jmpt.2013.12.007",
        "periodico": "Journal of Manipulative and Physiological Therapeutics",
        "volume": "37",
        "paginas": "164-169",
        "autores": [
          "GOMES, CID ANDRÉ FIDELIS DE PAULA",
          "POLITTI, FABIANO",
          "ANDRADE, DANIEL VENTURA",
          "DE SOUSA, DOWGLAS FERNANDO MAGALHÃES",
          "HERPICH, CAROLINA MARCIELA",
          "DIBAI-FILHO, ALMIR VIEIRA",
          "GONZALEZ, TABAJARA DE OLIVEIRA",
          "BIASOTTO-GONZALEZ, DANIELA APARECIDA"
        ]
      },
      {
        "ano": "2014",
        "titulo": "Interference of Different Types of Mastication on Static Balance in Individuals without Temporomandibular Disorder",
        "doi": "10.1298/jjpta.vol17_002",
        "periodico": "JOURNAL OF THE JAPANESE PHYSICAL THERAPY ASSOCIATION",
        "volume": "17",
        "paginas": "8-13",
        "autores": [
          "Gomes, CAFP",
          "POLITTI, F.",
          "HAJE, Y. E.",
          "SOUSA, D. F. M.",
          "AMORIM, C. F.",
          "GONZALEZ, T. O.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2014",
        "titulo": "Effectiveness of phototherapy incorporated into an exercise program for osteoarthritis of the knee: study protocol for a randomized controlled trial",
        "doi": "10.1186/1745-6215-15-221",
        "periodico": "Trials (London)",
        "volume": "15",
        "paginas": "221-228",
        "autores": [
          "COELHO, CARLY DE",
          "GARCIA, MARILIA BARBOSA",
          "DIBAI-FILHO, ALMIR VIEIRA",
          "GOMES, CID ANDRÉ",
          "LEAL-JUNIOR, ERNESTO CESAR",
          "BIASOTTO-GONZALEZ, D. A.",
          "BLEY, ANDRÉ SERRA",
          "CARVALHO, PAULO DE",
          "Politti, Fabiano",
          "GONZALEZ, T. O.",
          "DE OLIVEIRA, ADRIANO RODRIGUES",
          "FRIGERO, MARCELO"
        ]
      },
      {
        "ano": "2014",
        "titulo": "Effects of phototherapy on muscle activity and pain in individuals with temporomandibular disorder: a study protocol for a randomized controlled trial",
        "doi": "10.1186/1745-6215-15-491",
        "periodico": "Trials",
        "volume": "15",
        "paginas": "491-",
        "autores": [
          "HERPICH, C. M.",
          "Gomes, CAFP",
          "SOUSA, D.F.M.",
          "CARVALHO, PAULO DE",
          "BUSSADORI, Sandra Kalil",
          "GONZALEZ, T. O.",
          "POLITTI, F.",
          "GONZALES, D. A.B.",
          "LEAL-JUNIOR, ERNESTO CESAR",
          "Amaral,AP",
          "TOSATO, J. P.",
          "BIASOTTO-GONZALEZ, D. A.",
          "GARCIA, MARILIA BARBOSA",
          "BARBOSA, BRUNO ROBERTO",
          "HAJE, Y. E.",
          "ARRUDA, E. E. C."
        ]
      },
      {
        "ano": "2013",
        "titulo": "Head and neck posture evaluation in subjects with bruxism",
        "doi": "10.12659/MST.889257",
        "periodico": "Medical Science and Technology",
        "volume": "54",
        "paginas": "83-86",
        "autores": [
          "BIASOTTO-GONZALEZ, D. A.",
          "HERPICH, C. M.",
          "SOUSA, D.F.M.",
          "VASCONCELOS, T. M. O.",
          "Arruda, EEC",
          "GLORIA, I. P. S.",
          "Gomes, CAFP",
          "GONZALEZ, T. O.",
          "CORRÊA, J. C. F.",
          "Martins,MD"
        ]
      },
      {
        "ano": "2013",
        "titulo": "Avaliação da Qualidade de Vida através do Questionário SF-36 em um grupo de idosos submetidos a Fisioterapia em grupo",
        "doi": "",
        "periodico": "Fisioterapia Ser",
        "volume": "8",
        "paginas": "190-195",
        "autores": [
          "ALMEIDA, B. R.",
          "GONCALVES, L. H.",
          "FRIGERO, M.",
          "Gomes, CAFP",
          "OLIVEIRA, A. R.",
          "GONZALEZ, T. O.",
          "LOFFREDO, M. C. M."
        ]
      },
      {
        "ano": "2013",
        "titulo": "Effect of Facial Massage on Static Balance in Individuals with Temporomandibular Disorder - a Pilot Study",
        "doi": "10.3822/ijtmb.v6i4.208",
        "periodico": "INTERNATIONAL JOURNAL OF THERAPEUTIC MASSAGE & BODYWORK",
        "volume": "6",
        "paginas": "6-",
        "autores": [
          "Hage, YE",
          "HERPICH, C. M.",
          "SOUSA, D.F.M.",
          "Gomes, CAFP",
          "AMORIM, C. F.",
          "GONZALEZ, T. O.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2013",
        "titulo": "Effect of facial massage on static balance in individuals with temporomandibular disorder - a pilot study",
        "doi": "",
        "periodico": "International Journal of Therapeutic Massage & Bodywork: Research, Education, & Practice",
        "volume": "6",
        "paginas": "6-11",
        "autores": [
          "HAJE, Y. E.",
          "POLITTI, F.",
          "HERPICH, C. M.",
          "SOUSA, D. F. M.",
          "Gomes",
          "AMORIM, C. F.",
          "GONZALEZ, T. O.",
          "Biasotto-Gonzalez, D.A."
        ]
      },
      {
        "ano": "2013",
        "titulo": "Effect of mandibular mobilization on electromyographic signals in muscles of mastication and static balance in individuals with temporomandibular disorder: study protocol for a randomized controlled trial",
        "doi": "10.1186/1745-6215-14-316",
        "periodico": "Trials (London)",
        "volume": "14",
        "paginas": "316-",
        "autores": [
          "Glória, I.P.S.",
          "HAGE, Y. E.",
          "AMORIM, C. F.",
          "GADOTTI, I. C.",
          "GONZALEZ, T. O.",
          "BERZIN, F.",
          "BUSSADORI, S. K.",
          "GARCIA, M. B. S.",
          "BARBOSA, B. R. B.",
          "BIASOTTO-GONZALEZ, D. A.",
          "POLITTI, F.",
          "SOUSA, D. F. M.",
          "HERPICH, C. M.",
          "GOMES, C. A. F. P.",
          "MELO, N. C.",
          "SILVA, T. C.",
          "ARRUDA, E. E. C."
        ]
      },
      {
        "ano": "2013",
        "titulo": "Effect of mandibular mobilization on electromyographic signals in muscles of mastication and static balance in individuals with temporomandibular disorder: Protocol study for a randomized, controlled, blind, clinical trial",
        "doi": "10.1186/1745-6215-14-316",
        "periodico": "Trials",
        "volume": "14",
        "paginas": "317-",
        "autores": [
          "Hage, YE",
          "Arruda, EEC",
          "AMORIM, C. F.",
          "GADOTTI, Inaê Caroline",
          "GONZALEZ, T. O.",
          "BÉRZIN, F.",
          "BUSSADORI, S. K.",
          "BIASOTTO-GONZALEZ, D. A.",
          "POLITTI, F",
          "SOUSA, D.F.M.",
          "HERPICH, C. M.",
          "GLORIA, I. P. S.",
          "Gomes, CAFP",
          "Amaral,AP",
          "MELO, N. C.",
          "SILVA, T. C."
        ]
      },
      {
        "ano": "2012",
        "titulo": "ANALISE COMPARATIVA ENTRE DOIS ÂNGULOS CERVICAIS COM A OCLUSÃO EM CRIANÇAS COM E SEM DTM",
        "doi": "",
        "periodico": "Revista CEFAC (Impresso)",
        "volume": "x",
        "paginas": "xx-x",
        "autores": [
          "Costa, JM",
          "Silva, DS",
          "Gomes, CAFP",
          "Hage, YE",
          "Amaral,AP",
          "POLITTI, F",
          "GONZALEZ, T. O.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2012",
        "titulo": "Effect of the usual weight of the backpack on the body sway during quiet standing",
        "doi": "",
        "periodico": "Journal of Physical Therapy Science",
        "volume": "24",
        "paginas": "xx-xx",
        "autores": [
          "POLITTI, F",
          "GONZALEZ, T. O.",
          "Gomes",
          "AMORIM, C. F.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2012",
        "titulo": "Analysis of associations between the vertical extension of mandibular movement and different types of temporomandibular disorder",
        "doi": "",
        "periodico": "Clinical and Experimental Medical Letters",
        "volume": "53",
        "paginas": "37-41",
        "autores": [
          "Gomes, CAFP",
          "POLITTI, F",
          "GONZALEZ, T. O.",
          "Hage, YE",
          "Arruda, EEC",
          "Amaral,AP",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2012",
        "titulo": "Association between temporomandibular disorder and bruxism among children aged 5 to 11 years",
        "doi": "",
        "periodico": "Clinical and Experimental Medical Letters",
        "volume": "53",
        "paginas": "33-36",
        "autores": [
          "Costa, JM",
          "Ribeiro,R",
          "GONZALEZ, T. O.",
          "Gomes, CAFP",
          "POLITTI, F",
          "BUSSADORI, Sandra Kalil",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2012",
        "titulo": "Assessment of Occlusal Contact in Pre and Post Global Posture Re-education Treatment ? A Pilot Study",
        "doi": "",
        "periodico": "Terapia Manual",
        "volume": "50",
        "paginas": "528-532",
        "autores": [
          "BIASOTTO-GONZALEZ, D. A.",
          "SOUSA, D.F.M.",
          "HERPICH, C. M.",
          "GLORIA, I. P. S.",
          "Hage, YE",
          "BUSSADORI, Sandra Kalil",
          "CESAR, Guilherme Manna",
          "GADOTTI, Inaê Caroline",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2012",
        "titulo": "Immediate effects of mandibular mobilization on static balance in individuals with temporomandibular disorder ? pilot study",
        "doi": "",
        "periodico": "Clinical and Experimental Medical Letters",
        "volume": "53",
        "paginas": "165-169",
        "autores": [
          "Arruda, EEC",
          "Amaral, Ana Paula",
          "POLITTI, F.",
          "Hage, YE",
          "Gomes, CAFP",
          "GONZALEZ, T. O.",
          "Amorin,CT",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2012",
        "titulo": "Title: Assessment of Occlusal Contact in Pre and Post Global Posture Re-education Treatment ? A Pilot Study",
        "doi": "",
        "periodico": "Manual Therapy",
        "volume": "50",
        "paginas": "528-532",
        "autores": [
          "BIASOTTO-GONZALEZ, D. A.",
          "SOUSA, D. F. M.",
          "HERPICH, C. M.",
          "GLORIA, I. P. S.",
          "HAGE, Y.",
          "BUSSADORI, S. K.",
          "CESAR, G. M.",
          "GADOTTI, I. C.",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2012",
        "titulo": "Effect of the Usual Weight of a Backpack on Body Sway during Quiet Standing",
        "doi": "10.1589/jpts.24.1079",
        "periodico": "Journal of Physical Therapy Science",
        "volume": "24",
        "paginas": "1079-1082",
        "autores": [
          "POLITTI, F.",
          "GONZALEZ, T. O.",
          "Gomes, CAFP",
          "AMORIM, C. F.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2011",
        "titulo": "Avaliação do movimento mandibular em crianças com e sem disfunção temporomandibular.",
        "doi": "",
        "periodico": "ConScientiae Saúde (Impresso)",
        "volume": "x",
        "paginas": "xx-xxx",
        "autores": [
          "Ribeiro, BG",
          "Costa, JM",
          "Gomes, CAFP",
          "Hage, YE",
          "Arruda, EEC",
          "GONZALEZ, T. O.",
          "POLITTI, F.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2011",
        "titulo": "Follow-up Treatment in Mandible Fractures: A Case Report",
        "doi": "",
        "periodico": "Terapia Manual",
        "volume": "10",
        "paginas": "x-xx",
        "autores": [
          "BIASOTTO-GONZALEZ, D. A.",
          "Hage, YE",
          "Gomes, CAFP",
          "Amaral,AP",
          "CESAR, Guilherme Manna",
          "BUSSADORI, Sandra Kalil",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2011",
        "titulo": "Assessment of Occlusal Contact in Pre and Post Global Posture Re-education Treatment ? A Pilot Study",
        "doi": "",
        "periodico": "Terapia Manual",
        "volume": "46",
        "paginas": "98-102",
        "autores": [
          "BIASOTTO-GONZALEZ, D. A.",
          "POLITTI, F",
          "SOUSA, D.F.M.",
          "Hage, YE",
          "BUSSADORI, Sandra Kalil",
          "CESAR, Guilherme Manna",
          "GADOTTI, Inaê Caroline",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2011",
        "titulo": "Efetividade das correntes elétricas exógenas na aceleração do processo de cicatrização tecidual: revisão da literatura.",
        "doi": "",
        "periodico": "Revista Terapia Manual",
        "volume": "9",
        "paginas": "541-547",
        "autores": [
          "Carvalho, LS",
          "BIASOTTO-GONZALEZ, D. A.",
          "Politti, Fabiano",
          "Fruhauf, AMA",
          "Katsuyama, KCM",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2010",
        "titulo": "Electromyographic Study of Stomatognathic System Muscles During Chewing of Different Materials",
        "doi": "",
        "periodico": "Electromyography and Clinical Neurophysiology",
        "volume": "50",
        "paginas": "121-127",
        "autores": [
          "BIASOTTO-GONZALEZ, D. A.",
          "BÉRZIN, F.",
          "Costa, JM",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2010",
        "titulo": "Efetividade das correntes elétricas exógenas na aceleração do processo de cicatrização tecidual: revisão da literatura",
        "doi": "",
        "periodico": "Terapia Manual",
        "volume": "8",
        "paginas": "S175-S178",
        "autores": [
          "Carvalho, LS",
          "BIASOTTO-GONZALEZ, D. A.",
          "Fruhauf, AMA",
          "Katsuyama, KCM",
          "POLITTI, F",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2010",
        "titulo": "OCORRÊNCIA DE DTM E RELAÇÃO ENTRE A DOR E ABERTURA BUCAL EM INDIVÍDUOS QUE SE UTILIZAM DE MONTARIA DIARIAMENTE",
        "doi": "",
        "periodico": "Terapia Manual",
        "volume": "8",
        "paginas": "517-522",
        "autores": [
          "Silva,MM",
          "GONZALEZ, T. O.",
          "OLIVEIRA, C. S.",
          "POLITTI, F",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2010",
        "titulo": "Treino de equilíbrio em pacientes com doença de Parkinson por meio do Nintendo Wii Balance Board",
        "doi": "",
        "periodico": "Terapia Manual",
        "volume": "8",
        "paginas": "supl:S93-S96",
        "autores": [
          "dos Santos",
          "GONZALEZ, T. O.",
          "Biasotto-Gonzalez, D.A.",
          "Gomes",
          "Dumont",
          "POLITTI, F",
          "POLITTI, F."
        ]
      },
      {
        "ano": "2009",
        "titulo": "Classificação de adultos jovens pelo Índice Anamnético de Fonseca e sua relação com o sinal de EMG dos músculos da mastigação e dos valores antropométricos",
        "doi": "",
        "periodico": "Terapia Manual",
        "volume": "7",
        "paginas": "99-105",
        "autores": [
          "GONZALEZ, T. O.",
          "BÉRZIN, F."
        ]
      },
      {
        "ano": "2009",
        "titulo": "Avaliação eletromiográfica pré e pós-tratamento fisioterapêutico em pacientes com desvio ou deflexão mandibular.",
        "doi": "",
        "periodico": "Terapia Manual",
        "volume": "7",
        "paginas": "469-474",
        "autores": [
          "Silva,MM",
          "Gomes, CAFP",
          "Costa, JM",
          "GONZALEZ, T. O.",
          "BERZIN, F",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2009",
        "titulo": "Incapacidade por lombalgia em trabalhadores do setor de limpeza da Universidade de Mogi das Cruzes",
        "doi": "",
        "periodico": "Revista brasileira de ciências da saúde (IMES)",
        "volume": "VII",
        "paginas": "68-73",
        "autores": [
          "GLÓRIA, I. P. S.",
          "GLÓRIA, Igor",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2008",
        "titulo": "Correlação entre Disfunção Temporomandibular (DTM), postura e Qualidade de Vida",
        "doi": "",
        "periodico": "Revista Brasileira de Crescimento e Desenvolvimento Humano",
        "volume": "18",
        "paginas": "79-86",
        "autores": [
          "BIASOTTO, D. A.",
          "MARTINS, MD",
          "GONZALEZ, T. O.",
          "FERNANDES, KP",
          "ANDRADE,DV",
          "CORRÊA, J. C. F.",
          "BUSSADORI, SK"
        ]
      },
      {
        "ano": "2008",
        "titulo": "Avaliação da Qualidade de Vida, tipos de lesões e capacidade funcional em jovens atletas praticantes de basquete",
        "doi": "",
        "periodico": "Terapia Manual",
        "volume": "6",
        "paginas": "353-359",
        "autores": [
          "CESAR, G. M.",
          "GONZALEZ, T. O.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2008",
        "titulo": "Avaliação do efeito da acupuntura Koryo Sooji Chim no tratamento da dor em pacientes com osteoartrose",
        "doi": "",
        "periodico": "ConScientiae Saúde (Impresso)",
        "volume": "7",
        "paginas": "159-167",
        "autores": [
          "BIASOTTO-GONZALEZ, D. A.",
          "TAKAHASHI, K. M.",
          "YAMAMOTO, C. N.",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2008",
        "titulo": "Avaliação dos músculos mastigatórios de indivíduos com DTM: um estudo eletromiográfico com a mandíbula em posição postural de repouso.",
        "doi": "",
        "periodico": "Brazilian Oral Research (Impresso)",
        "volume": "22",
        "paginas": "291-292",
        "autores": [
          "Costa, JM",
          "Martins,MD",
          "CORRÊA, J. C. F.",
          "GONZALEZ, T. O.",
          "BERZIN, F",
          "ANDRADE, D. V.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2008",
        "titulo": "Relação do Ângulo Q com a dor femoropatelar e variação da atividade elétrica do músculo vasto medial oblíquo: Análise por eletromiografia.",
        "doi": "",
        "periodico": "Revista brasileira de ciências da saúde (IMES)",
        "volume": "VI",
        "paginas": "32-38",
        "autores": [
          "MIRANDA, M.F.",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2008",
        "titulo": "P076 Comparative electromyography analysis in TMD patients before and after physiotherapeutic treatment",
        "doi": "10.1016/s0966-6362(08)70145-0",
        "periodico": "Gait & Posture",
        "volume": "28",
        "paginas": "S95-S96",
        "autores": [
          "BIASOTTO GONZALEZ, D.A.",
          "OLIVEIRA, C.S.",
          "GONZALEZ, T.",
          "CÉSAR, G.M.",
          "BUSSADORI, S.K.",
          "BERZIN, F."
        ]
      },
      {
        "ano": "2007",
        "titulo": "Prevalência de sinais e sintomas de disfunção temporomandibular em mulheres com cervicalgia e lombalgia",
        "doi": "",
        "periodico": "Arquivos Médicos do ABC",
        "volume": "32",
        "paginas": "20-22",
        "autores": [
          "TOSATO, J. P.",
          "GONZALEZ, T. O.",
          "SAMPAIO, LMM",
          "CORRÊA, J. C. F.",
          "BIASOTTO, D. A."
        ]
      },
      {
        "ano": "2006",
        "titulo": "Estudo Transversal da Qualidade de Vida e Capacidade Funcional dos Jovens Atletas de Basquetebol",
        "doi": "",
        "periodico": "Treinamento Desportivo",
        "volume": "7",
        "paginas": "58-61",
        "autores": [
          "CESAR, G. M.",
          "BIASOTTO-GONZALEZ, D. A.",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2006",
        "titulo": "Terapias Manuais na ADM de Tornozelo",
        "doi": "",
        "periodico": "Revista brasileira de ciências da saúde (IMES)",
        "volume": "1",
        "paginas": "26-30",
        "autores": [
          "SILVA, E. P.",
          "BIASOTTO-GONZALEZ, D. A.",
          "GONZALEZ, T. O."
        ]
      },
      {
        "ano": "2006",
        "titulo": "Postura cervical e classes oclusais em bruxistas e indivíduos assintomáticos de DTM",
        "doi": "",
        "periodico": "Revista de Odontologia da UNICID",
        "volume": "18",
        "paginas": "155-160",
        "autores": [
          "CESAR, G. M.",
          "TOSATO, J. P.",
          "GONZALEZ, T. O.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2006",
        "titulo": "Análise descritiva dos sintomas de Disfunção Temporomandibular",
        "doi": "",
        "periodico": "Revista Brasileira de Odontologia",
        "volume": "63",
        "paginas": "167-170",
        "autores": [
          "CESAR, G. M.",
          "TOSATO, J. P.",
          "BIASOTTO-GONZALEZ, D. A.",
          "GONZALEZ, T. O.",
          "CARIA, P. H. F."
        ]
      },
      {
        "ano": "2006",
        "titulo": "Correlação entre estresse e dor em pilotos de helicópteros do Grupamento de Rádio Patrulha Aérea da Polícia Militar na cidade de São Paulo",
        "doi": "",
        "periodico": "Fisioterapia Brasil",
        "volume": "7",
        "paginas": "44-48",
        "autores": [
          "DINIZ, K. C.",
          "GONZALEZ, T. O.",
          "ARANTES, J. P.",
          "PANHOSA, E. L. S."
        ]
      },
      {
        "ano": "2005",
        "titulo": "Presença de desconforto na articulação temporomandibular relacionado ao uso de chupeta",
        "doi": "",
        "periodico": "Revista Brasileira de Otorrinolaringologia (Impresso)",
        "volume": "71",
        "paginas": "365-368",
        "autores": [
          "TOSATO, J. P.",
          "GONZALEZ, T. O.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2004",
        "titulo": "Physiotherapy assessment of temporomandibular joint in pregnant women and prevalence of dysfunctional signs and symptons",
        "doi": "",
        "periodico": "Brazilian Journal Of Oral Science",
        "volume": "3",
        "paginas": "522-525",
        "autores": [
          "TOSATO, J. P.",
          "GONZALEZ, T. O.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "2004",
        "titulo": "Symptomatology of the temporomandibular dysfunction related to parafunctional habits in 3 to 7 years old children",
        "doi": "",
        "periodico": "Cranio. Journal of Craniomandibular Practice",
        "volume": "",
        "paginas": "-",
        "autores": [
          "TOSATO, J. P.",
          "GONZALEZ, T. O.",
          "BIASOTTO-GONZALEZ, D. A."
        ]
      },
      {
        "ano": "1998",
        "titulo": "A integração entre a fisioterapia e a ortodontia nas desordens craniomandibulares",
        "doi": "",
        "periodico": "Revista Brasileira de Fisioterapia",
        "volume": "3",
        "paginas": "64-",
        "autores": [
          "GONZALEZ, T. O.",
          "BIASOTTO, D. A.",
          "BÉRZIN, F."
        ]
      },
      {
        "ano": "1998",
        "titulo": "Análise dos parâmetros isocinéticos em indivíduos com reconstrução do ligamento cruzado anterior - Follow-up de 2 anos",
        "doi": "",
        "periodico": "Revista Brasileira de Fisioterapia",
        "volume": "3",
        "paginas": "94-",
        "autores": [
          "GONZALEZ, T. O.",
          "GUARATINI, M. I.",
          "SHIGUEMOTO, G. E.",
          "CASTRO, C. E. S."
        ]
      },
      {
        "ano": "1998",
        "titulo": "Trainig Delayed isokinetics in the surgical reconstruction of the anterior cruciate ligament: A case study",
        "doi": "",
        "periodico": "Revista Brasileira de Fisioterapia",
        "volume": "3",
        "paginas": "109-",
        "autores": [
          "GONZALEZ, T. O.",
          "GUARATINI, M. I.",
          "CASTRO, C. E. S."
        ]
      },
      {
        "ano": "1998",
        "titulo": "Estudo da propriocepção e cinestesia em sujeitos com lesão unilateral do ligamento cruzado anterior",
        "doi": "",
        "periodico": "Revista Brasileira de Fisioterapia",
        "volume": "3",
        "paginas": "110-",
        "autores": [
          "GONZALEZ, T. O.",
          "GUARATINI, M. I.",
          "SHIGUEMOTO, G. E."
        ]
      },
      {
        "ano": "1988",
        "titulo": "O efeito do treinamento isocinético tardio na performance muscular do joelho após menisectomia medial parcial",
        "doi": "",
        "periodico": "Revista Brasileira de Fisioterapia",
        "volume": "3",
        "paginas": "59-",
        "autores": [
          "GONZALEZ, T. O.",
          "GUARATINI, M. I.",
          "OLIVEIRA, A. S.",
          "CASTRO, C. E. S."
        ]
      }
    ],
    "softwares": [
      {
        "titulo": "SAE AP",
        "ano": "2026",
        "finalidade": "Avaliação de enfermagem na atenção básica",
        "plataforma": "Dart"
      },
      {
        "titulo": "Roteiro Informatizado de Inspeção Sanitária em Serviços de Urgência e Emergência - Riiue",
        "ano": "2025",
        "finalidade": "Facilitar e organizar as inspeções sanitárias em serviços de Urgência e Emergência",
        "plataforma": "HTML; JAVA SCRIPT; PHP; MYSQL; CSS; AJAX"
      },
      {
        "titulo": "Imuno Match ? jogo de memória",
        "ano": "2025",
        "finalidade": "Tecnologia educacional para prevenção de doenças imunopreveníveis Instituição",
        "plataforma": "C#"
      },
      {
        "titulo": "Bingo dos Ditongos",
        "ano": "2025",
        "finalidade": "Proporcionar ao aluno o aprendizado de ditongos, criar condições pedagógicas que favoreçam a compreensão dessas estruturas fonológicas e sua aplicação no processo de leitura e escrita.",
        "plataforma": "C#"
      },
      {
        "titulo": "QualyLife",
        "ano": "2024",
        "finalidade": "Utilização rápida de escalas de Avaliação em Saúde",
        "plataforma": "Outros"
      }
    ],
    "patentes": [],
    "orientacoes_concluidas": [
      {
        "tipo": "Mestrado",
        "titulo": "A USABILIDADE DE UM DISPOSITIVO DE AUXÍLIO PARA REALIZAÇÃO DE LIBERAÇÃO MIOFASCIAL POR PROFISSIONAIS FISIOTERAPEUTAS",
        "ano": "2023",
        "orientado": "Tathiane Nayara Oliveira Rocha",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "CONSTRUÇÃO DE UM APLICATIVO MÓVEL PARA SISTEMATIZAÇÃO DA ASSISTÊNCIA DE ENFERMAGEM NO ÂMBITO DA ATENÇÃO PRIMÁRIA",
        "ano": "2026",
        "orientado": "Renato Moreno do Amaral",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Mestrado",
        "titulo": "CONSTRUÇÃO E VALIDAÇÃO DE DISPOSITIVO AUXILIAR PARA A MÃO DO TERAPEUTA NA REALIZAÇÃO DE TÉCNICAS DE LIBERAÇÃO MIOFASCIAL",
        "ano": "2025",
        "orientado": "Tathiane Nayara de Oliveira Rocha",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Correlação entre a avaliação clínica fonoaudiológica e eletromiográfica dos músculos masseteres",
        "ano": "2002",
        "orientado": "Daiana Cristina Biasotto",
        "instituicao": "Universidade de São Paulo"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise da marcha na pré e pós intervenção com o método Kabat no Parkinsonismo",
        "ano": "2001",
        "orientado": "Marília Campos Carvalho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação da pinça, preensão e força palmar em pacientes acometidos por AVC",
        "ano": "2001",
        "orientado": "Carly de Faria Coelho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Eletroestimulação diafragmática transcutânea e Threshould em indivíduos normais: Estudo comparativo",
        "ano": "2001",
        "orientado": "Gisele Rossi",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Estudo transversal da prevalência de dor em crianças de 7 a 12 anos da classe média/média alta da cidade de São Paulo",
        "ano": "2001",
        "orientado": "Carina Elias Baron",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação da força de preensão de trabalhadores de um setor de laminação de capacetes",
        "ano": "2001",
        "orientado": "Camila de Camargo Barros",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Esforço de preensão palmar máxima da mão dominante e não dominante de laminadores durante um dia de trabalho",
        "ano": "2001",
        "orientado": "Camila de Camargo Barros",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação fisioterapêutica da articulação temporomandibular de mulheres grávidas e prevalência de sinais e ou sintomas de disfunção",
        "ano": "2003",
        "orientado": "Juliana de Paiva Tosato",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Prevalência de dor no ombro e seu comportamento em trabalhadores de uma empresa de confecção",
        "ano": "2005",
        "orientado": "Beatriz Cecília da Cruz Seara",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Distúrbios osteomusculares relacionados ao trabalho em motoristas de caminhão",
        "ano": "2005",
        "orientado": "Luis Felipe Perez da Guarda",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação do efeito da acupuntura Koryo Sooji no quadro doloroso da osteoartrose",
        "ano": "2005",
        "orientado": "Clarissa Naomi Yamamoto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Comparação das tabelas posturais, OWAS, RULA e RARME em carregadores de hortifrutigranjeiros do centro de distribuição de Mogi das Cruzes",
        "ano": "2004",
        "orientado": "Hamilton de Oliveira Lisboa",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Correlação entre estresse ocupacional e dor musculoesquelética em uma empresa do setor elétrico",
        "ano": "2004",
        "orientado": "Ana Carolina Pimentel Pimentel",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Prevalência das desordens temporomandibulares em mulheres portadoras dos sintomas da Síndrome Pré-menstrual",
        "ano": "2004",
        "orientado": "Fábio Luiz de Souza Saccardo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Prevalência de dor e lesão em jovens atletas praticantes de basquete e avaliação da qualidade de vida",
        "ano": "2005",
        "orientado": "Quilherme Manna Cesar",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Prevalência de lesões musculares em  jogadores de futebol de finais de semana",
        "ano": "2007",
        "orientado": "Cristhian Thurler Dália Novais",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "O papel do alongamento pré e pós atividade física na prevenção de lesão e dor muscular: Revisão da literatura",
        "ano": "2007",
        "orientado": "Rodrigo Machado da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Estudo comparativo do crioalongamento e do alongamento contração relaxamento dos isquiotibiais no ganho de ADM de flexão de tronco em indivíduos sedentários",
        "ano": "2007",
        "orientado": "Juliana Monteiro Lobato",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Incapacidade por Lombalgia em trabalhadores do setor de limpeza da Universidade de Mogi das Cruzes",
        "ano": "2008",
        "orientado": "Igor Phillip dos Santos Glória",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Ativação elétrica dos músculos tibiais anteriores em deficientes visuais e não deficientes durante teste de equilíbrio",
        "ano": "2008",
        "orientado": "Rodrigo Pereira Luiz",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Efetividade das correntes elétricas exógenas na aceleração do processo de cicatrização tecidual: Revisão da Literatura",
        "ano": "2009",
        "orientado": "Leandro Silva de Carvalho",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Prevalência de Dor musculoesquelética em uma equipe de enfermagem",
        "ano": "2008",
        "orientado": "Ana Paula S. Mota, Juliane de C. Pereira e Renata C. Mendes",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Impacto na Qualidade de Vida de indivíduos com fibromialgia que realizam terapia em grupo e que não realizam",
        "ano": "2008",
        "orientado": "Ewerton Luiz Pereira e Ronaldo Kuroba Ferreira Neto",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Influência dos Exercícios físicos na variação da pressão arterial de indivíduos de meia idade e idosos: Revisão da Literatura",
        "ano": "2008",
        "orientado": "José R. Lavoura Neto, Marcelo M. Santos e Anderson C. Santos",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise postural relacionada com a Prevalência de algias em cabeleireiros do Alto Tietê",
        "ano": "2008",
        "orientado": "Amanda Hamaue e Thais Regina Celestino",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Doenças do Sistema Osteomuscular em profissionais da Saúde",
        "ano": "2008",
        "orientado": "Paulo de Souza",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação da Qualidade de Vida dos Pacientes da Ortopedia da Clínica de Fisioterapia/UMC",
        "ano": "2008",
        "orientado": "Adriano P. Povh, José R. Ferreira Lima e Renato da S. Costa",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Parâmetros da Estimulação Elétrica Funcional na hemiplegia pós acidente vascular encefálico: Revisão Sistemática da Literatura",
        "ano": "2008",
        "orientado": "Karina Mina hayashi e Juliana do N. Figueiredo",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise Comparativa entre os questionários Fonseca e RDC em pacientes com Disfunções Temporomandibulares",
        "ano": "2008",
        "orientado": "Dayana G. Benajes, Greicy K. Siqueira e Michelle S. Neves",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Os efeitos do Programa de Ginástica Laboral em operários de uma Indústria de peças automobilísticas",
        "ano": "2008",
        "orientado": "Karina C. André, Ana Paula C. Zillig e Cíntia H. Yuki",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Ginástica Laboral: Panorama atual da visão empresarial",
        "ano": "2007",
        "orientado": "Camila Trevizan de Souza Gonçalves",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Tratamento fisioterapêutico para escoliose: Revisão da Literatura",
        "ano": "2007",
        "orientado": "Tatiane de Fátima Ferreira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Atuação da terapia com Laser de baixa potência nas lesões subcutâneas: Revisão Bibliográfica",
        "ano": "2007",
        "orientado": "Marcelo dos Passos Miyatake",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Influência do posicionamento do tornozelo na ativação Mioelétrica do Músculo Vastus Medialis Obliquos durante a extensão do Joelho",
        "ano": "2006",
        "orientado": "Guilherme Manna Cesar",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Estudo da Qualidade de Vida dos Pacientes Ortopédicos da Clínica de Fisioterapia da Universidade de Mogi das Cruzes por meio do Quetionário SF-36",
        "ano": "2006",
        "orientado": "Adyja Maria Braga dos Santos e Sabrina Franco de Souza",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Prevalência de Síndrome do Ombro Doloroso associada a carga horária de treinamentos em arremessadores de Beisebol",
        "ano": "2006",
        "orientado": "Alexandre LT Fonseca, Karine LT Fonseca e Fábio Kobayashi",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Estudo transversal do relato da Qualidade de Vida dos Pacientes com Fibromialgia atendidos na Clínica Escola da Universidade de Mogi das Cruzes",
        "ano": "2006",
        "orientado": "Isabella Pinedo Simões",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Prevalência de dor no ombro e seu comportamento em trabalhadores de uma empresa de confecção",
        "ano": "2005",
        "orientado": "Beatriz Cecília C. Seara e Cristiano Goulart Pereira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Aterações posturais em amputados de MMII: um estudo comparativo entre indivíduos protetizados e não, com diferentes níveis de amputação",
        "ano": "2003",
        "orientado": "Luciana Martins Rosa e Renata R. Oliveira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Estudo da Prevalência de dor em carteiros da cidade de Mogi das Cruzes",
        "ano": "2003",
        "orientado": "Lídia Ferreira de Souza e Denise dos Reis Vieira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "As interferências da escoliose na Qualidade de Vida dos escolares",
        "ano": "2003",
        "orientado": "Annielle C de A Feital, Regilaine Ap Soares e Rute R Andrade",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Avaliação da preensão palmar em indivíduos portadores de Hanseníase",
        "ano": "2003",
        "orientado": "Janete H Nakashima e Carolina P Takikawa",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Satisfação do paciente com lombalgia submetido à Fisioterapia convencional comparado ao modelo de Escola de Postura",
        "ano": "2009",
        "orientado": "Izabel Carolina Silva Sousa",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Comparação entre umprogram de Escola de Postura e fisioterapia convencional sobre as incapacidades de pacientes com lombalgia",
        "ano": "2009",
        "orientado": "Renata Pinheiro Medeiros",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Fisioterapia no tratamento da Gota Úrica: Revisão da Literatura",
        "ano": "2009",
        "orientado": "Robson Cunha Pereira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Relação do ângulo Q com a dor femoropatelar e variação da atividade elétrica do músculo vasto medial oblíquo: Análise por eltromiografia",
        "ano": "2008",
        "orientado": "Márcio Ferreira Miranda",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Influência da Kinesio Taping no músculo Reto Femoral na performance do Hop Test em Indivíduos Sedentários",
        "ano": "2013",
        "orientado": "Marco Antônio Aziz",
        "instituicao": "Universidade Nove de Julho"
      },
      {
        "tipo": "Outras",
        "titulo": "Estudo transversal da prevalência de dor ou desconforto temporomandibular em idosos",
        "ano": "2012",
        "orientado": "Aline Marina Alves Fruhauf",
        "instituicao": "Universidade Nove de Julho"
      },
      {
        "tipo": "Outras",
        "titulo": "Estudo transversal da proporção do sinal eletromiográfico dos músculos Masseter e Temporal de indivíduos com e sem DTM",
        "ano": "2011",
        "orientado": "Diene Oliveira Cruz",
        "instituicao": "Universidade Nove de Julho"
      },
      {
        "tipo": "Outras",
        "titulo": "Comparação das queixas de dores musculoesqueléticas, qualidade de vida e acesso aos serviços de saúde entre portadores de deficiência auditiva e ouvintes.",
        "ano": "2023",
        "orientado": "Lorrany Souza da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Comparação das queixas de dores musculoesqueléticas, qualidade de vida e acesso aos serviços de saúde entre portadores de deficiência auditiva e ouvintes",
        "ano": "2024",
        "orientado": "Lorrany Souza Guimarães",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Incidência de dores e lesões em jogadores de e-Sports",
        "ano": "2024",
        "orientado": "Leonardo Queiroz de Oliveira",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "BENEFÍCIOS DA TERAPIA DE LIBERAÇÃO MIOFASCIAL EM PRATICANTES DE ATIVIDADES FÍSICAS",
        "ano": "2024",
        "orientado": "Arthur da Costa Cordeiro",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Prevalência de Cervicalgia pelo uso de telas em acadêmicos do curso de fisioterapia",
        "ano": "2025",
        "orientado": "Gabriela Polli de Freitas",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Correlação das quedas em idosos com a capacidade física e o medo de cair: Estudo transversal",
        "ano": "2025",
        "orientado": "Jéssica Ferreira Reisinger",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Intervenções Fisioterapêuticas na recuperação de distensões musculares causadas durante a prática de esportes: Revisão Integrativa",
        "ano": "2025",
        "orientado": "Thalia de Castro Almeida",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "A INFLUÊNCIA DA PRÁTICA DE BASQUETE ADAPTADO NA QUALIDADE DE VIDA DE CADEIRANTES",
        "ano": "2025",
        "orientado": "Leandra Letícia Lemes Teodoro da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Análise da correlação entre qualidade do sono, catastrofização e dor crônica - Estudo Transversal",
        "ano": "2025",
        "orientado": "Hisao Dias Taniguti",
        "instituicao": "Universidade de Mogi das Cruzes"
      },
      {
        "tipo": "Outras",
        "titulo": "Abordagens fisioterapêuticas no tratamento da síndrome da dor patelofemoral: uma revisão de literatura.",
        "ano": "2025",
        "orientado": "Estefanie Martins da Silva",
        "instituicao": "Universidade de Mogi das Cruzes"
      }
    ],
    "orientacoes_andamento": []
  }
};

var DEFAULT_PROFILE = SAMPLE_PROFILES["fabiano"];

if (typeof window !== "undefined") {
  window.SAMPLE_PROFILES = SAMPLE_PROFILES;
  window.DEFAULT_PROFILE = DEFAULT_PROFILE;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { SAMPLE_PROFILES, DEFAULT_PROFILE };
}

