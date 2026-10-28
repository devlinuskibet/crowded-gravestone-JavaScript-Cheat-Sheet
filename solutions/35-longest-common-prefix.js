// Exercise 35: Longest common prefix
// Write longestCommonPrefix(strs) that finds the longest common prefix string amongst an array of strings. Return "" if none exists.
// Example: longestCommonPrefix(["flower", "flow", "flight"]) -> "fl"
// Hint: Start with prefix = strs[0]; while strs[i] does not start with prefix, shorten prefix by 1 character.
// Run:  node run.js 35

function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === '') return '';
    }
  }
  return prefix;
}
