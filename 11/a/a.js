export class Monkey {
  constructor(items, operation, divisible, trueDestination, falseDestination) {
    this.items = items;
    this.operation = operation;
    this.divisible = divisible;
    this.trueDestination = trueDestination;
    this.falseDestination = falseDestination;
  }
  takeTurnAndGetItems() {
    let toThrow = this.items.splice(0);
    return toThrow.map(old => {
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
export function a(inputString) {
  const input = inputString.split("\n");

  return 1;
}