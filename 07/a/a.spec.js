import { assert } from "chai";
import { describe, it } from "mocha";
import { getSum, enrichWithAggregatedSize, getDirs } from "./a.js";

const exampleInput = 
`$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

describe("07-a No Space Left On Device", () => {
  it("should return a list with 4 directories (incl root)", () => {
    const result = getDirs(exampleInput);
    assert.equal(result.length, 4);
    assert.equal(result.find(d => d.name === "/a").size, 29116 + 2557 + 62596);
  });

  it("should aggregate file sizes", () => {
    const dirs = getDirs(exampleInput);
    enrichWithAggregatedSize(dirs);
    assert.equal(dirs.find(d => d.name === "/").totalSize, 48381165);
    assert.equal(dirs.find(d => d.name === "/a").totalSize, 94853);
    assert.equal(dirs.find(d => d.name === "/d").totalSize, 24933642);
  });

  it("should return 95437", () => {
    const max = 100000;
    const result = getSum(exampleInput, max);
    assert.equal(result, 95437);
  });
});
