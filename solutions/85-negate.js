// Exercise 85: Negate predicate
// Write negate(predicate) that creates a function that negates the result of the predicate function.
// Example: const isOdd = negate(x => x % 2 === 0); isOdd(3) -> true
// Hint: Return function(...args) { return !predicate.apply(this, args); }.
// Run:  node run.js 85

function negate(predicate) {
  return function(...args) {
    return !predicate.apply(this, args);
  };
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Negate predicate",
  fn: negate,
  tests: [
    { call: (negate) => negate(x => x % 2 === 0)(3), expected: true },
    { call: (negate) => negate(x => x > 10)(20), expected: false },
    { call: (negate) => [1, 2, 3, 4].filter(negate(x => x % 2 === 0)), expected: [1, 3] }
  ],
};

