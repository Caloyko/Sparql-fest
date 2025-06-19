
import bigcatUmLogo from "../../assets/images/bigcat-um.png"
import {ChEMBL} from "./BiGCAT-UM/ChEMBL"
import {AOPWiki} from "./BiGCAT-UM/AOPWiki"
import {Scholia} from "./BiGCAT-UM/Scholia"
import {VHP4Safety} from "./BiGCAT-UM/VHP4Safety"
import {WikidataCiTO} from "./BiGCAT-UM/WikidataCiTO"
import {WikidataMastodon} from "./BiGCAT-UM/WikidataMastodon"
import {WikidataRetractions} from "./BiGCAT-UM/WikidataRetractions"
import {WikiPathways} from "./BiGCAT-UM/WikiPathways"

function mergeAndFormatBigcatUmQueries() {
  const merged = [...ChEMBL, ...AOPWiki, ...Scholia, ...VHP4Safety, ...WikidataCiTO, ...WikidataMastodon,...WikidataRetractions, ...WikiPathways];

  return merged.map((query, index) => {
    const tmp = {
      ...query,
      image: bigcatUmLogo,
      source: "BiGCAT-UM"
    };
    return tmp
  });
}

export const bigcatUmQueries = mergeAndFormatBigcatUmQueries();
