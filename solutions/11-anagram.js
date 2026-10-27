// Exercise 11: Anagram check
// Write isAnagram(a, b) that returns true if both words use exactly the same letters (ignore case).
// Example: isAnagram('Listen', 'Silent') -> true
// Hint: sort the letters of both words, then compare.
// Run:  node run.js 11

function isAnagram(a, b) {
  const sortLetters = s => s.toLowerCase().split('').sort().join('');
  return sortLetters(a) === sortLetters(b);
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Anagram check",
  fn: isAnagram,
  tests: [ {args:['Listen','Silent'],expected:true}, {args:['hello','world'],expected:false}, {args:['abc','ab'],expected:false}, {args:['rat','tar'],expected:true} ],
};

