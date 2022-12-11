import { assert } from "chai";
import { b } from "./b.js";

describe("11-b Monkey in the Middle", () => {
  it("should return 1", () => {
    const input = `A Y`;
    const result = b(input);
    assert.equal(result, 1);
  });
});
