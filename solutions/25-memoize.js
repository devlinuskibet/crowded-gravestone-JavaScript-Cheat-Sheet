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

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Memoize function results",
  fn: memoize,
  tests: [
    {
      call: (memoize) => {
        let calls = 0;
        const add = memoize((a, b) => { calls++; return a + b; });
        const r1 = add(2, 3);
        const r2 = add(2, 3);
        return { r1, r2, calls };
      },
      expected: { r1: 5, r2: 5, calls: 1 }
    },
    {
      call: (memoize) => {
        let calls = 0;
        const sq = memoize(x => { calls++; return x * x; });
        sq(4); sq(5); sq(4);
        return calls;
      },
      expected: 2
    }
  ],
};

