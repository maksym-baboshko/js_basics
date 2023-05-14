const arr = [2, 4, 4, 10, 20];

let elGT5;

// for (const num of arr) {
//   if (num > 5) {
//     elGT5 = num;
//     break;
//   }
// }

elGT5 = arr.find(num => num > 5);
const idxElGT5 = arr.findIndex(num => num > 5);

console.log(elGT5, idxElGT5);
console.log(arr.findIndex(num => num < 0)); // -1 if not found
