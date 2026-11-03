// Exercise 102: Binary tree maximum depth
// Write maxDepth(root) that finds the maximum depth (number of nodes along longest path from root to leaf) of a binary tree.
// Example: maxDepth(root) -> 3
// Hint: If root is null return 0. Otherwise return 1 + Math.max(maxDepth(root.left), maxDepth(root.right)).
// Run:  node run.js 102

function maxDepth(root) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Binary tree maximum depth",
  fn: maxDepth,
  tests: [
    {
      args: [{
        val: 3,
        left: { val: 9, left: null, right: null },
        right: {
          val: 20,
          left: { val: 15, left: null, right: null },
          right: { val: 7, left: null, right: null }
        }
      }],
      expected: 3
    },
    { args: [null], expected: 0 },
    { args: [{ val: 1, left: null, right: null }], expected: 1 }
  ],
};

