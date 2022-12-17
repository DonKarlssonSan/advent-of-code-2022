
import { input } from "./input.js";
import { getHeightAfter } from "./a/a.js";
import { b } from "./b/b.js";

const resultA = getHeightAfter(input, 2022);
console.log(resultA);

const resultB = b(input);
console.log(resultB);