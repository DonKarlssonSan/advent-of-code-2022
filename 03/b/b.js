export function getPrioritySum(rucksacksString) {
  const rucksacks = rucksacksString.split("\n");
  let prioritySum = 0;
  for(let i = 0; i < rucksacks.length; i += 3) {
    const commonItem = getCommonItem([rucksacks[i], rucksacks[i+1], rucksacks[i+2]]);
    const priority = getPriority(commonItem);
    prioritySum += priority;
  }
  return prioritySum;
}

export function getCommonItem(items) {
  const first = items[0];
  const second = items[1];
  const third = items[2];
  for(let i = 0; i < first.length; i++) {
    for(let j = 0; j < second.length; j++) {
      for(let k = 0; k < third.length; k++) {
        if(first[i] === second[j] && first[i] === third[k]) {
          return first[i]
        }
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