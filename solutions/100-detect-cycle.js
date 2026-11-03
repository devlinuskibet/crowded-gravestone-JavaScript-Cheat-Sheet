// Exercise 100: Detect linked list cycle
// Write hasCycle(head) that returns true if a linked list contains a cycle, and false otherwise (Floyd’s Cycle-Finding Algorithm).
// Example: hasCycle(circularList) -> true
// Hint: Use slow and fast pointers: slow advances 1 step, fast advances 2 steps. If slow === fast, a cycle exists.
// Run:  node run.js 100

function hasCycle(head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
