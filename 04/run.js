
import { input } from "./input.js";
import { getContainedRanges } from "./a/a.js";
import { getOverlappingRanges } from "./b/b.js";

const resultA = getContainedRanges(input);
console.log(resultA);

const resultB = getOverlappingRanges(input);
console.log(resultB);