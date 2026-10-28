// Exercise 26: Curry a function
// Write curry(fn) that transforms a function of arity N so that it can be called with arguments one at a time or grouped.
// Example: const add = (a, b, c) => a + b + c; curry(add)(1)(2)(3) -> 6, curry(add)(1, 2)(3) -> 6
// Hint: Compare args.length with fn.length. If sufficient, invoke fn; otherwise return another function accepting more arguments.
// Run:  node run.js 26

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}
