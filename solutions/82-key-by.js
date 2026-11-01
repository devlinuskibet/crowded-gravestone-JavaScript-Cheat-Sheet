// Exercise 82: Key array by property
// Write keyBy(arr, key) that converts an array of objects into an object keyed by each element's property key.
// Example: keyBy([{ id: "a", val: 1 }, { id: "b", val: 2 }], "id") -> { a: { id: "a", val: 1 }, b: { id: "b", val: 2 } }
// Hint: Reduce or loop over the array setting result[item[key]] = item.
// Run:  node run.js 82

function keyBy(arr, key) {
  const result = {};
  for (const item of arr) {
    if (item && key in item) {
      result[item[key]] = item;
    }
  }
  return result;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Key array by property",
  fn: keyBy,
  tests: [
    { args: [[{ id: "a", val: 1 }, { id: "b", val: 2 }], "id"], expected: { a: { id: "a", val: 1 }, b: { id: "b", val: 2 } } },
    { args: [[{ code: 101, text: "ok" }], "code"], expected: { 101: { code: 101, text: "ok" } } },
    { args: [[], "id"], expected: {} }
  ],
};

