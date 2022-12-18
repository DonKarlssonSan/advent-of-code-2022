import { assert } from "chai";
import { getSurfaceArea } from "./a.js";

describe("18-a Boiling Boulders", () => {
  it("should return surface area 64", () => {
    const input = 
`2,2,2
1,2,2
3,2,2
2,1,2
2,3,2
2,2,1
2,2,3
2,2,4
2,2,6
1,2,5
3,2,5
2,1,5
2,3,5`;
    const result = getSurfaceArea(input);
    assert.equal(result, 64);
  });

  it("should return surface area 10", () => {
    const input = 
`1,1,1
2,1,1`;
    const result = getSurfaceArea(input);
    assert.equal(result, 10);
  });
  
});
