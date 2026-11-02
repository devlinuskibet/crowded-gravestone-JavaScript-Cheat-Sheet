// Exercise 91: Parallel execution with concurrency limit
// Write parallelLimit(tasks, limit) that runs an array of async tasks with at most limit tasks executing concurrently, returning results in original task order.
// Example: parallelLimit([task1, task2, task3], 2)
// Hint: Maintain an index pointer, spawn limit worker loops that pull the next available task until all are done.
// Run:  node run.js 91

function parallelLimit(tasks, limit) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Parallel execution with concurrency limit",
  fn: parallelLimit,
  tests: [
    {
      call: async (parallelLimit) => {
        let maxActive = 0;
        let currentActive = 0;
        const makeTask = (id, ms) => async () => {
          currentActive++;
          if (currentActive > maxActive) maxActive = currentActive;
          await new Promise(r => setTimeout(r, ms));
          currentActive--;
          return id;
        };
        const tasks = [makeTask(1, 20), makeTask(2, 20), makeTask(3, 20)];
        const res = await parallelLimit(tasks, 2);
        return { res, maxActive };
      },
      expected: { res: [1, 2, 3], maxActive: 2 }
    }
  ],
};

