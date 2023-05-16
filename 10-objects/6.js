let user = {
  name: 'Max',
  city: 'Kharkiv',
  age: 26,
};

const { age, ...userWithoutAge } = user;
const additionalData = {
  skills: ['Development', 'Design'],
  creditCard: '4310-8600-0209-5622',
};

user.skills = additionalData.skills;
user.creditCard = additionalData.creditCard;

user = { ...user, ...additionalData };

console.log(user);
