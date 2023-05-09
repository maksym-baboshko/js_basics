// Searching for an item
// Array.indexOf - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// Array.includes - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

const roles = ['user', 'admin', 'manager', 'admin'];

console.log(roles.indexOf('admin')); // 1 - The first element found
console.log(roles.indexOf('superuser')); // -1 If the element isn't found

if (roles.indexOf('admin') >= 0) {
  console.log('Access is allowed');
}

console.log(roles.includes('admin'));
