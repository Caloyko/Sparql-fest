export const tutoQueries = [
    {
        name: "Getting disease labels from Wikidata",
        slug: "tuto-1-basic-disease-labels",
        date: "24/06/2025",
        description: "Basic query to retrieve diseases and their labels from Wikidata using only PREFIX, SELECT, and WHERE.",
        context: "We want to get a simple list of diseases from Wikidata, including their identifier and label. This example shows how to structure a minimal SPARQL query using the PREFIX, SELECT, and WHERE clauses, without any filtering.",
        inidces: [
          "PREFIX wd: <http://www.wikidata.org/entity/>, Declares the 'wd:' prefix used to identify resources (such as diseases) in Wikidata.",
          "PREFIX wdt: <http://www.wikidata.org/prop/direct/>, Declares the 'wdt:' prefix used for direct properties in Wikidata (e.g., instance of).",
          "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>, Adds the 'rdfs:' prefix to retrieve labels (rdfs:label).",
          "SELECT ?disease ?label, Specifies that we want the query to return the disease URI (?disease) and its associated label (?label).",
          "WHERE { ... }, Defines the triple patterns:\n - ?disease wdt:P31 wd:Q12136 . → Selects all entities that are instances of the class 'disease'.\n - ?disease rdfs:label ?label . → Retrieves their label (human-readable name)."
        ],
        query: `PREFIX wd: <http://www.wikidata.org/entity/>
      PREFIX wdt: <http://www.wikidata.org/prop/direct/>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      
      SELECT ?disease ?label WHERE {
        ?disease wdt:P31 wd:Q12136 .
        ?disease rdfs:label ?label .
      }
      LIMIT 5`,
        ontologies: [
          "Wikidata",
          "RDFS"
        ],
        sparqlConcepts: [
          "PREFIX",
          "SELECT",
          "WHERE"
        ],
        category: "level-0",
        rdfResultExample: `
      | disease                           | label                        |
      |----------------------------------|------------------------------|
      | wd:Q12192                        | "Lyme disease"@en           |
      | wd:Q12205                        | "Tuberculosis"@en           |
      | wd:Q181255                      | "Malaria"@en                |
      | wd:Q133212                      | "Parkinson's disease"@en    |
      | wd:Q201658                      | "Diabetes mellitus"@en      |
      `
      }      
]