// Exercise 103: Trie prefix tree
// Implement class Trie with methods insert(word), search(word) -> boolean, and startsWith(prefix) -> boolean.
// Example: const trie = new Trie(); trie.insert("apple"); trie.search("apple") -> true; trie.startsWith("app") -> true;
// Hint: Each node has children = {} and isEnd = false.
// Run:  node run.js 103

class Trie {
  // YOUR CODE HERE
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Trie prefix tree",
  fn: Trie,
  tests: [
    {
      call: (Trie) => {
        const t = new Trie();
        t.insert("apple");
        const s1 = t.search("apple");
        const s2 = t.search("app");
        const p1 = t.startsWith("app");
        t.insert("app");
        const s3 = t.search("app");
        return [s1, s2, p1, s3];
      },
      expected: [true, false, true, true]
    }
  ],
};

