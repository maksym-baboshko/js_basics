// Higher Order Functions | https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/
// Higher Order Functions are functions that take and/or return other functions

// Usual functions

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

// HOF (It takes a function)
const calculate = (a, b, fn) => {
  console.log(fn.name);

  return fn(a, b);
};

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));

// const power = pow => {
//   return num => {
//     return num ** pow;
//   };
// };

const power = pow => num => num ** pow;
const powerOfTwo = power(2);
const powerOfThree = power(3);

console.log(powerOfTwo(5));
console.log(powerOfThree(5));
console.log(power(5)(4));
