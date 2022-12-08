import { assert } from "chai";
import { a, getAllAbove, getAllBelow, getAllToTheLeft, getAllToTheRight } from "./a.js";

describe("08-a ?", () => {
  const trees = [
    [3, 0, 3, 7, 3],
    [2, 5, 5, 1, 2],
    [6, 5, 3, 3, 2],
    [3, 3, 5, 4, 9],
    [3, 5, 3, 9, 0]
  ];

  it("should return 21 visible trees", () => {
    const input =
`30373
25512
65332
33549
35390`;
    const result = a(input);
    assert.equal(result, 21);
  });
  
  it("should return all trees above", () => {
    const result = getAllAbove(trees, 3, 3);
    assert.deepEqual(result, [3, 1, 7]);
  });
  
  it("should return all trees below", () => {
    const result = getAllBelow(trees, 1, 1);
    assert.deepEqual(result, [5, 3, 5]);
  });

  it("should return all trees to the left", () => {
    const result = getAllToTheLeft(trees, 1, 3);
    assert.deepEqual(result, [5, 5, 2]);
  });

  it("should return all trees to the right", () => {
    const result = getAllToTheRight(trees, 0, 1);
    assert.deepEqual(result, [3, 7, 3]);
  });

});
