// Destructuring assignment | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const userData = ['Max', 26, 'Bergen'];

const getUserData = () => {
  return ['Max', 26, 'Bergen'];
};

// const userName = getUserData()[0];
// const userAge = getUserData()[1];
// const userCity = getUserData()[2];

// const [userName, userAge, userCity] = userData;
// const [userName, userAge, userCity] = getUserData();
const [userName, _, userCity] = getUserData();

console.log(userName, userCity);
