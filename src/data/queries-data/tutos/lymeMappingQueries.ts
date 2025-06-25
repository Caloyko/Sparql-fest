export const lymeMappingQueries = [
    {
        name: "Getting Lyme data from ORDO with label",
        slug: "lyme-mapping-1-label",
        date: new Date("2025-06-25"),
        description: "Basic query to retrieve Lyme Disease entity from ORDO with the label",
        context: "Tuto : Retrieving information about Lyme Disease from ORDO",
        inidces: [
            "Use PREFIX rdfs: to retrieve readable labels like disease names.",
            "Use PREFIX ordo: to access the ORDO ontology where rare diseases are defined.",
            "SELECT ?disease to retrieve the resource representing Lyme disease.",
            "In WHERE, match the label 'Lyme disease'@en to get its corresponding URI."
        ],
        query: ``,
        ontologies: [
          "ORDO",
          "RDFS"
        ],
        sparqlConcepts: [
          "PREFIX",
          "SELECT",
          "WHERE"
        ],
        category: "level 0",
        rdfResultExample: ``
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
        rdfResultExample: ``
      }  ,
]