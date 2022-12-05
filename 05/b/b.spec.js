import { assert } from "chai";
import { moveAndGetTopCrates } from "../a/supply-stacks.js";

describe("05-b Supply Stacks, CrateMover 9001", () => {
  it("should rearrange and return top crates MCD when using model 9001", () => {
    const input = 
`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
    const craneModel = "CrateMover 9001";
    const result = moveAndGetTopCrates(input, craneModel);
    assert.equal(result, 'MCD');
  });
});
