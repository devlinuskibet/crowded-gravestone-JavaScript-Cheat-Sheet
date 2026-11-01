// Exercise 86: Memoize with TTL
// Write memoizeWithTTL(fn, ttlMs) that caches results for up to ttlMs milliseconds. After ttlMs elapses, subsequent calls recalculate the result.
// Example: const m = memoizeWithTTL(fn, 50);
// Hint: Store { value, expiry: Date.now() + ttlMs } in cache Map.
// Run:  node run.js 86

function memoizeWithTTL(fn, ttlMs) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    const now = Date.now();
    if (cache.has(key)) {
      const entry = cache.get(key);
      if (now < entry.expiry) return entry.value;
    }
    const val = fn.apply(this, args);
    cache.set(key, { value: val, expiry: now + ttlMs });
    return val;
  };
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Memoize with TTL",
  fn: memoizeWithTTL,
  tests: [
    {
      call: async (memoizeWithTTL) => {
        let calls = 0;
        const fn = memoizeWithTTL(x => { calls++; return x * 2; }, 30);
        fn(5);
        fn(5);
        await new Promise(r => setTimeout(r, 45));
        fn(5);
        return calls;
      },
      expected: 2
    }
  ],
};

