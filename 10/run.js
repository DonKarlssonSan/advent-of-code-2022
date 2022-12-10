
import { input } from "./input.js";
import { getTotalSignalStrength } from "./a/a.js";
import { b } from "./b/b.js";

const resultA = getTotalSignalStrength(input);
console.log(resultA);

const resultB = b(input);
console.log(resultB);