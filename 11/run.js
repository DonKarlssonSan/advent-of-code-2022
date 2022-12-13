
import { input } from "./input.js";
import { getMonkeyBusiness } from "./a/a.js";
import { getMonkeyBusiness as getMonkeyBusiness2 } from "./b/b.js";

const resultA = getMonkeyBusiness(input);
console.log(resultA);

//const resultB = getMonkeyBusiness2(input, 10000);
//console.log(resultB);