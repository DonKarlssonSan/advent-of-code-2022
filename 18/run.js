
import { input } from "./input.js";
import { getSurfaceArea } from "./a/a.js";
import { getSurfaceArea as getSurfaceArea2 } from "./b/b.js";

const resultA = getSurfaceArea(input);
console.log(resultA);

const resultB = getSurfaceArea2(input);
console.log(resultB);