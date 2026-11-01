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
