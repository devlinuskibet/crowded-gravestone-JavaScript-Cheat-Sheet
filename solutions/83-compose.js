// Exercise 83: Compose functions right-to-left
// Write compose(...fns) that composes functions right-to-left (the mathematical composition f(g(x))).
// Example: compose(x => x + 1, x => x * 2)(3) -> 7
// Hint: Use fns.reduceRight((acc, fn) => fn(acc), initialVal).
// Run:  node run.js 83

function compose(...fns) {
  return function(initialValue) {
    return fns.reduceRight((acc, fn) => fn(acc), initialValue);
  };
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Compose functions right-to-left",
  fn: compose,
  tests: [
    { call: (compose) => compose(x => x + 1, x => x * 2)(3), expected: 7 },
    { call: (compose) => compose(s => s + '!', s => s.toUpperCase())('hello'), expected: 'HELLO!' },
    { call: (compose) => compose()(100), expected: 100 }
  ],
};

