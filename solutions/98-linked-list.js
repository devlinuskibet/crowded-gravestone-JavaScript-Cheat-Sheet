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
