export const OMA = [
  {
    "name": "OMA - 01-rat-proteins",
    "slug": "OMA_01-rat-proteins",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find all Rattus norvegicus proteins present in OMA RDF database.",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\n\nSELECT ?protein ?OMA_link\nWHERE {\n    ?protein a orth:Protein ;\n        orth:organism ?organism .\n    ?organism obo:RO_0002162 ?taxon . # in taxon\n    ?taxon up:scientificName 'Rattus norvegicus' .\n    ?protein rdfs:seeAlso ?OMA_link .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "IF"
    ],
    "category": "sib-swiss OMA"
  },
  {
    "name": "OMA - 02-all-species",
    "slug": "OMA_02-all-species",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Which species are available on OMA database and their scientific names?",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?species ?sciname\nWHERE {\n    ?species a up:Taxon ;\n        up:scientificName ?sciname ;\n        up:rank up:Species .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "IF"
    ],
    "category": "sib-swiss OMA"
  },
  {
    "name": "OMA - 03-ins-encoded-proteins",
    "slug": "OMA_03-ins-encoded-proteins",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve all proteins in OMA that is encoded by the INS gene and their mnemonics and evidence types from Uniprot database (federated query).",
    "context": null,
    "inidces": [],
    "query": "PREFIX lscr: <http://purl.org/lscr#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?proteinOMA ?species ?mnemonic ?evidenceType ?UniProt_URI\nWHERE {\n    ?proteinOMA a orth:Protein ;\n        orth:organism/obo:RO_0002162/up:scientificName ?species ;\n        rdfs:label 'INS' .\n    ?proteinOMA lscr:xrefUniprot ?UniProt_URI .\n    # Search the INS gene mnemonics and evidence types from Uniprot database\n    SERVICE <https://sparql.uniprot.org/sparql> {\n        ?UniProt_URI up:mnemonic ?mnemonic ;\n            up:existence/rdfs:label ?evidenceType.\n    }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "SERVICE",
      "DISTINCT",
      "FROM",
      "URI",
      "IF"
    ],
    "category": "sib-swiss OMA"
  },
  {
    "name": "OMA - 04-orthologs-of-ensembl-gene",
    "slug": "OMA_04-orthologs-of-ensembl-gene",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve all genes that are orthologous to ENSLACG00000002497 Ensembl gene (identifier)",
    "context": null,
    "inidces": [],
    "query": "PREFIX ensembl: <http://rdf.ebi.ac.uk/resource/ensembl/>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX sio: <http://semanticscience.org/resource/>\n\nSELECT ?protein2 ?OMA_LINK\nWHERE {\n    # The three that contains Orthologs. The leafs are proteins.\n    # This graph pattern defines the relationship protein1 is Orthologs to protein2\n    ?cluster a orth:OrthologsCluster ;\n        orth:hasHomologousMember ?node1 ;\n        orth:hasHomologousMember ?node2 .\n    ?node2 orth:hasHomologousMember* ?protein2 .\n    ?node1 orth:hasHomologousMember* ?protein1 .\n\n    # Specify the protein to look for its orthologs\n    ?protein1 sio:SIO_010079/lscr:xrefEnsemblGene ensembl:ENSLACG00000002497 .\n\n    # The OMA link to the second protein\n    ?protein2 rdfs:seeAlso ?OMA_LINK .\n\n    filter(?node1 != ?node2)\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER",
      "GRAPH",
      "IF",
      "CONTAINS"
    ],
    "category": "sib-swiss OMA"
  },
  {
    "name": "OMA - 05-paralogs-of-ensembl-gene",
    "slug": "OMA_05-paralogs-of-ensembl-gene",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve all genes that are paralogous to ENSG00000244734 Ensembl gene (identifier).",
    "context": null,
    "inidces": [],
    "query": "PREFIX ensembl: <http://rdf.ebi.ac.uk/resource/ensembl/>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX sio: <http://semanticscience.org/resource/>\n\nSELECT ?protein2 ?OMA_LINK\nWHERE {\n    # The three that contains paralogs. The leafs are proteins.\n    # This graph pattern defines the relationship protein1 is paralogous to protein2\n    ?cluster a orth:ParalogsCluster ;\n        orth:hasHomologousMember ?node1 ;\n        orth:hasHomologousMember ?node2 .\n    ?node2 orth:hasHomologousMember* ?protein2 .\n    ?node1 orth:hasHomologousMember* ?protein1 .\n\n    # Specify the protein to look for its paralogs\n    ?protein1 sio:SIO_010079/lscr:xrefEnsemblGene ensembl:ENSG00000244734 .\n\n    # The OMA link to the second protein\n    ?protein2 rdfs:seeAlso ?OMA_LINK .\n\n    FILTER(?node1 != ?node2)\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER",
      "GRAPH",
      "IF",
      "CONTAINS"
    ],
    "category": "sib-swiss OMA"
  },
  {
    "name": "OMA - 06-paralogs-with-uniprot-xrefs",
    "slug": "OMA_06-paralogs-with-uniprot-xrefs",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve all genes that are paralogous to HUMAN00529 OMA protein (identifier) and their cross-reference links to OMA and Uniprot.",
    "context": null,
    "inidces": [],
    "query": "PREFIX dc: <http://purl.org/dc/terms/>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX orth: <http://purl.org/net/orth#>\n\nSELECT ?protein2 ?Uniprot_link\nWHERE {\n    ?cluster a orth:ParalogsCluster ;\n        orth:hasHomologousMember ?node1 ;\n        orth:hasHomologousMember ?node2 .\n    ?node2 orth:hasHomologousMember* ?protein2 .\n    ?node1 orth:hasHomologousMember* ?protein1 .\n    ?protein1 a orth:Protein ;\n        dc:identifier 'HUMAN00529'.\n    ?protein2 a orth:Protein ;\n        lscr:xrefUniprot ?Uniprot_link .\n    filter(?node1 != ?node2)\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER",
      "IF"
    ],
    "category": "sib-swiss OMA"
  },
  {
    "name": "OMA - 07-orthologs-with-uniprot-xrefs",
    "slug": "OMA_07-orthologs-with-uniprot-xrefs",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve all genes that are orthologous to HUMAN22169 OMA protein (identifier) and their cross-reference links to OMA and Uniprot.",
    "context": null,
    "inidces": [],
    "query": "PREFIX dc: <http://purl.org/dc/terms/>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX orth: <http://purl.org/net/orth#>\n\nSELECT ?protein2 ?Uniprot_link\nWHERE {\n    ?cluster a orth:OrthologsCluster ;\n        orth:hasHomologousMember ?node1 ;\n        orth:hasHomologousMember ?node2 .\n    ?node2 orth:hasHomologousMember* ?protein2 .\n    ?node1 orth:hasHomologousMember* ?protein1 .\n    ?protein1 a orth:Protein ;\n        dc:identifier 'HUMAN22169' .\n    ?protein2 a orth:Protein ;\n        lscr:xrefUniprot ?Uniprot_link .\n    FILTER(?node1 != ?node2)\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER",
      "IF"
    ],
    "category": "sib-swiss OMA"
  },
  {
    "name": "OMA - 08-rabbit-apoci-orthologs",
    "slug": "OMA_08-rabbit-apoci-orthologs",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve all genes per species that are orthologous to Rabbit's APOCI or APOC1 gene and their cross-reference links to OMA and Uniprot including the corresponding Ensembl gene identifier.",
    "context": null,
    "inidces": [],
    "query": "PREFIX dc: <http://purl.org/dc/terms/>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX sio: <http://semanticscience.org/resource/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein1 ?protein2 ?geneName2 ?species2 ?Prot2_uniprot ?prot2_ensemblGeneId\nWHERE {\n    ?cluster a orth:OrthologsCluster ;\n        orth:hasHomologousMember ?node1 ;\n        orth:hasHomologousMember ?node2 .\n    ?node2 orth:hasHomologousMember* ?protein2 .\n    ?node1 orth:hasHomologousMember* ?protein1 .\n    ?protein1 a orth:Protein ;\n        orth:organism/obo:RO_0002162/up:scientificName 'Oryctolagus cuniculus';\n        rdfs:label 'APOCI' .\n    ?protein2 a orth:Protein ;\n        lscr:xrefUniprot ?Prot2_uniprot ;\n        sio:SIO_010079/lscr:xrefEnsemblGene/dc:identifier ?prot2_ensemblGeneId ;\n        rdfs:label ?geneName2 ;\n        orth:organism/obo:RO_0002162/up:scientificName ?species2.\n    FILTER(?node1 != ?node2)\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER",
      "IF"
    ],
    "category": "sib-swiss OMA"
  },
  {
    "name": "OMA - 09-rabbit-orthologs-of-mouse-homoglobinY",
    "slug": "OMA_09-rabbit-orthologs-of-mouse-homoglobinY",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve all Rabbit's proteins encoded by genes that are orthologous to Mouses's hemoglobin Y gene and their cross-reference links to Uniprot.",
    "context": null,
    "inidces": [],
    "query": "PREFIX lscr: <http://purl.org/lscr#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?MOUSE_PROTEIN ?RABIT_PROTEIN ?MOUSE_UNIPROT_XREF ?RABIT_UNIPROT_XREF\nWHERE {\n    ?cluster a orth:OrthologsCluster ;\n        orth:hasHomologousMember ?node1 ;\n        orth:hasHomologousMember ?node2 .\n    ?node2 orth:hasHomologousMember* ?RABIT_PROTEIN .\n    ?node1 orth:hasHomologousMember* ?MOUSE_PROTEIN .\n    ?MOUSE_PROTEIN a orth:Protein .\n    ?MOUSE_PROTEIN  orth:organism/obo:RO_0002162/up:scientificName 'Mus musculus' ;\n        rdfs:label 'HBB-Y';\n        lscr:xrefUniprot ?MOUSE_UNIPROT_XREF .\n    ?RABIT_PROTEIN a orth:Protein .\n    ?RABIT_PROTEIN orth:organism/obo:RO_0002162/up:scientificName 'Oryctolagus cuniculus' .\n    ?RABIT_PROTEIN lscr:xrefUniprot ?RABIT_UNIPROT_XREF.\n    FILTER(?node1 != ?node2)\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER",
      "DISTINCT",
      "IF"
    ],
    "category": "sib-swiss OMA"
  },
  {
    "name": "OMA - 10-paralogs-in-human-of-hbb",
    "slug": "OMA_10-paralogs-in-human-of-hbb",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve all human proteins that are paralogous to the HBB gene and their UniProt cross-references.",
    "context": null,
    "inidces": [],
    "query": "PREFIX lscr: <http://purl.org/lscr#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?PROTEIN_HBB ?IS_PARALOGOUS_TO_PROTEIN ?PARALOG_GENE_LABEL ?HBB_UNIPROT_XREF ?PARALOG_UNIPROT_XREF\nWHERE {\n    ?cluster a orth:OrthologsCluster ;\n        orth:hasHomologousMember ?node1 ;\n        orth:hasHomologousMember ?node2 .\n    ?node2 orth:hasHomologousMember* ?PROTEIN_HBB .\n    ?node1 orth:hasHomologousMember* ?IS_PARALOGOUS_TO_PROTEIN .\n    ?PROTEIN_HBB a orth:Protein ;\n        orth:organism/obo:RO_0002162/up:scientificName 'Homo sapiens' ;\n        rdfs:label 'HBB';\n        lscr:xrefUniprot ?HBB_UNIPROT_XREF .\n    ?IS_PARALOGOUS_TO_PROTEIN a orth:Protein ;\n        orth:organism/obo:RO_0002162/up:scientificName 'Homo sapiens' ;\n        lscr:xrefUniprot ?PARALOG_UNIPROT_XREF ;\n        rdfs:label ?PARALOG_GENE_LABEL .\n    FILTER(?node1 != ?node2)\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER",
      "DISTINCT",
      "IF"
    ],
    "category": "sib-swiss OMA"
  },
  {
    "name": "OMA - 11-percentage-of-proteins-with-paralogs",
    "slug": "OMA_11-percentage-of-proteins-with-paralogs",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "The percentage of proteins in Drosophila melanogaster that has at least one paralogous sequence (protein).",
    "context": null,
    "inidces": [],
    "query": "PREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT (((xsd:float(?num_paralogy)*100)/xsd:float(?total)) as ?result)\nWHERE {\n    {\n        SELECT (count(distinct ?PROTEIN) as ?num_paralogy )\n        WHERE {\n            ?cluster a orth:ParalogsCluster.\n            ?cluster orth:hasHomologousMember ?node1.\n            ?cluster orth:hasHomologousMember ?node2.\n            ?node2 orth:hasHomologousMember* ?PROTEIN.\n            ?node1 orth:hasHomologousMember* ?IS_PARALOGOUS_TO_PROTEIN.\n            ?PROTEIN a orth:Protein.\n            ?PROTEIN orth:organism/obo:RO_0002162/up:scientificName ?species.\n            ?IS_PARALOGOUS_TO_PROTEIN a orth:Protein.\n            ?IS_PARALOGOUS_TO_PROTEIN orth:organism/obo:RO_0002162/up:scientificName ?species .\n            values(?species ){( 'Drosophila melanogaster' )}\n            filter(?node1 != ?node2)\n        }\n    }\n    {\n        SELECT (count(distinct ?protein_total) as ?total)\n            WHERE {\n               ?protein_total a orth:Protein .\n               ?protein_total orth:organism/obo:RO_0002162/up:scientificName ?species .\n               values(?species ){( 'Drosophila melanogaster' )}\n            }\n    }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER",
      "VALUES",
      "DISTINCT",
      "IF",
      "COUNT"
    ],
    "category": "sib-swiss OMA"
  },
  {
    "name": "OMA - 12-orthologs-between-two-species",
    "slug": "OMA_12-orthologs-between-two-species",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve all orthologs between mouse and rabbit, together with their HOG id",
    "context": null,
    "inidces": [],
    "query": "PREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?MOUSE_PROTEIN ?RABIT_PROTEIN ?HOG\nWHERE {\n    ?HOG a orth:OrthologsCluster ;\n        orth:hasHomologousMember ?node1 ;\n        orth:hasHomologousMember ?node2 .\n    ?node2 orth:hasHomologousMember* ?RABIT_PROTEIN .\n    ?node1 orth:hasHomologousMember* ?MOUSE_PROTEIN .\n    ?MOUSE_PROTEIN a orth:Protein ;\n        orth:organism/obo:RO_0002162/up:scientificName 'Mus musculus' .\n    ?RABIT_PROTEIN a orth:Protein ;\n        orth:organism/obo:RO_0002162/up:scientificName 'Oryctolagus cuniculus' .\n    FILTER(?node1 != ?node2)\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER",
      "DISTINCT",
      "IF"
    ],
    "category": "sib-swiss OMA"
  },
  {
    "name": "OMA - 13-hog-members-at-level-from-query-protein",
    "slug": "OMA_13-hog-members-at-level-from-query-protein",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve all proteins belongong to the Hierarchical Orthologous Group (HOG) at the level 'Vertebrata' to which humans' CDIN1 gene belong, together with their gene name symbol if available.",
    "context": null,
    "inidces": [],
    "query": "PREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?HOG ?MEMBER ?GENE_LABEL\nWHERE {\n    ?HOG a orth:OrthologsCluster ;\n      orth:hasHomologousMember ?node1 ;\n      orth:hasTaxonomicRange ?taxRange .\n    ?taxRange orth:taxRange 'Vertebrata' .\n    ?node1 orth:hasHomologousMember* ?query ;\n      orth:hasHomologousMember* ?MEMBER .\n    ?MEMBER a orth:Protein .\n    OPTIONAL {\n        ?MEMBER rdfs:label ?GENE_LABEL .\n    }\n    ?query a orth:Protein ;\n      orth:organism/obo:RO_0002162/up:scientificName 'Homo sapiens';\n      rdfs:label 'CDIN1'.\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "OPTIONAL",
      "DISTINCT",
      "IF"
    ],
    "category": "sib-swiss OMA"
  },
  {
    "name": "OMA - 14-compare-mbgd-oma",
    "slug": "OMA_14-compare-mbgd-oma",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve pairwise orthologous genes of the Cyanobacterium-aponinum psb27- gene that are found in the MBGD database but are not present in OMA",
    "context": null,
    "inidces": [],
    "query": "PREFIX oma: <http://omabrowser.org/ontology/oma#>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX sio: <http://semanticscience.org/resource/>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX mbgd: <http://purl.jp/bio/11/mbgd#>\n\nSELECT ?protein2 ?species WHERE {\n  SERVICE <http://sparql.nibb.ac.jp/sparql> {\n    SELECT ?protein2 ?species WHERE {\n      ?cluster_mbgd a orth:OrthologsCluster ;\n          orth:hasHomologous ?node1_mbgd ;\n        orth:hasHomologous ?node2_mbgd .\n      ?node1_mbgd orth:hasHomologous* ?gene1 .\n      ?node2_mbgd orth:hasHomologous* ?gene2 .\n      ?gene1 mbgd:uniprot <http://purl.uniprot.org/uniprot/K9Z723> .\n      ?gene2 mbgd:uniprot ?protein2 ;\n        mbgd:organism ?taxon .\n      OPTIONAL {\n        ?taxon mbgd:species ?species .\n      }\n      FILTER (?node1_mbgd != ?node2_mbgd)\n    }\n  }\n  FILTER NOT EXISTS { # keep only those that do not exist in OMA\n    ?cluster a orth:OrthologsCluster ;\n      orth:hasHomologousMember ?node1 ;\n      orth:hasHomologousMember ?node2 .\n    ?node1 orth:hasHomologousMember* ?protein_OMA_1.\n    ?node2 orth:hasHomologousMember* ?protein_OMA_2.\n    ?protein_OMA_1 lscr:xrefUniprot <http://purl.uniprot.org/uniprot/K9Z723>.\n    ?protein_OMA_2 lscr:xrefUniprot ?protein2.\n    FILTER (?node1 != ?node2)\n  }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER",
      "OPTIONAL",
      "SERVICE",
      "EXISTS",
      "NOT EXISTS"
    ],
    "category": "sib-swiss OMA"
  },
  {
    "name": "OMA - 15-biosodafrontend-rat-TP53",
    "slug": "OMA_15-biosodafrontend-rat-TP53",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Rattus norvegicus' proteins encoded by genes that are paralogous to its TP53 gene and their Uniprot function annotations.",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT DISTINCT ?PROTEIN ?IS_PARALOGOUS_TO_PROTEIN ?UNIPROT_XREF ?PARALOG_UNIPROT_XREF ?annotation_text WHERE {\n\t{\n\t\t?cluster a orth:ParalogsCluster .\n\t\t?cluster orth:hasHomologousMember ?node1 .\n\t\t?cluster orth:hasHomologousMember ?node2 .\n\t\t?node2 orth:hasHomologousMember* ?PROTEIN .\n\t\t?node1 orth:hasHomologousMember* ?IS_PARALOGOUS_TO_PROTEIN .\n\t\t?PROTEIN a orth:Protein .\n\t\t?PROTEIN orth:organism/obo:RO_0002162/up:scientificName 'Rattus norvegicus' ;\n\t\t\trdfs:label 'TP53' ;\n\t\t\tlscr:xrefUniprot ?UNIPROT_XREF .\n\t\t?IS_PARALOGOUS_TO_PROTEIN a orth:Protein .\n\t\t?IS_PARALOGOUS_TO_PROTEIN orth:organism/obo:RO_0002162/up:scientificName 'Rattus norvegicus' .\n\t\t?IS_PARALOGOUS_TO_PROTEIN lscr:xrefUniprot ?PARALOG_UNIPROT_XREF .\n\t}\n\tSERVICE <https://sparql.uniprot.org/sparql> {\n\t\t?PARALOG_UNIPROT_XREF up:annotation ?annotation .\n\t\t?annotation a up:Function_Annotation .\n\t\t?annotation rdfs:comment ?annotation_text .\n\t}\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "SERVICE",
      "DISTINCT",
      "IF"
    ],
    "category": "sib-swiss OMA"
  }
];