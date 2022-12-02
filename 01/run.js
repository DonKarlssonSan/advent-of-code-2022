import { getMostCalories } from "../01/a/calories.js";
import { getTopThreeCalories } from "../01/b/calories.js";

import { input } from './input.js';

const max = getMostCalories(input);
console.log(max);

const sum = getTopThreeCalories(input);
console.log(sum);
