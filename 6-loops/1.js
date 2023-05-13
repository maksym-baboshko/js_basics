// Loops and iteration | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// console.log('My balance: 1$');
// console.log('My balance: 2$');
// console.log('My balance: 3$');
// console.log('My balance: 4$');
// console.log('My balance: 5$');
// console.log('My balance: 6$');
// console.log('My balance: 7$');
// console.log('My balance: 8$');
// console.log('My balance: 9$');

// Nothing happens
/* 
for (let i = 1; i < 1; i++) {
  console.log(`My balance: ${i}$`);
} 
*/

// My balance: 1$
// My balance: 2$
// ...balance: 9$
/* 
for (let i = 1; i < 10; i++) {
  console.log(`My balance: ${i}$`);
}
*/

// My balance: 1$
// My balance: 3$
// ...balance: 5$
for (let i = 1; i < 10; i += 2) {
  console.log(`My balance: ${i}$`);
}
