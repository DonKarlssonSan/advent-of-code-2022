export function sumOfIndexesForCorrectPairs(inputString) {
  const rows = inputString.split("\n").filter(row => row !== '').map(row => JSON.parse(row));
  let sum = 0;
  for(let i = 0; i < rows.length; i += 2) {
    if(comparePair([rows[i], rows[i+1]])) {
      const index = (i / 2) + 1;
      sum += index;
    }
  }
  return sum;
}

export function comparePair(pair) {
  const [left, right] = pair;
  for(let i = 0; i < left.length; i++) {
    let l = left[i];
    let r = right[i];
    if(r === undefined) {
      return false;
    } else if(Number.isInteger(l) && Array.isArray(r)) {
      return comparePair([[l], r]);
    } else if(Array.isArray(l) && Number.isInteger(r)) {
      return comparePair([l, [r]]);
      } else if(Array.isArray(l) && Array.isArray(r)) {
      return comparePair([l, r]);
    } else if(l > r) {
      return false;
    }
  }
  return true;
}