import amcLogo from "../assets/images/amc_logo.jpeg"
import sibLogo from "../assets/images/SIB2.jpg"
export const allSources = [
    {
        id:"AMC",
        name: "Amsterdam University Medical Center",
        prefix: "AMC",
        logo: amcLogo,
        namespace: "https://www.amsterdamumc.org/nl.htm",
        
    },
    {
        id:"SIB",
        name: "SIB Swiss",
        logo: sibLogo,
        prefix: "SIB",
        namespace: "https://sib-swiss.github.io/sparql-examples/",
        other:[{
            name: "A large collection of bioinformatics question-query pairs over federated knowledge graphs: methodology and applications",
            type: "article",
            link: "https://arxiv.org/abs/2410.06010",
            metadata: "author : Jerven Bolleman and Vincent Emonet and Adrian Altenhoff and Amos Bairoch and Marie-Claude Blatter and Alan Bridge and Severine Duvaud and Elisabeth Gasteiger and Dmitry Kuznetsov and Sebastien Moretti and Pierre-Andre Michel and Anne Morgat and Marco Pagni and Nicole Redaschi and Monique Zahn-Zabal and Tarcisio Mendes de Farias and Ana Claudia Sima"
        }]
    }
]