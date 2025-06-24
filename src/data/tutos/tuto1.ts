import { SparqlConcepts } from "../sparql-concept";
import { Tuto } from "./tuto_type";

export const tuto1: Tuto = {
    title: " Level 1 - Beginner : Basics of the SPARQL language",
    level: "Level 1 - Beginner",
    slug: "sparql-basis",
    category: "Level 1",
    date: new Date("2025-06-24"),
    content: [
        {
            id: 1,
            section_title: "Section 1.1 – Structure of a SPARQL Query",
            description: "In this lesson, you will learn how to structure a minimal SPARQL query using the most essential components. You will see how to retrieve data from a real-world SPARQL endpoint, Wikidata, using a healthcare-related example.",
            sparql_concept: [
                {
                    name: SparqlConcepts.PREFIX,
                    description: "The ***PREFIX*** keyword defines **shortcuts (aliases)** for commonly used namespaces. Instead of writing long URIs (Uniform Resource Identifiers) repeatedly, you can define them once at the top of the query.",
                    example: `PREFIX wd: <http://www.wikidata.org/entity/>`,
                    example_comment: `This means:  
    -   Whenever we write **wd:Q12136**, it actually means **http://www.wikidata.org/entity/Q12136.**`,
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#prefNames"
                },
                {
                    name: SparqlConcepts.SELECT,
                    description: "The ***SELECT*** clause specifies **which variables** you want to see in the query result. These are written with a question mark (e.g., ?label).",
                    example: 'SELECT ?disease ?label',
                    example_comment : `This means:  
    -   Return a list of diseases (?disease) and their labels (?label).`,
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#select"
                },
                {
                    name: SparqlConcepts.WHERE,
                    description: "The ***WHERE*** clause defines the **pattern** to match in the RDF graph. It’s where you write the relationships (triples) that describe what kind of data you’re looking for.",
                    example: `WHERE {
  ?disease wdt:P31 wd:Q12136 .
  ?disease rdfs:label ?label .
}`,
                    example_comment: `This means:  
    -  Find all items **?disease** that are instances of **wd:Q12136** (which stands for disease in *Wikidata*).   
    -  Then find each disease’s label (**rdfs:label**), such as "Malaria" or "Lyme DISEASE".`,
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#WritingSimpleQueries",

                }
            ],
            conclusion: `These three components together make up the skeleton of any SPARQL query:  
    - **PREFIX** gives semantic context and simplifies IRIs,  
    - **SELECT** tells what to retrieve,  
    - **WHERE** describes what to match.`,  
            query: "tuto-1-basic-disease-labels"
        },
        // TODO
        {
            id: 2,
            section_title: "2 – Structure of a SPARQL Query",
            description: "Understanding the structure of a SPARQL query is the foundation for writing meaningful queries over RDF data. SPARQL follows a pattern-matching approach where queries are made up of graph patterns that describe what kind of data to retrieve.",
            sparql_concept: [
                {
                    name: SparqlConcepts.PREFIX,
                    description: "The PREFIX keyword is used to define short aliases (prefixes) for long URIs that appear frequently in RDF datasets. Since RDF resources are typically identified by long IRIs (e.g., http://xmlns.com/foaf/0.1/name), PREFIX helps simplify and clarify queries, making them more readable.",
                    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>`,
                    example_comment: "After this, we can use foaf:name instead of writing the full IRI each time.",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#prefNames"
                },
                {
                    name: SparqlConcepts.SELECT,
                    description: "The SELECT clause specifies what variables (i.e., pieces of data) we want the query to return. Each variable is prefixed by a ? (e.g., ?person, ?name). This clause defines the shape of the results table, i.e., the columns of the returned dataset.",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#select"
                },
                {
                    name: SparqlConcepts.WHERE,
                    description: "The WHERE clause contains the pattern of RDF triples we are trying to match. Each triple is written as:",
                    example: "?subject ?predicate ?object",
                    example_comment: "This is where the actual filtering and data selection logic happens: SPARQL will return all results that match this pattern in the dataset.",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#WritingSimpleQueries",

                }
            ],
            conclusion: `These three concepts together make up the skeleton of any SPARQL query:
- PREFIX gives semantic context and simplifies IRIs,
SELECT tells what to retrieve,
WHERE describes what to match.`,
            query: "tuto-1-basic-disease-labels"
        },
        {
            id: 3,
            section_title: "3 – Structure of a SPARQL Query",
            description: "Understanding the structure of a SPARQL query is the foundation for writing meaningful queries over RDF data. SPARQL follows a pattern-matching approach where queries are made up of graph patterns that describe what kind of data to retrieve.",
            sparql_concept: [
                {
                    name: SparqlConcepts.PREFIX,
                    description: "The PREFIX keyword is used to define short aliases (prefixes) for long URIs that appear frequently in RDF datasets. Since RDF resources are typically identified by long IRIs (e.g., http://xmlns.com/foaf/0.1/name), PREFIX helps simplify and clarify queries, making them more readable.",
                    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>`,
                    example_comment: "After this, we can use foaf:name instead of writing the full IRI each time.",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#prefNames"
                },
                {
                    name: SparqlConcepts.SELECT,
                    description: "The SELECT clause specifies what variables (i.e., pieces of data) we want the query to return. Each variable is prefixed by a ? (e.g., ?person, ?name). This clause defines the shape of the results table, i.e., the columns of the returned dataset.",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#select"
                },
                {
                    name: SparqlConcepts.WHERE,
                    description: "The WHERE clause contains the pattern of RDF triples we are trying to match. Each triple is written as:",
                    example: "?subject ?predicate ?object",
                    example_comment: "This is where the actual filtering and data selection logic happens: SPARQL will return all results that match this pattern in the dataset.",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#WritingSimpleQueries",

                }
            ],
            conclusion: `These three components together make up the skeleton of any SPARQL query:
PREFIX gives semantic context and simplifies IRIs,
SELECT tells what to retrieve,
WHERE describes what to match.`,
            query: "tuto-1-basic-disease-labels"
        },
    ]
};

export default tuto1;
