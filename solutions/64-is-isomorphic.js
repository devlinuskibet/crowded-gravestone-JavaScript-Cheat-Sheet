// Exercise 64: Isomorphic strings
// Write isIsomorphic(s, t) that determines if characters in s can be replaced to get t while preserving character mappings and order. Two characters cannot map to the same character.
// Example: isIsomorphic("egg", "add") -> true, isIsomorphic("foo", "bar") -> false
// Hint: Use two maps/objects to track character mappings in both directions s -> t and t -> s.
// Run:  node run.js 64

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  const mapST = {};
  const mapTS = {};
  for (let i = 0; i < s.length; i++) {
    const c1 = s[i];
    const c2 = t[i];
    if ((mapST[c1] && mapST[c1] !== c2) || (mapTS[c2] && mapTS[c2] !== c1)) {
      return false;
    }
    mapST[c1] = c2;
    mapTS[c2] = c1;
  }
  return true;
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Isomorphic strings",
  fn: isIsomorphic,
  tests: [
    { args: ["egg", "add"], expected: true },
    { args: ["foo", "bar"], expected: false },
    { args: ["paper", "title"], expected: true },
    { args: ["ab", "aa"], expected: false }
  ],
};

