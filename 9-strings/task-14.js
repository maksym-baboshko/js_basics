/* Вытащить имя и фамилию в отдельные переменные */

const fullUserName = 'Maksym aka EXY Baboshko';
const userName = fullUserName.slice(0, fullUserName.indexOf(' '));
const surname = fullUserName.slice(fullUserName.lastIndexOf(' ') + 1);

console.log(`${userName} ${surname}`);
