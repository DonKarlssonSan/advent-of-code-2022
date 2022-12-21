export function getNumber(inputString) {
  let lookup = parseList(inputString);
  const number = breadthFirst(lookup, "root");
  return number;
}

export function breadthFirst(lookup, start) {
  let current = lookup[start];
  if(current.value) {
    return current.value;
  } else {
    return eval (`${breadthFirst(lookup, current.children[0].name)} ${current.operator} ${breadthFirst(lookup, current.children[1].name)}`); 
  }
}

export function parseList(inputString) {
  const rows = inputString.split("\n");
  let lookup = {};
  for(const row of rows) {
    parseRowAndAdd(row, lookup);
  }
  return lookup;
}

export function parseRowAndAdd(row, lookup) {
  const [name, rest] = row.split(": ");
  let children = [];
  let parts = rest.split(" ");
  let operator;
  let value;
  if(parts.length === 3) {
    children.push({ name: parts[0] });
    operator = parts[1];
    children.push({ name: parts[2] });
  } else if(parts.length == 1) {
    value = parseInt(parts[0], 10);
  }
  let node = {
    children,
    operator,
    value
  };
  lookup[name] = node;
}