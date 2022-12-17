/*

shapes

####

.#.
###
.#.

..#
..#
###

#
#
#
#

##
##

*/

const shapes = [
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
  [
    [1, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [1, 2]
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
    [2, 2]
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3]
  ],
  [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1]
  ]
];

function getMovement(jet) {
  return jet === "<" ? -1 : 1;
}

export function getHeightAfter(jetStream, nrOfRocksMax) {
  let nrOfRocks = 0;
  let height = 0;
  let currentShapeIndex = 0;
  const pos = {
    x: 2, 
    y: 3
  };
  let grid = new Set();
  let i = 0;
  do {
    //draw(currentShapeIndex, pos, grid);
    const jet = jetStream[i % jetStream.length];
    const movement = getMovement(jet);
    if(canShapeMoveSideWays(currentShapeIndex, pos, grid, movement)) {
      pos.x += movement;
    }
    //console.log(pos, jet, currentShapeIndex);
    if(canShapeMoveDown(currentShapeIndex, pos, grid)) {
      pos.y -= 1;
    } else {
      const points = shapes[currentShapeIndex];
      let newHighest = 0;
      for(const point of points) {
        const x = pos.x + point[0];
        const y = pos.y + point[1];
        grid.add(`${x},${y}`);
        if(y > newHighest) {
          newHighest = y;
        }
      }
      if(newHighest > height) {
        height = newHighest;
      }
      pos.x = 2;
      pos.y = height + 4;
      currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
      nrOfRocks++;
    }
    i++;
  } while(nrOfRocks < nrOfRocksMax);
  return height + 1;
}

function getWidthOfShape(shapeIndex) {
  const widths = [4, 3, 3, 1, 2];
  return widths[shapeIndex];
}

function canShapeMoveSideWays(shapeIndex, currentPos, grid, movement) {
  let newPos = {
   x: currentPos.x + movement,
   y: currentPos.y
  };
  let width = getWidthOfShape(shapeIndex);
  if(newPos.x < 0 || newPos.x + width > 7) {
    return false;
  }
  return !collidesWithGrid(shapeIndex, newPos, grid);
}

function collidesWithGrid(shapeIndex, pos, grid) {
  const points = shapes[shapeIndex];
  for(const point of points) {
    const x = pos.x + point[0];
    const y = pos.y + point[1];
    if(grid.has(`${x},${y}`)) {
      return true;
    }
  }
  return false;
}

function canShapeMoveDown(shapeIndex, pos, grid) {
  if(pos.y === 0) return false;
  let newPos = {
    y: pos.y - 1,
    x: pos.x
  };
  return !collidesWithGrid(shapeIndex, newPos, grid);
}

function draw(shapeIndex, pos, grid) {
  for(let y = 20; y >= 0; y--) {
    let row = "";
    for(let x = 0; x < 7; x++) {
      const points = shapes[shapeIndex];
      let shapeOccupiesCurrentPos = false;
      for(const point of points) {
        const x0 = pos.x + point[0];
        const y0 = pos.y + point[1];
        if(x0 === x && y0 === y) {
          shapeOccupiesCurrentPos = true;
          break;
        }
      }
      let char = grid.has(`${x},${y}`) || shapeOccupiesCurrentPos ? "#" : ".";
    
      row += char;
    }
    console.log(row);
  }
}