export const Rhea = [
  {
    "name": "Rhea - 1",
    "slug": "Rhea_1",
    "date": new Date("2025-06-18"),
    "description": "Select all Rhea reactions",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\n# Query 1\n# Select all Rhea reactions (unspecified direction) \n# and return identifier (id), accession, boolean attributes (isChemicallyBalanced, isTransport) and chemical equation.\n#\nSELECT ?rhea ?id ?accession ?isChemicallyBalanced ?isTransport  ?equation \nWHERE {\n  ?rhea rdfs:subClassOf rh:Reaction .\n  ?rhea rh:id ?id .\n  ?rhea rh:accession ?accession .\n  ?rhea rh:equation ?equation .\n  ?rhea rh:isTransport ?isTransport .\n  ?rhea rh:isChemicallyBalanced ?isChemicallyBalanced .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ALL",
      "STR",
      "IF"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 10",
    "slug": "Rhea_10",
    "date": new Date("2025-06-18"),
    "description": "Select all Rhea reactions linked to an enzyme classification (sub)-class",
    "context": null,
    "inidces": [],
    "query": "PREFIX ec: <http://purl.uniprot.org/enzyme/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\n# Query 10\n# Select all Rhea reactions mapped to \n# \n# This query corresponds to the Rhea website query:\n# https://www.rhea-db.org/rhea?query=ec:1.*\n# https://www.rhea-db.org/rhea?query=ec:1.1.*\n# https://www.rhea-db.org/rhea?query=ec:1.1.1.*\n#\nSELECT ?ec ?ecNumber ?rhea ?accession ?equation\nWHERE {\n  ?rhea rdfs:subClassOf rh:Reaction .\n  ?rhea rh:accession ?accession .\n  ?rhea rh:ec ?ec .\n  BIND(strafter(str(?ec),str(ec:)) as ?ecNumber)\n  # class (e.g EC 1.-.-.-)\n  FILTER (regex(?ecNumber,'^1\\\\\\\\.')) \n  # sub-class  (e.g EC 1.1.-.-)\n  #FILTER (regex(?ecNumber,'^1\\\\\\\\.1\\\\\\\\.')) \n  # sub-sub-class (e.g EC 1.1.1.-)\n  #FILTER (regex(?ecNumber,'^1\\\\\\\\.1\\\\\\\\.1\\\\\\\\.')) \n  ?rhea rh:equation ?equation .\n}",
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
      "BIND",
      "ALL",
      "STR",
      "REGEX"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 100 Get the number of ChEBI participant with at least one xref to CAS number as provided by ChEBI",
    "slug": "Rhea_100_Get_the_number_of_ChEBI_participant_with_at_least_one_xref_to_CAS_number_as_provided_by_ChEBI",
    "date": new Date("2025-06-18"),
    "description": "Get the number of ChEBI participant with at least one xref to CAS number as provided by ChEBI",
    "context": null,
    "inidces": [],
    "query": "PREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX allie: <http://allie.dbcls.jp/>\nPREFIX GO: <http://purl.obolibrary.org/obo/GO_>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX chebihash:<http://purl.obolibrary.org/obo/chebi#>\nPREFIX oboInOwl:<http://www.geneontology.org/formats/oboInOwl#>\n\nSELECT\n  (count(distinct ?chebi) as ?chebiCount)\n  (count(distinct ?dbXref) as ?xrefCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  {\n    ?compound rh:chebi ?chebi .\n    ?chebi oboInOwl:hasDbXref ?dbXref .\n    FILTER (regex(?dbXref,'^CAS:'))\n  }\n  UNION\n  {\n    ?compound rh:chebi ?chebi .\n    ?chebi2 rdfs:subClassOf ?chebiRestriction .\n    ?chebiRestriction a owl:Restriction .\n    ?chebiRestriction owl:onProperty chebihash:has_major_microspecies_at_pH_7_3 .\n    ?chebiRestriction owl:someValuesFrom ?chebi .\n    ?chebi2 oboInOwl:hasDbXref ?dbXref .\n    FILTER (regex(?dbXref,'^CAS:'))\n  }\n}",
    "ontologies": [
      "DCTERMS",
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
      "UNION",
      "VALUES",
      "DISTINCT",
      "FROM",
      "ALL",
      "STR",
      "REGEX",
      "NOW",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 101 Pairs of reaction participants that belong to the same reaction but on distinct sides and number of reactions in which they occur",
    "slug": "Rhea_101_Pairs_of_reaction_participants_that_belong_to_the_same_reaction_but_on_distinct_sides_and_number_of_reactions_in_which_they_occur",
    "date": new Date("2025-06-18"),
    "description": "Pairs of reaction participants that belong to the same reaction but on distinct sides and number of reactions in which they occur",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT\n  ?chebi1\n  ?compound1Name\n\n  ?chebi2\n  ?compound2Name\n\n  (count(distinct ?reaction) as ?reactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n\n  ?reaction rh:side ?reactionSide1 .\n  ?reactionSide1 rh:contains ?participant1 .\n  ?participant1 rh:compound ?compound1 .\n  ?compound1 rh:name ?compound1Name .\n  ?compound1 rh:chebi ?chebi1 .\n\n  ?reaction rh:side ?reactionSide2 .\n  ?reactionSide2 rh:contains ?participant2 .\n  ?participant2 rh:compound ?compound2 .\n  ?compound2 rh:name ?compound2Name .\n  ?compound2 rh:chebi ?chebi2 .\n\n\n  ?reactionSide1 rh:transformableTo ?reactionSide2\n\n  FILTER(?chebi1<?chebi2)\n}\nGROUP BY ?chebi1 ?chebi2 ?compound1Name ?compound2Name\nORDER BY DESC (?reactionCount)\nLIMIT 100",
    "ontologies": [
      "DCTERMS",
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
      "GROUP BY",
      "ORDER BY",
      "LIMIT",
      "DISTINCT",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 103 Select all approved reactions linked to a given EC number",
    "slug": "Rhea_103_Select_all_approved_reactions_linked_to_a_given_EC_number",
    "date": new Date("2025-06-18"),
    "description": "Select all approved reactions linked to a given EC number (EC 1.1.1.353)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX ec:<http://purl.uniprot.org/enzyme/>\n\nSELECT\n  ?reaction\n  ?reactionEquation\nWHERE {\n  BIND(ec:1.1.1.353 AS ?ecNumber)\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:ec ?ecNumber\n}\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
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
      "ORDER BY"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 104 Select the number of reactions linked to EC numbers",
    "slug": "Rhea_104_Select_the_number_of_reactions_linked_to_EC_numbers",
    "date": new Date("2025-06-18"),
    "description": "Select the number of reactions linked to EC numbers",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  (count(?reaction) as ?reactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:ec ?ecNumber\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 105 Select all reactions linked to EC numbers",
    "slug": "Rhea_105_Select_all_reactions_linked_to_EC_numbers",
    "date": new Date("2025-06-18"),
    "description": "Select all reactions linked to EC numbers",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  ?reaction\n  ?ecNumber\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:ec ?ecNumber\n}\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 106 Select all reactions linked to more than one EC number",
    "slug": "Rhea_106_Select_all_reactions_linked_to_more_than_one_EC_number",
    "date": new Date("2025-06-18"),
    "description": "Select all reactions linked to more than one EC number",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  ?reaction\n  (count(?ecNumber) as ?ecCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:ec ?ecNumber\n}\nGROUP BY ?reaction\nHAVING (count(?ecNumber) > 1)\nORDER BY DESC(?ecCount)",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "HAVING",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 107 Select the number of reactions with no links to EC numbers",
    "slug": "Rhea_107_Select_the_number_of_reactions_with_no_links_to_EC_numbers",
    "date": new Date("2025-06-18"),
    "description": "Select the number of reactions with no links to EC numbers",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  (count(?reaction) as ?reactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  FILTER (NOT EXISTS {?reaction rh:ec ?ecNumber .})\n}",
    "ontologies": [
      "DCTERMS",
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
      "EXISTS",
      "NOT EXISTS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 108 Select all reactions with no links to EC numbers",
    "slug": "Rhea_108_Select_all_reactions_with_no_links_to_EC_numbers",
    "date": new Date("2025-06-18"),
    "description": "Select all reactions with no links to EC numbers",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT ?reaction WHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  FILTER (NOT EXISTS {?reaction rh:ec ?ecNumber .})\n}\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
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
      "EXISTS",
      "NOT EXISTS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 109 Distribution of reactions according to the first level of enzyme classification",
    "slug": "Rhea_109_Distribution_of_reactions_according_to_the_first_level_of_enzyme_classification",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX ec:<http://purl.uniprot.org/enzyme/>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\n\nSELECT\n  ?ecClass\n  (str(?ecName) as ?ecClassName)\n  (count(?reaction) as ?reactionCount)\nWHERE\n{\n  SERVICE <http://sparql.uniprot.org/sparql> {\n    VALUES (?ecClass) { (ec:1.-.-.-)(ec:2.-.-.-)(ec:3.-.-.-)(ec:4.-.-.-)(ec:5.-.-.-) (ec:6.-.-.-) (ec:7.-.-.-) }\n    ?ecNumber rdfs:subClassOf ?ecClass .\n    ?ecClass skos:prefLabel ?ecName .\n  }\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:ec ?ecNumber .\n}\nGROUP BY ?ecClass ?ecName",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "VALUES",
      "SERVICE",
      "GROUP BY",
      "STR",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 11",
    "slug": "Rhea_11",
    "date": new Date("2025-06-18"),
    "description": "Distribution of reactions according to the first class of the enzyme classification (federated query)",
    "context": null,
    "inidces": [],
    "query": "PREFIX ec: <http://purl.uniprot.org/enzyme/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n\n# Query 11\n# Retrieve the count of reactions mapped to each level (main class) of the enzyme classification\n#\n# This query mimics the Filter section of the Rhea website (Browse all reactions)\n# https://www.rhea-db.org/rhea?query=\nSELECT ?ecClass (STR(?ecName) AS ?ecClassName) (COUNT(?rhea) AS ?rheaCount)\nWHERE {\n  SERVICE <https://sparql.uniprot.org/sparql> {\n    VALUES (?ecClass) { (ec:1.-.-.-)(ec:2.-.-.-)(ec:3.-.-.-)(ec:4.-.-.-)(ec:5.-.-.-) (ec:6.-.-.-) (ec:7.-.-.-)}\n    ?ecNumber rdfs:subClassOf ?ecClass .\n    ?ecClass skos:prefLabel ?ecName .\n  }\n  ?rhea rdfs:subClassOf rh:Reaction .\n  ?rhea rh:ec ?ecNumber .\n} GROUP BY ?ecClass ?ecName",
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
      "SERVICE",
      "GROUP BY",
      "ALL",
      "STR",
      "IF",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 110 Select reaction ec protein for a given reaction",
    "slug": "Rhea_110_Select_reaction_ec_protein_for_a_given_reaction",
    "date": new Date("2025-06-18"),
    "description": "Select <reaction> <ec> <protein> for a given reaction",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX ec:<http://purl.uniprot.org/enzyme/>\nPREFIX up:<http://purl.uniprot.org/core/>\n\nSELECT\n  ?reaction\n  ?enzyme\n  ?protein\nWHERE {\n  BIND(rh:11672 AS ?reaction)\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:ec ?enzyme\n  SERVICE <http://sparql.uniprot.org/sparql> {\n    ?protein up:reviewed true .\n    OPTIONAL {?protein up:enzyme ?enzyme. } .\n    OPTIONAL {?protein up:domain/up:enzyme ?enzyme . } .\n    OPTIONAL {?protein up:component/up:enzyme ?enzyme .} .\n  }\n}",
    "ontologies": [
      "DCTERMS",
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
      "BIND",
      "SERVICE"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 111 Select reaction ec protein for a given EC number",
    "slug": "Rhea_111_Select_reaction_ec_protein_for_a_given_EC_number",
    "date": new Date("2025-06-18"),
    "description": "Select <reaction> <ec> <protein> for a given EC number",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX ec:<http://purl.uniprot.org/enzyme/>\nPREFIX up:<http://purl.uniprot.org/core/>\n\nSELECT\n  ?reaction\n  ?enzyme\n  ?protein\nWHERE {\n  BIND(ec:2.6.1.62 AS ?enzyme)\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:ec ?enzyme .\n  SERVICE <http://sparql.uniprot.org/sparql> {\n    ?protein up:reviewed true .\n    OPTIONAL {?protein up:enzyme ?enzyme. } .\n    OPTIONAL {?protein up:domain/up:enzyme ?enzyme . } .\n    OPTIONAL {?protein up:component/up:enzyme ?enzyme .} .\n  }\n\n}",
    "ontologies": [
      "DCTERMS",
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
      "BIND",
      "SERVICE"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 112 Total number of reaction ec protein links",
    "slug": "Rhea_112_Total_number_of_reaction_ec_protein_links",
    "date": new Date("2025-06-18"),
    "description": "Total number of <reaction> <ec> <protein> links",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX ec:<http://purl.uniprot.org/enzyme/>\nPREFIX up:<http://purl.uniprot.org/core/>\n\nSELECT\n  (count(?reaction) as ?reactionEcProteinLinkCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:ec ?enzyme\n  SERVICE <http://sparql.uniprot.org/sparql> {\n    ?protein up:reviewed true .\n    ?protein up:enzyme ?enzyme.\n  }\n}",
    "ontologies": [
      "DCTERMS",
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
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 113 Number of distinct rhea EC number UniProtKB Swiss-Prot entries involved in links",
    "slug": "Rhea_113_Number_of_distinct_rhea_EC_number_UniProtKB_Swiss-Prot_entries_involved_in_links",
    "date": new Date("2025-06-18"),
    "description": "Number of distinct rhea, EC number, UniProtKB/Swiss-Prot entries involved in (<reaction> <ec> <protein>) links",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX ec:<http://purl.uniprot.org/enzyme/>\nPREFIX up:<http://purl.uniprot.org/core/>\n\nSELECT\n  (count(distinct ?reaction) as ?reactionCount)\n  (count(distinct ?enzyme) as ?enzymeCount)\n  (count(distinct ?protein) as ?proteinCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:ec ?enzyme\n  SERVICE <http://sparql.uniprot.org/sparql> {\n    ?protein up:reviewed true .\n    ?protein up:enzyme ?enzyme.\n  }\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "SERVICE",
      "DISTINCT",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 114 Retrieve the set of reactions catalyzed by enzymes of the ECOLI reference proteome reaction EC protein",
    "slug": "Rhea_114_Retrieve_the_set_of_reactions_catalyzed_by_enzymes_of_the_ECOLI_reference_proteome_reaction_EC_protein",
    "date": new Date("2025-06-18"),
    "description": "Retrieve the set of reactions catalyzed by enzymes of the ECOLI reference proteome (<reaction> - <EC> - <protein>)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX ec:<http://purl.uniprot.org/enzyme/>\nPREFIX up:<http://purl.uniprot.org/core/>\nPREFIX taxon:<http://purl.uniprot.org/taxonomy/>\nPREFIX keywords:<http://purl.uniprot.org/keywords/>\n\nSELECT ?protein ?ecNumber ?reaction where {\n\n  SERVICE <https://sparql.uniprot.org/sparql> {\n    ?protein a up:Protein .\n    ?protein up:reviewed true .\n    ?protein up:organism taxon:83333 .\n    ?protein up:classifiedWith keywords:1185 .\n      {?protein up:enzyme ?ecNumber}\n    UNION\n      {?protein up:domain/up:enzyme ?ecNumber}\n    UNION\n    {?protein up:component/up:enzyme ?ecNumber} .\n  }\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:ec ?ecNumber .\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "UNION",
      "SERVICE",
      "WITH",
      "IF"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 115 Retrieve the set of metabolites involved in reactions catalyzed by human genes HUMAN reference proteome",
    "slug": "Rhea_115_Retrieve_the_set_of_metabolites_involved_in_reactions_catalyzed_by_human_genes_HUMAN_reference_proteome",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX taxon:<http://purl.uniprot.org/taxonomy/>\nPREFIX ec:<http://purl.uniprot.org/enzyme/>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up:<http://purl.uniprot.org/core/>\nPREFIX keywords:<http://purl.uniprot.org/keywords/>\n\nSELECT\n  ?chebi\n  ?reaction\n  ?ecNumber\n  ?protein\n  ?ensemblTranscript\n  ?ensemblGene\nWHERE {\n  SERVICE <https://sparql.uniprot.org/sparql> {\n    ?protein a up:Protein .\n    ?protein up:reviewed true .\n    ?protein up:organism taxon:9606 .\n    ?protein up:classifiedWith keywords:1185 .\n\n    ?protein rdfs:seeAlso ?ensemblTranscript .\n    ?ensemblTranscript a up:Transcript_Resource .\n    ?ensemblTranscript up:database <http://purl.uniprot.org/database/Ensembl> .\n    ?ensemblTranscript up:transcribedFrom ?ensemblGene .\n\n      {?protein up:enzyme ?ecNumber .}\n    UNION\n      {?protein up:domain/up:enzyme ?ecNumber .}\n    UNION\n      {?protein up:component/up:enzyme ?ecNumber .}\n  }\n\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:ec ?ecNumber .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi . # only considering small molecules participants\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "UNION",
      "SERVICE",
      "FROM",
      "WITH",
      "ALL",
      "IF",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 116 Retrieve the set of reactions catalyzed by human enzymes reactions EC proteins from HUMAN reference proteome",
    "slug": "Rhea_116_Retrieve_the_set_of_reactions_catalyzed_by_human_enzymes_reactions_EC_proteins_from_HUMAN_reference_proteome",
    "date": new Date("2025-06-18"),
    "description": "Retrieve the set of reactions catalyzed by human enzymes (reactions - EC - proteins from HUMAN reference proteome)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX ec:<http://purl.uniprot.org/enzyme/>\nPREFIX up:<http://purl.uniprot.org/core/>\nPREFIX taxon:<http://purl.uniprot.org/taxonomy/>\nPREFIX keywords:<http://purl.uniprot.org/keywords/>\n\nSELECT\n  ?protein\n  ?ecNumber\n  ?reaction\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:ec ?ecNumber .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  # ?compound rh:chebi CHEBI:57970 .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf+ CHEBI:18059 .\n\n\n  SERVICE <https://sparql.uniprot.org/sparql> {\n    ?protein a up:Protein ;\n    up:reviewed true ;\n    up:organism taxon:83333 ;\n    up:classifiedWith keywords:1185 .\n      {?protein up:enzyme ?ecNumber}\n    UNION\n      {?protein up:domain/up:enzyme ?ecNumber}\n    UNION\n      {?protein up:component/up:enzyme ?ecNumber} .\n  }\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "UNION",
      "SERVICE",
      "WITH",
      "IF",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 117 Retrieve parent reactions and their catalyzing enzymes for a metabolite that is not directly involved in a reaction",
    "slug": "Rhea_117_Retrieve_parent_reactions_and_their_catalyzing_enzymes_for_a_metabolite_that_is_not_directly_involved_in_a_reaction",
    "date": new Date("2025-06-18"),
    "description": "Retrieve parent reactions (and their catalyzing enzymes) for a metabolite that is not directly involved in a reaction (ex: CHEBI:83137).",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX ec:<http://purl.uniprot.org/enzyme/>\nPREFIX up:<http://purl.uniprot.org/core/>\nPREFIX taxon:<http://purl.uniprot.org/taxonomy/>\nPREFIX keywords:<http://purl.uniprot.org/keywords/>\n\nSELECT\n  ?chebi\n  ?ecNumber\n  (count(?protein) as ?proteinCount)\n  ?reaction\n  ?equation\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?equation .\n  ?reaction rh:ec ?ecNumber .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  CHEBI:83137 rdfs:subClassOf+ ?chebi.\n\n  SERVICE <https://sparql.uniprot.org/sparql> {\n  ?protein a up:Protein .\n  ?protein up:reviewed true .\n    {?protein up:enzyme ?ecNumber}\n  UNION\n    {?protein up:domain/up:enzyme ?ecNumber}\n  UNION\n    {?protein up:component/up:enzyme ?ecNumber} .\n  }\n} \nGROUP BY ?chebi ?ecNumber ?reaction ?equation",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "UNION",
      "SERVICE",
      "GROUP BY",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 118 Number of approved reactions missing citations",
    "slug": "Rhea_118_Number_of_approved_reactions_missing_citations",
    "date": new Date("2025-06-18"),
    "description": "Number of approved reactions missing citations",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nSELECT\n  (count(?reaction) as ?eactionMissingCitationCount)\nWHERE\n{\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  OPTIONAL {?reaction rh:citation ?citation .}\n  FILTER (NOT EXISTS {?reaction rh:citation ?citation .})\n}",
    "ontologies": [
      "DCTERMS",
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
      "OPTIONAL",
      "EXISTS",
      "NOT EXISTS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 119 Give me the set of approved reactions missing citations",
    "slug": "Rhea_119_Give_me_the_set_of_approved_reactions_missing_citations",
    "date": new Date("2025-06-18"),
    "description": "Give me the set of approved reactions missing citations",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\nSELECT\n  ?reaction\nWHERE\n{\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  OPTIONAL {?reaction rh:citation ?citation .}\n  FILTER (NOT EXISTS {?reaction rh:citation ?citation .} )\n}\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
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
      "OPTIONAL",
      "ORDER BY",
      "EXISTS",
      "NOT EXISTS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 12",
    "slug": "Rhea_12",
    "date": new Date("2025-06-18"),
    "description": "Select all Rhea reactions linked to protein sequences (enzymes and transporters) in UniProtKB",
    "context": null,
    "inidces": [],
    "query": "PREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\n# Query 12\n# Select all Rhea reactions used to annotate enzyme sequences in UniProtKB\n# return the number of UniProtKB entries\n# Federated query using a service to UniProt SPARQL endpoint\n#\n# This query corresponds to the Rhea website query:\n# https://www.rhea-db.org/rhea?query=uniprot:*\n#\nSELECT ?uniprotCount ?rhea ?accession ?equation \nWHERE {\n  SERVICE <https://sparql.uniprot.org/sparql> { \n  \tSELECT ?rhea (count(?uniprot) as ?uniprotCount) {\n      ?uniprot up:annotation/up:catalyticActivity/up:catalyzedReaction ?rhea . \n  \t}\n  \tGROUP BY ?rhea\n  }\n  ?rhea rh:accession ?accession .\n  ?rhea rh:equation ?equation .\n}",
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
      "SERVICE",
      "GROUP BY",
      "USING",
      "ALL",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 126 list protein components ec",
    "slug": "Rhea_126_list_protein_components_ec",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX up:<http://purl.uniprot.org/core/>\nPREFIX ec:<http://purl.uniprot.org/enzyme/>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT\n  distinct\n    ?enzyme\nWHERE\n{\n  ?protein up:reviewed true .\n  ?protein up:mnemonic ?mnemonic .\n  ?protein up:domain ?domain .\n  ?domain up:enzyme ?enzyme .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 128 list EC numbers not linked to UniProt entries",
    "slug": "Rhea_128_list_EC_numbers_not_linked_to_UniProt_entries",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX up:<http://purl.uniprot.org/core/>\nPREFIX ec:<http://purl.uniprot.org/enzyme/>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT\n  (count(distinct ?ecNumber) as ?ecCount)\nWHERE\n{\n  ?ecNumber rdfs:subClassOf up:Enzyme .\n  FILTER (NOT EXISTS {?ecNumber up:obsolete true .} )\n  FILTER (!regex(?ecNumber,'-')) .\n\n  FILTER (NOT EXISTS {\n    ?protein up:enzyme ?ecNumber .\n    ?protein up:reviewed true .\n  })\n  FILTER (NOT EXISTS {\n    ?protein up:domain/up:enzyme ?ecNumber .\n    ?protein up:reviewed true .\n  })\n  FILTER (NOT EXISTS {\n    ?protein up:reviewed true .\n    ?protein up:component/up:enzyme ?ecNumber .\n  })\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER",
      "DISTINCT",
      "REGEX",
      "EXISTS",
      "NOT EXISTS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 13",
    "slug": "Rhea_13",
    "date": new Date("2025-06-18"),
    "description": "Select all Rhea reactions used in UniProtKB/Swiss-Prot for a given organism (NCBI taxonomy ID).",
    "context": null,
    "inidces": [],
    "query": "PREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\n# Query 13\n# Select all Rhea reactions used to annotate Escherichia coli (taxid=83333) in UniProtKB/Swiss-Prot\n# return the number of UniProtKB entries\n# \n# Federated query using a service to UniProt SPARQL endpoint\n#\n# This query cannot be performed using the Rhea search website\nSELECT ?uniprot ?mnemo ?rhea ?accession ?equation \nWHERE {\n  SERVICE <https://sparql.uniprot.org/sparql> { \n    VALUES (?taxid) { (taxon:83333) }\n    GRAPH <http://sparql.uniprot.org/uniprot> {\n      ?uniprot up:reviewed true . \n      ?uniprot up:mnemonic ?mnemo . \n      ?uniprot up:organism ?taxid .\n      ?uniprot up:annotation/up:catalyticActivity/up:catalyzedReaction ?rhea . \n    }\n  }\n  ?rhea rh:accession ?accession .\n  ?rhea rh:equation ?equation .\n}",
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
      "GRAPH",
      "VALUES",
      "SERVICE",
      "USING",
      "ALL"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 130 Where are the human genes encoding enzymes metabolizing cholesterol expressed",
    "slug": "Rhea_130_Where_are_the_human_genes_encoding_enzymes_metabolizing_cholesterol_expressed",
    "date": new Date("2025-06-18"),
    "description": "Where are the human genes encoding enzymes metabolizing cholesterol expressed?",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX : <http://purl.orthodb.org/>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX odbgroup:<http://purl.orthodb.org/odbgroup/>\nSELECT *\nWHERE {\n  SERVICE <https://sparql.orthodb.org/sparql/> {\n    ?gene a :Gene; :memberOf odbgroup:2906at28890.\n    ?gene :xref [a :Xref; :xrefResource ?xref].\n    ?xref a :Uniprot.\n  }\n  SERVICE <https://sparql.uniprot.org/sparql> {\n    ?xref a up:Protein; up:recommendedName [up:fullName ?name] ;\n    up:annotation/up:catalyticActivity/up:catalyzedReaction ?reaction .\n  }\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:directionalReaction ?directionalReaction .\n  OPTIONAL { ?directionalReaction rdfs:seeAlso ?xref2 . }\n  ?reaction rh:bidirectionalReaction ?bidirectionalReaction .\n  OPTIONAL { ?bidirectionalReaction rdfs:seeAlso ?xref2 . }\n}",
    "ontologies": [
      "DCTERMS",
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
      "SERVICE"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 131 Where are the human genes encoding enzymes metabolizing cholesterol expressed",
    "slug": "Rhea_131_Where_are_the_human_genes_encoding_enzymes_metabolizing_cholesterol_expressed",
    "date": new Date("2025-06-18"),
    "description": "Where are the human genes encoding enzymes metabolizing cholesterol expressed?",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX up:<http://purl.uniprot.org/core/>\nPREFIX taxon:<http://purl.uniprot.org/taxonomy/>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX lscr: <http://purl.org/lscr#>\n\nSELECT\n  distinct\n    ?protein\n    ?ensemblGene\n    ?reaction\n    ?anatomicEntityLabel\n    ?anatomicEntity\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n      ?reaction rh:status rh:Approved .\n      ?reaction rh:equation ?reactionEquation .\n      ?reaction rh:side ?reactionSide .\n      ?reactionSide rh:contains ?participant .\n      ?participant rh:compound ?compound .\n      # compound constraint (CHEBI:16113 == cholesterol)\n      ?compound rh:chebi CHEBI:16113 .\n  SERVICE <https://sparql.uniprot.org/sparql> {\n    # taxonomy constraint (taxon:9606 == Homo sapiens)\n    ?protein up:organism taxon:9606 .\n    ?protein up:annotation ?a .\n    ?a a up:Catalytic_Activity_Annotation .\n    ?a up:catalyticActivity ?ca .\n    ?ca up:catalyzedReaction ?reaction .\n    ?protein rdfs:seeAlso / up:transcribedFrom ?ensemblGene .\n  }\n  # federated query to Bgee (expression data)\n  SERVICE <https://www.bgee.org/sparql/> {\n    ?gene genex:isExpressedIn ?anatomicEntity .\n    ?gene lscr:xrefEnsemblGene ?ensemblGene .\n    ?anatomicEntity rdfs:label ?anatomicEntityLabel .\n  }\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
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
      "STR",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 14",
    "slug": "Rhea_14",
    "date": new Date("2025-06-18"),
    "description": "Select all Rhea reactions that have a given ChEBI ID as reaction participant",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\n# Query 14\n# Select all Rhea reactions that have CHEBI:29985 (L-glutamate) as reaction participant\n# \n# This query corresponds to the Rhea website query:\n# https://www.rhea-db.org/rhea?query=chebi:29985\nSELECT distinct ?chebi ?rhea ?equation\nWHERE {\n  ?rhea rdfs:subClassOf rh:Reaction .\n  ?rhea rh:equation ?equation .\n  ?rhea rh:side/rh:contains/rh:compound ?compound .\n  #\n  # the ChEBI can be used either as a small molecule, the reactive part of a macromolecule or as a polymer.\n  #\n  ?compound (rh:chebi|(rh:reactivePart/rh:chebi)|rh:underlyingChebi) ?chebi .\n  VALUES (?chebi) { (CHEBI:29985) }\n}",
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
      "DISTINCT",
      "ALL",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 15",
    "slug": "Rhea_15",
    "date": new Date("2025-06-18"),
    "description": "Select all ChEBI compounds used in Rhea as reaction participant",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\n# Query 15\n# Select all ChEBI compounds used in Rhea as reaction participant\n# \n# This query can not be expressed in the Rhea website\nSELECT ?chebi ?name (count(?rhea) as ?countRhea)\nWHERE {\n  ?rhea rdfs:subClassOf rh:Reaction .\n  ?rhea rh:side/rh:contains/rh:compound ?compound .\n  #\n  # the ChEBI can be used either as a small molecule, the reactive part of a macromolecule or as a polymer.\n  #\n  ?compound (rh:chebi|(rh:reactivePart/rh:chebi)|rh:underlyingChebi) ?chebi .\n  ?chebi up:name ?name .\n}\nGROUP BY ?chebi ?name\nORDER BY DESC(?countRhea)",
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
      "GROUP BY",
      "ORDER BY",
      "ALL",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 16",
    "slug": "Rhea_16",
    "date": new Date("2025-06-18"),
    "description": "Select all Rhea reactions that have a pair of ChEBI IDs as reaction participant and in opposite side",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\n# Query 16\n# Select all Rhea reactions that have a pair of ChEBI IDs as reaction participant and in opposite side\n# Return Rhea reactions that have CHEBI:29985 (L-glutamate) as reaction participant in one side\n# and CHEBI:58359 (L-glutamine) in the other side\n#\n# This query cannot be expressed in the Rhea website\nSELECT ?chebi1 ?name1 ?chebi2 ?name2 ?rhea ?equation\nWHERE {\n  VALUES (?chebi1) { (CHEBI:29985) }\n  ?chebi1 up:name ?name1 .\n  ?rhea rh:side ?reactionSide1 .\n  ?reactionSide1  rh:contains / rh:compound / rh:chebi ?chebi1 .\n\n  VALUES (?chebi2) { (CHEBI:58359) }\n  ?chebi2 up:name ?name2 .\n\n  ?rhea rh:side ?reactionSide2 .\n  ?reactionSide2  rh:contains / rh:compound / rh:chebi ?chebi2 .\n  \n  ?reactionSide1 rh:transformableTo ?reactionSide2 .\n  \n  ?rhea rh:equation ?equation .\n}",
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
      "ALL",
      "CONTAINS",
      "MIN"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 17",
    "slug": "Rhea_17",
    "date": new Date("2025-06-18"),
    "description": "Select all Rhea reactions that involve a lipid, i.e. children of CHEBI:18059 in the ChEBI hierarchy.",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX chebihash: <http://purl.obolibrary.org/obo/chebi#>\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\n# Query 17\n# Select all Rhea reactions that involve a lipid, i.e. children of CHEBI:18059 in the ChEBI hierarchy.\n# \n# This query corresponds to the Rhea website query:\n# https://www.rhea-db.org/rhea?query=chebi:18059\n#\nSELECT distinct ?chebi ?name ?rhea ?equation\nWHERE {\n  ?rhea rdfs:subClassOf rh:Reaction .\n  ?rhea rh:equation ?equation .\n  ?rhea rh:side/rh:contains/rh:compound ?compound .\n  #\n  # the ChEBI can be used either as a small molecule, the reactive part of a macromolecule or as a polymer.\n  #\n  { \n    ?chebi rdfs:subClassOf* CHEBI:18059 . # lipid\n    ?compound (rh:chebi|(rh:reactivePart/rh:chebi)|rh:underlyingChebi) ?chebi .\n  }\n  UNION \n  { # add non-pH 7.3 species\n    ?not7_3 rdfs:subClassOf* CHEBI:18059 . # lipid\n    ?not7_3 rdfs:subClassOf ?chebiRestriction .\n    ?chebiRestriction a owl:Restriction .\n    ?chebiRestriction owl:onProperty chebihash:has_major_microspecies_at_pH_7_3 .\n    ?chebiRestriction owl:someValuesFrom ?chebi .\n    ?compound (rh:chebi|(rh:reactivePart/rh:chebi)|rh:underlyingChebi) ?chebi .\n  }\n  ?chebi up:name ?name .\n}",
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
      "UNION",
      "VALUES",
      "DISTINCT",
      "FROM",
      "ADD",
      "ALL",
      "STR",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 18",
    "slug": "Rhea_18",
    "date": new Date("2025-06-18"),
    "description": "Use <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX sachem: <http://bioinfo.uochb.cas.cz/rdf/v1.0/sachem#>\n\n\nSELECT \n  ?rhea \n  ?chebi\nWHERE {\n  SERVICE <https://idsm.elixir-czech.cz/sparql/endpoint/chebi> {\n    ?chebi sachem:substructureSearch [\n        sachem:query \"[C@]12(CCC3CCCC[C@]3(C)[C@@]1([H])CC[C@]1(C)[C@@]([H])([C@@](C)([H])CCCC(C)C)CC[C@@]21[H])[H]\" ].\n  }\n  ?rhea rh:side/rh:contains/rh:compound/rdfs:subClassOf ?chebi .\n}",
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
      "SERVICE",
      "STR",
      "SUBSTR",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 19 draft human metabolome",
    "slug": "Rhea_19_draft_human_metabolome",
    "date": new Date("2025-06-18"),
    "description": "Generate a draft human metabolome",
    "context": null,
    "inidces": [],
    "query": "PREFIX chebislash: <http://purl.obolibrary.org/obo/chebi/>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?uniprot ?mnemonic ?rhea ?chebi ?smiles ?inchiKey\nWHERE\n{\n  ?rhea rh:side/rh:contains/rh:compound ?compound .\n  ?compound (rh:chebi|(rh:reactivePart/rh:chebi)|rh:underlyingChebi) ?chebi .\n  ?chebi chebislash:smiles ?smiles ;\n          chebislash:inchikey ?inchiKey .\n  SERVICE <https://sparql.uniprot.org/sparql> {\n     ?uniprot up:annotation/up:catalyticActivity/up:catalyzedReaction ?rhea ;\n                                             up:organism taxon:9606 ;\n                                             up:mnemonic ?mnemonic .\n\n   }\n}",
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
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 2",
    "slug": "Rhea_2",
    "date": new Date("2025-06-18"),
    "description": "Select all Rhea reactions annotated with a given Pubmed ID",
    "context": null,
    "inidces": [],
    "query": "PREFIX pubmed: <http://rdf.ncbi.nlm.nih.gov/pubmed/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\n# Query 2 \n# Select all Rhea reactions annotated with a given Pubmed identifier (PMID = 29867142)\n#\nSELECT ?pubmed ?rhea ?accession ?isTransport  ?equation \nWHERE {\n  ?rhea rdfs:subClassOf rh:Reaction .\n  ?rhea rh:accession ?accession .\n  ?rhea rh:citation ?pubmed .\n  VALUES (?pubmed) { (pubmed:29867142) }\n  ?rhea rh:isTransport ?isTransport .\n  ?rhea rh:equation ?equation .\n} ORDER BY ?rhea",
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
      "ORDER BY",
      "WITH",
      "ALL",
      "STR",
      "IF"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 20 search chemical names in japanese",
    "slug": "Rhea_20_search_chemical_names_in_japanese",
    "date": new Date("2025-06-18"),
    "description": "Search for Chemical names starting in Japanese, translated to english using allie",
    "context": null,
    "inidces": [],
    "query": "PREFIX oboInOwl: <http://www.geneontology.org/formats/oboInOwl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT\n*\nWHERE {\nSERVICE <https://data.allie.dbcls.jp/sparql>{\n        ?x rdfs:label \"1,2,4-トリクロロベンゼン\"@ja ;\n            rdfs:label ?englishLabel .\n        FILTER(lang(?englishLabel) = \"en\")\n    }\n  BIND(STR(?englishLabel) AS ?englishLabelStr)\n  ?chebi rdfs:label|oboInOwl:hasSynonym ?englishLabelStr .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER",
      "BIND",
      "SERVICE",
      "ALL",
      "STR",
      "LANG",
      "NOW"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 21 count rhea examples",
    "slug": "Rhea_21_count_rhea_examples",
    "date": new Date("2025-06-18"),
    "description": "SELECT the number of reactions in Rhea",
    "context": null,
    "inidces": [],
    "query": "PREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT (count(?reaction) as ?reactionCount) WHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 22 Select all reactions and their equation ordered by reaction identifier",
    "slug": "Rhea_22_Select_all_reactions_and_their_equation_ordered_by_reaction_identifier",
    "date": new Date("2025-06-18"),
    "description": "Select all reactions and their equation, ordered by reaction identifier",
    "context": null,
    "inidces": [],
    "query": "PREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT ?reaction ?reactionId ?equation WHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:equation ?equation .\n  ?reaction rh:id ?reactionId . \n}\nORDER BY ?reaction",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 23 Select all reaction IDs status and equations ordered by reaction identifier",
    "slug": "Rhea_23_Select_all_reaction_IDs_status_and_equations_ordered_by_reaction_identifier",
    "date": new Date("2025-06-18"),
    "description": "Select all reaction IDs, status and equations ordered by reaction identifier",
    "context": null,
    "inidces": [],
    "query": "PREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT ?reactionId ?status ?equation WHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:equation ?equation .\n  ?reaction rh:status ?status .\n  ?reaction rh:id ?reactionId . \n}\nORDER BY ?reaction",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 24 Display only a subset of reactions",
    "slug": "Rhea_24_Display_only_a_subset_of_reactions",
    "date": new Date("2025-06-18"),
    "description": "Select the 10 reactions, with the lowest identifier by alphabetic sort",
    "context": null,
    "inidces": [],
    "query": "PREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT ?reaction ?reactionId WHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:id ?reactionId . \n}\nORDER BY ?reaction\nLIMIT 10",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "LIMIT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 25 Select the first 10 reactions starting from the fifth reaction",
    "slug": "Rhea_25_Select_the_first_10_reactions_starting_from_the_fifth_reaction",
    "date": new Date("2025-06-18"),
    "description": "Select the fifth to fiftheenth (inclusive) reactions, with the lowest identifier by alphabetic sort",
    "context": null,
    "inidces": [],
    "query": "PREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nSELECT ?reaction ?reactionId WHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:id ?reactionId . \n}\nORDER BY ?reaction\nLIMIT 10\nOFFSET 5",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "LIMIT",
      "OFFSET"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 26 Select the number of reactions with status Approved",
    "slug": "Rhea_26_Select_the_number_of_reactions_with_status_Approved",
    "date": new Date("2025-06-18"),
    "description": "Select the number of reactions with status Approved",
    "context": null,
    "inidces": [],
    "query": "PREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT (count(?reaction) as ?reactionCount) WHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 27 Select the number of reactions that have Xrefs",
    "slug": "Rhea_27_Select_the_number_of_reactions_that_have_Xrefs",
    "date": new Date("2025-06-18"),
    "description": "Select the number of reactions that have cross-references",
    "context": null,
    "inidces": [],
    "query": "PREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT (count(distinct ?reaction) as ?distinctReactionCount) WHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:directionalReaction ?directionalReaction .\n  ?reaction rh:bidirectionalReaction ?bidirectionalReaction .\n  OPTIONAL { ?directionalReaction rdfs:seeAlso ?xref . }\n  OPTIONAL { ?bidirectionalReaction rdfs:seeAlso ?xref . }\n  FILTER (BOUND(?xref))\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER",
      "OPTIONAL",
      "DISTINCT",
      "BOUND",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 28 Select all reactions with Xrefs",
    "slug": "Rhea_28_Select_all_reactions_with_Xrefs",
    "date": new Date("2025-06-18"),
    "description": "Select all reactions with cross-references",
    "context": null,
    "inidces": [],
    "query": "PREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT \n  DISTINCT ?reaction \nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:directionalReaction ?directionalReaction .\n  ?reaction rh:bidirectionalReaction ?bidirectionalReaction .\n  OPTIONAL { ?directionalReaction rdfs:seeAlso ?xref . }\n  OPTIONAL { ?bidirectionalReaction rdfs:seeAlso ?xref . }\n  FILTER (BOUND(?xref))\n}\nORDER BY ?reaction",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER",
      "OPTIONAL",
      "ORDER BY",
      "DISTINCT",
      "BOUND"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 29 Select all approved reactions linked to PMID X",
    "slug": "Rhea_29_Select_all_approved_reactions_linked_to_PMID_X",
    "date": new Date("2025-06-18"),
    "description": "Select all approved reactions linked to PMID:2460092",
    "context": null,
    "inidces": [],
    "query": "PREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX pubmed:<http://rdf.ncbi.nlm.nih.gov/pubmed/>\n\nSELECT ?reaction ?reactionEquation  WHERE {\n  BIND(pubmed:2460092 AS ?cit)\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:citation ?cit .\n}\nORDER BY ?reaction",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND",
      "ORDER BY"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 3",
    "slug": "Rhea_3",
    "date": new Date("2025-06-18"),
    "description": "Select the specific form of <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\n# Query 3\n# Select the specific form of RHEA:11628.\n# This query mimics the Related reactions sections of\n# https://www.rhea-db.org/rhea/11628\n#\nSELECT ?rhea  ?equation ?childrenRhea ?childrenEquation \nWHERE {\n  VALUES (?rhea) {(rh:11628)}\n  ?rhea rh:equation ?equation .\n  ?childrenRhea rdfs:subClassOf+ ?rhea .\n  ?childrenRhea rh:equation ?childrenEquation .\n}",
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
      "IF"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 30 Select all approved reactions annotated with a given Pubmed ID",
    "slug": "Rhea_30_Select_all_approved_reactions_annotated_with_a_given_Pubmed_ID",
    "date": new Date("2025-06-18"),
    "description": "Select all approved reactions annotated with a given Pubmed ID (2460092, and show the pubmed id in result as text, using strafter and BIND)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX pubmed:<http://rdf.ncbi.nlm.nih.gov/pubmed/>\n\nSELECT ?reaction ?pubMedID ?reactionEquation  WHERE {\n  BIND(pubmed:2460092 AS ?cit)\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:citation ?cit .\n  BIND(strafter(str(?cit), str(pubmed:)) AS ?pubMedID  )\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND",
      "STR"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 31 Select the average number of citation of reactions that have at least one citation",
    "slug": "Rhea_31_Select_the_average_number_of_citation_of_reactions_that_have_at_least_one_citation",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX rh: <http://rdf.rhea-db.org/>\n\nSELECT (AVG(?linksToPubmedPerReaction) AS ?avgLinksToPubmedPerReaction)\nWHERE\n{\n    SELECT ?reaction (COUNT(DISTINCT ?citation) AS ?linksToPubmedPerReaction)\n    WHERE\n    {\n        ?reaction rh:citation ?citation .\n    }\nGROUP BY ?reaction ORDER BY DESC(?linksToPubmedPerReaction)\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
      "COUNT",
      "AVG"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 32 Select the distribution of reactions according to their status",
    "slug": "Rhea_32_Select_the_distribution_of_reactions_according_to_their_status",
    "date": new Date("2025-06-18"),
    "description": "Select the distribution of reactions according to their status",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT\n  ?status\n  (count(?reaction) as ?reactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status ?status .\n}\nGROUP BY ?status",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 33 Select all approved transport reactions",
    "slug": "Rhea_33_Select_all_approved_transport_reactions",
    "date": new Date("2025-06-18"),
    "description": "Select all approved transport reactions",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  ?reaction\n  ?reactionEquation\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:isTransport true\n}\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "STR"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 34 Select all cross-references for a given reaction",
    "slug": "Rhea_34_Select_all_cross-references_for_a_given_reaction",
    "date": new Date("2025-06-18"),
    "description": "Select all cross-references for a given reaction (RHEA:11680)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT \n  ?reaction \n  ?xref \nWHERE {\n  BIND (rh:11680 AS ?reaction)\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:directionalReaction ?directionalReaction .\n  OPTIONAL { ?directionalReaction rdfs:seeAlso ?xref . }\n  ?reaction rh:bidirectionalReaction ?bidirectionalReaction .\n  OPTIONAL { ?bidirectionalReaction rdfs:seeAlso ?xref . }\n}",
    "ontologies": [
      "DCTERMS",
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
      "BIND"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 35 Select all cross-references Kegg MetaCyc Macie for a given reaction",
    "slug": "Rhea_35_Select_all_cross-references_Kegg_MetaCyc_Macie_for_a_given_reaction",
    "date": new Date("2025-06-18"),
    "description": "Select all cross-references (to KEGG, MetaCyc, Macie, ...) for a given reaction (RHEA:11932)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT\n  ?reaction\n  ?xref\nWHERE {\n  BIND (rh:11932 AS ?reaction)\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:directionalReaction ?directionalReaction .\n  OPTIONAL { ?directionalReaction rdfs:seeAlso ?xref . }\n  ?reaction rh:bidirectionalReaction ?bidirectionalReaction .\n  OPTIONAL { ?bidirectionalReaction rdfs:seeAlso ?xref . }\n}",
    "ontologies": [
      "DCTERMS",
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
      "BIND"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 36 Select the number of reactions with cross-references to KEGG resource",
    "slug": "Rhea_36_Select_the_number_of_reactions_with_cross-references_to_KEGG_resource",
    "date": new Date("2025-06-18"),
    "description": "Select the number of reactions with cross-references to KEGG resource (via bidirectional rhea reactions)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX kegg: <http://identifiers.org/kegg.reaction/>\n\nSELECT (count(?reaction) as ?reactionCount) \nWHERE {\n    ?reaction rdfs:subClassOf rh:Reaction .\n    ?reaction rh:bidirectionalReaction ?bidirectionalReaction .\n    ?bidirectionalReaction rdfs:seeAlso ?xref .\n    FILTER (regex(?xref, str(kegg:)))\n}",
    "ontologies": [
      "DCTERMS",
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
      "STR",
      "REGEX",
      "IF",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 37 Select the number of reactions with cross-references to MetaCyc",
    "slug": "Rhea_37_Select_the_number_of_reactions_with_cross-references_to_MetaCyc",
    "date": new Date("2025-06-18"),
    "description": "Select the number of reactions with cross-references to MetaCyc",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX up:<http://purl.uniprot.org/core/>\nPREFIX keywords:<http://purl.uniprot.org/keywords/>\nPREFIX taxon:<http://purl.uniprot.org/taxonomy/>\n\nSELECT\n  (count(distinct ?rhea) as ?rheaMetacycCount)\n  (count(distinct ?xref) as ?metacycRheaCount)\n  (count(?rhea) as ?rheaMetacycXrefCount)\nWHERE {\n  ?rhea rdfs:subClassOf rh:Reaction .\n  ?rhea rh:status rh:Approved .\n  ?rhea rh:directionalReaction ?directionalReaction .\n  ?rhea rh:bidirectionalReaction ?bidirectionalReaction .\n  {\n    ?directionalReaction rdfs:seeAlso ?xref .\n    FILTER regex(str(?xref), \\\"METACYC\\\") .\n  }\n  UNION\n  {\n    ?bidirectionalReaction rdfs:seeAlso ?xref .\n    FILTER regex(str(?xref), \\\"METACYC\\\") .\n  }\n  UNION\n  {\n    ?rhea rdfs:seeAlso ?xref .\n    FILTER regex(str(?xref), \\\"METACYC\\\") .\n  }\n}",
    "ontologies": [
      "DCTERMS",
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
      "UNION",
      "DISTINCT",
      "STR",
      "REGEX",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 39 Select all reactions annotated with a given Pubmed ID",
    "slug": "Rhea_39_Select_all_reactions_annotated_with_a_given_Pubmed_ID",
    "date": new Date("2025-06-18"),
    "description": "Select all reactions annotated with a given Pubmed ID",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX pubmed:<http://rdf.ncbi.nlm.nih.gov/pubmed/>\n\nSELECT\n  ?reaction\n  ?pubMedID\n  ?reactionEquation\nWHERE {\n  BIND(pubmed:2460092 AS ?pubMedID)\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:citation ?pubMedID .\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 4",
    "slug": "Rhea_4",
    "date": new Date("2025-06-18"),
    "description": "Select all cross-references for a given reaction",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\n# Query 4\n# Select all cross-references mapped to RHEA:21016\n# \n# This query mimics the Cross-references section of \n# https://www.rhea-db.org/rhea/21016\n#\nSELECT distinct ?rhea ?rheaDir ?xref \nWHERE {\n  ?rhea rdfs:subClassOf rh:Reaction .\n  VALUES (?rhea) {(rh:21016)}\n  {\n    ?rhea rdfs:seeAlso ?xref .\n    BIND(?rhea as ?rheaDir)\n  }\n  UNION\n  {\n    ?rhea rh:directionalReaction ?directionalReaction .\n    ?directionalReaction rdfs:seeAlso ?xref . \n    BIND(?directionalReaction as ?rheaDir  )\n  }\n  UNION\n  {\n    ?rhea rh:bidirectionalReaction ?bidirectionalReaction .\n    ?bidirectionalReaction rdfs:seeAlso ?xref . \n    BIND(?bidirectionalReaction as ?rheaDir  )\n  }\n}",
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
      "UNION",
      "BIND",
      "VALUES",
      "DISTINCT",
      "ALL"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 40 Select all citations of a given reaction",
    "slug": "Rhea_40_Select_all_citations_of_a_given_reaction",
    "date": new Date("2025-06-18"),
    "description": "Select all citations of a given reaction",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX pubmed:<http://rdf.ncbi.nlm.nih.gov/pubmed/>\n\nSELECT\n  ?reaction\n  ?citation\nWHERE {\n  BIND(rh:11680 AS ?reaction)\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:citation ?citation .\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 41 Select all reactions with citations display the number of citations and order by reaction ID",
    "slug": "Rhea_41_Select_all_reactions_with_citations_display_the_number_of_citations_and_order_by_reaction_ID",
    "date": new Date("2025-06-18"),
    "description": "Select all reactions with citations, display the number of citations and ORDER BY reaction ID",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  ?reaction\n  (COUNT(DISTINCT ?citation) AS ?countPubmedPerReaction)\nWHERE\n{\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:citation ?citation .\n}\nGROUP BY ?reaction\nORDER BY DESC (COUNT(DISTINCT ?citation))",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 42 Select the average number of citation of reactions that have at least one citation",
    "slug": "Rhea_42_Select_the_average_number_of_citation_of_reactions_that_have_at_least_one_citation",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX rh: <http://rdf.rhea-db.org/>\nSELECT\n  (AVG(?linksToPubmedPerReaction) AS ?avgLinksToPubmedPerReaction)\nWHERE\n{\n  SELECT\n    ?reaction\n    (COUNT(DISTINCT ?citation) AS ?linksToPubmedPerReaction)\n  WHERE\n  {\n    ?reaction rh:citation ?citation .\n  }\nGROUP BY ?reaction ORDER BY DESC(?linksToPubmedPerReaction)\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
      "COUNT",
      "AVG"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 43 Select the child reactions of a given reaction in the Rhea hierarchy",
    "slug": "Rhea_43_Select_the_child_reactions_of_a_given_reaction_in_the_Rhea_hierarchy",
    "date": new Date("2025-06-18"),
    "description": "Select the child reaction(s) of a given reaction (RHEA:11628) in the Rhea hierarchy, (using rdfs:subClassOf)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT ?reaction ?equation ?childReaction ?childEquation \nWHERE {\n  BIND (rh:11628 AS ?reaction)\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?equation .\n\n  ?childReaction rdfs:subClassOf rh:Reaction .\n  ?childReaction rh:status rh:Approved .\n  ?childReaction rdfs:subClassOf ?reaction .\n  ?childReaction rh:equation ?childEquation .\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 44 Select the descendant reaction of a given reaction in the Rhea hierarchy",
    "slug": "Rhea_44_Select_the_descendant_reaction_of_a_given_reaction_in_the_Rhea_hierarchy",
    "date": new Date("2025-06-18"),
    "description": "Select the descendant reaction(s) of a given reaction (RHEA:11628) in the Rhea hierarchy, (using rdfs:subClassOf+)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT \n  ?reaction \n  ?equation \n  ?descendantReaction \n  ?descendantEquation \nWHERE {\n  BIND(rh:11628 AS ?reaction)\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?equation .\n\n  ?descendantReaction rdfs:subClassOf rh:Reaction .\n  ?descendantReaction rh:status rh:Approved .\n  ?descendantReaction rdfs:subClassOf+ ?reaction .\n  ?descendantReaction rh:equation ?descendantEquation .\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 45 Select the parent reactions of a given reaction",
    "slug": "Rhea_45_Select_the_parent_reactions_of_a_given_reaction",
    "date": new Date("2025-06-18"),
    "description": "Select the parent reaction(s) of a given reaction",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT \n  ?reactionChild \n  ?childEquation \n  ?reactionParent \n  ?parentEquation \nWHERE {\n  BIND (rh:39155 AS ?reactionChild)\n  ?reactionChild rdfs:subClassOf rh:Reaction .\n  ?reactionChild rh:status rh:Approved .\n  ?reactionChild rh:equation ?childEquation .\n  ?reactionParent rdfs:subClassOf rh:Reaction .\n  ?reactionParent rh:status rh:Approved .\n  ?reactionParent rh:equation ?parentEquation .\n  ?reactionChild rdfs:subClassOf ?reactionParent .\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 46 Number of IsA relationships",
    "slug": "Rhea_46_Number_of_IsA_relationships",
    "date": new Date("2025-06-18"),
    "description": "Number of IsA relationships, distinct child reactions and distinct parent reactions",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT \n    (COUNT(?reactionChild) AS ?isARelationCount) \n    (COUNT(distinct ?reactionChild) AS ?uniqueReactionChildCount)\n    (COUNT(distinct ?reactionParent) AS ?uniqueReactionParentCount)\nWHERE {\n    ?reactionChild rdfs:subClassOf rh:Reaction .\n    ?reactionChild rh:status rh:Approved .\n    ?reactionParent rdfs:subClassOf rh:Reaction .\n    ?reactionParent rh:status rh:Approved .\n    ?reactionChild rdfs:subClassOf ?reactionParent .\n}",
    "ontologies": [
      "DCTERMS",
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
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 47 Select all children reactions and give the number of parent reactions",
    "slug": "Rhea_47_Select_all_children_reactions_and_give_the_number_of_parent_reactions",
    "date": new Date("2025-06-18"),
    "description": "Select all children reactions and give the number of parent reactions.",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT \n  (count(?reactionChild) as ?isARelationCount) \n  (count(distinct ?reactionChild) as ?uniqueReactionChildCount) \n  (count(distinct ?reactionParent) as ?uniqueReactionParentCount) \nWHERE {\n  ?reactionChild rdfs:subClassOf rh:Reaction .\n  ?reactionChild rh:status rh:Approved .\n  ?reactionParent rdfs:subClassOf rh:Reaction .\n  ?reactionParent rh:status rh:Approved .\n  ?reactionChild rdfs:subClassOf ?reactionParent .\n}",
    "ontologies": [
      "DCTERMS",
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
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 48 Select all reactions with at least one parent reaction and give the number ancestor reactions",
    "slug": "Rhea_48_Select_all_reactions_with_at_least_one_parent_reaction_and_give_the_number_ancestor_reactions",
    "date": new Date("2025-06-18"),
    "description": "Select all reactions with at least one parent reaction and give the number ancestor reactions",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\nSELECT\n  ?reaction\n  (count(?parentReaction) as ?parentReactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n\n  ?reaction rdfs:subClassOf ?parentReaction .\n\n  ?parentReaction rdfs:subClassOf rh:Reaction .\n  ?parentReaction rh:status rh:Approved .\n}\nGROUP BY ?reaction\nORDER BY DESC (?parentReactionCount) ?reaction",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 49 Select parent reactions give the number of child and descendant reactions",
    "slug": "Rhea_49_Select_parent_reactions_give_the_number_of_child_and_descendant_reactions",
    "date": new Date("2025-06-18"),
    "description": "Select parent reactions, give the number of child and descendant reactions",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT \n  ?reaction\n  (count(?ancestorReaction) as ?ancestorReactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?ancestorReaction rdfs:subClassOf rh:Reaction .\n  ?ancestorReaction rh:status rh:Approved .\n  ?reaction rdfs:subClassOf+ ?ancestorReaction .\n}\nGROUP BY ?reaction\nORDER BY (count(?ancestorReaction))",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 5",
    "slug": "Rhea_5",
    "date": new Date("2025-06-18"),
    "description": "Select all Rhea reactions mapped to KEGG reactions",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\n# Query 5 \n# Select all Rhea reactions mapped to KEGG reactions\n# KEGG reactions are mapped to Rhea bidirectional reactions\n# Rhea web query: https://www.rhea-db.org/rhea?query=kegg:*\n#\nSELECT ?rhea ?kegg ?rheaDir \nWHERE {\n  ?rhea rdfs:subClassOf rh:Reaction .\n  ?rhea rh:bidirectionalReaction ?rheaDir .\n  ?rheaDir rdfs:seeAlso ?kegg .\n  FILTER (regex(str(?kegg),'kegg'))\n}",
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
      "ALL",
      "STR",
      "REGEX"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 50 Number of reactions that have parent and child reactions",
    "slug": "Rhea_50_Number_of_reactions_that_have_parent_and_child_reactions",
    "date": new Date("2025-06-18"),
    "description": "Number of reactions that have parent and child reactions",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT ?reaction\n  (count(distinct ?reactionChild) as ?reactionChildCount)\n  (count(distinct ?reactionDescendant) as ?reactionDescendantCount)\n  ?equation\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?equation .\n\n  ?reactionChild rdfs:subClassOf rh:Reaction .\n  ?reactionChild rh:status rh:Approved .\n\n  ?reactionDescendant rdfs:subClassOf rh:Reaction .\n  ?reactionDescendant rh:status rh:Approved .\n\n  ?reaction ^rdfs:subClassOf ?reactionChild .\n  ?reaction ^rdfs:subClassOf+ ?reactionDescendant .\n}\nGROUP BY ?reaction ?equation\nORDER BY DESC (count(?reactionChild))",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 51 Select all reactions that have parents and children reactions",
    "slug": "Rhea_51_Select_all_reactions_that_have_parents_and_children_reactions",
    "date": new Date("2025-06-18"),
    "description": "Select all reactions that have parents and children reactions",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\nSELECT\n  (count(distinct ?reaction) as ?reactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n\n  ?childReaction rdfs:subClassOf rh:Reaction .\n  ?childReaction rh:status rh:Approved .\n\n  ?parentReaction rdfs:subClassOf rh:Reaction .\n  ?parentReaction rh:status rh:Approved .\n\n  ?reaction rdfs:subClassOf ?parentReaction .\n  ?reaction ^rdfs:subClassOf ?childReaction .\n}",
    "ontologies": [
      "DCTERMS",
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
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 52 List all small molecules",
    "slug": "Rhea_52_List_all_small_molecules",
    "date": new Date("2025-06-18"),
    "description": "List all small molecules",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\nSELECT\n  ?compound\n  ?compoundName\nWHERE\n{\n  ?compound rdfs:subClassOf rh:SmallMolecule .\n  ?compound rh:name ?compoundName\n}\nORDER BY (?compound)",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "ALL"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 53 List all polymers",
    "slug": "Rhea_53_List_all_polymers",
    "date": new Date("2025-06-18"),
    "description": "List all polymers",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\nSELECT\n  ?compound\n  ?compoundName\nWHERE\n{\n  ?compound rdfs:subClassOf rh:Polymer .\n  ?compound rh:name ?compoundName\n}\nORDER BY (?compound)",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 54 List all generic compounds",
    "slug": "Rhea_54_List_all_generic_compounds",
    "date": new Date("2025-06-18"),
    "description": "List all generic compounds",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\nSELECT\n  ?compound\n  ?compoundName\nWHERE\n{\n  ?compound rdfs:subClassOf rh:Polymer .\n  ?compound rh:name ?compoundName .\n}\nORDER BY (?compound)",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 55 Number of compounds according to their category",
    "slug": "Rhea_55_Number_of_compounds_according_to_their_category",
    "date": new Date("2025-06-18"),
    "description": "Number of compounds according to their category (Small molecule, Generic compound, Polymer)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\nSELECT \n  ?compoundCategory \n  ?compoundCategoryLabel?genericCategory\nWHERE\n{\n  VALUES (?compoundCategory) {(rh:GenericCompound) (rh:Polymer) (rh:SmallMolecule)}\n  ?compoundCategory rdfs:subClassOf rh:Compound .\n  ?compoundCategory rdfs:label ?compoundCategoryLabel .\n}\nORDER BY ?genericCategory DESC(?compound)",
    "ontologies": [
      "DCTERMS",
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
      "ORDER BY",
      "ALL"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 56 Distribution of GenericParticipant",
    "slug": "Rhea_56_Distribution_of_GenericParticipant",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT\n  ?genericSubClass\n  ?labelGenericSubClass\n  (count(?genericParticipant) as ?countGenericParticipant)\nWHERE\n{\n  ?genericSubClass rdfs:subClassOf rh:GenericParticipant .\n  ?genericSubClass rdfs:label ?labelGenericSubClass .\n  ?genericParticipant rdfs:subClassOf* ?genericSubClass .\n}\nGROUP BY ?genericSubClass ?labelGenericSubClass",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 57 Give me the list of Rhea generics",
    "slug": "Rhea_57_Give_me_the_list_of_Rhea_generics",
    "date": new Date("2025-06-18"),
    "description": "Give me the list of Rhea generics, type polypeptide (rh:GenericPolypeptideParticipant)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\nSELECT\n  ?genericSubClass\n  ?labelGenericSubClass\n  (count(?genericParticipant) as ?countGenericParticipant)\nWHERE\n{\n  ?genericSubClass rdfs:subClassOf rh:GenericParticipant .\n  ?genericSubClass rdfs:label ?labelGenericSubClass .\n  ?genericParticipant rdfs:subClassOf* ?genericSubClass .\n}\nGROUP BY ?genericSubClass ?labelGenericSubClass",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 58 Give me the reactions involving a given Rhea generic",
    "slug": "Rhea_58_Give_me_the_reactions_involving_a_given_Rhea_generic",
    "date": new Date("2025-06-18"),
    "description": "Give me the reactions involving a given Rhea generic (GENERIC:11964, \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\nSELECT\n  ?genericSubClass\n  ?labelGenericSubClass\n  (count(?genericParticipant) as ?countGenericParticipant)\nWHERE\n{\n  ?genericSubClass rdfs:subClassOf rh:GenericParticipant .\n  ?genericSubClass rdfs:label ?labelGenericSubClass .\n  ?genericParticipant rdfs:subClassOf* ?genericSubClass .\n} GROUP BY ?genericSubClass ?labelGenericSubClass",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 59 Select reaction participants for a given reaction ID. Display their coefficient and their name",
    "slug": "Rhea_59_Select_reaction_participants_for_a_given_reaction_ID._Display_their_coefficient_and_their_name",
    "date": new Date("2025-06-18"),
    "description": "Select reaction participants for a given reaction ID. Display their coefficient and their name.",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nSELECT\n  ?genericCompound\n  ?genericCompoundName\n  ?reaction\n  ?equation\nWHERE\n{\n  ?genericCategory rdfs:subClassOf rh:GenericCompound .\n  ?genericCompound rdfs:subClassOf ?genericCategory .\n  ?genericCompound rh:name ?genericCompoundName .\n  ?genericCompound rh:accession ?ac .\n  FILTER (?ac='GENERIC:11964') .\n\n  ?participant rh:compound ?genericCompound .\n  ?reactionSide rh:contains ?participant .\n  ?reaction rh:side ?reactionSide .\n  ?reaction rh:equation ?equation .\n}",
    "ontologies": [
      "DCTERMS",
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
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 6",
    "slug": "Rhea_6",
    "date": new Date("2025-06-18"),
    "description": "Select all Rhea reactions mapped to MetaCyc reactions",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\n# Query 6 \n# Select all Rhea reactions mapped to MetaCyc reactions\n# MetaCyc reactions are mapped to either undirected, left-to-right, right-to-left or bidirectional reactions\n# Rhea web query: https://www.rhea-db.org/rhea?query=metacyc:*\n#\nSELECT distinct ?rhea ?rheaDir ?metacyc\nWHERE {\n  ?rhea rdfs:subClassOf rh:Reaction .\n  {\n    ?rhea rdfs:seeAlso ?metacyc .\n    FILTER CONTAINS(str(?metacyc), \"METACYC\") \n    BIND(?rhea as ?rheaDir)\n  }\n  UNION\n  {\n    ?rhea rh:directionalReaction ?directionalReaction .\n    ?directionalReaction rdfs:seeAlso ?metacyc . \n    FILTER CONTAINS(str(?metacyc), \"METACYC\") \n    BIND(?directionalReaction as ?rheaDir  )\n  }\n  UNION\n  {\n    ?rhea rh:bidirectionalReaction ?bidirectionalReaction .\n    ?bidirectionalReaction rdfs:seeAlso ?metacyc . \n    FILTER CONTAINS(str(?metacyc), \"METACYC\") \n    BIND(?bidirectionalReaction as ?rheaDir  )\n  }\n}",
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
      "UNION",
      "BIND",
      "DISTINCT",
      "ALL",
      "STR",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 60 Select the number of approved reactions using CHEBI 29985 as small molecule participant",
    "slug": "Rhea_60_Select_the_number_of_approved_reactions_using_CHEBI_29985_as_small_molecule_participant",
    "date": new Date("2025-06-18"),
    "description": "Select the number of approved reactions using CHEBI:29985 (L-glutamate) as small molecule participant",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  ?reaction\n  ?reactionSide\n  ?coefficient\n  ?participant\n  ?name\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:side ?reactionSide .\n  ?contains rdfs:subPropertyOf rh:contains .\n  ?contains rh:coefficient ?coefficient .\n  ?reactionSide ?contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:name ?name .\n\n  FILTER (?reaction=rh:11680)\n}\nORDER BY ?reactionSide",
    "ontologies": [
      "DCTERMS",
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
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 61 Select all approved reactions using CHEBI 29985 as small molecule participant",
    "slug": "Rhea_61_Select_all_approved_reactions_using_CHEBI_29985_as_small_molecule_participant",
    "date": new Date("2025-06-18"),
    "description": "Select all approved reactions using CHEBI:29985 (L-glutamate) as small molecule participant",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  (count(?reaction) as ?reactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?smallMolecule .\n  ?smallMolecule rdfs:subClassOf+ CHEBI:29985\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ALL",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 62 Select the number of approved reactions using L-glutamine AND L-glutamate in different reaction sides",
    "slug": "Rhea_62_Select_the_number_of_approved_reactions_using_L-glutamine_AND_L-glutamate_in_different_reaction_sides",
    "date": new Date("2025-06-18"),
    "description": "Select the number of approved reactions using L-glutamine (CHEBI:29985) AND L-glutamate (CHEBI:58359) in different reaction sides",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  ?reaction\n  ?reactionEquation\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi CHEBI:29985\n}\n\n# There are several way to indicate that the reaction sides must be different:\n# - ?reactionSide1 rh:transformableTo ?reactionSide2\n# FILTER (?reactionSide1 != ?reactionSide2)\n#It is better to use rh:transformableTo predicate.",
    "ontologies": [
      "DCTERMS",
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
      "IF",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 63 Select all approved reactions using L-glutamine AND L-glutamate in different reaction sides",
    "slug": "Rhea_63_Select_all_approved_reactions_using_L-glutamine_AND_L-glutamate_in_different_reaction_sides",
    "date": new Date("2025-06-18"),
    "description": "Select all approved reactions using L-glutamine (CHEBI:29985) AND L-glutamate (CHEBI:58359) in different reaction sides",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  (count(?reaction) as ?reactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n\n  ?reaction rh:side ?reactionSide1 .\n  ?reactionSide1 rh:contains ?participant1 .\n  ?participant1 rh:compound ?compound1 .\n  ?compound1 rh:chebi CHEBI:29985 .\n\n  ?reaction rh:side ?reactionSide2 .\n  ?reactionSide2 rh:contains ?participant2 .\n  ?participant2 rh:compound ?compound2 .\n  ?compound2 rh:chebi CHEBI:58359 .\n\n  ?reactionSide1 rh:transformableTo ?reactionSide2\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 64 Number of reaction participants per reaction side",
    "slug": "Rhea_64_Number_of_reaction_participants_per_reaction_side",
    "date": new Date("2025-06-18"),
    "description": "Distribution: number of reaction participants per reaction Side",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  ?reaction\n  ?reactionEquation\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n\n  ?reaction rh:side ?reactionSide1 .\n  ?reactionSide1 rh:contains ?participant1 .\n  ?participant1 rh:compound ?compound1 .\n  ?compound1 rh:chebi CHEBI:29985 .\n\n  ?reaction rh:side ?reactionSide2 .\n  ?reactionSide2 rh:contains ?participant2 .\n  ?participant2 rh:compound ?compound2 .\n  ?compound2 rh:chebi CHEBI:58359 .\n\n  ?reactionSide1 rh:transformableTo ?reactionSide2 .\n}\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 65 Number of reaction participants per reaction side",
    "slug": "Rhea_65_Number_of_reaction_participants_per_reaction_side",
    "date": new Date("2025-06-18"),
    "description": "Distribution: number of reaction participants per reaction Side",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT\n  ?reaction\n  ?reactionSide1\n  (count(distinct ?participant1) as ?side1ParticipantCount)\n  ?reactionSide2\n  (count(distinct ?participant2) as ?side2ParticipantCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n\n  ?reaction rh:side ?reactionSide1 .\n  ?reactionSide1 rh:contains ?participant1 .\n\n  ?reaction rh:side ?reactionSide2 .\n  ?reactionSide2 rh:contains ?participant2 .\n\n  ?reactionSide1 rh:transformableTo ?reactionSide2\n}\nGROUP BY ?reaction ?reactionSide1 ?reactionSide2\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 66 Select all compounds and count their occurrence in Rhea reactions",
    "slug": "Rhea_66_Select_all_compounds_and_count_their_occurrence_in_Rhea_reactions",
    "date": new Date("2025-06-18"),
    "description": "Select all compounds and count their occurrence in Rhea reactions",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT\n  ?reaction\n  ?reactionSide1\n  (count(distinct ?participant1) as ?side1ParticipantCount)\n  ?reactionSide2\n  (count(distinct ?participant2) as ?side2ParticipantCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n\n  ?reaction rh:side ?reactionSide1 .\n  ?reactionSide1 rh:contains ?participant1 .\n  ?reactionSide1 rh:curatedOrder ?curatedOrder1 .\n\n  ?reaction rh:side ?reactionSide2 .\n  ?reactionSide2 rh:contains ?participant2 .\n  ?reactionSide2 rh:curatedOrder ?curatedOrder2 .\n\n  ?reactionSide1 rh:transformableTo ?reactionSide2 .\n  FILTER (?curatedOrder1 < ?curatedOrder2) .\n}\nGROUP BY ?reaction ?reactionSide1 ?reactionSide2\nORDER BY DESC(?side1ParticipantCount) DESC(?side2ParticipantCount) ?reaction",
    "ontologies": [
      "DCTERMS",
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
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 67 Select all compounds and count their occurrence in Rhea reactions",
    "slug": "Rhea_67_Select_all_compounds_and_count_their_occurrence_in_Rhea_reactions",
    "date": new Date("2025-06-18"),
    "description": "Select all compounds and count their occurrence in Rhea reactions",
    "context": null,
    "inidces": [],
    "query": "PREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT\n  ?reactionParticipantAc\n  ?chebi\n  (count(distinct ?reaction) as ?reactionCount)\n  ?reactionParticipantName\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  OPTIONAL {\n    ?compound rh:chebi ?chebi .\n  }\n  ?compound rh:name ?reactionParticipantName .\n  ?compound rh:accession ?reactionParticipantAc .\n}\nGROUP BY ?reactionParticipantAc ?chebi ?reactionParticipantName\nORDER BY DESC(?reactionCount)",
    "ontologies": [
      "DCTERMS",
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
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 68 Select reaction participants that appear in only one reaction",
    "slug": "Rhea_68_Select_reaction_participants_that_appear_in_only_one_reaction",
    "date": new Date("2025-06-18"),
    "description": "Select reaction participants that appear in only one reaction",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT\n  ?compound\n  ?compoundAc\n  ?compoundName\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:name ?compoundName .\n  ?compound rh:accession ?compoundAc .\n}\nGROUP BY ?compound ?compoundName ?compoundAc\nHAVING (count(distinct ?reaction) = 1)\nORDER BY ?compoundAc",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "HAVING",
      "DISTINCT",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 69 Select all the direct children of carbohydrate in the ChEBI ontology used in Rhea reaction or not",
    "slug": "Rhea_69_Select_all_the_direct_children_of_carbohydrate_in_the_ChEBI_ontology_used_in_Rhea_reaction_or_not",
    "date": new Date("2025-06-18"),
    "description": "Select all the (direct) children of *carbohydrate* (CHEBI:16646) in the ChEBI ontology , used in Rhea reaction or not",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT\n  ?chebiChildCarbohydrate\n  ?chebiLabel\nWHERE {\n  ?chebiChildCarbohydrate rdfs:subClassOf CHEBI:16646 .\n  ?chebiChildCarbohydrate rdfs:label ?chebiLabel .\n}\nORDER BY ?chebiChildCarbohydrate",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 7",
    "slug": "Rhea_7",
    "date": new Date("2025-06-18"),
    "description": "Select all Rhea reactions mapped to Reactome reactions",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\n# Query 7 \n# Select all Rhea reactions mapped to Reactome reactions\n# MetaCyc reactions are mapped to either undirected, left-to-right or right-to-left reactions\n# Rhea web query: https://www.rhea-db.org/rhea?query=reactome:*\n#    \nSELECT distinct ?rhea ?rheaDir ?reactome  \nWHERE {\n  ?rhea rdfs:subClassOf rh:Reaction .\n  {\n    ?rhea rdfs:seeAlso ?reactome .\n    FILTER CONTAINS(str(?reactome), \"reactome\") \n    BIND(?rhea as ?rheaDir)\n  }\n  UNION\n  {\n    ?rhea rh:directionalReaction ?directionalReaction .\n    ?directionalReaction rdfs:seeAlso ?reactome . \n    FILTER CONTAINS(str(?reactome), \"reactome\") \n    BIND(?directionalReaction as ?rheaDir  )\n  }\n}",
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
      "UNION",
      "BIND",
      "DISTINCT",
      "ALL",
      "STR",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 70 Select all the descendants of  carbohydrate  in the ChEBI ontology used in Rhea reaction or not",
    "slug": "Rhea_70_Select_all_the_descendants_of__carbohydrate__in_the_ChEBI_ontology_used_in_Rhea_reaction_or_not",
    "date": new Date("2025-06-18"),
    "description": "Select all the descendants of *carbohydrate* (CHEBI:16646) in the ChEBI ontology, used in Rhea reaction or not",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  ?chebiDescendantCarbohydrate\n  (str(?label) as ?chebiLabel)\nWHERE {\n  ?chebiDescendantCarbohydrate rdfs:subClassOf+ CHEBI:16646 .\n  ?chebiDescendantCarbohydrate rdfs:label ?label .\n}\nORDER BY ?chebiDescendantCarbohydrate",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "STR"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 71 Select count of descendants of  carbohydrate  in the ChEBI ontology used in Rhea reaction or not",
    "slug": "Rhea_71_Select_count_of_descendants_of__carbohydrate__in_the_ChEBI_ontology_used_in_Rhea_reaction_or_not",
    "date": new Date("2025-06-18"),
    "description": "Select count of descendants of *carbohydrate* (CHEBI:16646) in the ChEBI ontology, used in Rhea reaction or not",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  (count(?chebiDescendantCarbohydrate) AS ?chebiDescendantCarbohydrateCount)\nWHERE {\n  ?chebiDescendantCarbohydrate rdfs:subClassOf+ CHEBI:16646 .\n  ?chebiDescendantCarbohydrate rdfs:label ?label .\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 72 Select children of ChEBI 35179 in the ChEBI hierarchy used in Rhea reactions or not",
    "slug": "Rhea_72_Select_children_of_ChEBI_35179_in_the_ChEBI_hierarchy_used_in_Rhea_reactions_or_not",
    "date": new Date("2025-06-18"),
    "description": "Select children of CHEBI:35179 (a 2-oxo carboxylate) in the ChEBI hierarchy (using rdfs:subClassOf), used in Rhea reactions or not",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT\n  ?chebiChild\n  (str(?label) as ?chebiChildName)\nWHERE {\n  ?chebiChild rdfs:subClassOf CHEBI:35179 .\n  ?chebiChild rdfs:label ?label .\n}\nORDER BY ?chebiChild",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "STR"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 73 Select all the descendants of CHEBI 35179 in the ChEBI hierarchy used in Rhea reaction or not",
    "slug": "Rhea_73_Select_all_the_descendants_of_CHEBI_35179_in_the_ChEBI_hierarchy_used_in_Rhea_reaction_or_not",
    "date": new Date("2025-06-18"),
    "description": "Select all the descendants of CHEBI:35179 (a 2-oxo carboxylate) in the ChEBI hierarchy (using rdfs:subClassOf+), used in Rhea reaction or not",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  ?chebiDescendant\n  (str(?label) as ?chebiDescendantName)\nWHERE {\n  ?chebiDescendant rdfs:subClassOf+ CHEBI:35179 .\n  ?chebiDescendant rdfs:label ?label .\n}\nORDER BY ?chebiDescendant",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "STR"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 74 Select children of CHEBI 35179 in the ChEBI hierarchy used in Rhea reactions and show the reactions",
    "slug": "Rhea_74_Select_children_of_CHEBI_35179_in_the_ChEBI_hierarchy_used_in_Rhea_reactions_and_show_the_reactions",
    "date": new Date("2025-06-18"),
    "description": "Select children of CHEBI:35179 (a 2-oxo carboxylate) in the ChEBI hierarchy (using rdfs:subClassOf) used in Rhea reaction(s), and show the reaction(s)",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  ?chebi\n  ?compoundName\n  ?reaction\n  ?reactionEquation\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:name ?compoundName .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf CHEBI:35179 .\n}\nORDER BY ?chebi",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 75 Select all the descendants of CHEBI 35179 in the ChEBI hierarchy used in Rhea reactions and show the reactions",
    "slug": "Rhea_75_Select_all_the_descendants_of_CHEBI_35179_in_the_ChEBI_hierarchy_used_in_Rhea_reactions_and_show_the_reactions",
    "date": new Date("2025-06-18"),
    "description": "Select all the descendants of CHEBI:35179 (a 2-oxo carboxylate) in the ChEBI hierarchy (using rdfs:subClassOf+) used in Rhea reaction(s), and show the reaction(s)",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT\n  ?chebi\n  ?compoundName\n  ?reaction\n  ?reactionEquation\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:name ?compoundName .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf+ CHEBI:35179 .\n}\nORDER BY ?chebi",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 76 Select the number of approved reactions involving a monosaccharide derivative  based on the ChEBI ontology",
    "slug": "Rhea_76_Select_the_number_of_approved_reactions_involving_a_monosaccharide_derivative__based_on_the_ChEBI_ontology",
    "date": new Date("2025-06-18"),
    "description": "Select the number of approved reactions involving a *_monosaccharide derivative_* (subclass of *CHEBI:63367*) based on the ChEBI ontology (use of *subClassOf+*)",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  (count(distinct ?reaction) as ?reactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf+ CHEBI:63367 .\n}",
    "ontologies": [
      "DCTERMS",
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
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 77 Select all approved reactions involving a monosaccharide derivative",
    "slug": "Rhea_77_Select_all_approved_reactions_involving_a_monosaccharide_derivative",
    "date": new Date("2025-06-18"),
    "description": "Select all approved reactions involving a *_monosaccharide derivative_* (subclass of *CHEBI:63367*) based on the ChEBI ontology (use of *subClassOf+*)",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT\n  distinct\n    ?reaction\n    ?reactionEquation\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf+ CHEBI:63367 .\n}\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "DISTINCT",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 78 Select the number of approved reactions involving a monosaccharide",
    "slug": "Rhea_78_Select_the_number_of_approved_reactions_involving_a_monosaccharide",
    "date": new Date("2025-06-18"),
    "description": "Select the number of approved reactions involving a *_monosaccharide_* (subclass of *CHEBI:35381*) based on the ChEBI ontology (use of *subClassOf+*)",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT\n  (count(distinct ?reaction) as ?reactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf+ CHEBI:35381 .\n}",
    "ontologies": [
      "DCTERMS",
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
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 79 Select all approved reactions involving a monosaccharide",
    "slug": "Rhea_79_Select_all_approved_reactions_involving_a_monosaccharide",
    "date": new Date("2025-06-18"),
    "description": "Select all approved reactions involving a *_monosaccharide_* (subclass of *CHEBI:35381*) based on the ChEBI ontology (use of *subClassOf+*)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>\n\nSELECT\n  distinct\n    ?reaction\n    ?reactionEquation\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf+ CHEBI:35381 .\n}",
    "ontologies": [
      "DCTERMS",
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
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 8",
    "slug": "Rhea_8",
    "date": new Date("2025-06-18"),
    "description": "Select all Rhea reactions mapped to GO molecular functions",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\n# Query 8\n# Select all Rhea reactions mapped to GO molecular function\n# \n# This query corresponds to the Rhea website query:\n# https://www.rhea-db.org/rhea?query=go:*\n#\nSELECT ?go ?rhea ?equation \nWHERE {\n  ?rhea rdfs:subClassOf rh:Reaction .\n  ?rhea rdfs:seeAlso ?go .\n  FILTER CONTAINS(str(?go), \"GO_\")   \n  ?rhea rh:equation ?equation .\n}",
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
      "ALL",
      "STR",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 80 Select the number of approved reactions involving a carbohydrate derivative",
    "slug": "Rhea_80_Select_the_number_of_approved_reactions_involving_a_carbohydrate_derivative",
    "date": new Date("2025-06-18"),
    "description": "Select the number of approved reactions involving a *_carbohydrate derivative_* (subclass of *CHEBI:63299*) based on the ChEBI ontology (use of *subClassOf+*)",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  (count(distinct ?reaction) as ?reactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf+ CHEBI:63299 .\n}",
    "ontologies": [
      "DCTERMS",
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
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 81 Select all approved reactions involving a carbohydrate derivative",
    "slug": "Rhea_81_Select_all_approved_reactions_involving_a_carbohydrate_derivative",
    "date": new Date("2025-06-18"),
    "description": "Select all approved reactions involving a *_carbohydrate derivative_* (subclass of *CHEBI:63299*) based on the ChEBI ontology",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>\n\nSELECT\n  distinct\n    ?reaction\n    ?reactionEquation\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf+ CHEBI:63299 .\n}\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "DISTINCT",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 82 Select the number of approved reactions involving a carbohydrate",
    "slug": "Rhea_82_Select_the_number_of_approved_reactions_involving_a_carbohydrate",
    "date": new Date("2025-06-18"),
    "description": "Select the number of approved reactions involving a *_carbohydrate_* (subclass of *CHEBI:16646*) based on the ChEBI ontology (use of *subClassOf+*)",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  (count(distinct ?reaction) as ?reactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf+ CHEBI:16646 .\n}",
    "ontologies": [
      "DCTERMS",
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
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 83 Select all approved reactions involving a carbohydrate",
    "slug": "Rhea_83_Select_all_approved_reactions_involving_a_carbohydrate",
    "date": new Date("2025-06-18"),
    "description": "Select all approved reactions involving a *_carbohydrate_* (subclass of *CHEBI:16646*) based on the ChEBI ontology (use of *subClassOf+*)",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT\n  distinct\n    ?reaction\n    ?reactionEquation\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf+ CHEBI:16646 .\n}\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "DISTINCT",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 84 Select the number of approved reactions involving  lipids",
    "slug": "Rhea_84_Select_the_number_of_approved_reactions_involving__lipids",
    "date": new Date("2025-06-18"),
    "description": "Select the number of approved reactions involving *lipids* (subclass of *CHEBI:18059*) based on the ChEBI ontology",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  (count(distinct ?reaction) as ?reactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf+ CHEBI:18059 .\n}",
    "ontologies": [
      "DCTERMS",
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
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 85 Select all approved reactions involving lipids based on the ChEBI ontology",
    "slug": "Rhea_85_Select_all_approved_reactions_involving_lipids_based_on_the_ChEBI_ontology",
    "date": new Date("2025-06-18"),
    "description": "Select all approved reactions involving *lipids* (subclass of *CHEBI:18059*) based on the ChEBI ontology",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>\n\nSELECT\n  distinct\n    ?reaction\n    ?reactionEquation\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf+ CHEBI:18059 .\n}\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "DISTINCT",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 86 Select all approved reactions involving lipids",
    "slug": "Rhea_86_Select_all_approved_reactions_involving_lipids",
    "date": new Date("2025-06-18"),
    "description": "Select all approved reactions involving *lipids* (subclass of *CHEBI:18059*) that have at least one parent reaction",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>\n\nSELECT\n  distinct\n    ?reaction\n    ?reactionParent\nWHERE {\n  ?reactionParent rdfs:subClassOf rh:Reaction .\n  ?reactionParent rh:status rh:Approved .\n\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rdfs:subClassOf ?reactionParent .\n  ?reaction rh:side ?reactionSide .\n\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf+ CHEBI:18059 .\n}\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "DISTINCT",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 87 Select all approved reactions involving lipids that are parent reactions and give their number of descendants",
    "slug": "Rhea_87_Select_all_approved_reactions_involving_lipids_that_are_parent_reactions_and_give_their_number_of_descendants",
    "date": new Date("2025-06-18"),
    "description": "Select all approved reactions involving *lipids* (subclass of *CHEBI:18059*) that are parent reactions and give their number of descendants",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT distinct ?reaction (count(distinct ?reactionDescendant) as ?reactionDescendantCount) ?reactionEquation WHERE {\n?reaction rdfs:subClassOf rh:Reaction .\n?reaction rh:status rh:Approved .\n?reaction rh:equation ?reactionEquation .\n?reaction rh:side ?reactionSide .\n\n?reactionSide rh:contains ?participant .\n?participant rh:compound ?compound .\n?compound rh:chebi ?chebi .\n?chebi rdfs:subClassOf+ CHEBI:18059 .\n\n?reactionDescendant rdfs:subClassOf rh:Reaction .\n?reactionDescendant rh:status rh:Approved .\n\n?reactionDescendant rdfs:subClassOf+ ?reaction .\n}\ngroup by ?reaction ?reactionEquation\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 88 How many descendants of CHEBI 17815",
    "slug": "Rhea_88_How_many_descendants_of_CHEBI_17815",
    "date": new Date("2025-06-18"),
    "description": "How many descendants of CHEBI:17815 (a 1,2-diacyl-sn-glycerol) in the ChEBI ontology?",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT (count(?chebiDescendant) as ?countChild) WHERE {\n  ?chebiDescendant rdfs:subClassOf+ CHEBI:17815 .\n  ?chebiDescendant rdfs:label ?label .\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 89 Give me all CHEBI identifier and label for the descendants of CHEBI 17815",
    "slug": "Rhea_89_Give_me_all_CHEBI_identifier_and_label_for_the_descendants_of_CHEBI_17815",
    "date": new Date("2025-06-18"),
    "description": "Give me all CHEBI identifier and label for the descendants of CHEBI:17815 (a 1,2-diacyl-sn-glycerol)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>\nSELECT\n  ?chebiDescendant\n  (str(?label) as ?chebiLabel)\nWHERE {\n  ?chebiDescendant rdfs:subClassOf+ CHEBI:17815 .\n  ?chebiDescendant rdfs:label ?label .\n}\nORDER BY ?chebiDescendantCarbohydrate",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "STR"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 9",
    "slug": "Rhea_9",
    "date": new Date("2025-06-18"),
    "description": "Select all Rhea reactions mapped to enzyme classification (EC numbers)",
    "context": null,
    "inidces": [],
    "query": "PREFIX ec: <http://purl.uniprot.org/enzyme/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\n# Query 9\n# Select all Rhea reactions mapped to EC numbers (enzyme classification)\n#\n# This query corresponds to the Rhea website query:\n# https://www.rhea-db.org/rhea?query=ec:*\n#\nSELECT ?ec ?ecNumber ?rhea ?accession ?equation\nWHERE {\n  ?rhea rdfs:subClassOf rh:Reaction .\n  ?rhea rh:accession ?accession .\n  ?rhea rh:ec ?ec .\n  BIND(strafter(str(?ec),str(ec:)) as ?ecNumber)\n  ?rhea rh:isTransport ?isTransport .\n  ?rhea rh:equation ?equation .\n}",
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
      "ALL",
      "STR",
      "IF"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 90 How many reactions involve CHEBI 17815",
    "slug": "Rhea_90_How_many_reactions_involve_CHEBI_17815",
    "date": new Date("2025-06-18"),
    "description": "How many reactions involve CHEBI:17815 (a 1,2-diacyl-sn-glycerol)?",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nPREFIX rh:<http://rdf.rhea-db.org/>\nSELECT\n  (count(?reaction) as ?reactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:side ?reactionSide .\n\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi CHEBI:17815 .\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 91 How many reactions involve CHEBI 17815",
    "slug": "Rhea_91_How_many_reactions_involve_CHEBI_17815",
    "date": new Date("2025-06-18"),
    "description": "How many reactions involve CHEBI:17815 (a 1,2-diacyl-sn-glycerol) or one of its descendant?",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT\n  (count(distinct ?reaction) as ?countReaction)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction ;\n  rh:status rh:Approved ;\n    rh:side ?reactionSide .\n\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf* CHEBI:17815 .\n}",
    "ontologies": [
      "DCTERMS",
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
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 92 Select all approved reactions with participants being CHEBI 17815  or one of its descendant",
    "slug": "Rhea_92_Select_all_approved_reactions_with_participants_being_CHEBI_17815__or_one_of_its_descendant",
    "date": new Date("2025-06-18"),
    "description": "Select all approved reactions with participant(s) being CHEBI:17815 (a 1,2-diacyl-sn-glycerol) or one of its descendant",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\n\nSELECT\n  DISTINCT\n    ?reaction\n    ?reactionEquation\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf* CHEBI:17815 .\n}\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "DISTINCT",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 93 Select all approved reactions with CHEBI 17815 or one of its descendant optional EC",
    "slug": "Rhea_93_Select_all_approved_reactions_with_CHEBI_17815_or_one_of_its_descendant_optional_EC",
    "date": new Date("2025-06-18"),
    "description": "Select all approved reactions with CHEBI:17815 (a 1,2-diacyl-sn-glycerol) or one of its descendant. Display the EC numbers if the rhea-ec link exists.",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>\n\nSELECT\n  distinct\n    ?reaction\n    ?ec\n    ?reactionEquation\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:side ?reactionSide .\n\n  OPTIONAL {?reaction rh:ec ?ec .} .\n\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf* CHEBI:17815 .\n}\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
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
      "ORDER BY",
      "DISTINCT",
      "CONTAINS"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 94 Select all approved reactions with CHEBI or one of its descendant optional UniProtKB reviewed EC",
    "slug": "Rhea_94_Select_all_approved_reactions_with_CHEBI_or_one_of_its_descendant_optional_UniProtKB_reviewed_EC",
    "date": new Date("2025-06-18"),
    "description": "Select all approved reactions with CHEBI:17815 (a 1,2-diacyl-sn-glycerol) or one of its descendant. Display links to UniProtKB/Swiss-Prot entries via EC numbers if the link rhea-ec exists.",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX up:<http://purl.uniprot.org/core/>\n\nSELECT\n  distinct\n    ?reaction\n    ?enzyme\n    (count(distinct ?protein) as ?proteinCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:side ?reactionSide .\n\n  OPTIONAL {?reaction rh:ec ?enzyme .\n    SERVICE <https://sparql.uniprot.org/sparql> {\n      ?protein up:reviewed true .\n      ?protein up:enzyme ?enzyme.\n    }\n  } .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebi .\n  ?chebi rdfs:subClassOf* CHEBI:17815 .\n}\nGROUP BY ?reaction ?enzyme\nORDER BY ?reaction",
    "ontologies": [
      "DCTERMS",
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
      "ORDER BY",
      "DISTINCT",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 95 Get uniprot name of a given chebi compound",
    "slug": "Rhea_95_Get_uniprot_name_of_a_given_chebi_compound",
    "date": new Date("2025-06-18"),
    "description": "Get uniprot name of a given chebi compound",
    "context": null,
    "inidces": [],
    "query": "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX oboInOwl:<http://www.geneontology.org/formats/oboInOwl#>\nPREFIX owl:<http://www.w3.org/2002/07/owl#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT\n  ?chebi\n  ?chebiName\n  ?chebiUniprotName\nWHERE {\n  BIND(CHEBI:57416 AS ?chebi)\n  ?chebi rdfs:label ?chebiName .\n  ?chebi oboInOwl:hasRelatedSynonym ?chebiUniprotName .\n  ?axiom a owl:Axiom .\n  ?axiom owl:annotatedSource ?chebi .\n  ?axiom owl:annotatedProperty oboInOwl:hasRelatedSynonym .\n  ?axiom owl:annotatedTarget ?chebiUniprotName .\n  ?axiom oboInOwl:hasDbXref ?dbXref .\n  FILTER (?dbXref=\"UniProt\")\n}",
    "ontologies": [
      "DCTERMS",
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
      "BIND",
      "NOW"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 96 Get tautomer of a given chebi compound",
    "slug": "Rhea_96_Get_tautomer_of_a_given_chebi_compound",
    "date": new Date("2025-06-18"),
    "description": "Get tautomer of a given chebi compound",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX obo:<http://purl.obolibrary.org/obo/>\nPREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX chebihash:<http://purl.obolibrary.org/obo/chebi#>\nPREFIX owl:<http://www.w3.org/2002/07/owl#>\nselect\n  ?chebi\n  ?chebiName\n  ?chebiTautomer\n  ?chebiTautomerName\nwhere {\n  BIND(CHEBI:57416 AS ?chebi)\n  ?chebi rdfs:subClassOf ?chebiRestriction .\n  ?chebiRestriction a owl:Restriction .\n  ?chebiRestriction owl:onProperty chebihash:is_tautomer_of .\n  ?chebiRestriction owl:someValuesFrom ?chebiTautomer .\n  ?chebi rdfs:label ?chebiName .\n  ?chebiTautomer rdfs:label ?chebiTautomerName .\n}",
    "ontologies": [
      "DCTERMS",
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
      "FROM",
      "STR"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 97 Get structural data of a given ChEBI compound",
    "slug": "Rhea_97_Get_structural_data_of_a_given_ChEBI_compound",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "#\n# get structural data of a given ChEBI compound\n#\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX chebihash:<http://purl.obolibrary.org/obo/chebi/>\nSELECT\n  ?chebi\n  ?formula\n  ?charge\n  ?mass\n  ?monoisotopicmass\n  ?inchikey\n  ?smiles\n  ?inchi\nWHERE {\n  BIND (CHEBI:29985 AS ?chebi)\n  ?chebi chebihash:inchi ?inchi ;\n    chebihash:smiles ?smiles ;\n    chebihash:formula ?formula ;\n    chebihash:mass ?mass ;\n    chebihash:charge ?charge ;\n    chebihash:inchikey ?inchikey ;\n    chebihash:monoisotopicmass ?monoisotopicmass .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND",
      "STR"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 98 Get chebi compound of a given InChI",
    "slug": "Rhea_98_Get_chebi_compound_of_a_given_InChI",
    "date": new Date("2025-06-18"),
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX obo:<http://purl.obolibrary.org/obo/>\nPREFIX chebihash:<http://purl.obolibrary.org/obo/chebi/>\nSELECT\n  ?chebi\n  ?inchi\nWHERE {\n  BIND(\"InChI=1S/C5H9NO4/c6-3(5(9)10)1-2-4(7)8/h3H,1-2,6H2,(H,7,8)(H,9,10)/t3-/m0/s1\" AS ?inchi)\n  ?chebi chebihash:inchi ?inchi .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND"
    ],
    "category": "sib-swiss Rhea"
  },
  {
    "name": "Rhea - 99 Get the list of reactions involving a ChEBI participant with  has role antifungal agent",
    "slug": "Rhea_99_Get_the_list_of_reactions_involving_a_ChEBI_participant_with__has_role_antifungal_agent",
    "date": new Date("2025-06-18"),
    "description": "Get the list of reactions involving a ChEBI participant with <em>has role</em> <strong>antifungal agent</strong> (CHEBI:35718)",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX chebihash:<http://purl.obolibrary.org/obo/chebi#>\nSELECT\n  (count(distinct ?reaction) as ?reactionCount)\nWHERE {\n  ?reaction rdfs:subClassOf rh:Reaction .\n  ?reaction rh:status rh:Approved .\n  ?reaction rh:equation ?reactionEquation .\n  ?reaction rh:side ?reactionSide .\n  ?reactionSide rh:contains ?participant .\n  ?participant rh:compound ?compound .\n  ?compound rh:chebi ?chebiInRhea .\n  {\n    ?chebiInRhea rdfs:subClassOf ?chebiRestrictionRole .\n    ?chebiRestrictionRole a owl:Restriction .\n    ?chebiRestrictionRole owl:onProperty obo:RO_0000087 .\n    ?chebiRestrictionRole owl:someValuesFrom CHEBI:35718 .\n  }\n  UNION\n  {\n    ?chebi rdfs:subClassOf ?chebiRestrictionRole .\n    ?chebiRestrictionRole a owl:Restriction .\n    ?chebiRestrictionRole owl:onProperty obo:RO_0000087 .\n    ?chebiRestrictionRole owl:someValuesFrom CHEBI:35718 .\n\n    ?chebi rdfs:subClassOf ?chebiRestrictionPH .\n    ?chebiRestrictionPH a owl:Restriction .\n    ?chebiRestrictionPH owl:onProperty chebihash:has_major_microspecies_at_pH_7_3 .\n    ?chebiRestrictionPH owl:someValuesFrom ?chebiInRhea .\n  }\n}",
    "ontologies": [
      "DCTERMS",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "UNION",
      "VALUES",
      "DISTINCT",
      "FROM",
      "STR",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss Rhea"
  }
];