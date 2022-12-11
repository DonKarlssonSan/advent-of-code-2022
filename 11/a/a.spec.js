import { assert } from "chai";
import { Monkey, a } from "./a.js";

describe("11-a Monkey in the Middle", () => {
  it("should return 1", () => {
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
    const result = a(input);
    assert.equal(result, 1);
  });

  it("should return thrown items 500 and 620", () => {
    let items = [79, 98];
    const monkey = new Monkey(items, "old * 19", 23, 2, 3);
    const result = monkey.takeTurnAndGetItems();
    const expectedItems = [
      { recipient: 3, item: 500},
      { recipient: 3, item: 620}
    ];
    assert.deepEqual(result, expectedItems);
    assert.equal(0, monkey.items);
  });
});
