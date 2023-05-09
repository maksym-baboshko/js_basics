// From String to Array and back
// String.split - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Array.join - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

const roles = ['user', 'admin', 'manager', 'superuser'];
const url = 'auth/user/login';

console.log(url.split('/')); // Split string by separator to array
console.log(roles.join('/')); // user/admin/manager/superuser
