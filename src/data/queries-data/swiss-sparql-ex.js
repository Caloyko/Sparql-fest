// sib-swiss-sparql-example

// update 17-06-2025
export const swissQueries = [
    // BGEE
    {
        name: "What are the species present in Bgee?",
        slug: "what-are-the-species-present-in-bgee",
        date: "29/08/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What are the species present in Bgee?",
        context: "BGEE - 1 : Querying Bgee to retrieve all species with taxonomic rank 'Species'.",
        inidces: [],
        query: `
      PREFIX up: <http://purl.uniprot.org/core/>
      
      SELECT ?species WHERE {
          ?species a up:Taxon .
          ?species up:rank up:Species .
      }
        `,
        ontologies: [
          "UNIPROT",
          "BGEE"
        ],
        sparqlConcepts: [
          "PREFIX",
          "SELECT",
          "WHERE",
          "a (rdf:type)"
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "Species present in Bgee (scientific and common names)",
        slug: "species-present-in-bgee-scientific-common-names",
        date: "29/08/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What are the species present in Bgee and their scientific and common names?",
        context: "BGEE - 2",
        inidces: [],
        query: `PREFIX up: <http://purl.uniprot.org/core/>

SELECT ?species ?sci_name ?common_name WHERE {
    ?species a up:Taxon ;
        up:scientificName ?sci_name ;
        up:rank up:Species .
    OPTIONAL { ?species up:commonName ?common_name . }
}`,
        ontologies: [
          "UNIPROT",
          "BGEE"
        ],
        sparqlConcepts: [
          "OPTIONAL",
          "SELECT",
          "WHERE",
        ],
        level: "level 0",
        rdfResultExample: ``
      },
      {
        name: "Anatomical entities where the APOC1 gene is expressed",
        slug: "anatomical-entities-APOC1",
        date: "29/08/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What are the anatomical entities where the APOC1 gene is expressed?",
        context: "BGEE - 3",
        inidces: [],
        query: `PREFIX genex: <http://purl.org/genex#>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?anat ?anatName WHERE {
    ?seq a orth:Gene ;
        genex:isExpressedIn ?anat ;
        rdfs:label "APOC1" .
    ?anat a genex:AnatomicalEntity ;
        rdfs:label ?anatName .
}`,
        ontologies: [
          "BGEE",
          "GENEX",
          "ORTH",
          "RDFS"
        ],
        sparqlConcepts: [
          "OPTIONAL",
          "SELECT",
          "DISTINCT",
          "WHERE",
        ],
        level: "level 0",
        rdfResultExample: ``
      },
      {
        name: "Anatomical entities where the APOC1 Homo sapiens gene is expressed",
        slug: "anatomical-entities-APOC1-homo-sapiens",
        date: "29/08/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What are the anatomical entities where the APOC1 Homo sapiens gene is expressed?",
        context: "BGEE - 4",
        inidces: [],
        query: `PREFIX genex: <http://purl.org/genex#>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX up: <http://purl.uniprot.org/core/>

SELECT DISTINCT ?geneName ?anat ?anatName WHERE {
    ?seq a orth:Gene ;
        genex:isExpressedIn ?anat ;
        rdfs:label ?geneName .
    ?anat a genex:AnatomicalEntity ;
        rdfs:label ?anatName .
    ?seq orth:organism ?organism .
    ?organism obo:RO_0002162  ?species .
    ?species a up:Taxon ;
        up:scientificName "Homo sapiens" .
    FILTER (LCASE(?geneName) = LCASE('APOC1') )
}`,
        ontologies: [
          "BGEE",
          "GENEX",
          "ORTH",
          "OBO",
          "RDFS",
          "UNIPROT"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
          "FILTER",
          "LCASE"
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "Anatomical entities where the APOC1 gene is expressed independently of the developmental stage, sex, strain and cell type",
        slug: "anatomical-entities-APOC1-independently",
        date: "29/08/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What are the anatomical entities where the APOC1 gene is expressed independently of the developmental stage, sex, strain and cell type?",
        context: "BGEE - 5",
        inidces: [],
        query: `PREFIX efo: <http://www.ebi.ac.uk/efo/>
PREFIX genex: <http://purl.org/genex#>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?anat ?anatName {
    ?seq a orth:Gene ;
        genex:isExpressedIn ?condition ;
        rdfs:label "APOC1" .
    ?condition a genex:ExpressionCondition ;
        genex:hasAnatomicalEntity ?anat ;
        genex:hasAnatomicalEntity obo:GO_0005575 ;
        genex:hasDevelopmentalStage ?stage ;
        genex:hasSex "any" ;
        genex:hasStrain ?strain .
    ?anat a genex:AnatomicalEntity ;
        rdfs:label ?anatName .
    ?stage a efo:EFO_0000399 ;
        rdfs:label "life cycle" .
    ?strain rdfs:label "wild-type" .
}`,
        ontologies: [
          "BGEE",
          "GENEX",
          "ORTH",
          "OBO",
          "RDFS",
          "EFO"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "Anatomical entities where the human gene APOC1 is expressed in the post-juvenile stage",
        slug: "anatomical-entities-APOC1-post-juvenile-stage",
        date: "29/08/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What are the anatomical entities where the human gene APOC1 is expressed in the post-juvenile stage?",
        context: "BGEE - 6",
        inidces: [],
        query: `PREFIX efo: <http://www.ebi.ac.uk/efo/>
PREFIX genex: <http://purl.org/genex#>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX up: <http://purl.uniprot.org/core/>

SELECT DISTINCT ?anatName ?anat ?stageName ?stage WHERE {
    ?seq a orth:Gene ;
        rdfs:label "APOC1" ;
        genex:isExpressedIn ?condition ;
        orth:organism ?organism .
    ?condition a genex:ExpressionCondition ;
        genex:hasAnatomicalEntity ?anat ;
        genex:hasAnatomicalEntity obo:GO_0005575 ;
        genex:hasDevelopmentalStage ?stage .
    ?anat a genex:AnatomicalEntity ;
        rdfs:label ?anatName .
    ?stage a efo:EFO_0000399 ;
        rdfs:label ?stageName .
    ?organism obo:RO_0002162  ?species .
    ?species a up:Taxon ;
        up:commonName "human" .
    FILTER (CONTAINS(LCASE(?stageName), 'post-juvenile' ))
}`,
        ontologies: [
          "BGEE",
          "GENEX",
          "ORTH",
          "OBO",
          "RDFS",
          "UNIPROT"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
          "FILTER",
          "CONTAINS",
          "LCASE"
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "Anatomical entities where the mouse gene APOC1 is expressed in the adult stages",
        slug: "anatomical-entities-APOC1-adult-stage",
        date: "29/08/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What are the anatomical entities where the mouse gene APOC1 is expressed in the adult stages?",
        context: "BGEE - 7",
        inidces: [],
        query: `PREFIX efo: <http://www.ebi.ac.uk/efo/>
PREFIX genex: <http://purl.org/genex#>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX up: <http://purl.uniprot.org/core/>

SELECT DISTINCT ?geneName ?anatName ?anat ?stageName ?stage WHERE {
    ?seq a orth:Gene ;
        rdfs:label ?geneName ;
        genex:isExpressedIn ?condition ;
        orth:organism ?organism .
    ?condition a genex:ExpressionCondition ;
        genex:hasAnatomicalEntity ?anat ;
        genex:hasAnatomicalEntity obo:GO_0005575 ;
        genex:hasDevelopmentalStage ?stage .
    ?anat a genex:AnatomicalEntity ;
        rdfs:label ?anatName .
    ?stage a efo:EFO_0000399 ; # developmental stage
        rdfs:label ?stageName .
    ?organism obo:RO_0002162 ?taxon . # in taxon
    ?taxon a up:Taxon ;
        up:commonName "mouse" .
    FILTER (CONTAINS(LCASE(?stageName), 'adult' ))
    FILTER (lcase(str(?geneName)) = "apoc1" ).
}`,
        ontologies: [
          "BGEE",
          "GENEX",
          "ORTH",
          "OBO",
          "RDFS",
          "UNIPROT",
          "EFO",
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
          "FILTER",
          "CONTAINS",
          "LCASE"
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "Anatomical entities where the human gene APOC1 is expressed at the post-juvenile stage along with its expression score independently of the strain, sex, and cell type",
        slug: "anatomical-entities-APOC1-post-juvenile-independently",
        date: "29/08/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What are the anatomical entities where the human gene APOC1 is expressed at the post-juvenile stage along with its expression score independently of the strain, sex, and cell type?",
        context: "BGEE - 8",
        inidces: [],
        query: `PREFIX genex: <http://purl.org/genex#>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX up: <http://purl.uniprot.org/core/>

SELECT DISTINCT ?anat ?anatName ?score ?stage WHERE {
    ?seq a orth:Gene ;
        rdfs:label "APOC1" ;
        orth:organism ?organism .
    ?expression a genex:Expression ;
        genex:hasExpressionCondition ?condition ;
        genex:hasExpressionLevel ?score ;
        genex:hasSequenceUnit ?seq .
    ?condition a genex:ExpressionCondition ;
        genex:hasAnatomicalEntity ?anat ;
        genex:hasAnatomicalEntity obo:GO_0005575 ;
        genex:hasDevelopmentalStage ?stage ;
        genex:hasSex "any" ;
        genex:hasStrain ?strain .
    ?anat a genex:AnatomicalEntity ;
        rdfs:label ?anatName .
    ?stage rdfs:label ?stageName .
    ?strain rdfs:label "wild-type" .
    ?organism obo:RO_0002162  ?species .
    ?species a up:Taxon ;
        up:commonName "human" .
    FILTER (?anat !=  obo:GO_0005575)
    FILTER (CONTAINS(LCASE(?stageName), 'post-juvenile' ))
} ORDER BY DESC(?score)`,
        ontologies: [
          "BGEE",
          "GENEX",
          "ORTH",
          "OBO",
          "RDFS",
          "UNIPROT"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
          "FILTER",
          "CONTAINS",
          "LCASE",
          "ORDER BY DESC"
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "Anatomical entities including cell types, if any, where the human gene APOC1 is expressed at the post-juvenile stage - independently of the strain and sex",
        slug: "anatomical-entities-cell-types-APOC1-post-juvenile-independently",
        date: "29/08/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What are the anatomical entities including cell types, if any, where the human gene APOC1 is expressed at the post-juvenile stage along with its expression score independently of the strain and sex?",
        context: "BGEE - 9",
        inidces: [],
        query: `PREFIX efo: <http://www.ebi.ac.uk/efo/>
PREFIX genex: <http://purl.org/genex#>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX up: <http://purl.uniprot.org/core/>

SELECT DISTINCT ?anat ?cellType ?anatName ?cellTypeName ?score ?stage WHERE {
    ?seq a orth:Gene ;
        rdfs:label "APOC1" ;
        orth:organism ?organism .
    ?expression a genex:Expression ;
        genex:hasExpressionCondition ?condition ;
        genex:hasExpressionLevel ?score ;
        genex:hasSequenceUnit ?seq .
    ?condition a genex:ExpressionCondition ;
        genex:hasAnatomicalEntity ?anat ;
        genex:hasAnatomicalEntity ?cellType ;
        genex:hasDevelopmentalStage ?stage ;
        genex:hasSex "any" ;
        genex:hasStrain ?strain .
    ?anat a genex:AnatomicalEntity ;
        rdfs:label ?anatName .
    ?cellType rdfs:label ?cellTypeName .
    ?stage rdfs:label "post-juvenile" .
    ?strain a efo:EFO_0005135 ;
        rdfs:label "wild-type" .
    ?organism obo:RO_0002162  ?species .
    ?species a up:Taxon ;
        up:commonName "human" .
    FILTER (?anat != obo:GO_0005575)
    FILTER (?anat != ?cellType)
} ORDER BY DESC(?score)`,
        ontologies: [
          "BGEE",
          "GENEX",
          "ORTH",
          "OBO",
          "RDFS",
          "UNIPROT",
          "EFO",
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
          "FILTER",
          "CONTAINS",
          "ORDER BY DESC"
        ],
        level: "level 2",
        rdfResultExample: ``
      },
      {
        name: "Developmental stages present in Bgee",
        slug: "developmental-stages-in-bgee",
        date: "29/08/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What are the developmental stages present in Bgee?",
        context: "BGEE - 11",
        inidces: [],
        query: `PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX efo: <http://www.ebi.ac.uk/efo/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?stage ?stageName ?stageDescription WHERE {
    ?stage a efo:EFO_0000399 ;
        rdfs:label ?stageName ;
        dcterms:description ?stageDescription .
}`,
        ontologies: [
          "BGEE",
          "DCTERMS",
          "RDFS",
          "EFO",
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "Anatomical entities where the eel gene apoc1 is expressed along with its expression score independently of the strain, sex, and cell type",
        slug: "anatomical-entities-eel-apoc1-independently",
        date: "29/08/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What are the anatomical entities where the eel gene apoc1 is expressed along with its expression score independently of the strain, sex, and cell type?",
        context: "BGEE - 12",
        inidces: [],
        query: `PREFIX efo: <http://www.ebi.ac.uk/efo/>
PREFIX genex: <http://purl.org/genex#>
PREFIX lscr: <http://purl.org/lscr#>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?anat ?anatName ?stageIRI ?score WHERE {
    ?seq a orth:Gene ;
        lscr:xrefNCBIGene <https://www.ncbi.nlm.nih.gov/gene/118230125> .
        # Or dcterms:identifier "118230125" .
    ?expression a genex:Expression ;
        genex:hasExpressionCondition ?condition ;
        genex:hasExpressionLevel ?score ;
        genex:hasSequenceUnit ?seq .
    ?anat a genex:AnatomicalEntity ;
        rdfs:label ?anatName .
    ?condition a genex:ExpressionCondition ;
        genex:hasAnatomicalEntity ?anat ;
        genex:hasDevelopmentalStage ?stageIRI ;
        genex:hasSex "any" ;
        genex:hasStrain ?strain .
    ?stageIRI a efo:EFO_0000399 .
    ?strain a efo:EFO_0005135 ;
        rdfs:label "wild-type" .
    FILTER (?anat != obo:GO_0005575)
} ORDER BY DESC(?score)`,
        ontologies: [
          "BGEE",
          "RDFS",
          "EFO",
          "GENEX",
          "LSCR",
          "OBO",
          "ORTH"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
          "FILTER",
          "ORDER BY DESC"
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "Anatomical entities where the P02654 gene is expressed",
        slug: "anatomical-entities-p02654",
        date: "29/08/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What are the anatomical entities where the P02654 gene is expressed? Note that P02654 is a UniProtKB identifier of the APOC1 human gene.",
        context: "BGEE - 13",
        inidces: [],
        query: `PREFIX genex: <http://purl.org/genex#>
PREFIX lscr: <http://purl.org/lscr#>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX uniprotkb: <http://purl.uniprot.org/uniprot/>

SELECT DISTINCT ?anat ?anatName WHERE {
    ?seq a orth:Gene ;
        genex:isExpressedIn ?anat ;
        lscr:xrefUniprot uniprotkb:P02654 .
    ?anat a genex:AnatomicalEntity ;
        rdfs:label ?anatName .
}`,
        ontologies: [
          "BGEE",
          "RDFS",
          "GENEX",
          "LSCR",
          "UNIPROT",
          "ORTH"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
        ],
        level: "level 0",
        rdfResultExample: ``
      },
      {
        name: "Metadata related to the ENSG00000130208 gene",
        slug: "metadata-ensg00000130208",
        date: "29/08/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What is all the metadata related to the ENSG00000130208 gene, where ENSG00000130208 is the identifier of the APOC1 human gene.",
        context: "BGEE - 14",
        inidces: [],
        query: `PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX lscr: <http://purl.org/lscr#>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?symbol ?description ?id
?links ?organism ?uniprot ?ensembl ?ncbi WHERE {
    ?seq a orth:Gene ;
        rdfs:label ?symbol ;
        rdfs:seeAlso ?links ;
        dcterms:description ?description ;
        dcterms:identifier ?id ;
        orth:organism ?organism .
    OPTIONAL{?seq lscr:xrefUniprot ?uniprot .}
    OPTIONAL{?seq lscr:xrefEnsemblGene ?ensembl .}
    OPTIONAL{?seq lscr:xrefNCBIGene ?ncbi .}
    FILTER (?id = "ENSG00000130208")
}`,
        ontologies: [
          "BGEE",
          "RDFS",
          "DCTERMS",
          "LSCR",
          "ORTH"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
          "OPTIONAL",
          "FILTER"
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "Anatomical entities where the APOC1 Homo sapiens gene is not expressed",
        slug: "ap0c1-homo-sapiens-not-expressed",
        date: "29/08/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What are the anatomical entities where the APOC1 Homo sapiens gene is not expressed, that is where is APOC1 absent?",
        context: "BGEE - 15",
        inidces: [],
        query: `PREFIX genex: <http://purl.org/genex#>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX up: <http://purl.uniprot.org/core/>

SELECT DISTINCT ?anat ?anatName WHERE {
    ?seq a orth:Gene ;
        rdfs:label "APOC1" ;
        genex:isAbsentIn ?anat ;
        orth:organism ?organism .
    ?anat a genex:AnatomicalEntity ;
        rdfs:label ?anatName .
    ?organism obo:RO_0002162  ?species .
    ?species a up:Taxon ;
        up:scientificName "Homo sapiens" .
}`,
        ontologies: [
          "BGEE",
          "RDFS",
          "GENEX",
          "OBO",
          "UNIPROT"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "Human disease genes orthologous to rat brain genes",
        slug: "human-disease-genes-orthologous-rat-brain",
        date: "29/09/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "Which are the genes in Human associated to a disease that are orthologous to a gene expressed in the rat's brain?",
        context: "BGEE - 16",
        inidces: [],
        query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX genex: <http://purl.org/genex#>
PREFIX lscr: <http://purl.org/lscr#>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX up: <http://purl.uniprot.org/core/>
PREFIX taxon: <http://purl.uniprot.org/taxonomy/>
PREFIX sio: <http://semanticscience.org/resource/>

SELECT ?gene ?omaLink ?uniprot ?diseaseLabel ?annotationText WHERE {
    {
        SELECT ?gene {
            ?anat rdfs:label 'brain' .
            ?gene genex:isExpressedIn ?anat ;
                orth:organism/obo:RO_0002162 ?taxonRat .
            ?taxonRat up:commonName 'rat' .
        } LIMIT 20
    }
    SERVICE <https://sparql.uniprot.org/sparql> {
        ?taxonHuman up:commonName 'Human' .
    }
    SERVICE <https://sparql.omabrowser.org/sparql/> {
        ?cluster a orth:OrthologsCluster ;
            orth:hasHomologousMember ?node1 ;
            orth:hasHomologousMember ?node2 .
        ?node2 orth:hasHomologousMember* ?protein2 .
        ?node1 orth:hasHomologousMember* ?protein1 .
        ?protein1 a orth:Protein ;
            sio:SIO_010079 ?gene . # encoded by
        ?protein2 a orth:Protein ;
            rdfs:seeAlso ?omaLink ;
            orth:organism/obo:RO_0002162 ?taxonHuman ;
            lscr:xrefUniprot ?uniprot .
        FILTER(?node1 != ?node2)
    }
        SERVICE <https://sparql.uniprot.org/sparql> {
        ?uniprot up:annotation ?annotation .
        ?annotation a up:Disease_Annotation ;
            rdfs:comment ?annotationText ;
            up:disease ?disease .
        ?disease skos:prefLabel ?diseaseLabel .
    }
}`,
        ontologies: [
          "BGEE",
          "RDFS",
          "SKOS",
          "OBO",
          "GENEX",
          "LSCR",
          "ORTH",
          "UNIPROT",
          "TAXON",
          "SIO"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
          "LIMIT",
          "SERVICE",
          "FILTER"
        ],
        level: "level 2",
        rdfResultExample: ``
      },
      {
        name: "Anatomical entities where the ins zebrafish gene is expressed and its gene GO annotations.",
        slug: "ins-zebrafish-gen-go",
        date: "29/09/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What are the anatomical entities where the ins zebrafish gene is expressed and its gene GO annotations?",
        context: "BGEE - 17",
        inidces: [],
        query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX genex: <http://purl.org/genex#>
PREFIX lscr: <http://purl.org/lscr#>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX up: <http://purl.uniprot.org/core/>

SELECT DISTINCT ?anatomicalEntity ?goClass ?goLabel {
    {
        SELECT ?ensemblGene ?anatomicalEntity {
            ?geneB a orth:Gene ;
                genex:isExpressedIn ?anat ;
                rdfs:label ?geneLabel ;
                lscr:xrefEnsemblGene ?ensemblGene ;
                orth:organism/obo:RO_0002162 ?taxon2 .
            ?taxon2 up:commonName 'zebrafish' .
            FILTER (UCASE(?geneLabel) = UCASE('ins'))
            ?anat rdfs:label ?anatomicalEntity .
        }
    }
    SERVICE <https://sparql.uniprot.org/sparql> {
        ?uniprot rdfs:seeAlso/up:transcribedFrom ?ensemblGene ;
            a up:Protein ;
            up:classifiedWith ?goClass .
        ?goClass rdfs:label ?goLabel .
    }
} LIMIT 20`,
        ontologies: [
          "BGEE",
          "RDFS",
          "GENEX",
          "LSCR",
          "ORTH",
          "OBO",
          "UNIPROT"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
          "LIMIT",
          "FILTER",
          "UCASE",
          "SERVICE",
        ],
        level: "level 2",
        rdfResultExample: ``
      },
      {
        name: "Mouse liver proteins orthologous to human INS",
        slug: "mouse-liver-proteins-orthologous-human-ins",
        date: "29/09/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "Which are the mouse's proteins encoded by genes which are expressed in the liver and are orthologous to human's INS gene?",
        context: "BGEE - 17",
        inidces: [],
        query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX up: <http://purl.uniprot.org/core/>
PREFIX genex: <http://purl.org/genex#>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX sio: <http://semanticscience.org/resource/>
PREFIX lscr: <http://purl.org/lscr#>

SELECT ?humanProtein ?mouseProtein ?mouseOmaLink {
    {
        ?humanTaxon up:commonName 'human' .
        ?mouseTaxon up:commonName 'mouse' .
    }
    SERVICE <https://sparql.omabrowser.org/sparql> {
        ?cluster a orth:OrthologsCluster ;
            orth:hasHomologousMember ?node1 ;
            orth:hasHomologousMember ?node2 .
        ?node2 orth:hasHomologousMember* ?mouseProtein .
        ?node1 orth:hasHomologousMember* ?humanProtein .
        ?humanProtein a orth:Protein ;
            rdfs:label 'INS' ;
            orth:organism/obo:RO_0002162 ?humanTaxon .
        ?mouseProtein a orth:Protein ;
            sio:SIO_010079 ?mouseGene ; # is encoded by
            orth:organism/obo:RO_0002162 ?mouseTaxon ;
            rdfs:seeAlso ?mouseOmaLink .
        ?mouseGene lscr:xrefEnsemblGene ?mouseGeneEnsembl .
        FILTER ( ?node1 != ?node2 )
    }
    {
        ?mouseGeneBgee a orth:Gene ;
            lscr:xrefEnsemblGene ?mouseGeneEnsembl ;
            genex:isExpressedIn ?cond ;
            orth:organism/obo:RO_0002162 ?mouseTaxon .
        ?cond genex:hasAnatomicalEntity/rdfs:label 'liver' .
    }
}`,
        ontologies: [
          "BGEE",
          "RDFS",
          "GENEX",
          "LSCR",
          "ORTH",
          "OBO",
          "SIO",
          "UNIPROT"
        ],
        sparqlConcepts: [
          "SELECT",
          "FILTER",
          "SERVICE",
        ],
        level: "level 2",
        rdfResultExample: ``
      },
      {
        name: "Orthologs of a gene in the fruit fly's brain",
        slug: "Orthologs-gene-fruit-fly-brain",
        date: "29/09/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "Which are the orthologs of a gene that is expressed in the fruit fly's brain?",
        context: "BGEE - 19",
        inidces: [],
        query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX up: <http://purl.uniprot.org/core/>
PREFIX genex: <http://purl.org/genex#>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX sio: <http://semanticscience.org/resource/>

SELECT DISTINCT ?geneEnsembl ?proteinOrtholog ?geneOrthologEnsembl ?taxonOrtholog ?omaLinkOrtholog WHERE {
    {
        SELECT DISTINCT * {
            ?gene a orth:Gene ;
                genex:isExpressedIn/rdfs:label 'brain' ;
                orth:organism/obo:RO_0002162 ?taxonFly ;
                dcterms:identifier ?geneEnsembl .
            ?taxonFly up:commonName 'fruit fly' .
        } LIMIT 20
    }

    SERVICE <https://sparql.omabrowser.org/sparql/> {
        ?cluster a orth:OrthologsCluster ;
            orth:hasHomologousMember ?node1 ;
            orth:hasHomologousMember ?node2 .
        ?node1 orth:hasHomologousMember* ?protein1 .
        ?node2 orth:hasHomologousMember* ?proteinOrtholog .
        ?protein1 sio:SIO_010079 ?gene . # is encoded by
        ?proteinOrtholog rdfs:seeAlso ?omaLinkOrtholog ;
            orth:organism/obo:RO_0002162 ?taxonOrthologUri ;
            sio:SIO_010079 ?geneOrtholog . # is encoded by
        FILTER ( ?node1 != ?node2 )
    }
    ?taxonOrthologUri up:commonName ?taxonOrtholog .
    ?geneOrtholog dcterms:identifier ?geneOrthologEnsembl .
}`,
        ontologies: [
          "BGEE",
          "RDFS",
          "GENEX",
          "DCTERMS",
          "ORTH",
          "OBO",
          "SIO",
          "UNIPROT"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
          "LIMIT",
          "FILTER",
          "SERVICE",
        ],
        level: "level 2",
        rdfResultExample: ``
      },
      {
        name: "Primates orthologous, gene in the fruit fly's eye",
        slug: "primates-orthologous-gene-fruit-fly-eye",
        date: "29/09/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "Which are the genes in Primates orthologous to a gene that is expressed in the fruit fly's eye?",
        context: "BGEE - 20",
        inidces: [],
        query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX up: <http://purl.uniprot.org/core/>
PREFIX genex: <http://purl.org/genex#>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX sio: <http://semanticscience.org/resource/>

SELECT DISTINCT ?flyEnsemblGene ?orthologTaxon ?orthologEnsemblGene ?orthologOmaLink WHERE {
	{
        SELECT DISTINCT ?gene ?flyEnsemblGene {
        ?gene a orth:Gene ;
            genex:isExpressedIn/rdfs:label 'eye' ;
            orth:organism/obo:RO_0002162 ?taxon ;
            dcterms:identifier ?flyEnsemblGene .
        ?taxon up:commonName 'fruit fly' .
        } LIMIT 100
    }
    SERVICE <https://sparql.omabrowser.org/sparql> {
        ?protein2 a orth:Protein .
        ?protein1 a orth:Protein .
        ?clusterPrimates a orth:OrthologsCluster .
        ?cluster a orth:OrthologsCluster ;
            orth:hasHomologousMember ?node1 ;
            orth:hasHomologousMember ?node2 .
        ?node1 orth:hasHomologousMember* ?protein1 .
        ?node2 orth:hasHomologousMember* ?clusterPrimates .
        ?clusterPrimates orth:hasHomologousMember* ?protein2 .
        ?protein1 sio:SIO_010079 ?gene . # is encoded by
        ?protein2 rdfs:seeAlso ?orthologOmaLink ;
            orth:organism/obo:RO_0002162 ?orthologTaxonUri ;
            sio:SIO_010079 ?orthologGene . # is encoded by
        ?clusterPrimates orth:hasTaxonomicRange ?taxRange .
        ?taxRange orth:taxRange 'Primates' .
        FILTER ( ?node1 != ?node2 )
    }
    ?orthologTaxonUri up:commonName ?orthologTaxon .
    ?orthologGene dcterms:identifier ?orthologEnsemblGene .
}`,
        ontologies: [
          "BGEE",
          "RDFS",
          "GENEX",
          "DCTERMS",
          "ORTH",
          "OBO",
          "SIO",
          "UNIPROT"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
          "LIMIT",
          "FILTER",
          "SERVICE",
        ],
        level: "level 2",
        rdfResultExample: ``
      },
      {
        name: "Species present Mt-co1 gene (without synonyms)",
        slug: "species-mt-co1",
        date: "29/09/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "Which species the Mt-co1 gene is present (without considering synonyms)?",
        context: "BGEE - 21",
        inidces: [],
        query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX up: <http://purl.uniprot.org/core/>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX obo: <http://purl.obolibrary.org/obo/>

SELECT ?name
WHERE {
    ?gene a orth:Gene ;
        rdfs:label ?geneName ;
        orth:organism ?organism .
    ?organism obo:RO_0002162 ?taxon . # in taxon
    ?taxon up:scientificName ?name .
    FILTER ( UCASE(?geneName) = UCASE('Mt-co1') )
}`,
        ontologies: [
          "BGEE",
          "RDFS",
          "ORTH",
          "OBO",
          "UNIPROT"
        ],
        sparqlConcepts: [
          "SELECT",
          "WHERE",
          "FILTER",
          "UCASE",
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "List of labels and identifiers of pig-tailed macaque genes",
        slug: "label-identifiers-pig-tailed-macaque",
        date: "29/09/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "List the labels and identifiers of pig-tailed macaque genes in bgee",
        context: "BGEE - 22",
        inidces: [],
        query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX up: <http://purl.uniprot.org/core/>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX obo: <http://purl.obolibrary.org/obo/>

SELECT DISTINCT ?geneId ?geneName
WHERE {
    ?gene a orth:Gene ;
        dcterms:identifier ?geneId ;
        orth:organism/obo:RO_0002162/up:commonName ?commonName .
    OPTIONAL { ?gene rdfs:label ?geneName .}
    FILTER ( LCASE(?commonName) = "pig-tailed macaque" ) .
}`,
        ontologies: [
          "BGEE",
          "RDFS",
          "DCTERMS",
          "ORTH",
          "OBO",
          "UNIPROT"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
          "FILTER",
          "LCASE",
          "OPTIONAL"
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "Human anatomical entities at young adult developmental stage",
        slug: "human-anatomical-entities-young-adult",
        date: "29/09/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "Human anatomical entities at young adult developmental stage",
        context: "BGEE - 23",
        inidces: [],
        query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX up: <http://purl.uniprot.org/core/>
PREFIX genex: <http://purl.org/genex#>
PREFIX obo: <http://purl.obolibrary.org/obo/>

SELECT DISTINCT ?anatomicalEntity ?stageName {
    ?condition genex:hasAnatomicalEntity ?anatEntity ;
        genex:hasDevelopmentalStage ?stage ;
        obo:RO_0002162/up:commonName ?commonName .
    ?anatEntity rdfs:label ?anatomicalEntity .
    ?stage rdfs:label ?stageName .
    FILTER ( lcase(?commonName) = "human" ).
    FILTER ( CONTAINS(lcase(?stageName), "young adult") )
}`,
        ontologies: [
          "BGEE",
          "RDFS",
          "OBO",
          "GENEX",
          "UNIPROT"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "FILTER",
          "LCASE",
          "CONTAINS"
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "Post-juvenile stage link and description",
        slug: "post-juvenile-stage-link-description",
        date: "29/09/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What is the post-juvenile stage link and description?",
        context: "BGEE - 25",
        inidces: [],
        query: `PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX efo: <http://www.ebi.ac.uk/efo/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?stage ?stageName ?stageDescription WHERE {
    ?stage a efo:EFO_0000399 ;
        rdfs:label ?stageName ;
        dcterms:description ?stageDescription .
    FILTER(CONTAINS(LCASE(?stageName), "post-juvenile"))
}`,
        ontologies: [
          "BGEE",
          "RDFS",
          "DCTERMS",
          "EFO",
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
          "FILTER",
          "LCASE",
          "CONTAINS"
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "Genes expressed in the human brain",
        slug: "genes-human-brain",
        date: "29/09/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "What are the genes expressed in the human brain?",
        context: "BGEE - 26",
        inidces: [],
        query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX orth: <http://purl.org/net/orth#>
PREFIX genex: <http://purl.org/genex#>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX up: <http://purl.uniprot.org/core/>

SELECT DISTINCT ?gene ?geneName WHERE {
    ?gene a orth:Gene ;
        genex:isExpressedIn ?anat ;
        rdfs:label ?geneName ;
        orth:organism ?organism .
    ?anat a genex:AnatomicalEntity ;
        rdfs:label "brain" .
    ?organism obo:RO_0002162 ?species .
    ?species a up:Taxon ;
        up:scientificName "Homo sapiens" .
}`,
        ontologies: [
          "BGEE",
          "RDFS",
          "ORTH",
          "GENEX",
          "OBO",
          "UNIPROT"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "WHERE",
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "Genes expressed in the human pancreas and UniProt expression",
        slug: "genes-human-pancreas-uniprot",
        date: "29/09/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "Genes expressed in the human pancreas and their annotations in UniProt.",
        context: "BGEE - 27",
        inidces: [],
        query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX up: <http://purl.uniprot.org/core/>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX genex: <http://purl.org/genex#>
PREFIX lscr: <http://purl.org/lscr#>
PREFIX orth: <http://purl.org/net/orth#>
SELECT DISTINCT ?geneEns ?uniprot ?annotation_text {
	{
		SELECT ?geneEns {
			?geneB a orth:Gene .
			?geneB genex:isExpressedIn ?cond .
			?cond genex:hasAnatomicalEntity ?anat .
				?geneB lscr:xrefEnsemblGene ?geneEns .
			?anat rdfs:label 'pancreas' .
			?geneB orth:organism ?o .
			?o obo:RO_0002162 ?taxon2 .
			?taxon2 up:commonName 'human' .
		} LIMIT 100
	}
	SERVICE <https://sparql.uniprot.org/sparql> {
		?uniprot rdfs:seeAlso / up:transcribedFrom ?geneEns .
		?uniprot up:annotation ?annotation .
		?annotation rdfs:comment ?annotation_text .
	}
}`,
        ontologies: [
          "BGEE",
          "RDFS",
          "ORTH",
          "GENEX",
          "OBO",
          "UNIPROT",
          "LSCR"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "LIMIT",
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      {
        name: "Genes expressed in the human brain during infant stage and UniProt expression",
        slug: "genes-human-brain-infant-stage-uniprot",
        date: "29/09/2024",
        image: null,
        source: "https://github.com/sib-swiss/sparql-examples",
        description: "Genes expressed in the human's brain during the infant stage and their UniProt disease annotations.",
        context: "BGEE - 28",
        inidces: [],
        query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX up: <http://purl.uniprot.org/core/>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX genex: <http://purl.org/genex#>
PREFIX lscr: <http://purl.org/lscr#>
PREFIX orth: <http://purl.org/net/orth#>
SELECT DISTINCT ?geneEns ?uniprot ?annotation {
	{
		SELECT ?geneEns {
			?geneB genex:isExpressedIn ?cond ;
				lscr:xrefEnsemblGene ?geneEns .
			?cond genex:hasDevelopmentalStage ?st .
			?cond genex:hasAnatomicalEntity ?anat .
			?st rdfs:label 'infant stage' .
			?anat rdfs:label 'brain' .
			?geneB orth:organism ?o .
			?o obo:RO_0002162 ?taxon2 .
			?taxon2 up:commonName 'human' .
		}
		LIMIT 10
	}
	SERVICE <https://sparql.uniprot.org/sparql> {
		?uniprot up:transcribedFrom ?geneEns .
		?uniprot up:annotation ?annotation .
	}
}`,
        ontologies: [
          "BGEE",
          "RDFS",
          "ORTH",
          "GENEX",
          "OBO",
          "UNIPROT",
          "LSCR"
        ],
        sparqlConcepts: [
          "SELECT",
          "DISTINCT",
          "LIMIT",
        ],
        level: "level 1",
        rdfResultExample: ``
      },
      // Cellosaurus
      // GlyConnect
      // HAMAP
      // MetaNetX
      // OMA
      // OrthoDB
      // Rhea
      // SwissLipids
      // UniProt
      // dbgi
      // neXtProt
]