
import { getSteps } from "./a/a.js";
import { b } from "./b/b.js";
import { input } from "./input.js";

const resultA = getSteps(input, {x: 0, y: 20 }, {x: 120, y: 20 });
console.log(resultA);

const resultB = b(input);
console.log(resultB);