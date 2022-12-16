
import { input } from "./input.js";
import { getSum } from "./a/a.js";
import { findDirToDelete } from "./b/b.js";

const resultA = getSum(input, 100000);
console.log(resultA);

const resultB = findDirToDelete(input);
console.log(resultB);