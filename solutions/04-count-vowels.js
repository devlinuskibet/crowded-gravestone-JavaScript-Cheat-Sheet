// Exercise 04: Count vowels
// Write countVowels(str) that returns how many vowels (a, e, i, o, u) are in the text. Ignore case.
// Example: countVowels('Hello') -> 2
// Run:  node run.js 04

function countVowels(str) {
  let count = 0;
  for (const ch of str.toLowerCase()) {
    if ('aeiou'.includes(ch)) count++;
  }
  return count;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Count vowels",
  fn: countVowels,
  tests: [ {args:['hello'],expected:2}, {args:['AEIOU'],expected:5}, {args:['xyz'],expected:0}, {args:['Programming'],expected:3} ],
};

