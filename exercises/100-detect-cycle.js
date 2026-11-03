// Exercise 100: Detect linked list cycle
// Write hasCycle(head) that returns true if a linked list contains a cycle, and false otherwise (Floyd’s Cycle-Finding Algorithm).
// Example: hasCycle(circularList) -> true
// Hint: Use slow and fast pointers: slow advances 1 step, fast advances 2 steps. If slow === fast, a cycle exists.
// Run:  node run.js 100

function hasCycle(head) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Detect linked list cycle",
  fn: hasCycle,
  tests: [
    {
      call: (hasCycle) => {
        const n1 = { val: 1, next: null };
        const n2 = { val: 2, next: null };
        const n3 = { val: 3, next: null };
        n1.next = n2; n2.next = n3; n3.next = n1;
        return hasCycle(n1);
      },
      expected: true
    },
    {
      call: (hasCycle) => {
        const n1 = { val: 1, next: { val: 2, next: null } };
        return hasCycle(n1);
      },
      expected: false
    },
    {
      call: (hasCycle) => hasCycle(null),
      expected: false
    }
  ],
};

