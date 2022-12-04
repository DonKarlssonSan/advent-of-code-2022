export function getContainedRanges(inputString) {
  const pairs = inputString.split("\n");
  let count = 0;
  for(const pair of pairs) {
    const [first, second] = pair.split(",");

    const [firstStart, firstEnd] = split(first);
    const [secondStart, secondEnd] = split(second);

    if(isOneRangeInTheOther(firstStart, firstEnd, secondStart, secondEnd)) {
      count++;
    }
  }
  return count;
}

export function isOneRangeInTheOther(firstStart, firstEnd, secondStart, secondEnd) {
  return isSecondRangeInFirst(firstStart, firstEnd, secondStart, secondEnd) || isSecondRangeInFirst(secondStart, secondEnd, firstStart, firstEnd);
}

export function isSecondRangeInFirst(firstStart, firstEnd, secondStart, secondEnd) {
  return secondStart >= firstStart && secondEnd <= firstEnd; 
}

function split(range) {
  const parts = range.split("-");
  const start = parseInt(parts[0], 10);
  const end = parseInt(parts[1], 10);
  return [start, end];
}