// Exercise 84: Partial function application
// Write partial(fn, ...presetArgs) that returns a function that invokes fn with presetArgs prepended to any new arguments.
// Example: const add = (a, b, c) => a + b + c; const add5 = partial(add, 2, 3); add5(4) -> 9
// Hint: Return function(...laterArgs) { return fn.apply(this, presetArgs.concat(laterArgs)); }.
// Run:  node run.js 84

function partial(fn, ...presetArgs) {
  // YOUR CODE HERE
}
