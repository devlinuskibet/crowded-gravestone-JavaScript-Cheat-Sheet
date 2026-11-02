// Exercise 87: Stateful accumulator
// Write createAccumulator(initial = 0) that returns an object { add(n), subtract(n), get(), reset() } managing an internal sum via closure.
// Example: const a = createAccumulator(10); a.add(5); a.subtract(2); a.get() -> 13
// Hint: Keep a variable current = initial inside createAccumulator and return an object with methods mutating or reading it.
// Run:  node run.js 87

function createAccumulator(initial = 0) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Stateful accumulator",
  fn: createAccumulator,
  tests: [
    {
      call: (createAccumulator) => {
        const acc = createAccumulator(10);
        acc.add(5);
        acc.subtract(3);
        const res1 = acc.get();
        acc.reset();
        const res2 = acc.get();
        return [res1, res2];
      },
      expected: [12, 10]
    }
  ],
};

