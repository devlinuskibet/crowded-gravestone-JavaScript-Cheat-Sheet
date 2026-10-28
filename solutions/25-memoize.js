// Exercise 25: Memoize function results
// Write memoize(fn) that caches the return values of fn based on arguments. Subsequent calls with the same arguments return the cached result without re-invoking fn.
// Example: const m = memoize(x => x * 2); m(5); m(5); // calculates once
// Hint: Store results in a Map using JSON.stringify(args) as key.
// Run:  node run.js 25

function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
