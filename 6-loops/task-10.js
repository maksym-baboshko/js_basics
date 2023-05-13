/* 
  Есть выписка банковских операций пользователя
  const operations = [1000, -700, 300, -500, 10000]

  А так же начальный баланс в 100$

  Необходимо сделать функции для расчета:
  - Итогового баланса
  - Наличие отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
  - Среднего расхода и среднего дохода
*/

const operations = [1000, -700, 300, -500, 10000];
const startingBalance = 100;

const countBalance = (bankStatement, initialBalance) => {
  let balance = initialBalance;

  for (let i = 0; i < bankStatement.length; i++) {
    balance += bankStatement[i];
  }

  return balance;
};

const hasEnoughMoney = (bankStatement, initialBalance) => {
  let balance = initialBalance;

  for (const transaction of bankStatement) {
    if (balance + transaction < 0) return false;

    balance += transaction;
  }

  return true;
};

const getAverageIncomeAndExpenses = bankStatement => {
  const income = [];
  const expenses = [];
  let totalIncome = 0;
  let totalExpenses = 0;

  for (const transaction of bankStatement) {
    if (transaction < 0) {
      expenses.push(transaction);
      totalExpenses += transaction;
    } else {
      income.push(transaction);
      totalIncome += transaction;
    }
  }

  return [totalIncome / income.length, totalExpenses / expenses.length];
};

console.log(countBalance(operations, startingBalance));
console.log(hasEnoughMoney(operations, startingBalance));
console.log(getAverageIncomeAndExpenses(operations));
