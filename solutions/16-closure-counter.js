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

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Closure: a counter",
  fn: makeCounter,
  tests: [ {call:(fn)=>{const c=fn(); c(); c(); return c();},expected:3}, {call:(fn)=>{const a=fn(); const b=fn(); a(); a(); return b();},expected:1} ],
};

