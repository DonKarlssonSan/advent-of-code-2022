import { assert } from "chai";
import { getTotalScore2 } from "./rochambeau.js";

describe("02-b Rochambeau", () => {
  it("should return 12", () => {
    const input = 
`A Y
B X
C Z`;
    const result = getTotalScore2(input);
    assert.equal(result, 12);
  });
});
