export const HAMAP = [
  {
    "name": "HAMAP - 1",
    "slug": "HAMAP_1",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select all hamap rules",
    "context": null,
    "inidces": [],
    "query": "PREFIX sh: <http://www.w3.org/ns/shacl#>\n\nSELECT ?rule\nWHERE\n{\n    ?rule sh:construct ?query  .\n}",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss HAMAP"
  },
  {
    "name": "HAMAP - 2",
    "slug": "HAMAP_2",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Show the triples about <a href=\\",
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [],
    "category": "sib-swiss HAMAP"
  },
  {
    "name": "HAMAP - 3",
    "slug": "HAMAP_3",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select all hamap rules that deal with Catalytic Activity",
    "context": null,
    "inidces": [],
    "query": "PREFIX sh: <http://www.w3.org/ns/shacl#>\n\n\nSELECT ?rule ?query\nWHERE\n{\n    ?rule sh:construct ?query  .\n    FILTER (CONTAINS(?query, 'Catalytic_Activity_Annotation'))\n}",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE",
      "FILTER",
      "CONTAINS"
    ],
    "category": "sib-swiss HAMAP"
  },
  {
    "name": "HAMAP - 4",
    "slug": "HAMAP_4",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select all hamap rules that annotate a Rhea reaction with an EC enzyme class",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX sp: <http://spinrdf.org/sp#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\n\nSELECT ?rule ?enzymeClass\nWHERE\n{\n ?rule a sp:Construct ;\n     sp:templates/rdf:rest*/rdf:first ?annotationsToAdd .\n ?annotationsToAdd sp:predicate up:enzymeClass ;\n                   sp:object ?enzymeClass .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE"
    ],
    "category": "sib-swiss HAMAP"
  }
];