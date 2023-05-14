// Array.filter | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const transactionsInUSD = [100, -20, 7, -20, 50];
const CURRENT_EXCHANGE_RATE_USD_UAH = 36.96;

// const incomeTransactions = [];

// for (let trans of transactions) {
//   if (trans < 0) continue;

//   incomeTransactions.push(trans);
// }

// Same as in the loop "for..of" above

const incomeTransactions = transactionsInUSD.filter(trans => trans > 0);

// Chaining
const incomeTransactionsInUAH = transactionsInUSD
  .filter(trans => trans > 0)
  .map(trans => trans * CURRENT_EXCHANGE_RATE_USD_UAH);

console.log(incomeTransactions);
console.log(incomeTransactionsInUAH);
