import { assert } from "chai";
import { impossiblePositionsForRow, parseGrid, getValue } from "./a.js";

const input = 
`Sensor at x=2, y=18: closest beacon is at x=-2, y=15
Sensor at x=9, y=16: closest beacon is at x=10, y=16
Sensor at x=13, y=2: closest beacon is at x=15, y=3
Sensor at x=12, y=14: closest beacon is at x=10, y=16
Sensor at x=10, y=20: closest beacon is at x=10, y=16
Sensor at x=14, y=17: closest beacon is at x=10, y=16
Sensor at x=8, y=7: closest beacon is at x=2, y=10
Sensor at x=2, y=0: closest beacon is at x=2, y=10
Sensor at x=0, y=11: closest beacon is at x=2, y=10
Sensor at x=20, y=14: closest beacon is at x=25, y=17
Sensor at x=17, y=20: closest beacon is at x=21, y=22
Sensor at x=16, y=7: closest beacon is at x=15, y=3
Sensor at x=14, y=3: closest beacon is at x=15, y=3
Sensor at x=20, y=1: closest beacon is at x=15, y=3`;

describe("15-a Beacon Exclusion Zone", () => {
  it.skip("should return 26 impossible positions", () => {
    const result = impossiblePositionsForRow(input, 10);
    assert.equal(result, 26);
  });

  it("should parse grid", () => {
    const result = parseGrid(input);
    assert.equal(result.get("2,18"), 7);
    assert.equal(result.get("9,16"), 1);
    assert.equal(result.get("-2,15"), 0);

    assert.equal(result.get("20,1"), 7);
    assert.equal(result.get("15,3"), 0);
  });

  
  it("should get correct value", () => {
    const input = "Sensor at x=2, y=18";
    const x = getValue(input, "x=");
    assert.equal(x, 2);
    const y = getValue(input, "y=");
    assert.equal(y, 18);
  });
});
