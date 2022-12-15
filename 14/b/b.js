export function run(input) {
  const grid = parseGrid(input);
  const no = getNrOfSandGrains(grid);
  return no;
}

export function parseGrid(inputString) {
  const lines = inputString.split("\n");
  let grid = new Set();
  for(const line of lines) {
    const points = line.split(" -> ");
    for(let i = 0; i < points.length-1; i++) {
      const start = points[i];
      const end = points[i+1];
      const [xStart, yStart] = start.split(",").map(n => parseInt(n, 10));
      const [xEnd, yEnd] = end.split(",").map(n => parseInt(n, 10));
      const xDiff = (xEnd - xStart);
      const yDiff = (yEnd - yStart);
      const steps = Math.max(Math.abs(xDiff), Math.abs(yDiff));
      for(let j = 0; j < steps; j++) {
        const x = xStart + xDiff / steps * j;
        const y = yStart + yDiff / steps * j;
        grid.add(`${x},${y}`);
      }
      grid.add(end);
    }
  }

  const lowestPoint = Math.max(...[...grid.values()].map(point => point.split(",")[1]));
  for(let i = -1000; i<=1000;i++) {
    const floor = `${i},${lowestPoint+2}`;
    grid.add(floor);
  }

  return grid;
}

export function getNrOfSandGrains(grid) {
  let nrOfGrainsReleased = 0;
  let keepRunning = true;
  const lowestPoint = Math.max(...[...grid.values()].map(point => point.split(",")[1]));

  do {
    nrOfGrainsReleased++;
    let x = 500;
    let y = 0;
    let canMove = true;
    do {
      const below = grid.has(`${x},${y+1}`);
      if(below) {
        const belowLeft = grid.has(`${x-1},${y+1}`);
        const belowRight = grid.has(`${x+1},${y+1}`);
        if(!belowLeft) {
          x--;
          y++;
        } else if(!belowRight) {
          x++;
          y++;
        } else {
          canMove = false;
          grid.add(`${x},${y}`);
        }
      } else {
        y++;
      }
      keepRunning = !grid.has("500,0");
    } while(canMove && keepRunning);
  } while(keepRunning);

  //drawGrid(grid);
  return nrOfGrainsReleased;
}

function drawGrid(grid) {
  let output = '';
  for(let y = 0; y < 15; y++) {
    for(let x = 0; x < 40; x++) {
      const x1 = x + 480;
      const has = grid.has(`${x1},${y}`);
      if(has) {
        output += "#";
      } else {
        output += ".";
      }
    }
    output += "\n";
  }
  console.log(output);
}