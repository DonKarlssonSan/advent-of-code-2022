import { assert } from "chai";
import { b } from "./b.js";

describe("02-b ", () => {
  it("should return 12", () => {
    const input = 
`A Y
B X
C Z`;
    const result = b(input);
    assert.equal(result, 12);
  });
});
