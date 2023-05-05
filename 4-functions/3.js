// Array Functions

function powerOfTwo(num) {
  return num * num;
}

console.log(powerOfTwo(5));

// const poft = num => num * num;

const sayHello = () => console.log('Hello!');

sayHello();

const poft = num => {
  console.log(num);

  return num * num;
};

console.log(poft(6));
