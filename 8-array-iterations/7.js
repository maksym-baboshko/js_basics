// Array.sort | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const users = ['Max', 'Alice', 'Kate', 'John'];
const transactions = [100, -300, -100, 50, 480];

console.log(users);
console.log(users.sort()); // ['Alice', 'John', 'Kate', 'Max'] | Method mutates the initial array

console.log(transactions);
console.log(transactions.sort()); // [-100, -300, 100, 480, 50] | By default the method works with values in arrays as strings
// "-", "1" | "-", "3" | "1" | "4" | "5"

// return value < 0 - a, b - keep order
// return value > 0 - b, a - change order
console.log(
  transactions.sort((a, b) => {
    // left num > right num - change their order (left one becomes right and vice versa)
    if (a > b) {
      return 1;
      // left num < right num - keep current order (do nothing)
    } else {
      return -1;
    }
  })
);

console.log(transactions.sort((a, b) => (a < b ? 1 : -1)));
