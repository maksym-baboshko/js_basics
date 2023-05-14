// Array.some | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

/*
  Написать функцию, которая возвращает true,
  если искомый элемент есть в массиве,
  и false - если нет.
*/

const arr = [2, 4, 4, 10, 20];

const some = (arr, callback) => {
  let result = false;

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) result = true;
  }

  return result;
};

console.log(some(arr, el => el === 20));
console.log(arr.some(el => el === 4));
