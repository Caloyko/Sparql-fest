export const Bgee = [
  {
    "name": "Bgee - 001",
    "slug": "Bgee_001",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the species present in Bgee?",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?species WHERE {\n    ?species a up:Taxon .\n    ?species up:rank up:Species .\n}",
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
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 002",
    "slug": "Bgee_002",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the species present in Bgee and their scientific and common names?",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT ?species ?sci_name ?common_name WHERE {\n    ?species a up:Taxon ;\n        up:scientificName ?sci_name ;\n        up:rank up:Species .\n    OPTIONAL { ?species up:commonName ?common_name . }\n}",
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
      "IF"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 003",
    "slug": "Bgee_003",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the anatomical entities where the APOC1 gene is expressed?",
    "context": null,
    "inidces": [],
    "query": "PREFIX genex: <http://purl.org/genex#>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?anat ?anatName WHERE {\n    ?seq a orth:Gene ;\n        genex:isExpressedIn ?anat ;\n        rdfs:label \"APOC1\" .\n    ?anat a genex:AnatomicalEntity ;\n        rdfs:label ?anatName .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 004",
    "slug": "Bgee_004",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the anatomical entities where the APOC1 Homo sapiens gene is expressed?",
    "context": null,
    "inidces": [],
    "query": "PREFIX genex: <http://purl.org/genex#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?geneName ?anat ?anatName WHERE {\n    ?seq a orth:Gene ;\n        genex:isExpressedIn ?anat ;\n        rdfs:label ?geneName .\n    ?anat a genex:AnatomicalEntity ;\n        rdfs:label ?anatName .\n    ?seq orth:organism ?organism .\n    ?organism obo:RO_0002162  ?species .\n    ?species a up:Taxon ;\n        up:scientificName \"Homo sapiens\" .\n    FILTER (LCASE(?geneName) = LCASE('APOC1') )\n}",
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
      "DISTINCT",
      "IF",
      "LCASE"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 005",
    "slug": "Bgee_005",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the anatomical entities where the APOC1 gene is expressed independently of the developmental stage, sex, strain and cell type?",
    "context": null,
    "inidces": [],
    "query": "PREFIX efo: <http://www.ebi.ac.uk/efo/>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?anat ?anatName {\n    ?seq a orth:Gene ;\n        genex:isExpressedIn ?condition ;\n        rdfs:label \"APOC1\" .\n    ?condition a genex:ExpressionCondition ;\n        genex:hasAnatomicalEntity ?anat ;\n        genex:hasAnatomicalEntity obo:GO_0005575 ;\n        genex:hasDevelopmentalStage ?stage ;\n        genex:hasSex \"any\" ;\n        genex:hasStrain ?strain .\n    ?anat a genex:AnatomicalEntity ;\n        rdfs:label ?anatName .\n    ?stage a efo:EFO_0000399 ;\n        rdfs:label \"life cycle\" .\n    ?strain rdfs:label \"wild-type\" .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "DISTINCT",
      "STR",
      "IF"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 006",
    "slug": "Bgee_006",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the anatomical entities where the human gene APOC1 is expressed in the post-juvenile stage?",
    "context": null,
    "inidces": [],
    "query": "PREFIX efo: <http://www.ebi.ac.uk/efo/>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?anatName ?anat ?stageName ?stage WHERE {\n    ?seq a orth:Gene ;\n        rdfs:label \"APOC1\" ;\n        genex:isExpressedIn ?condition ;\n        orth:organism ?organism .\n    ?condition a genex:ExpressionCondition ;\n        genex:hasAnatomicalEntity ?anat ;\n        genex:hasAnatomicalEntity obo:GO_0005575 ;\n        genex:hasDevelopmentalStage ?stage .\n    ?anat a genex:AnatomicalEntity ;\n        rdfs:label ?anatName .\n    ?stage a efo:EFO_0000399 ;\n        rdfs:label ?stageName .\n    ?organism obo:RO_0002162  ?species .\n    ?species a up:Taxon ;\n        up:commonName \"human\" .\n    FILTER (CONTAINS(LCASE(?stageName), 'post-juvenile' ))\n}",
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
      "DISTINCT",
      "LCASE",
      "CONTAINS"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 007",
    "slug": "Bgee_007",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the anatomical entities where the mouse gene APOC1 is expressed in the adult stages?",
    "context": null,
    "inidces": [],
    "query": "PREFIX efo: <http://www.ebi.ac.uk/efo/>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?geneName ?anatName ?anat ?stageName ?stage WHERE {\n    ?seq a orth:Gene ;\n        rdfs:label ?geneName ;\n        genex:isExpressedIn ?condition ;\n        orth:organism ?organism .\n    ?condition a genex:ExpressionCondition ;\n        genex:hasAnatomicalEntity ?anat ;\n        genex:hasAnatomicalEntity obo:GO_0005575 ;\n        genex:hasDevelopmentalStage ?stage .\n    ?anat a genex:AnatomicalEntity ;\n        rdfs:label ?anatName .\n    ?stage a efo:EFO_0000399 ; # developmental stage\n        rdfs:label ?stageName .\n    ?organism obo:RO_0002162 ?taxon . # in taxon\n    ?taxon a up:Taxon ;\n        up:commonName \"mouse\" .\n    FILTER (CONTAINS(LCASE(?stageName), 'adult' ))\n    FILTER (lcase(str(?geneName)) = \"apoc1\" ).\n}",
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
      "DISTINCT",
      "STR",
      "LCASE",
      "CONTAINS"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 008",
    "slug": "Bgee_008",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the anatomical entities where the human gene APOC1 is expressed at the post-juvenile stage along with its expression score independently of the strain, sex, and cell type?",
    "context": null,
    "inidces": [],
    "query": "PREFIX genex: <http://purl.org/genex#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?anat ?anatName ?score ?stage WHERE {\n    ?seq a orth:Gene ;\n        rdfs:label \"APOC1\" ;\n        orth:organism ?organism .\n    ?expression a genex:Expression ;\n        genex:hasExpressionCondition ?condition ;\n        genex:hasExpressionLevel ?score ;\n        genex:hasSequenceUnit ?seq .\n    ?condition a genex:ExpressionCondition ;\n        genex:hasAnatomicalEntity ?anat ;\n        genex:hasAnatomicalEntity obo:GO_0005575 ;\n        genex:hasDevelopmentalStage ?stage ;\n        genex:hasSex \"any\" ;\n        genex:hasStrain ?strain .\n    ?anat a genex:AnatomicalEntity ;\n        rdfs:label ?anatName .\n    ?stage rdfs:label ?stageName .\n    ?strain rdfs:label \"wild-type\" .\n    ?organism obo:RO_0002162  ?species .\n    ?species a up:Taxon ;\n        up:commonName \"human\" .\n    FILTER (?anat !=  obo:GO_0005575)\n    FILTER (CONTAINS(LCASE(?stageName), 'post-juvenile' ))\n} ORDER BY DESC(?score)",
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
      "ORDER BY",
      "DISTINCT",
      "STR",
      "LCASE",
      "CONTAINS"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 009",
    "slug": "Bgee_009",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the anatomical entities including cell types, if any, where the human gene APOC1 is expressed at the post-juvenile stage along with its expression score independently of the strain and sex?",
    "context": null,
    "inidces": [],
    "query": "PREFIX efo: <http://www.ebi.ac.uk/efo/>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?anat ?cellType ?anatName ?cellTypeName ?score ?stage WHERE {\n    ?seq a orth:Gene ;\n        rdfs:label \"APOC1\" ;\n        orth:organism ?organism .\n    ?expression a genex:Expression ;\n        genex:hasExpressionCondition ?condition ;\n        genex:hasExpressionLevel ?score ;\n        genex:hasSequenceUnit ?seq .\n    ?condition a genex:ExpressionCondition ;\n        genex:hasAnatomicalEntity ?anat ;\n        genex:hasAnatomicalEntity ?cellType ;\n        genex:hasDevelopmentalStage ?stage ;\n        genex:hasSex \"any\" ;\n        genex:hasStrain ?strain .\n    ?anat a genex:AnatomicalEntity ;\n        rdfs:label ?anatName .\n    ?cellType rdfs:label ?cellTypeName .\n    ?stage rdfs:label \"post-juvenile\" .\n    ?strain a efo:EFO_0005135 ;\n        rdfs:label \"wild-type\" .\n    ?organism obo:RO_0002162  ?species .\n    ?species a up:Taxon ;\n        up:commonName \"human\" .\n    FILTER (?anat != obo:GO_0005575)\n    FILTER (?anat != ?cellType)\n} ORDER BY DESC(?score)",
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
      "ORDER BY",
      "DISTINCT",
      "STR"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 010",
    "slug": "Bgee_010",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the anatomical entities including cell types, if any, where the human gene APOC1 is expressed at the post-juvenile stage along with its expression score independently of the strain and sex?",
    "context": null,
    "inidces": [],
    "query": "PREFIX efo: <http://www.ebi.ac.uk/efo/>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?anat ?cellType ?anatName ?cellTypeName ?score ?stage WHERE {\n    ?seq a orth:Gene ;\n        rdfs:label \"APOC1\" ;\n        orth:organism ?organism .\n    ?expression a genex:Expression ;\n        genex:hasExpressionCondition ?condition ;\n        genex:hasExpressionLevel ?score ;\n        genex:hasSequenceUnit ?seq .\n    ?condition a genex:ExpressionCondition ;\n        genex:hasAnatomicalEntity ?anat ;\n        genex:hasAnatomicalEntity ?cellType ;\n        genex:hasDevelopmentalStage ?stage .\n    ?anat a genex:AnatomicalEntity ;\n        rdfs:label ?anatName .\n    ?cellType rdfs:label ?cellTypeName .\n    ?stage a efo:EFO_0000399 ;\n        rdfs:label \"post-juvenile\" .\n    ?organism obo:RO_0002162  ?species .\n    ?species a up:Taxon ;\n        up:commonName \"human\" .\n    FILTER (?anat !=  obo:GO_0005575)\n    FILTER (?anat != ?cellType)\n} ORDER BY DESC(?score)",
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
      "ORDER BY",
      "DISTINCT"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 011",
    "slug": "Bgee_011",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the developmental stages present in Bgee?",
    "context": null,
    "inidces": [],
    "query": "PREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX efo: <http://www.ebi.ac.uk/efo/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?stage ?stageName ?stageDescription WHERE {\n    ?stage a efo:EFO_0000399 ;\n        rdfs:label ?stageName ;\n        dcterms:description ?stageDescription .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 012",
    "slug": "Bgee_012",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the anatomical entities where the eel gene apoc1 is expressed along with its expression score independently of the strain, sex, and cell type?",
    "context": null,
    "inidces": [],
    "query": "PREFIX efo: <http://www.ebi.ac.uk/efo/>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?anat ?anatName ?stageIRI ?score WHERE {\n    ?seq a orth:Gene ;\n        lscr:xrefNCBIGene <https://www.ncbi.nlm.nih.gov/gene/118230125> .\n        # Or dcterms:identifier \"118230125\" .\n    ?expression a genex:Expression ;\n        genex:hasExpressionCondition ?condition ;\n        genex:hasExpressionLevel ?score ;\n        genex:hasSequenceUnit ?seq .\n    ?anat a genex:AnatomicalEntity ;\n        rdfs:label ?anatName .\n    ?condition a genex:ExpressionCondition ;\n        genex:hasAnatomicalEntity ?anat ;\n        genex:hasDevelopmentalStage ?stageIRI ;\n        genex:hasSex \"any\" ;\n        genex:hasStrain ?strain .\n    ?stageIRI a efo:EFO_0000399 .\n    ?strain a efo:EFO_0005135 ;\n        rdfs:label \"wild-type\" .\n    FILTER (?anat != obo:GO_0005575)\n} ORDER BY DESC(?score)",
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
      "ORDER BY",
      "DISTINCT",
      "STR",
      "IRI",
      "IF"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 013",
    "slug": "Bgee_013",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the anatomical entities where the P02654 gene is expressed? Note that P02654 is a UniProtKB identifier of the APOC1 human gene.",
    "context": null,
    "inidces": [],
    "query": "PREFIX genex: <http://purl.org/genex#>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX uniprotkb: <http://purl.uniprot.org/uniprot/>\n\nSELECT DISTINCT ?anat ?anatName WHERE {\n    ?seq a orth:Gene ;\n        genex:isExpressedIn ?anat ;\n        lscr:xrefUniprot uniprotkb:P02654 .\n    ?anat a genex:AnatomicalEntity ;\n        rdfs:label ?anatName .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 014",
    "slug": "Bgee_014",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What is all the metadata related to the ENSG00000130208 gene, where ENSG00000130208 is the identifier of the APOC1 human gene.",
    "context": null,
    "inidces": [],
    "query": "PREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?symbol ?description ?id\n?links ?organism ?uniprot ?ensembl ?ncbi WHERE {\n    ?seq a orth:Gene ;\n        rdfs:label ?symbol ;\n        rdfs:seeAlso ?links ;\n        dcterms:description ?description ;\n        dcterms:identifier ?id ;\n        orth:organism ?organism .\n    OPTIONAL{?seq lscr:xrefUniprot ?uniprot .}\n    OPTIONAL{?seq lscr:xrefEnsemblGene ?ensembl .}\n    OPTIONAL{?seq lscr:xrefNCBIGene ?ncbi .}\n    FILTER (?id = \"ENSG00000130208\")\n}",
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
      "DISTINCT",
      "IF"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 015",
    "slug": "Bgee_015",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the anatomical entities where the APOC1 Homo sapiens gene is not expressed, that is where is APOC1 absent?",
    "context": null,
    "inidces": [],
    "query": "PREFIX genex: <http://purl.org/genex#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?anat ?anatName WHERE {\n    ?seq a orth:Gene ;\n        rdfs:label \"APOC1\" ;\n        genex:isAbsentIn ?anat ;\n        orth:organism ?organism .\n    ?anat a genex:AnatomicalEntity ;\n        rdfs:label ?anatName .\n    ?organism obo:RO_0002162  ?species .\n    ?species a up:Taxon ;\n        up:scientificName \"Homo sapiens\" .\n}",
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
      "IF",
      "ABS"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 016",
    "slug": "Bgee_016",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Which are the genes in Human associated to a disease that are orthologous to a gene expressed in the rat's brain?",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX sio: <http://semanticscience.org/resource/>\n\nSELECT ?gene ?omaLink ?uniprot ?diseaseLabel ?annotationText WHERE {\n    {\n        SELECT ?gene {\n            ?anat rdfs:label 'brain' .\n            ?gene genex:isExpressedIn ?anat ;\n                orth:organism/obo:RO_0002162 ?taxonRat .\n            ?taxonRat up:commonName 'rat' .\n        } LIMIT 20\n    }\n    SERVICE <https://sparql.uniprot.org/sparql> {\n        ?taxonHuman up:commonName 'Human' .\n    }\n    SERVICE <https://sparql.omabrowser.org/sparql/> {\n        ?cluster a orth:OrthologsCluster ;\n            orth:hasHomologousMember ?node1 ;\n            orth:hasHomologousMember ?node2 .\n        ?node2 orth:hasHomologousMember* ?protein2 .\n        ?node1 orth:hasHomologousMember* ?protein1 .\n        ?protein1 a orth:Protein ;\n            sio:SIO_010079 ?gene . # encoded by\n        ?protein2 a orth:Protein ;\n            rdfs:seeAlso ?omaLink ;\n            orth:organism/obo:RO_0002162 ?taxonHuman ;\n            lscr:xrefUniprot ?uniprot .\n        FILTER(?node1 != ?node2)\n    }\n    SERVICE <https://sparql.uniprot.org/sparql> {\n        ?uniprot up:annotation ?annotation .\n        ?annotation a up:Disease_Annotation ;\n            rdfs:comment ?annotationText ;\n            up:disease ?disease .\n        ?disease skos:prefLabel ?diseaseLabel .\n    }\n}",
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
      "LIMIT"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 017",
    "slug": "Bgee_017",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Anatomical entities where the ins zebrafish gene is expressed and its gene GO annotations.",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?anatomicalEntity ?goClass ?goLabel {\n    {\n        SELECT ?ensemblGene ?anatomicalEntity {\n            ?geneB a orth:Gene ;\n                genex:isExpressedIn ?anat ;\n                rdfs:label ?geneLabel ;\n                lscr:xrefEnsemblGene ?ensemblGene ;\n                orth:organism/obo:RO_0002162 ?taxon2 .\n            ?taxon2 up:commonName 'zebrafish' .\n            FILTER (UCASE(?geneLabel) = UCASE('ins'))\n            ?anat rdfs:label ?anatomicalEntity .\n        }\n    }\n    SERVICE <https://sparql.uniprot.org/sparql> {\n        ?uniprot rdfs:seeAlso/up:transcribedFrom ?ensemblGene ;\n            a up:Protein ;\n            up:classifiedWith ?goClass .\n        ?goClass rdfs:label ?goLabel .\n    }\n} LIMIT 20",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "FILTER",
      "SERVICE",
      "LIMIT",
      "DISTINCT",
      "FROM",
      "WITH",
      "IF",
      "UCASE"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 018",
    "slug": "Bgee_018",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Which are the mouse's proteins encoded by genes which are expressed in the liver and are orthologous to human's INS gene?",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX sio: <http://semanticscience.org/resource/>\nPREFIX lscr: <http://purl.org/lscr#>\n\nSELECT ?humanProtein ?mouseProtein ?mouseOmaLink {\n    {\n        ?humanTaxon up:commonName 'human' .\n        ?mouseTaxon up:commonName 'mouse' .\n    }\n    SERVICE <https://sparql.omabrowser.org/sparql> {\n        ?cluster a orth:OrthologsCluster ;\n            orth:hasHomologousMember ?node1 ;\n            orth:hasHomologousMember ?node2 .\n        ?node2 orth:hasHomologousMember* ?mouseProtein .\n        ?node1 orth:hasHomologousMember* ?humanProtein .\n        ?humanProtein a orth:Protein ;\n            rdfs:label 'INS' ;\n            orth:organism/obo:RO_0002162 ?humanTaxon .\n        ?mouseProtein a orth:Protein ;\n            sio:SIO_010079 ?mouseGene ; # is encoded by\n            orth:organism/obo:RO_0002162 ?mouseTaxon ;\n            rdfs:seeAlso ?mouseOmaLink .\n        ?mouseGene lscr:xrefEnsemblGene ?mouseGeneEnsembl .\n        FILTER ( ?node1 != ?node2 )\n    }\n    {\n        ?mouseGeneBgee a orth:Gene ;\n            lscr:xrefEnsemblGene ?mouseGeneEnsembl ;\n            genex:isExpressedIn ?cond ;\n            orth:organism/obo:RO_0002162 ?mouseTaxon .\n        ?cond genex:hasAnatomicalEntity/rdfs:label 'liver' .\n    }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "FILTER",
      "SERVICE"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 019",
    "slug": "Bgee_019",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Which are the orthologs of a gene that is expressed in the fruit fly's brain?",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX sio: <http://semanticscience.org/resource/>\n\nSELECT DISTINCT ?geneEnsembl ?proteinOrtholog ?geneOrthologEnsembl ?taxonOrtholog ?omaLinkOrtholog WHERE {\n    {\n        SELECT DISTINCT * {\n            ?gene a orth:Gene ;\n                genex:isExpressedIn/rdfs:label 'brain' ;\n                orth:organism/obo:RO_0002162 ?taxonFly ;\n                dcterms:identifier ?geneEnsembl .\n            ?taxonFly up:commonName 'fruit fly' .\n        } LIMIT 20\n    }\n\n    SERVICE <https://sparql.omabrowser.org/sparql/> {\n        ?cluster a orth:OrthologsCluster ;\n            orth:hasHomologousMember ?node1 ;\n            orth:hasHomologousMember ?node2 .\n        ?node1 orth:hasHomologousMember* ?protein1 .\n        ?node2 orth:hasHomologousMember* ?proteinOrtholog .\n        ?protein1 sio:SIO_010079 ?gene . # is encoded by\n        ?proteinOrtholog rdfs:seeAlso ?omaLinkOrtholog ;\n            orth:organism/obo:RO_0002162 ?taxonOrthologUri ;\n            sio:SIO_010079 ?geneOrtholog . # is encoded by\n        FILTER ( ?node1 != ?node2 )\n    }\n    ?taxonOrthologUri up:commonName ?taxonOrtholog .\n    ?geneOrtholog dcterms:identifier ?geneOrthologEnsembl .\n}",
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
      "LIMIT",
      "DISTINCT",
      "URI",
      "IF"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 020",
    "slug": "Bgee_020",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Which are the genes in Primates orthologous to a gene that is expressed in the fruit fly's eye?",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX sio: <http://semanticscience.org/resource/>\n\nSELECT DISTINCT ?flyEnsemblGene ?orthologTaxon ?orthologEnsemblGene ?orthologOmaLink WHERE {\n\t{\n        SELECT DISTINCT ?gene ?flyEnsemblGene {\n        ?gene a orth:Gene ;\n            genex:isExpressedIn/rdfs:label 'eye' ;\n            orth:organism/obo:RO_0002162 ?taxon ;\n            dcterms:identifier ?flyEnsemblGene .\n        ?taxon up:commonName 'fruit fly' .\n        } LIMIT 100\n    }\n    SERVICE <https://sparql.omabrowser.org/sparql> {\n        ?protein2 a orth:Protein .\n        ?protein1 a orth:Protein .\n        ?clusterPrimates a orth:OrthologsCluster .\n        ?cluster a orth:OrthologsCluster ;\n            orth:hasHomologousMember ?node1 ;\n            orth:hasHomologousMember ?node2 .\n        ?node1 orth:hasHomologousMember* ?protein1 .\n        ?node2 orth:hasHomologousMember* ?clusterPrimates .\n        ?clusterPrimates orth:hasHomologousMember* ?protein2 .\n        ?protein1 sio:SIO_010079 ?gene . # is encoded by\n        ?protein2 rdfs:seeAlso ?orthologOmaLink ;\n            orth:organism/obo:RO_0002162 ?orthologTaxonUri ;\n            sio:SIO_010079 ?orthologGene . # is encoded by\n        ?clusterPrimates orth:hasTaxonomicRange ?taxRange .\n        ?taxRange orth:taxRange 'Primates' .\n        FILTER ( ?node1 != ?node2 )\n    }\n    ?orthologTaxonUri up:commonName ?orthologTaxon .\n    ?orthologGene dcterms:identifier ?orthologEnsemblGene .\n}",
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
      "LIMIT",
      "DISTINCT",
      "URI",
      "IF"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 021",
    "slug": "Bgee_021",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Which species the Mt-co1 gene is present (without considering synonyms)?",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\n\nSELECT ?name\nWHERE {\n    ?gene a orth:Gene ;\n        rdfs:label ?geneName ;\n        orth:organism ?organism .\n    ?organism obo:RO_0002162 ?taxon . # in taxon\n    ?taxon up:scientificName ?name .\n    FILTER ( UCASE(?geneName) = UCASE('Mt-co1') )\n}",
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
      "IF",
      "UCASE"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 022",
    "slug": "Bgee_022",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "List the labels and identifiers of pig-tailed macaque genes in bgee",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\n\nSELECT DISTINCT ?geneId ?geneName\nWHERE {\n    ?gene a orth:Gene ;\n        dcterms:identifier ?geneId ;\n        orth:organism/obo:RO_0002162/up:commonName ?commonName .\n    OPTIONAL { ?gene rdfs:label ?geneName .}\n    FILTER ( LCASE(?commonName) = \"pig-tailed macaque\" ) .\n}",
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
      "DISTINCT",
      "IF",
      "LCASE"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 023",
    "slug": "Bgee_023",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Human anatomical entities at young adult developmental stage",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\n\nSELECT DISTINCT ?anatomicalEntity ?stageName {\n    ?condition genex:hasAnatomicalEntity ?anatEntity ;\n        genex:hasDevelopmentalStage ?stage ;\n        obo:RO_0002162/up:commonName ?commonName .\n    ?anatEntity rdfs:label ?anatomicalEntity .\n    ?stage rdfs:label ?stageName .\n    FILTER ( lcase(?commonName) = \"human\" ).\n    FILTER ( CONTAINS(lcase(?stageName), \"young adult\") )\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "FILTER",
      "DISTINCT",
      "LCASE",
      "CONTAINS"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 024",
    "slug": "Bgee_024",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Human anatomic entities at young adult developmental stage",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\n\nSELECT DISTINCT ?anatomicalEntity ?stageName {\n    ?condition genex:hasAnatomicalEntity ?anatEntity ;\n        genex:hasDevelopmentalStage ?stage ;\n        obo:RO_0002162/up:commonName ?commonName .\n    ?anatEntity rdfs:label ?anatomicalEntity .\n    ?stage rdfs:label ?stageName .\n    FILTER( LCASE(?commonName) = \"human\" )\n    FILTER( CONTAINS(LCASE(?stageName), \"young adult\") )\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "FILTER",
      "DISTINCT",
      "LCASE",
      "CONTAINS"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 025",
    "slug": "Bgee_025",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What is the post-juvenile stage link and description?",
    "context": null,
    "inidces": [],
    "query": "PREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX efo: <http://www.ebi.ac.uk/efo/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT DISTINCT ?stage ?stageName ?stageDescription WHERE {\n    ?stage a efo:EFO_0000399 ;\n        rdfs:label ?stageName ;\n        dcterms:description ?stageDescription .\n    FILTER(CONTAINS(LCASE(?stageName), \"post-juvenile\"))\n}",
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
      "DISTINCT",
      "LCASE",
      "CONTAINS"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 026",
    "slug": "Bgee_026",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "What are the genes expressed in the human brain?",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX orth: <http://purl.org/net/orth#>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT DISTINCT ?gene ?geneName WHERE {\n    ?gene a orth:Gene ;\n        genex:isExpressedIn ?anat ;\n        rdfs:label ?geneName ;\n        orth:organism ?organism .\n    ?anat a genex:AnatomicalEntity ;\n        rdfs:label \"brain\" .\n    ?organism obo:RO_0002162 ?species .\n    ?species a up:Taxon ;\n        up:scientificName \"Homo sapiens\" .\n}",
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
      "IF"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 027-biosodafrontend",
    "slug": "Bgee_027-biosodafrontend",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Genes expressed in the human pancreas and their annotations in UniProt.",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX orth: <http://purl.org/net/orth#>\nSELECT DISTINCT ?geneEns ?uniprot ?annotation_text {\n\t{\n\t\tSELECT ?geneEns {\n\t\t\t?geneB a orth:Gene .\n\t\t\t?geneB genex:isExpressedIn ?cond .\n\t\t\t?cond genex:hasAnatomicalEntity ?anat .\n\t\t\t\t?geneB lscr:xrefEnsemblGene ?geneEns .\n\t\t\t?anat rdfs:label 'pancreas' .\n\t\t\t?geneB orth:organism ?o .\n\t\t\t?o obo:RO_0002162 ?taxon2 .\n\t\t\t?taxon2 up:commonName 'human' .\n\t\t} LIMIT 100\n\t}\n\tSERVICE <https://sparql.uniprot.org/sparql> {\n\t\t?uniprot rdfs:seeAlso / up:transcribedFrom ?geneEns .\n\t\t?uniprot up:annotation ?annotation .\n\t\t?annotation rdfs:comment ?annotation_text .\n\t}\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "SERVICE",
      "LIMIT",
      "DISTINCT",
      "FROM"
    ],
    "category": "sib-swiss Bgee"
  },
  {
    "name": "Bgee - 028-biosodafrontend",
    "slug": "Bgee_028-biosodafrontend",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Genes expressed in the human's brain during the infant stage and their UniProt disease annotations.",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX obo: <http://purl.obolibrary.org/obo/>\nPREFIX genex: <http://purl.org/genex#>\nPREFIX lscr: <http://purl.org/lscr#>\nPREFIX orth: <http://purl.org/net/orth#>\nSELECT DISTINCT ?geneEns ?uniprot ?annotation {\n\t{\n\t\tSELECT ?geneEns {\n\t\t\t?geneB genex:isExpressedIn ?cond ;\n\t\t\t\tlscr:xrefEnsemblGene ?geneEns .\n\t\t\t?cond genex:hasDevelopmentalStage ?st .\n\t\t\t?cond genex:hasAnatomicalEntity ?anat .\n\t\t\t?st rdfs:label 'infant stage' .\n\t\t\t?anat rdfs:label 'brain' .\n\t\t\t?geneB orth:organism ?o .\n\t\t\t?o obo:RO_0002162 ?taxon2 .\n\t\t\t?taxon2 up:commonName 'human' .\n\t\t}\n\t\tLIMIT 10\n\t}\n\tSERVICE <https://sparql.uniprot.org/sparql> {\n\t\t?uniprot up:transcribedFrom ?geneEns .\n\t\t?uniprot up:annotation ?annotation .\n\t}\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "SERVICE",
      "LIMIT",
      "DISTINCT",
      "FROM"
    ],
    "category": "sib-swiss Bgee"
  }
];