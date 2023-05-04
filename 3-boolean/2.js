// Operators with different types

console.log('------------');

console.log('1.', 'Maksym' || 'Alisa');
console.log('2.', '' || 'Alisa');
console.log('3.', 'Maksym' || '');

console.log('------------');

console.log('4.', 'Maksym' && 'Alisa');
console.log('5.', '' && 'Alisa');
console.log('6.', 'Maksym' && '');

console.log('------------');

let a; // undefined
let username = a || 'Maksym';
console.log('7.', username); // Maksym

a = 'Alisa';
username = a || 'Maksym';
console.log('8.', username); // Alisa

console.log('------------');

const isAdmin = true;
const filename = isAdmin && 'file.mp4';
console.log(filename);
