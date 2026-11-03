// Exercise 101: Binary tree inorder traversal
// Write inorderTraversal(root) that returns an array of values from inorder traversal (Left, Root, Right) of a binary tree where nodes have { val, left, right }.
// Example: inorderTraversal(root) -> [1, 2, 3]
// Hint: Recursively visit root.left, push root.val, visit root.right.
// Run:  node run.js 101

function inorderTraversal(root) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Binary tree inorder traversal",
  fn: inorderTraversal,
  tests: [
    {
      args: [{
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null }
      }],
      expected: [1, 2, 3]
    },
    { args: [null], expected: [] },
    { args: [{ val: 10, left: null, right: null }], expected: [10] }
  ],
};

