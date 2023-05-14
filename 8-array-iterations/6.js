// Array.flat | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// Array.flatMap | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap

const prices = [
  [2, 4],
  [3, 4],
  [10, [20, 50]],
];

console.log(prices.flat(10)); // [2, 4, 3, 4, 10, 20, 50]
console.log(prices.flatMap(el => el.concat([1]))); // [2, 4, 1, 3, 4, 1, 10, [20, 50], 1]
