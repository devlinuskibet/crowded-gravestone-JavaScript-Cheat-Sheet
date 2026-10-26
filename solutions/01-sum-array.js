// Exercise 01: Sum of an array
// Write sumArray(numbers) that returns the sum of all the numbers.
// Example: sumArray([1, 2, 3]) -> 6
// Hint: start with a for loop. Then try reduce().
// Run:  node run.js 01

function sumArray(numbers) {
  let total = 0;
  for (const n of numbers) total += n;
  return total;
}
