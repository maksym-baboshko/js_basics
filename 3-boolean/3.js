// Nullish coalescing operator

let username = 'Maksym';
console.log('1. ("Maksym" + ||) =\n', username || '  Default Username');

username = null;
console.log('2. (null + ||) =', username || '  Default Username');
console.log('3. (null + ??) =', username ?? '  Default Username');

username = undefined;
console.log('4. (undefined + ||) =', username || '  Default Username');
console.log('5. (undefined + ??) =', username ?? '  Default Username');

username = '';
console.log('6. ("" + ||) =', username || '  Default Username');
console.log('7. ("" + ??) =', username ?? '  Default Username');

username = 0;
console.log('8. (0 + ||) =', username || '  Default Username');
console.log('9. (0 + ??) =', username ?? '  Default Username');
