import { parseGrid, breadthFirst } from "../a/a.js";

export function getSteps(inputString, start, end) {
  const grid = parseGrid(inputString);
  const startPoints = getStartPoints(grid, start);
  let minSteps = Infinity;
  for(const startPoint of startPoints) {
    const steps = breadthFirst(grid, startPoint, grid[end.x][end.y]);
    if(steps < minSteps) {
      minSteps = steps;
    }
  }
  return minSteps;
}

export function getStartPoints(grid, start) {
  let startPoints = [];
  for(let col = 0; col < grid[0].length; col++) {
    for(let row = 0; row < grid[col].length; row++) {
      if(grid[col][row].value === start.charCodeAt(0)) {
        startPoints.push(grid[col][row]);
      }
    }
  }
  return startPoints;
}