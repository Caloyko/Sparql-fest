import { tutoQueries } from "./tutos/tutosquery";

export const allTutoQueries = tutoQueries.map((query, index) => ({
    ...query,
    image: "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    source: "Tutorials"
  }));