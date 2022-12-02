export function getTotalScore2(inputString) {
  const inputs = inputString.split("\n");
  let points = 0;
  for(const input of inputs) {
    const plays = input.split(" ");
    const playerA = plays[0];
    const expectedOutcome = plays[1];
    const playerB = getPlay(playerA, expectedOutcome);
    points += getScore(playerA, playerB);
  }
  return points;
}

export function getPlay(first, outcome) {
  // A X Rock
  // B Y Paper
  // C Z Scissors
  const expectedOutcome = outcome.charCodeAt(0) - 89; // -1, 0 or 1
  const firstPoints = first.charCodeAt(0) - 65;
  let play = firstPoints + expectedOutcome;
  play = wrap(play, 2);
  const char = String.fromCharCode(play + 88);
  return char;
}

function wrap(val, max) {
  let ret = val;
  if(val === -1) {
    ret = max;
  } else if(val === max + 1) {
    ret = 0;
  }
  return ret;
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