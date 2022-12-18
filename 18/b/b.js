const dim = 40;

export function getSurfaceArea(inputString) {
  const { scan, coordinates } = parseScan(inputString);
  let area = 0;
  for (const coordinate of coordinates) {
    const [x, y, z] = coordinate;
    // above
    if (shouldCount(scan, x, y + 1, z)) {
      area++;
    }
    // under
    if (shouldCount(scan, x, y - 1, z)) {
      area++;
    }
    // left
    if (shouldCount(scan, x - 1, y, z)) {
      area++;
    }
    // right
    if (shouldCount(scan, x + 1, y, z)) {
      area++;
    }
    // in front
    if (shouldCount(scan, x, y, z + 1)) {
      area++;
    }
    // behind
    if (shouldCount(scan, x, y, z - 1)) {
      area++;
    }
  }
  return area;
}

export function parseScan(inputString) {
  let scan = [];
  for (let x = 0; x < dim; x++) {
    scan[x] = new Array(dim);
    for (let y = 0; y < dim; y++) {
      scan[x][y] = new Array(dim);
      for (let z = 0; z < dim; z++) {
        scan[x][y][z] = false;
      }
    }
  }
  const rows = inputString.split("\n");
  let coordinates = [];
  for (const row of rows) {
    const coordinate = row.split(",").map(x => parseInt(x));
    coordinates.push(coordinate);
  }

  for (const coordinate of coordinates) {
    const [x, y, z] = coordinate;
    scan[x][y][z] = true;
  }
  return { scan, coordinates };
}

function shouldCount(scan, x, y, z) {
  if(!canBeReachedByWater(scan, x, y, z)) {
    return false;
  }
  return scan?.[x]?.[y]?.[z] !== true;
}

export function canBeReachedByWater(scan, x, y, z) {
  let val = reachesAbove(scan, x, y, z) || 
  reachesBelow(scan, x, y, z) ||
  reachesLeft(scan, x, y, z) ||
  reachesRight(scan, x, y, z) ||
  reachesBehind(scan, x, y, z) ||
  reachesFront(scan, x, y, z);
  return val;
}

export function reachesAbove(scan, x0, y0, z0) {
  let above = [];
  for(let y = 0; y < y0; y++) {
    above.push(scan[x0]?.[y]?.[z0]);
  }
  return !above.some(x => x === true);
}

export function reachesBelow(scan, x0, y0, z0) {
  let below = [];
  for(let y = y0 + 1; y < dim; y++) {
    below.push(scan[x0]?.[y]?.[z0]);
  }
  return !below.some(x => x === true);
}

export function reachesLeft(scan, x0, y0, z0) {
  let left = [];
  for(let x = 0; x < x0; x++) {
    left.push(scan[x]?.[y0]?.[z0]);
  }
  return !left.some(x => x === true);
}

export function reachesRight(scan, x0, y0, z0) {
  let right = [];
  for(let x = x0 + 1; x < dim; x++) {
    right.push(scan[x]?.[y0]?.[z0]);
  }
  return !right.some(x => x === true);
}

export function reachesBehind(scan, x0, y0, z0) {
  let behind = [];
  for(let z = 0; z < z0; z++) {
    behind.push(scan[x0]?.[y0]?.[z]);
  }
  return !behind.some(x => x === true);
}

export function reachesFront(scan, x0, y0, z0) {
  let front = [];
  for(let z = z0 + 1; z < dim; z++) {
    front.push(scan[x0]?.[y0]?.[z]);
  }
  return !front.some(x => x === true);
}
