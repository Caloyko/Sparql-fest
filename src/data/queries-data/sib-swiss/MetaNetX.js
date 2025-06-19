export const MetaNetX = [
  {
    "name": "MetaNetX - 1",
    "slug": "MetaNetX_1",
    "date": "18-06-2025",
    "description": "Retrieve the MNXref metabolite with name <em>N,N-dimethyl-beta-alanine</em>, together with molecular information.",
    "context": null,
    "inidces": [],
    "query": "PREFIX mnx: <https://rdf.metanetx.org/schema/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT ?metabolite ?label ?source ?formula ?charge ?inchi ?inchikey ?smiles\nFROM <https://rdf.metanetx.org/> WHERE {\n    ?metabolite a mnx:CHEM .\n    ?metabolite rdfs:label ?label .\n    ?metabolite rdfs:comment 'N,N-dimethyl-beta-alanine' .\n    ?metabolite mnx:chemSource ?source\n    OPTIONAL { ?metabolite mnx:formula  ?formula }\n    OPTIONAL { ?metabolite mnx:charge   ?charge }\n    OPTIONAL { ?metabolite mnx:inchi    ?inchi }\n    OPTIONAL { ?metabolite mnx:inchikey ?inchikey }\n    OPTIONAL { ?metabolite mnx:smiles   ?smiles }\n}",
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
      "FROM"
    ],
    "category": "undefined MetaNetX"
  },
  {
    "name": "MetaNetX - 10",
    "slug": "MetaNetX_10",
    "date": "18-06-2025",
    "description": "A GEM is primarily a set of reactions: here are all the reaction equations occurring in bigg_e_coli_core. NB: here the reac label is the one produced while compiling MetaNetX",
    "context": null,
    "inidces": [],
    "query": "PREFIX mnx: <https://rdf.metanetx.org/schema/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# A GEM is primarily a set of reactions: here are all the\n# reaction equations occurring in *bigg_e_coli_core*. NB: here\n# the reac label is the one produced while compiling MetaNetX\n\nSELECT ?reac_label ?chem_name ?comp_name ?coef\nFROM <https://rdf.metanetx.org/> WHERE{\n    ?mnet rdfs:label 'bigg_e_coli_core' ;\n          mnx:gpr/mnx:reac ?reac .\n    ?reac rdfs:label ?reac_label ;\n          ?side      ?part .\n    ?part mnx:chem ?chem ;\n          mnx:comp ?comp ;\n          mnx:coef ?c    .\n    ?chem rdfs:comment ?chem_name .\n    ?comp rdfs:comment ?comp_name .\n    FILTER( ?side IN ( mnx:left , mnx:right ))\n    BIND( IF( ?side = mnx:left, - ?c, ?c ) AS ?coef )\n}\nORDER BY ?reac_label",
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
      "BIND",
      "ORDER BY",
      "FROM",
      "ALL",
      "IF"
    ],
    "category": "undefined MetaNetX"
  },
  {
    "name": "MetaNetX - 11",
    "slug": "MetaNetX_11",
    "date": "18-06-2025",
    "description": "Building on example 10. ...in addition reactions are endowed with a direction, flux bounds and possibly the description of the enzymes that catalyze it.",
    "context": null,
    "inidces": [],
    "query": "PREFIX mnx: <https://rdf.metanetx.org/schema/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Building on example 10. ...in addition reactions are endowed with a direction, flux\n# bounds and possibly the description of the enzymes that\n# catalyze it.\n\nSELECT ?reac_orig_label ?reac_mnx_label ?lb ?ub ?dir ?cata_orig (GROUP_CONCAT(?cplx_label ; separator=' OR ') AS ?cplx_info )\nFROM <https://rdf.metanetx.org/> WHERE{\n    ?mnet rdfs:label 'bigg_e_coli_core';\n          mnx:gpr ?gpr .\n    ?gpr rdfs:label ?reac_orig_label ;\n         rdfs:comment ?cata_orig ;\n         mnx:reac ?reac ;\n         mnx:cata ?cata .\n    ?reac rdfs:label ?reac_mnx_label .\n    ?cata mnx:lb ?lb ;\n          mnx:ub ?ub ;\n          mnx:dir ?dir ;\n          mnx:cplx ?cplx .\n    ?cplx rdfs:label ?cplx_label .\n}\nGROUP BY ?reac ?reac_orig_label ?reac_mnx_label ?lb ?ub ?dir ?cata_orig ORDER BY (?reac)",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "FROM",
      "WITH",
      "ADD",
      "BOUND",
      "CONCAT",
      "GROUP_CONCAT"
    ],
    "category": "undefined MetaNetX"
  },
  {
    "name": "MetaNetX - 12",
    "slug": "MetaNetX_12",
    "date": "18-06-2025",
    "description": "Given the protein with UniProt accession number P42588 (PAT_ECOLI, putrescine aminotransferase, EC 2.6.1.82) retrieve all reactions and models in which this polypeptide appears.",
    "context": null,
    "inidces": [],
    "query": "PREFIX mnx: <https://rdf.metanetx.org/schema/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX uniprot: <http://purl.uniprot.org/uniprot/>\n\n# Given the protein with UniProt accession number *P42588*\n# (PAT_ECOLI, putrescine aminotransferase, EC 2.6.1.82)\n# retrieve all reactions and models in which this polypeptide\n# appears.\n\nSELECT ?mnet_label ?reac_label ?reac_eq ?MNXR (GROUP_CONCAT( ?cata_label; separator=';' ) AS ?complex )\nFROM <https://rdf.metanetx.org/> WHERE{\n    ?pept mnx:peptXref uniprot:P42588 .\n    ?cata mnx:pept ?pept ;\n          rdfs:label ?cata_label .\n    ?gpr mnx:cata ?cata ;\n         mnx:reac ?reac .\n    ?reac rdfs:label ?reac_label ;\n          rdfs:comment ?reac_eq .\n    ?mnet mnx:gpr ?gpr ;\n          rdfs:label ?mnet_label.\n    OPTIONAL{ ?reac mnx:mnxr ?MNXR }\n} GROUP BY ?mnet_label ?reac_label ?reac_eq ?MNXR",
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
      "GROUP BY",
      "FROM",
      "WITH",
      "ALL",
      "CONCAT",
      "MIN",
      "GROUP_CONCAT"
    ],
    "category": "undefined MetaNetX"
  },
  {
    "name": "MetaNetX - 13",
    "slug": "MetaNetX_13",
    "date": "18-06-2025",
    "description": "Given the protein with UniProt accession number <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX mnx: <https://rdf.metanetx.org/schema/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX uniprot: <http://purl.uniprot.org/uniprot/>\n\nSELECT ?mnet_label ?reac_label ?reac_eq ?MNXR (GROUP_CONCAT( ?cata_label; separator=';' ) AS ?complex )\nFROM <https://rdf.metanetx.org/> WHERE{\n    ?pept mnx:peptXref uniprot:P0ABU7 .\n    ?cata mnx:pept ?pept ;\n          rdfs:label ?cata_label .\n    ?gpr mnx:cata ?cata ;\n         mnx:reac ?reac .\n    ?reac rdfs:label ?reac_label ;\n          rdfs:comment ?reac_eq .\n    ?mnet mnx:gpr ?gpr ;\n          rdfs:label ?mnet_label.\n    OPTIONAL{ ?reac mnx:mnxr ?MNXR }\n} GROUP BY ?mnet_label ?reac_label ?reac_eq ?MNXR",
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
      "GROUP BY",
      "FROM",
      "CONCAT",
      "GROUP_CONCAT"
    ],
    "category": "undefined MetaNetX"
  },
  {
    "name": "MetaNetX - 2",
    "slug": "MetaNetX_2",
    "date": "18-06-2025",
    "description": "Retrieve the identifiers for N,N-dimethyl-beta-alanine in external databases. This crosslinking of external identifiers is the core of MNXref.",
    "context": null,
    "inidces": [],
    "query": "PREFIX mnx: <https://rdf.metanetx.org/schema/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Retrieve the identifiers for *N,N-dimethyl-beta-alanine* in\n# external databases. This crosslinking of external\n# identifiers is the core of MNXref.\n\nSELECT ?metabolite ?xref\nFROM <https://rdf.metanetx.org/> WHERE {\n    ?metabolite a mnx:CHEM .\n    ?metabolite rdfs:comment 'N-nitrosomethanamine' .\n    ?metabolite mnx:chemXref ?xref\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FROM",
      "IF",
      "MIN"
    ],
    "category": "undefined MetaNetX"
  },
  {
    "name": "MetaNetX - 3",
    "slug": "MetaNetX_3",
    "date": "18-06-2025",
    "description": "For the KEGG compound C01732, retrieve the MNXref identifier, name and reference",
    "context": null,
    "inidces": [],
    "query": "PREFIX keggC: <https://identifiers.org/kegg.compound:>\nPREFIX mnx: <https://rdf.metanetx.org/schema/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# For the KEGG compound *C01732*, retrieve the MNXref\n# identifier, name and reference.\n\nSELECT ?metabolite ?reference ?name\nFROM <https://rdf.metanetx.org/> WHERE {\n    ?metabolite a mnx:CHEM .\n    ?metabolite mnx:chemRefer ?reference .\n    ?metabolite rdfs:comment ?name .\n    ?metabolite mnx:chemXref keggC:C01732\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FROM",
      "IF"
    ],
    "category": "undefined MetaNetX"
  },
  {
    "name": "MetaNetX - 4",
    "slug": "MetaNetX_4",
    "date": "18-06-2025",
    "description": "Retrieve the MNXref reaction identifier, that corresponds to the KEGG reaction R00703 (lactate dehydrogenase).",
    "context": null,
    "inidces": [],
    "query": "PREFIX keggR: <https://identifiers.org/kegg.reaction:>\nPREFIX mnx: <https://rdf.metanetx.org/schema/>\n\n# Retrieve the MNXref reaction identifier, that corresponds to\n# the KEGG reaction *R00703* (lactate dehydrogenase).\n\nSELECT ?reaction ?reference\nFROM <https://rdf.metanetx.org/> WHERE {\n    ?reaction a mnx:REAC .\n    ?reaction mnx:reacXref keggR:R00703 .\n    ?reaction mnx:reacRefer ?reference\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FROM",
      "IF"
    ],
    "category": "undefined MetaNetX"
  },
  {
    "name": "MetaNetX - 5",
    "slug": "MetaNetX_5",
    "date": "18-06-2025",
    "description": "List the external identifiers that correspond to the KEGG reaction R00703 (lactate dehydrogenase). This crosslinking of external identifiers is the core of MNXref",
    "context": null,
    "inidces": [],
    "query": "PREFIX keggR: <https://identifiers.org/kegg.reaction:>\nPREFIX mnx: <https://rdf.metanetx.org/schema/>\n\n# List the external identifiers that correspond to the KEGG\n# reaction *R00703* (lactate dehydrogenase). This crosslinking\n# of external identifiers is the core of MNXref.\n\nSELECT ?xref\nFROM <https://rdf.metanetx.org/> WHERE {\n    ?reaction a mnx:REAC .\n    ?reaction mnx:reacXref keggR:R00703 .\n    ?reaction mnx:reacXref ?xref\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FROM",
      "IF"
    ],
    "category": "undefined MetaNetX"
  },
  {
    "name": "MetaNetX - 6",
    "slug": "MetaNetX_6",
    "date": "18-06-2025",
    "description": "Show the reaction equation catalyzed by lactate dehydrogenase (KEGG reaction R00703). NB: Stoichiometric coefficients for substrates are given a negative value.",
    "context": null,
    "inidces": [],
    "query": "PREFIX keggR: <https://identifiers.org/kegg.reaction:>\nPREFIX mnx: <https://rdf.metanetx.org/schema/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Show the reaction equation catalyzed by lactate\n# dehydrogenase (KEGG reaction *R00703*). NB: Stoichiometric\n# coefficients for substrates are given a negative value\n\nSELECT ?chem ?chem_name ?comp ?comp_name ?coef\nFROM <https://rdf.metanetx.org/> WHERE{\n    ?reac mnx:reacXref keggR:R00703 .\n    ?reac ?side ?part .\n    ?part mnx:chem ?chem ;\n          mnx:comp ?comp ;\n          mnx:coef ?c    .\n    ?chem rdfs:comment ?chem_name .\n    ?comp rdfs:comment ?comp_name .\n    FILTER( ?side IN ( mnx:left , mnx:right ))\n    BIND( IF( ?side = mnx:left, - ?c, ?c ) AS ?coef )\n}",
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
      "BIND",
      "FROM",
      "STR",
      "IF",
      "SUBSTR"
    ],
    "category": "undefined MetaNetX"
  },
  {
    "name": "MetaNetX - 7",
    "slug": "MetaNetX_7",
    "date": "18-06-2025",
    "description": "Show the reaction equation for the tartrate/succinate antiporter (rhea:34763). NB: there are two generic compartments here.)",
    "context": null,
    "inidces": [],
    "query": "PREFIX mnx: <https://rdf.metanetx.org/schema/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\n\n# Show the reaction equation for the tartrate/succinate\n# antiporter (*rh:34763*). NB: there are two generic\n# compartments here.\n\nSELECT ?chem ?chem_name ?comp ?comp_name ?coef\nFROM <https://rdf.metanetx.org/> WHERE{\n    ?reac mnx:reacXref rh:34763 .\n    ?reac ?side ?part .\n    ?part mnx:chem ?chem ;\n          mnx:comp ?comp ;\n          mnx:coef ?c    .\n    ?chem rdfs:comment ?chem_name .\n    ?comp rdfs:comment ?comp_name .\n    FILTER( ?side IN ( mnx:left , mnx:right ))\n    BIND( IF( ?side = mnx:left, - ?c, ?c ) AS ?coef )\n}",
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
      "BIND",
      "FROM",
      "IF"
    ],
    "category": "undefined MetaNetX"
  },
  {
    "name": "MetaNetX - 8",
    "slug": "MetaNetX_8",
    "date": "18-06-2025",
    "description": "Show the reaction equation for ATP synthase (reaction ATPS4m from BiGG). NB: there are two types of protons here, as MetaNetX distinguishes protons used for balancing (MNXM1) from those that are translocated (MNXM01).",
    "context": null,
    "inidces": [],
    "query": "PREFIX biggR: <https://identifiers.org/bigg.reaction:>\nPREFIX mnx: <https://rdf.metanetx.org/schema/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# Show the reaction equation for ATP synthase (reaction\n# *ATPS4m* from BiGG). NB: there are two types of protons\n# here, as MetaNetX distinguishes protons used for balancing\n# (MNXM1) from those that are translocated (MNXM01).\n\nSELECT ?chem ?chem_name ?comp ?comp_name $coef\nFROM <https://rdf.metanetx.org/> WHERE{\n    ?reaction mnx:reacXref biggR:ATPS4m .\n    ?reaction ?side ?part .\n    ?part mnx:chem ?chem ;\n          mnx:comp ?comp ;\n          mnx:coef ?c    .\n    ?chem rdfs:comment ?chem_name .\n    ?comp rdfs:comment ?comp_name .\n    FILTER( ?side IN ( mnx:left , mnx:right ))\n    BIND( IF( ?side = mnx:left, - ?c, ?c ) AS ?coef )\n}",
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
      "BIND",
      "FROM",
      "IF"
    ],
    "category": "undefined MetaNetX"
  },
  {
    "name": "MetaNetX - 9",
    "slug": "MetaNetX_9",
    "date": "18-06-2025",
    "description": "List all GEMs currently in the MetaNetX repository, with their numbers of reactions, chemical, compartments and genes/proteins.",
    "context": null,
    "inidces": [],
    "query": "PREFIX mnx: <https://rdf.metanetx.org/schema/>\n\n# List all GEMs currently in the MetaNetX repository, with\n# their numbers of reactions, chemical, compartments and\n# genes/proteins.\n\nSELECT ?mnet ?taxon\n    (COUNT( DISTINCT ?reac) AS ?count_reac)\n    (COUNT( DISTINCT ?chem) AS ?count_chem)\n    (COUNT( DISTINCT ?comp) AS ?count_comp)\n    (COUNT( DISTINCT ?pept) AS ?count_pept)\nFROM <https://rdf.metanetx.org/> WHERE{\n    ?mnet a mnx:MNET .\n    ?mnet mnx:gpr  ?gpr .\n    ?gpr  mnx:reac ?reac .\n    ?reac mnx:left|mnx:right ?part .\n    ?part mnx:chem ?chem;\n          mnx:comp ?comp.\n    ?gpr mnx:cata/mnx:pept ?pept .\n    OPTIONAL{ ?mnet mnx:taxid ?taxon }\n} GROUP BY ?mnet ?taxon",
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
      "GROUP BY",
      "DISTINCT",
      "FROM",
      "WITH",
      "ALL",
      "COUNT"
    ],
    "category": "undefined MetaNetX"
  }
];