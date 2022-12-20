export function getSteps(inputString, start, end) {
  const grid = parseGrid(inputString);
  const steps = breadthFirst(grid, grid[start.x][start.y], grid[end.x][end.y]);
  return steps;
}

export function breadthFirst(grid, start, end) {
  let visited = new Set([start]);

  const queue = [[start, 0]];
  let current;
  let dist;
  while(queue.length > 0) {
    [current, dist] = queue.shift();
    if(current === end) return dist;
    //console.log(current, String.fromCharCode(current.value));
    for(let neighbor of getNeighbors(grid, current)) {
      if(!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  console.log(`Giving up at ${current}, ${dist}`);
  return Infinity;
}

export function parseGrid(inputString) {
  const rows = inputString.split("\n");
  let grid = new Array(rows[0].length);
  for(let col = 0; col < rows[0].length; col++) {
    grid[col] = new Array(rows.length);
    for(let row = 0; row < rows.length; row++) {
      grid[col][row] = {
        x: col,
        y: row,
        value: rows[row].charCodeAt(col)
      };
    }
  }
  return grid;
}

export function getNeighbors(grid, point) {
  let neighbors = [];
  const current = grid[point.x][point.y].value;
  // left
  if(point.x > 0 && grid[point.x-1][point.y].value <= current+1) {
    neighbors.push(grid[point.x-1][point.y]);
  } 
  // right
  if(point.x < grid.length-1 && grid[point.x+1][point.y].value <= current+1) {
    neighbors.push(grid[point.x+1][point.y]);
  }
  // up
  if(point.y > 0 && grid[point.x][point.y-1].value <= current+1) {
    neighbors.push(grid[point.x][point.y-1]);
  }
  // down
  if(point.y < grid[point.x].length-1 && grid[point.x][point.y+1].value <= current+1) {
    neighbors.push(grid[point.x][point.y+1]);
  }
  return neighbors;
}
