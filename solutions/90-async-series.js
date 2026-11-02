// Exercise 90: Execute async tasks in series
// Write asyncSeries(tasks) that takes an array of async functions () => Promise<any> and runs them one after another in order, returning an array of their results.
// Example: asyncSeries([() => Promise.resolve(1), () => Promise.resolve(2)]) -> [1, 2]
// Hint: Use a for...of loop and await task() pushing each result to an array.
// Run:  node run.js 90

async function asyncSeries(tasks) {
  const results = [];
  for (const task of tasks) {
    results.push(await task());
  }
  return results;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Execute async tasks in series",
  fn: asyncSeries,
  tests: [
    {
      call: async (asyncSeries) => {
        const order = [];
        const t1 = async () => { order.push(1); return 'A'; };
        const t2 = async () => { order.push(2); return 'B'; };
        const res = await asyncSeries([t1, t2]);
        return { res, order };
      },
      expected: { res: ['A', 'B'], order: [1, 2] }
    },
    { call: async (asyncSeries) => await asyncSeries([]), expected: [] }
  ],
};

