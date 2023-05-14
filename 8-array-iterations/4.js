// Array.reduce | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const transactions = [100, -20, 7, -30, 50];

// let currentBalance = 0;

// for (const trans of transactions) {
//   currentBalance += trans;
// }

// Same as in the loop "for..of" above

const currentBalance = transactions.reduce((acc, trans) => acc + trans, 0);

const minValue = transactions.reduce((acc, el) => {
  if (acc < el) {
    return acc;
  } else {
    return el;
  }
}, 0);

console.log(currentBalance);
console.log(minValue);
