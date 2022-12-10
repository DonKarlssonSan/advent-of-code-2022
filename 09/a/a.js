export function positionsVisitedByTail(inputString) {
  const moves = inputString.split("\n");
  let history = new Set();
  let rope = getNewRope();
  for(const m of moves) {
    const [dir, length] = m.split(" ");
    move(history, rope, dir, length);
  }
  return history.size;
}

function getNewRope() {
  return {
    head: {
      x: 2,
      y: 2
    },
    tail: {
      x: 2,
      y: 2
    }
  };
}

export function move(history, rope, direction, length) {
  for(let i = 0; i < length; i++) {
    moveOneStep(rope, direction);
    history.add(`${rope.tail.x} : ${rope.tail.y}`);
  }
}

export function moveOneStep(rope, direction) {
  moveHead(rope, direction);
  moveTail(rope);
}

function moveHead(rope, direction) {
  if(direction === "R") {
    rope.head.x += 1;
  } else if(direction === "L") {
    rope.head.x -= 1;
  } else if(direction === "U") {
    rope.head.y -= 1;
  } else if(direction === "D") {
    rope.head.y += 1;
  }
}

function moveTail(rope) {
  if(!touching(rope.head, rope.tail)) {
    let xDiff = rope.head.x - rope.tail.x;
    let yDiff = rope.head.y - rope.tail.y;
    if(xDiff === 0) {
      // vertically 
      rope.tail.y += yDiff / 2;
    } else if(yDiff === 0) {
      // horizontally
      rope.tail.x += xDiff / 2;
    } else {
      // diagonally
      if(Math.abs(xDiff) > 1) {
        xDiff *= 0.5;
      } else if(Math.abs(yDiff) > 1) {
        yDiff *= 0.5;
      }
      rope.tail.x += xDiff;
      rope.tail.y += yDiff;
    }
  }
}

export function touching(a, b) {
  const xDiff = Math.abs(a.x - b.x);
  const yDiff = Math.abs(a.y - b.y);
  return xDiff < 2 && yDiff < 2;
}