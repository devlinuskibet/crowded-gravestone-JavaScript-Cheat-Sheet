// Exercise 36: Valid parentheses
// Given a string s containing just characters "(", ")", "{", "}", "[" and "]", determine if the brackets are closed in valid order.
// Example: isValid("()[]{}") -> true, isValid("(]") -> false
// Hint: Use a stack (array push/pop) and a matching map for closing brackets.
// Run:  node run.js 36

function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (const ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else if (ch in map) {
      if (stack.pop() !== map[ch]) return false;
    }
  }
  return stack.length === 0;
}
