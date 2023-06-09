/*
  Имеется массив изменений цен prices, где внутри
  1й элемент массива является ценой в момент X,
  2й - ценой в момент Y.

  Нужно преобразовать данные в массив,
  где будут отображены только положительные изменения цен: [100, 150]
*/

const prices = [
  [100, 200],
  [120, 100],
  [200, 350],
];

const result = prices
  .map(([prevPrice, currentPrice]) => currentPrice - prevPrice)
  .filter(price => price > 0);

console.log(result);
