export const WikiPathways = [
  {
    "name": "WikiPathways - 001",
    "slug": "WikiPathways_001",
    "date": new Date("2025-06-18"),
    "description": "Returns the title of the dataset, creation date, and license.",
    "context": null,
    "inidces": [],
    "query": "PREFIX void: <http://rdfs.org/ns/void#>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX pav: <http://purl.org/pav/>\n\nSELECT DISTINCT ?dataset (str(?titleLit) as ?title) ?date ?license\nWHERE {\n   ?dataset a void:Dataset ;\n   dcterms:title ?titleLit ;\n   dcterms:license ?license ;\n   pav:createdOn ?date .\n}",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT",
      "CREATE",
      "STR"
    ],
    "category": "BiGCAT-UM WikiPathways"
  },
  {
    "name": "WikiPathways - 002",
    "slug": "WikiPathways_002",
    "date": new Date("2025-06-18"),
    "description": "Lists all linksets defined in this database with their titles, licenses, and creation dates.",
    "context": null,
    "inidces": [],
    "query": "PREFIX void: <http://rdfs.org/ns/void#>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX pav: <http://purl.org/pav/>\n\nSELECT DISTINCT ?dataset (str(?titleLit) as ?title) ?date ?license\nWHERE {\n   ?dataset a void:Linkset ;\n   dcterms:title ?titleLit .\n   OPTIONAL {\n     ?dataset dcterms:license ?license ;\n       pav:createdOn ?date .\n   }\n}",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "OPTIONAL",
      "DISTINCT",
      "CREATE",
      "STR"
    ],
    "category": "BiGCAT-UM WikiPathways"
  },
  {
    "name": "WikiPathways - 003",
    "slug": "WikiPathways_003",
    "date": new Date("2025-06-18"),
    "description": "Lists prefixes used in this database.",
    "context": null,
    "inidces": [],
    "query": "PREFIX sh: <http://www.w3.org/ns/shacl#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT ?prefix ?namespace WHERE {\n  [] sh:declare [\n    sh:prefix ?prefix ;\n    sh:namespace ?namespace\n  ] .\n}",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "BiGCAT-UM WikiPathways"
  },
  {
    "name": "WikiPathways - 004",
    "slug": "WikiPathways_004",
    "date": new Date("2025-06-18"),
    "description": "List all pathways in the AOP community portal and their title.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wp: <http://vocabularies.wikipathways.org/wp#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX cur: <http://vocabularies.wikipathways.org/wp#Curation:>\n\nSELECT DISTINCT ?pathway (str(?title) as ?PathwayTitle)\nWHERE {\n  ?pathway wp:ontologyTag cur:AOP ; \n  a wp:Pathway ; \n  dc:title ?title .\n}",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT",
      "STR"
    ],
    "category": "BiGCAT-UM WikiPathways"
  },
  {
    "name": "WikiPathways - 005",
    "slug": "WikiPathways_005",
    "date": new Date("2025-06-18"),
    "description": "List all diseases and the number of pathways they are linked to, in decreasing order.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wp: <http://vocabularies.wikipathways.org/wp#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT ?diseaseLabel ?disease (COUNT(DISTINCT ?pathway) AS ?count)\nWHERE {\n  ?pathway wp:diseaseOntologyTag ?disease ; \n           a wp:Pathway .\n  ?disease rdfs:label ?diseaseLabel .\n} GROUP BY ?diseaseLabel ?disease\n  ORDER BY DESC(?count)",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH",
      "OBO"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
      "COUNT"
    ],
    "category": "BiGCAT-UM WikiPathways"
  }
];