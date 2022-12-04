import { assert } from "chai";
import { getContainedRanges, isSecondRangeInFirst, isOneRangeInTheOther } from "./a.js";

describe("04-a Camp Cleanup", () => {
  it("should return 2 fully containing ranges", () => {
    const input = 
`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
    const result = getContainedRanges(input);
    assert.equal(result, 2);
  });
  it("should return true, because second range is in first range", () => {
    const result = isSecondRangeInFirst(1, 10, 2, 8);
    assert.equal(result, true);
  })
  it("should return true, because second range is in first range", () => {
    const result = isSecondRangeInFirst(1, 10, 1, 8);
    assert.equal(result, true);
  })
  it("should return false, because second range is NOT in first range", () => {
    const result = isSecondRangeInFirst(1, 3, 1, 4);
    assert.equal(result, false);
  })
  it("should return true, because first range is in second range", () => {
    const result = isOneRangeInTheOther(1, 3, 1, 4);
    assert.equal(result, true);
  })
});
