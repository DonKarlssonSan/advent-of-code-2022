
import { input } from "./input.js";
import { impossiblePositionsForRow } from "./a/a.js";
import { getTuningFrequency } from "./b/b.js";

//const resultA = impossiblePositionsForRow(input, 2000000);
//console.log(resultA);

const resultB = getTuningFrequency(input, 4000000, 4000000);
console.log(resultB);