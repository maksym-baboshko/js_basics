// Array.map | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const transactionsInUSD = [10, -7, 50, -10, 100];
const CURRENT_EXCHANGE_RATE_USD_UAH = 36.96;

// const transactionsInUAH = [];

// for (let trans of transactionsInUSD) {
//   transactionsInUAH.push(trans * CURRENT_EXCHANGE_RATE_USD_UAH);
// }

// Same as in the loop "for..of" above

const transactionsInUAH = transactionsInUSD.map(trans => trans * CURRENT_EXCHANGE_RATE_USD_UAH);

console.log(transactionsInUAH);
