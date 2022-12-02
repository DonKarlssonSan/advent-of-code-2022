
import { input } from "./input.js";
import { getTotalScore } from "./a/rochambeau.js";
import { getTotalScore2 } from "./b/rochambeau.js";

const resultA = getTotalScore(input);
console.log(resultA);

const resultB = getTotalScore2(input);
console.log(resultB);