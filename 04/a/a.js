export function getContainedRanges(inputString) {
  const pairs = inputString.split("\n");
  let count = 0;
  for(const pair of pairs) {
    const aa = pair.split(",");

    const first = aa[0];
    const second = aa[1];

    const firstParts = first.split("-");
    const firstStart = parseInt(firstParts[0], 10);
    const firstEnd = parseInt(firstParts[1], 10);

    const secondParts = second.split("-");
    const secondStart = parseInt(secondParts[0]);
    const secondEnd = parseInt(secondParts[1], 10);
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