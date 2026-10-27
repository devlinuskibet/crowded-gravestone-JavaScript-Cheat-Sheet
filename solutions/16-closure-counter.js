// Exercise 16: Closure: a counter
// Write makeCounter() that returns a function. Each time you call that function it returns 1, then 2, then 3...
// Example: const c = makeCounter(); c(); c(); c() -> 3 on the third call
// Hint: the inner function can remember a variable from the outer function. This is a closure.
// Run:  node run.js 16

function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
