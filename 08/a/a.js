export function getNrOfVisibleTrees(inputString) {
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
  const rows = [];
  rows.push(getAllAbove(trees, row, col));
  rows.push(getAllBelow(trees, row, col));
  rows.push(getAllToTheLeft(trees, row, col));
  rows.push(getAllToTheRight(trees, row, col));
  return allOnSameRowIsBelow(rows, currentHeight);
}

function allOnSameRowIsBelow(rows, threshold) {
  for(const row of rows) {
    if(row.every(height => height < threshold)) {
      return true
    }
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
  let below = [];
  for(let r = row + 1; r < trees.length; r++) {
    below.push(trees[r][col]);
  }
  return below;
}

export function getAllToTheLeft(trees, row, col) {
  let left = [];
  for(let c = 0; c < col; c++) {
    left.push(trees[row][c]);
  }
  return left.reverse();
}

export function getAllToTheRight(trees, row, col) {
  let right = [];
  for(let c = col + 1; c < trees[col].length; c++) {
    right.push(trees[row][c]);
  }
  return right;
}
