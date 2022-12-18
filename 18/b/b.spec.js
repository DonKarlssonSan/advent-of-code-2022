import { assert } from "chai";
import { getSurfaceArea, parseScan, canBeReachedByWater } from "./b.js";

describe("18-b Boiling Boulders", () => {
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

  it("should return surface area 58", () => {
    const result = getSurfaceArea(input);
    assert.equal(result, 58);
  });

  it("should return false, can't be reached by water", () => {
    const { scan } = parseScan(input);
    const result = canBeReachedByWater(scan, 2, 2, 5);
    assert.isFalse(result);
  });

  it("should return true, can be reached by water", () => {
    const { scan } = parseScan(input);
    assert.isTrue(canBeReachedByWater(scan, 2, 1, 2));
    assert.isTrue(canBeReachedByWater(scan, 2, 2, 4));
    assert.isTrue(canBeReachedByWater(scan, 1, 2, 5));
  });
});
