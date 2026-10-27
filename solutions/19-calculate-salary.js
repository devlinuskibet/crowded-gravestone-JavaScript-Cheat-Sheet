// Exercise 19: Calculate net salary
// Write calculateSalary(basicSalary, benefits, deductions) that computes basic + benefits - deductions. Default benefits and deductions to 0 if omitted. If the net salary is negative, return 0.
// Example: calculateSalary(50000, 10000, 5000) -> 55000
// Hint: Use default parameters: (basicSalary = 0, benefits = 0, deductions = 0) and Math.max(0, net).
// Run:  node run.js 19

function calculateSalary(basicSalary = 0, benefits = 0, deductions = 0) {
  const net = basicSalary + benefits - deductions;
  return Math.max(0, net);
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Calculate net salary",
  fn: calculateSalary,
  tests: [
    { args: [50000, 10000, 5000], expected: 55000 },
    { args: [30000, 0, 5000], expected: 25000 },
    { args: [20000], expected: 20000 },
    { args: [1000, 500, 3000], expected: 0 }
  ],
};

