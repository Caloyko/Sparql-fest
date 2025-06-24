import { SparqlConcepts } from "../sparql-concept";
import { TaskStatus, Tuto } from "./tuto_type";

export const tuto4: Tuto = {
    title: "Level 4 - Advanced: Complex queries and performance",
    img: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Level 4 - Advanced",
    slug: "sparql-advanced4",
    category: "Advanced",
    date: new Date("2025-06-24"),
    status: TaskStatus.InProgress,
    content: [
        {
            id: 1,
            section_title: "1 - SPARQL functions and expressions",
            description: "to manipulate strings, manage languages and missing values.",
            sparql_concept: [
                {
                    name: SparqlConcepts.STR,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.CONCAT,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.LANG,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.REPLACE,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.IF,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.COALESCE,
                    description: "",
                    w3c_link: ""
                },
            ],
            conclusion: ``,  
            query: ""
        },
        {
            id: 2,
            section_title: "2 - CONSTRUCT and DESCRIBE queries",
            description: "generate an RDF graph as output and obtain descriptions around a resource.",
            sparql_concept: [
                {
                    name: SparqlConcepts.CONSTRUCT,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.DESCRIBE,
                    description: "",
                    w3c_link: ""
                },
            ],
            conclusion: ``,  
            query: ""
        },
        {
            id: 3,
            section_title: "3 - Queries using SERVICE",
            description: "query a remote SPARQL endpoint in the same query.",
            sparql_concept: [
                {
                    name: SparqlConcepts.SERVICE,
                    description: "",
                    w3c_link: ""
                },
            ],
            conclusion: ``,  
            query: ""
        },
        {
            id: 4,
            section_title: "4 - Optimising queries",
            description: "Avoid slowness, optimise joins and negations.",
            sparql_concept: [
                {
                    name: SparqlConcepts.FILTER,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#neg-pattern"
                },
                {
                    name: SparqlConcepts.EXISTS,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#func-filter-exists"
                },
                {
                    name: SparqlConcepts.MINUS,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#neg-minus"
                },
                {
                    name: SparqlConcepts.NOT_EXISTS,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#func-filter-exists"
                },
            ],
            conclusion: ``,  
            query: ""
        },
    ]
};

export default tuto4;
