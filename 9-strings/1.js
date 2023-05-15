const userName = 'Maksym Baboshko';
const emoji = '💩T';

console.log(emoji[0]); // �
console.log(emoji[1]); // �
console.log(emoji[0] + emoji[1]); // 💩 Emoji takes two symbols
console.log(emoji[2]);

console.log(userName[0]); // M
console.log(userName.charAt(0)); // M
console.log(userName.length); // 15
console.log(userName.indexOf('B')); // 7
console.log(userName.indexOf('sh')); // 11
console.log(userName.includes('o')); // true
console.log(userName.slice(7)); // Baboshko
console.log(userName.slice(7, 10)); // Bab
