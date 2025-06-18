export const UniProt = [
  {
    "name": "UniProt - 100 uniprot organelles or plasmids",
    "slug": "UniProt_100_uniprot_organelles_or_plasmids",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List the proteins encoded by a gene that is located in an organelle other than the nucleus, or on a plasmid rather than a chromosome. In these cases the gene location is stored with encodedIn properties. Note that if a plasmid has several names, they are listed as multiple <em>rdfs:label</em> properties.",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n    ?protein \n    ?plasmidOrOrganelle\n    ?label\nWHERE {\n    ?protein a up:Protein ;\n      up:encodedIn ?plasmidOrOrganelle .\n    OPTIONAL {\n        ?plasmidOrOrganelle rdfs:label ?label .\n    }\n}",
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
      "OPTIONAL"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 101 uniprot potential isoforms",
    "slug": "UniProt_101_uniprot_potential_isoforms",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List all human UniProtKB entries and their computationaly mapped potential isoforms.",
    "context": null,
    "inidces": [],
    "query": "PREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?entry ?sequence ?isCanonical\nWHERE {\n  # We don't want to look into the UniParc graph which will \n  # confuse matters\n  GRAPH <http://sparql.uniprot.org/uniprot> {\n      # we need the UniProt entries that are human\n      ?entry a up:Protein ;\n        up:organism taxon:9606 ;\n      # and we select the computationally mapped sequences\n        up:potentialSequence ?sequence .\n  }\n}",
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
      "ALL"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 102 uniprot primary accession",
    "slug": "UniProt_102_uniprot_primary_accession",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Extracting an UniProtKB primary accession from our IRIs. Is done with a bit of string manipulation. While UniProt primary accession are unique within UniProtKB they may be reused by accident or itentionally by other data sources. If we provided them as strings (not IRI) and if you used them in a query that way, you might accidentaly retrieve completely wrong records.",
    "context": null,
    "inidces": [],
    "query": "PREFIX uniprotkb: <http://purl.uniprot.org/uniprot/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?primaryAccession\n  ?protein\nWHERE {\n  ?protein a up:Protein .\n  BIND(substr(str(?protein), strlen(str(uniprotkb:))+1) AS ?primaryAccession)\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND",
      "STR",
      "STRLEN",
      "SUBSTR"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 103 uniprot proteome location of gene",
    "slug": "UniProt_103_uniprot_proteome_location_of_gene",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List UniProtKB proteins with genetic replicon that they are encoded on using the Proteome data.",
    "context": null,
    "inidces": [],
    "query": "PREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  DISTINCT\n    ?proteomeData\n    ?replicon\n    ?proteome  \nWHERE {\n  # reviewed entries (UniProtKB/Swiss-Prot)\n  ?protein up:reviewed true . \n  # restricted to Human taxid\n  ?uniprot up:organism taxon:9606 . \n  ?uniprot up:proteome ?proteomeData .\n  BIND( strbefore( str(?proteomeData), \"#\" ) as ?proteome )\n  BIND( strafter( str(?proteomeData), \"#\" ) as ?replicon )\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND",
      "DISTINCT",
      "STR"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 104 uniprot recomended protein full name",
    "slug": "UniProt_104_uniprot_recomended_protein_full_name",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "The recommended protein full names for UniProtKB entries",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein\n  ?fullName\nWHERE {\n  ?protein a up:Protein ;\n           up:recommendedName ?recommendedName .\n  ?recommendedName up:fullName ?fullName .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 105 uniprot recomended protein short name",
    "slug": "UniProt_105_uniprot_recomended_protein_short_name",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "The recommended protein short names for UniProtKB entries",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein \n  ?fullName\nWHERE {\n  ?protein a up:Protein ;\n           up:recommendedName ?recommendedName .\n  ?recommendedName up:shortName ?fullName .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 106 uniprot reviewed or not",
    "slug": "UniProt_106_uniprot_reviewed_or_not",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List all UniProtKB proteins and if they are reviewed (Swiss-Prot) or unreviewed (TrEMBL)",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?protein\n  ?reviewed\nWHERE {\n  ?protein a up:Protein . \n  ?protein up:reviewed ?reviewed . \n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 107 uniprot sequences and mark which is cannonical for human",
    "slug": "UniProt_107_uniprot_sequences_and_mark_which_is_cannonical_for_human",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List all human UniProtKB entries and their sequences, marking if the sequence listed is the cannonical sequence of the matching entry.",
    "context": null,
    "inidces": [],
    "query": "PREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?entry ?sequence ?isCanonical\nWHERE {\n  # We don't want to look into the UniParc graph which will \n  # confuse matters\n  GRAPH <http://sparql.uniprot.org/uniprot> {\n      # we need the UniProt entries that are human\n      ?entry a up:Protein ;\n\tup:organism taxon:9606 ;\n      \tup:sequence ?sequence .\n      # If the sequence is a \"Simple_Sequence\" it is likely to be the \n      # cannonical sequence\n      OPTIONAL {\n       \t?sequence a up:Simple_Sequence .\n        BIND(true AS ?likelyIsCanonical)\n      }\n      # unless we are dealing with an external isoform\n      # see https://www.uniprot.org/help/canonical_and_isoforms\n      OPTIONAL {\n       \tFILTER(?likelyIsCanonical)\n        ?sequence a up:External_Sequence .\n        BIND(true AS ?isComplicated)\n      }\n      # If it is an external isoform it's id would not match the \n      # entry primary accession\n      BIND(IF(?isComplicated, STRENDS(STR(?entry), STRBEFORE(SUBSTR(STR(?sequence), 34),'-')),?likelyIsCanonical) AS ?isCanonical)\n  }\n}",
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
      "OPTIONAL",
      "GRAPH",
      "BIND",
      "WITH",
      "STR",
      "IF",
      "SUBSTR",
      "STRENDS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 108 uniprot signature match start end",
    "slug": "UniProt_108_uniprot_signature_match_start_end",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List all InterPro member database signature match start and end for a specific UniProtKB protein.",
    "context": null,
    "inidces": [],
    "query": "PREFIX faldo: <http://biohackathon.org/resource/faldo#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n  ?protein ?interproMemberDatabaseXref ?matchStart ?matchEnd\nWHERE{\n  GRAPH <http://sparql.uniprot.org/uniprot> {\n    VALUES ?protein {<http://purl.uniprot.org/uniprot/P05067>} .\n    ?protein rdfs:seeAlso ?sa .\n  }\n  GRAPH <http://sparql.uniprot.org/uniparc> {\n    ?uniparc up:sequenceFor ?protein ;\n      rdfs:seeAlso ?interproMemberDatabaseXref .\n    ?interproDatabaseXref up:signatureSequenceMatch ?sam .\n    ?sam faldo:begin ?sab ;\n      faldo:end ?sae .\n    ?sab faldo:position ?matchStart ;\n      faldo:reference ?uniparc .\n    ?sae  faldo:position ?matchEnd ;\n      faldo:reference ?uniparc .\n  }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GRAPH",
      "VALUES"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 109 uniprot transporter in liver",
    "slug": "UniProt_109_uniprot_transporter_in_liver",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find human transporter proteins in reviewed UniProtKB/Swiss-Prot, that are expressed in the liver (Uses Bgee and UBERON).",
    "context": null,
    "inidces": [],
    "query": "PREFIX genex: <http://purl.org/genex#>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX uberon: <http://purl.obolibrary.org/obo/uo#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?rhea\n  ?protein\n  ?anat\nWHERE\n{\n  GRAPH <https://sparql.rhea-db.org/rhea> {\n    ?rhea rh:isTransport true .\n  }\n  ?protein up:annotation ?ann .\n  ?protein up:organism taxon:9606 .\n  ?ann up:catalyticActivity ?ca .\n  ?ca up:catalyzedReaction ?rhea .\n  BIND(uberon:0002107 AS ?anat)\n  SERVICE <https://www.bgee.org/sparql/> {\n    ?seq genex:isExpressedIn ?anat .\n    ?seq lscr:xrefUniprot ?protein .\n    ?seq orth:organism ?organism .\n    ?organism obo:RO_0002162 taxon:9606 .\n  }\n}",
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
      "BIND",
      "SERVICE",
      "STR"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 10 human variant leading to transposition of tyrosine to phenylalanine",
    "slug": "UniProt_10_human_variant_leading_to_transposition_of_tyrosine_to_phenylalanine",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select all human UniProtKB entries with a sequence variant that leads to a tyrosine to phenylalanine substitution",
    "context": null,
    "inidces": [],
    "query": "PREFIX faldo: <http://biohackathon.org/resource/faldo#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein ?annotation ?begin ?text\nWHERE\n{\n        ?protein a up:Protein ;\n            up:organism taxon:9606 ; \n            up:annotation ?annotation .\n        ?annotation a up:Natural_Variant_Annotation ;\n            rdfs:comment ?text ;\n            up:substitution ?substitution ;\n            up:range/faldo:begin\n                [ faldo:position ?begin ;\n                  faldo:reference ?sequence ] .\n        ?sequence rdf:value ?value .\n        BIND (substr(?value, ?begin, 1) as ?original) .\n        FILTER(?original = 'Y' && ?substitution = 'F') .\n}",
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
      "STR",
      "SUBSTR"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 110 uniprot unamed plasmids",
    "slug": "UniProt_110_uniprot_unamed_plasmids",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Sometimes it is known that a gene encoding a protein UniProtKB is located on a plasmid or an organelle, but the name of the plasmid is unknown.",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n    ?protein \n    ?plasmidOrOrganelle\n    ?label\nWHERE {\n    ?protein a up:Protein ;\n      up:encodedIn ?plasmidOrOrganelle .\n    OPTIONAL {\n        ?plasmidOrOrganelle rdfs:label ?label .\n    }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "OPTIONAL"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 111 uniprot make chain sequence fasta",
    "slug": "UniProt_111_uniprot_make_chain_sequence_fasta",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Given an UniProt chain identifier, generate the matching sequence as a FASTA",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX faldo: <http://biohackathon.org/resource/faldo#>\n\nSELECT (CONCAT('>', ?chainSeqId, '\\\\n', (SUBSTR(?iupacAA, ?begin, (?end-?begin+1))))  AS ?chainFasta)\nWHERE {\n  BIND(\"PRO_0000268053\" AS ?chainSeqId) \n  BIND(IRI(CONCAT(\"http://purl.uniprot.org/annotation/\", ?chainSeqId)) AS ?annId)\n  ?annId up:range ?range .\n  ?range faldo:begin [ faldo:reference ?reference ; faldo:position ?begin ] ;\n     faldo:end [ faldo:position ?end ] .\n  ?reference rdf:value ?iupacAA .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND",
      "STR",
      "IRI",
      "CONCAT",
      "SUBSTR"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 112 count human transporters",
    "slug": "UniProt_112_count_human_transporters",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Count the number of Human Transporter Proteins",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX faldo: <http://biohackathon.org/resource/faldo#>\n\nSELECT  \n  (COUNT(DISTINCT ?protein) AS ?humanTransportEnzymes)\nWHERE {\n  GRAPH <http://sparql.uniprot.org/uniprot> {\n    ?protein up:organism taxon:9606 ;\n             up:annotation ?a .\n    ?a a up:Catalytic_Activity_Annotation ;\n      up:catalyticActivity ?ca .\n    ?ca up:catalyzedReaction ?rhea .\n  }\n  GRAPH <https://sparql.rhea-db.org/rhea>{\n  \t?rhea rh:isTransport true .\n  }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GRAPH",
      "DISTINCT",
      "STR",
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 113 UniProtKB Swiss-Prot entries annotated with CC-CA Rhea involving lipids",
    "slug": "UniProt_113_UniProtKB_Swiss-Prot_entries_annotated_with_CC-CA_Rhea_involving_lipids",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "UniProtKB/Swiss-Prot entries annotated with CC-CA/Rhea involving lipids",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n# select all pairs (sprot,rhea) where rhea involves a lipid\nPREFIX rh:<http://rdf.rhea-db.org/>\nPREFIX CHEBI:<http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX up:<http://purl.uniprot.org/core/>\nPREFIX uniprotkb:<http://purl.uniprot.org/uniprot/>\n\nSELECT \n  (COUNT(*) as ?cnt) \nWHERE \n{\n  {\n    SELECT ?protein ?rhea \n    WHERE {\n      SERVICE <https://sparql.rhea-db.org/sparql> {\n        SELECT \n          distinct \n           ?rhea \n        WHERE {\n          ?rhea rdfs:subClassOf rh:Reaction .\n          ?rhea rh:status rh:Approved .\n          ?rhea rh:side ?reactionSide .\n          ?reactionSide rh:contains ?participant .\n          ?participant rh:compound ?compound .\n          ?compound rh:chebi ?chebi .\n          ?chebi rdfs:subClassOf+ CHEBI:18059 .\n        }\n      }\n    }\n  }\n  ?protein a up:Protein .\n  ?protein up:reviewed true .\n  ?protein up:annotation ?a .\n  ?a a up:Catalytic_Activity_Annotation .\n  ?a up:catalyticActivity ?ca .\n  ?ca up:catalyzedReaction ?rhea .\n}",
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
      "ALL",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 114 Number of EC numbers described at protein domain and component levels",
    "slug": "UniProt_114_Number_of_EC_numbers_described_at_protein_domain_and_component_levels",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX up:<http://purl.uniprot.org/core/>\nPREFIX ec:<http://purl.uniprot.org/enzyme/>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT \n  (count(distinct ?protein) as ?proteinCount)\nWHERE\n{\n  ?protein up:reviewed true .\n  OPTIONAL{?protein up:enzyme ?ecNumber}\n  OPTIONAL{?protein up:domain/up:enzyme ?ecNumber}\n  OPTIONAL{?protein up:component/up:enzyme ?ecNumber}\n  FILTER (BOUND(?ecNumber))\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA"
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
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 115 Number of complete EC numbers described at protein level at domain levels at component level",
    "slug": "UniProt_115_Number_of_complete_EC_numbers_described_at_protein_level_at_domain_levels_at_component_level",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX up:<http://purl.uniprot.org/core/>\nPREFIX ec:<http://purl.uniprot.org/enzyme/>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT \n  (count(distinct ?ecProt) as ?ecNumberInProteinCount)\n  (count(distinct ?ecDomain) as ?ecNumberInDomainCount)\n  (count(distinct ?ecComponent) as ?ecNumberInComponentCount)\nWHERE\n{\n  ?protein up:reviewed true .\n  OPTIONAL {?protein up:enzyme ?ecProt . } .\n  OPTIONAL {?protein up:domain/up:enzyme ?ecDomain . } .\n  OPTIONAL {?protein up:component/up:enzyme ?ecComponent . } .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "OPTIONAL",
      "DISTINCT",
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 116 biosodafrontend rabit mouse orthologs",
    "slug": "UniProt_116_biosodafrontend_rabit_mouse_orthologs",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Rabbit's proteins encoded by genes that are orthologous to Mouse's HBB-Y gene and their cross reference links to Uniprot",
    "context": null,
    "inidces": [],
    "query": "PREFIX lscr: <http://purl.org/lscr#>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nSELECT DISTINCT ?PROTEIN_1 ?PROTEIN_2 ?UNIPROT_XREF_1 ?UNIPROT_XREF_2 WHERE {\n\t?taxon_1 up:commonName 'Mouse' .\n\t?taxon_2 up:commonName 'Rabbit' .\n\tSERVICE <https://sparql.omabrowser.org/sparql/> {\n\t\t?cluster a orth:OrthologsCluster .\n\t\t?cluster orth:hasHomologousMember ?node1 .\n\t\t?cluster orth:hasHomologousMember ?node2 .\n\t\t?node2 orth:hasHomologousMember* ?PROTEIN_2 .\n\t\t?node1 orth:hasHomologousMember* ?PROTEIN_1 .\n\t\t?PROTEIN_1 a orth:Protein .\n\t\t?PROTEIN_1 orth:organism/obo:RO_0002162 ?taxon_1 ;\n\t\t\trdfs:label 'HBB-Y' ;\n\t\t\tlscr:xrefUniprot ?UNIPROT_XREF_1 .\n\t\t?PROTEIN_2 a orth:Protein .\n\t\t?PROTEIN_2 orth:organism/obo:RO_0002162 ?taxon_2 .\n\t\t?PROTEIN_2 lscr:xrefUniprot ?UNIPROT_XREF_2 .\n\t\tFILTER ( ?node1 != ?node2 )\n\t}\n}",
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
      "SERVICE",
      "DISTINCT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 117 biosodafrontend glioblastoma orthologs rat",
    "slug": "UniProt_117_biosodafrontend_glioblastoma_orthologs_rat",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Which are the proteins associated with glioblastoma and the orthologs expressed in the rat brain?",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX sio: <http://semanticscience.org/resource/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX genex: <http://purl.org/genex#>\nSELECT DISTINCT ?protein ?orthologous_protein ?gene ?annotation_text WHERE {\n  {\n  \tSELECT ?protein ?annotation_text WHERE {\n      ?protein a up:Protein ;\n          up:organism taxon:9606 ;\n          up:annotation ?annotation .\n      ?annotation rdfs:comment ?annotation_text .\n      ?annotation a up:Disease_Annotation .\n      FILTER CONTAINS (?annotation_text, \"glioblastoma\")\n    }\n  }\n  SERVICE <https://sparql.omabrowser.org/sparql/> {\n    SELECT ?orthologous_protein ?protein ?gene WHERE {\n    ?protein_OMA a orth:Protein .\n    ?orthologous_protein a orth:Protein .\n    ?cluster a orth:OrthologsCluster .\n    ?cluster orth:hasHomologousMember ?node1 .\n    ?cluster\n    orth:hasHomologousMember ?node2 .\n    ?node2 orth:hasHomologousMember* ?protein_OMA .\n    ?node1 orth:hasHomologousMember* ?orthologous_protein .\n    ?orthologous_protein orth:organism/obo:RO_0002162 taxon:10116 . # rattus norvegicus\n    ?orthologous_protein sio:SIO_010079 ?gene .\n    ?protein_OMA lscr:xrefUniprot ?protein .\n    FILTER(?node1 != ?node2)\n\t\t}\n\t}\n  SERVICE <https://www.bgee.org/sparql/> {\n    ?gene genex:isExpressedIn ?a .\n    ?a rdfs:label \"brain\" .\n    ?gene orth:organism ?s . \n    ?s obo:RO_0002162 taxon:10116.\n\t}\n}",
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
      "SERVICE",
      "DISTINCT",
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 118 biosodafrontend rat brain human cancer",
    "slug": "UniProt_118_biosodafrontend_rat_brain_human_cancer",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the Homo sapiens genes associated with cancer and their orthologs expressed in the Rattus norvegicus brain?",
    "context": null,
    "inidces": [],
    "query": "PREFIX up:<http://purl.uniprot.org/core/>\nPREFIX taxon:<http://purl.uniprot.org/taxonomy/>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nPREFIX orth:<http://purl.org/net/orth#>\nPREFIX dcterms:<http://purl.org/dc/terms/>\nPREFIX obo:<http://purl.obolibrary.org/obo/>\nPREFIX lscr:<http://purl.org/lscr#>\nPREFIX genex:<http://purl.org/genex#>\nPREFIX sio: <http://semanticscience.org/resource/>\nSELECT ?gene ?orthologous_protein2 WHERE {\n  {\n    SELECT ?protein1 WHERE {\n      ?protein1 a up:Protein;\n        up:organism/up:scientificName 'Homo sapiens' ;\n        up:annotation ?annotation .\n      ?annotation rdfs:comment ?annotation_text.\n      ?annotation a up:Disease_Annotation .\n      FILTER CONTAINS (?annotation_text, \"cancer\")\n    }\n  }\n  SERVICE <https://sparql.omabrowser.org/sparql/> {\n    SELECT ?orthologous_protein2 ?protein1 ?gene WHERE {\n      ?protein_OMA a orth:Protein .\n      ?orthologous_protein2 a orth:Protein .\n      ?cluster a orth:OrthologsCluster .\n      ?cluster orth:hasHomologousMember ?node1 .\n      ?cluster orth:hasHomologousMember ?node2 .\n      ?node2 orth:hasHomologousMember* ?protein_OMA .\n      ?node1 orth:hasHomologousMember* ?orthologous_protein2 \n      .?orthologous_protein2 orth:organism/obo:RO_0002162/up:scientificName 'Rattus norvegicus' .\n      ?orthologous_protein2 sio:SIO_010079 ?gene .\n      ?protein_OMA lscr:xrefUniprot ?protein1 .\n      FILTER(?node1 != ?node2)\n    }\n  }\n  SERVICE <https://www.bgee.org/sparql/> {\n    ?gene genex:isExpressedIn ?anatEntity .\n    ?anatEntity rdfs:label 'brain' .\n    ?gene orth:organism ?org . \n    ?org obo:RO_0002162 taxon:10116 .\n  }\n}",
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
      "SERVICE",
      "IF",
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 119 uniref distinct ec in seed",
    "slug": "UniProt_119_uniref_distinct_ec_in_seed",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Distinct Enzymes in UniRef50 seed entries",
    "context": null,
    "inidces": [],
    "query": "PREFIX up:<http://purl.uniprot.org/core/>\nSELECT \n  (COUNT(DISTINCT ?enzyme) AS ?distinctEnzymesInUniRef50Seed)\nWHERE {\n  GRAPH <http://sparql.uniprot.org/uniprot>{\n  \t?protein ( up:enzyme | up:domain/up:enzyme | up:component/up:enzyme ) ?enzyme .\n  }\n  GRAPH <http://sparql.uniprot.org/uniref>{\n    ?protein up:seedFor ?cluster .\n    ?cluster up:identity 0.5 .\n  }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GRAPH",
      "DISTINCT",
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 11 entries with transmem on cannonical sequence",
    "slug": "UniProt_11_entries_with_transmem_on_cannonical_sequence",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select all UniProtKB entries with annotated transmembrane regions and the regions' begin and end coordinates on the canonical sequence",
    "context": null,
    "inidces": [],
    "query": "PREFIX faldo: <http://biohackathon.org/resource/faldo#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein ?begin ?end\nWHERE \n{\n\t?protein a up:Protein .\n\t?protein up:annotation ?annotation .\n\t?annotation a up:Transmembrane_Annotation .\n\t?annotation up:range ?range .\n\t?range faldo:begin/faldo:position ?begin .\n\t?range faldo:end/faldo:position ?end\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 120 for taxon find reference proteomes",
    "slug": "UniProt_120_for_taxon_find_reference_proteomes",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "For a ncbi taxon identifier as a digit find it's reference proteome(s) if they exist",
    "context": null,
    "inidces": [],
    "query": "PREFIX up:<http://purl.uniprot.org/core/>\nPREFIX taxon:<http://purl.uniprot.org/taxonomy/>\n\nSELECT ?taxon ?reference_proteome\nWHERE\n{\n  VALUES (?taxid) {\n    (623) # Shigella flexneri\n    (633) # Yersinia pseudotuberculosis\n  } \n  # Convert the digit to a correct IRI\n  BIND(IRI(CONCAT(STR(taxon:), ?taxid)) AS ?taxon)\n  ?taxon up:scientificName ?taxonName .\n  OPTIONAL {\n    ?reference_proteome a up:Reference_Proteome .\n    ?reference_proteome up:organism ?taxon .\n  }\n}",
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
      "BIND",
      "VALUES",
      "STR",
      "IRI",
      "IF",
      "CONCAT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 121 proteins and diseases linked",
    "slug": "UniProt_121_proteins_and_diseases_linked",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List all UniProtKB proteins and the diseases are annotated to be related.",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n\t?protein\n\t?disease\nWHERE {\n\t?protein a up:Protein ;\n    \tup:annotation ?annotation .\n\t?annotation a up:Disease_Annotation ;\n    \tup:disease ?disease .\n\t?disease a up:Disease .\n}",
    "ontologies": [
      "EX",
      "EX120",
      "RDFS",
      "SCHEMA",
      "SH",
      "UP"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 122 enzymes transporting lipids in reviewed human",
    "slug": "UniProt_122_enzymes_transporting_lipids_in_reviewed_human",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List all UniProtKB SwissProt entries, facilitation the transport of lipids.",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\n\nSELECT\n  ?protein\n  ?chebi\nWHERE {\n  GRAPH <https://sparql.rhea-db.org/rhea> {\n    ?rhea rh:isTransport true .\n    ?rhea rh:side/rh:contains/rh:compound ?compound .\n    ?compound (rh:chebi|(rh:reactivePart/rh:chebi)|rh:underlyingChebi) ?chebi .\n  }\n  # CHEBI:18059 is the class for all Lipids\n  ?chebi rdfs:subClassOf* CHEBI:18059 .\n \n  \n  # Select human reviewed entries from Swiss-Prot\n  ?protein up:reviewed true ; \n    up:organism taxon:9606 .\n   # Link protein to catalytic activity, then to Rhea reaction\n  ?protein up:annotation?annotation .\n  ?annotation up:catalyticActivity?catalytic_activity_obj .\n  ?catalytic_activity up:catalyzedReaction?rhea .\n}",
    "ontologies": [
      "EX",
      "EX120",
      "RDFS",
      "SCHEMA",
      "SH",
      "UP"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GRAPH",
      "FROM",
      "ALL",
      "STR",
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 12 entries integrated on date",
    "slug": "UniProt_12_entries_integrated_on_date",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select all UniProtKB entries that were integrated on the 30th of November 2010",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT ?protein\nWHERE\n{\n\t?protein a up:Protein . \n\t?protein up:created '2010-11-30'^^xsd:date\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "CREATE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 17 average count to PDB",
    "slug": "UniProt_17_average_count_to_PDB",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select the average number of cross-references to the <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT (AVG(?linksToPdbPerEntry) AS ?avgLinksToPdbPerEntry)\nWHERE\n{\n\tSELECT ?protein (COUNT(DISTINCT ?db) AS ?linksToPdbPerEntry)\n\tWHERE\n\t{\n\t\t?protein a up:Protein .\n\t\t?protein rdfs:seeAlso ?db .\n\t\t?db up:database <http://purl.uniprot.org/database/PDB> .\n\t}\n\tGROUP BY ?protein ORDER BY DESC(?linksToPdbPerEntry)\n}",
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
      "DISTINCT",
      "COUNT",
      "AVG"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 18 top level ec classification group by count",
    "slug": "UniProt_18_top_level_ec_classification_group_by_count",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select the number of UniProtKB entries for each of the EC (Enzyme Commission) top level categories",
    "context": null,
    "inidces": [],
    "query": "PREFIX ec: <http://purl.uniprot.org/enzyme/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?ecClass (COUNT(?protein) as ?size)\nWHERE\n{\n    VALUES (?ecClass) {(ec:1.-.-.-) (ec:2.-.-.-) (ec:3.-.-.-) (ec:4.-.-.-) (ec:5.-.-.-) (ec:6.-.-.-) (ec:7.-.-.-)} .\n    ?protein ( up:enzyme | up:domain/up:enzyme | up:component/up:enzyme ) ?enzyme .\n    # Enzyme subclasses are materialized, do not use rdfs:subClassOf+\n    ?enzyme rdfs:subClassOf ?ecClass .\n}\nGROUP BY ?ecClass ORDER BY ?ecClass",
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
      "GROUP BY",
      "ORDER BY",
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 19 natural variants associated with pubmed id",
    "slug": "UniProt_19_natural_variants_associated_with_pubmed_id",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find all natural variant annotations if associated via an evidence tag to an article with a PubMed identifier",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n    ?accession\n    ?annotation_acc \n    ?pubmed\nWHERE\n{\n        ?protein a up:Protein ;\n            up:annotation ?annotation .\n        ?annotation a up:Natural_Variant_Annotation .\n        ?linkToEvidence rdf:object ?annotation ;\n                        up:attribution ?attribution .\n        ?attribution up:source ?source .\n        ?source a up:Journal_Citation .\n  BIND(SUBSTR(STR(?protein),33) AS ?accession)\n  BIND(IF(CONTAINS(STR(?annotation), \"#SIP\"), SUBSTR(STR(?annotation),33), SUBSTR(STR(?annotation),36))AS?annotation_acc)\n  BIND(SUBSTR(STR(?source),35) AS ?pubmed)\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND",
      "STR",
      "IF",
      "SUBSTR",
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 1 select all taxa used in uniprot",
    "slug": "UniProt_1_select_all_taxa_used_in_uniprot",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select all taxa from the <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?taxon\nFROM <http://sparql.uniprot.org/taxonomy>\nWHERE\n{\n    ?taxon a up:Taxon .\n}",
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
      "FROM"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 20 how often citation used in evidence tag",
    "slug": "UniProt_20_how_often_citation_used_in_evidence_tag",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find how often an article in PubMed was used in an evidence tag in a human protein (ordered by most used to least)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n    ?source \n    (COUNT(?attribution) AS ?attribitions)\nWHERE\n{\n        ?protein a up:Protein ;\n            up:organism taxon:9606 ;\n            up:annotation ?annotation .\n        ?linkToEvidence rdf:object ?annotation ;\n                        up:attribution ?attribution .\n        ?attribution up:source ?source .\n        ?source a up:Journal_Citation .\n} GROUP BY ?source ORDER BY DESC(COUNT(?attribution))",
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
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 21 where are genetic disease related proteins in a cell",
    "slug": "UniProt_21_where_are_genetic_disease_related_proteins_in_a_cell",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find where disease related proteins are known to be located in the cell",
    "context": null,
    "inidces": [],
    "query": "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\n\nSELECT \n    ?protein \n    ?disease \n    ?location_inside_cell \n    ?cellcmpt\nWHERE\n{\n    ?protein up:annotation ?diseaseAnnotation , ?subcellAnnotation .\n    ?diseaseAnnotation up:disease/skos:prefLabel ?disease .\n    ?subcellAnnotation up:locatedIn/up:cellularComponent ?cellcmpt .\n    ?cellcmpt skos:prefLabel ?location_inside_cell .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 22 go term labels per go category for multiple proteins",
    "slug": "UniProt_22_go_term_labels_per_go_category_for_multiple_proteins",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "For two accession numbers (ACs) find the GO term labels and group them into GO process,function and component",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX GO:<http://purl.obolibrary.org/obo/GO_>\n\nSELECT \n    (CONCAT(SUBSTR(STR(?protein), 33)) AS ?uniprot)\n    (GROUP_CONCAT(?celtype; separator=\";\") AS ?celtypes)\n    (GROUP_CONCAT(?biotype; separator=\";\") AS ?biotypes)\n    (GROUP_CONCAT(?moltype; separator=\";\") AS ?moltypes)\nWHERE\n{\n    VALUES (?ac) {(\"Q6GZX4\") (\"Q96375\")}\n    BIND (IRI(CONCAT(\"http://purl.uniprot.org/uniprot/\",?ac)) AS ?protein)\n    ?protein a up:Protein .\n    ?protein up:classifiedWith ?goTerm .\n    #Determine if the type is biological_process\n    OPTIONAL {\n        ?goTerm rdfs:subClassOf GO:0008150 .\n        ?goTerm rdfs:label ?biotype .\n    }\n    #Determine if the type is cellular_component\n    OPTIONAL {\n        ?goTerm rdfs:subClassOf GO:0005575 .\n        ?goTerm rdfs:label ?celtype .\n    }\n    #Determine if the type is molecular_function\n    OPTIONAL {\n        ?goTerm rdfs:subClassOf GO:0003674 .\n        ?goTerm rdfs:label ?moltype .\n    }\n    #Filter out the uniprot keywords\n    FILTER(bound(?biotype) || bound(?celtype) || bound(?moltype))\n} GROUP BY ?protein",
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
      "BIND",
      "VALUES",
      "GROUP BY",
      "WITH",
      "STR",
      "BOUND",
      "IRI",
      "IF",
      "CONCAT",
      "SUBSTR",
      "MIN",
      "GROUP_CONCAT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 23 human proteins related to kinase activity",
    "slug": "UniProt_23_human_proteins_related_to_kinase_activity",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Number of reviewed entries (UniProtKB/Swiss-Prot) that are related to <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX GO: <http://purl.obolibrary.org/obo/GO_>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n    (COUNT(DISTINCT(?protein)) AS ?pc)\nWHERE\n{   \n    ?protein rdf:type up:Protein ;\n        up:reviewed true  ;\n        up:organism taxon:9606 ;\n        up:classifiedWith|(up:classifiedWith/rdfs:subClassOf) GO:0016301 .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT",
      "WITH",
      "IF",
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 24 uniprot release in endpoint",
    "slug": "UniProt_24_uniprot_release_in_endpoint",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find the release number of the UniProt data that is currently being queried",
    "context": null,
    "inidces": [],
    "query": "SELECT ?version\nFROM <https://sparql.uniprot.org/.well-known/void>\nWHERE\n{\n    [] <http://purl.org/pav/version> ?version\n}",
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
      "NOW"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 25 protein name of any kind with value",
    "slug": "UniProt_25_protein_name_of_any_kind_with_value",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find UniProtKB entry which has a protein name 'HLA class I histocompatibility antigen, B-73 alpha chain'",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein ?anyKindOfName\nWHERE\n{\n\t\t?protein a up:Protein .\n\t\t?protein (up:recommendedName|up:alternativeName) ?structuredName .\n\t\t?structuredName ?anyKindOfName  \"HLA class I histocompatibility antigen, B alpha chain\" .\n\t\t?anyKindOfName rdfs:subPropertyOf up:structuredNameType .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "STR"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 26 component HLA class I histocompatibility domain",
    "slug": "UniProt_26_component_HLA_class_I_histocompatibility_domain",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find UniProtKB entry, or an UniProtKB entries domain or component which has a name 'HLA class I histocompatibility antigen, B-73 alpha chain'",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein ?anyKindOfName\nWHERE\n{\n\t\t?protein a up:Protein .\n\t\t?protein (up:recommendedName|up:alternativeName)|((up:domain|up:component)/(up:recommendedName|up:alternativeName)) ?structuredName .\n\t\t?structuredName ?anyKindOfName  \"HLA class I histocompatibility antigen, B-73 alpha chain\" .\n\t\t?anyKindOfName rdfs:subPropertyOf up:structuredNameType .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "STR"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 27 all names of protein",
    "slug": "UniProt_27_all_names_of_protein",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find all names associated with UniProtKB entry P05067, and if the name is associated with the entry it's domains or its components",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?protein\n  ?anyKindOfName \n  ?names \n  ?partType\nWHERE\n{\n  BIND(<http://purl.uniprot.org/uniprot/P05067> AS ?protein)\n  ?protein a up:Protein .\n  {\n    ?protein (up:recommendedName|up:alternativeName) ?structuredName .\n  }\n    UNION\n  {\n    VALUES(?partType){(up:domain) (up:component)}\n    ?protein ?partType ?part .\n    ?part (up:recommendedName|up:alternativeName) ?structuredName .\n  }\n  ?structuredName ?anyKindOfName  ?names .\n  ?anyKindOfName rdfs:subPropertyOf up:structuredNameType .\n}",
    "ontologies": [
      "EX",
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
      "STR"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 28 all entries encoded on chromosome of proteome",
    "slug": "UniProt_28_all_entries_encoded_on_chromosome_of_proteome",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Get the list of UniProtKB entries for the chromosome of proteome <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n  ?protein\n  ?proteome \nWHERE\n{\n  ?protein a up:Protein ;\n           up:reviewed true ;\n           up:proteome ?proteome .\n  VALUES (?proteome) {(<http://purl.uniprot.org/proteomes/UP000000625#Chromosome>)}\n}",
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
      "VALUES"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 29 search uniprot in japanese with allie",
    "slug": "UniProt_29_search_uniprot_in_japanese_with_allie",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Use <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein ?englishLabelStr\nWHERE {\n    SERVICE <https://data.allie.dbcls.jp/sparql>{\n        ?x rdfs:label \"アミロイド前駆体タンパク質\"@ja ;\n            rdfs:label ?englishLabel .\n        FILTER(lang(?englishLabel) = \"en\")\n    }\n    BIND (STR(?englishLabel) AS ?englishLabelStr)\n    ?protein a up:Protein .\n    {\n        ?protein (up:recommendedName|up:alternativeName) ?structuredName .\n    }\n    UNION\n    {\n        VALUES(?partType){(up:domain) (up:component)}\n            ?protein ?partType ?part .\n        ?part (up:recommendedName|up:alternativeName) ?structuredName .\n    }\n    ?structuredName ?anyKindOfName  ?englishLabelStr .\n    ?anyKindOfName rdfs:subPropertyOf up:structuredNameType .\n}",
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
      "VALUES",
      "SERVICE",
      "ALL",
      "STR",
      "LANG"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 2 bacteria taxa and their scientific name",
    "slug": "UniProt_2_bacteria_taxa_and_their_scientific_name",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select all bacterial taxa and their scientific name from the <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?taxon ?name\nWHERE\n{\n    ?taxon a up:Taxon .\n    ?taxon up:scientificName ?name .\n    # Taxon subclasses are materialized, do not use rdfs:subClassOf+\n    ?taxon rdfs:subClassOf taxon:2 .\n}",
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
      "IF"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 30 merged loci",
    "slug": "UniProt_30_merged_loci",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find UniProtKB entries with merged loci in <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?protein \n  (GROUP_CONCAT(?locusName; separator=',') AS ?locusNames)\nWHERE \n{ \n  ?protein a up:Protein ;\n    up:organism taxon:360910 ;\n    up:encodedBy ?gene .\n  ?gene up:locusName ?locusName .\n} \nGROUP BY ?protein \nHAVING (COUNT(?locusName) > 1)",
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
      "HAVING",
      "CONCAT",
      "COUNT",
      "GROUP_CONCAT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 31 uniparc record with most subentries",
    "slug": "UniProt_31_uniparc_record_with_most_subentries",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find UniParc records whose sequence point to the most database entries",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?sequence ?entries\nWHERE\n{\n    SELECT \n        ?sequence \n        (COUNT(?entry) AS ?entries)\n    WHERE\n    {\n        GRAPH <http://sparql.uniprot.org/uniparc> {\n            ?sequence up:sequenceFor ?entry .\n        }\n    } GROUP BY ?sequence\n} ORDER BY DESC(?entries)",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GRAPH",
      "GROUP BY",
      "ORDER BY",
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 32 uniprot with more than x topodom",
    "slug": "UniProt_32_uniprot_with_more_than_x_topodom",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find UniProtKB entries with more than 1 <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n    ?protein \n    (GROUP_CONCAT(?comment; separator=\", \") AS ?comments)\nWHERE\n{\n    ?protein a up:Protein ;\n            up:annotation ?annotation . \n    ?annotation rdf:type up:Topological_Domain_Annotation ;\n            rdfs:comment ?comment .\n} \nGROUP BY ?protein \nHAVING (COUNT(?annotation) > 1)",
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
      "HAVING",
      "CONCAT",
      "COUNT",
      "GROUP_CONCAT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 33 longest variant comment",
    "slug": "UniProt_33_longest_variant_comment",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find longest comment text associated with a UniProtKB natural variant annotation",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n    ?annotation ?comment\nWHERE {\n    ?annotation a up:Natural_Variant_Annotation ;\n        rdfs:comment ?comment . \n} \nORDER BY DESC(STRLEN(?comment))",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "STR",
      "STRLEN"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 34 cooccurence count of topodom",
    "slug": "UniProt_34_cooccurence_count_of_topodom",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find the co-occurence count of topological domain comment text in UniProtKB entries",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n    ?comment1 \n    ?comment2 \n    (COUNT(?comment1) AS ?count1)\nWHERE\n{\n    ?protein a up:Protein ;\n               up:annotation ?annotation1 , \n                             ?annotation2 . \n    ?annotation1 rdf:type up:Topological_Domain_Annotation ;\n        rdfs:comment ?rawComment1 .\n    ?annotation2 rdf:type up:Topological_Domain_Annotation ;\n        rdfs:comment ?rawComment2 . \n    BIND(IF(contains(?rawComment1, ';'), \n            STRBEFORE(?rawComment1,';'), \n            ?rawComment1) AS ?comment1)\n    BIND(IF(contains(?rawComment2, ';'), \n            STRBEFORE(?rawComment2,';'), \n            ?rawComment2) AS ?comment2)\n    FILTER(?annotation1 != ?annotation2)\n} \nGROUP BY ?comment1 ?comment2 \nORDER BY DESC(COUNT(?comment1))",
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
      "GROUP BY",
      "ORDER BY",
      "STR",
      "IF",
      "CONTAINS",
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 35 similar proteins via uniref clusters",
    "slug": "UniProt_35_similar_proteins_via_uniref_clusters",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find the similar proteins for UniProtKB entry P05067 sorted by UniRef cluster identity",
    "context": null,
    "inidces": [],
    "query": "PREFIX uniprotkb: <http://purl.uniprot.org/uniprot/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n    ?similar ?identity\nFROM <http://sparql.uniprot.org/uniref>\nFROM <http://sparql.uniprot.org/uniprot>\nWHERE\n{\n    BIND (uniprotkb:P05607 AS ?protein)\n    ?cluster up:member ?member ;\n             up:member/up:sequenceFor ?protein;\n             up:identity ?identity .\n    ?member up:sequenceFor ?similar .\n    FILTER(!sameTerm(?similar, ?protein))\n} \nORDER BY DESC(?identity)",
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
      "SAMETERM"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 36 orthologous proteins via orthodb",
    "slug": "UniProt_36_orthologous_proteins_via_orthodb",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find the orthologous proteins for UniProtKB entry P05067 using the <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX orthodb: <http://purl.orthodb.org/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX uniprotkb: <http://purl.uniprot.org/uniprot/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?protein\n  ?orthoGroup\n  ?scientificName\n  ?functionComment\n  ?prefferedGeneName\n  ((STRLEN(?value) - ?medianLength) as ?deviationFromMedianLength)\nWHERE\n{\n  uniprotkb:P05067 a up:Protein ;\n        up:organism/up:scientificName ?scientificName ;\n        rdfs:seeAlso ?orthoGroup ;\n        up:encodedBy/skos:prefLabel ?prefferedGeneName ;\n          up:sequence/rdf:value ?value .\n  OPTIONAL {\n    ?protein up:annotation ?functionAnnotation .\n    ?functionAnnotation a up:Function_Annotation ;\n      rdfs:comment ?functionComment .\n  }\n  SERVICE <https://sparql.orthodb.org/sparql>{\n    ?orthoGroup orthodb:ogMedianProteinLength ?medianLength .\n    ?orthoGroup orthodb:hasMember ?xref .\n    ?xref orthodb:xref/orthodb:xrefResource uniprotkb:P05067 .\n  }\n}",
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
      "SERVICE",
      "FROM",
      "STR",
      "IF",
      "STRLEN"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 37 Epitope VSTQ where T is a phosporylated threonine",
    "slug": "UniProt_37_Epitope_VSTQ_where_T_is_a_phosporylated_threonine",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find the human protein which contains an epitope VSTQ, where T is a phosphorylated threonine",
    "context": null,
    "inidces": [],
    "query": "PREFIX faldo: <http://biohackathon.org/resource/faldo#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n  ?protein \n  ?comment\n  ?begin\n  ?end \nWHERE\n{\n  ?protein a up:Protein ;\n    up:organism taxon:9606 ; \n    up:sequence ?sequence ;\n    up:annotation ?annotation .\n  ?annotation a up:Modified_Residue_Annotation ;\n    rdfs:comment ?comment ;\n    up:range ?range .\n  ?range \n    faldo:begin [ faldo:position ?begin ; faldo:reference ?sequence ] ;\n    faldo:end [ faldo:position ?end ; faldo:reference ?sequence ] .\n  ?sequence rdf:value ?aaSequence .\n  FILTER (SUBSTR(?aaSequence, ?begin -2 , 4) = \"VSTQ\")     \n  FILTER (CONTAINS(?comment, \"Phosphothreonine\"))\n}",
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
      "STR",
      "IF",
      "SUBSTR",
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 38 find gene region in wikidata for known entry",
    "slug": "UniProt_38_find_gene_region_in_wikidata_for_known_entry",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "For the human entry P05067 (Amyloid-beta precursor protein) find the gene start ends in WikiData",
    "context": null,
    "inidces": [],
    "query": "PREFIX p: <http://www.wikidata.org/prop/>\nPREFIX pq: <http://www.wikidata.org/prop/qualifier/>\nPREFIX ps: <http://www.wikidata.org/prop/statement/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX uniprotkb: <http://purl.uniprot.org/uniprot/>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\n\n\nSELECT \n\t?protein \n\t?begin\n\t?end\n\t?chromosome\n\t?assembly\nWHERE {\n    {\n        BIND(uniprotkb:P05067 AS ?proteinIRI)\n        BIND (SUBSTR(STR(?proteinIRI), STRLEN(STR(uniprotkb:))+1) AS ?protein)\n    }\n    SERVICE <https://query.wikidata.org/sparql> {\n        ?wp wdt:P352 ?protein ;\n            wdt:P702 ?wg . \n        ?wg p:P644   ?wgss .\n        ?wgss ps:P644        ?begin ;\n          pq:P1057/wdt:P1813 ?chromosome ;\n          pq:P659/rdfs:label ?assembly .\n        ?wg p:P645 ?wgse .\n        ?wgse ps:P645        ?end ;\n          pq:P1057/wdt:P1813 ?chromosome ;\n          pq:P659/rdfs:label ?assembly .\n        FILTER(lang(?assembly) = \"en\")\n  } \n}",
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
      "SERVICE",
      "STR",
      "LANG",
      "IRI",
      "IF",
      "STRLEN",
      "SUBSTR"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 39 experimental catalytic activities in swissprot",
    "slug": "UniProt_39_experimental_catalytic_activities_in_swissprot",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve entries and catalytic activities in the reviewed (UniProtKB/Swiss-Prot) section that have experimental evidences,",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT  \n  ?protein\n  ?rhea \nWHERE {\n  # ECO 269 is experimental evidence\n  BIND (<http://purl.obolibrary.org/obo/ECO_0000269> as ?evidence)\n  GRAPH <http://sparql.uniprot.org/uniprot> {\n    ?protein up:reviewed true ;\n      up:annotation ?a ;\n      up:attribution ?attribution  .\n\n    ?a a up:Catalytic_Activity_Annotation ;\n      up:catalyticActivity ?ca .\n    ?ca up:catalyzedReaction ?rhea .\n  \n    [] rdf:subject ?a ;\n      rdf:predicate up:catalyticActivity ;\n      rdf:object ?ca ;\n      up:attribution ?attribution .\n\n    ?attribution up:evidence ?evidence .\n  }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GRAPH",
      "BIND"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 3 entry sequences organism",
    "slug": "UniProt_3_entry_sequences_organism",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select all UniProtKB entries, and their organism and amino acid sequences (including isoforms), for <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein ?organism ?isoform ?sequence\nWHERE\n{\n    ?protein a up:Protein .\n    ?protein up:organism ?organism .\n    # Taxon subclasses are materialized, do not use rdfs:subClassOf+\n    ?organism rdfs:subClassOf taxon:83333 .\n    ?protein up:sequence ?isoform .\n    ?isoform rdf:value ?sequence .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 40 human enzymes that metabolize sphingolipids",
    "slug": "UniProt_40_human_enzymes_that_metabolize_sphingolipids",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve human enzymes that metabolize sphingolipids and are annotated in ChEMBL",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?protein ?chemblEntry\nWHERE {\n  SERVICE <https://sparql.rhea-db.org/sparql> {\n    ?rhea rdfs:subClassOf rh:Reaction ;\n      rh:side/rh:contains/rh:compound/rh:chebi/rdfs:subClassOf+ CHEBI:26739 .\n  }\n  ?ca up:catalyzedReaction ?rhea .\n  ?protein up:annotation/up:catalyticActivity ?ca ;\n    up:organism taxon:9606 ;\n    rdfs:seeAlso ?chemblEntry .\n  ?chemblEntry up:database <http://purl.uniprot.org/database/ChEMBL> .\n}",
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
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 41 fragmented sequences",
    "slug": "UniProt_41_fragmented_sequences",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve UniProtKB entries with sequences that are composed of fragments",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\n\nSELECT DISTINCT \n  ?protein\nWHERE {\n  ?protein a up:Protein ;\n    up:sequence ?sequence .\n  MINUS { ?sequence up:fragment [] }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "MINUS",
      "DISTINCT",
      "MIN"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 42 connect patents to epo",
    "slug": "UniProt_42_connect_patents_to_epo",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Connect patents cited in UniProtKB with those in the patent database at EPO via publication number.",
    "context": null,
    "inidces": [],
    "query": "PREFIX patent: <http://data.epo.org/linked-data/def/patent/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?citation ?patent ?application ?applicationNo\nWHERE\n{\n  ?citation a up:Patent_Citation ;\n    skos:exactMatch ?patent .\n  FILTER(CONTAINS(STR(?patent), 'EP'))\n  BIND(SUBSTR(STR(?patent), 35) AS ?applicationNo)\n  SERVICE <https://data.epo.org/linked-data/query>{\n    ?application patent:publicationNumber ?applicationNo\n  }\n}",
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
      "SERVICE",
      "STR",
      "SUBSTR",
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 43 patents used in uniprot granted twenty years in the past",
    "slug": "UniProt_43_patents_used_in_uniprot_granted_twenty_years_in_the_past",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Connect patents cited in UniProtKB with those in the patent database at EPO via publication number, whose grant date is more than twenty years in the past.",
    "context": null,
    "inidces": [],
    "query": "PREFIX patent: <http://data.epo.org/linked-data/def/patent/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?grantDate ?patent ?application ?applicationNo\nWHERE\n{\n    ?citation a up:Patent_Citation ;\n  skos:exactMatch ?patent .\n  BIND(SUBSTR(STR(?patent), 35) AS ?applicationNo)\n  BIND(SUBSTR(STR(?patent), 33, 2) AS ?countryCode)\n  SERVICE <https://data.epo.org/linked-data/query>{\n    ?publication patent:publicationNumber ?applicationNo ;\n      patent:application ?application .\n    ?application patent:grantDate ?grantDate .\n  }\n  BIND((year(now()) - 20) AS ?thisYearMinusTwenty)\n  BIND(year(?grantDate) AS ?grantYear)\n  FILTER(?grantYear < ?thisYearMinusTwenty)\n} ORDER BY ?grantYear",
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
      "MINUS",
      "SERVICE",
      "ORDER BY",
      "STR",
      "NOW",
      "SUBSTR",
      "YEAR",
      "COUNT",
      "MIN"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 44 rhea interpro union in uniprot",
    "slug": "UniProt_44_rhea_interpro_union_in_uniprot",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find the Rhea and InterPro combinations in UniProtKB entries.",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n    ?interpro\n\t?rhea\nFROM <http://sparql.uniprot.org/uniprot>\nWHERE \n{\n  ?protein up:reviewed true .\n  ?protein up:annotation ?annotation .\n  ?annotation up:catalyticActivity ?rhea .\n  ?protein rdfs:seeAlso ?interpro .\n  ?interpro up:database <http://purl.uniprot.org/database/InterPro> .\n} ORDER BY ?rhea",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "ORDER BY",
      "FROM"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 45 drugs targeting human sterol metabolism enzymes",
    "slug": "UniProt_45_drugs_targeting_human_sterol_metabolism_enzymes",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve drugs that target human enzymes involved in sterol metabolism (federated query with WikiData and Rhea).",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX chebihash: <http://purl.obolibrary.org/obo/chebi#>\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX uniprotkb: <http://purl.uniprot.org/uniprot/>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\n\nSELECT DISTINCT ?protein ?proteinFullName ?wikiChemical ?wikiChemicalLabel ?medicalConditionTreatedLabel\nWHERE {\n  # ChEBI: retrieve members of the ChEBI class ChEBI:15889 (sterol)\n  # Rhea: retrieve the reactions involving these ChEBI as participants\n  SERVICE <https://sparql.rhea-db.org/sparql> {\n    ?reaction rdfs:subClassOf rh:Reaction ;\n      rh:status rh:Approved ;\n      rh:side ?reactionSide .\n    ?reactionSide\n      rh:contains ?participant .\n    ?participant rh:compound ?compound\n    {\n      ?compound rh:chebi ?chebi .\n      ?chebi (rdfs:subClassOf)+ CHEBI:15889\n    } UNION {\n      ?compound rh:chebi ?chebi .\n      ?chebi2 rdfs:subClassOf ?chebiRestriction .\n      ?chebiRestriction\n\t\ta owl:Restriction ;\n\t\towl:onProperty chebihash:has_major_microspecies_at_pH_7_3 ;\n\t\towl:someValuesFrom ?chebi .\n      ?chebi2 (rdfs:subClassOf)+ CHEBI:15889\n    }\n  }\n  # UniProt: retrieve the human (taxid:9606) enzymes catalyzing these Rhea reactions\n  ?ca up:catalyzedReaction  ?reaction .\n  ?a up:catalyticActivity  ?ca .\n  ?proteinIRI  up:annotation ?a ;\n    up:organism taxon:9606 ;\n    up:recommendedName ?proteinRecName .\n  ?proteinRecName up:fullName ?proteinFullName .\n  # Find drugs in wikidata that interact with the UniProt Proteins\n  BIND (SUBSTR(STR(?proteinIRI), STRLEN(STR(uniprotkb:))+1) AS ?protein)\n  SERVICE <https://query.wikidata.org/sparql> {\n    ?wp wdt:P352  ?protein .\n    ?wikiChemical wdt:P129 ?wp . # Physically interacts with\n    ?wikiChemical rdfs:label ?wikiChemicalLabel .\n    ?wikiChemical wdt:P2175 ?wmc . # Medical conndition treated\n    ?wmc rdfs:label ?medicalConditionTreatedLabel .\n    FILTER(lang(?medicalConditionTreatedLabel) = 'en')\n    FILTER(lang(?wikiChemicalLabel) = 'en')\n  }\n}",
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
      "VALUES",
      "SERVICE",
      "DISTINCT",
      "FROM",
      "WITH",
      "ALL",
      "STR",
      "LANG",
      "IRI",
      "STRLEN",
      "SUBSTR",
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 46 duck pictures via eepa and taxonomy",
    "slug": "UniProt_46_duck_pictures_via_eepa_and_taxonomy",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve images of 'Anas' (Ducks) from the European Environmental Agency databases (federated query).",
    "context": null,
    "inidces": [],
    "query": "PREFIX eunisSpecies: <http://eunis.eea.europa.eu/rdf/species-schema.rdf#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n    ?taxon\n    ?ncbiTaxid\n    ?eunisTaxon\n    ?eunisName \n    ?image\nWHERE\n{\n    GRAPH <http://sparql.uniprot.org/taxonomy>\n    {\n        ?taxon a up:Taxon .\n        # Taxon subclasses are materialized, do not use rdfs:subClassOf+\n        ?taxon rdfs:subClassOf taxon:8835 .\n        BIND(strafter(str(?taxon), 'onomy/') AS ?ncbiTaxid)\n    }\n    SERVICE <https://semantic.eea.europa.eu/sparql>\n    {\n        ?eunisTaxon a eunisSpecies:SpeciesSynonym ;\n           eunisSpecies:binomialName ?eunisName ;\n           eunisSpecies:sameSpeciesNCBI ?ncbiTaxid ;\n           <http://xmlns.com/foaf/0.1/depiction> ?image .\n    }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GRAPH",
      "BIND",
      "SERVICE",
      "STR"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 47 protein with transmembrane region with close by alanine",
    "slug": "UniProt_47_protein_with_transmembrane_region_with_close_by_alanine",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find UniProtKB entries with a transmembrane region, with an alanine in the 15 amino acid region preceding the transmembrane",
    "context": null,
    "inidces": [],
    "query": "PREFIX faldo: <http://biohackathon.org/resource/faldo#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\n\nSELECT ?protein ?from ?interestingRegion\nWHERE\n{\n  ?protein up:annotation ?annotation .\n  ?annotation a up:Transmembrane_Annotation .\n  # Get the coordinates of the Transmembrane\n  ?annotation up:range ?range .\n  ?range faldo:begin ?beginI .\n  ?beginI faldo:position ?begin .\n  ?beginI faldo:reference ?sequence .\n  # The aas will have the specific IUPAC aminoacids\n  ?sequence rdf:value ?aas .\n  # We calculate the start by substracting 10\n  BIND(?begin - 10 AS ?tenBeforeBegin)\n  # Can't start before the sequence starts or we might miss some results\n  BIND(IF(?tenBeforeBegin < 1, 0, ?tenBeforeBegin) AS ?from)\n  # Substring the IUPAC aminoacids\n  BIND(SUBSTR(?aas, ?from, 15) AS ?interestingRegion)\n  # The interestingRegion needds to contain an Alanine\n  FILTER(CONTAINS(?interestingRegion, 'A'))\n}",
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
      "SUBSTR",
      "CONTAINS",
      "MIN"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 48 glycosylation sites and glycans",
    "slug": "UniProt_48_glycosylation_sites_and_glycans",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve glycosylation sites and glycans on human enzymes (federated with Glyconnect)",
    "context": null,
    "inidces": [],
    "query": "PREFIX faldo: <http://biohackathon.org/resource/faldo#>\nPREFIX foaf: <http://xmlns.com/foaf/0.1/>\nPREFIX glycan: <http://purl.jp/bio/12/glyco/glycan#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n        DISTINCT\n            ?protein ?glycosite ?glycostructure ?glycoimage\nWHERE{\n  ?protein up:annotation ?annotation .\n  ?protein up:organism taxon:9606 .\n  ?annotation a up:Catalytic_Activity_Annotation .\n  ?protein up:sequence ?isoform .\n   \n  SERVICE <https://glyconnect.expasy.org/sparql> {\n    ?glycosite faldo:reference ?isoform .\n    ?glycosite faldo:position ?position .\n    ?specificglycosite faldo:location ?glycosite .\n    ?glycoprotein glycan:glycosylated_at ?specificglycosite .\n    ?glycostructure glycan:glycosylates_at ?specificglycosite .\n    ?glycostructure foaf:depiction ?glycoimage .\n  }\n}",
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
      "STR",
      "IF"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 49 tissues where genes metabolizing cholestrol are expressed",
    "slug": "UniProt_49_tissues_where_genes_metabolizing_cholestrol_are_expressed",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve the UniProtKB proteins, their catalyzed Rhea reactions, their encoding genes (Ensembl) and the anatomic entities where the genes are expressed (UBERON anatomic entites from Bgee expression data resource).",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?protein ?ensemblGene ?reaction ?anatomicEntityLabel ?anatomicEntity\nWHERE {\n  # federated query to Rhea enadpoint\n  {\n    SELECT DISTINCT ?reaction WHERE {\n      SERVICE <https://sparql.rhea-db.org/sparql> {\n        ?reaction rdfs:subClassOf rh:Reaction ;\n          rh:equation ?reactionEquation ;\n          rh:side ?reactionSide .\n        ?reactionSide rh:contains ?participant .\n        ?participant rh:compound ?compound .\n        # compound constraint (CHEBI:16113 == cholesterol)\n        ?compound rh:chebi CHEBI:16113 .\n      }\n    }\n  }\n  # taxonomy constraint (taxon:9606 == Homo sapiens)\n  ?protein up:organism taxon:9606 ;\n    up:annotation ?a ;\n    rdfs:seeAlso / up:transcribedFrom ?ensemblGene .\n  ?a a up:Catalytic_Activity_Annotation ;\n    up:catalyticActivity ?ca .\n  ?ca up:catalyzedReaction ?reaction .\n  # federated query to Bgee (expression data)\n  BIND(IRI(REPLACE(STR(?ensemblGene), \"\\\\\\\\.[0-9]+$\", \"\")) AS ?ensemblGeneNoVersion)\n  SERVICE <https://www.bgee.org/sparql/> {\n    ?gene lscr:xrefEnsemblGene ?ensemblGeneNoVersion ;\n      genex:isExpressedIn ?anatomicEntity .\n    ?anatomicEntity rdfs:label ?anatomicEntityLabel .\n  }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND",
      "SERVICE",
      "DISTINCT",
      "FROM",
      "STR",
      "IRI",
      "CONTAINS",
      "REPLACE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 4 uniprot mnemonic id",
    "slug": "UniProt_4_uniprot_mnemonic_id",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select the UniProtKB entry with the <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein\nWHERE\n{\n    ?protein a up:Protein .\n    ?protein up:mnemonic 'A4_HUMAN'\n}",
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
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 50 tissues where genes sphingosines are expressed",
    "slug": "UniProt_50_tissues_where_genes_sphingosines_are_expressed",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  DISTINCT\n    ?chebi\n    ?reaction\n    ?protein ?ensemblGene\n    ?anatomicEntityLabel\n    ?anatomicEntity\nWHERE {\n  SERVICE <https://sparql.rhea-db.org/sparql> {\n    ?reaction rdfs:subClassOf rh:Reaction .\n    ?reaction rh:equation ?reactionEquation .\n    ?reaction rh:side ?reactionSide .\n    ?reactionSide rh:contains ?participant .\n    ?participant rh:compound ?compound .\n    ?compound rh:chebi ?chebi .\n    ?chebi rdfs:subClassOf* CHEBI:52639\n}\n  ?protein up:organism taxon:9606 .\n  ?protein up:annotation ?a .\n  ?a a up:Catalytic_Activity_Annotation .\n  ?a up:catalyticActivity ?ca .\n  ?ca up:catalyzedReaction ?reaction .\n  ?protein rdfs:seeAlso / up:transcribedFrom ?ensemblGene .\n\n  SERVICE  <https://www.bgee.org/sparql/> {\n    ?gene genex:isExpressedIn ?anatomicEntity .\n    ?gene lscr:xrefEnsemblGene ?ensemblGene .\n    ?anatomicEntity rdfs:label ?anatomicEntityLabel .\n  }\n}",
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
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 51 all proteins linked to arachidonate",
    "slug": "UniProt_51_all_proteins_linked_to_arachidonate",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find all proteins linked to arachidonate (CHEBI:32395)",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\n\nSELECT \n    DISTINCT\n        ?uniprot\n        ?uniprotID\n        ?recname\n        ?gene\n        ?chebi\n        ?uniprotName\nWHERE {\n  SERVICE <https://sparql.rhea-db.org/sparql> {\n     VALUES (?chebi) { (CHEBI:32395) }\n     ?rhea rh:side/rh:contains/rh:compound ?compound .\n     ?compound rh:chebi ?chebi .\n     ?chebi up:name ?uniprotName .\n  }\n  ?uniprot up:annotation/up:catalyticActivity/up:catalyzedReaction ?rhea .\n  ?uniprot up:mnemonic ?uniprotID .\n  ?uniprot up:recommendedName/up:fullName ?recname .\n  OPTIONAL {?uniprot up:encodedBy/skos:prefLabel ?gene .}\n}",
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
      "VALUES",
      "SERVICE",
      "DISTINCT",
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 52 drugs targeting sterol metabolism",
    "slug": "UniProt_52_drugs_targeting_sterol_metabolism",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve drugs that target human enzymes involved in sterol metabolism (federated query with Rhea and ChEMBL via IDSM/Elixir czech republic).",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX cco: <http://rdf.ebi.ac.uk/terms/chembl#>\nPREFIX chebihash: <http://purl.obolibrary.org/obo/chebi#>\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n        DISTINCT\n            ?protein\n            ?proteinFullName\n            ?activityType\n            ?standardActivityValue\n            ?standardActivityUnit\n            ?chemblMolecule\n            ?chemlbMoleculePrefLabel\nWHERE\n  {\n  # ChEBI: retrieve members of the ChEBI class ChEBI:15889 (sterol)\n  # Rhea: retrieve the reactions involving these ChEBI as participants\n  SERVICE <https://sparql.rhea-db.org/sparql> {\n    ?reaction rdfs:subClassOf  rh:Reaction ;\n\t      rh:status        rh:Approved ;\n\t      rh:side          ?reactionSide .\n    ?reactionSide\n\t      rh:contains      ?participant .\n    ?participant rh:compound  ?compound\n    {\n      ?compound  rh:chebi  ?chebi .\n      ?chebi (rdfs:subClassOf)+ CHEBI:15889\n    } UNION {\n      ?compound  rh:chebi           ?chebi .\n      ?chebi2   rdfs:subClassOf     ?chebiRestriction .\n      ?chebiRestriction\n\t\ta           owl:Restriction ;\n\t\towl:onProperty      chebihash:has_major_microspecies_at_pH_7_3 ;\n\t\towl:someValuesFrom  ?chebi .\n      ?chebi2 (rdfs:subClassOf)+ CHEBI:15889\n    }\n  }\n  # UniProt: retrieve the human (taxid:9606) enzymes catalyzing these Rhea reactions\n  ?ca       up:catalyzedReaction  ?reaction .\n  ?a        up:catalyticActivity  ?ca .\n  ?protein  up:annotation         ?a ;\n\t    up:organism           taxon:9606 ;\n\t    up:recommendedName    ?proteinRecName .\n  ?proteinRecName\n\t    up:fullName           ?proteinFullName .\n  # Find drugs in wikidata that interact with the UniProt Proteins\n  # ChEMBL: retrieve the corresponding targets and with drugs in clinical phase 4\n  # Via https://idsm.elixir-czech.cz/sparql/\n  SERVICE <https://idsm.elixir-czech.cz/sparql/endpoint/idsm> {\n    ?activity a cco:Activity ;\n      cco:hasMolecule ?chemblMolecule ;\n      cco:hasAssay ?assay ;\n      cco:standardType ?activityType ;\n      cco:standardValue ?standardActivityValue ;\n      cco:standardUnits ?standardActivityUnit .\n    ?chemblMolecule cco:highestDevelopmentPhase ?highestDevelopmentPhase ;\n      rdfs:label ?chemblMoleculeLabel ;\n      skos:prefLabel ?chemlbMoleculePrefLabel .\n    FILTER (?highestDevelopmentPhase > 3)\n    ?assay cco:hasTarget ?target .\n    ?target cco:hasTargetComponent/cco:targetCmptXref ?protein .\n    ?protein a cco:UniprotRef .\n  }\n}",
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
      "VALUES",
      "SERVICE",
      "DISTINCT",
      "FROM",
      "WITH",
      "STR",
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 53 mouse homologs of sterol enzymes via omabrowser",
    "slug": "UniProt_53_mouse_homologs_of_sterol_enzymes_via_omabrowser",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find mouse homologs in OMABrowser of human enzymes that catalyze reactions involving sterols (CHEBI:15889). Federating with Rhea and OMABrowser.",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  DISTINCT\n    ?chebi\n    ?reaction\n    ?humanProtein\n    ?mouseProtein\n    ?cluster \nWHERE {\n  SERVICE <https://sparql.rhea-db.org/sparql> {\n    ?reaction rdfs:subClassOf rh:Reaction .\n    ?reaction rh:side/rh:contains/rh:compound ?compound .\n    ?compound rh:chebi ?chebi .\n    ?chebi rdfs:subClassOf* CHEBI:15889\n  }\n\n  ?humanProtein up:organism taxon:9606 .\n  ?humanProtein up:annotation ?a .\n  ?a a up:Catalytic_Activity_Annotation .\n  ?a up:catalyticActivity ?ca .\n  ?ca up:catalyzedReaction ?reaction .\n\n  SERVICE  <https://sparql.omabrowser.org/sparql> {\n    ?cluster a orth:ParalogsCluster .\n    ?cluster orth:hasHomologousMember ?node1 , ?node2 .\n    ?node1 orth:hasHomologousMember* ?orthoProtein1 .\n    ?node2 orth:hasHomologousMember* ?orthoProtein2 .\n    ?orthoProtein1 lscr:xrefUniprot ?mouseProtein .\n    ?orthoProtein2 lscr:xrefUniprot ?humanProtein .\n    # inTaxon mouse\n    ?orthoProtein1 orth:organism/<http://purl.obolibrary.org/obo/RO_0002162> taxon:10090 . \n  }\n}",
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
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 54 binding sites for ligands similar to heme sachem",
    "slug": "UniProt_54_binding_sites_for_ligands_similar_to_heme_sachem",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Proteins with binding sites for ligands similar to heme",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX sachem: <http://bioinfo.uochb.cas.cz/rdf/v1.0/sachem#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT \n  ?protein\n  ?mnemonic\n  ?proteinName\n  ?ligandSimilarityScore\n  ?ligand\nWHERE {\n  SERVICE <https://idsm.elixir-czech.cz/sparql/endpoint/chebi> {\n    ?ssc sachem:compound ?ligand; \n      sachem:score ?ligandSimilarityScore ;\n      sachem:similaritySearch ?sss .\n        # Smiles of Heme\n    ?sss    sachem:query \"CC1=C(CCC([O-])=O)C2=[N+]3C1=Cc1c(C)c(C=C)c4C=C5C(C)=C(C=C)C6=[N+]5[Fe-]3(n14)n1c(=C6)c(C)c(CCC([O-])=O)c1=C2\";\n      sachem:cutoff \"8e-1\"^^xsd:double ;\n      sachem:aromaticityMode sachem:aromaticityDetect ;\n      sachem:similarityRadius 1 ;\n      sachem:tautomerMode sachem:ignoreTautomers .\n  }\n  ?protein up:mnemonic ?mnemonic ;\n    up:recommendedName/up:fullName ?proteinName ;\n    up:annotation ?annotation .\n  ?annotation a up:Binding_Site_Annotation ;\n      up:ligand/rdfs:subClassOf ?ligand .\n}\nORDER BY DESC(?ligandSimilarityScore)",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND",
      "SERVICE",
      "ORDER BY"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 55 metal or sulphur cluster binding sites experimental",
    "slug": "UniProt_55_metal_or_sulphur_cluster_binding_sites_experimental",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Number of proteins with binding sites for metals or metal sulfur clusters (and experimental evidence for the binding)",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?ligand\n  ?ligandName \n  (COUNT(DISTINCT ?protein) as ?entries)\nWHERE {\n   ?protein up:annotation ?annotation .\n   \n   VALUES ?evs { obo:ECO_0000269 obo:ECO_0007744 } .\n   VALUES ?chebids { CHEBI:25213 CHEBI:25214 } .\n   ?st rdf:subject ?protein ; \n       rdf:predicate up:annotation ; \n       rdf:object ?annotation ;\n       up:attribution/up:evidence ?evs .\n\n   ?annotation up:ligand/rdfs:subClassOf ?ligand .\n   ?ligand rdfs:subClassOf+ ?chebids ;\n     rdfs:label ?ligandName .\n}\nGROUP BY ?ligand ?ligandName\nORDER BY DESC(?entries)",
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
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 56 enzymes that have a known allosteric effect",
    "slug": "UniProt_56_enzymes_that_have_a_known_allosteric_effect",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select enzymes that have ligands known to have an allosteric effect",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?protein\n  ?ligandName \n  ?ligandNote\n  ?chebi\nWHERE {\n   ?protein up:annotation ?annotation .\n   ?annotation a up:Binding_Site_Annotation . \n   ?annotation up:ligand ?ligand .\n   ?ligand rdfs:comment ?ligandNote ;\n     rdfs:subClassOf ?chebi ;\n     rdfs:label ?ligandName .\n   FILTER(REGEX(?ligandNote, \"allosteric\", \"i\"))\n}",
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
      "ALL",
      "REGEX"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 57 map pdb identifiers plus chains to uniprot",
    "slug": "UniProt_57_map_pdb_identifiers_plus_chains_to_uniprot",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Map a selection of PDB identifiers plus chains to UniProtKB",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?pdbId ?chain ?pdbChain ?uniprot\nWHERE\n{\n  # A space separated list of pairs of PDB identifiers and the chain code.\n  VALUES(?pdbId ?pdbChain) { ('6VXC' 'A') ('1BG3' 'B') }\n\n  # Make an IRI out of the pdbId\n  BIND(iri(concat('http://rdf.wwpdb.org/pdb/', ?pdbId)) AS ?pdb)\n\n  # Map to UniProt entries\n  ?uniprot rdfs:seeAlso ?pdb .\n  ?pdb up:database <http://purl.uniprot.org/database/PDB> ;\n       up:chainSequenceMapping ?chainSm .\n  ?chainSm up:chain ?chainsPlusRange .\n\n  # Extract the list of chains from the text representation.\n  BIND(STRBEFORE(?chainsPlusRange, '=') AS ?chain)\n\n  # Filter those that match.\n  FILTER(CONTAINS(?chain, ?pdbChain))\n}",
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
      "VALUES",
      "FROM",
      "STR",
      "IRI",
      "IF",
      "CONCAT",
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 58 uniprot to HGNC and symbols",
    "slug": "UniProt_58_uniprot_to_HGNC_and_symbols",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Map a selection of UniProtKB accession numbers (ACs) to HGNC identifiers and symbols",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX uniprotkb: <http://purl.uniprot.org/uniprot/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?uniprot\n  ?hgnc\n  ?hgncSymbol\nWHERE\n{\n  # A space separated list of UniProt primary accessions.\n  VALUES (?acc) {('P05067') ('P00750')}\n  BIND(iri(concat(str(uniprotkb:), ?acc)) AS ?uniprot)\n  ?uniprot rdfs:seeAlso ?hgnc .\n  ?hgnc up:database <http://purl.uniprot.org/database/HGNC> ;\n       rdfs:comment ?hgncSymbol .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND",
      "VALUES",
      "STR",
      "IRI",
      "CONCAT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 59 all isoforms for a given proteome",
    "slug": "UniProt_59_all_isoforms_for_a_given_proteome",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Count all isoforms for a given proteome",
    "context": null,
    "inidces": [],
    "query": "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nPREFIX proteome:<http://purl.uniprot.org/proteomes/>\nSELECT\n  (COUNT(DISTINCT ?sequence) AS ?allIsoforms)\nWHERE\n{\n  ?protein up:reviewed true .\n  ?protein up:organism taxon:9606 .\n  ?protein up:sequence ?sequence .\n  ?protein up:proteome/^skos:narrower proteome:UP000005640 .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT",
      "ALL",
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 5 mapping to PDB",
    "slug": "UniProt_5_mapping_to_PDB",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select a mapping of UniProtKB to PDB entries using the UniProtKB cross-references to the <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein ?db\nWHERE\n{\n    ?protein a up:Protein .\n    ?protein rdfs:seeAlso ?db .\n    ?db up:database <http://purl.uniprot.org/database/PDB>\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 60 enzymes working on substrate with Cholestene backbone",
    "slug": "UniProt_60_enzymes_working_on_substrate_with_Cholestene_backbone",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find human proteins that catalyze reactions where substrates or product have a <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX sachem: <http://bioinfo.uochb.cas.cz/rdf/v1.0/sachem#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  DISTINCT\n    ?protein\n    ?disease\n    ?rhea\n    ?chebi\n    ?omim\nWHERE {\n    # Find complete ChEBIs with a Cholestane skeleton, via the Czech Elixir node IDSM Sachem chemical substructure search.\n    SERVICE <https://idsm.elixir-czech.cz/sparql/endpoint/chebi> {\n      ?chebi sachem:substructureSearch [\n        sachem:query\n\"[C@]12(CCC3CCCC[C@]3(C)[C@@]1([H])CC[C@]1(C)[C@@]([H])([C@@](C)([H])CCCC(C)C)CC[C@@]21[H])[H]\"\n].\n   }\n   # Use the fact that UniProt catalytic activities are annotated using Rhea \n   # Mapping the found ChEBIs to Rhea reactions\n   SERVICE <https://sparql.rhea-db.org/sparql>{\n     ?rhea rh:side/rh:contains/rh:compound/rdfs:subClassOf ?chebi .\n   }\n   # Match the found Rhea reactions with human UniProtKB proteins\n   ?protein up:annotation/up:catalyticActivity/up:catalyzedReaction ?rhea .\n   ?protein up:organism taxon:9606 .\n   # Find only those human entries that have an annotated related disease, and optionaly map these to OMIM\n   ?protein up:annotation/up:disease ?disease .\n   OPTIONAL {\n     ?disease rdfs:seeAlso ?omim .\n     ?omim up:database <http://purl.uniprot.org/database/MIM>\n   }\n}",
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
      "SERVICE",
      "DISTINCT",
      "WITH",
      "USING",
      "STR",
      "SUBSTR",
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 61 Gene Protein Reaction sets",
    "slug": "UniProt_61_Gene_Protein_Reaction_sets",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select the Gene Protein Reaction sets for Human (Ensembl Gene, Human UniProtKB, Catalyzed Rhea reactions)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  DISTINCT # Disinct because there might be more than one transcript for a gene leading to duplicates\n    ?ensemblGene\n    ?protein \n    ?rhea\nWHERE {\n  ?protein up:reviewed true ;\n           up:organism taxon:9606 .\n  ?protein up:annotation ?caa ;\n           rdfs:seeAlso ?ensemblTranscript .\n  ?ensemblTranscript up:database <http://purl.uniprot.org/database/Ensembl> .\n\t?caa up:catalyticActivity ?ca .\n  ?ca up:catalyzedReaction ?rhea .\n  ?ensemblTranscript up:transcribedFrom ?ensemblGene \n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT",
      "FROM"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 62 diseases involving enzymes",
    "slug": "UniProt_62_diseases_involving_enzymes",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find diseases that are thought to be related to enzymes",
    "context": null,
    "inidces": [],
    "query": "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n?disease ?diseaseLabel\nWHERE {\n ?protein up:enzyme|up:annotation/up:catalyticActivity/up:enzymeClass ?enzyme ;\n                   up:annotation ?diseaseAnnotation .\n ?diseaseAnnotation a up:Disease_Annotation ;\n                    up:disease ?disease .\n ?disease skos:prefLabel ?diseaseLabel .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 63 diseases involving enzymes located in mitochondrion",
    "slug": "UniProt_63_diseases_involving_enzymes_located_in_mitochondrion",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find (Human genetic) diseases that are thought to be related to Enzymes, known to be located in the Mitochondrion",
    "context": null,
    "inidces": [],
    "query": "PREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  DISTINCT\n    ?disease\nWHERE {\n  ?protein a up:Protein ;\n  up:organism taxon:9606 ;\n  up:annotation ?disease_annotation ,\n                ?subcellularLocation .\n  {\n    ?protein up:enzyme [] .\n  } UNION {\n    ?protein up:annotation/a up:Catalytic_Activity_Annotation .\n  }\n  ?disease_annotation a up:Disease_Annotation ;\n    up:disease ?disease .\n  ?subcellularLocation a up:Subcellular_Location_Annotation ;\n    up:locatedIn ?location .\n  ?location up:cellularComponent ?component .\n  ?component up:partOf* <http://purl.uniprot.org/locations/173> .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "UNION",
      "DISTINCT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 64 diseases related to mutation in active site",
    "slug": "UniProt_64_diseases_related_to_mutation_in_active_site",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find (Human Genetic) diseases, that are related to a natural variant on the active site of an enzyme.",
    "context": null,
    "inidces": [],
    "query": "PREFIX faldo: <http://biohackathon.org/resource/faldo#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  DISTINCT\n   ?disease\nWHERE {\n  ?protein a up:Protein ;\n    up:organism taxon:9606 ;\n    up:annotation ?disease_annotation, ?active_site_annotation, ?natural_variant_annotation .\n  {\n    ?protein up:enzyme [] .\n  } UNION {\n  ?protein up:annotation/a up:Catalytic_Activity_Annotation .\n  }\n  ?disease_annotation a up:Disease_Annotation ;\n  up:disease ?disease .\n  ?active_site_annotation a up:Active_Site_Annotation ;\n  up:range ?active_site_range .\n  ?active_site_range faldo:begin ?active_site_begin .\n  ?active_site_begin faldo:position ?active_site_position ;\n                     faldo:reference ?sequence .\n  ?natural_variant_annotation a up:Natural_Variant_Annotation ;\n  up:range ?natural_variant_range ;\n  skos:related ?disease .\n  ?natural_variant_range faldo:begin ?natural_variant_begin ;\n                         faldo:end ?natural_variant_end .\n  ?natural_variant_begin faldo:position ?natural_variant_begin_position .\n  ?natural_variant_end faldo:position ?natural_variant_end_position ;\n                       faldo:reference ?sequence .\n\n  FILTER(?natural_variant_begin_position >= ?active_site_position && ?active_site_position <= ?natural_variant_end_position)\n}",
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
      "DISTINCT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 65 distinct extinct organisms in uniprotkb",
    "slug": "UniProt_65_distinct_extinct_organisms_in_uniprotkb",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "How many distinct extinct organisms are represented in UniProtKB",
    "context": null,
    "inidces": [],
    "query": "PREFIX keywords: <http://purl.uniprot.org/keywords/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n  ?taxon\n  (SAMPLE(?name) AS ?anName)\n  (COUNT(DISTINCT ?protein) AS ?entriesPerExtinctTaxon)\nWHERE\n{\n  GRAPH<http://sparql.uniprot.org/taxonomy>{\n    ?taxon a up:Taxon ;\n           up:scientificName ?name .\n  }\n  ?protein up:organism ?taxon ;\n           up:classifiedWith keywords:952 .\n} GROUP BY ?taxon ORDER BY ?taxon",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GRAPH",
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
      "WITH",
      "IF",
      "COUNT",
      "SAMPLE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 66 distinct rhea transport in reviewed uniprot",
    "slug": "UniProt_66_distinct_rhea_transport_in_reviewed_uniprot",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Count number of unique Rhea transport reactions annotated in reviewed UniProtKB entries.",
    "context": null,
    "inidces": [],
    "query": "PREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n(COUNT(DISTINCT ?rhea) AS ?distinctRheaTransportInUniProt)\nWHERE\n{\n  GRAPH <https://sparql.rhea-db.org/rhea> {\n    ?rhea rh:isTransport true .\n  }\n  ?protein up:annotation ?ann .\n  ?ann up:catalyticActivity ?ca .\n  ?ca up:catalyzedReaction ?rhea .\n}",
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
      "DISTINCT",
      "STR",
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 67 draft human metabolome",
    "slug": "UniProt_67_draft_human_metabolome",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Generate a draft human metabolome",
    "context": null,
    "inidces": [],
    "query": "PREFIX chebislash: <http://purl.obolibrary.org/obo/chebi/>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n?uniprot ?mnemonic ?rhea ?chebi ?smiles ?inchiKey\nWHERE\n{\n  ?uniprot up:annotation/up:catalyticActivity/up:catalyzedReaction ?rhea ;\n        up:organism taxon:9606 ;\n        up:mnemonic ?mnemonic .\n  SERVICE <https://sparql.rhea-db.org/sparql> {\n\t?rhea rh:side/rh:contains/rh:compound ?compound .\n    ?compound (rh:chebi|(rh:reactivePart/rh:chebi)|rh:underlyingChebi) ?chebi .\n   }\n   ?chebi chebislash:smiles ?smiles ;\n          chebislash:inchikey ?inchiKey .\n}",
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
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 68 drosophila enzymes derived from at least two mRNAs",
    "slug": "UniProt_68_drosophila_enzymes_derived_from_at_least_two_mRNAs",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find Drosophila enzymes, that depend on more than one transcript (requires cross-references to Ensembl family of resources).",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?protein\nWHERE {\n  ?protein up:organism taxon:7227 ;\n    a up:Protein ;\n    up:reviewed true ;\n    rdfs:seeAlso ?transcript .\n  {\n    ?protein up:annotation/a up:Catalytic_Activity_Annotation ;\n  } UNION {\n    ?protein up:enzyme ?enzyme .\n  }\n  ?transcript  a up:Transcript_Resource .\n} GROUP BY ?protein HAVING(COUNT(?transcript) >= 2)",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "UNION",
      "GROUP BY",
      "HAVING",
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 69 drosophila proteins derived from at least two mRNAs",
    "slug": "UniProt_69_drosophila_proteins_derived_from_at_least_two_mRNAs",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find Drosophila proteins, that depend on more than one transcript (requires cross-references to Ensembl family of resources).",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?protein\nWHERE {\n  ?protein up:organism taxon:7227 ;\n    a up:Protein ;\n    up:reviewed true ;\n    rdfs:seeAlso ?transcript .\n  ?transcript  a up:Transcript_Resource .\n} GROUP BY ?protein HAVING(COUNT(?transcript) >= 2)",
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
      "HAVING",
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 6 cross ref in category 3D",
    "slug": "UniProt_6_cross_ref_in_category_3D",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select all cross-references to external databases of the category <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX keywords: <http://purl.uniprot.org/keywords/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?link\nWHERE\n{\n    ?protein a up:Protein .\n    ?protein up:classifiedWith keywords:5 .\n    ?protein rdfs:seeAlso ?link .\n    ?link up:database ?db .\n    ?db up:category '3D structure databases'\n}",
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
      "WITH",
      "STR",
      "IF"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 70 enzymes interacting with molecules similar to dopamine",
    "slug": "UniProt_70_enzymes_interacting_with_molecules_similar_to_dopamine",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Look for enzymes catalyzing reactions with molecules similar to dopamine.",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX sachem: <http://bioinfo.uochb.cas.cz/rdf/v1.0/sachem#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?protein\n  ?rhea\n  ?chebi\nWHERE {\n  # Use the smiles of dopamine CHEBI:18243\n  SERVICE <https://idsm.elixir-czech.cz/sparql/endpoint/chebi>{\n    ?chebi sachem:similarCompoundSearch [\n      sachem:query \"NCCc1ccc(O)c(O)c1\" ] .\n  }\n  GRAPH<https://sparql.rhea-db.org/rhea>{\n    ?rhea rh:side/rh:contains/rh:compound ?compound .\n    ?compound (rh:chebi|(rh:reactivePart/rh:chebi)|rh:underlyingChebi) ?chebi .\n  }\n  ?protein up:reviewed true ;\n    up:annotation ?caa .\n  ?caa up:catalyticActivity/up:catalyzedReaction ?rhea .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GRAPH",
      "SERVICE",
      "CONTAINS",
      "MIN"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 71 enzymes interacting with molecules similar to dopamine with variants related to disease",
    "slug": "UniProt_71_enzymes_interacting_with_molecules_similar_to_dopamine_with_variants_related_to_disease",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Look for enzymes catalyzing reactions with molecules similar to dopamine, with natural variants related to a disease.",
    "context": null,
    "inidces": [],
    "query": "PREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX sachem: <http://bioinfo.uochb.cas.cz/rdf/v1.0/sachem#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?protein\n  ?rhea\n  ?chebi\n  ?disease\nWHERE {\n  # Use the smiles of dopamine CHEBI:18243\n  SERVICE <https://idsm.elixir-czech.cz/sparql/endpoint/chebi>{\n    ?chebi sachem:similarCompoundSearch [\n      sachem:query \"NCCc1ccc(O)c(O)c1\" ] .\n  }\n  GRAPH<https://sparql.rhea-db.org/rhea>{\n    ?rhea rh:side/rh:contains/rh:compound ?compound .\n    ?compound (rh:chebi|(rh:reactivePart/rh:chebi)|rh:underlyingChebi) ?chebi .\n  }\n  ?protein up:reviewed true ;\n    up:annotation ?caa, ?natural_variant_annotation, ?disease_annotation .\n  ?caa up:catalyticActivity/up:catalyzedReaction ?rhea .\n  ?natural_variant_annotation a up:Natural_Variant_Annotation ;\n    skos:related ?disease .\n  ?disease_annotation a up:Disease_Annotation ;\n     up:disease ?disease .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GRAPH",
      "SERVICE",
      "CONTAINS",
      "MIN"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 72 enzymes mapping to PDB",
    "slug": "UniProt_72_enzymes_mapping_to_PDB",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?protein\n  ?db\nWHERE\n{\n  ?protein a up:Protein .\n  ?protein rdfs:seeAlso ?db .\n  ?db up:database <http://purl.uniprot.org/database/PDB> .\n  {\n    ?protein up:enzyme ?enzyme .\n  } UNION {\n    ?protein up:annotation/rdf:type up:Catalytic_Activity_Annotation .\n  }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH",
      "RDF"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "UNION"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 73 enzymes related to protein",
    "slug": "UniProt_73_enzymes_related_to_protein",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": null,
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\nSELECT\n  DISTINCT ?enzyme\nWHERE {\n  ?protein a up:Protein .\n  {\n    ?protein up:enzyme ?enzyme .\n  } UNION {\n    ?protein up:annotation ?caa .\n    ?caa a up:Catalytic_Activity_Annotation .\n    ?caa up:catalyticActivity ?ca .\n    ?ca up:enzymeClass ?enzyme\n  } UNION {\n    ?protein up:component/up:enzyme ?enzyme .\n  } UNION {\n    ?protein up:domain/up:enzyme ?enzyme .\n  }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH",
      "RDF"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "UNION",
      "DISTINCT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 74 enzymes with at least two transmembrane domains",
    "slug": "UniProt_74_enzymes_with_at_least_two_transmembrane_domains",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find Hydrolases (enzymes that catalyse the hydrolysis of various bonds) that have at least two transmembrane domains",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?protein\nWHERE {\n ?protein up:enzyme|up:annotation/up:catalyticActivity/up:enzymeClass ?enzymeClass ;\n                   up:annotation ?transMembraneAnnotation .\n ?enzymeClass rdfs:subClassOf <http://purl.uniprot.org/enzyme/3.-.-.-> .\n ?transMembraneAnnotation a up:Transmembrane_Annotation .\n} GROUP BY ?protein HAVING (COUNT(DISTINCT ?transMembraneAnnotation) >= 2)",
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
      "HAVING",
      "DISTINCT",
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 75 enzymes with at least two transmembrane domains PDB xray",
    "slug": "UniProt_75_enzymes_with_at_least_two_transmembrane_domains_PDB_xray",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find enzymes that have at least two transmembrane domains, whose 3D structure is elucidated through X-Ray analysis",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?protein\nWHERE {\n  ?protein a up:Protein ;\n    up:annotation ?transmembrane_annotation ;\n    rdfs:seeAlso ?wwPDB .\n  {\n    ?protein up:enzyme ?enzyme .\n  } UNION {\n    ?protein up:annotation/a up:Catalytic_Activity_Annotation .\n  }\n  ?wwPDB up:database <http://purl.uniprot.org/database/PDB> ;\n    up:method up:X-Ray_Crystallography .\n  ?transmembrane_annotation a up:Transmembrane_Annotation .\n} GROUP BY ?protein HAVING(COUNT(DISTINCT ?transmembrane_annotation ) >= 2)",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "UNION",
      "GRAPH",
      "GROUP BY",
      "HAVING",
      "DISTINCT",
      "ALL",
      "COUNT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 76 enzymes with mutagenesis affecting active site",
    "slug": "UniProt_76_enzymes_with_mutagenesis_affecting_active_site",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find enzymes, where the active site is a region affected by mutagenesis and show the comment regarding mutagenesis effect.",
    "context": null,
    "inidces": [],
    "query": "PREFIX faldo: <http://biohackathon.org/resource/faldo#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?protein ?mutagenesisBeginPosition ?activeSiteBeginPosition ?mutagenesisRangeEndPosition ?mutagenesisComment\nWHERE {\n  ?protein up:annotation ?activeSiteAnnotation ,\n      ?mutagenesisAnnotation .\n  ?mutagenesisAnnotation a up:Mutagenesis_Annotation ;\n     up:range ?mutagenesisRange ;\n\t rdfs:comment ?mutagenesisComment .\n  ?activeSiteAnnotation a up:Active_Site_Annotation ;\n    up:range ?activeSiteRange .\n  ?activeSiteRange faldo:begin ?activeSiteBegin .\n  ?activeSiteBegin faldo:position ?activeSiteBeginPosition ;\n    faldo:reference ?sequence .\n  ?mutagenesisRange faldo:begin ?mutagenesisRangeBegin ;\n    faldo:end ?mutagenesisRangeEnd .\n  ?mutagenesisRangeBegin faldo:position ?mutagenesisBeginPosition ;\n    faldo:reference ?sequence .\n  ?mutagenesisRangeEnd faldo:position ?mutagenesisRangeEndPosition .\n  FILTER(?mutagenesisBeginPosition <= ?activeSiteBeginPosition && ?activeSiteBeginPosition <= ?mutagenesisRangeEndPosition)\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 77 enzymes with tyrosine as active site",
    "slug": "UniProt_77_enzymes_with_tyrosine_as_active_site",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find enzymes with a Tyrosine (Y) as an active site",
    "context": null,
    "inidces": [],
    "query": "PREFIX faldo: <http://biohackathon.org/resource/faldo#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?protein\nWHERE {\n  ?protein up:annotation ?activeSiteAnnotation .\n  ?activeSiteAnnotation a up:Active_Site_Annotation ;\n    up:range ?range .\n  ?range faldo:begin ?begin .\n  ?begin faldo:position ?beginPosition ;\n    faldo:reference ?sequence .\n  ?sequence rdf:value ?sequenceVal .\n  FILTER(SUBSTR(?sequenceVal, ?beginPosition, 1) = 'Y')\n}",
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
      "STR",
      "SUBSTR"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 78 genetic disease related proteins",
    "slug": "UniProt_78_genetic_disease_related_proteins",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List all UniProtKB proteins annotated to be related to a genetic disease.",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?uniprot ?disease ?diseaseComment ?mim\nWHERE\n{\n  GRAPH <http://sparql.uniprot.org/uniprot> {\n    ?uniprot a up:Protein ;\n       up:annotation ?diseaseAnnotation .\n    ?diseaseAnnotation up:disease ?disease .\n  }\n  GRAPH <http://sparql.uniprot.org/diseases> {\n    ?disease a up:Disease ;\n             rdfs:comment ?diseaseComment .\n    OPTIONAL {\n      ?disease rdfs:seeAlso ?mim .\n       ?mim up:database <http://purl.uniprot.org/database/MIM> .\n    }\n  }\n}",
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
      "GRAPH"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 79 mnemonic also known as id",
    "slug": "UniProt_79_mnemonic_also_known_as_id",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List all UniProtKB protein ID (mnemonic) for current UniProtKB entries.",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?uniprot ?mnemonic \nWHERE\n{\n  GRAPH <http://sparql.uniprot.org/uniprot> {\n        ?uniprot a up:Protein ;\n            up:mnemonic ?mnemonic .\n    }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GRAPH"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 7 swissprot with rec protein name if pref gene name contains word DNA",
    "slug": "UniProt_7_swissprot_with_rec_protein_name_if_pref_gene_name_contains_word_DNA",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select reviewed UniProtKB entries (Swiss-Prot), and their recommended protein name, that have a preferred gene name that contains the text 'DNA'",
    "context": null,
    "inidces": [],
    "query": "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein ?name\nWHERE\n{\n        ?protein a up:Protein .\n        ?protein up:reviewed true .\n        ?protein up:recommendedName ?recommended .\n        ?recommended up:fullName ?name .\n        ?protein up:encodedBy ?gene .\n        ?gene skos:prefLabel ?text .\n        FILTER CONTAINS(?text, 'DNA')\n}",
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
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 80 obsolete mnemonic also known as id",
    "slug": "UniProt_80_obsolete_mnemonic_also_known_as_id",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List all UniProtKB protein ID (mnemonic) that where used in the past for current UniProtKB entries.",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?uniprot ?obsoleteMnemonic \nWHERE\n{\n  GRAPH <http://sparql.uniprot.org/uniprot> {\n        ?uniprot a up:Protein ;\n            up:oldMnemonic ?obsoleteMnemonic .\n    }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GRAPH"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 81 rhea reactions annotated as experimental and only small molecules",
    "slug": "UniProt_81_rhea_reactions_annotated_as_experimental_and_only_small_molecules",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find all Rhea (only small molecule) that are used in UniProtKB where the annotation has a paper and is tagged having experimental evidence.",
    "context": null,
    "inidces": [],
    "query": "PREFIX ECO: <http://purl.obolibrary.org/obo/ECO_>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?rhea \n  ?catalyzedReaction \n  ?source\nWHERE {\n  {  \n    SELECT \n      DISTINCT \n        ?rhea\n      WHERE {\n        GRAPh<https://sparql.rhea-db.org/rhea> {\n          ?rhea rdfs:subClassOf rh:Reaction .\n          ?rhea rh:side/rh:contains/rh:compound ?compound2 . \n          ?uc rdfs:subClassOf rh:Compound .\n        }\n        ?compound2 rdfs:subClassOf ?uc . \n    \tBIND(IF(?uc = rh:SmallMolecule, 0, 1) AS ?c)  \n     } GROUP BY ?rhea  HAVING (SUM(?c) = 0)\n  }\n  ?catalyzedReaction up:catalyzedReaction ?rhea .\n  ?reif rdf:object ?catalyzedReaction ;\n        up:attribution ?attr .\n  ?attr up:evidence ECO:0000269 ;\n        up:source ?source .\n  ?source a up:Citation .\n}",
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
      "BIND",
      "GROUP BY",
      "HAVING",
      "DISTINCT",
      "ALL",
      "IF",
      "CONTAINS",
      "SUM"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 82 rhea reactions associated with ec in uniprotkb",
    "slug": "UniProt_82_rhea_reactions_associated_with_ec_in_uniprotkb",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n  ?rhea \n  ?EC \nWHERE {\n  ?CatalyticActivity  up:catalyzedReaction   ?rhea ;\n    up:enzymeClass         ?EC .\n}",
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
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 83 rhea reactions not associated with ec in uniprotkb",
    "slug": "UniProt_83_rhea_reactions_not_associated_with_ec_in_uniprotkb",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n  ?rhea \n  ?EC \nWHERE {\n  ?CatalyticActivity up:catalyzedReaction ?rhea .\n  MINUS {\n    ?CatalyticActivity up:enzymeClass ?EC .\n  }\n}",
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
      "MINUS",
      "MIN"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 84 taxonomy hierarchy",
    "slug": "UniProt_84_taxonomy_hierarchy",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find all taxonomic records that describe species of the genus <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n  ?species \n  ?genus \nWHERE {\n  BIND(taxon:9605 AS ?genus)\n  ?species a up:Taxon ;\n           up:rank up:Species ;\n           rdfs:subClassOf ?genus .\n  ?genus a up:Taxon ;\n         up:rank up:Genus .\n}",
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
      "BIND"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 85 taxonomy host",
    "slug": "UniProt_85_taxonomy_host",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find taxon records that are known to have part of their life cycle in other organisms (e.g. parasite, symbiont, infection)",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n  ?virus \n  ?host \nWHERE {\n    ?virus up:host ?host .\n}",
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
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 86 taxonomy rank and scientific name",
    "slug": "UniProt_86_taxonomy_rank_and_scientific_name",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Retrieve the rank and the scientific name of an taxonomic record. Not all taxonomic records have a <a href=\\",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?taxon \n  ?scientificName\n  ?rank\nWHERE {\n  ?taxon a up:Taxon ;\n         up:scientificName ?scientificName .\n  OPTIONAL {\n    ?taxon up:rank ?rank\n  }\n}",
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
      "IF"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 87 taxonomy with at least one swissprot",
    "slug": "UniProt_87_taxonomy_with_at_least_one_swissprot",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find taxon records for which one reviewed UniProtKB/Swiss-Prot entry exists. We might expect species, strains, subspecies and isolates in the taxon list.",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\n\nSELECT\n    DISTINCT\n         ?taxid\n         ?scientificName\n         ?domain\n         ?domainName\nWHERE {\n  ?uniprot a up:Protein .\n  # reviewed entries\n  ?uniprot up:reviewed true .\n  ?uniprot up:organism ?taxid . \n  ?taxid up:scientificName ?scientificName .\n    \n  VALUES ?domain { taxon:2 # bacteria\n                   taxon:2157 # archaea\n                   taxon:2759 # eukaryota\n                   taxon:10239 #viruses\n                 } .\n  ?taxid rdfs:subClassOf ?domain .\n}",
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
      "IF"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 88 uniparc linked to active uniprot",
    "slug": "UniProt_88_uniparc_linked_to_active_uniprot",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Show for a given UniParc accessions which active UniProtKB entries have the same amino acid sequence",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n  ?uniparc\n  ?uniprot\nWHERE {\n  GRAPH <http://sparql.uniprot.org/uniparc>{\n    BIND(<http://purl.uniprot.org/uniparc/UPI000002DB1C> AS ?uniparc) \n    ?uniparc up:sequenceFor ?uniprot .\n  }\n  GRAPH <http://sparql.uniprot.org/uniprot> {\n    ?uniprot a up:Protein .\n  }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GRAPH",
      "BIND"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 89 uniparc triples directly associated",
    "slug": "UniProt_89_uniparc_triples_directly_associated",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Predicates and objects, for a given UniParc accession as a subject",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n  ?predicate \n  ?object \nWHERE { \n  <http://purl.uniprot.org/uniparc/UPI000012A0AD> ?predicate ?object\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 8 prefered gene name of human disease related proteins",
    "slug": "UniProt_8_prefered_gene_name_of_human_disease_related_proteins",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select the preferred gene name and disease annotation of all human UniProtKB entries that are known to be involved in a disease",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?name ?text\nWHERE\n{\n        ?protein a up:Protein . \n        ?protein up:organism taxon:9606 .\n        ?protein up:encodedBy ?gene . \n        ?gene skos:prefLabel ?name .\n        ?protein up:annotation ?annotation .\n        ?annotation a up:Disease_Annotation .\n        ?annotation rdfs:comment ?text\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 90 uniprot affected by metabolic diseases using MeSH",
    "slug": "UniProt_90_uniprot_affected_by_metabolic_diseases_using_MeSH",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find UniProtKB proteins involved in metabolic diseases using the MeSH concept for 'Metabolic Diseases'.",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n ?disease ?protein\nWHERE {\n  SERVICE<https://id.nlm.nih.gov/mesh/sparql> {\n    GRAPH <http://id.nlm.nih.gov/mesh> {\n      # Mesh M0013493 represents the concept 'Metabolic Diseases'\n\t  ?mesh <http://id.nlm.nih.gov/mesh/vocab#broaderDescriptor>* ?broader .\n      ?broader <http://id.nlm.nih.gov/mesh/vocab#preferredConcept> <http://id.nlm.nih.gov/mesh/M0013493> .\n    }\n  }\n  GRAPH <http://sparql.uniprot.org/diseases>{\n    ?disease a up:Disease ;\n    \trdfs:seeAlso ?mesh .\n    ?mesh up:database <http://purl.uniprot.org/database/MeSH> .\n  }\n  GRAPH <http://sparql.uniprot.org/uniprot> {\n     ?protein up:annotation/up:disease ?disease . \n  }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "GRAPH",
      "SERVICE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 91 uniprot alternative protein full name",
    "slug": "UniProt_91_uniprot_alternative_protein_full_name",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Alternative protein full names for UniProtKB entries",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein \n  ?fullName\nWHERE {\n  ?protein a up:Protein ;\n           up:alternativeName ?recommendedName .\n  ?recommendedName up:fullName ?fullName .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 92 uniprot bioregistry iri translation",
    "slug": "UniProt_92_uniprot_bioregistry_iri_translation",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Translate the global unique identifier for a UniProtKB record into other options using the bioregistry translating endpoint.",
    "context": null,
    "inidces": [],
    "query": "PREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX uniprotkb: <http://purl.uniprot.org/uniprot/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n    ?protein \n    ?otherIdentifier\nWHERE {\n    BIND(uniprotkb:P00750 AS ?protein)\n    ?protein a up:Protein .\n    SERVICE <https://bioregistry.io/sparql> {\n        ?protein owl:sameAs ?otherIdentifier .\n    }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "BIND",
      "SERVICE",
      "STR",
      "IF"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 93 uniprot created modified updated",
    "slug": "UniProt_93_uniprot_created_modified_updated",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List the created, last modified, and last sequence update dates for UniProtKB proteins.",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?protein \n  ?created\n  ?modified\n  ?version\nWHERE {\n  ?protein a up:Protein ;\n           up:created ?created ;\n           up:modified ?modified ;\n           up:version ?version .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "CREATE",
      "IF"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 94 uniprot encoding gene",
    "slug": "UniProt_94_uniprot_encoding_gene",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List UniProtKB proteins with their associated named gene",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein\n  ?gene \nWHERE {\n  ?protein a up:Protein ;\n           up:encodedBy ?gene .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 95 uniprot encoding gene alternative names",
    "slug": "UniProt_95_uniprot_encoding_gene_alternative_names",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List UniProtKB proteins with their associated gene and the gene's names that are used in the field, but not recommended for use by UniProtKB",
    "context": null,
    "inidces": [],
    "query": "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein\n  ?gene ?altGeneName\nWHERE {\n  ?protein a up:Protein ;\n           up:encodedBy ?gene .\n  ?gene skos:altLabel ?altGeneName .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 96 uniprot encoding gene name",
    "slug": "UniProt_96_uniprot_encoding_gene_name",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List UniProtKB proteins with their associated gene and the gene's preffered name",
    "context": null,
    "inidces": [],
    "query": "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein\n  ?gene \nWHERE {\n  ?protein a up:Protein ;\n           up:encodedBy ?gene .\n  ?gene skos:prefLabel ?recommendedGeneName .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 97 uniprot encoding gene org name",
    "slug": "UniProt_97_uniprot_encoding_gene_org_name",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List UniProtKB proteins with their associated gene and the gene's ORF label",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT\n  ?gene \n  ?orfName\nWHERE {\n  ?protein a up:Protein ;\n           up:encodedBy ?gene .\n  ?gene up:orfName ?orfName .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 98 uniprot entries with more than two geneid crossrefences",
    "slug": "UniProt_98_uniprot_entries_with_more_than_two_geneid_crossrefences",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Find GeneID's crosslinked to more than one human or mouse UniProtKB entry",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX taxon:<http://purl.uniprot.org/taxon/>\nSELECT \n  ?geneid \n  ?organism \n  (GROUP_CONCAT(?protein; separator=', ') AS ?entries)\nWHERE\n{\n  VALUES ?organism {taxon:9606 taxon:10090}\n  ?geneid up:database <http://purl.uniprot.org/database/GeneID> .\n  ?protein rdfs:seeAlso ?geneid ; \n           up:organism ?organism\n} GROUP BY ?geneid ?organism HAVING (COUNT(?protein) > 1) ORDER BY ?organism ?geneid",
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
      "GROUP BY",
      "ORDER BY",
      "HAVING",
      "CONCAT",
      "COUNT",
      "GROUP_CONCAT"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 99 uniprot identifiers org translation",
    "slug": "UniProt_99_uniprot_identifiers_org_translation",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Translate a selection of UniProtKB accession numbers into other options using the identifiers.org translating endpoint.",
    "context": null,
    "inidces": [],
    "query": "PREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX uniprotkb: <http://purl.uniprot.org/uniprot/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT \n    ?protein \n    ?otherIdentifier\nWHERE {\n    VALUES (?protein) {(uniprotkb:P00750) (uniprotkb:P05067)}\n    ?protein a up:Protein .\n    SERVICE <https://sparql.api.identifiers.org/sparql> {\n        ?protein owl:sameAs ?otherIdentifier .\n    }\n}",
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
      "SERVICE",
      "IF"
    ],
    "category": "sib-swiss UniProt"
  },
  {
    "name": "UniProt - 9 human variant loss of function",
    "slug": "UniProt_9_human_variant_loss_of_function",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select all human UniProtKB entries with a sequence variant that leads to a 'loss of function'",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?protein ?text\nWHERE\n{ \n        ?protein a up:Protein .\n        ?protein up:organism taxon:9606 . \n        ?protein up:annotation ?annotation .\n        ?annotation a up:Natural_Variant_Annotation . \n        ?annotation rdfs:comment ?text .\n        FILTER (CONTAINS(?text, 'loss of function'))\n}",
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
      "CONTAINS"
    ],
    "category": "sib-swiss UniProt"
  }
];