// Loop inside another loop

// for (let i = 1; i < 5; i++) {
//   console.log(`The loop #1 - ${i}`);

//   for (let j = 1; j < 5; j++) {
//     console.log(`The loop #2 - ${j}`);
//   }
// }

// The loop #1 - 1
// The loop #2 - 1
// The loop #2 - 2
// ...
// The loop #2 - 4

// The loop #1 - 2
// The loop #2 - 1
// The loop #2 - 2
// ...
// The loop #2 - 4
// ...

const tasks = [
  [1, 'Task 1'],
  [2, 'Task 2'],
];

for (let i = 0; i < tasks.length; i++) {
  for (let j = 0; j < tasks[i].length; j++) {
    console.log(tasks[i][j]);
  }
}
