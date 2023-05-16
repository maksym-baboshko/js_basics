/* 
  Реализовать методы увелечения и уменьшения баланса,
  при котором каждом операция сохраняет в массив transactions в виде:
  { reason: 'Office rent', sum: 1000 }. Возвращает true если оплата произошла успешно,
  и false - если на балансе не достаточно денег.
  Так же реализовать метод вывода числа транзакций по кошельку.
*/

const wallet = {
  balance: 0,
  transactions: [],
  increaseBalance: function (sum, reason) {
    this.balance += sum;
    this.transactions.push({ reason, sum });

    return true;
  },
  decreaseBalance: function (sum, reason) {
    if (sum > this.balance) {
      console.log('Not enough money on the balance');
      return false;
    }

    this.balance -= sum;
    this.transactions.push({ reason, sum: -sum });

    return true;
  },
  showTransactionCount: function () {
    console.log(this.transactions.length);
  },
};

const transaction1 = wallet.increaseBalance(1200, 'Salary');
wallet.showTransactionCount();
const transaction2 = wallet.decreaseBalance(800, 'Office rent');
wallet.showTransactionCount();
console.log(wallet.balance);
console.log(wallet.transactions);
