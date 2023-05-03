// Template literals (Template strings)

const projectName = 'EXY';
const price = 20000;
const author = 'Maksym Baboshko';

const template = author + ' ordered the project named "' + projectName + '" that costs ' + price + ' USD';
console.log(template);

const template2 = `${author} ordered the project named "${projectName}" that costs ${price} USD`;
console.log(template2);

const template3 = 'Project \n' + 'Price: ' + price + '$';
console.log(template3);

const template4 = `Project
Price: ${price}$`;
console.log(template4);
