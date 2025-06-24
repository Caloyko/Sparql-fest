import { SparqlConcepts } from "../sparql-concept";
import { TaskStatus, Tuto } from "./tuto_type";

export const tuto2: Tuto = {
    title: "Level 2 - Intermediate: Refinement of queries",
    img: "https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Level 2 - Intermediate",
    slug: "sparql-intermediate",
    category: "Intermediate",
    date: new Date("2025-06-24"),
    status: TaskStatus.InProgress,
    content: [
        {
            id: 1,
            section_title: "1 - Aggregation functions",
            description: "",
            sparql_concept: [
                {
                    name: SparqlConcepts.COUNT,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#defn_aggCount"
                },
                {
                    name: SparqlConcepts.SUM,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#defn_aggSum"
                },
                {
                    name: SparqlConcepts.AVG,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#defn_aggAvg"
                },
                {
                    name: SparqlConcepts.MIN,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#defn_aggMin"
                },
                {
                    name: SparqlConcepts.MAX,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#defn_aggMax"
                },
                {
                    name: SparqlConcepts.GROUP_BY,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#groupby"
                },
                {
                    name: SparqlConcepts.HAVING,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#having"
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
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#sparqlDistinct"
                },
                {
                    name: SparqlConcepts.ORDER_BY,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#sparqlOrderBy"
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
                    name: SparqlConcepts.INVERSE_PATH,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#propertypaths"
                },
                {
                    name: SparqlConcepts.TYPE,
                    description: "",
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#abbrevRdfType"
                },
                // TODO :  path like ?s <prop1>/<prop2> ?o
            ],
            conclusion: ``,  
            query: ""
        },
    ]
};

export default tuto2;
