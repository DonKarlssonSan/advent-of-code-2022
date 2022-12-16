export function impossiblePositionsForRow(inputString, y) {
  let impossiblePositions = 0;
  const grid = parseGrid(inputString);

  for(let x = -10000000; x < 10000000; x++) {
    if(grid.has(`${x},${y}`)) {
      continue;
    }
    for(const [position, r] of grid.entries()) {
      const [sensorX, sensorY] = position.split(",").map(n => parseInt(n, 10));
      // if(sensorX === x && sensorY === y) {
      //   break;
      // }
      const distToSensor = getManhattanDistance(x, y, sensorX, sensorY);
      if(distToSensor <= r) {
        impossiblePositions++;
        break;
      }
    }
  }
  return impossiblePositions;
}

export function parseGrid(inputString) {
  const rows = inputString.split("\n");

  let grid = new Map();
  for(const row of rows) {
    const [sensor, beacon] = row.split(": ");
    const sensorX = getValue(sensor, "x=", ",");
    const sensorY = getValue(sensor, "y=");

    const beaconX = getValue(beacon, "x=", ",");
    const beaconY = getValue(beacon, "y=");
    const dist = getManhattanDistance(sensorX, sensorY, beaconX, beaconY);
    grid.set(`${sensorX},${sensorY}`, dist);
    grid.set(`${beaconX},${beaconY}`, 0);
  }

  return grid;
}

export function getManhattanDistance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

export function getValue(str, prefix, suffix) {
  const start = str.indexOf(prefix) + prefix.length;
  const end = suffix ? str.indexOf(suffix) : undefined;
  const value = str.substring(start, end);
  return parseInt(value, 10);
}