// Exercise 108: Climbing stairs combinations
// Write climbStairs(n) that calculates how many distinct ways you can climb a staircase of n steps taking either 1 or 2 steps at each stride.
// Example: climbStairs(3) -> 3 (1+1+1, 1+2, 2+1)
// Hint: Ways to reach step n is climbStairs(n-1) + climbStairs(n-2) (Fibonacci relationship).
// Run:  node run.js 108

function climbStairs(n) {
  if (n <= 1) return 1;
  let prev = 1;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    const temp = prev + curr;
    prev = curr;
    curr = temp;
  }
  return curr;
}
