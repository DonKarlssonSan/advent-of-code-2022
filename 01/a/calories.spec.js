import { assert } from "chai";
import { getMostCalories } from "./calories.js";

describe("01-a Calories", () => {
  it("should find the most calories", () => {
    const calories = 
`1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
    const result = getMostCalories(calories);

    assert.equal(result, 24000);
  }); 
});
