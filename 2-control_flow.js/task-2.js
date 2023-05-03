/*
  Максим положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
  Вывести в консоль, сможет ли он купить дом за 13 5000$ через 2 года после
  снятия вклада. И остаток после покупки

  Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/

const deposit = 12000;
const rate = 0.07;
const depositPeriod = 24;
const houseCost = 13500;

const accountBalance = deposit * (1 + rate / 12) ** 24;

console.log(`Money saved: ${accountBalance}`);

if (accountBalance > houseCost) {
  console.log(`I can buy a new house. Account balance after purchase: ${accountBalance - houseCost}`);
} else {
  console.log("I can't buy a new house :(");
}
