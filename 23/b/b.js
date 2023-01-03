import { move, parseGrid } from "../a/a.js";

export function getNrOfMoves(inputString) {
  console.time("getNrOfMoves");
  const grid = parseGrid(inputString);
  let nrOfMoves = 0;
  let moved;
  do {
    moved = move(grid, nrOfMoves);
    nrOfMoves++;
  } while(moved);
  console.timeEnd("getNrOfMoves");
  
  return nrOfMoves;
}