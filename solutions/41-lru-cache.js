// Exercise 41: LRU Cache
// Implement LRUCache(capacity) with get(key) (returns value or -1) and put(key, value). When capacity is reached, evict the least recently used entry.
// Example: const c = new LRUCache(2); c.put(1, 1); c.put(2, 2); c.get(1); c.put(3, 3); // key 2 evicted
// Hint: JavaScript Map preserves insertion order. In get() and put(), deleting and re-inserting moves an item to the end (most recent).
// Run:  node run.js 41

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "LRU Cache",
  fn: LRUCache,
  tests: [
    {
      call: (LRUCache) => {
        const c = new LRUCache(2);
        c.put(1, 1);
        c.put(2, 2);
        const g1 = c.get(1);
        c.put(3, 3);
        const g2 = c.get(2);
        const g3 = c.get(3);
        return [g1, g2, g3];
      },
      expected: [1, -1, 3]
    },
    {
      call: (LRUCache) => {
        const c = new LRUCache(1);
        c.put('a', 10);
        c.put('b', 20);
        return [c.get('a'), c.get('b')];
      },
      expected: [-1, 20]
    }
  ],
};

