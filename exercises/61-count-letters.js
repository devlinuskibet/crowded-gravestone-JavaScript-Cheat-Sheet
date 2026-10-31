// Exercise 61: Count vowels and consonants
// Write countLetters(str) that returns { vowels: number, consonants: number } for all alphabetic characters in str. Ignores numbers, punctuation, and spaces.
// Example: countLetters("Hello World") -> { vowels: 3, consonants: 7 }
// Hint: Convert to lowercase. Check with a vowel Set ("aeiou"); non-vowel letters [a-z] are consonants.
// Run:  node run.js 61

function countLetters(str) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Count vowels and consonants",
  fn: countLetters,
  tests: [
    { args: ["Hello World"], expected: { vowels: 3, consonants: 7 } },
    { args: ["12345!@#"], expected: { vowels: 0, consonants: 0 } },
    { args: ["aeiou"], expected: { vowels: 5, consonants: 0 } },
    { args: ["rhythm"], expected: { vowels: 0, consonants: 6 } }
  ],
};

