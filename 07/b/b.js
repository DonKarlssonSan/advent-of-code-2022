import { getDirs, enrichWithAggregatedSize } from "../a/a.js";

export function findDirToDelete(inputString) {
  let dirs = getDirs(inputString);
  enrichWithAggregatedSize(dirs);
  const inUse = dirs.find(d => d.name === "/").totalSize;
  const needed =  30000000 - (70000000 - inUse);
  const toDelete = Math.min(...dirs.map(d => d.totalSize).filter(s => s >= needed));
  return toDelete;
}