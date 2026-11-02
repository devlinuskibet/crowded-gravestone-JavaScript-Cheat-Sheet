// Exercise 99: Reverse a linked list
// Write reverseLinkedList(head) that reverses a singly linked list in-place and returns the new head node. Nodes have shape { val, next }.
// Example: reverseLinkedList(1 -> 2 -> 3) -> 3 -> 2 -> 1
// Hint: Use three pointers: prev = null, curr = head, next = null. In loop: next = curr.next; curr.next = prev; prev = curr; curr = next.
// Run:  node run.js 99

function reverseLinkedList(head) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Reverse a linked list",
  fn: reverseLinkedList,
  tests: [
    {
      call: (reverseLinkedList) => {
        const node3 = { val: 3, next: null };
        const node2 = { val: 2, next: node3 };
        const node1 = { val: 1, next: node2 };
        let curr = reverseLinkedList(node1);
        const res = [];
        while (curr) { res.push(curr.val); curr = curr.next; }
        return res;
      },
      expected: [3, 2, 1]
    },
    {
      call: (reverseLinkedList) => reverseLinkedList(null),
      expected: null
    }
  ],
};

