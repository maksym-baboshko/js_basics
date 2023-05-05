// Anonymous functions

console.log(getPowerOfTwo(5)); // 25

function getPowerOfTwo(num) {
  return num * num;
}

console.log(getPowerOfTwo(5));

// console.log(getPOfT(6)); // ReferenceError: Cannot access 'getPOfT' before initial

const getPOfT = function (num) {
  return num * num;
};

console.log(getPOfT(6));
