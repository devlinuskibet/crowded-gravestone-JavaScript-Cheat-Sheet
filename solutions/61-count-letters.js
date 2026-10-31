// Exercise 61: Count vowels and consonants
// Write countLetters(str) that returns { vowels: number, consonants: number } for all alphabetic characters in str. Ignores numbers, punctuation, and spaces.
// Example: countLetters("Hello World") -> { vowels: 3, consonants: 7 }
// Hint: Convert to lowercase. Check with a vowel Set ("aeiou"); non-vowel letters [a-z] are consonants.
// Run:  node run.js 61

function countLetters(str) {
  let vowels = 0;
  let consonants = 0;
  const vSet = new Set(['a', 'e', 'i', 'o', 'u']);
  for (const ch of str.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z') {
      if (vSet.has(ch)) vowels++;
      else consonants++;
    }
  }
  return { vowels, consonants };
}
