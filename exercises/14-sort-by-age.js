// Exercise 14: Sort objects
// Write sortByAge(people) that returns a NEW array sorted from youngest to oldest. Do not change the original array.
// Each person looks like { name: 'Ada', age: 30 }.
// Hint: [...people].sort((a, b) => a.age - b.age)
// Run:  node run.js 14

function sortByAge(people) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Sort objects",
  fn: sortByAge,
  tests: [ {args:[[{name:'A',age:30},{name:'B',age:20},{name:'C',age:25}]],expected:[{name:'B',age:20},{name:'C',age:25},{name:'A',age:30}]}, {args:[[]],expected:[]} ],
};

