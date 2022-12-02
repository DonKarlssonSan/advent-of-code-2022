export function getMostCalories(caloriesString) {
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
  const max = Math.max(...elves);
  return max;
}