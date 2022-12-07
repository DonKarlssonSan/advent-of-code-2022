import { assert } from "chai";
import { describe, it } from "mocha";
import { aggregateSizesAtMost, aggregateSizes, setPropertyValue, parseTree, filterSizes } from "./a.js";

describe("07-a No Space Left On Device", () => {
  it("should return 95437 in total size", () => {
    const input = 
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
    const result = aggregateSizesAtMost(input, 100000);
    assert.equal(result, 95437);
  });

  it("should return a tree with two directories in the root", () => {
    const input = [
      "$ cd /",
      "$ ls",
      "dir a",
      "dir b"
    ];
    const result = parseTree(input);
    assert.isDefined(result);
    assert.deepEqual(result.a, { "type" : "dir" });
    assert.deepEqual(result.b, { "type" : "dir" });
  });

  it("should return a tree with two directories and a file", () => {
    const input = [
      "$ cd /",
      "$ ls",
      "dir a",
      "$ cd a",
      "$ ls",
      "dir b",
      "$ cd b",
      "$ ls",
      "123 c"
    ];
    const result = parseTree(input);
    assert.isDefined(result);
    assert.equal(result.a.type, "dir");
    assert.equal(result.a.b.type, "dir");
    assert.equal(result.a.b.c, 123);
  });

  it("should return a tree with two directories with a file in each", () => {
    const input = [
      "$ cd /",
      "$ ls",
      "dir a",
      "dir b",
      "$ cd a",
      "$ ls",
      "123 afile",
      "$ cd ..",
      "$ cd b",
      "$ ls",
      "456 bfile"
    ];
    const result = parseTree(input);
    assert.isDefined(result);
    assert.equal(result.a.type, "dir");
    assert.equal(result.b.type, "dir");
    assert.equal(result.a.afile, 123);
    assert.equal(result.b.bfile, 456);
  });

  it("should set value", () => {
    const obj = {
      foo: ""
    };
    setPropertyValue(obj, "bar", ["foo"])
    assert.deepEqual(obj, { foo: "bar"});
  });

  it("should aggregate one file", () => {
    const tree = {
      "a": 123,
    };
    const result = aggregateSizes(tree);
    assert.equal(result, 123);
  });

  it("should aggregate file sizes from tree", () => {
    const tree = {
      "a": 1,
      "b": {
        "type": "dir",
        "c": 2
      }
    };
    const result = aggregateSizes(tree);
    assert.equal(result, 3);
  });

  it("should aggregate file sizes from a deeper tree", () => {
    const tree = {
      "a": 1,
      "b": {
        "type": "dir",
        "c": 2,
        "d": {
          "type": "dir",
          "e": 3,
          "f": 4
        }
      }
    };
    const result = aggregateSizes(tree);
    assert.equal(result, 10);
  });

  it("should filter sizes at most 5 and return sum 2", () => {
    const tree = {
      "a": 4,
      "size": 8,
      "b": {
        "type": "dir",
        "c": 2,
        "size": 4,
        "d": {
          "type": "dir",
          "e": 1,
          "f": 1,
          "size": 2
        }
      }
    };
    const result = filterSizes(tree, 5)
    assert.equal(result, 2);
  });

});
