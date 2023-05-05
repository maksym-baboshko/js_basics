// Functions

// key word, name, arguments
function convertMilesToKm(miles) {
  const km = miles / 0.62137;

  return km; // return value
}

console.log(convertMilesToKm(10));

function logName() {
  console.log(`My name is Max`);
}

const a = logName(); // Function call

console.log(typeof a);

function logName(name, surname) {
  console.log(`My name is ${name} ${surname}`);
}

logName('Maksym', 'Baboshko');

function calcDepositSum(depositInUSD, month, rate) {
  return depositInUSD * (1 + rate / 12) ** month;
}

const example1 = calcDepositSum(1000, 24, 0.12);

console.log(example1, calcDepositSum(1000, 48, 0.1));
