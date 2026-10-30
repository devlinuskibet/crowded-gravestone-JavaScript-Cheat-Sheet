// Exercise 49: Unzip arrays
// Write unzip(pairs) that splits an array of pairs into two separate arrays [firsts, seconds].
// Example: unzip([["a", 1], ["b", 2]]) -> [["a", "b"], [1, 2]]
// Hint: Loop over pairs and push pair[0] to firsts and pair[1] to seconds.
// Run:  node run.js 49

function unzip(pairs) {
  const firsts = [];
  const seconds = [];
  for (const [a, b] of pairs) {
    firsts.push(a);
    seconds.push(b);
  }
  return [firsts, seconds];
}
