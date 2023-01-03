
export function getNrOfEmptyTilesAfter(inputString, iterations) {
  console.time("getNrOfEmptyTilesAfter");
  const grid = parseGrid(inputString);
  for(let i = 0; i < iterations; i++) {
    move(grid, i);
    //drawGrid(grid);
  }
  console.timeEnd("getNrOfEmptyTilesAfter");
  return getNrOfGroundTiles(grid);
}

function drawGrid(grid) {
  for(let y = -10; y < 80; y++) {
    let row = "";
    for(let x = -10; x < 80; x++) {
      row += grid.has(`${x}:${y}`) ? "#" : ".";
    }
    console.log(row);
  }
  console.log("-------------------------");
}

export function getNrOfGroundTiles(grid) {
  let m = 100;
  let minX = m;
  let maxX = -m;
  let minY = m;
  let maxY = -m;

  for(let x = -m; x < m; x++) {
    for(let y = -m; y < m; y++) {
      if(grid.has(`${x}:${y}`)) {
        if(x < minX) {
          minX = x;
        }
        if(x > maxX) {
          maxX = x;
        }
        if(y < minY) {
          minY = y;
        }
        if(y > maxY) {
          maxY = y;
        }
      }
    }
  }
  //console.log(minX, maxX, minY, maxY);

  let count = 0;
  for(let x = minX; x <= maxX; x++) {
    for(let y = minY; y <= maxY; y++) {
      if(!grid.has(`${x}:${y}`)) {
        count++;
      }
    }
  }
  return count;
}

export function parseGrid(inputString) {
  const rows = inputString.split("\n");
  let grid = new Set();
  for(let col = 0; col < rows[0].length; col++) {
    for(let row = 0; row < rows.length; row++) {
      if(rows[row][col] === "#") {
        const key = `${col}:${row}`;
        grid.add(key);
      }
    }
  }
  return grid;
}

export function move(grid, i) {
  let proposals = new Map();
  let proposalsToDelete = [];
  let m = 100;
  for(let x = -m; x < m; x++) {
    for(let y = -m; y < m; y++) {
      if(grid.has(`${x}:${y}`) && hasAnyNeighbors(grid, x, y)) {
        const proposal = getProposal(grid, x, y, i);
        if(proposal) {
          const key = `${proposal.to.x}:${proposal.to.y}`;
          if(proposals.has(key)) {
            proposalsToDelete.push(key);
          } else {
            proposals.set(key, proposal);
          }
        }
      }
    }
  }
  for(const proposal of proposalsToDelete) {
    proposals.delete(proposal);
  }
  let didMove = false;
  proposals.forEach(p => {
    didMove = true;
    grid.delete(`${p.from.x}:${p.from.y}`);
    grid.add(`${p.to.x}:${p.to.y}`);
  });

  return didMove;
}

function getProposal(grid, x, y, i) {
  const dirs = ["N", "S", "W", "E"];
  for(let d = 0; d < 4; d++) {
    const dir = dirs[(d+i) % 4];
    const newPos = getNewPosIfNoNeighbors(grid, x, y, dir);
    if(newPos) {
      return {
        from: {
          x, 
          y
        },
        to: {
          x: newPos[0],
          y: newPos[1]
        }
      };
    }
  }
  return;
}

function getNewPosIfNoNeighbors(grid, x0, y0, direction) {
  if(direction === "N") {
    const y = y0 - 1;
    if(!grid.has(`${x0-1}:${y}`) && !grid.has(`${x0}:${y}`) && !grid.has(`${x0+1}:${y}`)) return [x0, y];
  } else if(direction === "S") {
    const y = y0 + 1;
    if(!grid.has(`${x0-1}:${y}`) && !grid.has(`${x0}:${y}`) && !grid.has(`${x0+1}:${y}`)) return [x0, y];
  } else if(direction === "W") {
    const x = x0 - 1;
    if(!grid.has(`${x}:${y0-1}`) && !grid.has(`${x}:${y0}`) && !grid.has(`${x}:${y0+1}`)) return [x, y0];
  } else if(direction === "E") {
    const x = x0 + 1;
    if(!grid.has(`${x}:${y0-1}`) && !grid.has(`${x}:${y0}`) && !grid.has(`${x}:${y0+1}`)) return [x, y0];
  }
  return;
}

function hasAnyNeighbors(grid, x0, y0) {
  for(let x = x0 - 1; x <= x0 + 1; x++) {
    for(let y = y0 - 1; y <= y0 + 1; y++) {
      if(grid.has(`${x}:${y}`) && !(x === x0 && y === y0)) {
        return true;
      }
    }
  }
  return false;
}