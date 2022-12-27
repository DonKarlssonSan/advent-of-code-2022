import { moveHead, moveTail } from "../a/a.js";

export function positionsVisitedByLongTail(inputString) {
  const moves = inputString.split("\n");
  let history = new Set();
  let rope = getNewRope();
  for(const m of moves) {
    const [dir, length] = m.split(" ");
    move(history, rope, dir, parseInt(length));
    // drawRope(rope);
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

function drawRope(rope) {
  for(let y = 0; y < 50; y++) {
    let row = '';
    for(let x = 0; x < 50; x++) {
      let current = '.';
      for(let i = 0; i < rope.length; i++) {
        if(rope[i].x === x && rope[i].y === y) {
          current = i.toString();
          break;
        } 
      }
      row += current;
    }
    console.log(row); 
  }
}

export function move(history, rope, direction, length) {
  for(let i = 0; i < length; i++) {
    moveOneStep(rope, direction);
    const last = rope[rope.length-1];
    history.add(`${last.x} : ${last.y}`);
  }
}

export function moveOneStep(rope, direction) {
  moveHead(rope[0], direction);
  for(let i = 0; i < rope.length-1; i++) {
    const head = rope[i];
    const tail = rope[i+1];
    moveTail(head, tail);
  }
}
