import { assert } from "chai";
import { getNrOfEmptyTilesAfter, parseGrid, move, getNrOfGroundTiles } from "./a.js";

describe.only("23-a Unstable Diffusion", () => {
  const input = 
`..............
..............
.......#......
.....###.#....
...#...#.#....
....#...##....
...#.###......
...##.#.##....
....#..#......
..............
..............
..............`;
    it("should return 110", () => {
    const result = getNrOfEmptyTilesAfter(input, 10);
    assert.equal(result, 110);
  });

  it("should parse grid", () => {
    const grid = parseGrid(input);
    assert.isFalse(grid.has("0:0"));
    assert.isTrue(grid.has("7:2"));
  });

  it("should move, first", () => {
    const input = 
`.....
..##.
..#..
.....
..##.
.....`;
    const grid = parseGrid(input);
    move(grid, 0);
    assert.isTrue(grid.has("2:0"));
    assert.isTrue(grid.has("3:0"));
    assert.isTrue(grid.has("3:3"));
  });

  it("should move, second", () => {
    const input = 
`..##.
.....
..#..
...#.
..#..
.....`;
    const grid = parseGrid(input);
    move(grid, 1);
    assert.isTrue(grid.has("2:1"));
    assert.isTrue(grid.has("3:1"));
    assert.isTrue(grid.has("1:2"));
    assert.isTrue(grid.has("4:3"));
  });

  it("should move, third", () => {
    const input = 
`.....
..##.
.#...
....#
.....
..#..`;
    const grid = parseGrid(input);
    move(grid, 2);
    assert.isTrue(grid.has("2:0"));
    assert.isFalse(grid.has("3:0"));
    assert.isTrue(grid.has("4:1"));
    assert.isTrue(grid.has("0:2"));
  });

  it("should return 110 ground tiles", () => {
    const input = 
`......#.....
..........#.
.#.#..#.....
.....#......
..#.....#..#
#......##...
....##......
.#........#.
...#.#..#...
............
...#..#..#..`;
    const grid = parseGrid(input);
    const result = getNrOfGroundTiles(grid);
    assert.equal(result, 110);
  })
});
