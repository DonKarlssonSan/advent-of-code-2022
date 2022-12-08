import { parseTrees, getAllAbove, getAllBelow, getAllToTheLeft, getAllToTheRight  } from "../a/a.js";

export function b(inputString) {
  const trees = parseTrees(inputString);
  let highestScore = 0;
  for(let row = 0; row < trees.length; row++) {
    for(let col = 0; col < trees[row].length; col++) {
      const score = getScore(trees, row, col);
      if(score > highestScore) {
        highestScore = score;
      }
    }
  }
  return highestScore;
}

export function getScore(trees, row, col) {
  let score = 1;
  const currentHeight = trees[row][col];
  
  const above = getAllAbove(trees, row, col);
  score *= getViewingDistance(above, currentHeight);
  
  const below = getAllBelow(trees, row, col);
  score *= getViewingDistance(below, currentHeight);

  const left = getAllToTheLeft(trees, row, col);
  score *= getViewingDistance(left, currentHeight);

  const right = getAllToTheRight(trees, row, col);
  score *= getViewingDistance(right, currentHeight);

  return score;
}

export function getViewingDistance(trees, currentHeight) {
  if(trees.length === 0) {
    return 0;
  }
  for(let i = 0; i < trees.length; i++) {
    if(currentHeight <= trees[i]) {
      return i + 1;
    }
  }
  return trees.length;
}