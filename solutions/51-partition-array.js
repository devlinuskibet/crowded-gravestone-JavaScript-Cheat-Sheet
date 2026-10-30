// Exercise 51: Partition an array
// Write partition(arr, predicate) that splits an array into two arrays: [passed, failed], where passed contains items satisfying predicate.
// Example: partition([1, 2, 3, 4, 5], n => n % 2 === 0) -> [[2, 4], [1, 3, 5]]
// Hint: Initialize pass = [] and fail = []. Loop through arr and evaluate predicate(item).
// Run:  node run.js 51

function partition(arr, predicate) {
  const pass = [];
  const fail = [];
  for (const item of arr) {
    if (predicate(item)) {
      pass.push(item);
    } else {
      fail.push(item);
    }
  }
  return [pass, fail];
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Partition an array",
  fn: partition,
  tests: [
    { args: [[1, 2, 3, 4, 5], n => n % 2 === 0], expected: [[2, 4], [1, 3, 5]] },
    { args: [['apple', 'banana', 'avocado'], w => w.startsWith('a')], expected: [['apple', 'avocado'], ['banana']] },
    { args: [[], x => true], expected: [[], []] }
  ],
};

