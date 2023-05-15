/*
  Замаскировать кредитную карту.
  Заменить все цифры на символ *, кроме последних 4х

  Before 4310860002095622
  After  ************5622
*/

const maskCardNum = cardNum => {
  const visibleNumbers = cardNum.slice(-4);
  const hiddenNumbers = cardNum.slice(0, cardNum.length - 4);

  return hiddenNumbers.replaceAll(/\d/g, '*') + visibleNumbers;
};

console.log(maskCardNum('4310860002095622'));
console.log('4310860002095622'.slice(-4).padStart(16, '*'));
