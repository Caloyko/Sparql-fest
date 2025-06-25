import { SparqlConcepts, sparqlConceptsList } from "../sparql-concept";
import { TaskStatus, Tuto } from "./tuto_type";

export const lymeMapping: Tuto = {
    title: "Retrieving information about Lyme Disease from ORDO",
    img: "https://cdn.firespring.com/images/9e1b5776-a8f4-4744-91fb-f7a0f6a74907.jpg",
    level: "Progressive",
    slug: "mapping-lyme",
    category: "Beginner",
    description: `
The *Semantic Web* contains a vast and interconnected set of resources. For a single disease like **Lyme disease**, multiple descriptions and identifiers may exist across various ontologies. To understand how entities are semantically connected, we will investigate how Lyme disease is represented and linked starting from the **Orphanet Rare Disease Ontology (ORDO)**.  
  - 
The objective of this tutorial is to retrieve and explore information about Lyme disease. We will start from the ORDO ontology and use its resource describing Lyme disease as an entry point. From there, we will see how to expand our understanding of the disease using semantic connections and external references.
`,
    date: new Date("2025-06-25"),
    status: TaskStatus.InProgress,
    content: [
        {
            id: 1,
            section_title: "1 - Identifying Lyme disease in ORDO with Orphacode",
            description: "The first step is to understand the **ORDO ontology** and identify how Lyme disease is represented. We aim to find the **ORPHAcode** (the unique identifier used by ORDO) for Lyme disease by using its label, and extract the associated URI and basic description.",
            sparql_concept: [
                {
                    name: "Orphacode",
                    description: "An Orphacode is a unique identifier assigned by Orphanet to classify rare diseases. It allows precise referencing and is used in the Orphanet ontology (ORDO). Orphanet also provides a web interface where users can easily search for rare diseases by name, code, or associated clinical information.",
                    example: `ORPHA:1899`,
                    w3c_link: "https://www.orpha.net/"
                },
                {
                    name: SparqlConcepts.PREFIX,
                    description: "A PREFIX in SPARQL defines a shorthand alias for a longer URI, helping you reference ontology terms more easily—load it by declaring it at the top with PREFIX prefixName: <full-URI>.",
                    example: `PREFIX ordo: <http://www.orpha.net/ORDO/>`,
                    w3c_link: "https://www.orpha.net/"
                },
                {
                    name: "ORDO",
                    description: "To query ORDO with SPARQL locally, you need to download the ORDO /OWL file and load it into a local triple store like GraphDB or Apache Jena. (You can find it on OLS)",
                    example: `ORDO_en_4.6.owl`,
                    w3c_link: "https://www.ebi.ac.uk/ols4/ontologies/ordo?tab=properties"
                },
            ],
            conclusion: `This query returns a table of *predicates* and *objects* for **ordo:Orphanet_91546**, and if you want, you can add a fixed subject column by including **BIND(ordo:Orphanet_91546 AS ?s)** in the WHERE clause.`,  
            query: "lyme-mapping-2-orphacode"
        },
        {
            id: 2,
            section_title: "2 - Identifying Lyme disease in ORDO with label",
            description: "In the previous section we saw how to identify a concept using an orphacode, but unfortunately it is not always possible to know the orphacode in question beforehand. Here we're going to try and find the references to LYME Disease in ORDO to identify the orphacode in another way.",
            sparql_concept: [
                {
                    name: "rdfslabel",
                    description: "Used to retrieve the human-readable label (name) of a resource, often used for display or search purposes.",
                    example: `
                PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                
                SELECT ?label WHERE {
                  <http://www.orpha.net/ORDO/Orphanet_91546> rdfs:label ?label .
                }`,
                    w3c_link: "https://www.w3.org/TR/rdf-schema/#ch_label"
                },
                {
                    name: SparqlConcepts.FILTER,
                    description: "Restricts the results of a query based on a given condition or expression.",
                    example: `
                SELECT ?x WHERE {
                  ?x ?p ?o .
                  FILTER(?o > 10)
                }`,
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#func-filter"
                },
                {
                    name: SparqlConcepts.CONTAINS,
                    description: "Returns true if the first string contains the second string (case-sensitive). Often used to search text within labels.",
                    example: `
                FILTER(CONTAINS(?label, "Lyme"))`,
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#func-contains"
                },
                {
                    name: SparqlConcepts.LCASE,
                    description: "Converts a string to lowercase, useful when performing case-insensitive comparisons.",
                    example: `
                FILTER(CONTAINS(LCASE(?label), "lyme"))`,
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#func-lcase"
                },
                {
                    name: SparqlConcepts.STR,
                    description: "Converts an RDF term (like a URI or literal) into its string form, useful before applying string functions.",
                    example: `
                FILTER(CONTAINS(LCASE(STR(?label)), "lyme"))`,
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#func-str"
                }                
            ],
            conclusion: `This query helped retrieve both the **label** and the **URI (with OrphaCode)** of Lyme disease from ORDO using a case-insensitive label search. It’s a useful approach when the *exact identifier is unknown.*`,  
            query: "lyme-mapping-1-label"
        },
        {
            id: 3,
            section_title: "3 - Extracting cross-references to external ontologies",
            description: `In part 1, we retrieved all the triples related to Lyme disease using its ORDO identifier. In this section, the goal is to understand and extract links to **external ontologies** (e.g., OMIM, MeSH, ICD) by analyzing the result of the first query.  
            These cross-references provide **interoperability** and are essential for connecting ORDO to other biomedical datasets.`,
            sparql_concept: [
                {
                    name: "oboInOwl:hasDbXref",
                    description: "A property used to indicate a cross-reference (database reference) to an external source such as OMIM, MeSH, Mondo or ICD. It is commonly used in OBO ontologies to facilitate data integration.",
                    w3c_link: "https://www.ebi.ac.uk/ols4/ontologies/ado/properties/http%253A%252F%252Fwww.geneontology.org%252Fformats%252FoboInOwl%2523hasDbXref"
                }
            ],
            conclusion: "This query shows how ORDO links Lyme disease to external databases, we have **5 results.**",
            query: "lyme-mapping-3-xrefs"
        }
        
        
    ]
};

export default lymeMapping;
