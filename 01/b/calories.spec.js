import { assert } from "chai";
import { getTopThreeCalories } from "./calories.js";

describe("01-b Calories", () => {
  it("should find the top three calories", () => {
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
    const result = getTopThreeCalories(calories);

    assert.equal(result, 45000);
  }); 
});
