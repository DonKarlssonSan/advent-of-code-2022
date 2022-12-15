
import { input } from "./input.js";
import { run } from "./a/a.js";
import { run as run2 } from "./b/b.js";

const resultA = run(input);
console.log(resultA);

const resultB = run2(input);
console.log(resultB);