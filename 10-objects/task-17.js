const users = [
  { name: 'Max', age: 26 },
  { name: 'Alisa', age: 31 },
  { name: 'Kate', age: 30 },
  { name: 'Dan', age: 27 },
];

console.log(users.sort((a, b) => a.age - b.age));
