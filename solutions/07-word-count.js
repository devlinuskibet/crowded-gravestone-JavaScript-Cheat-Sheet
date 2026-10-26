// Exercise 07: Word count
// Write wordCount(text) that returns an object with how many times each word appears. Ignore upper/lower case. Words are separated by spaces.
// Example: wordCount('the cat and the hat') -> { the: 2, cat: 1, and: 1, hat: 1 }
// Hint: use an object as a counter: counts[word] = (counts[word] || 0) + 1
// Run:  node run.js 07

function wordCount(text) {
  const counts = {};
  for (const word of text.toLowerCase().split(' ')) {
    if (word === '') continue;
    counts[word] = (counts[word] || 0) + 1;
  }
  return counts;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Word count",
  fn: wordCount,
  tests: [ {args:['the cat and the hat'],expected:{the:2,cat:1,and:1,hat:1}}, {args:['Hi hi HI'],expected:{hi:3}}, {args:[''],expected:{}} ],
};

