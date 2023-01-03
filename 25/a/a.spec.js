import { assert } from "chai";
import { getSnafuSum, snafu2dec, dec2snafu } from "./a.js";

describe("25-a Full of Hot Air", () => {
const input = `1=-0-2
12111
2=0=
21
2=01
111
20012
112
1=-1=
1-12
12
1=
122`;
  it("should return snafu sum 2=-1=0", () => {
    const result = getSnafuSum(input);
    assert.equal(result, "2=-1=0");
  });

  it("should return 10 dec", () => {
    const result = snafu2dec("20");
    assert.equal(result, 10);
  });

  it("should return 3 cec", () => {
    const result = snafu2dec("1=");
    assert.equal(result, 3);
  });

  it("should return 1-0---0 (dec2snafu)", () => {
    const result = dec2snafu(12345);
    assert.equal(result, "1-0---0");
  });
});
