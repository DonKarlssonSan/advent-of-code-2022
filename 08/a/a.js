export function a(inputString) {
  const trees = parseTrees(inputString);
  let visible = 0;
  for(let row = 0; row < trees.length; row++) {
    for(let col = 0; col < trees[row].length; col++) {
      if(isVisible(trees, row, col)) {
        visible++;
      }
    }
  }
  return visible;
}

export function parseTrees(inputString) {
  const rows = inputString.split("\n");
  let trees = [];
  for(let row = 0; row < rows.length; row++) {
    trees.push([]);
    for(let col = 0; col < rows[row].length; col++) {
      trees[row][col] = parseInt(rows[row][col], 10);
    }
  }
  return trees;
}

function isVisible(trees, row, col) {
  const currentHeight = trees[row][col];
  const above = getAllAbove(trees, row, col);
  if(above.every(height => height < currentHeight)) {
    return true
  }
  const below = getAllBelow(trees, row, col);
  if(below.every(height => height < currentHeight)) {
    return true;
  }
  const left = getAllToTheLeft(trees, row, col);
  if(left.every(height => height < currentHeight)) {
    return true;
  }
  const right = getAllToTheRight(trees, row, col);
  if(right.every(height => height < currentHeight)) {
    return true;
  }
  return false;
}

export function getAllAbove(trees, row, col) {
  let above = [];
  for(let r = 0; r < row; r++) {
    above.push(trees[r][col]);
  }
  return above.reverse();
}

export function getAllBelow(trees, row, col) {
  let above = [];
  for(let r = row + 1; r < trees.length; r++) {
    above.push(trees[r][col]);
  }
  return above;
}

export function getAllToTheLeft(trees, row, col) {
  let above = [];
  for(let c = 0; c < col; c++) {
    above.push(trees[row][c]);
  }
  return above.reverse();
}

export function getAllToTheRight(trees, row, col) {
  let above = [];
  for(let c = col + 1; c < trees[col].length; c++) {
    above.push(trees[row][c]);
  }
  return above;
}
