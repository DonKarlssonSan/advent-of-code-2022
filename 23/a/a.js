
export function getNrOfEmptyTilesAfter(inputString, iterations) {
  const grid = parseGrid(inputString);
  for(let i = 0; i < iterations; i++) {
    move(grid, i);
    drawGrid(grid);
  }
  return getNrOfGroundTiles(grid);
}

function drawGrid(grid) {
  for(let y = 0; y < grid[0].length; y++) {
    let row = "";
    for(let x = 0; x < grid.length; x++) {
      row += grid[x][y] ? "#" : ".";
    }
    console.log(row);
  }
  console.log("-------------------------");
}

export function getNrOfGroundTiles(grid) {
  let minX = grid.length-1;
  let maxX = 0;
  let minY = grid[0].length-1;
  let maxY = 0;

  for(let x = 0; x < grid.length; x++) {
    for(let y = 0; y < grid[x].length; y++) {
      if(grid[x][y]) {
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
  console.log(minX, maxX, minY, maxY);
  console.log(grid.length, grid[0].length);

  let count = 0;
  for(let x = minX; x <= maxX; x++) {
    for(let y = minY; y <= maxY; y++) {
      if(!grid[x][y]) {
        count++;
      }
    }
  }
  return count;
}

export function parseGrid(inputString) {
  const rows = inputString.split("\n");
  let grid = new Array(rows[0].length);
  for(let col = 0; col < rows[0].length; col++) {
    grid[col] = new Array(rows.length);
    for(let row = 0; row < rows.length; row++) {
      const val = rows[row][col] === "#";
      grid[col][row] = val;
    }
  }
  return grid;
}

export function move(grid, i) {
  let proposals = {};
  let proposalsToDelete = [];
  for(let x = 0; x < grid.length; x++) {
    for(let y = 0; y < grid[x].length; y++) {
      if(grid[x][y] && hasAnyNeighbors(grid, x, y)) {
        const proposal = getProposal(grid, x, y, i);
        if(proposal) {
          const key = `${proposal.to.x}:${proposal.to.y}`;
          if(proposals[key]) {
            proposalsToDelete.push(key);
          } else {
            proposals[key] = proposal;
          }
        }
      }
    }
  }
  for(const proposal of proposalsToDelete) {
    delete proposals[proposal];
  }
  for(const key in proposals) {
    const p = proposals[key];
    grid[p.from.x][p.from.y] = false;
    grid[p.to.x][p.to.y] = true;
  }
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
    if(!grid?.[x0-1]?.[y] && !grid?.[x0]?.[y] && !grid?.[x0+1]?.[y] && y >= 0) return [x0, y];
  } else if(direction === "S") {
    const y = y0 + 1;
    if(!grid?.[x0-1]?.[y] && !grid?.[x0]?.[y] && !grid?.[x0+1]?.[y] && y < grid[x0].length) return [x0, y];
  } else if(direction === "W") {
    const x = x0 - 1;
    if(!grid?.[x]?.[y0-1] && !grid?.[x]?.[y0] && !grid?.[x]?.[y0+1] && x >= 0) return [x, y0];
  } else if(direction === "E") {
    const x = x0 + 1;
    if(!grid?.[x]?.[y0-1] && !grid?.[x]?.[y0] && !grid?.[x]?.[y0+1] && x < grid.length) return [x, y0];
  }
  return;
}

function hasAnyNeighbors(grid, x0, y0) {
  for(let x = x0 - 1; x <= x0 + 1; x++) {
    for(let y = y0 - 1; y <= y0 + 1; y++) {
      if(grid?.[x]?.[y] && !(x === x0 && y === y0)) {
        return true;
      }
    }
  }
  return false;
}