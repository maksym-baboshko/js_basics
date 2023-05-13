// While | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

/*
for (let i = 1; i < 5; i++) {
  console.log(`Log: ${i}`);
}
*/

// Same as in the loop "for" above
/*
let i = 1;

while (i < 5) {
  console.log(`Log: ${i}`);
  i++;
}
*/

const arr = [1, 4, 8, 7];

/*
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 5) {
    break;
  }

  console.log(arr[i]);
}
*/

// Same as in the loop "for" above

let i = 0;

while (arr[i] <= 5 && i < arr.length) {
  console.log(arr[i]);
  i++;
}

let j = 0;

// It will be executed at least once whether or not the condition below is true.
do {
  console.log(j);
  j++;
} while (j < 0);
