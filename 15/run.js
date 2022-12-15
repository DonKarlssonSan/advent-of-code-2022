
import { input } from "./input.js";
import { impossiblePositionsForRow } from "./a/a.js";
import { b } from "./b/b.js";

const resultA = impossiblePositionsForRow(input, 2000000);
console.log(resultA);

const resultB = b(input);
console.log(resultB);