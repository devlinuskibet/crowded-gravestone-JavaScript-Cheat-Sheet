// Exercise 06: Find the biggest number
// Write findMax(numbers) that returns the biggest number WITHOUT using Math.max.
// Return undefined for an empty array.
// Example: findMax([3, 9, 2]) -> 9
// Run:  node run.js 06

function findMax(numbers) {
  if (numbers.length === 0) return undefined;
  let max = numbers[0];
  for (const n of numbers) {
    if (n > max) max = n;
  }
  return max;
}
