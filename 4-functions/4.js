// Default arguments/parameters

function toPower(num, power = 2) {
  console.log(typeof power);

  // num = num ?? 2
  // power = power ?? 2

  const res = num ** power;

  return res;
}

console.log(toPower(2, 3));
console.log(toPower(2));
