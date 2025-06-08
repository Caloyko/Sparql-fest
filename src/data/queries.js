import img1 from "../assets/images/network-bg-1.jpg"
import img2 from "../assets/images/network-bg-2.avif"
import img3 from "../assets/images/network-bg-3.jpg"

export const sparqlQueries = [
    {
      id: 1,
      name: "Get all persons",
      slug: "get-all-persons",
      image: img1,
      description: "Retrieve all persons with their name and email from the dataset.",
      context: "This query fetches all instances of type Person in the dataset.",
      query: `
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
        SELECT ?person ?name ?email WHERE {
          ?person a foaf:Person .
          ?person foaf:name ?name .
          OPTIONAL { ?person foaf:mbox ?email }
        } LIMIT 100
      `,
      ontologies: [
        "FOAF - Friend of a Friend",
        "RDFS - RDF Schema"
      ],
      sparqlConcepts: [
        "PREFIX",
        "SELECT",
        "WHERE",
        "OPTIONAL",
        "LIMIT"
      ],
      level: "Beginner",
      rdfResultExample: `
        <http://example.org/person/123> a foaf:Person ;
          foaf:name "Alice" ;
          foaf:mbox "alice@example.org" .
      `
    },
  
    {
      id: 2,
      name: "List of books and authors",
      slug: "list-books-authors",
      image: img2,
      description: "Fetch all books with their titles and corresponding authors.",
      context: "Useful for bibliographic datasets to explore book-author relationships.",
      query: `
        PREFIX dc: <http://purl.org/dc/elements/1.1/>
        PREFIX dbo: <http://dbpedia.org/ontology/>
        SELECT ?book ?title ?authorName WHERE {
          ?book a dbo:Book .
          ?book dc:title ?title .
          ?book dbo:author ?author .
          ?author foaf:name ?authorName .
        } ORDER BY ?title LIMIT 50
      `,
      ontologies: [
        "DC - Dublin Core",
        "DBpedia Ontology",
        "FOAF"
      ],
      sparqlConcepts: [
        "PREFIX",
        "SELECT",
        "WHERE",
        "ORDER BY",
        "LIMIT"
      ],
      level: "Intermediate",
      rdfResultExample: `
        <http://example.org/book/456> a dbo:Book ;
          dc:title "SPARQL Tutorial" ;
          dbo:author <http://example.org/author/789> .
  
        <http://example.org/author/789> foaf:name "Bob Smith" .
      `
    },
  
    {
      id: 3,
      name: "Count all cities per country",
      slug: "count-cities-per-country",
      image: img3,
      description: "Counts the number of cities in each country in the dataset.",
      context: "Helpful to understand geographic data distribution.",
      query: `
        PREFIX dbo: <http://dbpedia.org/ontology/>
        SELECT ?country (COUNT(?city) AS ?cityCount) WHERE {
          ?city a dbo:City .
          ?city dbo:isPartOf ?country .
        } GROUP BY ?country
      `,
      ontologies: [
        "DBpedia Ontology"
      ],
      sparqlConcepts: [
        "PREFIX",
        "SELECT",
        "WHERE",
        "GROUP BY",
        "COUNT"
      ],
      level: "Advanced",
      rdfResultExample: `
        <http://example.org/country/USA> 31
        <http://example.org/country/France> 12
      `
    },
  ];
  