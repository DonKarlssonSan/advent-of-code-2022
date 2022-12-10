export function positionsVisitedByLongTail(inputString) {
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
  let rope = [];
  for(let i = 0; i < 10; i++) {
    rope.push({ x: 20, y: 20 });
  }
  return rope;
}

export function move(history, rope, direction, length) {
  for(let i = 0; i < length; i++) {
    moveOneStep(rope, direction);
    const last = rope[rope.length-1];
    history.add(`${last.x} : ${last.y}`);
  }
}

export function moveOneStep(rope, direction) {
  moveHead(rope, direction);
  for(let i = 0; i < rope.length-1; i++) {
    const head = rope[i];
    const tail = rope[i+1];
    moveTail(head, tail);
  }
}

function moveHead(rope, direction) {
  let head = rope[0];
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

function moveTail(head, tail) {
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