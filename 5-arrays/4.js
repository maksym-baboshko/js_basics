// Array.slice - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// Array.splice - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splicehttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// Array.concat - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// Array.reverse - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

const roles = ['user', 'admin', 'manager', 'superuser'];

console.log(roles.slice(2)); // ['manager', 'superuser'];
console.log(roles.slice(2, 3)); // ['manager'];
console.log(roles.slice(-1)); // ['superuser'];
console.log(roles.slice(1, -1)); // ['admin', 'manager'];

console.log(roles); // Hasn't changed ['user', 'admin', 'manager', 'superuser']

// console.log(roles.splice(2)); // ['manager', 'superuser'];
// console.log(roles); // Has changed! ['user', 'admin'];

// console.log(roles.splice(2, 1)); // Cuts out one element
// console.log(roles);

// console.log(roles.splice(-1)); // ['superuser'];
// console.log(roles); // ['user', 'admin', 'manager'];

console.log(roles.reverse()); // It makes the array reverse ['superuser', 'manager', 'admin', 'user']
console.log(roles); // Has changed! (Mutable)

const newRoles = ['sysadmin', 'developer'];
console.log(roles.concat(newRoles)); // ['superuser', 'manager', 'admin', 'user', 'sysadmin', 'developer']
console.log(roles); // Hasn't changed! (Immutable)
