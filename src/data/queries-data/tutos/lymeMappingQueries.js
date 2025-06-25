import lymeResult from "../../result-query/lyme-mapping-2-orphacode.json" assert { type: 'json' };
import lymeResult2 from "../../result-query/lyme-mapping-1-label.json" assert { type: 'json' };
import lymeResult3 from "../../result-query/lyme-mapping-3-xrefs.json" assert { type: 'json' };

export const lymeMappingQueries = [
    {
        name: "Getting Lyme data from ORDO with label",
        slug: "lyme-mapping-1-label",
        date: new Date("2025-06-25"),
        description: "Basic query to retrieve Lyme Disease entity from ORDO with the label",
        context: "Tuto : Retrieving information about Lyme Disease from ORDO",
        inidces: [
            "Use PREFIX rdfs: to work with readable labels of entities in the ontology.",
            "Use PREFIX ordo: to access resources from the ORDO ontology.",
            "In SELECT, retrieve both the disease URI (?disease) and its label (?label).",
            "In WHERE, match each ?disease to its rdfs:label.",
            "Use FILTER with CONTAINS and LCASE to search for labels containing the word 'lyme disease', regardless of case.",
            "Wrap the label in STR before applying LCASE to ensure compatibility with the string functions."
          ],
        query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ordo: <http://www.orpha.net/ORDO/>

SELECT ?disease ?label WHERE {
  ?disease rdfs:label ?label .
  FILTER(CONTAINS(LCASE(STR(?label)), "lyme disease"))
}
`,
        ontologies: [
          "ORDO",
          "RDFS"
        ],
        sparqlConcepts: [
          "PREFIX",
          "SELECT",
          "WHERE",
          "FILTER",
          "CONTAINS",
          "LCASE",
          "STR",
        ],
        category: "level 0",
        rdfResultExample: lymeResult2
      }  ,
      {
        name: "Getting Lyme data from ORDO with orphacode",
        slug: "lyme-mapping-2-orphacode",
        date: new Date("2025-06-25"),
        description: "Basic query to retrieve Lyme Disease entity from ORDO with the Orphacode",
        context: "Tuto : Retrieving information about Lyme Disease from ORDO",
        inidces: [
            "Use PREFIX ordo: to access the ORDO ontology where rare diseases are defined.",
            "Go to Orphanet website to find the Lyme Disease orphacode, us it as an URI",
            "Use the subject predicate object form (?s ?p ?o) with a URI as subject to find out what this entity describes."
        ],
        query: `PREFIX ordo: <http://www.orpha.net/ORDO/>

SELECT * WHERE {
  ordo:Orphanet_91546 ?p ?o .
}
`,
        ontologies: [
          "ORDO",
        ],
        sparqlConcepts: [
          "PREFIX",
          "SELECT",
          "WHERE"
        ],
        category: "level 0",
        rdfResultExample: lymeResult
      }  ,
      {
        name: "Extracting external ontology links for Lyme disease",
        slug: "lyme-mapping-3-xrefs",
        date: new Date("2025-06-25"),
        description: "Query to retrieve database cross-references (e.g., OMIM, MeSH) linked to Lyme disease in ORDO.",
        context: "Tuto : Retrieving information about Lyme Disease from ORDO",
        inidces: [
          "Use PREFIX oboInOwl: to access OBO-style annotations, including cross-references.",
          "Use PREFIX ORDO: to define the base URI for ORDO concepts.",
          "Start from the URI for Lyme disease (Orphanet_91546) and query with oboInOwl:hasDbXref to get external ontology links."
        ],
        query: `PREFIX oboInOwl: <http://www.geneontology.org/formats/oboInOwl#>
      PREFIX ORDO: <http://www.orpha.net/ORDO/>
      
      SELECT * WHERE { 
        ORDO:Orphanet_91546 oboInOwl:hasDbXref ?dbXRef .
      }`,
        ontologies: [
          "ORDO",
          "OBO"
        ],
        sparqlConcepts: [
          "PREFIX",
          "SELECT",
          "WHERE"
        ],
        category: "level 1",
        rdfResultExample: lymeResult3
      }
      

]