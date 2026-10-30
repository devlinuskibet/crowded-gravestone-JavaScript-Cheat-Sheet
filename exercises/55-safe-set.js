// Exercise 55: Safe property set by path
// Write set(obj, path, value) that sets the value at path (e.g. "a.b.c"), creating intermediate objects if they do not exist. Returns obj.
// Example: set({}, "a.b", 123) -> { a: { b: 123 } }
// Hint: Split path by "." and iterate up to the second-to-last key, creating {} if needed, then assign the final key.
// Run:  node run.js 55

function set(obj, path, value) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Safe property set by path",
  fn: set,
  tests: [
    { call: (set) => set({}, 'a.b.c', 42), expected: { a: { b: { c: 42 } } } },
    { call: (set) => set({ a: { x: 1 } }, 'a.y', 2), expected: { a: { x: 1, y: 2 } } },
    { call: (set) => set({}, 'k', 'val'), expected: { k: 'val' } }
  ],
};

