// Exercise 76: Flatten nested object
// Write flattenObject(obj) that flattens nested object keys into dot-separated paths.
// Example: flattenObject({ a: { b: 1, c: 2 }, d: 3 }) -> { "a.b": 1, "a.c": 2, "d": 3 }
// Hint: Use a recursive helper that carries a prefix key.
// Run:  node run.js 76

function flattenObject(obj) {
  const result = {};
  function recurse(current, prefix = '') {
    for (const [key, value] of Object.entries(current)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
        recurse(value, newKey);
      } else {
        result[newKey] = value;
      }
    }
  }
  recurse(obj);
  return result;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Flatten nested object",
  fn: flattenObject,
  tests: [
    { args: [{ a: { b: 1, c: 2 }, d: 3 }], expected: { "a.b": 1, "a.c": 2, "d": 3 } },
    { args: [{ x: 10 }], expected: { x: 10 } },
    { args: [{ user: { profile: { name: "Alice" } } }], expected: { "user.profile.name": "Alice" } },
    { args: [{}], expected: {} }
  ],
};

