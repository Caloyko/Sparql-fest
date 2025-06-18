export const GlyConnect = [
  {
    "name": "GlyConnect - 1",
    "slug": "GlyConnect_1",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Get all Glyconnect proteins their Uniprot reference isoform",
    "context": null,
    "inidces": [],
    "query": "PREFIX faldo: <http://biohackathon.org/resource/faldo#>\nPREFIX glycan: <http://purl.jp/bio/12/glyco/glycan#>\n\nSELECT distinct ?glycoprotein ?isoform\nwhere {\n?glycosite faldo:reference ?isoform .\n?specificglycosite faldo:location ?glycosite .\n?glycoprotein glycan:glycosylated_at ?specificglycosite .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT",
      "IF"
    ],
    "category": "sib-swiss GlyConnect"
  },
  {
    "name": "GlyConnect - 2",
    "slug": "GlyConnect_2",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Get all Glyconnect glycan with their graphical SNFG representation",
    "context": null,
    "inidces": [],
    "query": "PREFIX foaf: <http://xmlns.com/foaf/0.1/>\nPREFIX glycan: <http://purl.jp/bio/12/glyco/glycan#>\n\nSELECT distinct ?structure ?image \nwhere {\n?structure glycan:glycosylates_at ?specificglycosite .\n?structure foaf:depiction ?image  \n  }",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT",
      "STR",
      "IF"
    ],
    "category": "sib-swiss GlyConnect"
  },
  {
    "name": "GlyConnect - 3",
    "slug": "GlyConnect_3",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select all glycosylations (glycan, protein, position) with their reference articles",
    "context": null,
    "inidces": [],
    "query": "PREFIX faldo: <http://biohackathon.org/resource/faldo#>\nPREFIX foaf: <http://xmlns.com/foaf/0.1/>\nPREFIX glycan: <http://purl.jp/bio/12/glyco/glycan#>\n\nSELECT distinct ?glycoprotein ?isoform ?position ?structure ?image  ?citation ?pmid\nwhere {\n?glycosite faldo:reference ?isoform .\n?glycosite faldo:position ?position .\n?specificglycosite faldo:location ?glycosite .\n?glycoprotein glycan:glycosylated_at ?specificglycosite .\n?structure glycan:glycosylates_at ?specificglycosite .\n?structure foaf:depiction ?image .\n?refconjugate glycan:has_protein_part ?glycoprotein .\n?refconjugate glycan:published_in ?citation . \n?citation foaf:primaryTopicOf ?pmid .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT",
      "STR",
      "IF"
    ],
    "category": "sib-swiss GlyConnect"
  },
  {
    "name": "GlyConnect - 4",
    "slug": "GlyConnect_4",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Select all glycosylations (glycan, protein, position) with their associated disease where the name start with 'cancer'",
    "context": null,
    "inidces": [],
    "query": "PREFIX faldo: <http://biohackathon.org/resource/faldo#>\nPREFIX glycan: <http://purl.jp/bio/12/glyco/glycan#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX sio: <http://semanticscience.org/resource/>\n\nSELECT distinct ?glycoprotein ?isoform ?position ?structure ?disease ?diseasename\nwhere {\n?glycosite faldo:reference ?isoform .\n?glycosite faldo:position ?position .\n?specificglycosite faldo:location ?glycosite .\n?glycoprotein glycan:glycosylated_at ?specificglycosite .\n?structure glycan:glycosylates_at ?specificglycosite .\n?refconjugate glycan:has_protein_part ?glycoprotein .\n?refconjugate glycan:has_association ?refconjugatedisease .\n?refconjugatedisease sio:SIO_000628 ?disease .\n?disease rdfs:label ?diseasename .\nFILTER regex(?diseasename, \"^cancer\", \"i\") .\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "FILTER",
      "DISTINCT",
      "STR",
      "REGEX",
      "IF"
    ],
    "category": "sib-swiss GlyConnect"
  },
  {
    "name": "GlyConnect - 5",
    "slug": "GlyConnect_5",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "SIB",
    "description": "Get all Glyconnect reference papers",
    "context": null,
    "inidces": [],
    "query": "PREFIX foaf: <http://xmlns.com/foaf/0.1/>\nPREFIX glycan: <http://purl.jp/bio/12/glyco/glycan#>\n\nSELECT distinct ?citation ?pmid\nwhere {\n?refconjugate glycan:published_in ?citation. \n?citation foaf:primaryTopicOf ?pmid .  \n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "DISTINCT"
    ],
    "category": "sib-swiss GlyConnect"
  }
];