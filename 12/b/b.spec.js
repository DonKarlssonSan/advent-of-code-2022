import { assert } from "chai";
import { parseGrid } from "../a/a.js";
import { getSteps, getStartPoints } from "./b.js";

describe("12-b Hill Climbing Algorithm", () => {
  const input = 
`aabqponm
abcryxxl
accszzxk
acctuvwj
abdefghi`;

  it("should return 29 steps", () => {
    const start = "a";
    const end = { x: 5, y: 2 };
    const result = getSteps(input, start, end);
    assert.equal(result, 29);
  });

  it("should return all start points", () => {
    const grid = parseGrid(input);
    const result = getStartPoints(grid, "a");
    assert.equal(result.length, 6);
  });
});
