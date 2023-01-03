
import { input } from "./input.js";
import { getNrOfEmptyTilesAfter } from "./a/a.js";
import { getNrOfMoves } from "./b/b.js";

const resultA = getNrOfEmptyTilesAfter(input, 10);
console.log(resultA);

const resultB = getNrOfMoves(input);
console.log(resultB);