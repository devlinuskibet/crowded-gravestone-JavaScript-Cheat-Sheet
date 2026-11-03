// Exercise 108: Climbing stairs combinations
// Write climbStairs(n) that calculates how many distinct ways you can climb a staircase of n steps taking either 1 or 2 steps at each stride.
// Example: climbStairs(3) -> 3 (1+1+1, 1+2, 2+1)
// Hint: Ways to reach step n is climbStairs(n-1) + climbStairs(n-2) (Fibonacci relationship).
// Run:  node run.js 108

function climbStairs(n) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Climbing stairs combinations",
  fn: climbStairs,
  tests: [
    { args: [2], expected: 2 },
    { args: [3], expected: 3 },
    { args: [4], expected: 5 },
    { args: [5], expected: 8 }
  ],
};

