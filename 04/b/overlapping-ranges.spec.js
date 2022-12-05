import { assert } from "chai";
import { getOverlappingRanges, rangesOverlap } from "./overlapping-ranges.js";

describe("04-b Camp Cleanup - overlapping ranges", () => {
  it("should return 4 overlapping ranges", () => {
    const input = 
`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
    const result = getOverlappingRanges(input);
    assert.equal(result, 4);
  });

  it("should return true because ranges overlap", () => {
    const result = rangesOverlap(1, 3, 2, 4);
    assert.equal(result, true);
  });

  it("should return true because ranges overlap", () => {
    const result = rangesOverlap(2, 4, 1, 3);
    assert.equal(result, true);
  });
});
