// Searching for an item

const roles = ['user', 'admin', 'manager', 'admin'];

console.log(roles.indexOf('admin')); // 1 - The first element found
console.log(roles.indexOf('superuser')); // -1 If the element isn't found

if (roles.indexOf('admin') >= 0) {
  console.log('Access is allowed');
}

console.log(roles.includes('admin'));
