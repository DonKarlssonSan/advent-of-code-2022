import { assert, expect } from "chai";
import { getSteps, getNeighbors, parseGrid } from "./a.js";

describe("12-a Hill Climbing Algorithm", () => {
  const input = 
`aabqponm
abcryxxl
accszzxk
acctuvwj
abdefghi`;
    it("should return 31 steps", () => {
    const result = getSteps(input, { x: 0, y: 0 }, { x: 5, y: 2 });
    assert.equal(result, 31);
  });

  it("should only return possible goto neighbors", () => {
    const grid = [
      [ { x: 0, y: 0, value: 1}, { x: 0, y: 0, value: 1 }, { x: 0, y: 0, value: 1 }],
      [ { x: 1, y: 1, value: 1}, { x: 1, y: 1, value: 2 }, { x: 1, y: 1, value: 3 }],
      [ { x: 2, y: 2, value: 1}, { x: 2, y: 2, value: 4 }, { x: 2, y: 2, value: 3 }]
    ];
    const result1 = getNeighbors(grid, { x: 0, y: 0});
    assert.deepEqual(result1, [grid[1][0], grid[0][1]]); // right and below

    const result2 = getNeighbors(grid, { x: 1, y: 1});
    assert.deepEqual(result2, [grid[0][1], grid[1][0], grid[1][2]]); // right, below, under
  });

  it("should parse grid", ()=> {
    const grid = parseGrid(input);
    assert.equal(grid[0][0].value, "a".charCodeAt(0));
    assert.equal(grid[3][3].value, "t".charCodeAt(0));
    assert.equal(grid[4][2].value, "z".charCodeAt(0));
  });

  it("should parse grid and return correct neighbors", ()=> {
    const grid = parseGrid(input);
    const result = getNeighbors(grid, { x: 3, y: 1 });
    assert.includeDeepMembers(result, [grid[3][0]]); // below
    assert.includeDeepMembers(result, [grid[3][2]]); // above
  });
});
