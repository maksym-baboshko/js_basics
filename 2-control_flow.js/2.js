// Equality comparisons and sameness

const secretNumber = '7';

if (secretNumber === 7) {
  console.log('Guessed strictly');
}

if (secretNumber == 7) {
  console.log('Guessed loosely');
}

if (Number(secretNumber) === 7) {
  console.log('Guessed strictly with conversion to number');
}

const test = prompt('Введите число', '');

if (test == 42) {
  console.log('Guessed loosely');
}

// MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using
