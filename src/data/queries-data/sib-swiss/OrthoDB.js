export const OrthoDB = [
  {
    "name": "OrthoDB - 1",
    "slug": "OrthoDB_1",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find all OrthoDB species with attached OrthoDB organisms containing \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX : <http://purl.orthodb.org/>\n\nSELECT *\nWHERE {\n    ?tx a :Species; up:scientificName ?tax_name .\n    ?org a ?tx; up:scientificName ?org_name.\n    FILTER(strstarts (lcase(?tax_name ), \"drosophila\" ))\n}",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE",
      "FILTER"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 10",
    "slug": "OrthoDB_10",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find most conservative single copy Danio rerio genes at the Vertebrata level",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX : <http://purl.orthodb.org/>\n\nSELECT ?og ?gene ?description ?evolrate\nWHERE {\n    ?gene a :Gene; :description ?description; up:organism/a [up:scientificName \"Danio rerio\"].\n    ?gene :memberOf ?og.\n    ?og :ogBuiltAt [up:scientificName \"Vertebrata\"].\n    ?og a :OrthoGroup; :ogPercentSingleCopy 100; :ogEvolRate ?evolrate.\n    FILTER(?evolrate < 1)\n}\nORDER BY ?evolrate",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE",
      "FILTER",
      "ORDER",
      "BY"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 11",
    "slug": "OrthoDB_11",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find shortest rapidly evolving Caudovirales genes",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://purl.orthodb.org/>\nPREFIX up: <http://purl.uniprot.org/core/>\n\nSELECT *\nWHERE {\n?gene a :Gene; :description ?description.\n?gene :geneTranslatedLength ?aa_length.\n?gene :memberOf ?og.\n?og :ogBuiltAt [up:scientificName \"Caudovirales\"].\n?og a :OrthoGroup; :ogEvolRate ?evolrate.\nFILTER(?evolrate > 1)\nbind (?evolrate/?aa_length as ?x)\n}\nORDER BY desc(?x) limit 99",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE",
      "FILTER",
      "ORDER",
      "BY"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 12",
    "slug": "OrthoDB_12",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find orthologous human and mouse genes in the group(s) annotated with GO MF GO:0005164 (tumor necrosis factor receptor binding) and GO BP GO:0045739 (positive regulation of DNA repair)",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX GO: <http://purl.obolibrary.org/obo/GO_>\nPREFIX : <http://purl.orthodb.org/>\n\nSELECT ?og ?og_description ?gene_m ?gene_m_name ?gene_h ?gene_h_name\nWHERE {\n    ?gene_m a :Gene.\n    ?gene_h a :Gene.\n    ?gene_m up:organism/a [up:scientificName \"Mus musculus\"].\n    ?gene_h up:organism/a taxon:9606.\n    ?gene_m :name ?gene_m_name.\n    ?gene_h :name ?gene_h_name.\n    ?gene_m :memberOf ?og.\n    ?gene_h :memberOf ?og.\n    ?og a :OrthoGroup; :name ?og_description.\n    ?og :xref [a :Xref; :xrefResource GO:0005164],[a :Xref; :xrefResource GO:0045739].\n} ORDER BY ?og",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "GO",
      "GO_",
      "SELECT",
      "WHERE",
      "ORDER",
      "BY"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 13",
    "slug": "OrthoDB_13",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "List all xrefs attached to the groups annotated with at least three Interpro domains (IPR011990, IPR013083 and IPR001841)",
    "context": null,
    "inidces": [],
    "query": "PREFIX : <http://purl.orthodb.org/>\nPREFIX interpro: <http://www.ebi.ac.uk/interpro/entry/>\n\nSELECT ?og ?og_description (group_concat(distinct ?xref; SEPARATOR=\"; \") as ?xrefs)\nWHERE {\n    ?og a :OrthoGroup; :name ?og_description.\n    ?og :xref [a :Xref; :xrefResource ?xref].\n    ?og :xref [a :Xref; :xrefResource interpro:IPR011990].\n    ?og :xref [a :Xref; :xrefResource interpro:IPR013083].\n    ?og :xref [a :Xref; :xrefResource interpro:IPR001841].\n} GROUP BY ?og ?og_description\nORDER BY ?og_description",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "SEPARATOR",
      "WHERE",
      "GROUP",
      "BY",
      "ORDER"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 14",
    "slug": "OrthoDB_14",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find genes with their properties by a list of their xrefs",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX ensembl: <http://rdf.ebi.ac.uk/resource/ensembl/>\nPREFIX uniprotkb: <http://purl.uniprot.org/uniprot/>\nPREFIX entrezgene: <http://www.ncbi.nlm.nih.gov/gene/>\nPREFIX : <http://purl.orthodb.org/>\n\nSELECT *\nWHERE {\n    ?gene a :Gene.\n    ?gene :name ?gene_name; :description ?description; up:organism [up:scientificName ?org_name].\n    ?gene :xref [a :Xref; :xrefResource ?xref]\n    FILTER(?xref in (\n    ensembl:ENSPTRG00000022217\n    ,ensembl:ENSPVAG00000015405\n    ,uniprotkb:Q9D4H7\n    ,uniprotkb:H2PWL0\n    ,entrezgene:105598395\n    ,entrezgene:105062977\n    ))\n}",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE",
      "FILTER"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 15",
    "slug": "OrthoDB_15",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find orthologous group/s at any level containing protein with Uniprot id P12345",
    "context": null,
    "inidces": [],
    "query": "PREFIX uniprotkb: <http://purl.uniprot.org/uniprot/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX : <http://purl.orthodb.org/>\n\nSELECT *\nWHERE {\n    ?og a :OrthoGroup ;\n        :ogBuiltAt ?level;\n        :hasMember/rdfs:seeAlso uniprotkb:P12345 .\n}",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 16",
    "slug": "OrthoDB_16",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find statistics on translated sequence length for genes matching both IPR002117 and GO:0008219",
    "context": null,
    "inidces": [],
    "query": "PREFIX GO: <http://purl.obolibrary.org/obo/GO_>\nPREFIX interpro: <http://www.ebi.ac.uk/interpro/entry/>\nPREFIX : <http://purl.orthodb.org/>\n\nSELECT\n    (count(?gene) as ?count_genes)\n    (min(?aa_seq_length) as ?min_aa_length)\n    (avg(?aa_seq_length) as ?avg_aa_length)\n    (max(?aa_seq_length) as ?max_aa_length)\nWHERE {\n    ?gene a :Gene; :geneTranslatedLength ?aa_seq_length.\n    ?gene :xref [a :Xref; :xrefResource interpro:IPR002117].\n    ?gene :xref [a :Xref; :xrefResource GO:0008219].\n}",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "GO",
      "GO_",
      "SELECT",
      "WHERE"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 17",
    "slug": "OrthoDB_17",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find genes having Uniprot xrefs in the group 6400at314295, along with their names fetched from Uniprot SPARQL endpoint",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX odbgroup: <http://purl.orthodb.org/odbgroup/>\nPREFIX : <http://purl.orthodb.org/>\n\nSELECT *\nWHERE {\n    ?gene a :Gene;\n        :memberOf odbgroup:6400at314295 .\n    ?gene :xref [a :Xref; :xrefResource ?xref] .\n    ?xref a :Uniprot .\n    SERVICE <https://sparql.uniprot.org/sparql> {\n        ?xref a up:Protein ;\n            up:recommendedName [up:fullName ?name] .\n    }\n}",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE",
      "SERVICE"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 18",
    "slug": "OrthoDB_18",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find zebrafish orthologs of disease-implicated (according to Nextprot SPARQL endpoint) human genes via Vertebrata-level orthogroup/s annotated with both IPR000719 (protein kinase domain) and GO:0048013 (ephrin receptor signaling pathway)",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX GO: <http://purl.obolibrary.org/obo/GO_>\nPREFIX : <http://purl.orthodb.org/>\nPREFIX np: <http://nextprot.org/rdf#>\nPREFIX interpro: <http://www.ebi.ac.uk/interpro/entry/>\n\nSELECT ?gene_zf ?gene_zf_name ?gene ?gene_name ?description ?go ?disease\nWHERE {\n\tSERVICE <https://sparql.nextprot.org/> {\n        select distinct ?entry ?disease WHERE {\n            ?entry np:isoform / np:disease / rdfs:comment ?disease\n        }\n    }\n    ?gene rdfs:seeAlso ?entry;\n        :name ?gene_name ;\n        :description ?description.\n    ?gene :memberOf ?og .\n    ?og :xref/:xrefResource interpro:IPR000719 , GO:0048013.\n    ?og :ogBuiltAt/up:scientificName \"Vertebrata\";\n        :hasMember ?gene_zf.\n    ?gene_zf :name ?gene_zf_name;\n        up:organism/a [up:scientificName \"Danio rerio\"].\n} ORDER BY ?disease",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "GO",
      "GO_",
      "SELECT",
      "WHERE",
      "SERVICE",
      "ORDER",
      "BY"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 19",
    "slug": "OrthoDB_19",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find distribution of oxidation reactions catalyzed by genes arranged into several Eukaryota-level orthologous groups annotated with IPR002328 across species in Alveolata, Stramenopiles, Liliopsida and Coleoptera via cooperation with both Uniprot SPARQL endpoint and RHEA SPARQL endpoint",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX : <http://purl.orthodb.org/>\nPREFIX rh: <http://rdf.rhea-db.org/>\nPREFIX interpro: <http://www.ebi.ac.uk/interpro/entry/>\n\nSELECT ?og ?equation\n    (group_concat (distinct ?clade_name; SEPARATOR=\"; \") as ?clades)\n    (count(distinct ?taxon) as ?cnt_taxons)\n    (count(distinct ?gene) as ?cnt_genes)\n    (group_concat (distinct ?org_name; SEPARATOR=\"; \") as ?taxons)\nWHERE {\n    ?taxon a :Species; up:scientificName ?org_name ;\n        rdfs:subClassOf+/up:scientificName ?clade_name.\n    ?gene a :Gene ;\n        up:organism/a ?taxon.\n    ?gene rdfs:seeAlso ?xref.\n    ?xref a :Uniprot.\n    ?gene :memberOf ?og.\n    ?og :xref/:xrefResource interpro:IPR002328 ;\n        :ogBuiltAt/up:scientificName \"Eukaryota\".\n\n    # join via uniprot ?xref\n    SERVICE <https://sparql.uniprot.org/sparql> {\n        ?xref a up:Protein ;\n            up:annotation/up:catalyticActivity/up:catalyzedReaction ?rh .\n    }\n\n    # join via reaction ?rh\n    SERVICE <https://sparql.rhea-db.org/sparql> {\n        ?rh rdfs:subClassOf rh:Reaction ;\n            rh:equation ?equation.\n    }\n\n    # restrict taxons to several clades\n    VALUES ?clade_name {\n        \"Stramenopiles\"\n        \"Alveolata\"\n        \"Liliopsida\"\n        \"Coleoptera\"\n    }\n} GROUP BY ?equation ?og ORDER BY ?og ?equation",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "SEPARATOR",
      "WHERE",
      "SERVICE",
      "VALUES",
      "GROUP",
      "BY",
      "ORDER"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 2",
    "slug": "OrthoDB_2",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find all clades, i.e. taxonomic levels where orthologous groups were built on, with their Latin names and ranks underneath Bacteria, sorted alphabetically by rank, then name",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX : <http://purl.orthodb.org/>\n\nSELECT * WHERE {\n    ?taxon a :Clade ;\n        rdfs:subClassOf+ taxon:2 ;\n        up:scientificName ?name ;\n        up:rank ?rank .\n} ORDER BY ?rank ?name",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE",
      "ORDER",
      "BY"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 20",
    "slug": "OrthoDB_20",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find single-copy phyletic profile at all orthologous levels of STRING-anotated well known interacting genes pertinent to mouse gene/s from the OrthoDB orthologous group annotated with GO MF GO:0005164 (tumor necrosis factor receptor binding) and GO BP GO:0045739 (positive regulation of DNA repair)",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX GO: <http://purl.obolibrary.org/obo/GO_>\nPREFIX : <http://purl.orthodb.org/>\nPREFIX ip_highest: <http://string-db.org/rdf/interaction/physical-highest-confidence-cutoff>\n\nSELECT ?gene_m ?gene_m_name ?partner_m ?string_partner_genename ?level ?percent_single_copy\nWHERE {\n    ?gene_m a :Gene .\n    ?gene_m up:organism/a [up:scientificName \"Mus musculus\"] .\n    ?gene_m :name ?gene_m_name .\n    ?gene_m :memberOf ?og .\n    ?og a :OrthoGroup ;\n        :name ?og_description ;\n        :ogBuiltAt [up:scientificName \"Mammalia\"] .\n    ?og :xref [a :Xref; :xrefResource GO:0005164], [a :Xref; :xrefResource GO:0045739] .\n    ?gene_m :xref [a :Xref; :xrefResource ?xref_m] .\n    ?xref_m a :Entrezgene.\n\n    SERVICE <https://sparql.string-db.org/sparql> {\n        ?string_gene_m rdfs:seeAlso ?xref_m ;\n            ip_highest: ?partner_m .\n        ?partner_m rdfs:label ?string_partner_genename ;\n            rdfs:comment ?string_partner_description .\n    }\n\n    ?gene_m2 a :Gene ;\n        up:organism/a [up:scientificName \"Mus musculus\"] ;\n        :name ?string_partner_genename ;\n        :memberOf ?og2 .\n    ?og2 a :OrthoGroup ;\n        :ogBuiltAt/up:scientificName ?level ;\n        :ogPercentSingleCopy ?percent_single_copy .\n}",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "GO",
      "GO_",
      "SELECT",
      "WHERE",
      "SERVICE"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 3",
    "slug": "OrthoDB_3",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find LCA in the OrthoDB tree for fruit fly and honey bee taxons",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX : <http://purl.orthodb.org/>\n\nSELECT DISTINCT *\nWHERE {\n    ?lca a :Clade ; up:scientificName ?lcaname .\n    taxon:7227  rdfs:subClassOf* ?lca .\n    taxon:7460 rdfs:subClassOf* ?lca .\n    FILTER(not exists {\n        ?xca a :Clade ; rdfs:subClassOf ?lca .\n        taxon:7227    rdfs:subClassOf* ?xca .\n        taxon:7460   rdfs:subClassOf* ?xca .\n    })\n}",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "DISTINCT",
      "WHERE",
      "FILTER"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 4",
    "slug": "OrthoDB_4",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find URI and some properties of the orthologous group 6400at314295 by its short text label",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX : <http://purl.orthodb.org/>\n\nSELECT *\nWHERE {\n    ?og a :OrthoGroup;\n        rdfs:label \"6400at314295\";\n        :name ?description;\n        :ogBuiltAt [up:scientificName ?clade] .\n}",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 5",
    "slug": "OrthoDB_5",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find all properties of the orthologous group 6400at314295 by its URI",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX up: <http://purl.uniprot.org/core/>\nPREFIX odbgroup: <http://purl.orthodb.org/odbgroup/>\nPREFIX : <http://purl.orthodb.org/>\n\nSELECT *\nWHERE {\n    ?og a :OrthoGroup;\n        rdfs:label ?label;\n        :name ?description;\n        :ogBuiltAt [up:scientificName ?clade];\n        :ogEvolRate ?evolRate;\n        :ogPercentSingleCopy ?percentSingleCopy;\n        :ogPercentInSpecies ?percentInSpecies;\n        :ogTotalGenesCount ?totalGenesCount;\n        :ogMultiCopyGenesCount ?multiCopyGenesCount;\n        :ogSingleCopyGenesCount ?singleCopyGenesCount;\n        :ogInSpeciesCount ?inSpeciesCount;\n        :cladeTotalSpeciesCount ?cladeTotalSpeciesCount .\n    OPTIONAL { ?og :ogMedianProteinLength ?medianProteinLength}\n    OPTIONAL { ?og :ogStddevProteinLength ?stddevProteinLength}\n    OPTIONAL { ?og :ogMedianExonsCount ?medianExonsCount}\n    OPTIONAL { ?og :ogStddevExonsCount ?stddevExonsCount}\n    FILTER(?og = odbgroup:6400at314295)\n}",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE",
      "OPTIONAL",
      "FILTER"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 6",
    "slug": "OrthoDB_6",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find all genes with their name and description in the orthologous group 6400at314295",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX odbgroup: <http://purl.orthodb.org/odbgroup/>\nPREFIX : <http://purl.orthodb.org/>\n\nSELECT *\nWHERE {\n    ?gene a :Gene.\n    ?gene :name ?gene_name.\n    ?gene :description ?description.\n    ?gene up:organism/a ?taxon.\n    ?taxon up:scientificName ?org_name.\n    ?gene :memberOf odbgroup:6400at314295.\n}",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 7",
    "slug": "OrthoDB_7",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find A.thaliana genes with their properties by a list of their gene symbols/names",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX : <http://purl.orthodb.org/>\n\nSELECT *\nWHERE {\n    ?gene a :Gene;\n        up:organism [up:scientificName ?sciname] .\n    FILTER(strstarts (?sciname, \"Arabidopsis thaliana\" ))\n    ?gene :name ?gene_name; :description ?description; :geneTranslatedLength ?aa_seq_length.\n    OPTIONAL {?gene :geneNbExons ?geneNbExons}.\n    ?gene :aaSequence ?sequence\n    FILTER(?gene_name in(\n        \"CHX10\"\n        ,\"GPX1\"\n        ,\"MAG\"\n        ,\"MSRB6\"\n        ,\"MYH\"\n        ,\"POLH\"\n        ,\"RPA3A\"\n        ,\"UVR3\"\n        ,\"XRCC1\"\n    ))\n} ORDER BY ?aa_seq_length",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE",
      "FILTER",
      "OPTIONAL",
      "MAG",
      "MYH",
      "POLH",
      "ORDER",
      "BY"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 8",
    "slug": "OrthoDB_8",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "Find in any organsim under Gammaproteobacteria all genes containing word \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX : <http://purl.orthodb.org/>\n\nSELECT *\nWHERE {\n    ?tx rdfs:subClassOf+/up:scientificName \"Gammaproteobacteria\".\n    ?gene a :Gene; up:organism/a ?tx; :description ?description.\n    FILTER(contains (lcase(?description), \"protease\" ))\n}",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE",
      "FILTER"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - 9",
    "slug": "OrthoDB_9",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": "At the LCA level, find all human orthologs of mouse genes with name containing \\",
    "context": null,
    "inidces": [],
    "query": "PREFIX up: <http://purl.uniprot.org/core/>\nPREFIX taxon: <http://purl.uniprot.org/taxonomy/>\nPREFIX : <http://purl.orthodb.org/>\n\nSELECT *\nWHERE {\n    ?og a :OrthoGroup.\n    ?og :ogBuiltAt taxon:314146.\n    ?gene_m a :Gene.\n    ?gene_h a :Gene.\n    ?gene_m up:organism/a taxon:10090.\n    ?gene_h up:organism/a taxon:9606.\n    ?gene_m :memberOf ?og.\n    ?gene_h :memberOf ?og.\n    ?gene_m :name ?gene_m_name.\n    ?gene_h :name ?gene_h_name.\n    FILTER(contains (UCASE(?gene_m_name), \"MAPK\" ))\n}",
    "ontologies": [
      "OrthoDB",
      "EX",
      "RDF",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "PREFIX",
      "SELECT",
      "WHERE",
      "FILTER",
      "UCASE",
      "MAPK"
    ],
    "level": "sib-swiss OrthoDB"
  },
  {
    "name": "OrthoDB - prefixes",
    "slug": "OrthoDB_prefixes",
    "date": "18-06-2025",
    "image": "src/assets/images/SIB_logo.jpg",
    "source": "https://github.com/sib-swiss/sparql-examples",
    "description": null,
    "context": null,
    "inidces": [],
    "query": null,
    "ontologies": [
      "OrthoDB"
    ],
    "sparqlConcepts": [],
    "level": "sib-swiss OrthoDB"
  }
];