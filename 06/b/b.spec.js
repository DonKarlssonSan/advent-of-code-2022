import { assert } from "chai";
import { findStartOfMessage } from "../a/a.js";

describe("06-b Tuning Trouble", () => {
  const lengthOfSequence = 14;
  it("should return 19", () => {
    const input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;
    const result = findStartOfMessage(input, lengthOfSequence);
    assert.equal(result, 19);
  });
  
  it("should return 23", () => {
    const input = `bvwbjplbgvbhsrlpgdmjqwftvncz`;
    const result = findStartOfMessage(input, lengthOfSequence);
    assert.equal(result, 23);
  });

  it("should return 23", () => {
    const input = `nppdvjthqldpwncqszvftbrmjlhg`;
    const result = findStartOfMessage(input, lengthOfSequence);
    assert.equal(result, 23);
  });

  it("should return 29", () => {
    const input = `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`;
    const result = findStartOfMessage(input, lengthOfSequence);
    assert.equal(result, 29);
  });

  it("should return 26", () => {
    const input = `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`;
    const result = findStartOfMessage(input, lengthOfSequence);
    assert.equal(result, 26);
  });

});
