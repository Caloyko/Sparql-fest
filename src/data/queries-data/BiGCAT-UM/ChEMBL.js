export const ChEMBL = [
  {
    "name": "ChEMBL - 001",
    "slug": "ChEMBL_001",
    "date": "18-06-2025",
    "description": "Show 100 small molecules with their chemical structure depicted from their SMILES representation and from their image from the database.",
    "context": null,
    "inidces": [],
    "query": "PREFIX chembl: <http://rdf.ebi.ac.uk/terms/chembl#>\nPREFIX cheminf: <http://semanticscience.org/resource/>\nPREFIX chembl_mol: <http://rdf.ebi.ac.uk/resource/chembl/molecule/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX foaf: <http://xmlns.com/foaf/0.1/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX schema: <https://schema.org/>\n\nSelect ?identifier ?image ?smilesDepict where{\n  \n  ?s a chembl:SmallMolecule.\n  ?s chembl:chemblId ?identifier.\n  ?s foaf:depiction ?image.\n  ?s cheminf:SIO_000008 [ a cheminf:CHEMINF_000018; \n                            cheminf:SIO_000300 ?smilesDepict].\n} LIMIT 100",
    "ontologies": [
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "LIMIT",
      "ALL",
      "IF",
      "MIN"
    ],
    "category": "BiGCAT-UM ChEMBL"
  }
];