// Array.forEach | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const score = [5, 10, 0, 15];

// for (const [idx, el] of score.entries()) {
//   console.log(`Round ${idx + 1}: ${el}`);
// }

// Same as in the loop "for..of" above

score.forEach((el, idx) => {
  console.log(`Round ${idx + 1}: ${el}`);
});
