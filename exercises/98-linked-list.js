// Exercise 98: Singly linked list
// Implement class LinkedList with insertAtHead(val), insertAtTail(val), toArray(), and size(). Each node has { val, next }.
// Example: const list = new LinkedList(); list.insertAtHead(1); list.insertAtTail(2); list.toArray() -> [1, 2]
// Hint: Track head, tail, and length; traverse or update pointers when inserting.
// Run:  node run.js 98

class LinkedList {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Singly linked list",
  fn: LinkedList,
  tests: [
    {
      call: (LinkedList) => {
        const l = new LinkedList();
        l.insertAtHead(2);
        l.insertAtHead(1);
        l.insertAtTail(3);
        return [l.toArray(), l.size()];
      },
      expected: [[1, 2, 3], 3]
    },
    {
      call: (LinkedList) => {
        const l = new LinkedList();
        return [l.toArray(), l.size()];
      },
      expected: [[], 0]
    }
  ],
};

