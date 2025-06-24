import { SparqlConcepts } from "../sparql-concept";

interface SparqlConcept {
    name: SparqlConcepts;
    description: string;
    example?: string;
    example_comment?: string;
    w3c_link: string;
}

interface Section {
    id: number;
    section_title: string;
    description:  string;
    sparql_concept: SparqlConcept[];
    conclusion: string;
    query: string;
}

export interface Tuto {
    title: string;
    level: string;
    content: Section[];
    category: string;
    date: Date;
    slug: string;
}
