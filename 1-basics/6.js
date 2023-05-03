// Type Conversion

const age = '30';
const userName = 'Max';

console.log(age + 12); // 3012 string
console.log(String(4) + 2); // 42 string

console.log(age - 12); // 18
console.log(age * 12); // 360
console.log(age / 12); // 2.5
console.log(Number(age) + 12); // 42
console.log(+age + 12); // 42

console.log(Number(userName) + 5); // NaN - Not a Number
console.log(typeof NaN); // number

console.log(Boolean(0)); // false
console.log(Boolean(5)); // true
console.log(Boolean(-5)); // true
console.log(Boolean('')); // false
console.log(Boolean(' ')); // true
console.log(Boolean('') + 42); // 42 | 0 + 42 = 42
console.log(true + 41); //  42 | 1 + 41 = 42

const number = 2 + '10'; // 210
console.log(number - 10); // 200
