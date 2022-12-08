import { assert } from "chai";
import { getHighestScenicScore, getScore, getViewingDistance } from "./b.js";

describe("08-b Treetop Tree House", () => {
  const trees = [
    [3, 0, 3, 7, 3],
    [2, 5, 5, 1, 2],
    [6, 5, 3, 3, 2],
    [3, 3, 5, 4, 9],
    [3, 5, 3, 9, 0]
  ];

  it("should return 8 for highest scenic score", () => {
    const input =
`30373
25512
65332
33549
35390`;
    const result = getHighestScenicScore(input);
    assert.equal(result, 8);
  });

  it("should return a score of 8", () => {
    const result = getScore(trees, 3, 2);
    assert.equal(result, 8)
  });

  it("should return a viewing distance of 2", () => {
    const treeList = [3, 5, 4];
    const currentHeight = 5;
    const result = getViewingDistance(treeList, currentHeight);
    assert.equal(result, 2);
  });

  it("should return a viewing distance of 1", () => {
    const treeList = [3];
    const currentHeight = 5;
    const result = getViewingDistance(treeList, currentHeight);
    assert.equal(result, 1);
  });

  it("should return a viewing distance of 1", () => {
    const treeList = [];
    const currentHeight = 5;
    const result = getViewingDistance(treeList, currentHeight);
    assert.equal(result, 0);
  });
});
