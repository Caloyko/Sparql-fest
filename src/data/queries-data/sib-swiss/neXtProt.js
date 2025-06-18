export const neXtProt = [
  {
    "name": "neXtProt - NXQ 00001",
    "slug": "neXtProt_NXQ_00001",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins phosphorylated and located in the cytoplasm",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?cytoloc {nextprot_cv:SL-0086 nextprot_cv:GO_0005737} # SL and GO values for cytoplasm\n ?entry :isoform ?iso.\n ?iso :uniprotKeyword / :term nextprot_cv:KW-0597. # Phosphorylated\n ?iso :cellularComponent ?loc .\n ?loc :term /:childOf ?cytoloc.\n filter not exists {?loc :negativeEvidence ?negev} # No negative localization evidence\n}\n\n# Assign values to the variable ?cytoloc\n# The values correspond to the two controlled vocabulary (cv) terms for cytoplam:\n# SL-0086 is the UniProt subcellular location term\n# GO_0005737 is the Gene Ontology cellular component term\n#\n# Use the same name of the variable (?iso and ?loc) in several statements.\n# It is the name of the variable that enforces the constraints.\n#\n# Phosphorylated proteins are retrieved using a keyword:\n# KW-0597 is the UniProt keyword for phosphorylated\n#\n# Use :childOf to include children of a term.\n# Cytosol (SL-0091), the child term of cytoplasm, will thus be included.\n#\n# Exclude negative locatization evidences.\n# This enforces that the protein is located in the cytoplasm.",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00002",
    "slug": "neXtProt_NXQ_00002",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that are located in both the nucleus and in the cytoplasm",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?cytoloc {nextprot_cv:GO_0005737 nextprot_cv:SL-0086} # GO and SL values for cytoplasm\n values ?nucloc {nextprot_cv:GO_0005634 nextprot_cv:SL-0191} # GO and SL values for nucleus\n ?entry :isoform ?iso.\n ?iso :cellularComponent ?loc1, ?loc2 .\n ?loc1 :term /:childOf ?cytoloc .\n ?loc2 :term /:childOf ?nucloc .\n filter not exists {?loc1 :negativeEvidence ?negev} # No negative localization evidence\n filter not exists {?loc2 :negativeEvidence ?negev} # No negative localization evidence\n}\n\n# Note the dot \".\" at the end of statements.\n# If missing, you will get a syntax error.\n#\n# Use a comma to retrieve two localizations in:\n# ?iso :cellularComponent ?loc1, ?loc2 .",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00003",
    "slug": "neXtProt_NXQ_00003",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with 7 transmembrane regions",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :topology ?statement.\n ?statement a :TransmembraneRegion.\n} group by ?entry ?iso having(count( ?statement)=7)\n\n# 'a' can also be used instead of 'rdf:type'\n# 'a' is a synonym of 'rdf:type'\n#\n# Apply the grouping criterion (group by) for the results.\n# This groups entries with isoforms having 7 transmembrane regions.\n# Apply the aggregate function (count) to the variable ?statement.\n# This counts the number of transmembrane region statements for each isoform.",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00004",
    "slug": "neXtProt_NXQ_00004",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins expressed in brain with observed IHC expression \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n # get all expression\n ?iso :expression ?e1.\n # highly expressed in brain\n ?e1 :term/:childOf nextprot_cv:TS-0095;:evidence/:observedExpression :High.\n # not expressed in testis\n ?iso :undetectedExpression ?e2.\n ?e2 :term nextprot_cv:TS-1030.\n# Use the semicolon ';' to refer to the previous subject (?e1)\n# Only IHC data has observed expression \"High\" so ECO is not specified.\n#\n# Note that we also exclude expression detected in testis.\n filter not exists { ?iso :detectedExpression / :term / :childOf nextprot_cv:TS-1030 }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "TS",
      "IHC",
      "ECO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00005",
    "slug": "neXtProt_NXQ_00005",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins located in mitochondrion and that lack a transit peptide",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?mitoloc {nextprot_cv:SL-0173 nextprot_cv:GO_0005739 } # SL and GO values for mitochondrion\n ?entry :isoform ?iso.\n filter not exists { ?iso :uniprotKeyword /:term nextprot_cv:KW-0809 } # Transit peptide\n ?iso :cellularComponent ?loc .\n ?loc :term /:childOf ?mitoloc.\n filter not exists {?loc :negativeEvidence ?negev} # No negative localization evidence\n}\n\n# Variables start with ? and can be given any name.\n# Variables such as ?entry and ?mitoloc (location in the mitochondrion) are easily understood by humans.",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00006",
    "slug": "neXtProt_NXQ_00006",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins whose genes are on chromosome 13 and are associated with a disease",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :gene / :chromosome \"13\"^^xsd:string.\n ?entry :isoform ?iso.\n {\n\t ?iso :medical / rdf:type :Disease.\n } union {\n ?iso :uniprotKeyword / :term ?kw .\n\t ?kw :termType \"Disease\"^^xsd:string\n\t filter (?kw != nextprot_cv:KW-0656)\n }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00007",
    "slug": "neXtProt_NXQ_00007",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins associated with diseases that are associated with cardiovascular aspects",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform /:medical / :term /:related / :childOf nextprot_cv:D002318.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00008",
    "slug": "neXtProt_NXQ_00008",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins whose genes are less than 50000 bp away from the location of the gene coding for protein p53",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot: <http://nextprot.org/rdf/entry/>\n\nSELECT DISTINCT ?entry WHERE {\n nextprot:NX_P04637 :gene /:begin ?s;:gene/:chromosome ?chr.\n ?entry :gene/:begin ?gs;:gene/:chromosome ?chr.\n filter ( ?gs > (?s -50000) && ?gs <= (?s +50000) && ?entry != nextprot:NX_P04637 )\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00009",
    "slug": "neXtProt_NXQ_00009",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with 3 disulfide bonds and that are not annotated as hormones ",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?isoform.\n ?isoform :ptm ?statement.\n ?statement a :DisulfideBond.\n filter not exists { ?entry :isoform / :function / :term /:childOf nextprot_cv:GO_0005179. } # GO Hormone activity\n} group by ?entry ?isoform having (count(?statement) =3 )",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "GO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00010",
    "slug": "neXtProt_NXQ_00010",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that are glycosylated and are not located in the membrane",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :uniprotKeyword / :term nextprot_cv:KW-0325.\n filter not exists { ?iso :uniprotKeyword / :term nextprot_cv:KW-0812.} # KW for Transmembrane\n filter not exists { ?iso :topology / :term nextprot_cv:CVTO_0004 } # intramembrane segment\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00011",
    "slug": "neXtProt_NXQ_00011",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that are expressed in liver and involved in transport",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :detectedExpression/:term/:childOf nextprot_cv:TS-0564.\n nextprot_cv:KW-0813 :related ?tra.\n ?iso :generalAnnotation / :term ?tra.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "TS",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00012",
    "slug": "neXtProt_NXQ_00012",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that interact with protein RBM17 and that are involved in splicing",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot: <http://nextprot.org/rdf/entry/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n nextprot:NX_Q96I25 :isoform / :interaction / :interactant ?entry.\n ?entry :isoform / :uniprotKeyword / :term nextprot_cv:KW-0508\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00013",
    "slug": "neXtProt_NXQ_00013",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that have a protein kinase domain but lack protein kinase activity",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :region /:term nextprot_cv:DO-00529.\n filter not exists { ?iso :enzymeClassification / :term /:childOf nextprot_cv:2_7_-_- }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "DO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00014",
    "slug": "neXtProt_NXQ_00014",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with one SH2 and two SH3 domains",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n #with 1 SH3\n {select ?iso where{?iso :region ?stat1. ?stat1 :term nextprot_cv:DO-00614\n } group by ?iso having(count( ?stat1)=1)}\n #with 2 SH2\n {select ?iso where{?iso :region ?stat2. ?stat2 :term nextprot_cv:DO-00615\n } group by ?iso having(count( ?stat2)=2)}\n} group by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "DO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00015",
    "slug": "neXtProt_NXQ_00015",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a PDZ domain that interact with at least one protein which is expressed in brain",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :region / :term nextprot_cv:DO-00477. #PDZ domain\n ?iso :binaryInteraction/:interactant/:isoform?/:detectedExpression/:term/:childOf nextprot_cv:TS-0095 #brain\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "DO",
      "PDZ",
      "TS"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00016",
    "slug": "neXtProt_NXQ_00016",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a mature chain of less than 1000 amino acids which are secreted and do not contain cysteines in the mature chain",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?sloc {nextprot_cv:GO_0005576 nextprot_cv:SL-0243} # GO and SL values for secreted\n ?entry :isoform ?iso.\n ?iso :cellularComponent ?anno .\n ?anno :term /:childOf ?sloc .\n filter not exists { ?anno :negativeEvidence ?_ }\n #\n # filter not exists {?iso :cellularComponent /:term nextprot_cv:GO_0070062 .\n # filter not exists {?iso :cellularComponent /:term /:childOf nextprot_cv:SL-0243 .}\n # }\n # you can uncomment this to filters out extracellular exosome only location (2240 entries),\n # most of them evidenced only by large-scale proteomic analysis\n #\n ?iso :sequence / :chain ?seq.\n ?iso :matureProtein [ :start ?mstart ; :end ?mend]\n filter ((?mend-?mstart > 0) && (?mend-?mstart < 1000))\n bind (?mend - ?mstart + 1 as ?mlen)\n bind (substr(?seq, ?mstart, ?mlen) as ?mseq)\n filter (!regex (?mseq,'C'))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00017",
    "slug": "neXtProt_NXQ_00017",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins larger than 1000 amino acids that are located in the nucleus and expressed in the nervous system",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?nucloc {nextprot_cv:GO_0005634 nextprot_cv:SL-0191} # GO and SL values for nucleus\n\n ?entry :isoform ?iso.\n ?iso :cellularComponent ?loc .\n ?loc :term/:childOf ?nucloc.\n filter not exists {?loc :negativeEvidence ?negev} # No negative localization evidence\n ?iso :detectedExpression/:term/:childOf nextprot_cv:TS-1313.\n ?iso :sequence/:length ?len.\n filter (?len>1000)\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO",
      "TS"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00018",
    "slug": "neXtProt_NXQ_00018",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that are acetylated and methylated and located in the nucleus",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?nucloc {nextprot_cv:GO_0005634 nextprot_cv:SL-0191} # GO and SL values for nucleus\n\n ?entry :isoform ?iso.\n ?iso :cellularComponent ?loc .\n ?loc :term/:childOf ?nucloc.\n filter not exists {?loc :negativeEvidence ?negev} # No negative localization evidence\n ?iso :uniprotKeyword/:term nextprot_cv:KW-0007,nextprot_cv:KW-0488. # acetylated and methylated\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00019",
    "slug": "neXtProt_NXQ_00019",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with more than 12 WD repeats (ie: with at least two beta-propellers)",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n {select ?iso where{\n ?iso :repeat ?rep. ?rep :term nextprot_cv:DO-00722\n }\n group by ?iso having(count( ?rep) > 12)}\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "DO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00020",
    "slug": "neXtProt_NXQ_00020",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least 2 HPA antibodies whose genes are located on chromosome 21 and that are highly expressed according to IHC in heart",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nselect ?entry WHERE {\n SELECT DISTINCT ?entry ?id WHERE {\n ?entry :gene / :chromosome \"21\"^^xsd:string .\n ?entry :isoform / :expressionProfile ?s1.\n ?s1 :term / :childOf nextprot_cv:TS-0445.\n ?s1 :evidence ?evi.\n ?evi :observedExpression :High.\n ?evi :evidenceCode nextprot_cv:ECO_0001055.\n ?entry :isoform / :antibodyMapping ?map.\n\t ?map :evidence / :reference / :accession ?id .\n }\n} group by ?entry having (count(?id)>=2)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "WHERE",
      "SELECT",
      "DISTINCT",
      "TS"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00021",
    "slug": "neXtProt_NXQ_00021",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least one HPA antibody that are located in the peroxisome",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?peroxiloc {nextprot_cv:GO_0005777 nextprot_cv:SL-0204} # GO and SL values for peroxisome\n\n ?entry :isoform ?iso.\n ?iso :antibodyMapping ?map.\n ?iso :cellularComponent ?loc .\n ?loc :term /:childOf ?peroxiloc. # peroxisomal\n filter not exists { ?loc :negativeEvidence ?negev. } # No negative localization evidence\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00022",
    "slug": "neXtProt_NXQ_00022",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with no function annotated",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n filter not exists { ?iso :functionInfo ?_. }\n filter not exists { ?iso :catalyticActivity ?_ .}\n filter not exists { ?iso :transportActivity ?_ .}\n filter not exists { ?iso :pathway ?_. }\n filter not exists {\n ?iso :function / :term ?fterm .\n\t\t\t filter(?fterm != nextprot_cv:GO_0005524 && ?fterm != nextprot_cv:GO_0000287 && ?fterm != nextprot_cv:GO_0005515 && ?fterm != nextprot_cv:GO_0042802\n\t\t\t && ?fterm != nextprot_cv:GO_0008270 && ?fterm != nextprot_cv:GO_0051260 && ?fterm != nextprot_cv:GO_0005509\n\t\t\t\t\t && ?fterm != nextprot_cv:GO_0003676 && ?fterm != nextprot_cv:GO_0003824 && ?fterm != nextprot_cv:GO_0007165 && ?fterm != nextprot_cv:GO_0035556\n\t\t\t\t\t && ?fterm != nextprot_cv:GO_0046914 && ?fterm != nextprot_cv:GO_0046872)\n }\n filter not exists { ?entry :existence :Uncertain } # Remove PE5 proteins\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00023",
    "slug": "neXtProt_NXQ_00023",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that are involved in transport and located in a membrane and that are not glycosylated (experimentally or predicted)",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso .\n {\n ?iso :goBiologicalProcess ?gofunc .\n\t?gofunc :term / :childOf nextprot_cv:GO_0006810. # GO value for transport\n\tfilter not exists {?gofunc :negativeEvidence ?negev} # No negative function evidence\n } union {\n ?iso :uniprotKeyword / :term nextprot_cv:KW-0813. # KW for transport\n }\n {\n ?iso :uniprotKeyword / :term nextprot_cv:KW-0812. # transmembrane\n } union {\n ?iso :topology / :term nextprot_cv:CVTO_0004. # intramembrane\n }\n filter not exists { ?iso :uniprotKeyword / :term nextprot_cv:KW-0325 } # not a glycoprotein\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "GO",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00024",
    "slug": "neXtProt_NXQ_00024",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with more than 10 reported interactions (of 'gold' quality)",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform/:binaryInteraction ?interaction.\n ?interaction :interactant ?interactant; :quality :GOLD.\n ?interactant a :Entry.\n} group by ?entry having (count(distinct ?interactant) > 10)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "GOLD"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00025",
    "slug": "neXtProt_NXQ_00025",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least 50 interactors that are not associated with a disease",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :binaryInteraction/:interactant ?interactant.\n\n # with no disease\n filter not exists {\n {\n ?iso :medical / rdf:type :Disease.\n } union {\n ?iso :uniprotKeyword / :term ?kw .\n ?kw :termType \"Disease\"^^xsd:string\n filter (?kw != nextprot_cv:KW-0656)\n }\n }\n\n} group by ?entry ?iso having (count(?interactant) >= 50)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00026",
    "slug": "neXtProt_NXQ_00026",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins interacting with at least one protein which is located in the mitochondrion",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?mitoloc {nextprot_cv:SL-0173 nextprot_cv:GO_0005739} # SL and GO values for mitochondrion\n\n ?entry :isoform / :interaction ?it .\n ?it :quality :GOLD . # remove this filter for lower quality interactions\n ?it :interactant ?interactant.\n ?interactant :isoform? / :cellularComponent ?loc .\n # the question mark at :isoform allows to select also isoform-specific interactions\n ?loc :term / :childOf ?mitoloc.\n filter not exists { ?loc :negativeEvidence ?negev. } # No negative localization evidence\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO",
      "GOLD"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00027",
    "slug": "neXtProt_NXQ_00027",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with one or more glycosylation sites reported in PubMed:20570859 or PubMed:14760718",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry ?publications WHERE {\n values ?pmid {\"20570859\"^^xsd:string \"14760718\"^^xsd:string}\n # get all assertions from the publications\n ?entry :isoform/:glycosylationSite ?statement.\n ?statement :evidence/:reference/:from ?xref .\n ?xref :accession ?pmid ; :provenance db:PubMed .\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00028",
    "slug": "neXtProt_NXQ_00028",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins associated with a disease but without a disease-causing amino-acid substitution variant",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n {\n\t ?iso :medical / rdf:type :Disease.\n } union {\n ?iso :uniprotKeyword / :term ?kw .\n\t ?kw :termType \"Disease\"^^xsd:string\n\t filter (?kw != nextprot_cv:KW-0656)\n }\n filter ( not exists { ?entry :isoform / :variant / :disease ?_ . } )\n filter ( not exists {\n\t?entry :isoform / :proteoform ?pf.\n\t?pf :difference / :evidence / :negative false. # positive evidence only\n\t?pf :diseaseRelatedVariant / :term nextprot_cv:ME_0000013 . # cause of disease\n } )\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00029",
    "slug": "neXtProt_NXQ_00029",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins anchored to the membrane via a GPI-anchor",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :lipidationSite / rdfs:comment ?mod.\n filter(contains(?mod,\"GPI-anchor\")).\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "GPI"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00030",
    "slug": "neXtProt_NXQ_00030",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins whose gene is located in chromosome 2 that belongs to families with at least 5 members in the human proteome",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nselect ?entry WHERE {\n ?entry :familyName / :term/^:term/^:familyName ?member.\n ?entry :gene / :chromosome \"2\"^^xsd:string .\n} group by ?entry having ( count(distinct ?member) >= 5 )",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00031",
    "slug": "neXtProt_NXQ_00031",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with more than 10 alternative isoforms",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n} group by ?entry having (count(?iso)>10)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00032",
    "slug": "neXtProt_NXQ_00032",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a coiled coil region and that are involved in transcription but do not contain a bZIP domain",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :function ?func .\n ?func :term / :childOf nextprot_cv:GO_0006351. # Transcription\n filter not exists {?func :negativeEvidence ?negev. } # no negative evidence\n ?iso :region/rdf:type :CoiledCoilRegion.\n filter not exists { ?iso :region/:term nextprot_cv:DO-00078 } # Bzip domain\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "DO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00033",
    "slug": "neXtProt_NXQ_00033",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least one phosphotyrosine but no phosphoserine or phosphothreonine",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n select ?entry ?iso (count(?ptm) as ?ptmCnt) WHERE {\n ?entry :isoform ?iso.\n ?iso :modifiedResidue ?ptm.\n ?ptm :term nextprot_cv:PTM-0255 #phosphotyrosine.\n filter (\n not exists { ?iso :modifiedResidue / :term nextprot_cv:PTM-0253. } #phosphoserine\n &&\n not exists { ?iso :modifiedResidue / :term nextprot_cv:PTM-0254. } #phosphothreonine\n )\n } group by ?entry ?iso having ( count(?ptm) >= 1 )\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "PTM"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00034",
    "slug": "neXtProt_NXQ_00034",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least one homeobox domain and with at least one variant in the homeobox domain(s)",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n # with >=1 homeobox domain\n ?iso :region ?st1.\n ?st1 :term nextprot_cv:DO-00312;:start ?start;:end ?end.\n # with >=1 variant\n ?iso :variant ?var.\n ?var :start ?varpos.\n # one variant in the homeobox domain\n filter (?varpos >=?start && ?varpos <=?end)\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "DO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00035",
    "slug": "neXtProt_NXQ_00035",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins located in the mitochondrion and which are enzymes",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?mitoloc {nextprot_cv:SL-0173 nextprot_cv:GO_0005739} # SL and GO values for mitochondrion\n ?entry :isoform / :enzymeClassification ?_ .\n ?entry :isoform ?iso.\n ?iso :cellularComponent ?loc .\n ?loc :term / :childOf ?mitoloc.\n filter not exists { ?loc :negativeEvidence ?negev. } # No negative localization evidence\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00036",
    "slug": "neXtProt_NXQ_00036",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that are oxidoreductases and that bind to NAD/NADP",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :uniprotKeyword /:term nextprot_cv:KW-0560. #oxidoreductase\n ?iso :uniprotKeyword /:term ?kw\n filter( ?kw in (nextprot_cv:KW-0520,nextprot_cv:KW-0521)) # NAD or NADP\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW",
      "NAD",
      "NADP"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00037",
    "slug": "neXtProt_NXQ_00037",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that bind RNA but do not contain a RRM domain",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso .\n ?iso :uniprotKeyword /:term nextprot_cv:KW-0694. #RNA-binding\n filter not exists {?iso :region/:term nextprot_cv:DO-00581} #RRM\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW",
      "RNA",
      "DO",
      "RRM"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00038",
    "slug": "neXtProt_NXQ_00038",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least one selenocysteine in their sequence",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform/:selenocysteine ?statement.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00039",
    "slug": "neXtProt_NXQ_00039",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a mutagenesis in a position that correspond to an annotated active site",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :mutagenesis /:start ?mutaPos.\n ?iso :activeSite /:start ?actsitePos.\n filter (?mutaPos=?actsitePos)\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00040",
    "slug": "neXtProt_NXQ_00040",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that are enzymes and with at least one mutagenesis site that decrease or abolish activity",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?nextprot:isoform ?iso.\n ?iso :enzymeClassification ?_ .\n ?iso :mutagenesis/rdfs:comment ?comment\n filter regex(?comment, '(decrease|abolish).*activity','i')\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00041",
    "slug": "neXtProt_NXQ_00041",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that are annotated with GO \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :goMolecularFunction ?statement.\n ?statement :negativeEvidence ?ev.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00042",
    "slug": "neXtProt_NXQ_00042",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that bind a metal and are secreted",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?sloc {nextprot_cv:GO_0005576 nextprot_cv:SL-0243} # GO and SL values for secreted\n ?entry :isoform ?iso.\n ?iso :cellularComponent ?loc .\n ?loc :term /:childOf ?sloc .\n filter not exists {?sloc :negativeEvidence ?negev} # No negative localization evidence\n #filter not exists {?iso :cellularComponent /:term nextprot_cv:GO_0070062 .\n\t\t\t\t\t #filter not exists {?iso :cellularComponent /:term /:childOf nextprot_cv:SL-0243 .}\n\t\t\t\t\t#} # filters out extracellular exosome only location (2758 entries)\n ?iso :goMolecularFunction / :term /:childOf nextprot_cv:GO_0046872 . # metal-binding\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00043",
    "slug": "neXtProt_NXQ_00043",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that bind zinc and are not oxidoreductase and not involved in transcription",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso .\n ?iso :uniprotKeyword / :term nextprot_cv:KW-0479. # metal-binding\n ?iso :uniprotKeyword / :term nextprot_cv:KW-0862. # zinc\n filter not exists {?iso :uniprotKeyword / :term nextprot_cv:KW-0804} # transcription\n filter not exists {?iso :uniprotKeyword / :term nextprot_cv:KW-0560} # oxidoreductase\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00044",
    "slug": "neXtProt_NXQ_00044",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins involved in the Reactome pathway \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform / :pathway ?p.\n ?p :evidence /:reference ?xref.\n ?xref :provenance db:Reactome; :accession \"R-HSA-611105\"^^xsd:string.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "HSA"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00045",
    "slug": "neXtProt_NXQ_00045",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with an active site that is a proton acceptor",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry ?comment WHERE {\n ?entry :isoform/ :activeSite /rdfs:comment ?comment.\n filter (contains (?comment,'Proton acceptor'))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00046",
    "slug": "neXtProt_NXQ_00046",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a gene alternative name starting with IL27",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry ?recname ?altname WHERE {\n ?entry :gene ?gn.\n ?gn :recommendedName / rdfs:label ?recname.\n ?gn :alternativeName / rdfs:label ?altname.\n filter (regex(?altname, \"^IL27\"))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00047",
    "slug": "neXtProt_NXQ_00047",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a gene name that starts with \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :gene / :name / rdfs:label ?name.\n filter (regex(?name, \"^CLDN\"@en))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "CLDN"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00048",
    "slug": "neXtProt_NXQ_00048",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least one variant of the type \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n {\n\t?entry :isoform ?iso.\n\t?iso :variant ?var.\n\t?var :disease ?_.\n\t?var :original \"C\"^^xsd:string.\n } UNION {\n ?entry :isoform ?iso .\n\t?iso :proteoform ?pf.\n\t?pf :difference ?var.\n\t?var :evidence / :negative false. # positive evidence\n\t?pf :diseaseRelatedVariant / :term nextprot_cv:ME_0000013 . # cause of disease\n\t?var :original \"C\"^^xsd:string.\n\n }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "UNION"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00049",
    "slug": "neXtProt_NXQ_00049",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least one variant of the types \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform/:variant ?statement.\n {?statement :original \"A\"^^xsd:string;:variation \"R\"^^xsd:string}\n UNION\n {?statement :original \"R\"^^xsd:string;:variation \"A\"^^xsd:string}\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "UNION"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00051",
    "slug": "neXtProt_NXQ_00051",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that have at least one 3D structure solved by NMR",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :pdbMapping ?map.\n ?map :method ?meth\n filter (contains(?meth,'NMR'))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "NMR"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00052",
    "slug": "neXtProt_NXQ_00052",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a sequence that does not contain a lysine in the mature region",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso .\n ?iso :sequence / :chain ?seq.\n ?iso :matureProtein [ :start ?mstart ; :end ?mend]\n bind(?mend - ?mstart + 1 as ?mlen)\n bind(substr(?seq, ?mstart, ?mlen) as ?mseq)\n filter (!regex (?mseq,'K'))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00053",
    "slug": "neXtProt_NXQ_00053",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which are involved in cell adhesion according to GO with an evidence which is not used in automatic assertion nor a sequence similarity evidence used in manual assertion",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform/:function ?statement.\n ?statement :term / :childOf nextprot_cv:GO_0007155.\n filter not exists { ?statement :negativeEvidence ?negev. } # No negative function evidence\n ?statement :evidence/:evidenceCode ?ecode.\n filter not exists { ?ecode :childOf nextprot_cv:ECO_0000501. } # Automatic assertion\n filter not exists { ?ecode :childOf nextprot_cv:ECO_0000250. } # Sequence similarity evidence used in manual assertion\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00054",
    "slug": "neXtProt_NXQ_00054",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which are \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :function ?statement.\n ?statement :term / :childOf nextprot_cv:GO_0005102.\n filter not exists { ?statement :negativeEvidence ?negev. } # No negative function evidence\n ?iso :uniprotKeyword/:term nextprot_cv:KW-0391.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00055",
    "slug": "neXtProt_NXQ_00055",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which have genes of length greater than 2 million bp",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :gene / :length ?l.\n filter (?l > 2000000)\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00057",
    "slug": "neXtProt_NXQ_00057",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that are located in the mitochondrion with an experimental evidence originating not from HPA or DKFZ-GFP",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX source: <http://nextprot.org/rdf/source/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?mitoloc {nextprot_cv:SL-0173 nextprot_cv:GO_0005739} # SL and GO values for mitochondrion\n\n ?entry :isoform ?iso.\n ?iso :cellularComponent ?loc.\n ?loc :term /:childOf ?mitoloc.\n filter not exists { ?loc :negativeEvidence ?negev. } # No negative localization evidence\n ?loc :evidence /:assignedBy ?src.\n filter ( ?src not in (source:Human_protein_atlas, source:GFP-cDNAEMBL))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO",
      "GFP"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00058",
    "slug": "neXtProt_NXQ_00058",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which are located on the genome next to a protein which is involved in spermatogenesis",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT (?neighbour as ?entry) (str(?gen) as ?spergen) WHERE {\n {\n SELECT DISTINCT ?chr ?gen ?sperstart (MAX(?ldist) as ?lmin) (MIN(?rdist) as ?rmin) WHERE {\n ?entryx :isoform / :function ?func .\n\t ?func :term / :childOf nextprot_cv:GO_0007283 . # Involvment in spermatogenesis\n\t filter not exists {?func :negativeEvidence ?negev}\n ?entryx :gene ?gene.\n ?gene :begin ?sperstart; :end ?e; :chromosome ?chr; :recommendedName / rdfs:label ?gen.\n ?ngen :chromosome ?chr.\n ?ngen :begin ?n_begin; :end ?n_end .\n filter ( ?n_end > (?sperstart - 1000000) && ?n_begin <= (?sperstart + 1000000) && ?ngen != ?gene)\n bind(?sperstart - ?n_begin as ?dist)\n bind(if(?dist<0,?dist,-1000000) as ?ldist)\n bind(if(?dist>0,?dist,1000000) as ?rdist)\n } group by ?chr ?gen ?sperstart\n }\n bind(?sperstart - ?lmin as ?lchrpos)\n ?lgene :begin ?lchrpos; :chromosome ?chr.\n bind(?sperstart - ?rmin as ?rchrpos)\n ?rgene :begin ?rchrpos; :chromosome ?chr.\n { ?neighbour :gene ?lgene. } # left gene\n\t union\n { ?neighbour :gene ?rgene. } # right gene\n} order by ?gen",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "MAX",
      "MIN"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00059",
    "slug": "neXtProt_NXQ_00059",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that are glycosylated and phosphorylated on an extracellular topological domain",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :topologicalDomain ?topodom.\n ?topodom :term nextprot_cv:CVTO_0002.\n ?topodom :start ?topostart ; :end ?topoend.\n ?iso :positionalAnnotation ?annot,?annot2.\n ?annot a :ModifiedResidue.\n ?annot :term ?ptmtype.\n filter (?ptmtype in (nextprot_cv:PTM-0253, nextprot_cv:PTM-0254, nextprot_cv:PTM-0255))\n ?annot2 a :GlycosylationSite.\n ?annot :start ?ptmpos.\n ?annot2 :start ?glypos.\n filter ((?ptmpos >= ?topostart) && (?ptmpos <= ?topoend))\n filter ((?glypos >= ?topostart) && (?glypos <= ?topoend))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "PTM"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00060",
    "slug": "neXtProt_NXQ_00060",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which have one or more negatively charged residue in a transmembrane domain",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :transmembraneRegion ?tm.\n ?tm :start ?tmstart ; :end ?tmend.\n ?iso :sequence /:chain ?chain.\n bind (substr(?chain, ?tmstart, ?tmend - ?tmstart + 1) as ?tmseq)\n filter (regex(?tmseq, '([DE]+.*[^DE]){1,}')) # Change the 1 for the number of acidic residues required (5 seems to be the max)\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "DE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00061",
    "slug": "neXtProt_NXQ_00061",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which have at least one 3D structure that spans the complete sequence of the mature protein",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :pdbMapping ?pdbmap.\n ?pdbmap :start ?pdbstart ; :end ?pdbend.\n ?iso :matureProtein [ :start ?mstart ; :end ?mend]\n filter (?mend-?mstart > 0)\n filter ((?pdbstart <= ?mstart) && (?pdbend >= ?mend))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00062",
    "slug": "neXtProt_NXQ_00062",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which have at least one zinc finger of any subtype",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :zincFingerRegion ?_.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00063",
    "slug": "neXtProt_NXQ_00063",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that have at least one RRM RNA-binding domain and either no GO \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n {\n ?entry :isoform ?iso.\n # >=1 RRM RNA-binding domain\n ?iso :region/:term nextprot_cv:DO-00581.\n # No GO \"RNA binding\"\n filter not exists {\n ?iso :function/:term /:childOf nextprot_cv:GO_0003723\n }\n }\n union{\n ?entry :isoform ?iso.\n # >=1 RRM RNA-binding domain\n ?iso :region/:term nextprot_cv:DO-00581.\n # GO \"RNA binding\" with evidence IEA or ISS\n ?iso :function ?s1.\n ?s1 :term /:childOf nextprot_cv:GO_0003723.\n filter not exists { ?s1 :negativeEvidence ?negev. } # No negative function evidence\n ?s1 :evidence /:evidenceCode /:childOf ?pcode.\n values ?pcode { nextprot_cv:ECO_0000501 nextprot_cv:ECO_0000250 }\n }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "RRM",
      "RNA",
      "DO",
      "GO",
      "IEA",
      "ISS"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00064",
    "slug": "neXtProt_NXQ_00064",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which are enzymes and that have an incomplete EC number",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform/ :enzymeClassification ?ec.\n ?ec :term / rdfs:label ?eclabel.\n filter regex(?eclabel, '-'^^xsd:string)\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00065",
    "slug": "neXtProt_NXQ_00065",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that have more than one catalytic activity",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform / :enzymeClassification / :term ?ec .\n}\ngroup by ?entry having (count(distinct ?ec)>1)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00066",
    "slug": "neXtProt_NXQ_00066",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that are cytoplasmic with alternate O-glycosylation or phosphorylation at the same positions",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?cytoloc {nextprot_cv:SL-0086 nextprot_cv:GO_0005737} # SL and GO values for cytoplasm\n\n ?entry :isoform ?iso.\n ?iso :cellularComponent ?loc .\n ?loc :term /:childOf ?cytoloc .\n filter not exists {?loc :negativeEvidence ?negev} # No negative localization evidence\n ?iso :modifiedResidue /:term ?ptmtype.\n ?iso :modifiedResidue /:start ?ptmpos.\n filter (?ptmtype in (nextprot_cv:PTM-0253, nextprot_cv:PTM-0254, nextprot_cv:PTM-0255))\n ?iso :glycosylationSite /:start ?ptmpos.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO",
      "PTM"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00067",
    "slug": "neXtProt_NXQ_00067",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with alternative acetylation or Ubl conjugation (SUMO or Ubiquitin) at the same positions",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :crossLink /:start ?ptmpos.\n ?iso :modifiedResidue ?ptm.\n ?ptm :start ?ptmpos.\n ?ptm rdfs:comment ?comment.\n # We use this filter to select acetylations\n filter regex(?comment, \"acetyl\",\"i\")\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00068",
    "slug": "neXtProt_NXQ_00068",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a protein existence \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :existence :Evidence_at_transcript_level\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00069",
    "slug": "neXtProt_NXQ_00069",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which are the substrate of protein kinase SYK",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n {\n ?iso :modifiedResidue ?ptm.\n ?ptm :term ?ptmtype.\n ?ptm rdfs:comment ?comment.\n filter (?ptmtype in (nextprot_cv:PTM-0253, nextprot_cv:PTM-0254, nextprot_cv:PTM-0255))\n filter regex(?comment, \"SYK\",\"i\")\n # filter regex(?comment, \"auto\",\"i\")\n }\n union\n {\n ?iso :ptmInfo / rdfs:comment ?ptmtext .\n filter regex(?ptmtext, \"SYK\",\"i\")\n #filter regex(?ptmtext, \"autophos\",\"i\")\n }\n }",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "PTM",
      "SYK"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00070",
    "slug": "neXtProt_NXQ_00070",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins secreted but without a signal sequence",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?sloc {nextprot_cv:GO_0005576 nextprot_cv:SL-0243} # GO and SL values for secreted\n ?entry :isoform ?iso.\n ?iso :cellularComponent ?loc .\n ?loc :term/:childOf ?sloc .\n filter not exists {?sloc :negativeEvidence ?negev} # No negative localization evidence\n filter not exists {?iso :cellularComponent /:term nextprot_cv:GO_0070062 .\n\t\t\t\t\t filter not exists {?iso :cellularComponent /:term /:childOf nextprot_cv:SL-0243 .}\n\t\t\t\t\t} # filters out extracellular exosome only location (2758 entries)\n filter not exists {?iso :signalPeptide ?_}\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00072",
    "slug": "neXtProt_NXQ_00072",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a cross-reference to CCDS",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :reference / :provenance db:CCDS.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "CCDS"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00073",
    "slug": "neXtProt_NXQ_00073",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with no known (annotated) domain",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry a :Entry.\n filter not exists { ?entry :isoform / :region/rdf:type :Domain}\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00074",
    "slug": "neXtProt_NXQ_00074",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins belonging to a family with at least two members in the human proteome",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :familyName / :term ?ac.\n ?member :familyName / :term ?ac.\n} group by ?entry having (count(distinct ?member) >= 2 )",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00075",
    "slug": "neXtProt_NXQ_00075",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which have been detected in the HUPO liver proteome set but not the HUPO plasma proteome set",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX source: <http://nextprot.org/rdf/source/>\n\nSELECT DISTINCT ?entry WHERE {\nvalues ?pepsources {\n source:PeptideAtlas_human_Liver\n source:MassIVE_human_Liver\n }\n ?entry a :Entry.\n ?entry :isoform / :peptideMapping / :evidence / :assignedBy ?pepsources .\n filter not exists { ?entry :isoform / :peptideMapping / :evidence / :assignedBy source:PeptideAtlas_human_Blood_Plasma . }\n filter not exists { ?entry :isoform / :peptideMapping / :evidence / :assignedBy source:MassIVE_human_Blood_Plasma . }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00076",
    "slug": "neXtProt_NXQ_00076",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which are located in mitochondrion and have at least one HPA antibody and exist in at least one proteome identification sets",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?mitoloc {nextprot_cv:SL-0173 nextprot_cv:GO_0005739} # SL and GO values for mitochondrion\n\n ?entry :isoform ?iso.\n ?iso :cellularComponent ?loc .\n ?loc :term /:childOf ?mitoloc .\n filter not exists { ?loc :negativeEvidence ?negev. } # No negative localization evidence\n ?iso :antibodyMapping ?abmap.\n ?iso :peptideMapping ?pepmap.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00077",
    "slug": "neXtProt_NXQ_00077",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which are expressed in liver according to IHC data but not found in HUPO liver proteome set",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX source: <http://nextprot.org/rdf/source/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform /:expression ?s1.\n ?s1 :evidence ?evi;:term/:childOf nextprot_cv:TS-0564. #Liver\n ?evi :evidenceCode nextprot_cv:ECO_0001055; :observedExpression ?level .\n filter (?level not in (:Negative))\n filter not exists { ?entry :isoform / :peptideMapping / :evidence / :assignedBy source:PeptideAtlas_human_Liver . }\n filter not exists { ?entry :isoform / :peptideMapping / :evidence / :assignedBy source:MassIVE_human_Liver . }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "TS"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00078",
    "slug": "neXtProt_NXQ_00078",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which have been identified in at least one proteomics set and that are secreted",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?sloc {nextprot_cv:GO_0005576 nextprot_cv:SL-0243} # GO and SL values for secreted\n ?entry :isoform ?iso.\n ?iso :cellularComponent ?loc .\n ?loc :term/:childOf ?sloc .\n filter not exists {?sloc :negativeEvidence ?negev} # No negative localization evidence\n #filter not exists {?iso :cellularComponent /:term nextprot_cv:GO_0070062 .\n #\t\t\t\t\t filter not exists {?iso :cellularComponent /:term /:childOf nextprot_cv:SL-0243 .}\n #\t\t\t\t\t} # you can uncomment this to filters out extracellular exosome only location (2240 entries), most of them evidenced only by large-scale proteomic analysis\n ?iso :peptideMapping ?map.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00079",
    "slug": "neXtProt_NXQ_00079",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least one 3D structure and that are phosphorylated",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :uniprotKeyword / :term nextprot_cv:KW-0597. # Phosphoprotein\n ?iso :pdbMapping ?map.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00080",
    "slug": "neXtProt_NXQ_00080",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least one 3D structure of resolution less than 3 Angstroms",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :pdbMapping ?map.\n ?map :resolution ?res_and_unit.\n bind (xsd:float(substr(?res_and_unit,0,strlen(?res_and_unit)-2)) as ?res)\n filter (?res <= 3.0)\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00081",
    "slug": "neXtProt_NXQ_00081",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least one 3D structure and that are located in the mitochondrion and are linked with a disease",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n values ?mitoloc {nextprot_cv:SL-0173 nextprot_cv:GO_0005739} # SL and GO values for mitochondrion\n ?entry :isoform ?iso.\n ?iso :pdbMapping ?map.\n ?iso :cellularComponent ?loc .\n ?loc :term /:childOf ?mitoloc . # mitochondrial\n filter not exists { ?loc :negativeEvidence ?negev. } # No negative localization evidence\n {\n ?iso :medical / rdf:type :Disease.\n } union {\n ?iso :uniprotKeyword / :term ?kw .\n ?kw :termType \"Disease\"^^xsd:string\n filter (?kw != nextprot_cv:KW-0656)\n }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00082",
    "slug": "neXtProt_NXQ_00082",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins whose genes are on chromosome 21 that have \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :gene / :chromosome \"21\"^^xsd:string; :isoform / :variant ?variant.\n ?variant :evidence / :quality :GOLD.\n filter not exists { ?variant :disease ?disease. }\n filter ( not exists {\n\t?entry :isoform / :proteoform ?pf.\n\t?pf :difference ?variant.\n\t?variant :evidence / :negative false. # variant with positive evidence\n\t?pf :diseaseRelatedVariant / :term nextprot_cv:ME_0000013 . # variant is causing disease\n } )\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "GOLD"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00083",
    "slug": "neXtProt_NXQ_00083",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that are expressed only in liver",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSelect distinct ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :detectedExpression /:term ?tiss, ?tiss2.\n ?tiss2 :childOf nextprot_cv:TS-0564. # Liver\n} group by ?entry ?iso having(count(distinct ?tiss) = count(distinct ?tiss2))",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "WHERE",
      "TS"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00084",
    "slug": "neXtProt_NXQ_00084",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins whose genes are on chromosome 18 and that are experimentally (cv:ECO_0000269) known to be glycosylated or phosphorylated or acetylated",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry {\n ?entry :gene / :chromosome \"18\"^^xsd:string.\n ?entry :isoform ?iso.\n {\n ?iso :glycosylationSite ?ptm1.\n ?ptm1 :evidence /:evidenceCode / :childOf nextprot_cv:ECO_0000269\n }\n union {\n ?iso :modifiedResidue ?ptm2.\n ?ptm2 rdfs:comment ?com.\n ?ptm2 :evidence / :evidenceCode / :childOf nextprot_cv:ECO_0000269\n filter (regex(?com, '^phospho|acetyl','i'))\n }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00085",
    "slug": "neXtProt_NXQ_00085",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with Poly-Proline stretches",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso .\n ?iso :compositionallyBiasedRegion / rdfs:comment ?desc.\n filter (contains(?desc,'Pro residues')).\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00086",
    "slug": "neXtProt_NXQ_00086",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins whose genes are located in chromosome 2 region from 2p12 to 2p24.2",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :gene ?gene .\n ?gene :chromosome \"2\"^^xsd:string .\n ?gene :band ?band.\n filter (?band >= \"p12\"@en && ?band <= \"p24.2\"@en )\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00087",
    "slug": "neXtProt_NXQ_00087",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins whose genes are on chromosome X and which do not have a ortholog in mouse",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :gene / :chromosome \"X\"^^xsd:string .\n filter not exists { ?entry :reference / :provenance db:MGI . }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "MGI"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00089",
    "slug": "neXtProt_NXQ_00089",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Protein that have a signal sequence which is not cleaved",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform / :signalPeptide / rdfs:comment ?comment .\n filter(contains(?comment,\"Not cleaved\"))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00090",
    "slug": "neXtProt_NXQ_00090",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which are linked to a disease and that do not have orthologs/paralogs in mouse",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n {\n ?iso :medical / rdf:type :Disease.\n } union {\n ?iso :uniprotKeyword / :term ?kw .\n ?kw :termType \"Disease\"^^xsd:string\n filter (?kw != nextprot_cv:KW-0656)\n }\n FILTER NOT EXISTS { ?entry :reference / :provenance db:MGI . }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW",
      "FILTER",
      "NOT",
      "EXISTS",
      "MGI"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00091",
    "slug": "neXtProt_NXQ_00091",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00092",
    "slug": "neXtProt_NXQ_00092",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a sequence containing \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry rdf:type :Entry.\n ?entry :isoform / :sequence / :chain ?chain.\n filter ( regex(?chain, \"FF.QYE\") )\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "FF",
      "QYE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00093",
    "slug": "neXtProt_NXQ_00093",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a sequence containing \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform / :sequence / :chain ?chain.\n filter ( regex(?chain, \"FF.+QYE\") )\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "FF",
      "QYE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00095",
    "slug": "neXtProt_NXQ_00095",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00097",
    "slug": "neXtProt_NXQ_00097",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins located on chromosome 2 and having at least one variant in a phosphorylated tyrosine",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :gene / :chromosome \"2\"^^xsd:string .\n ?entry :isoform ?iso.\n ?iso :variant /:start ?varpos.\n ?iso :modifiedResidue ?modres.\n ?modres :term nextprot_cv:PTM-0255.\n ?modres :start ?varpos.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "PTM"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00099",
    "slug": "neXtProt_NXQ_00099",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Secreted proteins that have at least one PTM in a position of a variant",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?sloc {nextprot_cv:GO_0005576 nextprot_cv:SL-0243} # GO and SL values for secreted\n ?entry :isoform ?iso .\n ?iso :swissprotDisplayed true . # restricted to main isoform due to computing time (> 98% of sites)\n ?iso :cellularComponent ?anno .\n ?anno :quality :GOLD; :term /:childOf ?sloc. # secreted\n filter not exists { ?anno :negativeEvidence ?_ }\n # excludes \"extracellular exosome\"-only location, most of them evidenced only by large-scale proteomic analysis\n filter not exists {\n\t ?iso :cellularComponent /:term nextprot_cv:GO_0070062 . # extracellular exosome\n \t filter not exists { ?iso :cellularComponent /:term /:childOf nextprot_cv:SL-0243 .}\n \t}\n ?iso :variant /:start ?varpos.\n ?iso :ptm /:start ?varpos.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO",
      "GOLD"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00100",
    "slug": "neXtProt_NXQ_00100",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00103",
    "slug": "neXtProt_NXQ_00103",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that do not have a cross-reference to an Ensembl ENSG",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry a :Entry.\n filter not exists { ?entry :reference / :provenance db:Ensembl . }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00104",
    "slug": "neXtProt_NXQ_00104",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins whose gene is on chromosome 21 with at least one disease annotation from Orphanet",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX source: <http://nextprot.org/rdf/source/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry (str(?disname) as ?disease) WHERE {\n ?entry :isoform ?iso; :gene / :chromosome \"21\"^^xsd:string .\n ?iso :disease ?medannot .\n ?medannot rdfs:comment ?disname; :evidence / :assignedBy source:Orphanet.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00105",
    "slug": "neXtProt_NXQ_00105",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least one cross-reference to SMR (Swiss Model Repository) but no cross-references to PDB",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry a :Entry.\n ?entry :reference / :provenance db:SMR.\n filter not exists { ?entry :reference / :provenance db:PDB }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SMR",
      "PDB"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00106",
    "slug": "neXtProt_NXQ_00106",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins annotated as glycosylated but with no recorded glycosylation site",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :uniprotKeyword / :term nextprot_cv:KW-0325.\n filter not exists { ?entry :isoform /:glycosylationSite ?_. }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00107",
    "slug": "neXtProt_NXQ_00107",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a protein existence not \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :existence ?level.\n filter (?level != :Evidence_at_protein_level).\n ?entry :reference ?r.\n ?r :provenance db:HGNC ; :accession ?ac.\n filter (regex(?ac,'orf')) .\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "HGNC"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00108",
    "slug": "neXtProt_NXQ_00108",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that have a 3D structure in PDB that overlap by at least 50 amino acids with a SH3 domain",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?isoform.\n ?isoform :pdbMapping ?struc.\n ?struc :start ?s1 ; :end ?s2.\n ?isoform :region ?dom.\n ?dom :term nextprot_cv:DO-00615 ; :start ?d1 ; :end ?d2.\n bind ( if(?d2<?s2, ?d2, ?s2) - if(?d1>?s1, ?d1, ?s1) as ?overlap) .\n filter (?overlap>50)\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "DO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00109",
    "slug": "neXtProt_NXQ_00109",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that have a MS-identified proteotypic peptide that maps partly or fully into a signal sequence",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry ?overlap WHERE {\n ?entry :isoform ?iso.\n #get Signal position (start is always 1)\n ?iso :signalPeptide [:end ?s2] .\n ?iso :peptideMapping ?pm .\n ?pm :proteotypic true .\n #get peptide position\n ?pm :start ?p1 ; :end ?p2 .\n #match positions\n filter ( ?p1 < ?s2 )\n bind ( if(?p2<?s2, ?p2, ?s2) - ?p1 as ?overlap) .\n filter(?overlap > 2)\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00111",
    "slug": "neXtProt_NXQ_00111",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with one transmembrane domain and no annotated topology",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :swissprotDisplayed true .\n ?iso :topology ?tm.\n ?tm a :TransmembraneRegion.\n filter (not exists { ?iso :topology ?topodom.\n ?topodom a :TopologicalDomain.\n })\n} group by ?entry having (count( ?tm)=1)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00112",
    "slug": "neXtProt_NXQ_00112",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins located in nucleus and nowhere else",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nselect ?entry WHERE {\n {\n select ?entry (count(?loc) as ?anyLoc) (sum(?inNucleus) as ?nucleusLoc)\n WHERE {\n ?entry :isoform / :cellularComponent ?loc .\n ?loc :evidence / :negative false .\n ?loc :term ?locterm.\n bind( exists {\n ?locterm :childOf / rdfs:label ?label.\n filter (regex(?label, '^[Nn]ucleus$'))\n } as ?inNucleus)\n }\n group by ?entry\n }\n filter ( ?anyLoc = ?nucleusLoc)\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00113",
    "slug": "neXtProt_NXQ_00113",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with protein existence \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform / :peptideMapping ?pm .\n ?entry :existence :Evidence_at_protein_level .\n ?pm :proteotypic true .\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00117",
    "slug": "neXtProt_NXQ_00117",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least one sequence variant",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :variant ?var.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00118",
    "slug": "neXtProt_NXQ_00118",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least one somatic variant",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX source: <http://nextprot.org/rdf/source/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :variant ?var.\n {\n ?var rdfs:comment ?comment.\n filter (contains (?comment,'somatic'))\n }\n union\n {\n ?var :evidence ?ev.\n ?ev :assignedBy source:Cosmic.\n }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00119",
    "slug": "neXtProt_NXQ_00119",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least one annotated mutagenesis site",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :mutagenesis ?mut.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00124",
    "slug": "neXtProt_NXQ_00124",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "What are the 25 most frequent families with member count",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nselect (str(?famlab) as ?familylabel) (count(distinct(?member)) as ?membercnt) where{\n ?member :familyName /:term /:childOf / rdfs:label ?famlab .\n} group by ?famlab\norder by desc(?membercnt)\nlimit 25",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00125",
    "slug": "neXtProt_NXQ_00125",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Domains that are entirely covered by 3D structures",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?domlabel WHERE {\n ?entry :isoform ?isoform.\n ?isoform :pdbMapping ?struc.\n ?struc :start ?s1 ; :end ?s2.\n ?isoform :domain ?dom.\n ?dom :start ?d1 ; :end ?d2.\n ?dom :term/rdfs:label ?domlabel\n filter ((?s1 <= ?d1) && (?s2 >= ?d2))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00126",
    "slug": "neXtProt_NXQ_00126",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Peptides that are potential neo N-termini from undescribed isoforms",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry ?pep WHERE {\n ?entry :isoform ?iso .\n ?iso :peptideMapping ?pm.\n ?pm :start ?p1 ; :end ?p2 .\n ?pm :proteotypic true .\n filter(?p1 > 2). # must not be already N-terminal\n ?iso :sequence / :chain ?chain.\n bind (substr(?chain, ?p1, ?p2 - ?p1 + 1) as ?pep) .\n bind (substr(?chain, ?p1-1, 1) as ?prevAA) .\n bind (substr(?chain, ?p1, 1) as ?firstAA) .\n bind (substr(?chain, ?p2, 1) as ?lastAA) .\n filter(!regex (?prevAA,'[KR]')) # must be semi-tryptic in N-ter\n filter(regex (?prevAA,'M') || regex (?firstAA,'M')) # must be N-terminal\n filter(!regex (?firstAA,'[DEFIKLRY]')) #plausible 2nd AA\n filter(regex (?lastAA,'[KR]')) # must be tryptic in C-ter\n filter not exists { # The candidate peptide must not already exist as N-ter in a described isoform\n ?entry :isoform ?iso2.\n ?iso2 :sequence / :chain ?chain2.\n ?iso2 :matureProtein [ :start ?mstart ; :end ?mend]\n bind (substr(?chain2, ?mstart, ?mend - ?mstart + 1) as ?mat2) .\n filter(strlen(?mat2) > 30).\n bind (substr(?mat2, 2, strlen(?mat2) - 1) as ?mat22) .\n filter(regex(?mat2,concat(\"^\", ?pep)) || regex(?mat22,concat(\"^\", ?pep))).\n }\n}\norder by ?pep\n\n# overestimated, need additional filter(s)\n# but for instance AELEEVTLDGKPLQALR, AELEEVTLDGKPLQALRVTDLKAALEQR and AELEEVTLDGKPLQALRVTDLKAALEQR in Q9UKV3\n# are N-acetylated and good markers for an additional iso starting at M-59",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KR",
      "DEFIKLRY",
      "AA",
      "AELEEVTLDGKPLQALR",
      "AELEEVTLDGKPLQALRVTDLKAALEQR"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00127",
    "slug": "neXtProt_NXQ_00127",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least one known SUMOylation site",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :crossLink /rdfs:comment ?comment.\n filter(contains (?comment,'SUMO'))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SUMO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00128",
    "slug": "neXtProt_NXQ_00128",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins whose gene is annotated to be induced by interferons",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :induction /rdfs:comment ?comment.\n filter(regex (?comment,'IFN|interferon',\"i\"))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "IFN"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00130",
    "slug": "neXtProt_NXQ_00130",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a DNA-binding region but not located in the nucleus",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?entry :gene / :name / rdfs:label ?gen .\n ?iso :dnaBindingRegion ?dnab.\n filter not exists { ?entry :isoform / :cellularComponent /:term /:childOf nextprot_cv:SL-0191} # SL for nucleus\n filter not exists { ?entry :isoform / :cellularComponent /:term /:childOf nextprot_cv:GO_0005634} # GO for nucleus\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00131",
    "slug": "neXtProt_NXQ_00131",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Terms of controlled vocabularies containing some word(s)",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT * WHERE {\n ?term rdfs:label ?label ; a ?type .\n # ---------------------------\n # exact match\n # ---------------------------\n filter(?label = \"peroxisome\"^^xsd:string)\n\n # ---------------------------\n # starting with peroxisome\n # ---------------------------\n # filter(regex(?label,\"^peroxisome\"))\n\n # ---------------------------\n # containing peroxisome\n # ---------------------------\n # filter(regex(?label,\"peroxisome\"))\n\n # ------------------------------------\n # containing peroxisome and receptor\n # ------------------------------------\n # filter(regex(?label,\"peroxisome.*receptor\"))\n} limit 20",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00132",
    "slug": "neXtProt_NXQ_00132",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a 3D structure in complex with another human protein which is not reported as binary interactant",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry a :Entry.\n ?entry :reference ?ref.\n ?ref :provenance db:PDB; :accession ?ac.\n ?entry2 a :Entry.\n ?ac ^:accession/^:reference ?entry2.\n filter(?entry != ?entry2).\n filter not exists{?entry :isoform /:binaryInteraction / :interactant ?entry2.}\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "PDB"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00135",
    "slug": "neXtProt_NXQ_00135",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins involved in both Wnt and Hippo signaling pathways",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso .\n # nextprot_cv:GO:0016055 wnt pathway\n ?iso :goBiologicalProcess ?func1 .\n ?func1 :term / :childOf nextprot_cv:GO_0016055.\n filter not exists { ?func1 :negativeEvidence ?negev. } # No negative function evidence\n # nextprot_cv:GO:0035329 Hippo pathway\n ?iso :goBiologicalProcess ?func2 .\n ?func2 :term / :childOf nextprot_cv:GO_0035329.\n filter not exists { ?func2 :negativeEvidence ?negev. } # No negative function evidence\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "GO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00136",
    "slug": "neXtProt_NXQ_00136",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins whose sequence was updated in 2014",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry a :Entry.\n ?entry :history / :lastSequenceUpdate ?sequpd.\n filter(contains(str(?sequpd),\"2014\"))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00137",
    "slug": "neXtProt_NXQ_00137",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that potentially interact with Class I PDZ domains (whose C-terminal sequence has a PDZ-binding consensus)",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :matureProtein / :end ?mend.\n ?iso :sequence / :chain ?seq.\n filter (strlen(?seq) > 2).\n bind (substr(?seq, ?mend-2, 3) as ?cterseq).\n filter(regex(?cterseq,'[ST].[ILV]')). # short motif consensus for C-terminal PDZ-binding\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "ST",
      "ILV",
      "PDZ"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00138",
    "slug": "neXtProt_NXQ_00138",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with 10 or more gold interactions with SH3 domain-containing proteins",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :interaction ?it.\n ?it :quality :GOLD.\n ?it :interactant ?interactant.\n ?interactant :isoform? / :domain / :term nextprot_cv:DO-00615. # SH3\n}\ngroup by ?entry having (count (distinct ?interactant) >= 10)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "GOLD",
      "DO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00139",
    "slug": "neXtProt_NXQ_00139",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Protein kinases which are high-confidence drug targets according to CHEMBL",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX cco: <http://rdf.ebi.ac.uk/terms/chembl#>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n\nSELECT DISTINCT ?entry (str(?gen) as ?gene) WHERE {\n    SERVICE <https://idsm.elixir-czech.cz/sparql/endpoint/idsm> {\n        SELECT DISTINCT ?protein WHERE {\n            ?target cco:hasTargetComponent ?tarComp .\n            ?target cco:taxonomy <http://identifiers.org/taxonomy/9606> . # human protein target\n            ?tarComp cco:targetCmptXref ?protein .\n            #?protein a cco:UniprotRef .\n            FILTER(contains(str(?protein),\"uniprot\"))\n            ?activity a cco:Activity ; cco:hasMolecule ?drug ; cco:hasAssay ?assay .\n            ?drug cco:hasMechanism / cco:hasTarget ?target . # known drug action mechanism\n            ?assay cco:hasTarget ?target; cco:targetConfScore ?score .\n            FILTER(?score > 8) # high-confidence assay\n        }\n    }\n    ?entry skos:exactMatch ?protein .\n    ?entry :isoform / :uniprotKeyword / :term nextprot_cv:KW-0418. #kinase\n    ?entry :gene / :recommendedName / rdfs:label ?gen.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SERVICE",
      "FILTER",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00140",
    "slug": "neXtProt_NXQ_00140",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that interact with viral proteins",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n optional {?iso :interactionInfo ?itinfo .}\n {\n ?itinfo rdfs:comment ?txt.\n filter(contains(?txt,\"viral\") || contains(?txt,\"virus\")).\n } # refers to a virus in the free-text interactionInfo topic\nUNION\n { ?iso :uniprotKeyword / :term nextprot_cv:KW-0945.} # host-virus interaction keyword\nUNION\n {\n SERVICE <https://sparql.uniprot.org/sparql> {\n SELECT distinct ?viralinteractor WHERE # get viral proteins with an IntAct xref\n {\n\t?viralinteractor a up:Protein .\n\t?viralinteractor rdfs:seeAlso ?db .\n\t?db up:database <http://purl.uniprot.org/database/IntAct> .\n \t?viralinteractor up:organism ?tax .\n\t?tax up:scientificName ?orgname.\n\tfilter(contains(?orgname,\"virus\"))\n }\n }\n ?entry :isoform / :binaryInteraction ?it .\n ?it :interactant ?interactant; :quality :GOLD. # NeXtprot entries with a GOLD IntAct binary interaction\n ?interactant skos:exactMatch ?viralinteractor . # interactant must be in the uniprot service result set to select the entry\n }\nUNION\n {\n SERVICE <https://sparql.uniprot.org/sparql> {\n SELECT distinct ?humprotein WHERE # get human proteins that share a PDB xref with a viral protein (same PDB id)\n {\n\t?humprotein a up:Protein .\n ?humprotein up:organism taxon:9606 .\n\t?humprotein rdfs:seeAlso ?db .\n\t?db up:database <http://purl.uniprot.org/database/PDB> .\n\t?viralprotein a up:Protein .\n\t?viralprotein rdfs:seeAlso ?db .\n ?viralprotein up:organism ?tax .\n\t?tax up:scientificName ?orgname.\n\tfilter(contains(?orgname,\"virus\"))\n }\n }\n ?entry skos:exactMatch ?humprotein .\n }\n}\norder by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "UNION",
      "KW",
      "SERVICE",
      "GOLD",
      "PDB"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00143",
    "slug": "neXtProt_NXQ_00143",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins for which none of the reported proteotypic peptides is from PeptideAtlas nor MassIVE",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX source: <http://nextprot.org/rdf/source/>\n\nselect ?entry WHERE {\n ?entry :isoform / :peptideMapping ?pm.\n ?pm :proteotypic true .\n ?pm :peptideSource ?src .\n bind (?src = source:MassIVE as ?massive)\n bind (?src = source:PeptideAtlas as ?pa)\n bind (?src != source:MassIVE && ?src != source:PeptideAtlas as ?other)\n}\ngroup by ?entry\nhaving (sum(?massive)=0 && sum(?pa)=0 && sum(?other)>0)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00144",
    "slug": "neXtProt_NXQ_00144",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that contains a sequence \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n?entry :isoform ?isoform.\n?isoform :ptm ?ptm.\n?ptm :term nextprot_cv:PTM-0257 . # Proline amide\n?ptm :start ?ptmpos .\n?isoform :sequence / :chain ?seq.\nbind(substr(?seq, ?ptmpos-2, 3) as ?modseq)\nfilter ( regex(?modseq, \"QHP\") )\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "PTM",
      "QHP"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00145",
    "slug": "neXtProt_NXQ_00145",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which include a mature chain of less or equal to 50 amino acid residues whose C-terminus is amidated",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry WHERE {\n?entry :isoform ?isoform.\n?isoform :ptm ?ptm.\n?ptm rdfs:comment ?comment.\nfilter regex(?comment, \"amid\",\"i\")\n?ptm :start ?ptmpos .\n?isoform :matureProtein [ :start ?mstart ; :end ?mend]\nfilter ((?mend = ?ptmpos) && (?mend-?mstart < 50))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00146",
    "slug": "neXtProt_NXQ_00146",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins having at least 2 proteotypic peptides of 7 or 8aa but no proteotypic peptide >= 9 aa",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n?entry :isoform / :peptideMapping ?pm.\n?pm :proteotypic true .\n?pm :peptideName ?pepid .\n#?pm :start ?pos1 ; :end ?pos2 .\n#filter((?pos2 - ?pos1 + 1) >= 7) # This is not absolutely required for current query since 7 is the minimum length for accepted proteotypic peptides\nfilter not exists {\n ?entry :isoform / :peptideMapping ?pm2.\n ?pm2 :start ?p1 ; :end ?p2 .\n ?pm2 :proteotypic true .\n filter((?p2 - ?p1 + 1) >= 9)\n }\n}\ngroup by ?entry having(count (distinct ?pepid) >= 2)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00147",
    "slug": "neXtProt_NXQ_00147",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a variant having an impact on the nucleus localization at level GOLD",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry\nwhere {\n values ?ioTerm {nextprot_cv:GO_0005634} . # nucleus\n ?entry :isoform / :proteoform / :phenotypicVariation ?phvar .\n ?phvar :term / :childOf nextprot_cv:ME_0000002 . # children of impact\n ?phvar :evidence / :quality :GOLD .\n ?phvar :impactedObject / :term ?ioTerm .\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "GOLD"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00148",
    "slug": "neXtProt_NXQ_00148",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Variants with normal \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot: <http://nextprot.org/rdf/entry/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT distinct ?pfname ?impact_on_ubi_trsfrt_activity ?impact_on_binding_UBE2D1 WHERE {\n values (?ubi_trsfrt_activity ?no_impact ?UBE2D1 ?impact)\n { (nextprot_cv:GO_0004842 nextprot_cv:ME_0000003 nextprot:NX_P51668 nextprot_cv:ME_0000002) }\n ?pf a :Proteoform .\n ?pf rdfs:label ?pfname .\n ?pf :phenotypicVariation ?pv1 .\n ?pv1 :impactedObject / :term ?ubi_trsfrt_activity .\n ?pv1 :term ?no_impact .\n ?no_impact rdfs:label ?impact_on_ubi_trsfrt_activity .\n ?pf :phenotypicVariation ?pv2 .\n ?pv2 :impactedObject / :interactant ?UBE2D1 .\n ?pv2 :term ?sub_impact .\n ?sub_impact :childOf ?impact .\n ?sub_impact rdfs:label ?impact_on_binding_UBE2D1 .\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00149",
    "slug": "neXtProt_NXQ_00149",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "BRCA1 variants with at least 5 different Severe phenotypes",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot: <http://nextprot.org/rdf/entry/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT\n?pfname\n(count(?pvlabel) as ?severe_count)\n(group_concat(?pvlabel;separator=\", and \") as ?severe_list)\nWHERE {\n nextprot:NX_P38398 :isoform / :proteoform ?pf .\n ?pf rdfs:label ?pfname .\n ?pf :phenotypicVariation ?pv1 .\n ?pv1 rdfs:comment ?pvlabel .\n ?pv1 :evidence / :severity :Severe .\n }\ngroup by ?pfname having (count(?pvlabel)>=5)\norder by desc(count(?pvlabel)) ?pfname",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00202",
    "slug": "neXtProt_NXQ_00202",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with from 2 to 4 transmembrane regions",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :topology ?statement.\n ?statement a :TransmembraneRegion.\n} group by ?entry ?iso having(count( ?statement)>=2 && count( ?statement)<=4)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00203",
    "slug": "neXtProt_NXQ_00203",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a mature chain of from 300 to 400 residues",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :matureProtein [ :start ?mstart ; :end ?mend].\n filter (?mend-?mstart > 0). # chain fully defined\n bind(?mend - ?mstart as ?mlen)\n filter(?mlen >= 300 && ?mlen <= 400)\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00204",
    "slug": "neXtProt_NXQ_00204",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with protein existence \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?level {\n#\t:Evidence_at_protein_level # PE=1\n :Evidence_at_transcript_level # PE=2\n :Inferred_from_homology # PE=3\n :Predicted # PE=4\n#\t:Uncertain # PE=5\n }\n ?entry a :Entry .\n ?entry :existence ?level .\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "PE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00208",
    "slug": "neXtProt_NXQ_00208",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which are ion channels and are associated with a disease",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :uniprotKeyword /:term nextprot_cv:KW-0407. #ion channel\n {\n ?iso :medical / rdf:type :Disease.\n } union {\n ?iso :uniprotKeyword / :term ?kw .\n ?kw :termType \"Disease\"^^xsd:string\n filter (?kw != nextprot_cv:KW-0656)\n }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00209",
    "slug": "neXtProt_NXQ_00209",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Glycosylation sites and cross links positions on SwissProt canonical isoforms",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry ?iso ?ptmtype ?pos ?modres WHERE {\n?entry :isoform ?iso.\n?iso :swissprotDisplayed true .\n?iso :sequence / :chain ?seq .\n?iso :ptm ?ptm.\n?ptm :term ?modterm.\n?ptm :start ?pos.\nbind (substr(?seq,?pos,1) as ?modres)\t.\n{\n?ptm a :GlycosylationSite .\nbind(\"glyco\" as ?ptmtype)\n}\nunion\n{\n?ptm a :CrossLink .\nbind(\"cross-link\" as ?ptmtype)\n}\n}\norder by ?iso\n#limit 100",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00216",
    "slug": "neXtProt_NXQ_00216",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Phosphorylation sites from PeptideAtlas Phosphoproteome",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX source: <http://nextprot.org/rdf/source/>\n\nSELECT DISTINCT (sample(?iso) as ?isospl) (sample(?pos) as ?posspl) WHERE {\n ?entry :isoform ?iso .\n ?iso :ptm ?ptm.\n ?ptm :entryAnnotationId ?ptmid; :start ?pos .\n ?ptm :evidence / :assignedBy source:PeptideAtlas_human_phosphoproteome .\n}\ngroup by ?ptmid\norder by ?isospl ?posspl",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00217",
    "slug": "neXtProt_NXQ_00217",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins associated with an incomplete EC number, no function annotated and high expression in liver",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?isox.\n ?isox :enzymeClassification / :term / rdfs:label ?eclabel.\n filter regex(?eclabel, '-'^^xsd:string) # incomplete EC number\n ?isox :highExpression /:term /:childOf nextprot_cv:TS-0564. # highly expressed in liver\n {\n ?isox :functionInfo / rdfs:comment ?functext .\n filter(strstarts(?functext,\"Probable\") || strstarts(?functext,\"Putative\"))\n }\n UNION\n {\n filter not exists {?isox :functionInfo ?_ } # entries with no function at all\n }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "EC",
      "TS",
      "UNION"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00218",
    "slug": "neXtProt_NXQ_00218",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins for which different splice isoforms have a different subcellular location or function",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n#A0A1B0GVQ0,A0AVT1 ,A0PJK1...\n\n\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso1, ?iso2.\n ?iso1 :swissprotDisplayed true .\n ?iso2 :swissprotDisplayed false .\n {\n ?iso2 :function / :term ?functerm .\n filter (?functerm != nextprot_cv:GO_0005515) #protein-binding\n filter not exists {?iso1 :function / :term ?functerm .}\n }\n UNION\n {\n ?iso2 :functionInfo / rdfs:comment ?functext .\n filter not exists {?iso1 :functionInfo / rdfs:comment ?functext .}\n }\n UNION\n {\n ?iso2 :cellularComponent / :term ?locterm .\n filter not exists {?iso1 :cellularComponent / :term ?locterm}\n }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "UNION"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00219",
    "slug": "neXtProt_NXQ_00219",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins entries from a list of gene names",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n values ?gene\n {\"UBA6\" \"PXDNL\" \"CNOT1\" \"TCAF2\" \"ARHGAP32\" \"HACD1\" \"AKR1B15\" \"SGK1\" \"MYO1C\" \"LGALS9\"\n \"PIK3CD\" \"PDE2A\" \"DNM1L\"} # space or nl-separated\n\n bind (STRDT (?gene,xsd:string) as ?genename ) . # converts raw string to ^^xsd:string\n ?entry :gene / :recommendedName / rdfs:label ?genename .\n }",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "PXDNL",
      "STRDT"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00220",
    "slug": "neXtProt_NXQ_00220",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins located on chromosome MT (mitochondrial) coded by a gene located on the plus strand",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :gene ?gene .\n ?gene :chromosome \"MT\"^^xsd:string; :strand \"1\"^^xsd:string .\n }",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "MT"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00221",
    "slug": "neXtProt_NXQ_00221",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with RNA-seq observed expression \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso .\n ?iso :expression ?exp, ?exp2.\n ?exp :term ?tiss .\n ?exp :negativeEvidence / :evidenceCode nextprot_cv:ECO_0000295. # RNA-seq\n ?exp2 :quality :GOLD .\n ?exp2 :term ?tiss2 .\n ?exp2 :evidence ?evi2.\n ?evi2 :evidenceCode nextprot_cv:ECO_0001055. # IHC\n ?evi2 :observedExpression :High.\n ?tiss2 :childOf ?tiss . # same tissue or children\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "RNA",
      "GOLD",
      "IHC"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00222",
    "slug": "neXtProt_NXQ_00222",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with both RNA-seq expression and observed IHC expression \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso .\n ?iso :expression ?exprna, ?expihc.\n ?exprna :term ?rnatiss .\n ?exprna :evidence ?evirna.\n ?evirna :observedExpression :Positive.\n ?evirna :evidenceCode nextprot_cv:ECO_0000295. # RNA-seq\n ?rnatiss :childOf nextprot_cv:TS-0095. #brain\n ?expihc :quality :GOLD .\n ?expihc :term ?ihctiss .\n ?expihc :evidence ?eviihc.\n ?eviihc :evidenceCode nextprot_cv:ECO_0001055. #IHC\n ?eviihc :observedExpression :High.\n ?ihctiss :childOf ?rnatiss .\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "RNA",
      "TS",
      "GOLD",
      "IHC"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00223",
    "slug": "neXtProt_NXQ_00223",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "100 most-cited publications in neXtProt and the corresponding number of associated entries",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\n\nselect (str(?publiid) as ?PMID) (str(?tt) as ?title) (count(distinct ?entry) as ?ecnt)\nwhere {\n ?entry a :Entry .\n ?entry :reference ?ref .\n ?ref a :Publication.\n ?ref :title ?tt .\n ?ref :from ?xref .\n ?xref :accession ?publiid .\n ?xref :provenance db:PubMed .\n}\ngroup by ?publiid ?tt\norder by desc(?ecnt)\nlimit 100",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "PMID"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00224",
    "slug": "neXtProt_NXQ_00224",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Transmembrane proteins with at least 100 consecutive aa located in the EXTRACELLULAR OR LUMENAL compartment.",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :topologicalDomain ?topdom .\n ?topdom :term ?topterm .\n filter (?topterm in (nextprot_cv:CVTO_0002, nextprot_cv:CVTO_0003, nextprot_cv:CVTO_0007)) # extracellular, exoplasmic loop, lumenal\n ?topdom :start ?domstart; :end ?domend .\n filter ((?domend - ?domstart) >= 100)\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00225",
    "slug": "neXtProt_NXQ_00225",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with high proline content",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry ?AAcnt ?seqlen ?AAdensity WHERE {\n ?entry :isoform ?iso.\n ?iso :swissprotDisplayed true .\n ?iso :sequence / :chain ?seq .\n ?iso :sequence / :length ?seqlen .\n bind( strlen( replace( str(?seq), \"[^P]\", \"\")) as ?AAcnt) # replace all non-Proline by empty string\n bind(xsd:float(?AAcnt)/xsd:float(?seqlen) as ?AAdensity)\n filter(?AAcnt > 10)\n}\norder by desc(?AAdensity)\nlimit 100 # will bring-up the 100 most relevant cases",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00226",
    "slug": "neXtProt_NXQ_00226",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least 2 validating peptides >=9aa found in blood plasma, urine or cerebrospinal fluid (criteria for biomarker)].",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX source: <http://nextprot.org/rdf/source/>\n\nSELECT DISTINCT ?entry WHERE {\nvalues ?pepsources {\n source:PeptideAtlas_human_Cerebrospinal_Fluid\n source:PeptideAtlas_human_Blood_Plasma\n source:PeptideAtlas_human_Urine\n source:MassIVE_human_Cerebrospinal_Fluid\n source:MassIVE_human_Blood_Plasma\n source:MassIVE_human_Urine\n }\n ?entry :isoform ?iso.\n ?iso :peptideMapping ?pm .\n ?pm :peptideName ?pepid .\n ?pm :evidence / :assignedBy ?pepsources .\n ?pm :proteotypic true .\n ?pm :start ?p1 ; :end ?p2 .\n filter(?p2-?p1 >= 8) # peptide length >= 9\n}\ngroup by ?entry having(count (distinct ?pepid) > 1) # at least two such peptides",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00230",
    "slug": "neXtProt_NXQ_00230",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with experimentally determined lengthy alpha-helices (> 75 aa)",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry (str(?gen) as ?gene) ?hlen WHERE {\n ?entry :isoform ?iso.\n ?entry :gene / :recommendedName / rdfs:label ?gen.\n ?iso :helix ?hel .\n ?hel :start ?s; :end ?e .\n bind((?e - ?s + 1) as ?hlen )\n filter(?hlen > 75)\n}\norder by desc(?hlen)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00231",
    "slug": "neXtProt_NXQ_00231",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with sequences 100% identical to other proteins",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform / :sequence / :chain ?chain1.\n ?entry2 :isoform / :sequence / :chain ?chain2.\n filter ( (?chain1 = ?chain2) && (?entry != ?entry2))\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00232",
    "slug": "neXtProt_NXQ_00232",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with sequences 100% identical to other proteins, grouped",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry (group_concat(distinct substr(str(?entry2),34); separator = \",\") as ?sameseq) WHERE {\n ?entry :isoform / :sequence / :chain ?chain1.\n ?entry2 :isoform / :sequence / :chain ?chain2.\n filter ( (?chain1 = ?chain2) && (?entry != ?entry2))\n}\ngroup by ?entry\norder by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00233",
    "slug": "neXtProt_NXQ_00233",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that are PE>1 with at least one proteotypic peptide of at least 9 amino-acids identified in a human sample ",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n values ?level {\n \t:Evidence_at_transcript_level # PE=2\n \t:Inferred_from_homology \t# PE=3\n \t:Predicted \t# PE=4\n\t:Uncertain \t# PE=5\n\t}\n ?entry a :Entry .\n ?entry :existence ?level .\n ?entry :isoform / :peptideMapping ?pm.\n ?pm :proteotypic true .\n ?pm :start ?pos1 ; :end ?pos2 .\n filter((?pos2 - ?pos1 + 1) >= 9)\n }",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "PE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00234",
    "slug": "neXtProt_NXQ_00234",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least two proteotypic synthetic peptides from SRMAtlas of at least 9 amino acids in length",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :srmPeptideMapping ?srm .\n ?srm :start ?ps; :end ?pe .\n filter(?pe - ?ps + 1 >= 9)\n ?srm :proteotypic true .\n ?srm :peptideName ?pepid .\n}\ngroup by ?entry having(count(distinct ?pepid) > 1)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00235",
    "slug": "neXtProt_NXQ_00235",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least two antibodies available from Human Protein Atlas that have associated tissue expression annotations from immunohistochemistry studies ",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :antibodyMapping ?abmap.\n ?abmap :evidence / :reference / :accession ?aid .\n ?iso :expressionProfile / :evidence ?ev .\n ?ev :evidenceCode nextprot_cv:ECO_0001055.\n# ?ev :quality :GOLD .\n}\ngroup by ?entry having(count(distinct ?aid) > 1)\norder by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "GOLD"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00236",
    "slug": "neXtProt_NXQ_00236",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with subcellular location gold and list of all these locations",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry (group_concat(distinct str(?loclab); SEPARATOR = \",\") as ?locs) WHERE {\n ?entry :isoform ?iso.\n ?iso :cellularComponent ?locannot .\n ?locannot :term ?locterm .\n ?locterm rdfs:label ?loclab .\n ?locannot :evidence ?locev .\n ?locev :quality :GOLD .\n filter not exists {?locannot :negativeEvidence ?locev .}\n}\nGROUP BY ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "SEPARATOR",
      "WHERE",
      "GOLD",
      "GROUP",
      "BY"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00237",
    "slug": "neXtProt_NXQ_00237",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Transmembrane proteins with the number of transmembrane domains in the canonical isoform by decreasing order",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nselect ?entry (count(distinct(?statement)) as ?tmcnt) WHERE {\n ?entry :isoform ?iso.\n ?iso :swissprotDisplayed true .\n ?iso :topology ?statement.\n ?statement a :TransmembraneRegion.\n}\ngroup by ?entry\norder by desc(?tmcnt)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00238",
    "slug": "neXtProt_NXQ_00238",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that are lipoproteins",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :uniprotKeyword / :term nextprot_cv:KW-0449.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00239",
    "slug": "neXtProt_NXQ_00239",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with cross-references to InterPro",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\n\nSELECT DISTINCT ?entry ?iprac WHERE {\n ?entry :reference ?ref.\n ?ref :provenance db:InterPro.\n ?ref :accession ?iprac}\norder by ?entry ?iprac",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00240",
    "slug": "neXtProt_NXQ_00240",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Gold binary interactions with other human proteins ",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry ?interactant WHERE {\n ?entry :isoform ?iso.\n ?entry :isoform/:binaryInteraction ?interaction.\n ?interaction :interactant ?interactant; :quality :GOLD.\n filter not exists { ?interactant a :Xref . }\n filter(?interactant != ?entry) # remove self-interacting proteins\n}\norder by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "GOLD"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00241",
    "slug": "neXtProt_NXQ_00241",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Interaction annotations from SwissProt ",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry (str(?txt) as ?itinfo) WHERE {\n SELECT DISTINCT ?entry ?txt WHERE {\n ?entry :isoform ?iso.\n ?iso :interactionInfo / rdfs:comment ?txt.\n } order by ?entry\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00242",
    "slug": "neXtProt_NXQ_00242",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a mitochondrial transit peptide",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :mitochondrialTransitPeptide ?mit.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00243",
    "slug": "neXtProt_NXQ_00243",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a signal sequence ",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :signalPeptide ?_.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00244",
    "slug": "neXtProt_NXQ_00244",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a variant having an impact on a binary interaction ",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry ?interactant WHERE {\n ?entry :isoform / :proteoform / :phenotypicVariation ?phvar .\n ?phvar :term / :childOf nextprot_cv:ME_0000002 . # children of impact\n ?phvar :evidence / :quality :GOLD .\n ?phvar :impactedObject / :interactant ?interactant.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "GOLD"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00245",
    "slug": "neXtProt_NXQ_00245",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a propeptide ",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform / :propeptide ?propep .\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00246",
    "slug": "neXtProt_NXQ_00246",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins which are enzymes catalyzing a reaction involving lipids",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n\nSELECT DISTINCT ?entry WHERE {\n#SELECT DISTINCT ?entry str(?xlab) WHERE {\n SERVICE <https://sparql.rhea-db.org/sparql> {\n SELECT distinct ?chebi WHERE {\n ?reaction rdfs:subClassOf rh:Reaction .\n ?reaction rh:status rh:Approved .\n ?reaction rh:side ?reactionSide .\n ?reactionSide rh:contains ?participant .\n ?participant rh:compound ?compound .\n ?compound rh:chebi ?chebi .\n ?chebi rdfs:subClassOf+ CHEBI:18059 .\n }\n }\n ?entry :isoform / :smallMoleculeInteraction / :interactant ?x .\n ?x rdfs:label ?xlab .\n ?x skos:exactMatch ?chebi .\n} order by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "CHEBI",
      "CHEBI_",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SERVICE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00247",
    "slug": "neXtProt_NXQ_00247",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with a molecular weight less than 25 kDa",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry ?mw WHERE {\n ?entry :isoform / :sequence / :molecularWeight ?mw.\n filter ( ?mw < 25000)\n} order by ?mw",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00248",
    "slug": "neXtProt_NXQ_00248",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Variants with phenotype annotation that map to a 3D structure",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry (str(?pfname) as ?phenovar) (concat(str(sample(?pdbac)),\"...\") as ?pdbsample) WHERE {\n ?entry :gene / :name / rdfs:label ?gen .\n ?entry :isoform ?iso.\n ?iso :proteoform ?pf .\n ?pf rdfs:label ?pfname .\n ?pf :phenotypicVariation ?pv1 .\n ?pf :difference ?pfmod .\n ?pfmod a :Variant .\n ?pfmod :start ?vstart; :end ?vend .\n ?iso :pdbMapping ?pdbmap.\n ?pdbmap rdfs:comment ?pdbac.\n ?pdbmap :start ?pdbstart ; :end ?pdbend.\n filter(?pdbstart <= ?vstart && ?pdbend >= ?vend )\n} group by ?entry ?pfname",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00249",
    "slug": "neXtProt_NXQ_00249",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00250",
    "slug": "neXtProt_NXQ_00250",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that act as transporters and their TCDB numbers",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry (str(?trcom) as ?trannot) (str(?acc) as ?trac) {\n ?entry :isoform/ :transportActivity ?tr.\n ?tr rdfs:comment ?trcom; :evidence / :reference ?ref.\n ?ref a :Xref; :accession ?acc .\n} order by ?acc",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00251",
    "slug": "neXtProt_NXQ_00251",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with at least one proteotypic peptide 9aa+ not mapping on canonical isoform",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nselect ?entry (sample(?isopos) as ?samplematch) WHERE {\n ?entry :isoform ?iso1, ?isononcano.\n ?iso1 :swissprotDisplayed true .\n ?isononcano :swissprotDisplayed false .\n ?isononcano :peptideMapping ?pm.\n ?pm :peptideName ?pepname.\n ?pm :proteotypic true.\n ?pm :start ?pos ; :end ?pos2 .\n filter(?pos2 - ?pos >= 8) # peptide length >= 9\n bind(strafter(str(?isononcano),\"-\") as ?isostr)\n bind(concat(concat(?isostr,\"-\"),?pos) as ?isopos)\n filter not exists {?iso1 :peptideMapping/ :peptideName ?pepname.}\n }\ngroup by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00252",
    "slug": "neXtProt_NXQ_00252",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00253",
    "slug": "neXtProt_NXQ_00253",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Human pathways in which at least one protein is mitochondrial GOLD",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX wp: <http://vocabularies.wikipathways.org/wp#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\n\nselect ?pathwayname (group_concat(distinct ?gen ; SEPARATOR = ',') as ?gene) WHERE {\n SERVICE <https://sparql.wikipathways.org/sparql> {\n\n { ?geneProduct a wp:GeneProduct . }\n union\n { ?geneProduct a wp:Protein . }\n ?geneProduct rdfs:label ?genraw .\n bind (concat( \"\"^^xsd:string, ?genraw) as ?gen).\n filter(!regex(?gen,\"[ a-z-]\")). # ensures official gene names for subsequent neXtprot matching\n ?geneProduct dcterms:isPartOf ?pathway .\n ?pathway a wp:Pathway .\n ?pathway wp:organism ?organism .\n filter(contains(str(?organism),\"9606\"))\n ?pathway dcterms:title ?pathwayname .\n }\n\n ?entry a :Entry .\n ?entry :gene / :recommendedName / rdfs:label ?gen .\n ?entry :isoform / :cellularComponent ?loc .\n values ?mitoloc {nextprot_cv:SL-0173 nextprot_cv:GO_0005739 } # SL and GO values for mitochondrion\n ?loc :term / :childOf ?mitoloc. # mitochondrion\n ?loc :evidence / :quality :GOLD .\n filter not exists {?loc :negativeEvidence ?negev} # No negative localization evidence\n}\ngroup by ?pathwayname\norder by ?pathwayname",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SEPARATOR",
      "WHERE",
      "SERVICE",
      "SL",
      "GO",
      "GOLD"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00254",
    "slug": "neXtProt_NXQ_00254",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with associated pathways in WikiPathways",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX wp: <http://vocabularies.wikipathways.org/wp#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry ?gen ?pathwayname WHERE {\n SERVICE <https://sparql.wikipathways.org/sparql> {\n\n {?geneProduct a wp:Protein}\n union\n {?geneProduct a wp:GeneProduct}\n\n ?geneProduct rdfs:label ?genraw .\n\t bind (concat( \"\"^^xsd:string, ?genraw) as ?gen).\n filter(!regex(?gen,\"[ a-z-]\")). # ensures official gene names for subsequent neXtprot matching\n\n ?geneProduct dcterms:isPartOf ?pathway .\n ?pathway a wp:Pathway .\n ?pathway wp:organism ?organism .\n filter(contains(str(?organism),\"9606\")) # Human proteins\n ?pathway dcterms:title ?pathwayname .\n }\n ?entry a :Entry .\n ?entry :gene / :recommendedName / rdfs:label ?gen .\n}\norder by ?pathwayname",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SERVICE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00255",
    "slug": "neXtProt_NXQ_00255",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Variants identified in exome datasets with a frequency of >0.1",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry ?varpos ?freq where\n{\n ?entry :isoform ?iso .\n ?iso :swissprotDisplayed true .\n ?iso :variant ?var .\n ?var :start ?varpos .\n ?var :evidence ?ev .\n ?ev :alleleNumber ?anb .\n ?ev :alleleFrequency ?freq .\n filter(?freq > 0.1 && ?anb > 100000)\n } order by desc(?freq)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00256",
    "slug": "neXtProt_NXQ_00256",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Variants identified in exome datasets in a frequent homozygote state",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT ?entry ?varpos where\n{\n ?entry :isoform ?iso .\n ?iso :swissprotDisplayed true .\n ?iso :variant ?var .\n ?var :start ?varpos .\n ?var :evidence ?ev .\n ?var :evidence / :homozygoteCount ?hcnt .\n filter(?hcnt > 100000)\n }\n order by desc(?hcnt)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00257",
    "slug": "neXtProt_NXQ_00257",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00258",
    "slug": "neXtProt_NXQ_00258",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins involved in diseases due to intronic variants with one selected publication",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX ncit: <http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX sio: <http://semanticscience.org/resource/>\nPREFIX so: <http://purl.obolibrary.org/obo/SO_>\n\nSELECT DISTINCT ?entry (str(?gen) as ?gene) ?diseaseTitle ?sampleArticle WHERE {\n SERVICE <https://rdf.disgenet.org/sparql> {\n SELECT DISTINCT ?protein ?diseaseTitle (sample(?article) as ?sampleArticle) WHERE {\n ?vda sio:SIO_000628 ?variant,?disease .\n\t?vda sio:SIO_000772 ?article .\n ?disease a sio:SIO_010299 ; dcterms:title ?diseaseTitle . # true disease, use ncit:C7057 for traits\n ?variant a so:0001627 ; dcterms:title ?variantTitle . # intron variant\n ?variant so:associated_with ?gene .\n ?gene a ncit:C16612; sio:SIO_010078 ?protein .\n } group by ?protein ?diseaseTitle\n }\n BIND(IRI(replace(str(?protein),\"purl\",\"www\")) AS ?unipage) .\n ?entry :swissprotPage ?unipage .\n ?entry :gene / :recommendedName / rdfs:label ?gen .\n} order by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "EVS",
      "SO_",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SERVICE",
      "BIND",
      "IRI",
      "AS"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00259",
    "slug": "neXtProt_NXQ_00259",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins involved in diseases with clinical manifestations that include long organs ",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX ncit: <http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX sio: <http://semanticscience.org/resource/>\n\nSELECT DISTINCT ?entry (str(?gen) as ?genx) ?umlsTerm WHERE {\n SERVICE <https://rdf.disgenet.org/sparql> {\n SELECT DISTINCT ?protein ?umlsTerm WHERE {\n ?gda sio:SIO_000628 ?gene,?disease .\n ?disease a sio:SIO_010056 . # traits or phenotypes\n ?disease dcterms:title ?umlsTerm .\n filter(contains(str(?umlsTerm),\"Long \"))\n ?gene a ncit:C16612; sio:SIO_010078 ?protein .\n }\n }\n BIND(IRI(replace(str(?protein),\"purl\",\"www\")) AS ?unipage) .\n ?entry :swissprotPage ?unipage .\n ?entry :gene / :recommendedName / rdfs:label ?gen .\n} order by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "EVS",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SERVICE",
      "BIND",
      "IRI",
      "AS"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00260",
    "slug": "neXtProt_NXQ_00260",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with high-frequency missense variants involved in bacterial infection, with dbSNP identifiers and position on the canonical isoform",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX ncit: <http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX sio: <http://semanticscience.org/resource/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX so: <http://purl.obolibrary.org/obo/SO_>\n\nSELECT DISTINCT ?entry ?umlsTerm (str(?snpac) as ?varid) ?pos (str(?orgaa) as ?orgAA) (str(?varaa) as ?varAA) WHERE {\n SERVICE <https://rdf.disgenet.org/sparql> {\n SELECT DISTINCT ?protein ?variantTitle ?umlsTerm\n WHERE {\n ?vda sio:SIO_000628 ?umls, ?variant .\n ?umls dcterms:title ?umlsTerm ; skos:exactMatch ?doid .\n ?doid rdfs:subClassOf+ <http://purl.obolibrary.org/obo/DOID_104> . # DO id for bacterial infection\n ?variant a so:0001583 ; dcterms:title ?variantTitle . # Missense variant\n ?variant so:associated_with ?gene .\n ?variant sio:SIO_000223 ?altAl .\n ?altAl rdf:type <http://purl.obolibrary.org/obo/GENO_0000476>; sio:SIO_000900 ?altAlFreq .\n ?altAlFreq a sio:SIO_001367; sio:SIO_000300 ?altAlFreqVal .\n filter(?altAlFreqVal > 0.01) # freq > 1%\n ?gene a ncit:C16612; sio:SIO_010078 ?protein .\n }\n }\n\n BIND(IRI(replace(str(?protein),\"purl\",\"www\")) AS ?unipage) .\n ?entry :swissprotPage ?unipage .\n ?entry :isoform ?iso .\n ?iso :swissprotDisplayed true .\n ?iso :variant ?var .\n ?var :evidence /:reference ?xref .\n ?xref :provenance db:dbSNP; :accession ?snpac .\n ?var :start ?pos ; :original ?orgaa; :variation ?varaa .\n filter(contains(?snpac,str(?variantTitle))) # matches the exact same variant Disgenet returned\n} order by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "EVS",
      "SO_",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SERVICE",
      "DO",
      "BIND",
      "IRI",
      "AS"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00261",
    "slug": "neXtProt_NXQ_00261",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Glycosylation sites from GlyConnect",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX source: <http://nextprot.org/rdf/source/>\n\nSELECT DISTINCT ?entry ?iso ?pos ?comment WHERE {\n?entry :isoform ?iso.\n?iso :swissprotDisplayed true .\n?iso :glycosylationSite ?glyco.\n?glyco :evidence / :assignedBy source:GlyConnect.\n?glyco rdfs:comment ?comment.\n?glyco :start ?pos.\n\n} order by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00264",
    "slug": "neXtProt_NXQ_00264",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00265",
    "slug": "neXtProt_NXQ_00265",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Retrieve all positional annotations at a given position on a neXtProt isoform",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX isoform: <http://nextprot.org/rdf/isoform/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?iso ?spos ?epos ?annot_type (str(?txt) as ?note) where\n{\n values ?iso { isoform:NX_Q99728-1 }\n values ?poi {107} # position of interest\n\n{\n ?iso :positionalAnnotation ?statement . optional {?statement rdfs:comment ?txt .}\n\n ?statement a ?annot_type .\n ?statement :start ?spos; :end ?epos .\n}\n union\n\n{\n ?iso :proteoform ?pf .\n ?pf :difference ?varmut; :phenotypicVariation ?phvar .\n ?varmut :start ?spos; :end ?epos.\n ?phvar :term ?phtype; :impactedObject /:term /rdfs:label ?ioTermlab .\n ?phvar a ?annot_type .\n ?phtype :childOf nextprot_cv:ME_0000002; rdfs:label ?effect . # children of impact\n bind (concat(CONCAT(?effect,\" \"),?ioTermlab) as ?txt) }\n\n filter((?spos <= ?poi) && (?epos >= ?poi)) # select annotations encompassing the position of interest\n} order by ?spos",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "CONCAT"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00266",
    "slug": "neXtProt_NXQ_00266",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins binding estradiol and/or similar molecules (substructure search with SMILES) and their associated GO_MF terms",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX cco: <http://rdf.ebi.ac.uk/terms/chembl#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX sachem: <http://bioinfo.uochb.cas.cz/rdf/v1.0/sachem#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n\nSELECT distinct ?entry (group_concat(distinct str(?gomflab); SEPARATOR = \",\") as ?gomfx) WHERE {\n\tSERVICE <https://idsm.elixir-czech.cz/sparql/endpoint/idsm> {\n\t\tSERVICE <https://idsm.elixir-czech.cz/sparql/endpoint/cco> {\n\t\t ?compound sachem:substructureSearch [ sachem:query \"CC12CCC3C(C1CCC2O)CCC4=C3C=CC(=C4)O\" ] . # smiles chain for estradiol\n\t\t}\n\t\t?ACTIVITY rdf:type cco:Activity;\n\t\tcco:hasMolecule ?compound;\n\t\tcco:hasAssay ?ASSAY.\n\t\t?ASSAY cco:hasTarget ?TARGET.\n\t\t?TARGET cco:hasTargetComponent ?COMPONENT.\n\t\t?TARGET cco:taxonomy <http://identifiers.org/taxonomy/9606> . # human protein target\n\t\t?COMPONENT cco:targetCmptXref ?UNIPROT.\n\t\t#?UNIPROT rdf:type cco:UniprotRef.\n\t\tfilter(contains(str(?UNIPROT),\"uniprot\"))\n\t}\n\n\t?entry skos:exactMatch ?UNIPROT.\n\t?entry :isoform ?iso.\n\t?iso :goMolecularFunction / :term ?gomf .\n\t?gomf rdfs:label ?gomflab .\n}\n\nGROUP BY ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "SEPARATOR",
      "WHERE",
      "SERVICE",
      "CC",
      "ACTIVITY",
      "ASSAY",
      "TARGET",
      "COMPONENT",
      "UNIPROT",
      "GROUP",
      "BY"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00267",
    "slug": "neXtProt_NXQ_00267",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins binding estradiol and/or similar molecules (similarity search with SMILES), and their associated GO_MF terms",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX cco: <http://rdf.ebi.ac.uk/terms/chembl#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX sachem: <http://bioinfo.uochb.cas.cz/rdf/v1.0/sachem#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n\n\nSELECT distinct ?entry (group_concat(distinct str(?gomflab); SEPARATOR = \",\") as ?gomfx) WHERE {\n \t\tSERVICE <https://idsm.elixir-czech.cz/sparql/endpoint/idsm> {\n \t\tSERVICE <https://idsm.elixir-czech.cz/sparql/endpoint/cco> {\n \t\t?compound sachem:similarCompoundSearch [ sachem:query \"CC12CCC3C(C1CCC2O)CCC4=C3C=CC(=C4)O\" ] . # smiles chain for estradiol\n\t\t }\n\t\t \t\t?ACTIVITY rdf:type cco:Activity;\n\t\tcco:hasMolecule ?compound;\n cco:hasAssay ?ASSAY.\n\t\t ?ASSAY cco:hasTarget ?TARGET.\n\t\t ?TARGET cco:taxonomy <http://identifiers.org/taxonomy/9606> . # human protein target\n\t\t ?TARGET cco:hasTargetComponent ?COMPONENT.\n\t\t ?COMPONENT cco:targetCmptXref ?UNIPROT.\n\t\t filter(contains(str(?UNIPROT),\"uniprot\"))\n\t\t }\n\t?entry skos:exactMatch ?UNIPROT.\n\t?entry :isoform ?iso.\n\t?iso :goMolecularFunction / :term ?gomf .\n\t?gomf rdfs:label ?gomflab .\n}\ngroup by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "SEPARATOR",
      "WHERE",
      "SERVICE",
      "CC",
      "ACTIVITY",
      "ASSAY",
      "TARGET",
      "COMPONENT",
      "UNIPROT"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00268",
    "slug": "neXtProt_NXQ_00268",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00269",
    "slug": "neXtProt_NXQ_00269",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with associated cancer pathways in WikiPathways (via Disease Ontology classification)",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX wp: <http://vocabularies.wikipathways.org/wp#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry (str(?gen) as ?gene) ?pathwayname WHERE {\n SERVICE <https://sparql.wikipathways.org/sparql> {\n {?geneProduct a wp:Protein}\n union\n {?geneProduct a wp:GeneProduct}\n ?geneProduct rdfs:label ?genraw .\n bind (concat( \"\"^^xsd:string, ?genraw) as ?gen).\n filter(!regex(?gen,\"[ a-z-]\")). # ensures official gene names for subsequent neXtprot matching\n ?geneProduct dcterms:isPartOf ?pathway .\n ?pathway a wp:Pathway .\n ?pathway wp:organism ?organism .\n filter(contains(str(?organism),\"9606\")) # Human proteins\n ?pathway dcterms:title ?pathwayname .\n ?pathway wp:ontologyTag <http://purl.obolibrary.org/obo/DOID_162> . # Parent id for all cancers\n }\n ?entry a :Entry .\n ?entry :gene / :recommendedName / rdfs:label ?gen .\n}\norder by ?pathwayname",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SERVICE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00270",
    "slug": "neXtProt_NXQ_00270",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins belonging to Rett syndrome pathways, and their subcellular locations (GOLD)",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX wp: <http://vocabularies.wikipathways.org/wp#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nselect ?entry (str(?gen) AS ?gene) ?pathwayname (group_concat(distinct str(?loclab); SEPARATOR = \",\") as ?locs) WHERE {\n SERVICE <https://sparql.wikipathways.org/sparql> {\n\n {?geneProduct a wp:Protein}\n union\n {?geneProduct a wp:GeneProduct}\n\n ?geneProduct rdfs:label ?genraw .\n bind (concat( \"\"^^xsd:string, ?genraw) as ?gen).\n\n filter(!regex(?gen,\"[ a-z-]\")). # ensures official gene names for subsequent neXtprot matching\n ?geneProduct dcterms:isPartOf ?pathway .\n ?pathway a wp:Pathway .\n ?pathway wp:organism ?organism .\n filter(contains(str(?organism),\"9606\"))\n ?pathway dcterms:title ?pathwayname .\n filter(regex(?pathwayname,\"rett\",\"i\")).\n }\n ?entry a :Entry .\n ?entry :gene / :recommendedName / rdfs:label ?gen .\n ?entry :isoform ?iso.\n ?iso :cellularComponent ?locannot .\n ?locannot :term ?locterm .\n ?locterm rdfs:label ?loclab .\n ?locannot :evidence ?locev .\n ?locev :quality :GOLD .\n filter not exists {?locannot :negativeEvidence ?locev .}\n}\ngroup by ?entry ?gen ?pathwayname\norder by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "AS",
      "SEPARATOR",
      "WHERE",
      "SERVICE",
      "GOLD"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00271",
    "slug": "neXtProt_NXQ_00271",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Polymorphisms located on ACE2 and TMPRSS2 and affecting proteins’ activity, structure, PTM...",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot: <http://nextprot.org/rdf/entry/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT (str(?gn) as ?gene) ?pos (str(?snpac) as ?varid) (str(?orgaa) as ?orgAA) ?annot_type (str(?txt) as ?note) (str(?varaa) as ?varAA) ?freq where\n{\n values ?entry {nextprot:NX_Q9BYF1 nextprot:NX_O15393} # proteins of interest (ACE2, TMPRSS2)\n ?entry :gene /:recommendedName / rdfs:label ?gn.\n ?entry :isoform ?iso .\n ?iso :swissprotDisplayed true; :variant ?var .\n ?var :start ?pos ; :original ?orgaa; :variation ?varaa .\n optional {?var :evidence / :alleleFrequency ?freq .}\n ?var :evidence / :reference ?xref .\n ?iso :positionalAnnotation ?annot .\n optional {?annot rdfs:comment ?txt .}\n ?annot a ?annot_type .\n {\n ?annot :start ?pos; :end ?pos.\n filter not exists {?annot a :Variant. }\n filter not exists {?annot a :SequenceConflict. }\n }\n union\n {\n ?annot a :DisulfideBond.\n {?annot :start ?pos. }\n union\n {?annot :end ?pos. }\n }\n } order by ?entry ?pos",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00272",
    "slug": "neXtProt_NXQ_00272",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins involved in coronaviruses/SARS-CoV-2 pathways with associated medical information",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX wp: <http://vocabularies.wikipathways.org/wp#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry (str(?gen) AS ?gene) ?pathwayname (str(?discom) AS ?discom1) ?medsource WHERE {\n SERVICE <http://sparql.wikipathways.org/sparql> {\n {?geneProduct a wp:Protein}\n union\n {?geneProduct a wp:GeneProduct}\n\n ?geneProduct rdfs:label ?genraw .\n bind (concat( \"\"^^xsd:string, ?genraw) as ?gen).\n filter(!regex(?gen,\"[ a-z-]\")). # ensures official gene names for subsequent neXtprot matching\n\n ?geneProduct dcterms:isPartOf ?pathway .\n ?pathway a wp:Pathway .\n ?pathway wp:organism ?organism .\n filter(contains(str(?organism),\"9606\"))\n\n ?pathway dcterms:title ?pathwayname .\n filter(regex(?pathwayname,\"sars-cov-2\",\"i\")|| regex(?pathwayname,\"corona\",\"i\") ).\n }\n\n ?entry a :Entry .\n ?entry :gene / :recommendedName / rdfs:label ?gen .\n ?entry :isoform ?iso.\n ?iso :medical ?med.\n ?med rdfs:comment ?discom.\n ?med :evidence/:assignedBy ?medsource.\n}\norder by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "AS",
      "WHERE",
      "SERVICE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00276",
    "slug": "neXtProt_NXQ_00276",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Diseases/phenotypes associated with coding variants and associated publications for a given gene",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX ncit: <http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#>\nPREFIX sio: <http://semanticscience.org/resource/>\nPREFIX so: <http://purl.obolibrary.org/obo/SO_>\n\nSELECT DISTINCT ?entry (str(?umlsTerm) as ?umlsTermSTR) (str(?snpac) as ?varid) ?pos (str(?orgaa) as ?orgAA) (str(?varaa) as ?varAA) ?article WHERE {\n SERVICE <https://rdf.disgenet.org/sparql> {\n ?vda sio:SIO_000628 ?umls, ?variant .\n ?vda sio:SIO_000772 ?article .\n ?umls dcterms:title ?umlsTerm.\n {?umls a sio:SIO_010299 .} # disease\n union\n {?umls a sio:SIO_010056 .} # or phenotype\n ?variant a so:0001583 ; dcterms:title ?variantTitle . # Missense variant\n ?variant so:associated_with ?gene .\n ?gene a ncit:C16612; sio:SIO_010078 ?protein .\n ?gene sio:SIO_000205 ?gname.\n filter(contains(str(?gname),\"HBB\")) # Hemoglobin gene (NX_P68871)\n }\n\n BIND(IRI(replace(str(?protein),\"purl\",\"www\")) AS ?unipage) .\n ?entry :swissprotPage ?unipage .\n ?entry :isoform ?iso .\n ?iso :swissprotDisplayed true .\n ?iso :variant ?var .\n ?var :evidence /:reference ?xref .\n ?xref :provenance db:dbSNP; :accession ?snpac .\n ?var :start ?pos ; :original ?orgaa; :variation ?varaa .\n filter(contains(?snpac,str(?variantTitle))) # matches the exact same variant Disgenet returned\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "EVS",
      "SO_",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SERVICE",
      "HBB",
      "BIND",
      "IRI",
      "AS"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00278",
    "slug": "neXtProt_NXQ_00278",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Authors who have reported more than 25000 human protein-protein interactions ",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\n\nSELECT DISTINCT (str(?auth) AS ?auth1) (count (distinct ?itid) as ?itcnt) WHERE {\n ?entry :isoform / :binaryInteraction ?interaction.\n ?interaction :evidence / :reference ?publi .\n ?publi :author / :name ?auth .\n ?interaction :interactant ?interactant; :quality :GOLD; :entryAnnotationId ?itid.\n} group by ?auth having (count (distinct ?itid) > 25000)\norder by desc(?itcnt)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "AS",
      "WHERE",
      "GOLD"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00279",
    "slug": "neXtProt_NXQ_00279",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins for which an interaction mapping region is described for both interactants ",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry (str(?gen) AS ?gene) ?entry2 (str(?gen2) AS ?gene2) WHERE {\n ?entry :isoform ?iso; :gene / :recommendedName / rdfs:label ?gen .\n ?iso :interactionMapping / :interactant ?entry2.\n ?entry2 :gene / :recommendedName / rdfs:label ?gen2 .\n filter exists { ?entry2 :isoform / :interactionMapping / :interactant ?entry.}\n} order by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "AS",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00280",
    "slug": "neXtProt_NXQ_00280",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins interacting with at least 10 members of a protein family ",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry (str(?gen) as ?gene) (str(?xlab) as ?itfamily) ?itcnt ?membercnt ((xsd:float(?itcnt) / xsd:float(?membercnt)) as ?ratio) WHERE {\n {\n select ?xterm ?xlab (count(distinct ?member) as ?membercnt) WHERE {\n ?member :isoform? / :familyName /:term /:childOf ?xterm.\n ?xterm rdfs:label ?xlab .\n } group by ?xterm ?xlab\n }\n {\n select ?xterm ?entry ?gen (count (distinct ?interactant) as ?itcnt) WHERE {\n ?entry :isoform ?iso; :gene / :name / rdfs:label ?gen .\n ?iso :interaction ?it.\n ?it :quality :GOLD; :interactant ?interactant.\n ?interactant :familyName /:term /:childOf ?xterm .\n } group by ?xterm ?entry ?gen having (count (distinct ?interactant) >= 10)\n }\n}\norder by desc(?ratio)\nlimit 60",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "GOLD"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00281",
    "slug": "neXtProt_NXQ_00281",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Protein pairs with at least 50 common interactors (excluding keratins) ",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry ?gene ?entry2 ?gene2 ?commonitcnt ?sampleit WHERE {\n {\n SELECT DISTINCT ?entry (str(?gen) as ?gene) ?entry2 (str(?gen2) as ?gene2) (count (distinct ?commonpartner) as ?commonitcnt) (str(sample(?genit)) as ?sampleit) WHERE {\n ?entry :isoform / :interaction ?it1; :gene / :name / rdfs:label ?gen.\n ?it1 :quality :GOLD; :interactant ?commonpartner .\n ?entry2 :isoform / :interaction ?it2; :gene / :name / rdfs:label ?gen2.\n ?it2 :quality :GOLD;:interactant ?commonpartner .\n ?commonpartner :gene / :name / rdfs:label ?genit .\n filter(?entry != ?entry2)\n filter(!contains(?gen,\"KRT\") && !contains(?gen2,\"KRT\") && !contains(?genit,\"KRT\")) # remove sticky keratins\n} group by ?entry ?gen ?entry2 ?gen2 having (count (distinct ?commonpartner) >= 50) \t\t\t\t}\nfilter(substr(str(?entry),34) < substr(str(?entry2),34)) # ensures only one row by it pair\n}\norder by desc(?commonitcnt)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "GOLD",
      "KRT"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00282",
    "slug": "neXtProt_NXQ_00282",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with an interaction mapping encompassing a coiled coil or bZip region ",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry (str(?gen) as ?gene) ?itlen ?coilen (str(?gen2) as ?partnergene) WHERE {\n ?entry :isoform ?iso; :gene / :recommendedName / rdfs:label ?gen .\n ?iso :swissprotDisplayed true; :interactionMapping ?itmap .\n ?itmap :interactant ?entry2; :start ?its; :end ?ite .\n bind(?ite - ?its + 1 as ?itlen)\n ?entry2 :isoform? ?iso2; :gene / :recommendedName / rdfs:label ?gen2.\n ?iso2 :swissprotDisplayed true.\n {?iso :coiledCoilRegion ?coil . }\n union\n {?iso :region ?coil .\n ?coil :term nextprot_cv:DO-00078 # bzip\n }\n ?coil :start ?cs; :end ?ce .\n bind(?ce - ?cs + 1 as ?coilen)\n filter (?cs >= ?its -15 && ?ce <= ?ite + 15) # overlap\n filter(xsd:float(?itlen) / xsd:float(?coilen) < 2.0) # itlen no more than 2 coilen\n} order by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "DO"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00283",
    "slug": "neXtProt_NXQ_00283",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with no reported mitochondrial localization but interacting with 20 or more mitochondrial proteins ('gold' quality) ",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry (str(?gen) as ?gene) (count(distinct ?mitopartner) as ?mitcount) (count(distinct ?partner) as ?itcount) WHERE {\nvalues ?mitloc {nextprot_cv:GO_0005739 nextprot_cv:SL-0173} # GO and SL values for mitochondrion\n ?entry :isoform ?iso.\n ?entry :gene / :recommendedName / rdfs:label ?gen.\n filter not exists { ?iso :cellularComponent /:term / :childOf ?mitloc }\n ?iso :binaryInteraction ?it, ?it2.\n ?it :interactant ?mitopartner; :quality :GOLD .\n ?mitopartner :isoform / :cellularComponent ?loc .\n ?loc :quality :GOLD; :term / :childOf ?mitloc .\n ?it2 :interactant ?partner; :quality :GOLD .\n} group by ?entry ?gen ?mitcnt having (count(distinct ?mitopartner) >= 20)\norder by desc(?mitcnt)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "SL",
      "GO",
      "GOLD"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00284",
    "slug": "neXtProt_NXQ_00284",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00285",
    "slug": "neXtProt_NXQ_00285",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00286",
    "slug": "neXtProt_NXQ_00286",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Protein domains or regions that frequently occur in interaction mappings",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT (str(?rlab) as ?rlab1) (count(distinct ?itid) as ?itcnt) WHERE {\n ?entry :isoform ?iso; :gene / :name / rdfs:label ?gen .\n ?iso :swissprotDisplayed true; :interactionMapping ?itmap .\n ?itmap :entryAnnotationId ?itid; :start ?its; :end ?ite .\n bind(?ite - ?its + 1 as ?itlen)\n ?iso :region ?reg .\n ?reg :start ?rs; :end ?re; :term ?rterm .\n ?rterm rdfs:label ?rlab .\n bind(?re - ?rs + 1 as ?rlen)\n filter (?rs >= ?its - 15 && ?re <= ?ite + 15)\n filter(xsd:float(?itlen) / xsd:float(?rlen) < 2.0)\n} group by ?rlab having(count(distinct ?itid) >= 10)\norder by desc(?itcnt)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00287",
    "slug": "neXtProt_NXQ_00287",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with interactions obtained from x-ray crystallography",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :isoform ?iso.\n ?iso :binaryInteraction /:evidence ?ev.\n ?ev :interactionDetectionMethod nextprot_cv:MI_0114. # x-ray crystallography\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00288",
    "slug": "neXtProt_NXQ_00288",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Biological Process and Molecular Function GO terms related to UniPathway metabolic pathways",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT (str(?pathwayname) as ?unipathway) ?related (str(?pathlabel) as ?GO_BP) (str(?pathlabel2) as ?GO_MF) WHERE {\n ?entry :isoform ?iso.\n ?iso :pathway ?pathannot .\n ?pathannot :term ?pathterm; rdfs:comment ?pathwayname.\n ?pathterm :related ?related .\n {?related a :GoBiologicalProcessCv ; rdfs:label ?pathlabel .}\n UNION\n {?related a :GoMolecularFunctionCv ; rdfs:label ?pathlabel2 .}\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "GO_BP",
      "GO_MF",
      "WHERE",
      "UNION"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00289",
    "slug": "neXtProt_NXQ_00289",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "KEGG and Reactome pathway names",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX source: <http://nextprot.org/rdf/source/>\n\nSELECT DISTINCT ?src (str(?pathwayname) as ?pw) WHERE {\n ?entry :isoform / :pathway ?pathannot .\n ?pathannot rdfs:comment ?pathwayname; :evidence / :assignedBy ?src.\n filter(?src = source:Reactome || ?src = source:KEGG_PTW)\n} order by ?pathwayname",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KEGG_PTW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00290",
    "slug": "neXtProt_NXQ_00290",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins that are enzymes requiring the cofactor Ca(2+) and with a calcium binding site",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\nSELECT DISTINCT ?entry (str(?name) as ?prot_name) (str(?ec) as ?ecs) where\n\n{ ?entry :recommendedName ?name_entity .\n ?name_entity a :ProteinName; rdfs:label ?name.\n ?entry :isoform ?iso.\n ?iso :enzymeClassification /rdfs:comment ?ec.\n ?iso :cofactor /:interactant /skos:exactMatch CHEBI:29108. # Ca(2+) cofactor\n ?iso :bindingSite /:interactant ?inter.\n ?inter :accession \"CHEBI:29108\"^^xsd:string # binding site interactant Ca(2+)\n}\norder by asc(?ec)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "CHEBI",
      "CHEBI_",
      "SELECT",
      "DISTINCT"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00291",
    "slug": "neXtProt_NXQ_00291",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00292",
    "slug": "neXtProt_NXQ_00292",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00293",
    "slug": "neXtProt_NXQ_00293",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00294",
    "slug": "neXtProt_NXQ_00294",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Variants in MECP2 causing Rett Syndrome",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot: <http://nextprot.org/rdf/entry/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?start ?stop ?original ?modified WHERE {\n nextprot:NX_P51608 :isoform ?iso. #MECP2 entry\n ?iso :swissprotDisplayed true. #Swissprot canonical isoform\n {\n ?iso :variant ?v.\n ?v :disease nextprot_cv:DI-00999. #UniProtKB term for Rett Syndrome\n ?v :start ?start.\n ?v :end ?stop.\n filter((?stop - ?start) = 0) #single amino acid variants (SAAVs)\n ?v :original ?original.\n ?v :variation ?modified.\n }\n union\n {\n ?iso :proteoform ?pf.\n ?pf :diseaseRelatedVariant ?ann.\n filter not exists {?ann :negativeEvidence ?negev} # No negative disease evidence\n ?ann :impactedObject /:term nextprot_cv:C75488. #NCI Thesaurus term for Rett Syndrome\n ?pf :difference ?v.\n ?v :start ?start.\n ?v :end ?stop.\n filter((?stop - ?start) = 0)\n ?v :original ?original.\n ?v :variation ?modified.\n }\n}\norder by asc(?start)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "DI",
      "NCI"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00295",
    "slug": "neXtProt_NXQ_00295",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "References for SCN1A variants causing Dravet syndrome",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\nPREFIX nextprot: <http://nextprot.org/rdf/entry/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT (str(?publiid) as ?PMID) ?title WHERE {\n nextprot:NX_P35498 :isoform ?iso. #SCN1A entry\n ?iso :swissprotDisplayed true. #Swissprot canonical isoform\n {\n ?iso :variant ?v.\n ?v :disease nextprot_cv:DI-01023. #UniProtKB term for Dravet syndrome\n ?v :evidence /:reference ?pub.\n ?pub :title ?title.\n ?pub :from ?xref .\n ?xref :accession ?publiid ; :provenance db:PubMed .\n }\n union\n {\n ?iso :proteoform ?pf.\n ?pf :diseaseRelatedVariant ?ann.\n filter not exists {?ann :negativeEvidence ?negev} # No negative disease evidence\n ?ann :impactedObject /:term nextprot_cv:C116573. #NCI Thesaurus term for Dravet syndrome\n ?ann :evidence /:reference ?pub.\n ?pub :title ?title.\n ?pub :from ?xref .\n ?xref :accession ?publiid ; :provenance db:PubMed .\n }\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "PMID",
      "WHERE",
      "DI",
      "NCI"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00296",
    "slug": "neXtProt_NXQ_00296",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Pathways in which SCN1A GOLD interactants are involved",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot: <http://nextprot.org/rdf/entry/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?pathway WHERE {\n nextprot:NX_P35498 :isoform /:binaryInteraction ?interaction.\n ?interaction :interactant ?entry; :quality :GOLD.\n ?entry a :Entry.\n ?entry :isoform /:pathway /rdfs:comment ?pathway.\n}\norder by asc(?pathway)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "GOLD"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00297",
    "slug": "neXtProt_NXQ_00297",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "PDB structures spanning the complete sequence of the mature protein",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\n\nselect ?entry (group_concat(distinct str(?pdbac); SEPARATOR = \",\") as ?pdbacs) WHERE {\n ?entry :isoform ?iso.\n ?iso :pdbMapping ?pdbmap.\n ?pdbmap :evidence /:reference ?ref.\n ?ref :provenance db:PDB.\n ?ref :accession ?pdbac.\n ?pdbmap :start ?pdbstart ; :end ?pdbend.\n ?iso :matureProtein [ :start ?mstart ; :end ?mend]\n filter (?mend-?mstart > 0)\n filter ((?pdbstart <= ?mstart) && (?pdbend >= ?mend))\n} group by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SEPARATOR",
      "WHERE",
      "PDB"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00298",
    "slug": "neXtProt_NXQ_00298",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Recommended isoform names for MSH6",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot: <http://nextprot.org/rdf/entry/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?iso ?name WHERE {\n nextprot:NX_P52701 :isoform ?iso. # MSH6 entry\n ?iso :recommendedName ?name_entity .\n ?name_entity a :IsoformName; rdfs:label ?name.\n}\norder by asc(?iso)",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00299",
    "slug": "neXtProt_NXQ_00299",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins interacting with small molecules according to DrugBank",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX db: <http://nextprot.org/rdf/db/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?entry (group_concat(distinct str(?lbl); SEPARATOR = \";\") as ?mol) WHERE {\n ?entry :isoform / :smallMoleculeInteraction / :interactant ?ref .\n ?ref :provenance db:DrugBank.\n ?ref rdfs:label ?lbl.\n}\ngroup by ?entry",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "SEPARATOR",
      "WHERE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00300",
    "slug": "neXtProt_NXQ_00300",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Proteins with protein existence \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\nPREFIX orthodb: <http://purl.orthodb.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nselect ?entry (str(?name) as ?human_name) (group_concat(distinct str(?fly_name); SEPARATOR = \",\") as ?fly_names) where\n{\n?entry :isoform ?iso.\n?entry :gene / :recommendedName / rdfs:label ?name.\n?entry :existence :Evidence_at_protein_level .\nfilter not exists { ?iso :functionInfo ?_. }\nfilter not exists { ?iso :catalyticActivity ?_ .}\nfilter not exists { ?iso :transportActivity ?_ .}\nfilter not exists { ?iso :pathway ?_. }\nfilter not exists { ?iso :function / :term ?fterm . filter(?fterm != nextprot_cv:GO_0005524 && ?fterm != nextprot_cv:GO_0000287 && ?fterm != nextprot_cv:GO_0005515 && ?fterm != nextprot_cv:GO_0042802 && ?fterm != nextprot_cv:GO_0008270 && ?fterm != nextprot_cv:GO_0051260 && ?fterm != nextprot_cv:GO_0005509 && ?fterm != nextprot_cv:GO_0003676 && ?fterm != nextprot_cv:GO_0003824 && ?fterm != nextprot_cv:GO_0007165 && ?fterm != nextprot_cv:GO_0035556 && ?fterm != nextprot_cv:GO_0046914 && ?fterm != nextprot_cv:GO_0046872)}\n?iso :expression ?e1.\n?e1 :term/:childOf nextprot_cv:TS-0095;:evidence/:observedExpression :High.\n{\nSERVICE <https://sparql.orthodb.org/sparql>\n{?gene rdfs:seeAlso ?entry; orthodb:memberOf ?og.\n?og orthodb:ogBuiltAt [up:scientificName ?clade]\n; orthodb:hasMember ?ortholog.\n?ortholog orthodb:name ?fly_name; up:organism/a/up:scientificName 'Drosophila melanogaster'.\nfilter (?clade='Metazoa') }\n}\n} group by ?entry ?name",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SEPARATOR",
      "TS",
      "SERVICE"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00301",
    "slug": "neXtProt_NXQ_00301",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "PE1 entries that comply with HPP guidelines (at least 2 non overlapping peptides of at least 9aa from a single data source)",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :existence :Evidence_at_protein_level .\n ?entry :isoform / :uniprotKeyword / :term nextprot_cv:KW-1267.\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 00302",
    "slug": "neXtProt_NXQ_00302",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "PE1 entries that do not comply with HPP guidelines (at least 2 non overlapping peptides of at least 9aa from a single data source)",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://nextprot.org/rdf/>\nPREFIX nextprot_cv: <http://nextprot.org/rdf/terminology/>\n\nSELECT DISTINCT ?entry WHERE {\n ?entry :existence :Evidence_at_protein_level .\n ?entry :isoform ?iso.\n filter not exists { ?iso :uniprotKeyword / :term nextprot_cv:KW-1267.}\n}",
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "KW"
    ],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09000",
    "slug": "neXtProt_NXQ_09000",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09001",
    "slug": "neXtProt_NXQ_09001",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09002",
    "slug": "neXtProt_NXQ_09002",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09003",
    "slug": "neXtProt_NXQ_09003",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09004",
    "slug": "neXtProt_NXQ_09004",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09005",
    "slug": "neXtProt_NXQ_09005",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09006",
    "slug": "neXtProt_NXQ_09006",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09007",
    "slug": "neXtProt_NXQ_09007",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09008",
    "slug": "neXtProt_NXQ_09008",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09009",
    "slug": "neXtProt_NXQ_09009",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09010",
    "slug": "neXtProt_NXQ_09010",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09011",
    "slug": "neXtProt_NXQ_09011",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09012",
    "slug": "neXtProt_NXQ_09012",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09013",
    "slug": "neXtProt_NXQ_09013",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09014",
    "slug": "neXtProt_NXQ_09014",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09015",
    "slug": "neXtProt_NXQ_09015",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09016",
    "slug": "neXtProt_NXQ_09016",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09017",
    "slug": "neXtProt_NXQ_09017",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09018",
    "slug": "neXtProt_NXQ_09018",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09019",
    "slug": "neXtProt_NXQ_09019",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09020",
    "slug": "neXtProt_NXQ_09020",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09021",
    "slug": "neXtProt_NXQ_09021",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09022",
    "slug": "neXtProt_NXQ_09022",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09023",
    "slug": "neXtProt_NXQ_09023",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09024",
    "slug": "neXtProt_NXQ_09024",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09025",
    "slug": "neXtProt_NXQ_09025",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09026",
    "slug": "neXtProt_NXQ_09026",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09027",
    "slug": "neXtProt_NXQ_09027",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09028",
    "slug": "neXtProt_NXQ_09028",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09029",
    "slug": "neXtProt_NXQ_09029",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09030",
    "slug": "neXtProt_NXQ_09030",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09031",
    "slug": "neXtProt_NXQ_09031",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09032",
    "slug": "neXtProt_NXQ_09032",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09033",
    "slug": "neXtProt_NXQ_09033",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09034",
    "slug": "neXtProt_NXQ_09034",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09035",
    "slug": "neXtProt_NXQ_09035",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09036",
    "slug": "neXtProt_NXQ_09036",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09037",
    "slug": "neXtProt_NXQ_09037",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09038",
    "slug": "neXtProt_NXQ_09038",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09039",
    "slug": "neXtProt_NXQ_09039",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09040",
    "slug": "neXtProt_NXQ_09040",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09041",
    "slug": "neXtProt_NXQ_09041",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09042",
    "slug": "neXtProt_NXQ_09042",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09043",
    "slug": "neXtProt_NXQ_09043",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09044",
    "slug": "neXtProt_NXQ_09044",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09045",
    "slug": "neXtProt_NXQ_09045",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09046",
    "slug": "neXtProt_NXQ_09046",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09047",
    "slug": "neXtProt_NXQ_09047",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09048",
    "slug": "neXtProt_NXQ_09048",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09049",
    "slug": "neXtProt_NXQ_09049",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09050",
    "slug": "neXtProt_NXQ_09050",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09051",
    "slug": "neXtProt_NXQ_09051",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09052",
    "slug": "neXtProt_NXQ_09052",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09053",
    "slug": "neXtProt_NXQ_09053",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09054",
    "slug": "neXtProt_NXQ_09054",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09055",
    "slug": "neXtProt_NXQ_09055",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09056",
    "slug": "neXtProt_NXQ_09056",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09057",
    "slug": "neXtProt_NXQ_09057",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09058",
    "slug": "neXtProt_NXQ_09058",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09059",
    "slug": "neXtProt_NXQ_09059",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09060",
    "slug": "neXtProt_NXQ_09060",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09061",
    "slug": "neXtProt_NXQ_09061",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09062",
    "slug": "neXtProt_NXQ_09062",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09063",
    "slug": "neXtProt_NXQ_09063",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09064",
    "slug": "neXtProt_NXQ_09064",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09065",
    "slug": "neXtProt_NXQ_09065",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09066",
    "slug": "neXtProt_NXQ_09066",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09067",
    "slug": "neXtProt_NXQ_09067",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09068",
    "slug": "neXtProt_NXQ_09068",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09069",
    "slug": "neXtProt_NXQ_09069",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09070",
    "slug": "neXtProt_NXQ_09070",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09071",
    "slug": "neXtProt_NXQ_09071",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09072",
    "slug": "neXtProt_NXQ_09072",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09073",
    "slug": "neXtProt_NXQ_09073",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09074",
    "slug": "neXtProt_NXQ_09074",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09075",
    "slug": "neXtProt_NXQ_09075",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09076",
    "slug": "neXtProt_NXQ_09076",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09077",
    "slug": "neXtProt_NXQ_09077",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09078",
    "slug": "neXtProt_NXQ_09078",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09079",
    "slug": "neXtProt_NXQ_09079",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09080",
    "slug": "neXtProt_NXQ_09080",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09081",
    "slug": "neXtProt_NXQ_09081",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09082",
    "slug": "neXtProt_NXQ_09082",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09083",
    "slug": "neXtProt_NXQ_09083",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09084",
    "slug": "neXtProt_NXQ_09084",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09085",
    "slug": "neXtProt_NXQ_09085",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09086",
    "slug": "neXtProt_NXQ_09086",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09087",
    "slug": "neXtProt_NXQ_09087",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09088",
    "slug": "neXtProt_NXQ_09088",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09089",
    "slug": "neXtProt_NXQ_09089",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09090",
    "slug": "neXtProt_NXQ_09090",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09091",
    "slug": "neXtProt_NXQ_09091",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09092",
    "slug": "neXtProt_NXQ_09092",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09093",
    "slug": "neXtProt_NXQ_09093",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09094",
    "slug": "neXtProt_NXQ_09094",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09095",
    "slug": "neXtProt_NXQ_09095",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09096",
    "slug": "neXtProt_NXQ_09096",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09097",
    "slug": "neXtProt_NXQ_09097",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09098",
    "slug": "neXtProt_NXQ_09098",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09099",
    "slug": "neXtProt_NXQ_09099",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09100",
    "slug": "neXtProt_NXQ_09100",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09101",
    "slug": "neXtProt_NXQ_09101",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09102",
    "slug": "neXtProt_NXQ_09102",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09103",
    "slug": "neXtProt_NXQ_09103",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09104",
    "slug": "neXtProt_NXQ_09104",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09105",
    "slug": "neXtProt_NXQ_09105",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09106",
    "slug": "neXtProt_NXQ_09106",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09107",
    "slug": "neXtProt_NXQ_09107",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09108",
    "slug": "neXtProt_NXQ_09108",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09109",
    "slug": "neXtProt_NXQ_09109",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09110",
    "slug": "neXtProt_NXQ_09110",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09111",
    "slug": "neXtProt_NXQ_09111",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09112",
    "slug": "neXtProt_NXQ_09112",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09113",
    "slug": "neXtProt_NXQ_09113",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09114",
    "slug": "neXtProt_NXQ_09114",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09115",
    "slug": "neXtProt_NXQ_09115",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09117",
    "slug": "neXtProt_NXQ_09117",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09119",
    "slug": "neXtProt_NXQ_09119",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09120",
    "slug": "neXtProt_NXQ_09120",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09121",
    "slug": "neXtProt_NXQ_09121",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09122",
    "slug": "neXtProt_NXQ_09122",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09123",
    "slug": "neXtProt_NXQ_09123",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09124",
    "slug": "neXtProt_NXQ_09124",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09125",
    "slug": "neXtProt_NXQ_09125",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09126",
    "slug": "neXtProt_NXQ_09126",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09127",
    "slug": "neXtProt_NXQ_09127",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09128",
    "slug": "neXtProt_NXQ_09128",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09129",
    "slug": "neXtProt_NXQ_09129",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09130",
    "slug": "neXtProt_NXQ_09130",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09131",
    "slug": "neXtProt_NXQ_09131",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09132",
    "slug": "neXtProt_NXQ_09132",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09133",
    "slug": "neXtProt_NXQ_09133",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09134",
    "slug": "neXtProt_NXQ_09134",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09135",
    "slug": "neXtProt_NXQ_09135",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09136",
    "slug": "neXtProt_NXQ_09136",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09137",
    "slug": "neXtProt_NXQ_09137",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09138",
    "slug": "neXtProt_NXQ_09138",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09139",
    "slug": "neXtProt_NXQ_09139",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09140",
    "slug": "neXtProt_NXQ_09140",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09141",
    "slug": "neXtProt_NXQ_09141",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09142",
    "slug": "neXtProt_NXQ_09142",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09143",
    "slug": "neXtProt_NXQ_09143",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09144",
    "slug": "neXtProt_NXQ_09144",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09145",
    "slug": "neXtProt_NXQ_09145",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09146",
    "slug": "neXtProt_NXQ_09146",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09147",
    "slug": "neXtProt_NXQ_09147",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09148",
    "slug": "neXtProt_NXQ_09148",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09149",
    "slug": "neXtProt_NXQ_09149",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09150",
    "slug": "neXtProt_NXQ_09150",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09151",
    "slug": "neXtProt_NXQ_09151",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09152",
    "slug": "neXtProt_NXQ_09152",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09153",
    "slug": "neXtProt_NXQ_09153",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09154",
    "slug": "neXtProt_NXQ_09154",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09155",
    "slug": "neXtProt_NXQ_09155",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09156",
    "slug": "neXtProt_NXQ_09156",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09157",
    "slug": "neXtProt_NXQ_09157",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09158",
    "slug": "neXtProt_NXQ_09158",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09159",
    "slug": "neXtProt_NXQ_09159",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09160",
    "slug": "neXtProt_NXQ_09160",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09161",
    "slug": "neXtProt_NXQ_09161",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09162",
    "slug": "neXtProt_NXQ_09162",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09163",
    "slug": "neXtProt_NXQ_09163",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09164",
    "slug": "neXtProt_NXQ_09164",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09165",
    "slug": "neXtProt_NXQ_09165",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09166",
    "slug": "neXtProt_NXQ_09166",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09167",
    "slug": "neXtProt_NXQ_09167",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09168",
    "slug": "neXtProt_NXQ_09168",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09169",
    "slug": "neXtProt_NXQ_09169",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09170",
    "slug": "neXtProt_NXQ_09170",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09171",
    "slug": "neXtProt_NXQ_09171",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09172",
    "slug": "neXtProt_NXQ_09172",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09173",
    "slug": "neXtProt_NXQ_09173",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09174",
    "slug": "neXtProt_NXQ_09174",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09175",
    "slug": "neXtProt_NXQ_09175",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09176",
    "slug": "neXtProt_NXQ_09176",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09177",
    "slug": "neXtProt_NXQ_09177",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09178",
    "slug": "neXtProt_NXQ_09178",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09179",
    "slug": "neXtProt_NXQ_09179",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09180",
    "slug": "neXtProt_NXQ_09180",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09181",
    "slug": "neXtProt_NXQ_09181",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09182",
    "slug": "neXtProt_NXQ_09182",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09183",
    "slug": "neXtProt_NXQ_09183",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09184",
    "slug": "neXtProt_NXQ_09184",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09185",
    "slug": "neXtProt_NXQ_09185",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09186",
    "slug": "neXtProt_NXQ_09186",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09187",
    "slug": "neXtProt_NXQ_09187",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09188",
    "slug": "neXtProt_NXQ_09188",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09189",
    "slug": "neXtProt_NXQ_09189",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09190",
    "slug": "neXtProt_NXQ_09190",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09191",
    "slug": "neXtProt_NXQ_09191",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09192",
    "slug": "neXtProt_NXQ_09192",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09193",
    "slug": "neXtProt_NXQ_09193",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09194",
    "slug": "neXtProt_NXQ_09194",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09195",
    "slug": "neXtProt_NXQ_09195",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09196",
    "slug": "neXtProt_NXQ_09196",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09197",
    "slug": "neXtProt_NXQ_09197",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09198",
    "slug": "neXtProt_NXQ_09198",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09199",
    "slug": "neXtProt_NXQ_09199",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09200",
    "slug": "neXtProt_NXQ_09200",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09201",
    "slug": "neXtProt_NXQ_09201",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09202",
    "slug": "neXtProt_NXQ_09202",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09203",
    "slug": "neXtProt_NXQ_09203",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09204",
    "slug": "neXtProt_NXQ_09204",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09205",
    "slug": "neXtProt_NXQ_09205",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09206",
    "slug": "neXtProt_NXQ_09206",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09207",
    "slug": "neXtProt_NXQ_09207",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09208",
    "slug": "neXtProt_NXQ_09208",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09209",
    "slug": "neXtProt_NXQ_09209",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09210",
    "slug": "neXtProt_NXQ_09210",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09211",
    "slug": "neXtProt_NXQ_09211",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09212",
    "slug": "neXtProt_NXQ_09212",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09213",
    "slug": "neXtProt_NXQ_09213",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09214",
    "slug": "neXtProt_NXQ_09214",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09215",
    "slug": "neXtProt_NXQ_09215",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09216",
    "slug": "neXtProt_NXQ_09216",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09217",
    "slug": "neXtProt_NXQ_09217",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09218",
    "slug": "neXtProt_NXQ_09218",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09219",
    "slug": "neXtProt_NXQ_09219",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09220",
    "slug": "neXtProt_NXQ_09220",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09221",
    "slug": "neXtProt_NXQ_09221",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09222",
    "slug": "neXtProt_NXQ_09222",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09223",
    "slug": "neXtProt_NXQ_09223",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09224",
    "slug": "neXtProt_NXQ_09224",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09225",
    "slug": "neXtProt_NXQ_09225",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09226",
    "slug": "neXtProt_NXQ_09226",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09227",
    "slug": "neXtProt_NXQ_09227",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09228",
    "slug": "neXtProt_NXQ_09228",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09229",
    "slug": "neXtProt_NXQ_09229",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09230",
    "slug": "neXtProt_NXQ_09230",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09231",
    "slug": "neXtProt_NXQ_09231",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09232",
    "slug": "neXtProt_NXQ_09232",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09233",
    "slug": "neXtProt_NXQ_09233",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09234",
    "slug": "neXtProt_NXQ_09234",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09235",
    "slug": "neXtProt_NXQ_09235",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09236",
    "slug": "neXtProt_NXQ_09236",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09237",
    "slug": "neXtProt_NXQ_09237",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09238",
    "slug": "neXtProt_NXQ_09238",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09239",
    "slug": "neXtProt_NXQ_09239",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09240",
    "slug": "neXtProt_NXQ_09240",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09241",
    "slug": "neXtProt_NXQ_09241",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09242",
    "slug": "neXtProt_NXQ_09242",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09243",
    "slug": "neXtProt_NXQ_09243",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09244",
    "slug": "neXtProt_NXQ_09244",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09245",
    "slug": "neXtProt_NXQ_09245",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09246",
    "slug": "neXtProt_NXQ_09246",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09247",
    "slug": "neXtProt_NXQ_09247",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09248",
    "slug": "neXtProt_NXQ_09248",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09249",
    "slug": "neXtProt_NXQ_09249",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09250",
    "slug": "neXtProt_NXQ_09250",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09251",
    "slug": "neXtProt_NXQ_09251",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09252",
    "slug": "neXtProt_NXQ_09252",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09253",
    "slug": "neXtProt_NXQ_09253",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09254",
    "slug": "neXtProt_NXQ_09254",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09255",
    "slug": "neXtProt_NXQ_09255",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09256",
    "slug": "neXtProt_NXQ_09256",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09257",
    "slug": "neXtProt_NXQ_09257",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09258",
    "slug": "neXtProt_NXQ_09258",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09259",
    "slug": "neXtProt_NXQ_09259",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09260",
    "slug": "neXtProt_NXQ_09260",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09261",
    "slug": "neXtProt_NXQ_09261",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09262",
    "slug": "neXtProt_NXQ_09262",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09263",
    "slug": "neXtProt_NXQ_09263",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09264",
    "slug": "neXtProt_NXQ_09264",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09265",
    "slug": "neXtProt_NXQ_09265",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09266",
    "slug": "neXtProt_NXQ_09266",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09267",
    "slug": "neXtProt_NXQ_09267",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09268",
    "slug": "neXtProt_NXQ_09268",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09269",
    "slug": "neXtProt_NXQ_09269",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09270",
    "slug": "neXtProt_NXQ_09270",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09271",
    "slug": "neXtProt_NXQ_09271",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09272",
    "slug": "neXtProt_NXQ_09272",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09273",
    "slug": "neXtProt_NXQ_09273",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09274",
    "slug": "neXtProt_NXQ_09274",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09275",
    "slug": "neXtProt_NXQ_09275",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09276",
    "slug": "neXtProt_NXQ_09276",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09277",
    "slug": "neXtProt_NXQ_09277",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09278",
    "slug": "neXtProt_NXQ_09278",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09279",
    "slug": "neXtProt_NXQ_09279",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09280",
    "slug": "neXtProt_NXQ_09280",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09281",
    "slug": "neXtProt_NXQ_09281",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09282",
    "slug": "neXtProt_NXQ_09282",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09283",
    "slug": "neXtProt_NXQ_09283",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09284",
    "slug": "neXtProt_NXQ_09284",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09285",
    "slug": "neXtProt_NXQ_09285",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09286",
    "slug": "neXtProt_NXQ_09286",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09287",
    "slug": "neXtProt_NXQ_09287",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09288",
    "slug": "neXtProt_NXQ_09288",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09289",
    "slug": "neXtProt_NXQ_09289",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09290",
    "slug": "neXtProt_NXQ_09290",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09291",
    "slug": "neXtProt_NXQ_09291",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09292",
    "slug": "neXtProt_NXQ_09292",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09293",
    "slug": "neXtProt_NXQ_09293",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09294",
    "slug": "neXtProt_NXQ_09294",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09295",
    "slug": "neXtProt_NXQ_09295",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09296",
    "slug": "neXtProt_NXQ_09296",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09297",
    "slug": "neXtProt_NXQ_09297",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09298",
    "slug": "neXtProt_NXQ_09298",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09299",
    "slug": "neXtProt_NXQ_09299",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09300",
    "slug": "neXtProt_NXQ_09300",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09301",
    "slug": "neXtProt_NXQ_09301",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09302",
    "slug": "neXtProt_NXQ_09302",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09303",
    "slug": "neXtProt_NXQ_09303",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09304",
    "slug": "neXtProt_NXQ_09304",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09305",
    "slug": "neXtProt_NXQ_09305",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09306",
    "slug": "neXtProt_NXQ_09306",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09307",
    "slug": "neXtProt_NXQ_09307",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09308",
    "slug": "neXtProt_NXQ_09308",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09309",
    "slug": "neXtProt_NXQ_09309",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09310",
    "slug": "neXtProt_NXQ_09310",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09311",
    "slug": "neXtProt_NXQ_09311",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09312",
    "slug": "neXtProt_NXQ_09312",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09313",
    "slug": "neXtProt_NXQ_09313",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09314",
    "slug": "neXtProt_NXQ_09314",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09315",
    "slug": "neXtProt_NXQ_09315",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09316",
    "slug": "neXtProt_NXQ_09316",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09317",
    "slug": "neXtProt_NXQ_09317",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09318",
    "slug": "neXtProt_NXQ_09318",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09319",
    "slug": "neXtProt_NXQ_09319",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09320",
    "slug": "neXtProt_NXQ_09320",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09321",
    "slug": "neXtProt_NXQ_09321",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09322",
    "slug": "neXtProt_NXQ_09322",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09323",
    "slug": "neXtProt_NXQ_09323",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09324",
    "slug": "neXtProt_NXQ_09324",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09325",
    "slug": "neXtProt_NXQ_09325",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09326",
    "slug": "neXtProt_NXQ_09326",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09327",
    "slug": "neXtProt_NXQ_09327",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09328",
    "slug": "neXtProt_NXQ_09328",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09329",
    "slug": "neXtProt_NXQ_09329",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09330",
    "slug": "neXtProt_NXQ_09330",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09331",
    "slug": "neXtProt_NXQ_09331",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09332",
    "slug": "neXtProt_NXQ_09332",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09333",
    "slug": "neXtProt_NXQ_09333",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09334",
    "slug": "neXtProt_NXQ_09334",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09335",
    "slug": "neXtProt_NXQ_09335",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09336",
    "slug": "neXtProt_NXQ_09336",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09337",
    "slug": "neXtProt_NXQ_09337",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09338",
    "slug": "neXtProt_NXQ_09338",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09339",
    "slug": "neXtProt_NXQ_09339",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09340",
    "slug": "neXtProt_NXQ_09340",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09341",
    "slug": "neXtProt_NXQ_09341",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09342",
    "slug": "neXtProt_NXQ_09342",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09343",
    "slug": "neXtProt_NXQ_09343",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09344",
    "slug": "neXtProt_NXQ_09344",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09345",
    "slug": "neXtProt_NXQ_09345",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09346",
    "slug": "neXtProt_NXQ_09346",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09347",
    "slug": "neXtProt_NXQ_09347",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09348",
    "slug": "neXtProt_NXQ_09348",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09349",
    "slug": "neXtProt_NXQ_09349",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09350",
    "slug": "neXtProt_NXQ_09350",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09351",
    "slug": "neXtProt_NXQ_09351",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09352",
    "slug": "neXtProt_NXQ_09352",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09353",
    "slug": "neXtProt_NXQ_09353",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09354",
    "slug": "neXtProt_NXQ_09354",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09355",
    "slug": "neXtProt_NXQ_09355",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09356",
    "slug": "neXtProt_NXQ_09356",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09357",
    "slug": "neXtProt_NXQ_09357",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09358",
    "slug": "neXtProt_NXQ_09358",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09359",
    "slug": "neXtProt_NXQ_09359",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09360",
    "slug": "neXtProt_NXQ_09360",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09361",
    "slug": "neXtProt_NXQ_09361",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09362",
    "slug": "neXtProt_NXQ_09362",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09363",
    "slug": "neXtProt_NXQ_09363",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09364",
    "slug": "neXtProt_NXQ_09364",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09365",
    "slug": "neXtProt_NXQ_09365",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09366",
    "slug": "neXtProt_NXQ_09366",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09367",
    "slug": "neXtProt_NXQ_09367",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09368",
    "slug": "neXtProt_NXQ_09368",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09369",
    "slug": "neXtProt_NXQ_09369",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09370",
    "slug": "neXtProt_NXQ_09370",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09371",
    "slug": "neXtProt_NXQ_09371",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09372",
    "slug": "neXtProt_NXQ_09372",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09373",
    "slug": "neXtProt_NXQ_09373",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09374",
    "slug": "neXtProt_NXQ_09374",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09375",
    "slug": "neXtProt_NXQ_09375",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09376",
    "slug": "neXtProt_NXQ_09376",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09377",
    "slug": "neXtProt_NXQ_09377",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09378",
    "slug": "neXtProt_NXQ_09378",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09379",
    "slug": "neXtProt_NXQ_09379",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09380",
    "slug": "neXtProt_NXQ_09380",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09381",
    "slug": "neXtProt_NXQ_09381",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09382",
    "slug": "neXtProt_NXQ_09382",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09383",
    "slug": "neXtProt_NXQ_09383",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09384",
    "slug": "neXtProt_NXQ_09384",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09385",
    "slug": "neXtProt_NXQ_09385",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09386",
    "slug": "neXtProt_NXQ_09386",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09387",
    "slug": "neXtProt_NXQ_09387",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09388",
    "slug": "neXtProt_NXQ_09388",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09389",
    "slug": "neXtProt_NXQ_09389",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09390",
    "slug": "neXtProt_NXQ_09390",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09391",
    "slug": "neXtProt_NXQ_09391",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09392",
    "slug": "neXtProt_NXQ_09392",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09393",
    "slug": "neXtProt_NXQ_09393",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09394",
    "slug": "neXtProt_NXQ_09394",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09395",
    "slug": "neXtProt_NXQ_09395",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09396",
    "slug": "neXtProt_NXQ_09396",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09397",
    "slug": "neXtProt_NXQ_09397",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09398",
    "slug": "neXtProt_NXQ_09398",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09399",
    "slug": "neXtProt_NXQ_09399",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09400",
    "slug": "neXtProt_NXQ_09400",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09401",
    "slug": "neXtProt_NXQ_09401",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09402",
    "slug": "neXtProt_NXQ_09402",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09404",
    "slug": "neXtProt_NXQ_09404",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09405",
    "slug": "neXtProt_NXQ_09405",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09406",
    "slug": "neXtProt_NXQ_09406",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09407",
    "slug": "neXtProt_NXQ_09407",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09408",
    "slug": "neXtProt_NXQ_09408",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09409",
    "slug": "neXtProt_NXQ_09409",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09410",
    "slug": "neXtProt_NXQ_09410",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09411",
    "slug": "neXtProt_NXQ_09411",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09412",
    "slug": "neXtProt_NXQ_09412",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09413",
    "slug": "neXtProt_NXQ_09413",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09414",
    "slug": "neXtProt_NXQ_09414",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09415",
    "slug": "neXtProt_NXQ_09415",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09416",
    "slug": "neXtProt_NXQ_09416",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09417",
    "slug": "neXtProt_NXQ_09417",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09418",
    "slug": "neXtProt_NXQ_09418",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09419",
    "slug": "neXtProt_NXQ_09419",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09420",
    "slug": "neXtProt_NXQ_09420",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09421",
    "slug": "neXtProt_NXQ_09421",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09422",
    "slug": "neXtProt_NXQ_09422",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09423",
    "slug": "neXtProt_NXQ_09423",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09424",
    "slug": "neXtProt_NXQ_09424",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09425",
    "slug": "neXtProt_NXQ_09425",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09426",
    "slug": "neXtProt_NXQ_09426",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09427",
    "slug": "neXtProt_NXQ_09427",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09428",
    "slug": "neXtProt_NXQ_09428",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09429",
    "slug": "neXtProt_NXQ_09429",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09430",
    "slug": "neXtProt_NXQ_09430",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09431",
    "slug": "neXtProt_NXQ_09431",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09432",
    "slug": "neXtProt_NXQ_09432",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09433",
    "slug": "neXtProt_NXQ_09433",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09434",
    "slug": "neXtProt_NXQ_09434",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09435",
    "slug": "neXtProt_NXQ_09435",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09436",
    "slug": "neXtProt_NXQ_09436",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09437",
    "slug": "neXtProt_NXQ_09437",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09438",
    "slug": "neXtProt_NXQ_09438",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09439",
    "slug": "neXtProt_NXQ_09439",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09444",
    "slug": "neXtProt_NXQ_09444",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09445",
    "slug": "neXtProt_NXQ_09445",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09446",
    "slug": "neXtProt_NXQ_09446",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09447",
    "slug": "neXtProt_NXQ_09447",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09448",
    "slug": "neXtProt_NXQ_09448",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09449",
    "slug": "neXtProt_NXQ_09449",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09450",
    "slug": "neXtProt_NXQ_09450",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09451",
    "slug": "neXtProt_NXQ_09451",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09452",
    "slug": "neXtProt_NXQ_09452",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09453",
    "slug": "neXtProt_NXQ_09453",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09454",
    "slug": "neXtProt_NXQ_09454",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09455",
    "slug": "neXtProt_NXQ_09455",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09456",
    "slug": "neXtProt_NXQ_09456",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09457",
    "slug": "neXtProt_NXQ_09457",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09458",
    "slug": "neXtProt_NXQ_09458",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09459",
    "slug": "neXtProt_NXQ_09459",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09460",
    "slug": "neXtProt_NXQ_09460",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09461",
    "slug": "neXtProt_NXQ_09461",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09462",
    "slug": "neXtProt_NXQ_09462",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09463",
    "slug": "neXtProt_NXQ_09463",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09464",
    "slug": "neXtProt_NXQ_09464",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09465",
    "slug": "neXtProt_NXQ_09465",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09466",
    "slug": "neXtProt_NXQ_09466",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09467",
    "slug": "neXtProt_NXQ_09467",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09468",
    "slug": "neXtProt_NXQ_09468",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09469",
    "slug": "neXtProt_NXQ_09469",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09601",
    "slug": "neXtProt_NXQ_09601",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09602",
    "slug": "neXtProt_NXQ_09602",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09603",
    "slug": "neXtProt_NXQ_09603",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09604",
    "slug": "neXtProt_NXQ_09604",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09605",
    "slug": "neXtProt_NXQ_09605",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09606",
    "slug": "neXtProt_NXQ_09606",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09607",
    "slug": "neXtProt_NXQ_09607",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09608",
    "slug": "neXtProt_NXQ_09608",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09609",
    "slug": "neXtProt_NXQ_09609",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09610",
    "slug": "neXtProt_NXQ_09610",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09611",
    "slug": "neXtProt_NXQ_09611",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09612",
    "slug": "neXtProt_NXQ_09612",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09613",
    "slug": "neXtProt_NXQ_09613",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09614",
    "slug": "neXtProt_NXQ_09614",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09615",
    "slug": "neXtProt_NXQ_09615",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09616",
    "slug": "neXtProt_NXQ_09616",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09617",
    "slug": "neXtProt_NXQ_09617",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09619",
    "slug": "neXtProt_NXQ_09619",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09620",
    "slug": "neXtProt_NXQ_09620",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09621",
    "slug": "neXtProt_NXQ_09621",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09622",
    "slug": "neXtProt_NXQ_09622",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09623",
    "slug": "neXtProt_NXQ_09623",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09624",
    "slug": "neXtProt_NXQ_09624",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09625",
    "slug": "neXtProt_NXQ_09625",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09626",
    "slug": "neXtProt_NXQ_09626",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09627",
    "slug": "neXtProt_NXQ_09627",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09628",
    "slug": "neXtProt_NXQ_09628",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09629",
    "slug": "neXtProt_NXQ_09629",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09630",
    "slug": "neXtProt_NXQ_09630",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09631",
    "slug": "neXtProt_NXQ_09631",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09632",
    "slug": "neXtProt_NXQ_09632",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09633",
    "slug": "neXtProt_NXQ_09633",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09634",
    "slug": "neXtProt_NXQ_09634",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09635",
    "slug": "neXtProt_NXQ_09635",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09636",
    "slug": "neXtProt_NXQ_09636",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09637",
    "slug": "neXtProt_NXQ_09637",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09638",
    "slug": "neXtProt_NXQ_09638",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09639",
    "slug": "neXtProt_NXQ_09639",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09640",
    "slug": "neXtProt_NXQ_09640",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09641",
    "slug": "neXtProt_NXQ_09641",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09642",
    "slug": "neXtProt_NXQ_09642",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09643",
    "slug": "neXtProt_NXQ_09643",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09644",
    "slug": "neXtProt_NXQ_09644",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09645",
    "slug": "neXtProt_NXQ_09645",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09646",
    "slug": "neXtProt_NXQ_09646",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09647",
    "slug": "neXtProt_NXQ_09647",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09648",
    "slug": "neXtProt_NXQ_09648",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09649",
    "slug": "neXtProt_NXQ_09649",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09650",
    "slug": "neXtProt_NXQ_09650",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09651",
    "slug": "neXtProt_NXQ_09651",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09652",
    "slug": "neXtProt_NXQ_09652",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09653",
    "slug": "neXtProt_NXQ_09653",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09654",
    "slug": "neXtProt_NXQ_09654",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09655",
    "slug": "neXtProt_NXQ_09655",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09656",
    "slug": "neXtProt_NXQ_09656",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09657",
    "slug": "neXtProt_NXQ_09657",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09658",
    "slug": "neXtProt_NXQ_09658",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09659",
    "slug": "neXtProt_NXQ_09659",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09660",
    "slug": "neXtProt_NXQ_09660",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09661",
    "slug": "neXtProt_NXQ_09661",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09662",
    "slug": "neXtProt_NXQ_09662",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09663",
    "slug": "neXtProt_NXQ_09663",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09664",
    "slug": "neXtProt_NXQ_09664",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09665",
    "slug": "neXtProt_NXQ_09665",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09666",
    "slug": "neXtProt_NXQ_09666",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09667",
    "slug": "neXtProt_NXQ_09667",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09668",
    "slug": "neXtProt_NXQ_09668",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09669",
    "slug": "neXtProt_NXQ_09669",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09670",
    "slug": "neXtProt_NXQ_09670",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09671",
    "slug": "neXtProt_NXQ_09671",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09672",
    "slug": "neXtProt_NXQ_09672",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09673",
    "slug": "neXtProt_NXQ_09673",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09674",
    "slug": "neXtProt_NXQ_09674",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09675",
    "slug": "neXtProt_NXQ_09675",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09676",
    "slug": "neXtProt_NXQ_09676",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09677",
    "slug": "neXtProt_NXQ_09677",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09678",
    "slug": "neXtProt_NXQ_09678",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09679",
    "slug": "neXtProt_NXQ_09679",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09680",
    "slug": "neXtProt_NXQ_09680",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09681",
    "slug": "neXtProt_NXQ_09681",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09682",
    "slug": "neXtProt_NXQ_09682",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09683",
    "slug": "neXtProt_NXQ_09683",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09684",
    "slug": "neXtProt_NXQ_09684",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09685",
    "slug": "neXtProt_NXQ_09685",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09686",
    "slug": "neXtProt_NXQ_09686",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09687",
    "slug": "neXtProt_NXQ_09687",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09688",
    "slug": "neXtProt_NXQ_09688",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09689",
    "slug": "neXtProt_NXQ_09689",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09690",
    "slug": "neXtProt_NXQ_09690",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09691",
    "slug": "neXtProt_NXQ_09691",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09692",
    "slug": "neXtProt_NXQ_09692",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09693",
    "slug": "neXtProt_NXQ_09693",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09694",
    "slug": "neXtProt_NXQ_09694",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09695",
    "slug": "neXtProt_NXQ_09695",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09696",
    "slug": "neXtProt_NXQ_09696",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09697",
    "slug": "neXtProt_NXQ_09697",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09698",
    "slug": "neXtProt_NXQ_09698",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09699",
    "slug": "neXtProt_NXQ_09699",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09700",
    "slug": "neXtProt_NXQ_09700",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09701",
    "slug": "neXtProt_NXQ_09701",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ 09702",
    "slug": "neXtProt_NXQ_09702",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ DEREF 003",
    "slug": "neXtProt_NXQ_DEREF_003",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - NXQ DEREF 004",
    "slug": "neXtProt_NXQ_DEREF_004",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - convertNextProt",
    "slug": "neXtProt_convertNextProt",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - convertNextProt2",
    "slug": "neXtProt_convertNextProt2",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  },
  {
    "name": "neXtProt - prefixes",
    "slug": "neXtProt_prefixes",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "neXtProt"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss neXtProt"
  }
];