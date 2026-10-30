// Exercise 60: Caesar cipher
// Write caesarCipher(str, shift) that shifts every alphabetical letter in str forward by shift positions (wrapping around z -> a). Preserves casing and non-alphabetic characters.
// Example: caesarCipher("Hello, World!", 3) -> "Khoor, Zruog!"
// Hint: Normalize shift with ((shift % 26) + 26) % 26. Use String.fromCharCode and charCodeAt.
// Run:  node run.js 60

function caesarCipher(str, shift) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Caesar cipher",
  fn: caesarCipher,
  tests: [
    { args: ["abc", 1], expected: "bcd" },
    { args: ["Hello, World!", 3], expected: "Khoor, Zruog!" },
    { args: ["xyz", 2], expected: "zab" },
    { args: ["Zebra-123", -1], expected: "Ydaqz-123" }
  ],
};

