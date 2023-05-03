// Conditional (ternary) operator

const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

const message = budget >= bmwX3Price ? 'BMW' : budget >= fordFocusPrice ? 'Ford' : 'Bike';

console.log(`I'd like to buy a ${message}`);

// MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
