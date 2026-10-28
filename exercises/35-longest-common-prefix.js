// Exercise 35: Longest common prefix
// Write longestCommonPrefix(strs) that finds the longest common prefix string amongst an array of strings. Return "" if none exists.
// Example: longestCommonPrefix(["flower", "flow", "flight"]) -> "fl"
// Hint: Start with prefix = strs[0]; while strs[i] does not start with prefix, shorten prefix by 1 character.
// Run:  node run.js 35

function longestCommonPrefix(strs) {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Longest common prefix",
  fn: longestCommonPrefix,
  tests: [
    { args: [["flower", "flow", "flight"]], expected: "fl" },
    { args: [["dog", "racecar", "car"]], expected: "" },
    { args: [["interspecies", "interstellar", "interstate"]], expected: "inters" },
    { args: [[]], expected: "" }
  ],
};

