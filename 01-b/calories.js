export function getTopThreeCalories(caloriesString) {
  const calories = caloriesString.split("\n");
  const elves = [0];
  let elvesCounter = 0;
  for(const calory of calories) {
    if(calory === '') {
      elvesCounter++;
      elves[elvesCounter] = 0;
    } else {
      elves[elvesCounter] += Number.parseInt(calory, 10);
    }
  }
  elves.sort((a, b) => b - a); // reverse order
  const sum = elves[0] + elves[1] + elves[2];
  return sum;
}