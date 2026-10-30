// Exercise 58: Tree sum traversal
// Write treeSum(node) that returns the sum of all node values in a tree structure where each node has { value: number, children?: node[] }.
// Example: treeSum({ value: 1, children: [{ value: 2 }, { value: 3, children: [{ value: 4 }] }] }) -> 10
// Hint: If node is null or value is not a number, return 0. Add node.value to recursive treeSum of each child in children.
// Run:  node run.js 58

function treeSum(node) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Tree sum traversal",
  fn: treeSum,
  tests: [
    { args: [{ value: 1, children: [{ value: 2 }, { value: 3, children: [{ value: 4 }] }] }], expected: 10 },
    { args: [{ value: 5 }], expected: 5 },
    { args: [null], expected: 0 },
    { args: [{ value: 10, children: [] }], expected: 10 }
  ],
};

