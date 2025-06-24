export const AOPWiki = [
  {
    "name": "AOPWiki - 000",
    "slug": "AOPWiki_000",
    "date": new Date("2025-06-18"),
    "description": "[fill out comment here]",
    "context": null,
    "inidces": [],
    "query": "PREFIX aopo: <http://aopkb.org/aop_ontology#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX edam: <http://edamontology.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nSELECT  distinct  ?keid ?ketitle ?id ?ncbi\nWHERE {\n    ?ke a aopo:KeyEvent; edam:data_1025 ?object; dc:title ?ketitle; rdfs:label ?keid.\n    ?object skos:exactMatch ?id.\n    ?id a edam:data_1027; edam:data_1027 ?ncbi.\n}",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH",
      "DC"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT"
    ],
    "category": "BiGCAT-UM AOPWiki"
  },
  {
    "name": "AOPWiki - 001",
    "slug": "AOPWiki_001",
    "date": new Date("2025-06-18"),
    "description": "[fill out comment here]",
    "context": null,
    "inidces": [],
    "query": "PREFIX aopo: <http://aopkb.org/aop_ontology#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX edam: <http://edamontology.org/>\nPREFIX pato: <http://purl.obolibrary.org/obo/PATO_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nSELECT  distinct  ?keid ?ketitle ?objectname ?uniprot ?prot\nWHERE {\n    ?aop a aopo:AdverseOutcomePathway ;\n        rdfs:label ?aop_id;\n        aopo:has_key_event ?ke.\n    ?ke pato:0001241 ?object; dc:title ?ketitle; rdfs:label ?keid.\n    ?object dc:title ?objectname; skos:exactMatch ?prot.\n    ?prot a edam:data_2291; edam:data_2291 ?uniprot.\n}",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH",
      "DC"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT"
    ],
    "category": "BiGCAT-UM AOPWiki"
  },
  {
    "name": "AOPWiki - 002",
    "slug": "AOPWiki_002",
    "date": new Date("2025-06-18"),
    "description": "[fill out comment here]",
    "context": null,
    "inidces": [],
    "query": "PREFIX aopo: <http://aopkb.org/aop_ontology#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nSELECT ?AOP ?AOPName\nWHERE {\n ?AOP a aopo:AdverseOutcomePathway ;\n dc:title ?AOPName . \n}",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH",
      "DC"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "BiGCAT-UM AOPWiki"
  },
  {
    "name": "AOPWiki - 003",
    "slug": "AOPWiki_003",
    "date": new Date("2025-06-18"),
    "description": "[fill out comment here]",
    "context": null,
    "inidces": [],
    "query": "PREFIX aopo: <http://aopkb.org/aop_ontology#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX edam: <http://edamontology.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nSELECT  distinct  ?keid ?ketitle ?hgnc\nWHERE {\n    ?ke a aopo:KeyEvent; edam:data_1025 ?object; dc:title ?ketitle; rdfs:label ?keid.\n    ?object edam:data_2298 ?hgnc.\n}",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH",
      "DC"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT"
    ],
    "category": "BiGCAT-UM AOPWiki"
  },
  {
    "name": "AOPWiki - 004",
    "slug": "AOPWiki_004",
    "date": new Date("2025-06-18"),
    "description": "[fill out comment here]",
    "context": null,
    "inidces": [],
    "query": "PREFIX cheminf: <http://semanticscience.org/resource/CHEMINF_>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nSELECT ?CAS ?ChemicalName\nWHERE {\n ?cas a cheminf:000000 ;\n dc:title ?ChemicalName ;\n cheminf:000446 ?CAS . \n}",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH",
      "DC"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "MIN"
    ],
    "category": "BiGCAT-UM AOPWiki"
  }
];