import * as path from "node:path";

export function getSum(inputString, max) {
  let dirs = getDirs(inputString);
  enrichWithAggregatedSize(dirs);
  let sum = 0;
  for(const dir of dirs) {
    if(dir.totalSize <= max) {
      sum += dir.totalSize;
    }
  }
  return sum;
}

export function getDirs(inputString) {
  const rows = inputString.split("\n");
  let currentDir = "/";
  let dirs = [];
  dirs.push({ name: currentDir });
  let currentSize = 0;
  let listingMode = false;
  for(const row of rows) {
    if(row.startsWith("$ ")) {
      if(listingMode) {
        let dir = dirs.find(d => d.name === currentDir);
        dir.size = currentSize;
        currentSize = 0;
      }
      listingMode = false;
      if(row.startsWith("$ ls")) {
        listingMode = true;
      }
      if(row.startsWith("$ cd")) {
        const name = row.substring(5);
        currentDir = path.join(currentDir, name);
      }
    } else if(row.startsWith("dir ")) {
      const dir = row.substring(4);
      const name = path.join(currentDir, dir);
      dirs.push({ name });
    } else if(!isNaN(row.split(" ")[0])) {
      currentSize +=  parseInt(row.split(" ")[0]);
    }
  }
  if(listingMode) {
    let dir = dirs.find(d => d.name === currentDir);
    dir.size = currentSize;
  }
  return dirs;
}

export function enrichWithAggregatedSize(dirs) {
  for(let dir of dirs) {
    const subdirs = dirs.filter(d => d.name.startsWith(dir.name) && d.name !== dir.name);
    dir.totalSize = subdirs.map(d => d.size).reduce((acc, current) => acc + current, 0) + dir.size;
  }
}
