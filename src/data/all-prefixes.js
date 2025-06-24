import rdfImg from "../assets/images/prefixes/rdf.png"
import owlImg from "../assets/images/prefixes/owl.png"
import ordoImg from "../assets/images/prefixes/ordo.png"
import unknownImg from "../assets/images/prefixes/unknown.avif"
import hoomImg from "../assets/images/prefixes/hoom.jpg"
import dcImg from "../assets/images/prefixes/dc.jpeg"
import wikidataImg from "../assets/images/prefixes/wikidata.png"
import { prefixes as sibPrefixes } from "./queries-data/sib-swiss/prefixes.js";


const basicPrefixes = [
    {
      prefix: "RDF",
      name: "RDF ",
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
    },
    {
      prefix: "RDFS",
      name: "RDF Schema",
      namespace: "http://www.w3.org/2000/01/rdf-schema#",
      description: "RDFS is a semantic extension of RDF providing mechanisms to describe groups of related resources and the relationships between them.",
      logo: rdfImg,
      documentation: "https://www.w3.org/TR/rdf-schema/",
      download: "https://www.w3.org/TR/rdf-schema/rdf-schema.rdf",
      version: "1.1",
      category: "W3C Vocabulary",
      usedIn: ["Class/Property Hierarchies", "Linked Data"]
    },
    {
      prefix: "OBOINOWL",
      name: "OBO in OWL",
      namespace: "http://www.geneontology.org/formats/oboInOwl#",
      description: "OBOinOWL provides properties and conventions used for representing OBO ontologies in OWL.",
      logo: unknownImg,
      documentation: "https://github.com/information-artifact-ontology/oboInOwl",
      download: "http://purl.obolibrary.org/obo/iao/oboInOwl.owl",
      version: "2024-01",
      category: "Ontology Metadata",
      usedIn: ["OBO Ontologies", "Ontology Metadata"]
    },
    {
      prefix: "HOOM",
      name: "Health Outcome Ontology Model",
      namespace: "http://w3id.org/hoom#",
      description: "HOOM is an ontology for modeling health outcomes, especially in the context of rare diseases.",
      logo: hoomImg,
      documentation: "https://github.com/rare-disease-semantic-models/HOOM",
      download: "https://raw.githubusercontent.com/rare-disease-semantic-models/HOOM/main/hoom.owl",
      version: "1.0",
      category: "Biomedical Ontology",
      usedIn: ["Health Outcome Modeling", "Rare Disease Projects"]
    },
    {
      prefix: "DC",
      name: "Dublin Core",
      namespace: "http://purl.org/dc/elements/1.1/",
      description: "The Dublin Core Metadata Element Set is a standard for cross-domain resource description.",
      logo: dcImg,
      documentation: "https://www.dublincore.org/specifications/dublin-core/dces/",
      download: "http://dublincore.org/2012/06/14/dcelements.rdf",
      version: "1.1",
      category: "Metadata Standard",
      usedIn: ["Metadata Description", "Digital Libraries", "SPARQL Metadata"]
    },
    {
      prefix: "Wikidata",
      name: "Wikidata",
      namespace: "http://www.wikidata.org/",
      description: "Wikidata is a free and open knowledge base that can be read and edited by both humans and machines.",
      logo: wikidataImg,
      documentation: "https://www.wikidata.org/wiki/Wikidata:Main_Page",
      download: "",
      version: "",
      category: "",
      usedIn: []
    },


  ]
  

const enrichedMap = new Map(basicPrefixes.map(p => [p.prefix.toUpperCase(), p]));

for (const dp of sibPrefixes) {
  const key = dp.prefix.toUpperCase();
  if (!enrichedMap.has(key)) {
    enrichedMap.set(key, {
      ...dp,
      description: "No description available.",
      logo: unknownImg,
      documentation: null,
      download: null,
      version: null,
      category: "Unknown",
      usedIn: []
    });
  }
}

export const sparqlPrefixes = Array.from(enrichedMap.values());