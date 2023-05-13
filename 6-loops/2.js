// continue - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue
// break - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break

const tasks = ['Task 1', 'Task 2', 'Task 3'];

// Task 1
// Task 3
/* 
for (let i = 0; i < tasks.length; i++) {
  if (tasks.at(i) === 'Task 2') {
    continue; // Skip the code below and go to the next iteration!
  }

  console.log(tasks.at(i));
} 
*/

// Task 1
for (let i = 0; i < tasks.length; i++) {
  if (tasks.at(i) === 'Task 2') {
    break; // Stop the loop and get out of it!
  }

  console.log(tasks.at(i));
}
