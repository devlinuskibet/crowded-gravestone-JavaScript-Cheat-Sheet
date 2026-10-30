// Exercise 50: Generate a range of numbers
// Write range(start, end, step = 1) that generates an array of numbers from start up to (but not including) end by step.
// Example: range(0, 5) -> [0, 1, 2, 3, 4], range(0, 10, 2) -> [0, 2, 4, 6, 8]
// Hint: Handle positive and negative step in loop conditions: step > 0 ? i < end : i > end.
// Run:  node run.js 50

function range(start, end, step = 1) {
  const result = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) result.push(i);
  } else if (step < 0) {
    for (let i = start; i > end; i += step) result.push(i);
  }
  return result;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Generate a range of numbers",
  fn: range,
  tests: [
    { args: [0, 5], expected: [0, 1, 2, 3, 4] },
    { args: [0, 10, 2], expected: [0, 2, 4, 6, 8] },
    { args: [5, 2, -1], expected: [5, 4, 3] },
    { args: [3, 3], expected: [] }
  ],
};

