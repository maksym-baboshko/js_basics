// Datatypes

// Objects & Primitives
// Mutable & Immutable

const user = {
  age: 26,
  name: 'Max',
};

const age = 26;

// Primitives

const number = 20; // Number
const float = 2.5; // Number
const string = 'string'; // String
const isBoolean = true; // Boolean | true or false

const hasSomething = undefined; // The value is not set
let data; // The value is not set

console.log(typeof number); // number
console.log(typeof float); // number
console.log(typeof string); // string
console.log(typeof isBoolean); // boolean
console.log(typeof hasSomething); // undefined
console.log(typeof data); // undefined - value is not set

let newData = null; // Empty value
const symbol = Symbol('Symbol');
const bigInt = BigInt(999999999);
const anotherBigint = 99n;

console.log(typeof newData); // object?
console.log(typeof symbol); // symbol
console.log(typeof bigInt); // bigint
console.log(typeof anotherBigint); // bigint
console.log(typeof newData === null); // false | string 'object' !== null
