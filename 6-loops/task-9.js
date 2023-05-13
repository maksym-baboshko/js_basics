/* 
  Вывести в консоль строку "I love JS !" из массива,
  проходя циклом в обратном порядке, не используя метод reverse.

  const arr = ['!', 'JS', 'love', 'I'];
*/

const arr = ['!', 'JS', 'love', 'I'];
const newArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}

const reversedString = newArr.join(' ');

console.log(reversedString);
// console.log(arr.reverse().join(' ')); => The same as above
