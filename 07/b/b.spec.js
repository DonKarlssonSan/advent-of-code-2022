import { assert } from "chai";
import { findDirToDelete } from "./b.js";

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

describe("07-b No Space Left On Device", () => {
  it("should return 24933642 for dir to delete", () => {
    const result = findDirToDelete(exampleInput);
    assert.equal(result, 24933642);
  });
});
