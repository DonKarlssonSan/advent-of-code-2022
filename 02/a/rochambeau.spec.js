import { assert } from "chai";
import { getTotalScore } from "./rochambeau.js";

describe("02-a Rochambeau", () => {
  it("should return 15", () => {
    const input =
`A Y
B X
C Z`;
    const result = getTotalScore(input);
    assert.equal(result, 15);
  });

  it("should return 7, because rock beats scissors", () => {
    const input = `C X`;
    const result = getTotalScore(input);
    assert.equal(result, 7);
  });
});
