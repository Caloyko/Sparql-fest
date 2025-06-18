
import sibLogo from "../../assets/images/SIB_logo.jpg"
import { Bgee } from "./sib-swiss/Bgee";
import { Cellosaurus } from "./sib-swiss/Cellosaurus";
import { dbgi } from "./sib-swiss/dbgi";
import { GlyConnect } from "./sib-swiss/GlyConnect";
import { HAMAP } from "./sib-swiss/HAMAP";
import { neXtProt } from "./sib-swiss/neXtProt";
import { OMA } from "./sib-swiss/OMA";
import { OrthoDB } from "./sib-swiss/OrthoDB";
import { Rhea } from "./sib-swiss/Rhea";
import { SwissLipids } from "./sib-swiss/SwissLipids";
import { UniProt } from "./sib-swiss/UniProt";


function mergeAndFormatSwissQueries() {
  const merged = [...Bgee, ...Cellosaurus, ...dbgi,...GlyConnect, ...HAMAP, ...neXtProt, ...OMA, ...OrthoDB, ...Rhea, ...SwissLipids, ...UniProt];

  return merged.map((query, index) => {
    const tmp = {
      ...query,
      image: sibLogo,
      source: "SIB"
    };
    return tmp
  });
}

export const swissQueries = mergeAndFormatSwissQueries();
