const dim = 22;

export function getSurfaceArea(inputString) {
  const coordinates = parseCoordinates(inputString);
  const scan = parseScan(coordinates);
  let area = getArea(coordinates, scan);
  return area;
}

function getArea(coordinates, scan) {
  let area = 0;
  for (const coordinate of coordinates) {
    const [x, y, z] = coordinate;

    // above
    if (scan?.[x]?.[y + 1]?.[z] !== true) {
      area++;
    }
    // under
    if (scan?.[x]?.[y - 1]?.[z] !== true) {
      area++;
    }
    // left
    if (scan?.[x - 1]?.[y]?.[z] !== true) {
      area++;
    }
    // right
    if (scan?.[x + 1]?.[y]?.[z] !== true) {
      area++;
    }
    // in front
    if (scan?.[x]?.[y]?.[z + 1] !== true) {
      area++;
    }
    // behind
    if (scan?.[x]?.[y]?.[z - 1] !== true) {
      area++;
    }
  }
  return area;
}

function parseScan(coordinates) {
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
  for (const coordinate of coordinates) {
    const [x, y, z] = coordinate;
    scan[x][y][z] = true;
  }

  return scan;
}

function parseCoordinates(inputString) {
  const rows = inputString.split("\n");
  let coordinates = [];
  for (const row of rows) {
    const coordinate = row.split(",").map(x => parseInt(x));
    coordinates.push(coordinate);
  }

  return coordinates;
}