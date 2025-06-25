import {lymeMappingQueries} from "./tutos/lymeMappingQueries";
import { tutoQueries } from "./tutos/tutosquery";



function mergeAndFormatTutoQueries() {
  const merged = [...tutoQueries, ...lymeMappingQueries];

  return merged.map((query, index) => {
    const tmp = {
      ...query,
      image: "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      source: "Tutorials"
    };
    return tmp
  });
}

export const allTutoQueries = mergeAndFormatTutoQueries()