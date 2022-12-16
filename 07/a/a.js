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
    if(isCommand(row)) {
      if(listingMode) {
        setSize(dirs, currentDir, currentSize);
        currentSize = 0;
      }
      listingMode = false;
      if(isListing(row)) {
        listingMode = true;
      } else if(isChangeDir(row)) {
        currentDir = changeDir(currentDir, row);
      }
    } else if(isDir(row)) {
      addDir(dirs, currentDir, row);
    } else if(isFile(row)) {
      currentSize += parseInt(row.split(" ")[0]);
    }
  }
  if(listingMode) {
    setSize(dirs, currentDir, currentSize);
  }
  return dirs;
}

function isFile(row) { 
  return !isNaN(row.split(" ")[0]); 
}

function isListing(row) {
  return row.startsWith("$ ls");
}

function isDir(row) { 
  return row.startsWith("dir ") 
}

function isCommand(row) {
  return row.startsWith("$ ");
}

function isChangeDir(row) {
  return row.startsWith("$ cd");
}

function addDir(dirs, currentDir, row) {
  const dir = row.substring(4);
  const name = path.join(currentDir, dir);
  dirs.push({ name });
}

function changeDir(currentDir, row) {
  const name = row.substring(5);
  return path.join(currentDir, name);
}

function setSize(dirs, currentDir, currentSize) {
  let dir = dirs.find(d => d.name === currentDir);
  dir.size = currentSize;
}

export function enrichWithAggregatedSize(dirs) {
  for(let dir of dirs) {
    const subDirs = dirs.filter(d => d.name.startsWith(dir.name) && d.name !== dir.name);
    dir.totalSize = subDirs.map(d => d.size).reduce((acc, current) => acc + current, 0) + dir.size;
  }
}
