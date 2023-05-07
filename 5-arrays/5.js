// From string to array and back

const roles = ['user', 'admin', 'manager', 'superuser'];
const url = 'auth/user/login';

console.log(url.split('/')); // Split string by separator to array
console.log(roles.join('/')); // user/admin/manager/superuser
