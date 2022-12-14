import { split } from "../a/contained-ranges.js";

export function getOverlappingRanges(inputString) {
  const pairs = inputString.split("\n");
  let count = 0;
  for(const pair of pairs) {
    const [first, second] = pair.split(",");

    const [firstStart, firstEnd] = split(first);
    const [secondStart, secondEnd] = split(second);

    if(rangesOverlap(firstStart, firstEnd, secondStart, secondEnd)) {
      count++;
    }
  }
  return count;
}

export function rangesOverlap(firstStart, firstEnd, secondStart, secondEnd) {
  return (firstStart <= secondStart && firstEnd >= secondStart) || (secondStart <= firstStart && secondEnd >= firstStart);
}
