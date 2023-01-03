import { assert } from "chai";
import { getMonkeyBusiness } from "./b.js";

const input = 
`Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`;

describe("11-b Monkey in the Middle", () => {
  it("should return monkey business 24 after 1 rounds", () => {
    const result = getMonkeyBusiness(input, 1);
    assert.equal(result, 24);
  });

  it("should return monkey business 10197 after 20 rounds", () => {
    const result = getMonkeyBusiness(input, 20);
    assert.equal(result, 10197);
  });

  it("should return monkey business 27019168 after 1000 rounds", () => {
    const result = getMonkeyBusiness(input, 1000);
    assert.equal(result, 27019168);
  });

  it.skip("should return monkey business 2713310158 after 10000 rounds", () => {
    const result = getMonkeyBusiness(input, 10000);
    assert.equal(result, 2713310158);
  });
});
