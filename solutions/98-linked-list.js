// Exercise 98: Singly linked list
// Implement class LinkedList with insertAtHead(val), insertAtTail(val), toArray(), and size(). Each node has { val, next }.
// Example: const list = new LinkedList(); list.insertAtHead(1); list.insertAtTail(2); list.toArray() -> [1, 2]
// Hint: Track head, tail, and length; traverse or update pointers when inserting.
// Run:  node run.js 98

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }
  insertAtHead(val) {
    const node = { val, next: this.head };
    this.head = node;
    if (!this.tail) this.tail = node;
    this._size++;
  }
  insertAtTail(val) {
    const node = { val, next: null };
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this._size++;
  }
  toArray() {
    const result = [];
    let curr = this.head;
    while (curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    return result;
  }
  size() {
    return this._size;
  }
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

