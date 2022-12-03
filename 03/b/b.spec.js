import { assert } from "chai";
import { getPrioritySum, getCommonItem } from "./b.js";

describe("03-b Rucksack Reorganization", () => {
  it("should return badge priorities sum of 70", () => {
    const input = 
`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
    const result = getPrioritySum(input);
    assert.equal(result, 70);
  });

  it("should return common item r", () => {
    const input = [
      "vJrwpWtwJgWrhcsFMMfFFhFp",
      "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
      "PmmdzqPrVvPwwTWBwg"];
    const result = getCommonItem(input);
    assert.equal(result, "r");
  });
});
