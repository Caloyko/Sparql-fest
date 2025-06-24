export const Cellosaurus = [
  {
    "name": "Cellosaurus - 101 publi cnt by type",
    "slug": "Cellosaurus_101_publi_cnt_by_type",
    "date": new Date("2025-06-18"),
    "description": "Count of referenced publications by publication type",
    "context": null,
    "inidces": [],
    "query": "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nPREFIX xref: <https://purl.expasy.org/cellosaurus/rdf/xref/>\nPREFIX widoco: <https://w3id.org/widoco/vocab#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX vann: <http://purl.org/vocab/vann/>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX sh: <http://www.w3.org/ns/shacl#>\nPREFIX schema: <https://schema.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX pubmed: <https://www.ncbi.nlm.nih.gov/pubmed/>\nPREFIX pub: <https://purl.expasy.org/cellosaurus/rdf/pub/>\nPREFIX prism: <http://prismstandard.org/namespaces/basic/2.0/>\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX orga: <https://purl.expasy.org/cellosaurus/rdf/orga/>\nPREFIX oa: <http://www.w3.org/ns/oa#>\nPREFIX help: <https://api.cellosaurus.org/>\nPREFIX fabio: <http://purl.org/spar/fabio/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX db: <https://purl.expasy.org/cellosaurus/rdf/db/>\nPREFIX cvcl: <https://purl.expasy.org/cellosaurus/rdf/cvcl/>\nPREFIX cello: <https://purl.expasy.org/cellosaurus/rdf/ontology/>\nPREFIX bibo: <http://purl.org/ontology/bibo/>\nPREFIX ORDO: <http://www.orpha.net/ORDO/Orphanet_>\nPREFIX OMIT: <http://purl.obolibrary.org/obo/OMIT_>\nPREFIX OBI: <http://purl.obolibrary.org/obo/OBI_>\nPREFIX NCIt: <http://purl.obolibrary.org/obo/NCIT_>\nPREFIX IAO: <http://purl.org/ontology/IAO_>\nPREFIX GENO: <http://purl.obolibrary.org/obo/GENO_>\nPREFIX FBcv: <http://purl.obolibrary.org/obo/FBcv_>\nPREFIX EDAM: <http://edamontology.org/>\nPREFIX CLO: <http://purl.obolibrary.org/obo/CLO_>\nPREFIX CL: <http://purl.obolibrary.org/obo/CL_>\nPREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX CARO: <http://purl.obolibrary.org/obo/CARO_>\nPREFIX BTO: <http://purl.obolibrary.org/obo/BTO_>\nPREFIX BFO: <http://purl.obolibrary.org/obo/BFO_>\nPREFIX BAO: <http://www.bioassayontology.org/bao#BAO_>\n\nselect ?pub_type (count(?cl) as ?cnt) where { \n  ?pub_type rdfs:subClassOf* cello:Publication .\n  optional {?cl rdf:type ?pub_type. }\n}\ngroup by ?pub_type\norder by desc(count(*))",
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
      "ORDER BY",
      "COUNT"
    ],
    "category": "sib-swiss Cellosaurus"
  },
  {
    "name": "Cellosaurus - 102 cl cnt by category",
    "slug": "Cellosaurus_102_cl_cnt_by_category",
    "date": new Date("2025-06-18"),
    "description": "Count of cell lines by cell line category",
    "context": null,
    "inidces": [],
    "query": "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nPREFIX xref: <https://purl.expasy.org/cellosaurus/rdf/xref/>\nPREFIX widoco: <https://w3id.org/widoco/vocab#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX vann: <http://purl.org/vocab/vann/>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX sh: <http://www.w3.org/ns/shacl#>\nPREFIX schema: <https://schema.org/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX pubmed: <https://www.ncbi.nlm.nih.gov/pubmed/>\nPREFIX pub: <https://purl.expasy.org/cellosaurus/rdf/pub/>\nPREFIX prism: <http://prismstandard.org/namespaces/basic/2.0/>\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX orga: <https://purl.expasy.org/cellosaurus/rdf/orga/>\nPREFIX oa: <http://www.w3.org/ns/oa#>\nPREFIX help: <https://api.cellosaurus.org/>\nPREFIX fabio: <http://purl.org/spar/fabio/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX db: <https://purl.expasy.org/cellosaurus/rdf/db/>\nPREFIX cvcl: <https://purl.expasy.org/cellosaurus/rdf/cvcl/>\nPREFIX cello: <https://purl.expasy.org/cellosaurus/rdf/ontology/>\nPREFIX bibo: <http://purl.org/ontology/bibo/>\nPREFIX ORDO: <http://www.orpha.net/ORDO/Orphanet_>\nPREFIX OMIT: <http://purl.obolibrary.org/obo/OMIT_>\nPREFIX OBI: <http://purl.obolibrary.org/obo/OBI_>\nPREFIX NCIt: <http://purl.obolibrary.org/obo/NCIT_>\nPREFIX IAO: <http://purl.org/ontology/IAO_>\nPREFIX GENO: <http://purl.obolibrary.org/obo/GENO_>\nPREFIX FBcv: <http://purl.obolibrary.org/obo/FBcv_>\nPREFIX EDAM: <http://edamontology.org/>\nPREFIX CLO: <http://purl.obolibrary.org/obo/CLO_>\nPREFIX CL: <http://purl.obolibrary.org/obo/CL_>\nPREFIX CHEBI: <http://purl.obolibrary.org/obo/CHEBI_>\nPREFIX CARO: <http://purl.obolibrary.org/obo/CARO_>\nPREFIX BTO: <http://purl.obolibrary.org/obo/BTO_>\nPREFIX BFO: <http://purl.obolibrary.org/obo/BFO_>\nPREFIX BAO: <http://www.bioassayontology.org/bao#BAO_>\n\nselect ?class_name (count(?cl) as ?cnt) where { \n  ?class rdfs:subClassOf* cello:CellLine . # cell line generic class\n  ?class rdfs:label ?class_name .\n  optional {?cl rdf:type ?class. }\n}\ngroup by ?class_name\norder by desc(count(*))",
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
      "ORDER BY",
      "COUNT"
    ],
    "category": "sib-swiss Cellosaurus"
  }
];