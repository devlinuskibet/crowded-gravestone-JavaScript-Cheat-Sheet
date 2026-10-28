// Exercise 27: Pipe functions
// Write pipe(...fns) that composes functions left-to-right: the result of each function is passed as argument to the next.
// Example: pipe(x => x + 1, x => x * 2)(3) -> 8
// Hint: Return a function that takes initial value and uses fns.reduce((acc, f) => f(acc), initialValue).
// Run:  node run.js 27

function pipe(...fns) {
  return function(initialValue) {
    return fns.reduce((acc, fn) => fn(acc), initialValue);
  };
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Pipe functions",
  fn: pipe,
  tests: [
    { call: (pipe) => pipe(x => x + 1, x => x * 2)(3), expected: 8 },
    { call: (pipe) => pipe(s => s.trim(), s => s.toUpperCase(), s => s + '!')('  hi  '), expected: 'HI!' },
    { call: (pipe) => pipe()(42), expected: 42 }
  ],
};

