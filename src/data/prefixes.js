import rdfImg from "../assets/images/prefixes/rdf.png"
import owlImg from "../assets/images/prefixes/owl.png"
import ordoImg from "../assets/images/prefixes/ordo.png"

export const sparqlPrefixes = [
    {
      prefix: "RDF",
      name: "RDF Schema",
      namespace: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      description: "RDF provides a data model for representing information about resources in the web.",
      logo: rdfImg,
      documentation: "https://www.w3.org/TR/rdf-schema/",
      download: "https://www.w3.org/TR/rdf-schema/rdf-schema.rdf",
      version: "1.1",
      category: "W3C Vocabulary",
      usedIn: ["Linked Data", "OWL", "SPARQL Basics"]
    },
    {
      prefix: "OWL",
      name: "OWL Ontology",
      namespace: "http://www.w3.org/2002/07/owl#",
      description: "The Web Ontology Language (OWL) is used to define complex vocabularies and relationships.",
      logo: owlImg,
      documentation: "https://www.w3.org/TR/owl2-overview/",
      download: "https://www.w3.org/2002/07/owl.rdf",
      version: "2",
      category: "Ontology",
      usedIn: ["BioPortal", "Ontology Mapping"]
    },
    {
      prefix: "ORDO",
      name: "Orphanet Rare Disease Ontology",
      namespace: "http://www.orpha.net/ORDO/",
      description: "ORDO is a structured vocabulary for rare diseases derived from Orphanet data.",
      logo: ordoImg,
      documentation: "https://www.orpha.net/consor/cgi-bin/Education_AboutOrdo.php",
      download: "http://www.orphadata.org/data/ORDO/ORDO.owl",
      version: "2024-05-01",
      category: "Biomedical Ontology",
      usedIn: ["Rare Disease Research", "SPARQL for Health"]
    }
  ]
  