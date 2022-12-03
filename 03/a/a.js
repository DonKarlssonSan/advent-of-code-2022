export function getPrioritySum(rucksacksString) {
  const rucksacks = rucksacksString.split("\n");
  let prioritySum = 0;
  for(const items of rucksacks) {
    const commonItem = getCommonItem(items);
    const priority = getPriority(commonItem);
    prioritySum += priority;
  }
  return prioritySum;
}

export function getCommonItem(items) {
  const len = items.length / 2;
  const first = items.substring(0, len);
  const second = items.substring(len);
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
      if(first[i] === second[j]) {
        return first[i]
      }
    }
  }
  return "";
}

export function getPriority(char) {
  // A - ASCII 65, prio 27
  // a - ASCII 97 prio 1
  const offset = isLowerCase(char) ? 97 - 1 : 65 - 27;
  return char.charCodeAt(0) - offset;
}

function isLowerCase(str) {
  return str === str.toLowerCase();
}