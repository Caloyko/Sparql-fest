export const HAMAP = [
  {
    "name": "HAMAP - 1",
    "slug": "HAMAP_1",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Select all hamap rules",
    "context": null,
    "inidces": [],
    "query": "PREFIX sh: <http://www.w3.org/ns/shacl#>\n\nSELECT ?rule\nWHERE\n{\n    ?rule sh:construct ?query  .\n}",
    "ontologies": [
      "HAMAP",
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
    "level": "sib-swiss HAMAP"
  },
  {
    "name": "HAMAP - 2",
    "slug": "HAMAP_2",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Show the triples about <a href=\\",
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "HAMAP",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH",
      "SPEX"
    ],
    "sparqlConcepts": [],
    "level": "sib-swiss HAMAP"
  },
  {
    "name": "HAMAP - 3",
    "slug": "HAMAP_3",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Select all hamap rules that deal with Catalytic Activity",
    "context": null,
    "inidces": [],
    "query": "PREFIX sh: <http://www.w3.org/ns/shacl#>\n\n\nSELECT ?rule ?query\nWHERE\n{\n    ?rule sh:construct ?query  .\n    FILTER (CONTAINS(?query, 'Catalytic_Activity_Annotation'))\n}",
    "ontologies": [
      "HAMAP",
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
    "level": "sib-swiss HAMAP"
  },
  {
    "name": "HAMAP - 4",
    "slug": "HAMAP_4",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Select all hamap rules that annotate a Rhea reaction with an EC enzyme class",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX sp: <http://spinrdf.org/sp#>\nPREFIX up: <http://purl.uniprot.org/core/>\n\n\nSELECT ?rule ?enzymeClass\nWHERE\n{\n ?rule a sp:Construct ;\n     sp:templates/rdf:rest*/rdf:first ?annotationsToAdd .\n ?annotationsToAdd sp:predicate up:enzymeClass ;\n                   sp:object ?enzymeClass .\n}",
    "ontologies": [
      "HAMAP",
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
    "level": "sib-swiss HAMAP"
  }
];