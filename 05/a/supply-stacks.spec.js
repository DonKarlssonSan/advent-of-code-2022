import { assert } from "chai";
import { moveAndGetTopCrates, getCrates, getTopCrates } from "./supply-stacks.js";

describe("05-a Supply Stacks, CrateMover 9000", () => {
  it("should rearrange and return top crates CMZ", () => {
    const input = 
`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
    const result = moveAndGetTopCrates(input);
    assert.equal(result, 'CMZ');
  });

  it("should return crates A B C", () => {
    const input = ["[A] [B] [C]"];    
    const result = getCrates(input);
    assert.equal(result.length, 3, result);
    const expectedOutput = [["A"], ["B"], ["C"]];
    assert.deepEqual(result, expectedOutput);
  });

  it("should return crates A B C D", () => {
    const input = [
      "        [D]",
      "[A] [B] [C]"
    ];    
    const result = getCrates(input);
    assert.equal(result.length, 3, result);
    const expectedOutput = [["A"], ["B"], ["C", "D"]];
    assert.deepEqual(result, expectedOutput);
  })

  it("should return the top crates ABD", () => {
    const crateStacks = [["A"], ["B"], ["C", "D"]];
    const result = getTopCrates(crateStacks);
    assert.equal(result, "ABD");
  });
});
