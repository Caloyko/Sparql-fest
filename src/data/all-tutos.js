import img0 from "../assets/images/network-bg-1.jpg"
import img1 from "../assets/images/network-bg-2.avif"
import img2 from "../assets/images/network-bg-3.jpg"
import { tuto1 } from "./tutos/tuto1"
import { tuto2 } from "./tutos/tuto2"
import { tuto3 } from "./tutos/tuto3"
import { tuto4 } from "./tutos/tuto4"

function mergeQueries(source) {
  const merged =  [tuto1, tuto2, tuto3, tuto4]

  return merged.map((query, index) => {
    const tmp = {
      ...query,
      source: source
    };
    return tmp
  });
}
export const allTutos = mergeQueries("Tutorials")