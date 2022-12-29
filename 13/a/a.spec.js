import { assert } from "chai";
import { sumOfIndexesForCorrectPairs, comparePair } from "./a.js";

describe("13-a Distress Signal", () => {
  it("1) should return right order, true", () => {
    const input = [
     [1,1,3,1,1],
     [1,1,5,1,1]
    ];
    const result = comparePair(input);
    assert.isTrue(result);
  });

  it("2) should return correct order (lists of lists), true", () => {
    const input = [
      [[1],[2,3,4]],
      [[1],4]
    ];
    const result = comparePair(input);
    assert.isTrue(result);
  });

  it("3) should return wrong order (single value to list), false", () => {
    const input = [
      [9],
      [[8,7,6]]
    ];
    const result = comparePair(input);
    assert.isFalse(result);
  });

  it("4) should return correct order because left side ran out of items, true", () => {
    const input = [
      [[4,4],4,4],
      [[4,4],4,4,4]
    ];
    const result = comparePair(input);
    assert.isTrue(result);
  });

  it("5) should return wrong order because right side ran out of items, false", () => {
    const input = [
      [7,7,7,7],
      [7,7,7]
    ];
    const result = comparePair(input);
    assert.isFalse(result);
  });

  it("6) should return correct order because left side ran out of items, true", () => {
    const input = [
      [],
      [3]
    ];
    const result = comparePair(input);
    assert.isTrue(result);
  });

  it("7) should return wrong order because right side ran out of items, false", () => {
    const input = [
      [[[]]],
      [[]]
    ];
    const result = comparePair(input);
    assert.isFalse(result);
  });

  it("8) should return incorrect order (lists of lists), false", () => {
    const input = [
      [1,[2,[3,[4,[5,6,7]]]],8,9],
      [1,[2,[3,[4,[5,6,0]]]],8,9]
    ];
    const result = comparePair(input);
    assert.isFalse(result);
  });

  it("should return wrong order, false", () => {
    const input = [
      [1, 2],
      [1, 1]
    ];
    const result = comparePair(input);
    assert.isFalse(result);
  });

  it("should return wrong order (mixed), false", () => {
    const input = [
      [[12, 2]],
      [1]
    ];
    const result = comparePair(input);
    assert.isFalse(result);
  });

  it("should return sum of correct indexes 13", () => {
    const input =
`[1,1,3,1,1]
[1,1,5,1,1]

[[1],[2,3,4]]
[[1],4]

[9]
[[8,7,6]]

[[4,4],4,4]
[[4,4],4,4,4]

[7,7,7,7]
[7,7,7]

[]
[3]

[[[]]]
[[]]

[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]`;
    const result = sumOfIndexesForCorrectPairs(input);
    assert.equal(result, 13);
  });

});
