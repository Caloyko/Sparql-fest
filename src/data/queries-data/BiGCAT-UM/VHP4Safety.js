export const VHP4Safety = [
  {
    "name": "VHP4Safety - 001",
    "slug": "VHP4Safety_001",
    "date": new Date("2025-06-18"),
    "description": "List all compounds with a PubChem identifier and optionally list the ToxBank Wiki link and roles.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <https://compoundcloud.wikibase.cloud/entity/>\nPREFIX wdt: <https://compoundcloud.wikibase.cloud/prop/direct/>\nPREFIX wikibase: <http://wikiba.se/ontology#>\nPREFIX bd: <http://www.bigdata.com/rdf#>\nPREFIX rdfs: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n\nSELECT ?cmp ?cmpLabel ?pubchem ?toxbank\n       (GROUP_CONCAT(DISTINCT ?roleLabel; separator=\", \") AS ?roles)\nWHERE {\n  ?cmp wdt:P13 ?pubchem .\n  OPTIONAL { ?cmp wdt:P4 ?toxbank }\n  OPTIONAL { ?cmp wdt:P17 ?role . ?role rdfs:label ?roleLabel}\n  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". }\n} GROUP BY ?cmp ?cmpLabel ?pubchem ?toxbank",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "OPTIONAL",
      "SERVICE",
      "GROUP BY",
      "DISTINCT",
      "LANG",
      "CONCAT",
      "GROUP_CONCAT"
    ],
    "category": "BiGCAT-UM VHP4Safety"
  },
  {
    "name": "VHP4Safety - 002",
    "slug": "VHP4Safety_002",
    "date": new Date("2025-06-18"),
    "description": "List all collections and the number of compounds in that collection.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <https://compoundcloud.wikibase.cloud/entity/>\nPREFIX wdt: <https://compoundcloud.wikibase.cloud/prop/direct/>\nPREFIX wikibase: <http://wikiba.se/ontology#>\nPREFIX bd: <http://www.bigdata.com/rdf#>\n\nSELECT ?collectionLabel (COUNT(DISTINCT ?compound) AS ?count) WHERE {\n  VALUES ?collectionType { wd:Q52 wd:Q54 wd:Q55 }\n  ?collection wdt:P1 ?collectionType .\n  ?compound wdt:P21 ?collection .\n  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". }\n} GROUP BY ?collectionLabel\n  ORDER BY DESC(?count)",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "VALUES",
      "SERVICE",
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
      "LANG",
      "COUNT"
    ],
    "category": "BiGCAT-UM VHP4Safety"
  },
  {
    "name": "VHP4Safety - 003",
    "slug": "VHP4Safety_003",
    "date": new Date("2025-06-18"),
    "description": "List all compounds of which the xenometabolism is known.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <https://compoundcloud.wikibase.cloud/entity/>\nPREFIX wdt: <https://compoundcloud.wikibase.cloud/prop/direct/>\nPREFIX wikibase: <http://wikiba.se/ontology#>\nPREFIX bd: <http://www.bigdata.com/rdf#>\n\nSELECT ?cmp ?cmpLabel ?xenometabolism\nWHERE {\n  ?cmp wdt:P19 ?xenometabolism .\n  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". }\n}",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "SERVICE",
      "LANG"
    ],
    "category": "BiGCAT-UM VHP4Safety"
  },
  {
    "name": "VHP4Safety - 004",
    "slug": "VHP4Safety_004",
    "date": new Date("2025-06-18"),
    "description": "List all compounds in the HBM4EU priority substances collection with identifier wd:Q56, optionally with their InChIKey and PubChem CID identifiers.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <https://compoundcloud.wikibase.cloud/entity/>\nPREFIX wdt: <https://compoundcloud.wikibase.cloud/prop/direct/>\nPREFIX wikibase: <http://wikiba.se/ontology#>\nPREFIX bd: <http://www.bigdata.com/rdf#>\n\nSELECT DISTINCT ?compound ?compoundLabel\n  (CONCAT(\"#compound/\", SUBSTR(STR(?compound), 45)) AS ?compoundUrl)\n  ?inchikey ?pubchem\nWHERE {\n  VALUES ?collection { wd:Q56 }\n  ?compound wdt:P21 ?collection .\n  OPTIONAL { ?compound wdt:P10 ?inchikey }\n  OPTIONAL { ?compound wdt:P13 ?pubchem }\n  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". }\n}",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "OPTIONAL",
      "VALUES",
      "SERVICE",
      "DISTINCT",
      "STR",
      "LANG",
      "CONCAT",
      "SUBSTR"
    ],
    "category": "BiGCAT-UM VHP4Safety"
  }
];