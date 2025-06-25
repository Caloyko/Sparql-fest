import { ReactNode } from "react";
import { SparqlConcepts } from "../sparql-concept";

interface SparqlConcept {
    name: SparqlConcepts | string;
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
export enum TaskStatus {
    InProgress = 'InProgress',
    Done = 'Done',
    NeedsReview = 'NeedsReview'
  }

export interface Tuto {
    img?: string;
    title: string;
    level: string;
    content: Section[];
    category: string;
    date: Date;
    slug: string;
    status: TaskStatus
    description?: ReactNode;
}
