// Exercise 102: Binary tree maximum depth
// Write maxDepth(root) that finds the maximum depth (number of nodes along longest path from root to leaf) of a binary tree.
// Example: maxDepth(root) -> 3
// Hint: If root is null return 0. Otherwise return 1 + Math.max(maxDepth(root.left), maxDepth(root.right)).
// Run:  node run.js 102

function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
