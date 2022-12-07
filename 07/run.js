
import { input } from "./input.js";
import { aggregateSizesAtMost } from "./a/a.js";
import { b } from "./b/b.js";

const resultA = aggregateSizesAtMost(input, 100000);
console.log(resultA);

const resultB = b(input);
console.log(resultB);