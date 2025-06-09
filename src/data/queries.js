import img1 from "../assets/images/network-bg-1.jpg"
import img2 from "../assets/images/network-bg-2.avif"
import img3 from "../assets/images/network-bg-3.jpg"

export const sparqlQueries = [
    {
      id: 1,
      name: "Lyme Disease ORDO Mappings",
      slug: "ordo-lyme-mappings",
      date: "08/06/2025",
      image: img1,
      description: "Obtain all external identifiers (via oboInOwl:hasDbXref) associated with Lyme disease in ORDO.",
      context: "This query seeks to retrieve all external databases linked to the ORDO entry for Lyme disease. This makes it possible to explore the connectivity of this entity to other repositories.",
      inidces: ["Charger ORDO","Utilisez ordo:Orphanet_91546 comme point d'entrée.","Recherchez les prédicats oboInOwl:hasDbXref.", ],
      query: `PREFIX oboInOwl: <http://www.geneontology.org/formats/oboInOwl#>
PREFIX ordo:     <http://www.orpha.net/ORDO/>

SELECT ?object
WHERE {
  ordo:Orphanet_91546 oboInOwl:hasDbXref ?object .
}

      `,
      ontologies: [
        "ORDO",
        "OBOInOWL"
      ],
      sparqlConcepts: [
        "PREFIX",
        "SELECT",
      ],
      level: "level 0",
      rdfResultExample: ``
    },
    {
      id: 2,
      name: "Getting a concept label from ORPHAcode.",
      slug: "label-from-orphacode",
      date: "08/06/2025",
      image: img1,
      description: "Retrieve the label (official name) associated with a rare disease identifier.",
      context: "We want to display the official name of a specific rare disease based on its identifier. This is useful for making data more understandable to users, such as when generating reports or displaying disease information in user interfaces.",
      inidces: ["Start by identifying the identifier of the concept you are interested in (e.g., Orphanet_558).",
        "Ask for its associated label using a basic SELECT query.",
        "Think of a triple where the subject is the disease identifier and the object is its name." ],
      query: `PREFIX ordo:<http://www.orpha.net/ORDO/>
PREFIX w3: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?label
WHERE {
  ordo:Orphanet_558 w3:label ?label
}`,
      ontologies: [
        "ORDO",
        "RDFS",
      ],
      sparqlConcepts: [
        "PREFIX",
        "SELECT",
      ],
      level: "level 0",
      rdfResultExample: ``,
    },
    {
      id: 3,
      name: " Getting the genetic material linked to more than 10 disorders.",
      slug: "genes-with-many-disorders",
      date: "08/06/2025",
      image: img2,
      description: "Find the genetic elements that are each linked to more than 10 different disorders, and return their names along with the number of associated disorders.",
      context: "We want to identify elements of genetic material that are associated with a high number of distinct disorders. This kind of analysis can help prioritize genes for further research, diagnostics, or therapeutic development based on their widespread involvement in diseases.",
      inidces: ["Start by counting how many disorders are linked to each genetic element.",
        "Use a subquery to perform this count.",
        "Filter results to keep only those with more than 10 links.",
        "Return the label (name) of each gene and the total number of associated disorders.",
        "Sort the result to show the most frequently involved genes first." ],
      query: `PREFIX ordo: <http://www.orpha.net/ORDO/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>

SELECT ?gene ?geneLab ?nbD
WHERE {
  {
    SELECT ?g (COUNT(?d) AS ?nbD)
    WHERE {
      ?r owl:onProperty ?rel.
      ?g rdfs:label ?gLabel.
      ?g rdfs:subClassOf ?r.
      ?g rdfs:subClassOf ?class.
      ?class rdfs:subClassOf ?sc.
      FILTER (?sc = ordo:Orphanet_C010)
      ?r owl:someValuesFrom ?d.
    }
    GROUP BY ?g
  }

  FILTER (?nbD > 10)

  BIND (?g AS ?gene)
  ?gene rdfs:label ?geneLab.
}
ORDER BY DESC(?nbD)
`,
      ontologies: [
        "ORDO",
        "RDFS",
        "OWL",
      ],
      sparqlConcepts: [
        "PREFIX",
        "SELECT",
        "COUNT()",
        "FILTER",
        "GROUP BY",
        "BIND",
        "ORDER BY"
      ],
      level: "level 1",
      rdfResultExample: ``,
    },
    {
      id: 4,
      name: "Getting the label and mapping information about a concept.",
      slug: "concept-label-and-mappings",
      date: "08/06/2025",
      image: img2,
      description: "Retrieve all information related to a specific disease concept, including its label and any mapping-related metadata that might connect it to other vocabularies or systems.",
      context: "We want to explore all the available information about a specific disease concept, including its name and how it is connected to related concepts in other systems. This helps build a clearer understanding of how this disease is described and reused in various biomedical knowledge sources.",
      inidces: ["Focus on one concept, using its identifier (e.g. Orphanet_558).",
        "Search for all direct triples where this concept is the subject.",
        "Optionally, look at the object of these triples and retrieve further labels if available (e.g. through mappings).",
        "Use OPTIONAL to explore extra information without breaking the query if it doesn't exist.",
        "Order the results for readability." ],
      query: `PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX oboInOwl: <http://www.geneontology.org/formats/oboInOwl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX Orphanet_: <http://www.orpha.net/ORDO/Orphanet_#>
PREFIX ORDO: <http://www.orpha.net/ORDO/>

SELECT ?s ?p ?o 
WHERE {
  ?s ?p ?o.
  OPTIONAL {
    ?o ?m ?v.
    ?v rdfs:label ?e
  }
  FILTER (?s = ORDO:Orphanet_558)
}
ORDER BY ?o
`,
      ontologies: [
        "ORDO",
        "RDFS",
        "OWL",
        "OBO",
        "OBOInOwl",
        "DC"
      ],
      sparqlConcepts: [
        "PREFIX",
        "SELECT",
        "Triple pattern",
        "OPTIONAL",
        "FILTER",
        "ORDER BY"
      ],
      level: "level 1",
      rdfResultExample: ``,
    },
    {
      id: 5,
      name: "Counting the total number of Disorder-HPO associations in HOOM.",
      slug: "hoom-hpo-association-count",
      date: "08/06/2025",
      image: img3,
      description: "Count how many formal associations exist between disorders and Human Phenotype Ontology (HPO) terms in the HOOM model.",
      context: "The goal is to quantify how many associations exist between diseases and phenotypic traits, which can be crucial for understanding how well a disease is phenotypically described. A higher number of associations can reflect a richer clinical characterization and support improved diagnosis or research.",
      inidces: ["Look for association classes defined in the ontology (rdfs:subClassOf).",
        "These associations are described using logical definitions with owl:equivalentClass and owl:intersectionOf.",
        "Traverse RDF lists using rdf:rest*/rdf:first to access individual elements.",
        "Focus only on counting, no need to return the actual associations."],
      query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT (COUNT(?association) as ?Association_Amount)
WHERE {
    ?association rdfs:subClassOf ?type .
    ?association owl:equivalentClass ?node .
    ?node owl:intersectionOf ?list .
    ?list rdf:rest*/rdf:first ?item .
    ?item owl:onProperty ?Property .
    ?item owl:someValuesFrom ?Id .
}
`,
      ontologies: [
        "HOOM",
        "RDFS",
        "RDF",
        "OWL",
      ],
      sparqlConcepts: [
        "PREFIX",
        "SELECT",
        "rdf:rest*/rdf:first",
        "COUNT()"
      ],
      level: "level 2",
      rdfResultExample: ``,
    },
    {
      id: 6,
      name: "Counting database cross-references for rare diseases",
      slug: "rare-diseases-dbxref-count",
      date: "08/06/2025",
      image: img3,
      description: "List rare diseases with their labels and count how many database cross-references they have. Then, order this list from the diseases with the most references to those with fewer.",
      context: "We want to identify which rare diseases have the richest connections to external biomedical databases by counting how many database cross-references each disease has. This information helps prioritize diseases that are extensively linked and potentially better studied.",
      inidces: ["Select diseases that have database cross-reference properties.",
        "Retrieve their human-readable labels.",
        "Use aggregation (COUNT) grouped by disease and label.",
        "Sort the results by descending number of cross-references to highlight the most connected diseases."],
      query: `PREFIX ORDO: <http://www.orpha.net/ORDO/>
PREFIX oboInOwl: <http://www.geneontology.org/formats/oboInOwl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?disease ?label (COUNT(?dbxref) AS ?mappings) 
WHERE {
  ?disease oboInOwl:hasDbXref ?dbxref ;
           rdfs:label ?label .
}
GROUP BY ?disease ?label
ORDER BY DESC(?mappings)
`,
      ontologies: [
        "HOOM",
        "RDFS",
        "RDF",
        "OWL",
      ],
      sparqlConcepts: [
        "PREFIX",
        "SELECT",
        "GROUP BY",
        "ORDER BY DESC",
        "COUNT()"
      ],
      level: "level 2",
      rdfResultExample: ``,
    },
    {
      id: 7,
      name: "Most frequently referenced external database identifiers in Orphanet diseases",
      slug: "frequent-dbxref-orphanet",
      date: "08/06/2025",
      image: img3,
      description: "Count how many distinct diseases reference each external database identifier and rank these identifiers by their frequency of use.",
      context: "The goal is to determine which external database identifiers are most commonly linked to rare diseases in Orphanet. This helps identify key reference databases that are widely used across disease descriptions.",
      inidces: ["Focus on the property that links diseases to external database identifiers.",
        "Use COUNT(DISTINCT ?disease) to avoid double counting diseases linked multiple times to the same identifier.",
        "Group results by the external database identifier.",
        "Sort results by descending count to find the most referenced identifiers."],
      query: `PREFIX ORDO: <http://www.orpha.net/ORDO/>
PREFIX oboInOwl: <http://www.geneontology.org/formats/oboInOwl#>

SELECT ?dbxref (COUNT(DISTINCT ?disease) AS ?linkedDiseases) WHERE {
  ?disease oboInOwl:hasDbXref ?dbxref .
}
GROUP BY ?dbxref
ORDER BY DESC(?linkedDiseases)
`,
      ontologies: [
        "ORDO",
        "OboInOwl",
      ],
      sparqlConcepts: [
        "PREFIX",
        "SELECT",
        "GROUP BY",
        "ORDER BY DESC",
        "COUNT(DISTINCT ...)"
      ],
      level: "level 2",
      rdfResultExample: ``,
    },
    {
      id: 8,
      name: "Getting ORDO mappings for Lyme disease",
      slug: "lyme-ordo-mappings",
      date: "08/06/2025",
      image: img1,
      description: "Retrieve the external database mappings linked to Lyme disease.",
      context: "We want to find all external database identifiers that are mapped to Lyme disease within the ORDO dataset. This helps understand the external references and cross-links available for this specific disease.",
      inidces: ["Identify the disease by its ORDO identifier (here Lyme disease = Orphanet_91546).",
        "Select all values associated with the property for database cross-references (hasDbXref).",
        "No grouping or sorting needed since it’s a direct property lookup."],
      query: `PREFIX oboInOwl: <http://www.geneontology.org/formats/oboInOwl#>
PREFIX ordo: <http://www.orpha.net/ORDO/>

SELECT ?object WHERE { 
	ordo:Orphanet_91546 oboInOwl:hasDbXref ?object .
}
`,
      ontologies: [
        "ORDO",
        "OboInOwl",
      ],
      sparqlConcepts: [
        "PREFIX",
        "SELECT",
        "GROUP BY",
        "ORDER BY DESC",
      ],
      level: "level 0",
      rdfResultExample: ``,
    },
  ];
  