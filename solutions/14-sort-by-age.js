// Exercise 14: Sort objects
// Write sortByAge(people) that returns a NEW array sorted from youngest to oldest. Do not change the original array.
// Each person looks like { name: 'Ada', age: 30 }.
// Hint: [...people].sort((a, b) => a.age - b.age)
// Run:  node run.js 14

function sortByAge(people) {
  return [...people].sort((a, b) => a.age - b.age);
}
