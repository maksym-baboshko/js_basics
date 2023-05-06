/* 
  Пользователь:
  - Возраст
  - Наличие работы
  - Деньги

  Нужно проверить может ли пользователь купить новый MacBook
  стоимостью 2000$. Пользователь может использовать не только
  свои деньги, но и оформить кредит. Ему дадут:
  500$ - только если ему больше 24-х лет и у него есть работа.
  100$ - если он старше 24-х лет, но работы нет.
  0$ - если никакое из двух условий выше не выполняется

  Напишите функцию, которая принимает данные пользователя
  И возвращает => true or false
*/

const calcALoan = (age, hasJob) => (age >= 24 && hasJob ? 500 : age >= 24 ? 100 : 0);

const canUserBuyANewMacBook = (age, hasJob, moneyBalance) => {
  const MACBOOK_PRICE = 2000;

  return MACBOOK_PRICE <= moneyBalance + calcALoan(age, hasJob);
};

// console.log(canUserBuyANewMacBook(23, false, 2000));
// console.log(canUserBuyANewMacBook(24, true, 1500));
// console.log(canUserBuyANewMacBook(24, false, 1900));
console.log(canUserBuyANewMacBook(23, false, 1900));
