# JavaScript cheat sheet for the exercises

## Arrays
```js
const nums = [3, 1, 2];
nums.push(4);                 // add to end
nums.map(n => n * 2);         // transform every item, returns new array
nums.filter(n => n > 1);      // keep items that pass, returns new array
nums.reduce((sum, n) => sum + n, 0);   // combine into one value
nums.find(n => n > 1);        // first item that passes
nums.includes(2);             // true / false
[...nums].sort((a, b) => a - b);       // sort numbers (copy first)
[...new Set(nums)];           // remove duplicates
nums.slice(1, 3);             // copy part of the array
[1, [2, 3]].flat();           // flatten one level
```

## Strings
```js
const s = 'Hello World';
s.toLowerCase(); s.toUpperCase();
s.split(' ');                 // string -> array
['a', 'b'].join('-');         // array -> string
s.charAt(0); s.slice(1);      // first letter, rest
s.includes('World');
s.replace(/[^a-z]/gi, '');    // regex: remove non-letters
```

## Objects
```js
const o = { a: 1, b: 2 };
o.a; o['b'];                  // read
Object.keys(o); Object.values(o); Object.entries(o);
'a' in o;                     // is the key there?
const { a, b } = o;           // destructuring
const copy = { ...o, c: 3 };  // copy and add
```

## Counting pattern (used a lot)
```js
const counts = {};
for (const item of items) {
  counts[item] = (counts[item] || 0) + 1;
}
```

## Functions and closures
```js
const add = (a, b) => a + b;            // arrow function
function makeAdder(x) { return y => x + y; }  // closure: inner function remembers x
```

## Async / await
```js
async function load(id) {
  try {
    const res = await fetch(`https://api.example.com/users/${id}`);
    if (!res.ok) throw new Error('Request failed');
    return await res.json();
  } catch (err) {
    return null;                         // handle the error
  }
}
```

## Map and Set
```js
const map = new Map();
map.set('key', 'val'); map.get('key'); map.has('key'); map.delete('key');
const set = new Set([1, 2, 2, 3]); // set.has(1); set.add(4); [...set];
```

## Promises & Timers
```js
// Delays and timers
const timer = setTimeout(() => { ... }, 100);
clearTimeout(timer);

// Manual Promise
new Promise((resolve, reject) => {
  if (ok) resolve(result);
  else reject(new Error('fail'));
});
```

## Complexity in one line
One loop is O(n). A loop inside a loop is O(n squared). A lookup in an object or Set is about O(1). Sorting is about O(n log n). Binary search is O(log n).
