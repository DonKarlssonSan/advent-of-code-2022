import { assert } from "chai";
import { getPrioritySum, getCommonItem, getPriority } from "./a.js";

describe("03-a Rucksack Reorganization", () => {
  it("should return 157", () => {
    const input = 
`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
    const result = getPrioritySum(input);
    assert.equal(result, 157);
  });

  it("should return common item 'p'", () => {
    const input = "vJrwpWtwJgWrhcsFMMfFFhFp";
    const result = getCommonItem(input);
    assert.equal(result, "p");
  });
  it("should return common item 'L'", () => {
    const input = "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL";
    const result = getCommonItem(input);
    assert.equal(result, "L");
  });

  it("should return common item 's'", () => {
    const input = "CrZsJsPPZsGzwwsLwLmpwMDw";
    const result = getCommonItem(input);
    assert.equal(result, "s");
  });

  it("should return priority 16 for p", () => {
    const result = getPriority("p");
    assert.equal(result, 16)
  });
  it("should return priority 38 for L", () => {
    const result = getPriority("L");
    assert.equal(result, 38)
  });
});
