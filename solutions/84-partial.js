// Exercise 84: Partial function application
// Write partial(fn, ...presetArgs) that returns a function that invokes fn with presetArgs prepended to any new arguments.
// Example: const add = (a, b, c) => a + b + c; const add5 = partial(add, 2, 3); add5(4) -> 9
// Hint: Return function(...laterArgs) { return fn.apply(this, presetArgs.concat(laterArgs)); }.
// Run:  node run.js 84

function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn.apply(this, presetArgs.concat(laterArgs));
  };
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Partial function application",
  fn: partial,
  tests: [
    { call: (partial) => partial((a, b, c) => a + b + c, 2, 3)(4), expected: 9 },
    { call: (partial) => partial((greeting, name) => greeting + ', ' + name, 'Hello')('World'), expected: 'Hello, World' },
    { call: (partial) => partial((x) => x * 2)(10), expected: 20 }  ],
};

