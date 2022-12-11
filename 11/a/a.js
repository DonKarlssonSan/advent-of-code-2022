export class Monkey {
  constructor(items, operation, divisible, trueDestination, falseDestination) {
    this.items = items;
    this.operation = operation;
    this.divisible = divisible;
    this.trueDestination = trueDestination;
    this.falseDestination = falseDestination;
    this.inspections = 0;
  }

  takeTurnAndGetItems() {
    let toThrow = this.items.splice(0);
    return toThrow.map(old => {
      this.inspections++;
      const newValue = eval(this.operation);
      const worryLevel = Math.floor(newValue / 3);
      const recipient = worryLevel % this.divisible === 0 ? this.trueDestination : this.falseDestination;
      return {
        recipient: recipient,
        item: worryLevel
      }
    });
  }
}
export function getMonkeyBusiness(inputString, iterations = 20) {
  const input = inputString.split("\n");

  const monkeys = parseMonkeys(input);
  for(let i = 0; i < iterations; i++) {
    for(const monkey of monkeys) {
      const throwAways = monkey.takeTurnAndGetItems();
      for(const throwAway of throwAways) {
        monkeys[throwAway.recipient].items.push(throwAway.item);
      }
    }
  }
  monkeys.sort((a, b) => b.inspections - a.inspections);
  const monkeyBusiness = monkeys[0].inspections * monkeys[1].inspections;
  return monkeyBusiness;
}

export function parseMonkeys(rows) {
  let monkeys = [];
  for(let rowIndex = 0; rowIndex < rows.length; rowIndex += 7) {
    const items = rows[rowIndex+1].substring(16).split(", ").map(number => parseInt(number, 10));
    const operation = rows[rowIndex+2].substring(17);
    const divisible = parseInt(rows[rowIndex+3].substring(19), 10);
    const trueDestination = parseInt(rows[rowIndex+4].substring(27), 10);
    const falseDestination = parseInt(rows[rowIndex+5].substring(28), 10);
    const monkey = new Monkey(items, operation, divisible, trueDestination, falseDestination);
    monkeys.push(monkey);
  }
  return monkeys;
}