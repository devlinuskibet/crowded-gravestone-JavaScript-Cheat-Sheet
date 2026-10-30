// Exercise 49: Unzip arrays
// Write unzip(pairs) that splits an array of pairs into two separate arrays [firsts, seconds].
// Example: unzip([["a", 1], ["b", 2]]) -> [["a", "b"], [1, 2]]
// Hint: Loop over pairs and push pair[0] to firsts and pair[1] to seconds.
// Run:  node run.js 49

function unzip(pairs) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Unzip arrays",
  fn: unzip,
  tests: [
    { args: [[['a', 1], ['b', 2]]], expected: [['a', 'b'], [1, 2]] },
    { args: [[['x', 10], ['y', 20], ['z', 30]]], expected: [['x', 'y', 'z'], [10, 20, 30]] },
    { args: [[]], expected: [[], []] }
  ],
};

