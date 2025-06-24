export const SwissLipids = [
  {
    "name": "SwissLipids - 1",
    "slug": "SwissLipids_1",
    "date": new Date("2025-06-18"),
    "description": "Select the SwissLipids categories and their labels.",
    "context": null,
    "inidces": [],
    "query": "PREFIX SWISSLIPID: <https://swisslipids.org/rdf/SLM_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Example 1\nSELECT ?category ?label\nWHERE\n{\n    ?category SWISSLIPID:rank SWISSLIPID:Category .\n    ?category rdfs:label ?label .\n}",
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
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 10",
    "slug": "SwissLipids_10",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Example 10\nSELECT ?slm ?slmName ?hmdb\nWHERE {\n  ?slm rdfs:label ?slmName . \n  # Corresponding HMDB entries\n  ?slm rdfs:seeAlso ?hmdb .\n  FILTER regex(str(?hmdb), \"hmdb\") .\n}\nORDER BY ?slm",
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
      "FILTER",
      "ORDER BY",
      "STR",
      "REGEX"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 11",
    "slug": "SwissLipids_11",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Example 11\nprefix HMDB:<http://identifiers.org/hmdb/>\nSELECT ?hmdb ?slm ?slmName \nWHERE {\n  VALUES ?hmdb {HMDB:HMDB00269 HMDB:HMDB00032 HMDB:HMDB01383}\n  ?slm rdfs:label ?slmName . \n  # Corresponding SwissLipids entries\n  ?slm rdfs:seeAlso ?hmdb .\n}\nORDER BY ?hmdb",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "VALUES",
      "ORDER BY",
      "IF"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 12",
    "slug": "SwissLipids_12",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Example 12\nSELECT ?slm ?slmName ?chebi\nWHERE {\n  ?slm rdfs:label ?slmName . \n  # Corresponding ChEBI entries\n  ?slm owl:equivalentClass ?chebi .\n}\nORDER BY ?slm",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 13",
    "slug": "SwissLipids_13",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Example 13\nSELECT ?chebi ?slm ?slmName \nWHERE {\n  VALUES ?chebi {CHEBI:70846 CHEBI:70771 CHEBI:70829}\n  ?slm rdfs:label ?slmName . \n  # Corresponding SwissLipids entries\n  ?slm owl:equivalentClass ?chebi .\n}\nORDER BY ?chebi",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "VALUES",
      "ORDER BY"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 14",
    "slug": "SwissLipids_14",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX lipidmaps: <https://www.lipidmaps.org/rdf/>\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Example 14\nSELECT ?lipidmaps ?slm ?slmName ?chebi\nWHERE {\n  #VALUES ?lipidmaps {lipidmaps:LMSP01020001 lipidmaps:LMST01010069 lipidmaps:LMST04030222}\n  ?slm rdfs:label ?slmName . \n  # Corresponding SwissLipids entries\n  ?slm rdfs:seeAlso ?lipidmaps .\n  FILTER regex(str(?lipidmaps), \"lipidmaps\") .\n\n  # Hierarchical search\n  #?children rdfs:subClassOf* ?slm .\n  #?children rdfs:label ?name .\n  # Corresponding ChEBI entries\n  ?slm owl:equivalentClass ?chebi .\n}\nORDER BY ?lipidmaps ?slm ?chebi",
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
      "FILTER",
      "VALUES",
      "ORDER BY",
      "STR",
      "REGEX"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 15",
    "slug": "SwissLipids_15",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX SWISSLIPID: <https://swisslipids.org/rdf/SLM_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT\n    ?swisslipid\n    ?lipidx\n    ?isomericsubSwisslipid\n    ?pubmed\nWHERE {\n    VALUES ?hmdb {'HMDB00269' 'MDB00032'}\n    BIND (IRI(CONCAT('http://identifiers.org/lipidx/', ?lipidx)) AS ?lipidxIRI)\n    ?swisslipid rdfs:seeAlso ?lipidxIRI .\n    ?swisslipid rdfs:subClassOf ?isomericsubSwisslipid .\n    ?isomericsubSwisslipid SWISSLIPID:rank SWISSLIPID:Isomeric_Subspecies .\n    ?isomericsubSwisslipid SWISSLIPID:citation ?pubmed .\n}",
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
      "BIND",
      "VALUES",
      "IRI",
      "IF",
      "CONCAT"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 16",
    "slug": "SwissLipids_16",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX SWISSLIPID: <https://swisslipids.org/rdf/SLM_>\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\n# Example 16\nSELECT ?startId ?startName ?uniprot\nWHERE\n{\n  # SwissLipids query (list of) identifier(s)\n  VALUES ?startId { SWISSLIPID:000399814 }\n  # name\n  ?startId rdfs:label ?startName .\n  # ChEBI x-ref\n  ?startId owl:equivalentClass ?chebi .\n  # federated query to Rhea\n  SERVICE <https://sparql.rhea-db.org/sparql> {\n  \t?rhea rh:side/rh:contains/rh:compound/rh:chebi ?chebi .\n  }    \n  # federated query to UniProt\n  SERVICE <https://sparql.uniprot.org/sparql> {\n    ?uniprot up:reviewed true .\n    ?uniprot up:annotation/up:catalyticActivity/up:catalyzedReaction ?rhea .\n  }\n} \nORDER BY ?startId",
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
      "VALUES",
      "SERVICE",
      "ORDER BY",
      "IF",
      "CONTAINS"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 2",
    "slug": "SwissLipids_2",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX SWISSLIPID: <https://swisslipids.org/rdf/SLM_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Example 2\nSELECT ?startId ?startName ?rank ?id ?name\nWHERE\n{\n  # query: list of SwissLipids Species identifiers\n  VALUES ?startId { SWISSLIPID:000056420 SWISSLIPID:000308470 }\n  ?startId SWISSLIPID:rank SWISSLIPID:Species .\n  # SwissLipids Species name\n  ?startId rdfs:label ?startName .  \n  # Hierarchical search\n  ?id rdfs:subClassOf+ ?startId .\n  ?id SWISSLIPID:rank ?rank .\n  VALUES ?rank { SWISSLIPID:Isomeric_Subspecies SWISSLIPID:Molecular_Subspecies SWISSLIPID:Structural_Subspecies}\n  ?id rdfs:label ?name .\n} \nORDER BY DESC(?rank) ?startId",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "VALUES",
      "ORDER BY",
      "STR",
      "IF"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 26",
    "slug": "SwissLipids_26",
    "date": new Date("2025-06-18"),
    "description": "Lipids produced in different organisms",
    "context": null,
    "inidces": [],
    "query": "PREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?swisslipid  ?organism {\n  ?swisslipid owl:equivalentClass ?chebi .\n  SERVICE <https://sparql.rhea-db.org/sparql> {\n    ?rhea rh:side/rh:contains/rh:compound ?compound .\n    ?compound (rh:chebi|(rh:reactivePart/rh:chebi)|rh:underlyingChebi) ?metabolite .\n  }\n  SERVICE <https://sparql.uniprot.org/sparql> {\n    ?catalyticActivityAnnotation up:catalyticActivity/up:catalyzedReaction ?rhea .\n    ?protein up:annotation ?catalyticActivityAnnotation ;\n             up:organism ?organism .\n  }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "SERVICE",
      "CONTAINS"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 27",
    "slug": "SwissLipids_27",
    "date": new Date("2025-06-18"),
    "description": "Find the list of SwissLipids for all organisms and their Isomeric subspecies",
    "context": null,
    "inidces": [],
    "query": "PREFIX SWISSLIPID: <https://swisslipids.org/rdf/SLM_>\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?swisslipid  ?organism {\n  ?swisslipid owl:equivalentClass ?chebi .\n  SERVICE <https://sparql.rhea-db.org/sparql> {\n    ?rhea rh:side/rh:contains/rh:compound ?compound .\n    ?compound (rh:chebi|(rh:reactivePart/rh:chebi)|rh:underlyingChebi) ?metabolite .\n  }\n  SERVICE <https://sparql.uniprot.org/sparql> {\n    ?catalyticActivityAnnotation up:catalyticActivity/up:catalyzedReaction ?rhea .\n    ?protein up:annotation ?catalyticActivityAnnotation ;\n             up:organism ?organism .\n  }\n  ?swisslipidIsomericSubpecies rdfs:subClassOf ?swisslipid ;\n        SWISSLIPID:rank SWISSLIPID:Isomeric_Subspecies .\n}",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "SERVICE",
      "CONTAINS"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 3",
    "slug": "SwissLipids_3",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX SWISSLIPID: <https://swisslipids.org/rdf/SLM_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Example 3\nSELECT ?startId ?startLabel ?rank ?id ?name ?citation\nWHERE\n{\n  # Queried lipid species\n  VALUES ?startId { SWISSLIPID:000056493 }\n  ?startId rdfs:label ?startLabel .\n \n  ?id rdfs:subClassOf+ ?startId .  \n  VALUES ?rank { SWISSLIPID:Isomeric_Subspecies SWISSLIPID:Molecular_Subspecies SWISSLIPID:Structural_Subspecies}\n  ?id SWISSLIPID:rank ?rank ;\n\t  rdfs:label ?name ;\n      SWISSLIPID:citation ?citation .\n      \n} \nORDER BY ?startId ?id DESC(?rank)",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "VALUES",
      "ORDER BY",
      "STR"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 34",
    "slug": "SwissLipids_34",
    "date": new Date("2025-06-18"),
    "description": "Lipids affected by human enzymes",
    "context": null,
    "inidces": [],
    "query": "PREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?swisslipid  {\n  ?swisslipid owl:equivalentClass ?chebi .\n  SERVICE <https://sparql.rhea-db.org/sparql> {\n    ?rhea rh:side/rh:contains/rh:compound ?compound .\n\t?compound (rh:chebi|(rh:reactivePart/rh:chebi)|rh:underlyingChebi) ?metabolite . \n  }\n  SERVICE <https://sparql.uniprot.org/sparql> {\n    ?catalyticActivityAnnotation up:catalyticActivity/up:catalyzedReaction ?rhea .\n    ?protein up:annotation ?catalyticActivityAnnotation ;\n             up:organism taxon:9606 .\n  }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "SERVICE",
      "CONTAINS"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 35",
    "slug": "SwissLipids_35",
    "date": new Date("2025-06-18"),
    "description": "Lipids by fatty acid component (hexadecanoate) at position sn1",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX SWISSLIPID: <https://swisslipids.org/rdf/SLM_>\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\n\nSELECT \n?swisslipid \nWHERE {\n  VALUES (?chebi) {\n    (CHEBI:7896) #hexadecanoate\n  }\n  ?swisslipidHexadeconate owl:equivalentClass ?chebi .\n  ?swisslipid SWISSLIPID:hasPart [\n    SWISSLIPID:derived_from ?swisslipidHexadecanoate ;\n    SWISSLIPID:position SWISSLIPID:sn1 \n  ]\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "VALUES",
      "FROM"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 36",
    "slug": "SwissLipids_36",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX SWISSLIPID: <https://swisslipids.org/rdf/SLM_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n\nSELECT ?startId ?startName ?tail1 ?tailName1 ?tail2 ?tailName2 ?id ?name ?pubmed\nWHERE {\n  VALUES ?startId { SWISSLIPID:000121946 }\n  ?startId rdfs:label ?startName .\n  # tail components\n  ?startId SWISSLIPID:haspart ?tail1 .\n  ?startId SWISSLIPID:haspart ?tail2 .\n  FILTER(!sameTerm(?tail1, ?tail2))\n  ?tail1 rdfs:label ?tailName1 .\n  ?tail2 rdfs:label ?tailName2 .\n\n  # Retrieve lipids with similar tails\n  ?id SWISSLIPID:haspart ?tail1 , ?tail2 .\n  \n  # Restrict to isomeric subspecies with PubMed citation(s)\n  ?id SWISSLIPID:rank SWISSLIPID:Isomeric_Subspecies .\n  ?id SWISSLIPID:citation ?pubmed .\n\n  # Retrieve name\n  ?id rdfs:label ?name .\n}\nORDER BY ?id ?tail1 ?tail2",
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
      "FILTER",
      "VALUES",
      "ORDER BY",
      "WITH",
      "STR",
      "SAMETERM"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 37",
    "slug": "SwissLipids_37",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX SWISSLIPID: <https://swisslipids.org/rdf/SLM_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Example 37\nSELECT ?startId ?startName ?tail1 ?tailName1 ?tail2 ?tailName2 ?id ?name\nWHERE {\n  VALUES ?startId { SWISSLIPID:000121946 }\n  ?startId rdfs:label ?startName .\n  # tail components\n  ?startId SWISSLIPID:haspart ?tail1 .\n  ?startId SWISSLIPID:haspart ?tail2 .\n  FILTER(!sameTerm(?tail1, ?tail2))\n  ?tail1 rdfs:label ?tailName1 .\n  ?tail2 rdfs:label ?tailName2 .\n\n  # Retrieve lipids with similar tails\n  ?id SWISSLIPID:haspart ?tail1 , ?tail2 .\n  \n  # Restrict to isomeric subspecies with PubMed citation(s)\n  ?id SWISSLIPID:rank SWISSLIPID:Isomeric_Subspecies .\n\n  # Retrieve name\n  ?id rdfs:label ?name .\n}\nORDER BY ?id ?tail1 ?tail2",
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
      "FILTER",
      "VALUES",
      "ORDER BY",
      "WITH",
      "STR",
      "SAMETERM"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 38",
    "slug": "SwissLipids_38",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX SWISSLIPID: <https://swisslipids.org/rdf/SLM_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Example 38\nSELECT ?startId ?startName ?tail1 ?tailName1 ?tail2 ?tailName2 ?id ?name ?pubmed\nWHERE {\n  VALUES ?startId { SWISSLIPID:000121946 }\n  ?startId rdfs:label ?startName .\n  # tail components\n  ?startId SWISSLIPID:haspart ?tail1 .\n  ?startId SWISSLIPID:haspart ?tail2 .\n  FILTER(!sameTerm(?tail1, ?tail2))\n  ?tail1 rdfs:label ?tailName1 .\n  ?tail2 rdfs:label ?tailName2 .\n\n  # Retrieve lipids with similar tails\n  ?id SWISSLIPID:haspart ?tail1 , \n                  ?tail2 .\n  \n  # Restrict to isomeric subspecies with PubMed citation(s)\n  ?id SWISSLIPID:rank SWISSLIPID:Isomeric_Subspecies .\n  ?id SWISSLIPID:citation ?pubmed .\n\n  # Retrieve name\n  ?id rdfs:label ?name .\n}\nORDER BY ?id ?tail1 ?tail2",
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
      "FILTER",
      "VALUES",
      "ORDER BY",
      "WITH",
      "STR",
      "SAMETERM"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 4",
    "slug": "SwissLipids_4",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX SWISSLIPID: <https://swisslipids.org/rdf/SLM_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Example 4\nSELECT ?startId ?startName ?id ?name\nWHERE\n{\n  VALUES ?startId { SWISSLIPID:000399814 SWISSLIPID:000000567}\n  ?startId SWISSLIPID:rank SWISSLIPID:Class .\n  ?startId rdfs:label ?startName .\n  ?id rdfs:subClassOf+ ?startId .\n  ?id SWISSLIPID:rank SWISSLIPID:Isomeric_Subspecies ;\n\t  rdfs:label ?name .    \n} \nORDER BY ?startId",
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
      "VALUES",
      "ORDER BY"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 5",
    "slug": "SwissLipids_5",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX SWISSLIPID: <https://swisslipids.org/rdf/SLM_>\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\n# Example 5\nSELECT ?startId ?startName ?id ?name ?chebi ?rhea ?rheaEquation \nWHERE\n{\n  # SwissLipids query (list of) identifier(s)\n  VALUES ?startId { SWISSLIPID:000399814 }\n  # name\n  ?startId rdfs:label ?startName .\n  # Retrieve children lipids \n  ?id rdfs:subClassOf* ?startId .\n  ?id rdfs:label ?name .\n  # ChEBI x-ref\n  ?id owl:equivalentClass ?chebi .\n  # federated query to Rhea\n  SERVICE <https://sparql.rhea-db.org/sparql> {\n  \t?rhea rh:equation ?rheaEquation .\n  \t?rhea rh:side/rh:contains/rh:compound/rh:chebi ?chebi .\n  }    \n} \nORDER BY  ?startId ?id",
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
      "VALUES",
      "SERVICE",
      "ORDER BY",
      "IF",
      "CONTAINS"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 6",
    "slug": "SwissLipids_6",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX SWISSLIPID: <https://swisslipids.org/rdf/SLM_>\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\n# Example 6\nSELECT ?startId ?startName ?chebi ?rhea ?rheaEquation ?uniprot ?uniprotName\nWHERE\n{\n  # SwissLipids query (list of) identifier(s)\n  VALUES ?startId { SWISSLIPID:000399814 }\n  # name\n  ?startId rdfs:label ?startName .\n  # ChEBI x-ref\n  ?startId owl:equivalentClass ?chebi .\n  # federated query to Rhea\n  SERVICE <https://sparql.rhea-db.org/sparql> {\n  \t?rhea rh:equation ?rheaEquation .\n  \t?rhea rh:side/rh:contains/rh:compound/rh:chebi ?chebi .\n  }    \n  # federated query to UniProt\n  SERVICE <https://sparql.uniprot.org/sparql> {\n    ?uniprot up:reviewed true .\n    ?uniprot up:recommendedName/up:fullName ?uniprotName .\n    ?uniprot up:annotation/up:catalyticActivity/up:catalyzedReaction ?rhea .\n  }\n} \nORDER BY ?startId",
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
      "VALUES",
      "SERVICE",
      "ORDER BY",
      "IF",
      "CONTAINS"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 7",
    "slug": "SwissLipids_7",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX SWISSLIPID: <https://swisslipids.org/rdf/SLM_>\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\n# Example 7\nSELECT ?startId ?startLabel ?id ?name \nWHERE {\n  # Queried lipid species\n  VALUES ?startId { SWISSLIPID:000056871 }\n  ?startId rdfs:label ?startLabel . \n  # Corresponding Isomeric subspecies\n  ?id rdfs:subClassOf+ ?startId .  \n  ?id SWISSLIPID:rank SWISSLIPID:Isomeric_Subspecies ;\n\t  rdfs:label ?name .\n  # Mapped ChEBI\n  ?id owl:equivalentClass ?chebi .  \n  # federated query to Rhea\n  SERVICE <https://sparql.rhea-db.org/sparql> {\n  \t?rhea rh:equation ?rheaEquation .\n  \t?rhea rh:side/rh:contains/rh:compound/rh:chebi ?chebi .\n  }    \n  # federated query to UniProt\n  SERVICE <https://sparql.uniprot.org/sparql> {\n    ?uniprot up:reviewed true .\n    ?uniprot up:recommendedName/up:fullName ?uniprotName .\n    ?uniprot up:annotation/up:catalyticActivity/up:catalyzedReaction ?rhea .\n  }\n}",
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
      "VALUES",
      "SERVICE",
      "CONTAINS"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 8",
    "slug": "SwissLipids_8",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX lipidmaps: <https://www.lipidmaps.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Example 8\nSELECT ?slm ?slmName ?lipidmaps\nWHERE {\n  ?slm rdfs:label ?slmName . \n  # Corresponding LIPID MAPS\n  ?slm rdfs:seeAlso ?lipidmaps .\n  FILTER (strstarts(str(?lipidmaps), str(lipidmaps:))) .\n}\nORDER BY ?slm",
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
      "FILTER",
      "ORDER BY",
      "STR",
      "STRSTARTS"
    ],
    "category": "sib-swiss SwissLipids"
  },
  {
    "name": "SwissLipids - 9",
    "slug": "SwissLipids_9",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX lipidmaps: <https://www.lipidmaps.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Example 9\nSELECT ?lipidmaps ?slm ?slmName \nWHERE {\n  VALUES ?lipidmaps {lipidmaps:LMSP01020001 lipidmaps:LMST01010069 lipidmaps:LMST04030222}\n  ?slm rdfs:label ?slmName . \n  # Corresponding SwissLipds entries\n  ?slm rdfs:seeAlso ?lipidmaps .\n}\nORDER BY ?lipidmaps",
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
      "VALUES",
      "ORDER BY"
    ],
    "category": "sib-swiss SwissLipids"
  }
];