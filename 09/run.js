
import { input } from "./input.js";
import { positionsVisitedByTail } from "./a/a.js";
import { positionsVisitedByLongTail } from "./b/b.js";

const resultA = positionsVisitedByTail(input);
console.log(resultA);

const resultB = positionsVisitedByLongTail(input);
console.log(resultB);