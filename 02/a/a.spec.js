import { assert } from "chai";
import { a } from "./a.js";

describe("02-a ", () => {
  it("should return 15", () => {
    const input =
`A Y
B X
C Z`;
    const result = a(input);
    assert.equal(result, 15);
  });

  it("should return 7, because rock beats scissors", () => {
    const input = `C X`;
    const result = a(input);
    assert.equal(result, 7);
  });
});
