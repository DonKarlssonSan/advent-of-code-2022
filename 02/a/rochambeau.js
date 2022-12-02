export function getTotalScore(inputString) {
  const inputs = inputString.split("\n");
  let points = 0;
  for(const input of inputs) {
    const plays = input.split(" ");
    const playerA = plays[0];
    const playerB = plays[1];
    points += getScore(playerA, playerB);
  }
  return points;
}

export function getScore(first, second) {
  const firstPoints = first.charCodeAt(0) - 64;
  const secondPoints = second.charCodeAt(0) - 87;

  let outcome;
  if(firstPoints === 1 && secondPoints === 3 || firstPoints === 3 && secondPoints === 1 ) {
    outcome = firstPoints < secondPoints ? 0 : 6;
  } else if(firstPoints > secondPoints) {
    outcome = 0;
  } else if(secondPoints > firstPoints){
    outcome = 6;
  } else {
    outcome = 3; // draw
  }
  return secondPoints + outcome;
}