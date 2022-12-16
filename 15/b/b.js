import { parseGrid, getManhattanDistance } from "../a/a.js";

export function getTuningFrequency(inputString, xMax, yMax) {
  const grid = parseGrid(inputString);

  for(let x = 0; x <= xMax; x++) {
    for(let y = 0; y <= yMax; y++) {
      const currentPos = `${x},${y}`;
      if(grid.has(currentPos)) {
        continue;
      }
      let reachable = false;
      for(const [position, r] of grid.entries()) {
        const [sensorX, sensorY] = position.split(",").map(n => parseInt(n, 10));
        // if(sensorX === x && sensorY === y) {
        //   break;
        // }
        const distToSensor = getManhattanDistance(x, y, sensorX, sensorY);
        reachable = reachable || distToSensor <= r;
      }
      if(!reachable) {
        return x * 4000000 + y;
      }
    }
  }
  return 0;
}
