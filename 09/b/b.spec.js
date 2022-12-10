import { assert } from "chai";
import { positionsVisitedByLongTail } from "./b.js";

describe("09-b Rope Bridge - long rope", () => {
  it("should return 1 visited positions", () => {
    const input = 
`R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;
    const result = positionsVisitedByLongTail(input);
    assert.equal(result, 1);
  });

  it("should return 36 visited positions", () => {
    const input = 
`R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`;
    const result = positionsVisitedByLongTail(input);
    assert.equal(result, 36);
  });

});
