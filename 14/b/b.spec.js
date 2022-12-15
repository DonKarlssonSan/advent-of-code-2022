import { assert } from "chai";
import { run } from "./b.js";

describe("14-a Regolith Reservoir", () => {
  it("should return 93 sand grains", () => {
    const input = 
`498,4 -> 498,6 -> 496,6
503,4 -> 502,4 -> 502,9 -> 494,9`;
    const result = run(input);
    assert.equal(result, 93);
  });
});
