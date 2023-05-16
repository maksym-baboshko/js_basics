/* 
  Преобразовать пользователей до следующего вида:
  {fullName: 'Maksym Baboshko', skillCount: 2}
*/

const users = [
  {
    name: 'Max',
    surname: 'Baboshko',
    age: 26,
    skills: ['Software Development', 'DevOps'],
  },
  {
    name: 'Alisa',
    surname: 'Molochkina',
    age: 31,
    skills: ['Web-design'],
  },
];

const updatedUsers = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  skillCount: user.skills.length,
}));

console.log(updatedUsers);
