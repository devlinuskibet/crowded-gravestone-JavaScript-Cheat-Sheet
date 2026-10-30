// Exercise 54: Safe property get by path
// Write get(obj, path, defaultValue) that safely retrieves the nested property value at path (e.g. "a.b.c"). Return defaultValue if undefined or null along path.
// Example: get({ a: { b: { c: 42 } } }, "a.b.c") -> 42
// Hint: Split path by "." and reduce or loop down the object keys, checking for null or undefined at each level.
// Run:  node run.js 54

function get(obj, path, defaultValue) {
  const parts = Array.isArray(path) ? path : path.split('.');
  let current = obj;
  for (const part of parts) {
    if (current === null || current === undefined) {
      return defaultValue;
    }
    current = current[part];
  }
  return current === undefined ? defaultValue : current;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Safe property get by path",
  fn: get,
  tests: [
    { args: [{ a: { b: { c: 42 } } }, 'a.b.c'], expected: 42 },
    { args: [{ a: { b: null } }, 'a.b.c', 'default'], expected: 'default' },
    { args: [{}, 'x.y.z', 0], expected: 0 },
    { args: [{ x: 10 }, 'x'], expected: 10 }
  ],
};

