/*
  Найти среднее значение в последовательности
  чисел с помощью reduce
*/

const arr = [2, 4, 4, 10];

const avg = arr.reduce((acc, num, idx) => {
  if (idx !== arr.length - 1) {
    return acc + num;
  } else {
    return (acc + num) / arr.length;
  }
}, 0);

console.log(avg);
