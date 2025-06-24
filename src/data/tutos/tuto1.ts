import { SparqlConcepts } from "../sparql-concept";
import { TaskStatus, Tuto } from "./tuto_type";

export const tuto1: Tuto = {
    title: " Level 1 - Beginner : Basics of the SPARQL language",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Level 1 - Beginner",
    slug: "sparql-basis",
    category: "Beginner",
    date: new Date("2025-06-24"),
    status: TaskStatus.NeedsReview,
    content: [
        {
            id: 1,
            section_title: "1 - Structure of a SPARQL Query",
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
        {
            id: 2,
            section_title: "2 - Understanding Triples, Variables, and the `a` Abbreviation",
            description: "This section explains the basic structure of data in SPARQL queries: the **triple pattern.** You will also learn how to use **variables** to retrieve values from a dataset, and how to simplify your query using the a keyword, which stands for *rdf:type.*",
            sparql_concept: [
                {
                    name: SparqlConcepts.RDFTRIPLE,
                    description: `An RDF triple is the basic data structure in SPARQL. Each triple is composed of three parts:  
    - **Subject** (the entity we're talking about)
    - **Predicate** (the property or relationship)
    - **Object** (the value or related entity)`,
                    example: `?disease wdt:P279 wd:Q12136 .`,
                    example_comment: `This means:  
    - **?disease** is a subclass (**P279**) of **Q12136** (disease).`,
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.VARIABLE,
                    description: `SPARQL uses variables to request unknown information. Variables start with a question mark, e.g. *?label*, *?disease*, *?drug*. These are placeholders: SPARQL will fill them with matching values.`,
                    example: `SELECT ?disease ?label`,
                    example_comment: `This means:
    - Give me the values of the variables ?disease and ?label that match the pattern.`,
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.A,
                    description: "The keyword ***a*** is a *shortcut for* **rdf:type**, which is used to say that a resource is of a certain class/type.",
                    example: `?disease a wd:Q12136 .
# This is equivalent to:

?disease rdf:type wd:Q12136 .
`,
                    example_comment: "Both mean: '*?disease* is a disease'. Using **a** makes queries **shorter** and **easier to read.**",
                    w3c_link: "",
                }
            ],
            conclusion: `In this section, you’ve learned:  
    - How SPARQL queries are structured using **RDF triples**.  
    - How to use **variables** to retrieve unknown values.  
    - How the **a keyword** simplifies the use of rdf:type to declare the type of a resource.  
These foundational tools are essential to building more complex SPARQL queries. In the next section, we’ll explore how to **filter** data and **limit** results for cleaner outputs.`,
            query: "tuto-1-medical-conditions-labels"
        },
        {
            id: 3,
            section_title: "3 - Filtering and Limiting Results",
            description: "This section focuses on improving the **precision** and **readability** of SPARQL query results. You'll learn how to **filter** results based on language or values, how to **limit** the number of results returned, and how to use DISTINCT to avoid duplicates.",
            sparql_concept: [
                {
                    name: SparqlConcepts.FILTER,
                    description: "The **FILTER** clause allows you to *narrow down* the results of your query based on specific criteria. It can be used with strings, numbers, dates, or language tags.",
                    example: `# Only labels in English: 
FILTER(LANG(?label) = "en")  

# Only names that contain "disease":
FILTER(CONTAINS(LCASE(?label), "disease"))`,
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#termConstraint"
                },
                {
                    name: SparqlConcepts.LANG,
                    description: "The ***LANG()*** function is often used inside a filter to check the *language tag* of a string. It is especially useful when querying multilingual datasets like Wikidata.",
                    example: `FILTER(LANG(?label) = "en")`,
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#func-lang"
                },
                {
                    name: SparqlConcepts.LIMIT,
                    description: "Use LIMIT to restrict the number of rows returned. This is very helpful for debugging or to avoid overwhelming outputs in large datasets.",
                    example: "LIMIT 10",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#modResultLimit",
                },
                {
                    name: SparqlConcepts.DISTINCT,
                    description: "The ***DISTINCT*** keyword ensures that each returned result is *unique*. Without it, you may get duplicate rows if the same entity matches multiple times.",
                    example: "SELECT DISTINCT ?drug",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#sparqlDistinct",
                },
            ],
            conclusion: `In this section, you’ve learned how to:  
    - Use **FILTER** to refine query results.  
    - Select only results in a specific language using **LANG().**  
    - Avoid duplicates with **DISTINCT.**  
    - Reduce the number of results with **LIMIT.**  
These tools help you **clean up and control** the data your queries return. This is essential when working with large and multilingual datasets like **Wikidata.**`,
            query: "tuto-1-basic-drug-list-filtered"
        },
        {
            id: 4,
            section_title: "4 - Optional and Alternative properties",
            description: "When working with open datasets like Wikidata, it's common to encounter missing, optional, or alternative information. SPARQL provides two essential tools to help deal with this: **OPTIONAL** and **UNION**.",
            sparql_concept: [
                {
                    name: SparqlConcepts.OPTIONAL,
                    description: "Allows you to **optionally match** a triple pattern. If the optional data exists, it will be included; if it doesn't, the rest of the result will still be returned.",
                    example: `OPTIONAL { ?item wdt:P18 ?image . }`,
                    example_comment : "Useful when not all entities have a certain property (like an image or description), but you still want them included in results.",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#optionals"
                },
                {
                    name: SparqlConcepts.UNION,
                    description: "Combines **multiple patterns** in a logic OR. Results that match any of the unioned patterns will be included.",
                    example: `{ ?item wdt:P31 wd:Q12136 } UNION { ?item wdt:P31 wd:Q5 }`,
                    example_comment: `Useful to retrieve different types of entities (e.g. medical conditions OR people) in the same query result.`,
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#alternatives"
                },
            ],
            conclusion: `This section introduced two key tools for making your queries more flexible:  
    - **OPTIONAL:** Helps you avoid missing data by returning what is available without excluding entities.  
    - **UNION:** Gives you logical alternatives—perfect when entities may match different shapes or classifications.  
These features are essential for querying **real-world, incomplete RDF datasets**, especially in large knowledge graphs like Wikidata.`,
            query: "tuto-1-disease-cause-or-symptom"
        },
    ]
};

export default tuto1;
