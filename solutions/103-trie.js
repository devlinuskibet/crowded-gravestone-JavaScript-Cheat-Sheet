// Exercise 103: Trie prefix tree
// Implement class Trie with methods insert(word), search(word) -> boolean, and startsWith(prefix) -> boolean.
// Example: const trie = new Trie(); trie.insert("apple"); trie.search("apple") -> true; trie.startsWith("app") -> true;
// Hint: Each node has children = {} and isEnd = false.
// Run:  node run.js 103

class Trie {
  constructor() {
    this.root = {};
  }
  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node[ch]) node[ch] = {};
      node = node[ch];
    }
    node.isEnd = true;
  }
  search(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node[ch]) return false;
      node = node[ch];
    }
    return Boolean(node.isEnd);
  }
  startsWith(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node[ch]) return false;
      node = node[ch];
    }
    return true;
  }
}
