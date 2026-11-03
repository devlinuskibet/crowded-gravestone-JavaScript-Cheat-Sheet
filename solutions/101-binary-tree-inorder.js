// Exercise 101: Binary tree inorder traversal
// Write inorderTraversal(root) that returns an array of values from inorder traversal (Left, Root, Right) of a binary tree where nodes have { val, left, right }.
// Example: inorderTraversal(root) -> [1, 2, 3]
// Hint: Recursively visit root.left, push root.val, visit root.right.
// Run:  node run.js 101

function inorderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return result;
}
