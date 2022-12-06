
import { input } from "./input.js";
import { findStartOfMessage } from "./a/a.js";

const resultA = findStartOfMessage(input);
console.log(resultA);

const resultB = findStartOfMessage(input, 14);
console.log(resultB);