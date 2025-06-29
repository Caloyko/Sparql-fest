import img0 from "../assets/images/network-bg-1.jpg"
import img1 from "../assets/images/network-bg-2.avif"
import img2 from "../assets/images/network-bg-3.jpg"
import { amcQueries } from "./queries-data/amc-ex"
import { bigcatUmQueries } from "./queries-data/BiGCAT-UM-sparql-ex"
import { swissQueries } from "./queries-data/swiss-sparql-ex"
import { allTutoQueries } from "./queries-data/tuto-ex"

/*

type Query = {
  id: number;
  name: string;
  slug: string;
  image: any; //image
  description: string;
  context: string;
  indices: string;
  query: string;
  ontologies: string;
  sparqlConcepts: [];
  category: string;
  rdfResultExample: string;
  source?: string;
};

*/

const imgLevel = [img0, img1, img2]

function mergeAndFormatQueries(amcQueries, swissQueries, bigcatUmQueries, allTutoQueries) {
  const merged = [...amcQueries, ...swissQueries, ...bigcatUmQueries, ...allTutoQueries];

  return merged.map((query, index) => {
    const levelNumber = query.level?.match(/\d+/)?.[0] || "0";
    return {
      ...query,
      id: index + 1,
      image: query.image || imgLevel[levelNumber]
    };
  });
}

export const sparqlQueries = mergeAndFormatQueries(amcQueries, swissQueries, bigcatUmQueries, allTutoQueries);
