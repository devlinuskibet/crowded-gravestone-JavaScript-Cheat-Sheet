// Exercise 18: Invert an object
// Write invertObject(obj) that swaps keys and values.
// Example: invertObject({ a: 1, b: 2 }) -> { 1: 'a', 2: 'b' }
// Hint: Object.entries(obj) gives [key, value] pairs.
// Run:  node run.js 18

function invertObject(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    result[value] = key;
  }
  return result;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Invert an object",
  fn: invertObject,
  tests: [ {args:[{a:1,b:2}],expected:{1:'a',2:'b'}}, {args:[{}],expected:{}}, {args:[{x:'y'}],expected:{y:'x'}} ],
};

