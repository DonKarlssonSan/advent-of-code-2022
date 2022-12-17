import { assert } from "chai";
import { getHeightAfter } from "./a.js";
const jetPattern = ">>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>";
describe("17-a Pyroclastic Flow", () => {
  it("should return height 3068", () => {
    const result = getHeightAfter(jetPattern, 2022);
    assert.equal(result, 3068);
  });
});
