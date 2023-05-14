// Quick array creation
// new Array | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
// Array.fill | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
// Array.from | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

console.log(new Array(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5]

const arr = new Array(5); // [empty x 5] We can't use any array methods

arr.fill(1, 0, 3); // [1, 1, 1, empty x 2]
arr.fill(2, 3, 5); // [1, 1, 1, 2, 2]
arr.fill(3); // [3, 3, 3, 3, 3]

const arr2 = Array.from({ length: 5 }, (_, idx) => ++idx); // [1, 2, 3, 4, 5]
console.log(arr2);
