// Exercise 60: Caesar cipher
// Write caesarCipher(str, shift) that shifts every alphabetical letter in str forward by shift positions (wrapping around z -> a). Preserves casing and non-alphabetic characters.
// Example: caesarCipher("Hello, World!", 3) -> "Khoor, Zruog!"
// Hint: Normalize shift with ((shift % 26) + 26) % 26. Use String.fromCharCode and charCodeAt.
// Run:  node run.js 60

function caesarCipher(str, shift) {
  const s = ((shift % 26) + 26) % 26;
  return str.replace(/[a-zA-Z]/g, ch => {
    const code = ch.charCodeAt(0);
    const base = code >= 65 && code <= 90 ? 65 : 97;
    return String.fromCharCode(((code - base + s) % 26) + base);
  });
}
