const str = 'Maksym Baboshko';
console.log(new String('Maksym Baboshko').includes('a')); // String conversion

console.log(str.includes('a'));
console.log(str.startsWith('M'));
console.log(str.endsWith('o'));

console.log(str.toLocaleLowerCase()); // maksym baboshko
console.log(str.toUpperCase()); // MAKSYM BABOSHKO
console.log(str.replace('M', 'T')); // Taksym Baboshko
console.log(str.replace('B', 'N')); // Maksym Naboshko
console.log(str.replaceAll('a', 'o')); // Moksym Boboshko
console.log(str.replace(/a/g, 'o')); // Moksym Boboshko

console.log('    Maksym Baboshko    \n'.trim());
