export function moveAndGetTopCrates(inputString, craneModel = "CrateMover 9000") {
  const [crateRows, moveRows] = getCrateAndMoveRows(inputString);
  let crates = getCrates(crateRows);
  crates = move(crates, moveRows, craneModel);
  let topCrates = getTopCrates(crates);
  return topCrates;
}

function getEmptyRowIndex(rows) {
  let emptyRowIndex = 0;
  for(const row of rows) {
    if(row === '') {
      break;
    }
    emptyRowIndex++;
  }
  return emptyRowIndex;
}

function getCrateAndMoveRows(inputString) {
  const rows = inputString.split("\n");
  let emptyRowIndex = getEmptyRowIndex(rows);
  const crateRows = rows.slice(0, emptyRowIndex - 1);
  const moveRows = rows.slice(emptyRowIndex + 1);
  return [crateRows, moveRows];
}

export function getCrates(rows) {
  let crates = createEmptyCrateStacks(rows);
  let i = rows.length;
  while(i--) {
    const row = rows[i];
    let col = 0;
    for(let x = 1; x < row.length; x += 4) {
      const c = row[x];
      if(c !== " ") {
        crates[col].push(c);
      }
      col++;
    }
  }
  return crates;
}

function createEmptyCrateStacks(rows) {
  let crates = [];
  const length = (rows[0].length + 1) / 4;
  for(let col = 0; col < length; col++) {
    crates.push([]);
  }
  return crates;
}

export function move(crates, moves, craneModel) {
  for(const move of moves) {
    const [height, source, destination] = getHeightSourceDestination(move);
    const cratesToMove = crates[source].splice(-height);
    if(craneModel === "CrateMover 9000") {
      cratesToMove.reverse();
    }
    crates[destination].push(...cratesToMove);
  }
  return crates;
}

function getHeightSourceDestination(moveCommand) {
  const parts = moveCommand.split(" ");
  const height = parseInt(parts[1], 10);
  const source = parseInt(parts[3], 10) - 1;
  const destination = parseInt(parts[5], 10) - 1;
  return [height, source, destination];
}

export function getTopCrates(crateStacks) {
  let topCrates = "";
  for(const stack of crateStacks) {
    topCrates += stack[stack.length - 1];
  }
  return topCrates;
}
