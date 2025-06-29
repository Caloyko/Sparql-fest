export const dbgi = [
  {
    "name": "dbgi - 001",
    "slug": "dbgi_001",
    "date": new Date("2025-06-18"),
    "description": "Among the SIRIUS structural annotations from Tabernaemontana coffeoides (Apocynaceae) seeds extract, which ones are reported in the Tabernaemontana genus?",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX prov: <http://www.w3.org/ns/prov#>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX pr: <http://www.wikidata.org/prop/reference/>\n\nSELECT DISTINCT ?ik2d ?genus\nWHERE\n    {\n    ?material sosa:hasSample ?extract ;\n        sosa:isSampleOf ?organe .\n    ?organe emi:inTaxon ?wd_sp .\n    ?wd_sp rdfs:label \"tabernaemontana coffeoides\" .\n    ?extract sosa:isFeatureOfInterestOf ?lcms .\n    ?lcms sosa:hasResult ?feature_list .\n    ?feature_list emi:hasLCMSFeature ?feature .\n    ?feature emi:hasAnnotation ?sirius_annotation .\n    ?sirius_annotation a emi:StructuralAnnotation ;\n        prov:wasGeneratedBy ?activity ;\n        emi:hasChemicalStructure ?ik2d .\n    ?activity prov:wasAssociatedWith <https://bio.informatik.uni-jena.de/software/sirius> .\n    ?ik2d emi:hasSMILES ?smiles ;\n        emi:isInChIKey2DOf ?ik .\n    ?ik emi:isInChIKeyOf ?wd_id .\n\t{\n        SELECT DISTINCT ?wd_id ?genus WHERE {\n            ?material sosa:hasSample ?extract ;\n                sosa:isSampleOf ?organe .\n            ?organe emi:inTaxon ?wd_sp .\n            ?wd_sp rdfs:label \"tabernaemontana coffeoides\" .\n           # OPTIONAL {\n                SERVICE <https://query.wikidata.org/sparql> {\n                    ?wd_sp wdt:P225 ?species_name .\n                    ?genus wdt:P31 wd:Q16521 ;\n                        wdt:P105 wd:Q34740 ;\n                        ^wdt:P171* ?wd_sp .\n                    ?childtaxa wdt:P171* ?genus .\n                    ?wd_id wdt:P703 ?childtaxa\n                }\n           # }\n        } LIMIT 100\n    }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "OPTIONAL",
      "SERVICE",
      "LIMIT",
      "DISTINCT",
      "WITH",
      "STR",
      "IRI",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 002",
    "slug": "dbgi_002",
    "date": new Date("2025-06-18"),
    "description": "Among the structural annotations from Tabernaemontana coffeoides (Apocynaceae) seeds extract, which ones contain an aspidospermidine substructure?",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX enpkg: <https://enpkg.commons-lab.org/kg/>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX sachem: <http://bioinfo.uochb.cas.cz/rdf/v1.0/sachem#>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\n\nSELECT DISTINCT ?ik2d ?smiles\nWHERE {\n    ?extract a emi:ExtractSample ;\n        sosa:isSampleOf* ?organe .\n    ?organe emi:inTaxon ?taxon .\n    ?taxon rdfs:label \"tabernaemontana coffeoides\" .\n    ?extract sosa:isFeatureOfInterestOf ?lcms .\n    ?lcms sosa:hasResult ?feature_list .\n    ?feature_list emi:hasLCMSFeature ?feature .\n    ?feature emi:hasAnnotation ?annotation .\n    ?annotation emi:hasChemicalStructure ?ik2d .\n    ?ik2d a emi:InChIKey2D ;\n        emi:hasSMILES ?smiles ;\n        emi:isInChIKey2DOf ?ik .\n    ?ik emi:isInChIKeyOf ?wd_id .\n    SERVICE <https://idsm.elixir-czech.cz/sparql/endpoint/wikidata> {\n        SELECT * WHERE {\n            ?wd_id sachem:substructureSearch [\n                sachem:query \"CCC12CCCN3C1C4(CC3)C(CC2)NC5=CC=CC=C45\" # Aspidospermidine scaffold\n            ] .\n        }\n    }\n}",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "SERVICE",
      "DISTINCT",
      "STR",
      "SUBSTR",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 003",
    "slug": "dbgi_003",
    "date": new Date("2025-06-18"),
    "description": "Filter the positive ionization mode features of Melochia umbellate annotated as [M+H]+ by SIRIUS to keep the ones for which a feature in negative ionization mode is detected with the same retention time (± 3 seconds) and a mass corresponding to the [M-H]- adduct (± 5 ppm).",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nPREFIX prov: <http://www.w3.org/ns/prov#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\n\nSELECT DISTINCT ?feature ?rt ?pm ?feature_opp ?rt_opp ?pm_opp\nWHERE {\n    VALUES ?ppm {\n        \"5\"^^xsd:decimal # m/z tolerance\n    }\n    VALUES ?rt_tol {\n        \"0.05\"^^xsd:decimal # RT tolerance (minute)\n    }\n    ?sample a emi:ExtractSample ;\n        sosa:isSampleOf* ?organe .\n    ?organe emi:inTaxon ?taxon .\n    ?taxon rdfs:label \"melochia umbellata\" .\n    ?sample sosa:isFeatureOfInterestOf ?lcms .\n    ?lcms a emi:LCMSAnalysisPos ;\n        sosa:hasResult ?feature_list .\n    ?feature_list emi:hasLCMSFeature ?feature .\n    ?feature emi:hasParentMass ?pm ;\n        emi:hasRetentionTime ?rt ;\n        emi:hasAnnotation ?sirius .\n\t?sirius a emi:StructuralAnnotation ;\n        prov:wasGeneratedBy ?activiy .\n    ?activiy prov:wasAssociatedWith <https://bio.informatik.uni-jena.de/software/sirius> .\n    ?sirius emi:hasAdduct ?adduct .\n    FILTER(regex(str(?adduct), \"[M+H]+\"))\n    ?sample sosa:isFeatureOfInterestOf ?lcms_opp .\n    ?lcms_opp a emi:LCMSAnalysisNeg ;\n        sosa:hasResult ?feature_list_opp .\n    ?feature_list_opp emi:hasLCMSFeature ?feature_opp .\n\t?feature_opp emi:hasParentMass ?pm_opp ;\n        emi:hasRetentionTime ?rt_opp .\n    FILTER(((?rt - ?rt_tol) < ?rt_opp) && ((?rt + ?rt_tol) > ?rt_opp))\n    FILTER((?pm_opp > ((?pm - 2.014) - ((?ppm * 0.000001) * (?pm - 2.014)))) && (?pm_opp < ((?pm - 2.014) + ((?ppm * 0.000001) * (?pm - 2.014)))))\n}",
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
      "VALUES",
      "DISTINCT",
      "WITH",
      "ADD",
      "STR",
      "REGEX",
      "IRI",
      "MIN",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 004",
    "slug": "dbgi_004",
    "date": new Date("2025-06-18"),
    "description": "For features from Melochia umbellata in positive ionization mode with SIRIUS annotations, get the ones for which a feature in negative ionization mode with the same retention time (± 3 sec) has the same SIRIUS annotation (2D InChIKey).",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX prov: <http://www.w3.org/ns/prov#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\n\nSELECT DISTINCT ?feature ?feature_opp ?ik2d ?rt ?rt_opp\nWHERE {\n    VALUES ?rt_tol {\n        \"0.05\"^^xsd:decimal # RT tolerance (minute)\n    }\n    ?sample a emi:ExtractSample ;\n        sosa:isSampleOf* ?organe .\n    ?organe emi:inTaxon ?taxon .\n    ?taxon rdfs:label \"melochia umbellata\" .\n    ?sample sosa:isFeatureOfInterestOf ?lcms .\n    ?lcms a emi:LCMSAnalysisPos ;\n        sosa:hasResult ?feature_list .\n    ?feature_list emi:hasLCMSFeature ?feature .\n    ?feature emi:hasRetentionTime ?rt ;\n        emi:hasAnnotation ?sirius .\n    ?sirius a emi:StructuralAnnotation ;\n        prov:wasGeneratedBy ?activity .\n    ?activity prov:wasAssociatedWith <https://bio.informatik.uni-jena.de/software/sirius> .\n    ?sirius emi:hasChemicalStructure ?ik2d .\n    ?sample sosa:isFeatureOfInterestOf ?lcms_opp .\n    ?lcms_opp a emi:LCMSAnalysisNeg ;\n        sosa:hasResult ?feature_list_opp .\n    ?feature_list_opp emi:hasLCMSFeature ?feature_opp .\n    ?feature_opp emi:hasRetentionTime ?rt_opp ;\n        emi:hasAnnotation ?sirius_opp .\n    ?sirius_opp a emi:StructuralAnnotation ;\n    #    prov:wasGeneratedBy ?activity_opp ;\n        emi:hasChemicalStructure ?ik2d .\n    #?activity_opp prov:wasAssociatedWith <https://bio.informatik.uni-jena.de/software/sirius> .\n    FILTER(((?rt - ?rt_tol) < ?rt_opp) && ((?rt + ?rt_tol) > ?rt_opp))\n}",
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
      "VALUES",
      "DISTINCT",
      "WITH",
      "STR",
      "IRI",
      "MIN",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 005",
    "slug": "dbgi_005",
    "date": new Date("2025-06-18"),
    "description": "How many features have the same SIRIUS and ISDB annotation?",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX prov: <http://www.w3.org/ns/prov#>\nPREFIX enpkg: <https://enpkg.commons-lab.org/kg/>\nPREFIX emi: <https://purl.org/emi#>\n\nSELECT (COUNT(?feature) AS ?count)\nWHERE {\n        ?lcms emi:hasMassiveDOI ?massive_doi ;\n            emi:hasLCMSFeatureSet ?feature_list .\n        # FILTER(regex(str(?massive_doi), \"MSV000087728\")) # MassIVE id filter, MSV000087728 is pf1600, MSV000093464 is 337 Korean medicinal plants, if you want to query both you can pipe \"MSV000087728|MSV000093464\". You can apply or not these filters by ucommenting/commenting this line.\n        ?feature_list emi:hasLCMSFeature ?feature .\n        ?feature emi:hasAnnotation ?sirius_annotation .\n        ?sirius_annotation a emi:StructuralAnnotation ;\n            prov:wasGeneratedBy ?activity ;\n            emi:hasChemicalStructure ?sirius_ik2d .\n        ?activity prov:wasAssociatedWith <https://bio.informatik.uni-jena.de/software/sirius> .\n        ?feature emi:hasAnnotation ?isdb_annotation .\n        ?activity_isdb prov:wasAssociatedWith <https://oolonek.github.io/ISDB> .\n        ?isdb_annotation a emi:StructuralAnnotation ;\n            prov:wasGeneratedBy ?activity_isdb ;\n            emi:hasChemicalStructure ?isdb_ik2d .\n    FILTER(?isdb_ik2d = ?sirius_ik2d) .\n}",
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
      "WITH",
      "STR",
      "REGEX",
      "IRI",
      "IF",
      "COUNT"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 006",
    "slug": "dbgi_006",
    "date": new Date("2025-06-18"),
    "description": "Search spectrally related features with and within the VGF151_E05 sample of a datura stramonium through counts of common peaks and loss. Return their species, family and genus names",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\n\nSELECT ?family_name ?genus_name ?species_name ?wd_sp ?feature ?sub_rt ?sub_parent_mass ?count\nWHERE {\n    # Subquery to get the top N hits with their Wikidata IDs\n    {\n        SELECT ?wd_sp ?feature (SAMPLE(?rt) AS ?sub_rt) (SAMPLE(?parent_mass) AS ?sub_parent_mass) (COUNT(?peakloss) AS ?count)\n        WHERE {\n            ?material sosa:hasSample ?extract ;\n                sosa:isSampleOf* ?organism.\n            ?organism emi:inTaxon ?wd_sp .\n            ?extract a emi:ExtractSample ;\n                sosa:isFeatureOfInterestOf ?lcms .\n            ?lcms a emi:LCMSAnalysisPos ;\n                sosa:hasResult ?feature_list .\n            ?feature_list emi:hasLCMSFeature ?feature .\n            ?feature a emi:LCMSFeature ;\n                emi:hasSpec2VecDoc ?doc ;\n                emi:hasParentMass ?parent_mass ;\n                emi:hasRetentionTime ?rt .\n            ?doc emi:hasSpec2VecLoss|emi:hasSpec2VecPeak ?peakloss .\n\n            {\n                SELECT ?peakloss WHERE {\n                    ?lcms a emi:LCMSAnalysisPos ;\n                        sosa:hasResult ?feature_list ;\n                        sosa:hasFeatureOfInterest ?sample .\n                    ?sample dcterms:identifier \"VGF151_E05\" ;\n                        sosa:isSampleOf* ?organism .\n                    ?organism emi:inTaxon/rdfs:label \"datura stramonium\".\n                    ?feature_list emi:hasLCMSFeature ?feature .\n                    ?feature a emi:LCMSFeature ;\n                        emi:hasSpec2VecDoc ?doc .\n                    ?doc emi:hasSpec2VecLoss|emi:hasSpec2VecPeak ?peakloss .\n                }\n            }\n        }\n        GROUP BY ?wd_sp ?feature\n        ORDER BY DESC(?count)\n        LIMIT 5\n    }\n\n    # Outer query to fetch species names from Wikidata\n    # Fetching taxonomic information from Wikidata\n    SERVICE <https://query.wikidata.org/sparql> {\n        ?wd_sp wdt:P225 ?species_name .\n        OPTIONAL {\n            ?family wdt:P31 wd:Q16521 ;\n                wdt:P105 wd:Q35409 ;\n                wdt:P225 ?family_name ;\n                ^wdt:P171* ?wd_sp .\n        }\n        OPTIONAL {\n            ?genus wdt:P31 wd:Q16521 ;\n                wdt:P105 wd:Q34740 ;\n                wdt:P225 ?genus_name ;\n                ^wdt:P171* ?wd_sp .\n        }\n    }\n} GROUP BY ?family_name ?genus_name ?species_name ?wd_sp ?feature ?sub_rt ?sub_parent_mass ?count\nORDER BY DESC(?count)",
    "ontologies": [
      "EX",
      "RDFS",
      "SCHEMA",
      "SH"
    ],
    "sparqlConcepts": [
      "SELECT",
      "WHERE",
      "OPTIONAL",
      "SERVICE",
      "GROUP BY",
      "ORDER BY",
      "LIMIT",
      "FROM",
      "WITH",
      "STR",
      "IF",
      "COUNT",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 007",
    "slug": "dbgi_007",
    "date": new Date("2025-06-18"),
    "description": "Show chemical structures in Melochia umbellata extracts with structural annotations where the cosmic score is greater than 0.5 and the zodiac score is less than 0.8. For ISDB annotations, consider taxon scores greater than or equal to 6",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX prov: <http://www.w3.org/ns/prov#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\n\nSELECT DISTINCT ?ik ?wd_id ?taxon ?taxon_name\nWHERE { \n    {SELECT  ?ik ?wd_id\n        WHERE {\n            ?sample a emi:ExtractSample ;\n                sosa:isSampleOf* ?organe ;\n                sosa:isFeatureOfInterestOf ?lcms .\n            ?organe emi:inTaxon ?taxon .\n            ?taxon rdfs:label \"melochia umbellata\" .\n            ?lcms a emi:LCMSAnalysisPos ;\n                sosa:hasResult ?feature_list .\n            ?feature_list emi:hasLCMSFeature ?feature .\n            {\n                ?feature emi:hasAnnotation ?annotation .\n                ?annotation a emi:StructuralAnnotation ;\n                    prov:wasGeneratedBy ?activity .\n                ?activity prov:wasAssociatedWith <https://bio.informatik.uni-jena.de/software/sirius> .\n                ?annotation emi:hasCosmicScore ?cosmic ;\n                    emi:hasZodiacScore ?zodiac .\n                FILTER((?cosmic > 0.5) && (?zodiac > 0.8))\n            } UNION {\n                ?feature emi:hasAnnotation ?annotation .\n                ?annotation emi:hasTaxoScore ?taxo .\n                FILTER(?taxo >= 6)\n            }\n            ?annotation emi:hasChemicalStructure ?ik2d .\n            ?ik2d emi:hasSMILES ?smiles ;\n                emi:isInChIKey2DOf ?ik .\n            ?ik emi:isInChIKeyOf ?wd_id .\n        } LIMIT 50\n    }\n  SERVICE <https://query.wikidata.org/sparql> {\n        ?wd_id wdt:P31 wd:Q113145171 ;\n            wdt:P703 ?taxon .\n        ?taxon wdt:P225 ?taxon_name .\n    }\n}",
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
      "UNION",
      "SERVICE",
      "LIMIT",
      "DISTINCT",
      "WITH",
      "STR",
      "IRI",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 008",
    "slug": "dbgi_008",
    "date": new Date("2025-06-18"),
    "description": "Which features in the positive ionization mode have the most fragments and neutral losses in common with the feature identified as mzspec:MSV000087728:VGF143_H08_features_ms2_pos.mgf:scan:707",
    "context": null,
    "inidces": [],
    "query": "PREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\n\nSELECT ?feature ?massive_doi (SAMPLE(?rt) AS ?retention_time) (SAMPLE(?pm) AS ?parent_mass) (COUNT(?peakloss) AS ?count)\nWHERE {\n    ?lcms a emi:LCMSAnalysisPos ;\n        emi:hasMassiveDOI ?massive_doi ;\n        sosa:hasResult ?feature_list .\n    #FILTER(regex(str(?massive_doi), \"MSV000087728\")) # MassIVE id filter\n    ?feature_list emi:hasLCMSFeature ?feature .\n    ?feature a emi:LCMSFeature ;\n        emi:hasSpec2VecDoc ?doc ;\n        emi:hasParentMass ?pm ;\n        emi:hasRetentionTime ?rt .\n    ?doc emi:hasSpec2VecLoss|emi:hasSpec2VecPeak ?peakloss .\n\n    {\n        SELECT ?peakloss WHERE {\n            ?feature a emi:LCMSFeature ;\n                emi:hasUSI \"mzspec:MSV000087728:VGF143_H08_features_ms2_pos.mgf:scan:707\" ;\n                emi:hasSpec2VecDoc ?doc .\n            ?doc emi:hasSpec2VecLoss|emi:hasSpec2VecPeak ?peakloss .\n        }\n    }\n} GROUP BY ?feature ?massive_doi ORDER BY DESC(?count)",
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
      "GROUP BY",
      "ORDER BY",
      "STR",
      "REGEX",
      "COUNT",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 009",
    "slug": "dbgi_009",
    "date": new Date("2025-06-18"),
    "description": "Which samples have features annotated as Aspidosperma_type alkaloids by CANOPUS with a probability score above 0.5, ordered by the decreasing count of features?",
    "context": null,
    "inidces": [],
    "query": "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX prov: <http://www.w3.org/ns/prov#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\n\nSELECT ?extract ?organe ?species_name ?genus_name ?family_name ?count_of_selected_class\nWHERE {\n    ?material sosa:hasSample ?extract ;\n        sosa:isSampleOf ?organe .\n    ?organe emi:inTaxon ?wd_sp .\n    #OPTIONAL {\n        SERVICE <https://query.wikidata.org/sparql> {\n            ?wd_sp wdt:P225 ?species_name .\n            ?family wdt:P31 wd:Q16521 ;\n                wdt:P105 wd:Q35409 ;\n                wdt:P225 ?family_name ;\n                ^wdt:P171* ?wd_sp .\n            ?genus wdt:P31 wd:Q16521 ;\n                wdt:P105 wd:Q34740 ;\n                wdt:P225 ?genus_name ;\n                ^wdt:P171* ?wd_sp .\n        }\n    #}\n    {\n        SELECT ?extract (COUNT(DISTINCT ?feature) AS ?count_of_selected_class)\n        WHERE {\n            ?extract a emi:ExtractSample ;\n                sosa:isFeatureOfInterestOf ?lcms .\n            ?lcms a emi:LCMSAnalysis ;\n                emi:hasLCMSFeatureSet ?feature_list .\n            ?feature_list emi:hasLCMSFeature ?feature .\n            ?feature emi:hasAnnotation ?canopus .\n            ?canopus a emi:ChemicalTaxonAnnotation ;\n                emi:hasClass ?np_class ;\n                emi:hasClassProbability ?class_prob .\n            ?np_class rdfs:label \"Aspidosperma type\" .\n            FILTER((?class_prob > 0.5)) .\n        } GROUP BY ?extract ORDER BY DESC(?count_of_selected_class)\n    }\n}",
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
      "OPTIONAL",
      "SERVICE",
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
      "COUNT",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 011",
    "slug": "dbgi_011",
    "date": new Date("2025-06-18"),
    "description": "List interactions of all species which have an IUCN status (wdt:P141) of near threatened (wd:Q719675).",
    "context": null,
    "inidces": [],
    "query": "PREFIX emi: <https://purl.org/emi#>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?wdx_Source ?sourceName ?intxnLabel ?intxnType ?wdx_Target ?targetName WHERE {\n    {\n        SELECT DISTINCT ?wdx_Target ?targetName ?sourceName ?wdx_Source ?intxnType ?intxnLabel WHERE { #first select the source-target interaction-pairs\n            #unidirectional interaction, e.g.: source-X hosts target target-Y\n            ?intxn emi:hasSource ?source ;\n                emi:hasTarget ?target ;\n                emi:isClassifiedWith ?intxnType .\n            ?intxnType rdfs:label ?intxnLabel .\n            ?source emi:inTaxon ?wdx_Source ; # retrieve wikidata-id for source\n                                rdfs:label ?sourceName . # scientific name of source as given in GloBI\n                        ?target emi:inTaxon ?wdx_Target ; # retrieve wikidata-id for target\n                                rdfs:label ?targetName . # scientific name of target as given in GloBI\n                }\n    }\n    SERVICE <https://qlever.cs.uni-freiburg.de/api/wikidata> {\n        {\n            ?wdx_Source wdt:P141 wd:Q719675 ; # filter source wikidata ids, which have IUCN status (wdt:P141) as near threatened (wd:Q719675) and which is a plant\n                wdt:P171* wd:Q879246 ;\n        } UNION \n        {\n            ?wdx_Target wdt:P141 wd:Q719675 ; # filter target wikidata ids, which have IUCN status (wdt:P141) as near threatened (wd:Q719675) and which is a plant\n                wdt:P171* wd:Q879246 ;\n        }\n    }\n}",
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
      "UNION",
      "SERVICE",
      "DISTINCT",
      "WITH",
      "IF"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 012",
    "slug": "dbgi_012",
    "date": new Date("2025-06-18"),
    "description": "List traits of all species which have an IUCN status (wdt:P141) of near threatened (wd:Q719675).",
    "context": null,
    "inidces": [],
    "query": "PREFIX emi: <https://purl.org/emi#>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX qudt: <https://qudt.org/2.1/schema/qudt#>\t\t\nSELECT DISTINCT ?source_wd ?sourceName ?tryDataLab ?tryDataVal ?unit ?unitComment WHERE {\n\t?trySpObs sosa:isSampleOf ?source_trySpName ; #retrieve trait/non-trait data from trydb for trySpName (scientific name of plant species as listed in trydb)\n\t\trdfs:label ?sourceName ;\n\t\tsosa:isFeatureOfInterestOf ?tryObId .\n\t?source_trySpName emi:inTaxon ?source_wd . #retrieve wikidata-id for trySpName\t\t\n\t?tryObId sosa:hasResult ?tryData .\n\t?tryData rdfs:label ?tryDataLab ;\t\t\t\n\t\trdf:type emi:Trait ; #filter data which is labelled as 'Trait'\n\t\trdf:value ?tryDataVal ;\t#retrieve values for Trait data\n\t\tqudt:hasUnit ?unit . #retrieve units for Trait data\n\tOPTIONAL {\n\t\t?tryData rdfs:comment ?unitComment .\n\t} #retrieve comments (containing original unprocessed unit information - necessary for understanding some data) for Trait data\n\tSERVICE <https://qlever.cs.uni-freiburg.de/api/wikidata> {\n        \t?source_wd wdt:P141 wd:Q719675 . #filter wikidata-ids for trySpName, which have IUCN status (wdt:P141) as near threatened (wd:Q719675)\n        }\n}",
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
      "OPTIONAL",
      "VALUES",
      "SERVICE",
      "DISTINCT",
      "FROM",
      "IF",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 013",
    "slug": "dbgi_013",
    "date": new Date("2025-06-18"),
    "description": "List all metabolites produced by species with near threatened (wd:Q719675) IUCN status (wdt:P141) and with values available (or greater than a specific value) for trait 'Seed dry mass'.",
    "context": null,
    "inidces": [],
    "query": "PREFIX emi: <https://purl.org/emi#>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT DISTINCT ?structure_inchikey ?wd_chem ?source_wdx ?sourceName WHERE {\n\t# trait data\n\t?trySpObs sosa:isSampleOf ?trySpName ; # trait/non-trait data for trySpName (scientific name of plant species as listed in trydb)\n\t\trdfs:label ?sourceName ;\n\t\tsosa:isFeatureOfInterestOf ?tryObId .\n\t?tryObId sosa:hasResult ?tryData .\n\t?trySpName emi:inTaxon ?source_wdx . # wikidata-ids wdx for trySpName\n\t?tryData rdfs:label ?tryDataLab ;\t\t\t\t\t\n\t\trdf:type emi:Trait ; #retrieve data which is labelled as 'Trait' and its values\n\t\trdf:value ?tryDataVal .\n\tFILTER (STR(?tryDataLab) = 'Seed dry mass' ) #filter on data label 'Seed dry mass'\n\tFILTER (?tryDataVal >= 100)\t\t\t\t\t\t\n\tSERVICE <https://qlever.cs.uni-freiburg.de/api/wikidata> {\n        \t?source_wdx wdt:P141 wd:Q719675 . # filter wikidata-ids for trySpName, which have IUCN status (wdt:P141) as near threatened (wd:Q719675)\n        }\t\n\t# metabolite data\n\t{ \n\t\tSELECT ?source_wdx ?structure_inchikey ?wd_chem WHERE {\t\n\t\t\t?material sosa:hasSample ?extract ;\t\t\t\t\n\t\t        \tsosa:isSampleOf ?organe .\t\n\t\t\t?organe emi:inTaxon ?source_wdx . # filter metabolite data which is found in wikidata-ids wdx \n\t\t\t?extract sosa:isFeatureOfInterestOf ?lcms .\n\t\t    \t?lcms sosa:hasResult ?feature_list .\n\t\t\t?feature_list emi:hasLCMSFeature ?feature .\n\t\t\t?feature emi:hasAnnotation ?sirius_annotation .\n\t\t\t?sirius_annotation a emi:StructuralAnnotation ;\n\t\t\t\temi:hasChemicalStructure ?ik2d .\n\t\t\t?ik2d emi:hasSMILES ?smiles ;\n\t\t    \t\temi:isInChIKey2DOf ?structure_inchikey .\n\t\t\t?structure_inchikey emi:isInChIKeyOf ?wd_chem .\t# wikidata-ids for metabolites\n\t\t}\n\t}\n\tUNION # union with data from lotus (integrated in wikidata)\n\t{\n\t\tSERVICE <https://qlever.cs.uni-freiburg.de/api/wikidata> {\t\t\n\t\t\t?wd_chem wdt:P235 ?structure_inchikey;\t\t\t\t\n   \t\t\t\twdt:P703 ?source_wdx .\t\n\t\t}\n\t}\n} LIMIT 1000",
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
      "UNION",
      "VALUES",
      "SERVICE",
      "LIMIT",
      "DISTINCT",
      "FROM",
      "WITH",
      "STR",
      "IRI",
      "IF",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 014",
    "slug": "dbgi_014",
    "date": new Date("2025-06-18"),
    "description": "List traits (and their values) of plants producing Diterpenoids",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\nPREFIX qudt: <https://qudt.org/2.1/schema/qudt#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\t\t\nSELECT DISTINCT ?source_wdx ?sourceName ?tryDataLab ?tryDataVal ?unit ?unitComment WHERE {\n\t# metabolite data\n\t{\n\t\tSELECT DISTINCT ?source_wdx WHERE {\t\t\t\t\t\t\n\t\t\t?material sosa:hasSample ?extract ;\n\t\t        \tsosa:isSampleOf ?organe .\n\t\t        ?organe emi:inTaxon ?source_wdx . # filter metabolite data which is found in wikidata-ids wdx\n\t\t        ?extract sosa:isFeatureOfInterestOf ?lcms .\n\t\t        ?lcms sosa:hasResult ?feature_list .\n\t\t        ?feature_list emi:hasLCMSFeature ?feature .\n\t\t        ?feature emi:hasAnnotation ?sirius_annotation .\n\t\t        ?sirius_annotation a emi:StructuralAnnotation ;\n\t\t        \temi:hasChemicalStructure ?ik2d .\n\t\t        ?ik2d emi:hasSMILES ?smiles ;\n\t\t        \temi:isInChIKey2DOf ?ik ;\n\t\t                emi:hasClass ?npcClass .\n\t\t\t?npcClass skos:broader ?npcSuperClass .\n\t\t        ?ik emi:isInChIKeyOf ?wd_chem .\t# wikidata-ids for metabolites\n\t\t\tFILTER (REGEX(STR(?npcSuperClass), 'DITERPENOIDS'))\n\t\t}\n\t} UNION\t#union with data from lotus (integrated in wikidata)\n\t{ \n\t\tSERVICE <https://qlever.cs.uni-freiburg.de/api/wikidata> {\n\t\t\t?wd_chem wdt:P235 ?structure_inchikey ;\n\t\t\t\t((wdt:P31|wdt:P279)/(wdt:P279*)) wd:Q47006367 ;\t# check if the class/superclass of the chemical is Diterpenoids\n   \t\t\t\twdt:P703 ?source_wdx .\n\t\t}\n\t}\n\t# trait data \t        \n\t?trySpName emi:inTaxon ?wdx .\t\t\t\t\t\t\n\t?trySpObs sosa:isSampleOf ?trySpName ; # trait/non-trait data for trySpName (scientific name of plant species as listed in trydb)\n\t\trdfs:label ?sourceName ;\n\t\tsosa:isFeatureOfInterestOf ?tryObId .\n\t?trySpName emi:inTaxon ?source_wdx . # wikidata-ids wdx for trySpName matching the one from metabolite queries \n\t?tryObId sosa:hasResult ?tryData .\n\t?tryData rdfs:label ?tryDataLab ;\n\t\trdf:type emi:Trait ; # retrieve data which is labelled as 'Trait' and its values\n\t\trdf:value ?tryDataVal ;\n\t\tqudt:hasUnit ?unit ; \n\t\trdfs:comment ?unitComment . # original units for Trait data as listed in trydb\n}",
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
      "UNION",
      "VALUES",
      "SERVICE",
      "DISTINCT",
      "FROM",
      "WITH",
      "STR",
      "REGEX",
      "IRI",
      "IF",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 015",
    "slug": "dbgi_015",
    "date": new Date("2025-06-18"),
    "description": "List of possible natural locations of organisms, which produce Bahamaolide A,  (wd:Q75068439) which is an antifungal (https://doi.org/10.1021/np3001915).",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\nPREFIX wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#>\nPREFIX prov: <http://www.w3.org/ns/prov#>\nSELECT DISTINCT ?organismName ?organismWD ?loc ?lats ?longs WHERE {\n\t# metabolite data\n\t{\n\t\tSELECT DISTINCT ?organismWD ?organismName WHERE {\t\t\t\t\n\t\t\t?material sosa:hasSample ?extract ;\n\t\t        \tsosa:isSampleOf ?organe .\n\t\t\t?organe emi:inTaxon ?organismWD ; # filter metabolite data which is found in wikidata-ids wdx\t\n\t\t\t\trdfs:label ?organismName .\n\t\t\t?extract sosa:isFeatureOfInterestOf ?lcms .\n\t\t\t?lcms sosa:hasResult ?feature_list .\n\t\t\t?feature_list emi:hasLCMSFeature ?feature .\n\t\t\t?feature emi:hasAnnotation ?sirius_annotation .\n\t\t\t?sirius_annotation a emi:StructuralAnnotation ;\n\t\t\t\temi:hasChemicalStructure ?ik2d .\n\t\t\t?ik2d emi:hasSMILES ?smiles ;\n\t\t\t\temi:isInChIKey2DOf ?ik .\n\t\t\t?ik emi:isInChIKeyOf ?wd_chem .\t# retrieve wikidata-ids for metabolites\n\t\t\tVALUES ?wd_chem { wd:Q75068439 } # filter wikidata_id of metabolites matches wd:Q75068439\n\t\t}\n\t} UNION\t#union with data from lotus (integrated in wikidata)\n\t{ \n\t\tSERVICE <https://qlever.cs.uni-freiburg.de/api/wikidata> {\n\t\t\t?wd_chem wdt:P235 ?ik ;\n\t    \t\t\twdt:P703 ?organismWD .\n\t\t\t VALUES ?wd_chem { wd:Q75068439 }\n\t\t\t FILTER(?organismWD = ?source_wdx || ?organismWD = ?target_wdx)\t# ensure that organism-wd is either from source or target\n\t\t\t OPTIONAL { ?organismWD wdt:P225 ?organismName . }\n\t\t}\n\t}\n\t# interaction data\t\t\n\t?intxn emi:hasSource ?source ; #retrieve interaction-pairs\n\t\temi:hasTarget ?target .\n\t?source emi:inTaxon ?source_wdx . # retrieve wikidata-id of source\n\t?target emi:inTaxon ?target_wdx . # retrieve wikidata-id of target\n\t?intxn prov:atLocation ?loc ; # retrieve the location of the interaction, and the latitude/longitude\n\t\twgs:lat ?lats ;\t\t\t\t\t\n\t\twgs:long ?longs .\n}",
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
      "OPTIONAL",
      "UNION",
      "VALUES",
      "SERVICE",
      "DISTINCT",
      "FROM",
      "WITH",
      "STR",
      "IRI",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 016",
    "slug": "dbgi_016",
    "date": new Date("2025-06-18"),
    "description": "List of possible natural locations of plants, which produce  senkyunolide (wd:Q27251426)  which is a thalide for cerebral disorders (https://doi.org/10.3390/molecules28083636).",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\nPREFIX wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#>\nPREFIX prov: <http://www.w3.org/ns/prov#>\nSELECT DISTINCT ?organismName ?organismWD ?loc ?lats ?longs WHERE {\n\t# metabolite data\n\t{\n\t\tSELECT DISTINCT ?organismWD ?organismName WHERE {\n\t\t\t?material sosa:hasSample ?extract ;\n\t\t        \tsosa:isSampleOf ?organe .\n\t\t\t?organe emi:inTaxon ?organismWD ; # filter metabolite data which is found in wikidata-ids wdx\t\n\t\t\t\trdfs:label ?organismName .\n\t\t\t?extract sosa:isFeatureOfInterestOf ?lcms .\n\t\t\t?lcms sosa:hasResult ?feature_list .\n\t\t\t?feature_list emi:hasLCMSFeature ?feature .\n\t\t\t?feature emi:hasAnnotation ?sirius_annotation .\n\t\t\t?sirius_annotation a emi:StructuralAnnotation ;\n\t\t\t\temi:hasChemicalStructure ?ik2d .\n\t\t\t?ik2d emi:hasSMILES ?smiles ;\n\t\t\t\temi:isInChIKey2DOf ?ik .\n\t\t\t?ik emi:isInChIKeyOf ?wd_chem .\t# retrieve wikidata-ids for metabolites\n\t\t\tVALUES ?wd_chem { wd:Q27251426 } # filter wikidata_id of metabolites matches wd:Q27251426\n\t\t}\n\t} UNION # union with data from lotus (integrated in wikidata)\n\t{\n\t\tSERVICE <https://qlever.cs.uni-freiburg.de/api/wikidata> {\n\t\t\t?wd_chem wdt:P235 ?ik ;\n\t    \t\t\twdt:P703 ?organismWD .\n\t\t\t VALUES ?wd_chem { wd:Q27251426 }\n\t\t\t FILTER(?organismWD = ?source_wdx || ?organismWD = ?target_wdx)\t# ensure that organism-wd is either from source or target\n\t\t\t OPTIONAL { ?organismWD wdt:P225 ?organismName . }\n\t\t}\n\t}\n\t# interaction data\t\t\t\n\t?intxn emi:hasSource ?source ; # retrieve interaction-pairs\n\t\temi:hasTarget ?target .\n\t?source emi:inTaxon ?source_wdx . # retrieve wikidata-id of source\n\t\t?target emi:inTaxon ?target_wdx . # retrieve wikidata-id of target\n\t\t?intxn prov:atLocation ?loc ; # retrieve the location of the interaction, and the latitude/longitude\n\t\t\twgs:lat ?lats ;\t\t\t\t\t\n\t\t\twgs:long ?longs .\n} LIMIT 4000",
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
      "OPTIONAL",
      "UNION",
      "VALUES",
      "SERVICE",
      "LIMIT",
      "DISTINCT",
      "FROM",
      "WITH",
      "STR",
      "IRI",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 017",
    "slug": "dbgi_017",
    "date": new Date("2025-06-18"),
    "description": "List metabolites of plants that interact with plant parasite moth Orgyia postica (wd:Q7102162) .",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\nSELECT DISTINCT ?sourceWD ?sourceName ?intxnName ?intxnLabel ?targetWD ?targetName ?ik ?wd_chem WHERE { \n\t# interaction data\n\t{\n\t\tSELECT DISTINCT ?sourceWD ?sourceName ?intxnName ?intxnLabel ?targetWD ?targetName WHERE {\n                \t?intxn emi:hasSource ?source ; # retrieve interaction-pairs\n                \t\temi:hasTarget ?target ;\n                                emi:isClassifiedWith ?intxnName .\t\n                        ?target emi:inTaxon ?targetWD ;\t# retrieve wikidata-id for target plant \n\t\t\t\tsosa:isSampleOf ?targetSample ;\n\t\t\t\trdfs:label ?targetName .\n\t\t\t?source emi:inTaxon ?sourceWD ;\t# retrieve wikidata-id for source parasite\n\t\t\t\tsosa:isSampleOf ?sourceSample ;\n\t\t\t\trdfs:label ?sourceName .\n\t\t\t?intxnName rdfs:label ?intxnLabel\n                        VALUES ?sourceWD { wd:Q7102162 } # retain results only if the source-WD matches the wikidata-id of Orgyia postica\n                }\n\t}   \n\t# metabolite data        \n\t{\n\t\tSELECT DISTINCT ?targetWD ?ik ?wd_chem WHERE {\n                \t?material sosa:hasSample ?extract ;\n                      \t\tsosa:isSampleOf ?organe .\n                      \t?organe emi:inTaxon ?targetWD .\t# filter metabolite data which is found in wikidata-ids targetWD\n                      \t?extract sosa:isFeatureOfInterestOf ?lcms .\n                      \t?lcms sosa:hasResult ?feature_list .\n                      \t?feature_list emi:hasLCMSFeature ?feature .\n                      \t?feature emi:hasAnnotation ?sirius_annotation .\n                      \t?sirius_annotation a emi:StructuralAnnotation ;\n                      \t\temi:hasChemicalStructure ?ik2d .\n                        ?ik2d emi:hasSMILES ?smiles ;\n                        \temi:isInChIKey2DOf ?ik .\n                      \t?ik emi:isInChIKeyOf ?wd_chem .\t# retrieve wikidata-ids for metabolites\n                }\n\t} UNION\t#union with data from lotus (integrated in wikidata)\n\t{\n\t\tSERVICE <https://qlever.cs.uni-freiburg.de/api/wikidata> {\n\t\t\t?wd_chem wdt:P235 ?ik ;\n\t\t\t\twdt:P703 ?targetWD .\t\t\t\n\t\t}\n\t\tSERVICE <https://qlever.cs.uni-freiburg.de/api/wikidata> {\n               \t\t?targetWD wdt:P141 wd:Q719675 ; # filter source wikidata ids, which have IUCN status (wdt:P141) as near threatened (wd:Q719675) and which is a plant\n                        \twdt:P171* wd:Q879246 ;\n                     \tOPTIONAL { ?targetWD wdt:P225 ?targetName . }\n               \t}\n\t}\n}",
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
      "OPTIONAL",
      "UNION",
      "VALUES",
      "SERVICE",
      "DISTINCT",
      "FROM",
      "WITH",
      "STR",
      "IRI",
      "IF",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 018",
    "slug": "dbgi_018",
    "date": new Date("2025-06-18"),
    "description": "List links between host-parasite and host-allelopathic interactions, where host is an agricultural crop, allelopath is usually a plant that inhibits growth of parasites which are usually insects. Inhibition happens by root/stem/leaf exudates of the allelopath.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nSELECT DISTINCT ?parasiteX_WD ?parasiteName ?intxn1Label ?allelopathX_WD ?allelopathName ?intxn2Label ?agriCrop_WD ?agriCropName ?intxn3Label ?study1_DOI ?study2_DOI ?study3_DOI WHERE {\n\t\n\t#part-1 interactions for parasite that negatively effects a plant or an agricultural crop\n\t?parasiteX1 emi:inTaxon ?parasiteX_WD . # parasite and its WD\n\t?agriCropX emi:inTaxon ?agriCrop_WD . # agricultural crop and its WD\n\t?intxn1 emi:hasSource ?parasiteX1 ; # retrieve interaction pairs part-1\n    \t\temi:hasTarget ?agriCropX ;\n    \t\temi:isClassifiedWith ?intxnName1 .\n\t?intxnName1 rdfs:label ?intxn1Label .\n\t# filter the interactions either by FILTER (interaction label) or VALUES (interaction ID)\n\tFILTER ((STR(?intxn1Label) IN ('hasHost','rootparasiteOf', 'hemiparasiteOf', 'hyperparasiteOf','rootparasiteOf','endoparasiteOf','ectoparasiteOf')))\n\t# VALUES ?intxnName1 { <http://purl.obolibrary.org/obo/RO_0002454> <http://purl.obolibrary.org/obo/RO_0002632> <http://purl.obolibrary.org/obo/RO_0002634> <http://purl.obolibrary.org/obo/RO_0002237> <http://purl.obolibrary.org/obo/RO_0002553> <http://purl.obolibrary.org/obo/RO_0008503> <http://purl.obolibrary.org/obo/RO_0002444> <http://purl.obolibrary.org/obo/RO_0002236> }\n    \tOPTIONAL { \n\t\t?intxn1 dcterms:bibliographicCitation ?study1_DOI . \n\t}\n\n\t# part-2 interactions for allelopath that impacts a plant or an agricultural crop\n\t{\n\t\tSELECT * WHERE { \n\t\t\t?allelopathX1 emi:inTaxon ?allelopathX_WD . #allelopath and its WD\n\t\t\t?intxn2 emi:hasSource ?allelopathX1 ; #retrieve interaction pairs part-2\n    \t\t\t\temi:hasTarget ?agriCrop ;\n    \t\t\t\temi:isClassifiedWith ?intxnName2 .\n\t\t\t?intxnName2 rdfs:label ?intxn2Label .\n\t\t\tVALUES ?intxnName2 { <http://purl.obolibrary.org/obo/RO_0002555> } # filter interactions which have interaction ID of allelopathOf\n\t\t\t?agriCrop emi:inTaxon ?agriCrop_WD ; # retreieve agriCrop and its WD\n\t           \t\trdfs:label ?agriCropName .\n    \t\t\tOPTIONAL { \n\t\t\t\t?intxn2 dcterms:bibliographicCitation ?study2_DOI . \n\t\t\t}\n\t\t\tSERVICE <https://qlever.cs.uni-freiburg.de/api/wikidata> {\n\t \t\t\t?agriCrop_WD wdt:P171* wd:Q879246 . # keep the interaction pairs part-2 only if agriCrop_WD has Kingdom Archaeplastida (wd:Q879246) in its lineage, this is to ensure the agriCrop is really a plant\n\t\t\t}\n\t\t}\n\t}\n\n    \t#part-3 interactions for parasite that impacts the allelopath\n\t{\n\t\tSELECT * WHERE {\n\t    \t\t?intxn3 emi:hasSource ?parasiteX ; # retrieve interaction pairs part-3\n\t    \t\t\temi:hasTarget ?allelopathX ;\n\t    \t\t\temi:isClassifiedWith ?intxnName3 . \n\t\t\t?intxnName3 rdfs:label ?intxn3Label .\n\t\t\t# filter interactions by interaction label (hasHost and allelopathOf) or interaction ID\n\t    \t\tFILTER (STR(?intxn3Label) IN ('hasHost','hasAllelopath'))\n\t\t\t# VALUES ?intxnName3 { <http://purl.obolibrary.org/obo/RO_0020301> <http://purl.obolibrary.org/obo/RO_0002454> }\n\t\t\t?parasiteX emi:inTaxon ?parasiteX_WD ; # retreieve wikidata-ids for parasiteX\n\t\t\t\trdfs:label ?parasiteName .\n\t\t\t?allelopathX emi:inTaxon ?allelopathX_WD ; # retreieve wikidata-ids for allelopathX\n\t\t\t\trdfs:label ?allelopathName .\n\t\t\tOPTIONAL { \n\t\t\t\t?intxn3 dcterms:bibliographicCitation ?study3_DOI . \n\t    \t\t}\n\t\t}\n\t}\n}",
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
      "OPTIONAL",
      "GRAPH",
      "VALUES",
      "SERVICE",
      "DISTINCT",
      "WITH",
      "ALL",
      "STR",
      "IF"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 019",
    "slug": "dbgi_019",
    "date": new Date("2025-06-18"),
    "description": "A list of interactions depicting connections between parasatoids harmful for insects living as parasites on plants.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nSELECT DISTINCT ?parasitoidX_WD ?parasitoidName ?intxn2Label ?parasiteX_WD ?parasiteName ?intxn3Label ?hostPlant_WD ?hostPlantName ?study2_DOI ?study3_DOI WHERE {\n\t# part-1 interaction data parasite and parasitoid\n\t{ \n\t\tSELECT DISTINCT ?parasitoidName ?parasiteName ?parasiteX_WD ?intxn2Label ?parasitoidX_WD ?study2_DOI WHERE {\n\t\t\t?intxn2 emi:hasSource ?parasitoidX ; # retrieve interaction pairs part-1\n\t    \t\t\temi:hasTarget ?parasiteX ;\n\t    \t\t\temi:isClassifiedWith ?intxnName2 .   \n\t\t\tVALUES ?intxnName2 { <http://purl.obolibrary.org/obo/RO_0002208> } # keep interactions only if the interaction-id is RO_0002208 (parasitoidOf), e.g: 'parasitoidX' is 'parasitoidOf' 'parasiteX'\n\t\t\t?intxnName2 rdfs:label ?intxn2Label .\t\t\n\t\t\t?parasitoidX emi:inTaxon ?parasitoidX_WD ; # retreieve wikidata-ids for parasitoidX\n\t\t\t     \trdfs:label ?parasitoidName ;\n\t\t\t     \tsosa:isSampleOf ?parasitoidSample . # retrieve scientific name of parasitoidX as listed in GloBI\n\t\t\t?parasiteX emi:inTaxon ?parasiteX_WD ; # retreieve wikidata-ids for parasiteX\n\t\t\t\trdfs:label ?parasiteName ;\n\t\t\t\tsosa:isSampleOf ?parasiteSample . # retreieve scientific name for parasiteX as listed in GloBI\n\t\t\tOPTIONAL { \n\t\t\t\t?intxn2 dcterms:bibliographicCitation ?study2_DOI . # optionally retrieve the doi of the study for parasitoid-parasite pairs\n\t\t\t}\n\t\t}\n\t}\n\n\t# part-2 interaction data parasite and host plant\n\t?parasiteX1 emi:inTaxon ?parasiteX_WD .\t# check pasarsiteX1 is in wikidata-id parasiteX_WD (the ones obtained from interaction-pairs part-1)\n\t?intxn3 emi:hasSource ?parasiteX1 ; # retrieve interaction pairs part-2\n    \t\temi:hasTarget ?hostPlant ;\n    \t\temi:isClassifiedWith ?intxnName3 .\n\t?intxnName3 rdfs:label ?intxn3Label .\n\t?hostPlant emi:inTaxon ?hostPlant_WD ;\t# retreieve wikidata-ids for hostPlant\n\t\trdfs:label ?hostPlantName ;\n\t\tsosa:isSampleOf ?hostPlantSample . # retreieve scientific name for hostPlant as listed in GloBI\n\tOPTIONAL { \n\t\t?intxn3 dcterms:bibliographicCitation ?study3_DOI . \n\t}\n    \tFILTER (!(STR(?intxn3Label) IN ('visits', 'visitsFlowersOf', 'pollinates')))\t# keep interactions only if the interaction-names are not 'visits', 'visitsFlowersOf' or 'pollinates'. e.g.: 'parasiteX1' is 'pathogenOf/parasiteOf/..' 'hostPlant'\n\tSERVICE <https://qlever.cs.uni-freiburg.de/api/wikidata> {\n\t \t?hostPlant_WD wdt:P171* wd:Q879246 . # keep the interaction pairs part-2 only if hostPlant_WD has Kingdom Archaeplastida (wd:Q879246) in its lineage, this is to ensure the hostPlant is really a plant\n\t}\n} LIMIT 1000",
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
      "OPTIONAL",
      "GRAPH",
      "VALUES",
      "SERVICE",
      "LIMIT",
      "DISTINCT",
      "FROM",
      "WITH",
      "ALL",
      "STR",
      "IF",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 020",
    "slug": "dbgi_020",
    "date": new Date("2025-06-18"),
    "description": "Natural producers (and their interactions that might be useful in agriculture) of Onpordopicrin (wd:Q27107580), which might exhibit antimicrobial and cytotoxic activities, especially against human-derived macrophages and against epidermoid carcinoma cells. There is limited scientific evidence to support these claims (https://www.sciencedirect.com/science/article/abs/pii/S138614251500685X).",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\nPREFIX wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#>\nPREFIX prov: <http://www.w3.org/ns/prov#>\nSELECT DISTINCT ?sourceWD ?sourceName ?intxnName ?targetWD ?targetName ?loc WHERE {\n\t# trait data\n\t?intxn emi:hasSource ?xOrg ; # retrieve interaction-pairs\n        \temi:hasTarget ?yOrg ;\n\t\temi:isClassifiedWith ?intxnName ;\n\t\tprov:atLocation ?loc ; # retrieve location, latitude and longitude of interactions\n\t\twgs:lat ?lats ;\t\t\t\t\t\n\t\twgs:long ?longs .\n\t?xOrg emi:inTaxon ?sourceWD ; # retrieve interaction-source and its scientific name as listed in GloBI\n\t\trdfs:label ?sourceName ;\n\t\tsosa:isSampleOf ?sourceSample .\n\t?yOrg emi:inTaxon ?targetWD ; # retrieve interaction-target and its scientific name as listed in GloBI\n\t\trdfs:label ?targetName ;\n\t\tsosa:isSampleOf ?targetSample .\n\n\t# metabolite data\n        { \n\t\tSELECT DISTINCT ?targetWD ?wd_chem WHERE {\t\t\n\t\t\t?material sosa:hasSample ?extract ;\n                        \tsosa:isSampleOf ?organe .\n                \t?organe emi:inTaxon ?targetWD .\t# filter by target wikidata-id\n                \t?extract sosa:isFeatureOfInterestOf ?lcms .\n                \t?lcms sosa:hasResult ?feature_list .\n                \t?feature_list emi:hasLCMSFeature ?feature .\n                \t?feature emi:hasAnnotation ?sirius_annotation .\n                \t?sirius_annotation a emi:StructuralAnnotation ;\n\t                \temi:hasChemicalStructure ?ik2d .\n                \t?ik2d emi:hasSMILES ?smiles ;\n                      \t\temi:isInChIKey2DOf ?ik .\n                \t?ik emi:isInChIKeyOf ?wd_chem .\n                \tVALUES ?wd_chem { wd:Q27107580 } # filter on the wikidata-id of Onpordopicrin\n\t\t}\n\t} UNION\t# union with the lotus metabolite data from wikidata\n\t{ \n\t\tSERVICE <https://qlever.cs.uni-freiburg.de/api/wikidata> {\n\t\t\t?wd_chem wdt:P235 ?ik ;\n   \t\t\t\twdt:P703 ?targetWD .\n\t\t \tVALUES ?wd_chem { wd:Q27107580 }\n\t\t}\n\t}\n}",
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
      "UNION",
      "VALUES",
      "SERVICE",
      "DISTINCT",
      "FROM",
      "WITH",
      "STR",
      "IRI",
      "IF",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 021",
    "slug": "dbgi_021",
    "date": new Date("2025-06-18"),
    "description": "List possible interactions of plants that can produce Norhyocyamine (wd:Q27107545), a plant secondary metabolite.",
    "context": null,
    "inidces": [],
    "query": "PREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX emi: <https://purl.org/emi#>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\nSELECT DISTINCT ?sourceWD ?sourceName ?intxnName ?intxnId ?targetWD ?targetName WHERE {\n\t# interaction data\n\t{\n        \t?intxn emi:hasSource ?xOrg ; # retrieve interaction-pairs\n                \temi:hasTarget ?yOrg ;\n                        emi:isClassifiedWith ?intxnId .\n                ?intxnId rdfs:label ?intxnName .\n                ?xOrg emi:inTaxon ?sourceWD ;\n\t\t\trdfs:label ?sourceName .\n\t\t?yOrg emi:inTaxon ?targetWD ;\n\t\t\trdfs:label ?targetName .\n        }\n\n\t# metabolite data\n\tFILTER (?xWD = ?sourceWD || ?xWD = ?targetWD)\t# ensure that xWD can be both source/target from the interaction-pairs retrieved before\n        {\n\t\tSELECT DISTINCT ?xWD ?wd_chem WHERE {\n                \t?material sosa:hasSample ?extract ;\n                        \tsosa:isSampleOf ?organe .\n                        ?organe emi:inTaxon ?xWD .\n                        ?extract sosa:isFeatureOfInterestOf ?lcms .\n                        ?lcms sosa:hasResult ?feature_list .\n                        ?feature_list emi:hasLCMSFeature ?feature .\n                        ?feature emi:hasAnnotation ?sirius_annotation .\n                        ?sirius_annotation a emi:StructuralAnnotation ;\n                        \temi:hasChemicalStructure ?ik2d .\n                        ?ik2d emi:hasSMILES ?smiles ;\n                        \temi:isInChIKey2DOf ?ik .\n                        ?ik emi:isInChIKeyOf ?wd_chem .\n                        VALUES ?wd_chem { wd:Q27107545 }\n                }\n\t}  UNION # union with data from wikidata (lotus)\n\t{ \n\t\tSERVICE <https://qlever.cs.uni-freiburg.de/api/wikidata> {\n\t\t\t?wd_chem wdt:P235 ?ik ;\n   \t\t\t\twdt:P703 ?xWD .\n\t\t\tVALUES ?wd_chem { wd:Q27107545 }\n\t\t}\n\t}\n}",
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
      "UNION",
      "VALUES",
      "SERVICE",
      "DISTINCT",
      "FROM",
      "WITH",
      "STR",
      "IRI",
      "IF",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 022",
    "slug": "dbgi_022",
    "date": new Date("2025-06-18"),
    "description": "Retrieve data of 4 traits in leaf economics spectrum.",
    "context": null,
    "inidces": [],
    "query": "PREFIX emi: <https://purl.org/emi#>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nPREFIX qudt: <https://qudt.org/2.1/schema/qudt#>\nSELECT DISTINCT ?source_wdx ?sourceName ?traitCategory ?traitLabel ?tryDataVal ?unit ?unitComment WHERE \n\t{\n\t\t# trait data\n\t\t# trait/non-trait data for trySpName (scientific name of plant species as listed in trydb)\n\t\t?trySpObs sosa:isSampleOf ?trySpName ;\n\t\t\trdfs:label ?sourceName ;\n\t\t\tsosa:isFeatureOfInterestOf ?tryObId .\n\t\t?tryObId sosa:hasResult ?tryData .\n\t\t?trySpName emi:inTaxon ?source_wdx . # wikidata-ids wdx for trySpName\n\t\t?tryData rdfs:label ?traitLabel ;\n\t\t\trdf:type emi:Trait ; #retrieve data which is labelled as 'Trait' and its values\n\t\t\trdf:value ?tryDataVal ;\n\t\t\tqudt:hasUnit ?unit . #retrieve units for Trait data\n\t\tOPTIONAL {\n\t\t\t?tryData rdfs:comment ?unitComment .\n\t\t} #retrieve comments (containing original unprocessed unit information - necessary for understanding some data) for Trait data\n  \t\t# retrieve trait labels\n\t\tBIND (IF(REGEX(STR(?traitLabel),\"SLA\",\"i\"),\"Specific leaf area\",IF(REGEX(STR(?traitLabel),\"leaf dry matter content\",\"i\"),\"Leaf dry matter content\",IF(REGEX(STR(?traitLabel),\"leaf nitrogen content\",\"i\"),\"Leaf nitrogen content\",IF(REGEX(STR(?traitLabel),\"leaf phosphorus content\",\"i\"),\"Leaf phosphorus content\",\"Other\")))) AS ?traitCategory)\n  \t\t# filter to LES categories only\n  \t\tFILTER (?traitCategory != \"Other\")\n\t}\n\t# group results and retain only the ones from organisms with all four traits available \n\tGROUP BY ?source_wdx ?sourceName ?traitCategory ?traitLabel ?tryDataVal ?unit ?unitComment\n\tHAVING (COUNT(?traitCategory) = 4)\n\t# order by organism and trait names\n\tORDER BY ?source_wdx ?traitCategory",
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
      "OPTIONAL",
      "BIND",
      "VALUES",
      "GROUP BY",
      "ORDER BY",
      "HAVING",
      "DISTINCT",
      "FROM",
      "WITH",
      "ALL",
      "STR",
      "REGEX",
      "IF",
      "COUNT",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  },
  {
    "name": "dbgi - 023",
    "slug": "dbgi_023",
    "date": new Date("2025-06-18"),
    "description": "Retrieve metabolites of organisms with data available from 4 traits in leaf economics spectrum.",
    "context": null,
    "inidces": [],
    "query": "PREFIX emi: <https://purl.org/emi#>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX sosa: <http://www.w3.org/ns/sosa/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT DISTINCT ?structure_inchikey ?wd_chem ?source_wdx ?sourceName  WHERE \n\t{\n\t\t# trait data\n\t\t\n\t\t# trait/non-trait data for trySpName (scientific name of plant species as listed in trydb)\n\t\t?trySpObs sosa:isSampleOf ?trySpName ; \n\t\t\trdfs:label ?sourceName ;\n\t\t\tsosa:isFeatureOfInterestOf ?tryObId .\n\t\t?tryObId sosa:hasResult ?tryData .\n\t\t?trySpName emi:inTaxon ?source_wdx . # wikidata-ids wdx for trySpName\n\t\t?tryData rdfs:label ?traitLabel ; \n\t\t\trdf:type emi:Trait ; #retrieve data which is labelled as 'Trait' and its values\n\t\t\n\t\t# retrieve trait labels\n\t\tBIND (\n        \t\tIF (REGEX(STR(?traitLabel), \"SLA\", \"i\"), \"Specific leaf area\",\n    \t\t\tIF (REGEX(STR(?traitLabel), \"leaf dry matter content\", \"i\"), \"Leaf dry matter content\",\n\t    \t\tIF (REGEX(STR(?traitLabel), \"leaf nitrogen content\", \"i\"), \"Leaf nitrogen content\",\n    \t\t\tIF (REGEX(STR(?traitLabel), \"leaf phosphorus content\", \"i\"), \"Leaf phosphorus content\",\n    \t\t\t\"Other\")))) AS ?traitCategory\n  \t\t)\n  \t\t\n\t\t# filter to LES categories only\n\t  \tFILTER (?traitCategory != \"Other\")\n\t\t\n\t\t# metabolite data\n\t\t{ \n\t\t\tSELECT ?source_wdx ?structure_inchikey ?wd_chem WHERE {\t\n\t\t\t\t?material sosa:hasSample ?extract ;\t\t\t\t\n\t\t        \t\tsosa:isSampleOf ?organe .\t\n\t\t\t\t?organe emi:inTaxon ?source_wdx . # filter metabolite data which is found in wikidata-ids wdx \n\t\t\t\t?extract sosa:isFeatureOfInterestOf ?lcms .\n\t\t\t    \t?lcms sosa:hasResult ?feature_list .\n\t\t\t\t?feature_list emi:hasLCMSFeature ?feature .\n\t\t\t\t?feature emi:hasAnnotation ?sirius_annotation .\n\t\t\t\t?sirius_annotation a emi:StructuralAnnotation ;\n\t\t\t\t\temi:hasChemicalStructure ?ik2d .\n\t\t\t\t?ik2d emi:hasSMILES ?smiles ;\n\t\t    \t\t\temi:isInChIKey2DOf ?structure_inchikey .\n\t\t\t\t?structure_inchikey emi:isInChIKeyOf ?wd_chem .\t# wikidata-ids for metabolites\n\t\t\t}\n\t\t}\n\t\tUNION # union with data from lotus (integrated in wikidata)\n\t\t{\n\t\t\tSERVICE <https://qlever.cs.uni-freiburg.de/api/wikidata> {\t\t\n\t\t\t\t?wd_chem wdt:P235 ?structure_inchikey;\t\t\t\t\n\t   \t\t\t\twdt:P703 ?source_wdx .\t\n\t\t\t}\n\t\t}\n\t}\n\n\t# group results and retain only the ones from organisms with all four traits available \n\tGROUP BY ?source_wdx ?sourceName ?traitCategory ?structure_inchikey ?wd_chem\n\tHAVING(COUNT(?traitCategory) = 4)\n\n\t# order by organism and trait names\n\tORDER BY ?source_wdx ?traitCategory",
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
      "UNION",
      "BIND",
      "VALUES",
      "SERVICE",
      "GROUP BY",
      "ORDER BY",
      "HAVING",
      "DISTINCT",
      "FROM",
      "WITH",
      "ALL",
      "STR",
      "REGEX",
      "IRI",
      "IF",
      "COUNT",
      "SAMPLE"
    ],
    "category": "sib-swiss dbgi"
  }
];