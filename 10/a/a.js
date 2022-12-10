export function getTotalSignalStrength(inputString) {
  const instructions = inputString.split("\n");
  let x = 1;
  let signalStrength = 0;
  let cycle = 1;
  for(const instruction of instructions) {
    const [command, value] = instruction.split(" ");
    const oldX = x;
    if(command === "addx") {
      x += parseInt(value);
      cycle += 2;
    } else if(command === "noop") {
      cycle += 1;
    }
    const period = cycle - 20;
    if(period % 40 === 0) {
      signalStrength += x * cycle;
    } else if(command === "addx" && (period - 1) % 40 === 0) {
      signalStrength += oldX * (cycle-1);
    }
  }
  return signalStrength;
}
