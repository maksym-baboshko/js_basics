// Switch

const role = 'manager';

if (role === 'manager') {
  console.log('Manager');
} else if (role === 'admin') {
  console.log('Admin');
} else if (role === 'ceo') {
  console.log('CEO');
} else {
  console.log('Who are you?!');
}

switch (role) {
  case 'manager': // role === 'manager'
    console.log('Manager');
    break;
  case 'admin': // role === 'admin'
    console.log('Admin');
    break;
  case 'ceo': // role === 'ceo'
    console.log('CEO');
    break;
  default: // else
    console.log('Who are you?!');
}

switch (role) {
  case 'manager': // role === 'manager' or
  case 'admin': // role === 'admin'
    console.log('Not a Boss');
    break;
  case 'ceo': // role === 'ceo'
    console.log('Boss');
    break;
  default: // else
    console.log('Who are you?!');
}

const num = 1;

switch (true) {
  case num > 0: // true === num > 0
    console.log('Positive');
    break;
  case num < 0:
    console.log('Negative');

  default:
    break;
}
