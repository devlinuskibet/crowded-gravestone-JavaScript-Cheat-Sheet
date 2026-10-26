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

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Find the biggest number",
  fn: findMax,
  tests: [ {args:[[3,9,2]],expected:9}, {args:[[-5,-1,-9]],expected:-1}, {args:[[7]],expected:7}, {args:[[]],expected:undefined} ],
};

