import { assert } from "chai";
import { positionsVisitedByTail, moveOneStep, moveTail, touching } from "./a.js";

describe("09-a Rope Bridge", () => {
  it("should return 13 visited positions", () => {
    const input = 
`R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;
    const result = positionsVisitedByTail(input);
    assert.equal(result, 13);
  });

  it("should move the tail right when head goes right", () => {
    let rope = {
      head: {
        x: 3,
        y: 2
      },
      tail: {
        x: 2,
        y: 2
      }
    };
    moveOneStep(rope, "R");
    assert.deepEqual(rope.head, { x: 4, y: 2 }); 
    assert.deepEqual(rope.tail, { x: 3, y: 2 }); 
  });

  it("should move the tail left when head goes left", () => {
    let rope = {
      head: {
        x: 3,
        y: 2
      },
      tail: {
        x: 4,
        y: 2
      }
    };
    moveOneStep(rope, "L");
    assert.deepEqual(rope.head, { x: 2, y: 2 }); 
    assert.deepEqual(rope.tail, { x: 3, y: 2 }); 
  });

  it("should move the tail diagonally, up", () => {
    let rope = {
      head: {
        x: 2,
        y: 2
      },
      tail: {
        x: 1,
        y: 3
      }
    };
    moveOneStep(rope, "U");
    assert.deepEqual(rope.head, { x: 2, y: 1 }, "head"); 
    assert.deepEqual(rope.tail, { x: 2, y: 2 }, "tail"); 
  });

  it("should move the tail diagonally, right", () => {
    let rope = {
      head: {
        x: 2,
        y: 2
      },
      tail: {
        x: 1,
        y: 3
      }
    };
    moveOneStep(rope, "R");
    assert.deepEqual(rope.head, { x: 3, y: 2 }, "head"); 
    assert.deepEqual(rope.tail, { x: 2, y: 2 }, "tail"); 
  });

  it("should move the tail diagonally", () => {
    let head = {
      x: 2,
      y: 2
    };
    let tail = {
      x: 0,
      y: 4
    };
    moveTail(head, tail);
    assert.deepEqual(tail, { x: 1, y: 3 }, "tail"); 
  });

  it("should not move the tail if they start on same point", () => {
    let rope = {
      head: {
        x: 2,
        y: 2
      },
      tail: {
        x: 2,
        y: 2
      }
    };
    moveOneStep(rope, "L");
    assert.deepEqual(rope.head, { x: 1, y: 2 }); 
    assert.deepEqual(rope.tail, { x: 2, y: 2 }); 
  });

  it("should return true - touching", () => {
    const a = { x: 1, y: 1 };
    const b = { x: 2, y: 1 };
    const result = touching(a, b);
    assert.isTrue(result);
  });
});
