import { assert } from "chai";
import { a } from "./a.js";

describe("0x-a ?", () => {
  it("should return 1", () => {
    const input = `A Y`;
    const result = a(input);
    assert.equal(result, 1);
  });
});
