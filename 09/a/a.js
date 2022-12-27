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
  moveHead(rope.head, direction);
  moveTail(rope.head, rope.tail);
}

export function moveHead(head, direction) {
  if(direction === "R") {
    head.x += 1;
  } else if(direction === "L") {
    head.x -= 1;
  } else if(direction === "U") {
    head.y -= 1;
  } else if(direction === "D") {
    head.y += 1;
  }
}

export function moveTail(head, tail) {
  if(!touching(head, tail)) {
    let xDiff = head.x - tail.x;
    let yDiff = head.y - tail.y;
    if(xDiff === 0) {
      // vertically 
      tail.y += yDiff / 2;
    } else if(yDiff === 0) {
      // horizontally
      tail.x += xDiff / 2;
    } else {
      // diagonally
      if(Math.abs(xDiff) > 1) {
        xDiff *= 0.5;
      } else if(Math.abs(yDiff) > 1) {
        yDiff *= 0.5;
      }
      tail.x += xDiff;
      tail.y += yDiff;
    }
  }
}

export function touching(a, b) {
  const xDiff = Math.abs(a.x - b.x);
  const yDiff = Math.abs(a.y - b.y);
  return xDiff < 2 && yDiff < 2;
}