export function aggregateSizesAtMost(inputString, atMost) {
  const terminalOutput = inputString.split("\n");
  const tree = parseTree(terminalOutput);
  console.log(tree);
  aggregateSizes(tree);
  const size = filterSizes(tree, atMost);
  return size;
}

export function parseTree(terminalOutput) {
  let tree = {};
  let currentDir = [];
  for(const row of terminalOutput) {
    if(row.startsWith("$ cd /")) {
      continue;
    } else if(row.startsWith("dir")) {
      const name = row.substring(4);
      setPropertyValue(tree, { "type": "dir" }, [...currentDir, name]);
    } else if(!isNaN(row.split(" ")[0])) {
      // file
      const [fileSize, name] = row.split(" ");
      setPropertyValue(tree, parseInt(fileSize, 10), [...currentDir, name]);
    } else if(row.startsWith("$ cd ..")) {
      currentDir.pop();
    } else if(row.startsWith("$ cd")) {
      const name = row.substring(5);
      currentDir.push(name)
    }
  }
  return tree;
}

export function aggregateSizes(tree) {
  const props = Object.getOwnPropertyNames(tree);
  const fileNames = props.filter(prop => prop !== "type" && tree[prop]?.type !== "dir");
  let size = fileNames.map(fileName => tree[fileName]).reduce((a, b) => a + b, 0);

  const dirs = props.filter(prop => tree[prop]?.type === "dir");
  for(const dir of dirs) {
    size += aggregateSizes(tree[dir]);
  }
  tree.size = size;
  return size;
}

export function filterSizes(tree, atMost) {
  const props = Object.getOwnPropertyNames(tree);
  let size = tree.size <= atMost ? tree.size : 0;

  const dirs = props.filter(prop => tree[prop]?.type === "dir");
  for(const dir of dirs) {
    const s = filterSizes(tree[dir], atMost);
    if(size + s <= atMost) {
      size += s;
    } else {
      size = s;
    }
  }
  return size <= atMost ? size : 0;
}

export function setPropertyValue(obj, value, path) {
  for (let i = 0; i < path.length - 1; i++)
      obj = obj[path[i]];
  obj[path[path.length-1]] = value;
}