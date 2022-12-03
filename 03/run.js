
import { input } from "./input.js";
import { getPrioritySum } from "./a/a.js";
import { getPrioritySum as getPrioritySum2 } from "./b/b.js";

const resultA = getPrioritySum(input);
console.log(resultA);

const resultB = getPrioritySum2(input);
console.log(resultB);