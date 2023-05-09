// Array controls
// Array.push - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// Array.pop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
// Array.unshift - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
// Array.shift - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

const users = ['Max', 'Kate', 'Alice'];
console.log(users); // ['Max', 'Kate', 'Alice']

users[1] = 'Anna';
console.log(users); // ['Max', 'Anna', 'Alice']

users[4] = 'Nick';
console.log(users, users.length); // ['Max', 'Anna', 'Alice', empty, 'Nick'], length - 5

// users = ['Max']; // Error

const arrLength = users.push('John');
console.log(users, arrLength); // ['Max', 'Anna', 'Alice', empty, 'Nick', 'John']

const arrLength2 = users.unshift('Mark'); // ['Mark , 'Max', 'Anna', 'Alice', empty, 'Nick', 'John']
console.log(users, arrLength2);

const element = users.pop();
console.log(users, element); // ['Mark , 'Max', 'Anna', 'Alice', empty, 'Nick'] 'John'

const element2 = users.shift();
console.log(users, element2); // ['Max', 'Anna', 'Alice', empty, 'Nick'] 'Mark'
