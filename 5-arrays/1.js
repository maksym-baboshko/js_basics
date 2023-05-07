// Introduction to arrays

const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];
const userInfo = ['Max', 26];

console.log(roles, roles[0]);
console.log(roles[3]);
console.log(roles.at(0)); // more modern option

console.log(roles.length);
console.log(roles[roles.length - 1]); // the last item - superuser
console.log(roles.at(-1)); // more modern & compact option for the last item

const userAge = [2023 - 1996, (() => 2023 - '1996')(), 10 > 5 ? 5 : 0];

console.log(userAge);

const userNames = new Array('Max', 'Dan', 'Alice'); // another syntax

console.log(userNames);
