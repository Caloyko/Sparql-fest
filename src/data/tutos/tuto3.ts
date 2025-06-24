import { SparqlConcepts } from "../sparql-concept";
import { TaskStatus, Tuto } from "./tuto_type";

export const tuto3: Tuto = {
    img: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Level 3 - Advanced: Structuring and multiple sources",
    level: "Level 3 - Advanced",
    slug: "sparql-advanced3",
    category: "Advanced",
    date: new Date("2025-06-24"),
    status: TaskStatus.InProgress,
    content: [
        {
            id: 1,
            section_title: "1 - Queries with named graphs",
            description: "Query specific subsets or external graphs.",
            sparql_concept: [
                {
                    name: SparqlConcepts.GRAPH,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.FROM,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#specDataset"
                },
                {
                    name: SparqlConcepts.FROM_NAMED,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#specDataset"
                },
            ],
            conclusion: ``,  
            query: ""
        },
        {
            id: 2,
            section_title: "2 - Subqueries and values",
            description: "Limit or enrich results with subqueries.",
            sparql_concept: [
                {
                    name: SparqlConcepts.SELECT_WHERE,
                    description: "Nested query (SELECT ... WHERE { ... })",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.VALUES,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#inline-data"
                },
            ],
            conclusion: ``,  
            query: ""
        },
        {
            id: 3,
            section_title: "3 - Advanced filter operators",
            description: "",
            sparql_concept: [
                {
                    name: SparqlConcepts.IN,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.BOUND,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#func-bound"
                },
                {
                    name: SparqlConcepts.ISIRI,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#func-isIRI"
                },
                {
                    name: SparqlConcepts.ISLITERAL,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#func-isLiteral"
                },
                {
                    name: SparqlConcepts.ISBLANK,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#func-isBlank"
                },
            ],
            conclusion: ``,  
            query: ""
        },
    ]
};

export default tuto3;
