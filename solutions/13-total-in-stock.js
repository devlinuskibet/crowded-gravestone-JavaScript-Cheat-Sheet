// Exercise 13: Filter and reduce
// Write totalInStock(products) that returns the total price of only the products that are inStock.
// Each product looks like { name: 'Pen', price: 10, inStock: true }.
// Example: total of [{price:10,inStock:true},{price:20,inStock:false},{price:5,inStock:true}] is 15
// Hint: filter() then reduce().
// Run:  node run.js 13

function totalInStock(products) {
  return products
    .filter(p => p.inStock)
    .reduce((sum, p) => sum + p.price, 0);
}

// ---- Tests (please do not edit below this line) ----
module.exports = {
  title: "Filter and reduce",
  fn: totalInStock,
  tests: [ {args:[[{name:'Pen',price:10,inStock:true},{name:'Book',price:20,inStock:false},{name:'Cap',price:5,inStock:true}]],expected:15}, {args:[[]],expected:0}, {args:[[{name:'X',price:9,inStock:false}]],expected:0} ],
};

