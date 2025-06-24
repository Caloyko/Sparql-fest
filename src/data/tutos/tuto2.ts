import { SparqlConcepts } from "../sparql-concept";
import { Tuto } from "./tuto_type";

export const tuto2: Tuto = {
    title: "Level 2 - Intermediate: Refinement of queries",
    level: "Level 2 - Intermediate",
    slug: "sparql-intermediate",
    category: "Level 2",
    date: new Date("2025-06-24"),
    content: [
        {
            id: 1,
            section_title: "1 - Aggregation functions",
            description: "",
            sparql_concept: [
                {
                    name: SparqlConcepts.COUNT,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.SUM,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.AVG,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.MIN,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.MAX,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.GROUP_BY,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.HAVING,
                    description: "",
                    w3c_link: ""
                },
            ],
            conclusion: ``,  
            query: ""
        },
        {
            id: 2,
            section_title: "2 - Unique and Ordered results",
            description: "",
            sparql_concept: [
                {
                    name: SparqlConcepts.DISTINCT,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.ORDER_BY,
                    description: "",
                    w3c_link: ""
                },
            ],
            conclusion: ``,  
            query: ""
        },
        {
            id: 3,
            section_title: "3 - Graph navigation",
            description: "",
            sparql_concept: [
                {
                    name: SparqlConcepts.INVERSE,
                    description: "",
                    w3c_link: ""
                },
                {
                    name: SparqlConcepts.TYPE,
                    description: "",
                    w3c_link: ""
                },
                // TODO :  path like ?s <prop1>/<prop2> ?o
            ],
            conclusion: ``,  
            query: ""
        },
    ]
};

export default tuto2;
