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
        rdfResultExample: ``
      }  ,
      {
        name: "Finding Medical Conditions and Their Labels",
        slug: "tuto-1-medical-conditions-labels",
        date: "24/06/2025",
        description: `Retrieve some entities classified as medical conditions along with their labels.
  This teaches how to write a simple RDF triple using the **'a'** keyword (which means rdf:type),
  and how to extract information (like labels) for a variable.`,
        context: `You want to explore Wikidata to find items that are medical conditions and get
  their readable name (label). This exercise introduces the concept of typing an entity
  using **a**, and retrieving basic properties with triple patterns.`,
        inidces: [
          "PREFIX wd: <http://www.wikidata.org/entity/> — Provides access to specific entities like 'medical condition' (Q12136).",
          "PREFIX wdt: <http://www.wikidata.org/prop/direct/> — Used for direct relationships (not needed in this query).",
          "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> — Allows retrieval of human-readable labels.",
          "SELECT ?condition ?label — Tells the query to return the condition’s ID and its label.",
          "WHERE { ?condition a wd:Q12136 . ?condition rdfs:label ?label . } — Retrieves all entities of type 'medical condition' and their label.",
          "a : shortcut for rdf:type, used to declare that a resource belongs to a class (like wd:Q12136 = medical condition)."
        ],
        query: ` PREFIX wd: <http://www.wikidata.org/entity/>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

  SELECT ?condition ?label WHERE {
    ?condition a wd:Q12136 .
    ?condition rdfs:label ?label .
  }`,
        ontologies: [
          "Wikidata",
          "RDFS",
        ],
        sparqlConcepts: [
          "TRIPLE",
          "VARIABLE",
          "WHERE",
          "A",
          "SELECT",
          "PREFIX",
        ],
        category: "level-0",
        rdfResultExample: ``
      },
      {
        name: "Basic drug list with filtering and limit",
        slug: "tuto-1-basic-drug-list-filtered",
        date: "24/06/2025",
        description: `Retrieve a distinct list of pharmaceutical drugs with English labels using basic FILTER, DISTINCT, and LIMIT clauses.`,
        context: `You are building a medical interface and want to display a few drug names in English. This query shows how to filter and limit the results properly.`,
        inidces: [
        "PREFIX wd: <http://www.wikidata.org/entity/>, defines the namespace for Wikidata entities.",
        "SELECT DISTINCT ?drug ?label, returns a unique list of drug URIs and their labels.",
        "WHERE { ?drug wdt:P31 wd:Q12140 . }, filters items that are instances of pharmaceutical drugs.",
        "FILTER(LANG(?label) = \"en\"), ensures only English-language labels are included.",
         "LIMIT 5, restricts the output to the first 5 matching results."
        ],
        query: `PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?drug ?label WHERE {
  ?drug wdt:P31 wd:Q12140 .         # P31 = instance of, Q12140 = pharmaceutical drug
  ?drug rdfs:label ?label .
  FILTER(LANG(?label) = "en")
}
LIMIT 5
`,
        ontologies: [
          "Wikidata",
          "RDFS",
        ],
        sparqlConcepts: [
          "DISTINCT",
          "FILTER",
          "LANG",
          "LIMIT",
          "SELECT",
          "PREFIX",
        ],
        category: "level-0",
        rdfResultExample: ``
      },
      {
        name: "Diseases with alternative medical facts and optional image",
        slug: "tuto-1-disease-cause-or-symptom",
        date: "24/06/2025",
        description: ` Find diseases that are either linked to a known cause or have a documented symptom.
  Additionally, try to retrieve an image if available.`,
        context: `Suppose you are building a knowledge panel for diseases. You want to include for each disease either a main cause
  (if known) or a symptom (if the cause is unknown). You also want to enrich the panel with an image of the disease,
  but this image is not mandatory. This example shows how to express both optional properties and alternative conditions.`,
        inidces: [
        "PREFIX wd: <http://www.wikidata.org/entity/> — Declares known entities like Disease (Q12136), Cause (P828), and Symptom (P780).",
        "PREFIX wdt: <http://www.wikidata.org/prop/direct/> — Used for direct claims such as disease properties.",
        "SELECT ?disease ?label ?fact ?image — Returns the disease, a label, a fact (either cause or symptom), and an optional image.",
        "UNION { ... } — Combines patterns: either the disease has a cause or it has a symptom.",
        "OPTIONAL { ?disease wdt:P18 ?image } — Adds an image of the disease if available.",
        "rdfs:label and FILTER (LANG(?label) = 'en') — Ensures we return English labels only.",
        ],
        query: `PREFIX wd: <http://www.wikidata.org/entity/>
  PREFIX wdt: <http://www.wikidata.org/prop/direct/>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

  SELECT ?disease ?label ?fact ?image WHERE {
    ?disease wdt:P31 wd:Q12136 .  # ?disease is an instance of disease
    ?disease rdfs:label ?label .
    FILTER (LANG(?label) = "en")

    {
      ?disease wdt:P828 ?fact .  # disease has a cause
    }
    UNION
    {
      ?disease wdt:P780 ?fact .  # disease has a symptom
    }

    OPTIONAL {
      ?disease wdt:P18 ?image .  # get image if available
    }
  }
`,
        ontologies: [
          "Wikidata",
        ],
        sparqlConcepts: [
          "WHERE",
          "Variable",
          "RDF Triple",
          "A",
          "OPTIONAL",
          "UNION",
          "SELECT",
          "PREFIX",
        ],
        category: "level-0",
        rdfResultExample: ``
      }     
]