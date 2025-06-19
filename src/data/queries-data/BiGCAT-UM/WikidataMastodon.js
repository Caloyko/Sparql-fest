export const WikidataMastodon = [
  {
    "name": "WikidataMastodon - 001",
    "slug": "WikidataMastodon_001",
    "date": "18-06-2025",
    "description": "Lists universities with a Mastodon account.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <http://wikidata.org/entity/>\nPREFIX wdt: <http://wikidata.org/prop/direct/>\nPREFIX wikibase: <http://wikiba.se/ontology#>\nPREFIX bd: <http://www.bigdata.com/rdf#>\n\nSELECT DISTINCT ?journal ?journalLabel ?mastodon WHERE {\n  ?journal wdt:P31/wdt:P279* wd:Q3918 ;\n    wdt:P4033 ?mastodon .\n  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". }\n}",
    "ontologies": [
      "CITO",
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
      "DISTINCT",
      "ALL",
      "LANG"
    ],
    "category": "BiGCAT-UM WikidataMastodon"
  },
  {
    "name": "WikidataMastodon - 002",
    "slug": "WikidataMastodon_002",
    "date": "18-06-2025",
    "description": "List all Mastodon addresses in Wikidata.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <http://wikidata.org/entity/>\nPREFIX wdt: <http://wikidata.org/prop/direct/>\nPREFIX wikibase: <http://wikiba.se/ontology#>\nPREFIX bd: <http://www.bigdata.com/rdf#>\n\nSELECT ?item ?itemLabel ?mastodon\n{\n  ?item wdt:P4033 ?mastodon .\n  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\" }\n}",
    "ontologies": [
      "CITO",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "SERVICE",
      "LANG"
    ],
    "category": "BiGCAT-UM WikidataMastodon"
  },
  {
    "name": "WikidataMastodon - 003",
    "slug": "WikidataMastodon_003",
    "date": "18-06-2025",
    "description": "Nobel Prize winners with a Mastodon account.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <http://wikidata.org/entity/>\nPREFIX wdt: <http://wikidata.org/prop/direct/>\nPREFIX wikibase: <http://wikiba.se/ontology#>\nPREFIX bd: <http://www.bigdata.com/rdf#>\n\nSELECT ?winner ?winnerLabel ?mastodon WHERE {\n  VALUES ?nobel {\n    wd:Q7191\n    wd:Q35637\n    wd:Q37922\n    wd:Q38104\n    wd:Q44585\n    wd:Q47170\n    wd:Q80061\n  }\n  ?winner wdt:P166 ?nobel ; wdt:P4033 ?mastodon .\n  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". }\n}",
    "ontologies": [
      "CITO",
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
      "LANG"
    ],
    "category": "BiGCAT-UM WikidataMastodon"
  },
  {
    "name": "WikidataMastodon - 004",
    "slug": "WikidataMastodon_004",
    "date": "18-06-2025",
    "description": "Academic journals with Mastodon.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <http://wikidata.org/entity/>\nPREFIX wdt: <http://wikidata.org/prop/direct/>\nPREFIX wikibase: <http://wikiba.se/ontology#>\nPREFIX bd: <http://www.bigdata.com/rdf#>\n\nSELECT DISTINCT ?item ?itemLabel ?mastoadress\nWHERE \n{\n  ?item wdt:P4033 ?mastoadress ; wdt:P31/wdt:P279* wd:Q737498 .\n  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". } # Helps get the label in your language, if not, then en language\n}",
    "ontologies": [
      "CITO",
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
      "DISTINCT",
      "LANG",
      "IF"
    ],
    "category": "BiGCAT-UM WikidataMastodon"
  },
  {
    "name": "WikidataMastodon - 005",
    "slug": "WikidataMastodon_005",
    "date": "18-06-2025",
    "description": "People with Mastodon that published in a PLOS journal.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <http://wikidata.org/entity/>\nPREFIX wdt: <http://wikidata.org/prop/direct/>\nPREFIX wikibase: <http://wikiba.se/ontology#>\nPREFIX bd: <http://www.bigdata.com/rdf#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?author ?authorLabel ?mastodon (GROUP_CONCAT(DISTINCT ?journalLabel;separator=\", \") AS ?journals) WHERE {\n  VALUES ?PUBLISHER { wd:Q233358 }\n  ?article wdt:P1433 ?journal ; wdt:P50 ?author .\n  ?journal wdt:P123 ?PUBLISHER ; rdfs:label ?journalLabel . FILTER (lang(?journalLabel) = \"en\")\n  ?author wdt:P4033 ?mastodon .\n  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". }\n} GROUP BY ?author ?authorLabel ?mastodon\n  ORDER BY ASC(?authorLabel)",
    "ontologies": [
      "CITO",
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
      "FILTER",
      "VALUES",
      "SERVICE",
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
      "ALL",
      "LANG",
      "CONCAT",
      "GROUP_CONCAT"
    ],
    "category": "BiGCAT-UM WikidataMastodon"
  },
  {
    "name": "WikidataMastodon - 006",
    "slug": "WikidataMastodon_006",
    "date": "18-06-2025",
    "description": "Find your co-authors with your ORCID.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <http://wikidata.org/entity/>\nPREFIX wdt: <http://wikidata.org/prop/direct/>\nPREFIX wikibase: <http://wikiba.se/ontology#>\nPREFIX bd: <http://www.bigdata.com/rdf#>\n\nSELECT DISTINCT ?coAuthor ?coAuthorLabel ?mastodon WHERE {\n  VALUES ?orcid { \"0000-0001-7542-0286\" }\n  ?you ^wdt:P50 ?article ; wdt:P496 ?orcid . ?article wdt:P50 ?coAuthor .\n  ?coAuthor wdt:P4033 ?mastodon .\n  FILTER ( ?coAuthor != ?you )\n  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". }\n}",
    "ontologies": [
      "CITO",
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
      "FILTER",
      "VALUES",
      "SERVICE",
      "DISTINCT",
      "LANG"
    ],
    "category": "BiGCAT-UM WikidataMastodon"
  }
];