const user = {
  name: 'Maksym',
  surname: 'Baboshko',
  age: 26,
  skills: ['Programming', 'Cooking'],
  eduBasic: 'School 127',
  eduPro: 'NURE',
};

console.log(user);
console.log(user.skills);
console.log(user['skills']);

const eduLvl = 'Pro';

console.log(user['edu' + eduLvl]);

user['city'] = 'Kharkiv';

console.log(user);
