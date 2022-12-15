import { assert } from "chai";
import { run, parseGrid, getNrOfSandGrains } from "./a.js";

describe("14-a Regolith Reservoir", () => {
  it("should return 24 sand grains", () => {
    const input = 
`498,4 -> 498,6 -> 496,6
503,4 -> 502,4 -> 502,9 -> 494,9`;
    const result = run(input);
    assert.equal(result, 24);
  });
  
  it("should return build grid", () => {
    const input = 
`498,4 -> 498,6 -> 496,6
503,4 -> 502,4 -> 502,9 -> 494,9`;
    const result = parseGrid(input);
    assert.isTrue(result.has("498,4"));
    assert.isTrue(result.has("498,5"));
    assert.isTrue(result.has("503,4"));
    assert.isTrue(result.has("502,5"));
  });

  it("should return 1 sand grains", () => {
    const grid = new Set();
    grid.add("499,3");
    grid.add("500,3");
    grid.add("501,3");
    const result = getNrOfSandGrains(grid);
    assert.equal(result, 1);
  });

});
