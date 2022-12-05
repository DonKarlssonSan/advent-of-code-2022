
import { input } from "./input.js";
import { moveAndGetTopCrates } from "./a/supply-stacks.js";

const resultA = moveAndGetTopCrates(input);
console.log(resultA);

const craneModel = "CrateMover 9001";
const resultB = moveAndGetTopCrates(input, craneModel);
console.log(resultB);
