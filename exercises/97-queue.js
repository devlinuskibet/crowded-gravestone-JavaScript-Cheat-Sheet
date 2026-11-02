// Exercise 97: Queue data structure
// Implement class Queue with methods enqueue(val), dequeue() (returns front or null), peek() (returns front or null), isEmpty(), and size().
// Example: const q = new Queue(); q.enqueue(1); q.dequeue() -> 1
// Hint: Use an internal array: enqueue pushes to end; dequeue shifts from front.
// Run:  node run.js 97

class Queue {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Queue data structure",
  fn: Queue,
  tests: [
    {
      call: (Queue) => {
        const q = new Queue();
        q.enqueue('a');
        q.enqueue('b');
        const peek = q.peek();
        const deq = q.dequeue();
        return [peek, deq, q.size(), q.isEmpty()];
      },
      expected: ['a', 'a', 1, false]
    },
    {
      call: (Queue) => {
        const q = new Queue();
        return [q.dequeue(), q.peek(), q.isEmpty()];
      },
      expected: [null, null, true]
    }
  ],
};

