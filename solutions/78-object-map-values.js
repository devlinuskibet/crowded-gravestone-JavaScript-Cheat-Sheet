// Exercise 78: Map object values
// Write mapValues(obj, fn) that transforms every value in obj using function fn(value, key) and returns a new object with identical keys.
// Example: mapValues({ a: 1, b: 2 }, x => x * 10) -> { a: 10, b: 20 }
// Hint: Use Object.entries(obj) to build a new object.
// Run:  node run.js 78

function mapValues(obj, fn) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = fn(value, key);
  }
  return result;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Map object values",
  fn: mapValues,
  tests: [
    { args: [{ a: 1, b: 2 }, x => x * 10], expected: { a: 10, b: 20 } },
    { args: [{ name: "ada" }, s => s.toUpperCase()], expected: { name: "ADA" } },
    { args: [{}, x => x], expected: {} }
  ],
};

