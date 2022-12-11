import { assert } from "chai";
import { parseMonkeys, Monkey, getMonkeyBusiness } from "./a.js";

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

describe("11-a Monkey in the Middle", () => {
  it("should return 4 monkeys", () => {
    const rows = input.split("\n");
    const result = parseMonkeys(rows);
    assert.equal(result.length, 4);
    assert.deepEqual(result[0].items, [79, 98]);
    assert.equal(result[0].operation, "old * 19");
    assert.equal(result[0].divisible, 23);
    assert.equal(result[0].trueDestination, 2, "trueDestination");
    assert.equal(result[0].falseDestination, 3, "falseDestination");
  });

  it("should return monkey business 10605", () => {
    const result = getMonkeyBusiness(input);
    assert.equal(result, 10605);
  });

  it("a monkey should not do anything if it has no items", () => {
    const monkey = new Monkey([], "old + 1", 42, 1, 2);
    const result = monkey.takeTurnAndGetItems();
    assert.equal(result.length, 0);
    assert.equal(monkey.inspections, 0);
  });

  it("Monkey 0 should return thrown items 500 and 620", () => {
    let items = [79, 98];
    const monkey = new Monkey(items, "old * 19", 23, 2, 3);
    const result = monkey.takeTurnAndGetItems();
    const expectedItems = [
      { recipient: 3, item: 500},
      { recipient: 3, item: 620}
    ];
    assert.deepEqual(result, expectedItems);
    assert.equal(monkey.items, 0);
  });

  it("Monkey 1 should return thrown items 20, 23, 27, 26", () => {
    let items = [54, 65, 75, 74];
    const monkey = new Monkey(items, "old + 6", 19, 2, 0);
    const result = monkey.takeTurnAndGetItems();
    const expectedItems = [
      { recipient: 0, item: 20},
      { recipient: 0, item: 23},
      { recipient: 0, item: 27},
      { recipient: 0, item: 26},
    ];
    assert.deepEqual(result, expectedItems);
    assert.equal(monkey.items.length, 0);
    assert.equal(monkey.inspections, 4, "inspections");
  });
});
