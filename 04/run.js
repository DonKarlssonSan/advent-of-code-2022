
import { input } from "./input.js";
import { getContainedRanges } from "./a/contained-ranges.js";
import { getOverlappingRanges } from "./b/overlapping-ranges.js";

const resultA = getContainedRanges(input);
console.log(resultA);

const resultB = getOverlappingRanges(input);
console.log(resultB);