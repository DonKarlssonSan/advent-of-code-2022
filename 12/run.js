
import { getSteps } from "./a/a.js";
import { getSteps as getSteps2 } from "./b/b.js";
import { input } from "./input.js";

const resultA = getSteps(input, {x: 0, y: 20 }, {x: 120, y: 20 });
console.log(resultA);

const resultB = getSteps2(input, "a", {x: 120, y: 20 });
console.log(resultB);