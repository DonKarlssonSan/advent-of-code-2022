import { assert } from "chai";
import { findStartOfMessage } from "./a.js";

describe("06-a Tuning Trouble", () => {
  it("should return 7 jpqm", () => {
    const input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;
    const result = findStartOfMessage(input);
    assert.equal(result, 7);
  });
  
  it("should return 5", () => {
    const input = `bvwbjplbgvbhsrlpgdmjqwftvncz`;
    const result = findStartOfMessage(input);
    assert.equal(result, 5);
  });

  it("should return 6", () => {
    const input = `nppdvjthqldpwncqszvftbrmjlhg`;
    const result = findStartOfMessage(input);
    assert.equal(result, 6);
  });

  it("should return 10", () => {
    const input = `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`;
    const result = findStartOfMessage(input);
    assert.equal(result, 10);
  });

  it("should return 11", () => {
    const input = `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`;
    const result = findStartOfMessage(input);
    assert.equal(result, 11);
  });
});
