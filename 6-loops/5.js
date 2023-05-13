// For...of | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// For...in | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

const arr = [1, 4, 8, 7];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Same as in the loop "for" above

for (const element of arr) {
  console.log(element);
}

for (const idx in arr) {
  console.log(idx);
}
