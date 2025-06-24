export const WikidataCiTO = [
  {
    "name": "WikidataCiTO - 001",
    "slug": "WikidataCiTO_001",
    "date": new Date("2025-06-18"),
    "description": "Lists journals that have CiTO citation intentions defined and returns the number of citation statements as well as the number of citing articles.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <http://wikidata.org/entity/>\nPREFIX wdt: <http://wikidata.org/prop/direct/>\nPREFIX wikibase: <http://wikiba.se/ontology#>\nPREFIX bd: <http://www.bigdata.com/rdf#>\nPREFIX rdfs: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX p: <http://www.wikidata.org/prop/>\nPREFIX ps: <http://www.wikidata.org/prop/statement/>\nPREFIX pq: <http://www.wikidata.org/prop/qualifier/>\n\nSELECT ?journal ?journalLabel (CONCAT(\"/venue/\", SUBSTR(STR(?journal), 32), \"#cito\") AS ?journalUrl)\n(COUNT(DISTINCT ?citationStatement) AS ?citations) \n(COUNT(DISTINCT ?citingArticle) AS ?articles) WHERE {\n  ?citingArticle p:P2860 ?citationStatement ;\n                 wdt:P1433 ?journal .\n  ?citationStatement pq:P3712 ?intention ;\n                     ps:P2860 ?citedArticle .\n  ?intention wdt:P31 wd:Q96471816 .\n  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],mul,en\". }\n} GROUP BY ?journal ?journalLabel\n  ORDER BY DESC(?citations)",
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
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
      "ALL",
      "STR",
      "LANG",
      "IF",
      "CONCAT",
      "SUBSTR",
      "COUNT"
    ],
    "category": "BiGCAT-UM WikidataCiTO"
  }
];