// False from different types

let a; // undefined
const b = Number('sx'); // NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(a));
console.log(Boolean(null));
console.log(Boolean(b));
