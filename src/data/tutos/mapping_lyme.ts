import { SparqlConcepts } from "../sparql-concept";
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
            section_title: "2 - Identifying Lyme disease in ORDO",
            description: "The first step is to understand the **ORDO ontology** and identify how Lyme disease is represented. We aim to find the **ORPHAcode** (the unique identifier used by ORDO) for Lyme disease by using its label, and extract the associated URI and basic description.",
            sparql_concept: [
                {
                    name: "Orphacode",
                    description: "",
                    example: ``,
                    example_comment: `This means:  
    -   Whenever we write **wd:Q12136**, it actually means **http://www.wikidata.org/entity/Q12136.**`,
                    w3c_link: "https://www.w3.org/TR/sparql11-query/#prefNames"
                },
            ],
            conclusion: `This query searches for any entity that has the English label "Lyme disease". If found in ORDO, the result will include its full URI (e.g., http://www.orpha.net/ORDO/Orphanet_905). This URI is the identifier we will use to explore all the related data about Lyme disease.`,  
            query: "lyme-mapping-1-ordo"
        },
        
    ]
};

export default lymeMapping;
