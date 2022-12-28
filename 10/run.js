
import { input } from "./input.js";
import { getTotalSignalStrength } from "./a/a.js";
import { getPixels } from "./b/b.js";

const resultA = getTotalSignalStrength(input);
console.log(resultA);

const resultB = getPixels(input);
console.log(resultB);