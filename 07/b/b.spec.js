import { assert } from "chai";
import { b } from "./b.js";

describe("07-b No Space Left On Device", () => {
  it("should return 1", () => {
    const input = `A Y`;
    const result = b(input);
    assert.equal(result, 1);
  });
});
