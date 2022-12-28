export function getPixels(inputString) {
  const instructions = inputString.split("\n");
  let x = 1;
  let cycle = 1;
  let pixels = [];
  let nextOp = 1;
  let instructionsIndex = 0;
  while(true) {
    const pos = (cycle - 1) % 40;
    if(x === pos || x - 1 === pos || x + 1 === pos) {
      pixels.push("#");
    } else {
      pixels.push(".")
    }
    if(nextOp === 0) {
      const instruction = instructions[instructionsIndex];
      const [command, value] = instruction.split(" ");
      if(command === "addx") {
        x += parseInt(value);
        nextOp = 2;
      } else if(command === "noop") {
        nextOp = 1;
      }
      instructionsIndex++;
    }
    nextOp--;
    cycle += 1;
    if(instructionsIndex === instructions.length - 1) {
      break;
    }
  }
  let output = '';
  for(let i = 0; i < pixels.length; i++) {
    output += pixels[i];
    if((i+1) % 40 === 0) {
      output += "\n";
    }
  }
  if(output[output.length-1] === "\n") {
    output = output.substring(0, output.length-1);
  }
  //console.log(output);
  return output;
}
