
import { input } from "./input.js";
import { getNrOfVisibleTrees } from "./a/a.js";
import { getHighestScenicScore } from "./b/b.js";

const resultA = getNrOfVisibleTrees(input);
console.log(resultA);

const resultB = getHighestScenicScore(input);
console.log(resultB);