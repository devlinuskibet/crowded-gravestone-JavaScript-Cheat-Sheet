// Exercise 32: Omit object properties
// Write omit(obj, keys) that returns a new object containing all properties except those specified in keys.
// Example: omit({ a: 1, b: 2, c: 3 }, ["b"]) -> { a: 1, c: 3 }
// Hint: Use a Set for keys lookup and loop over Object.entries(obj).
// Run:  node run.js 32

function omit(obj, keys) {
  const keySet = new Set(keys);
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!keySet.has(key)) {
      result[key] = value;
    }
  }
  return result;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Omit object properties",
  fn: omit,
  tests: [
    { args: [{ a: 1, b: 2, c: 3 }, ['b']], expected: { a: 1, c: 3 } },
    { args: [{ x: 10, y: 20 }, ['x', 'y']], expected: {} },
    { args: [{ a: 1 }, []], expected: { a: 1 } }
  ],
};

