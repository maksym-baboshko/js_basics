/* 
  Дан список задач
  const tasks = ['Task 1'];

  Сделать функции:
  - Добавление задачи в конец
  - Удаление задачи по названию
  - Перенос задачи в начало списка по названию

  Во всех случаях меняем (мутируем) исходный массив
*/

const tasks = ['Task 1'];

const addTask = taskName => {
  tasks.push(taskName);
};

const deleteTaskByTaskName = taskName => {
  const taskIdx = tasks.indexOf(taskName);

  if (taskIdx < 0) return;

  return tasks.splice(taskIdx, 1).at(0);
};

const moveTaskToBeginning = taskName => {
  const task = deleteTaskByTaskName(taskName);

  if (!task) return;

  tasks.unshift(task);
};

addTask('Task 2');
addTask('Task 3');
addTask('Task 4');
deleteTaskByTaskName('Task 2');
moveTaskToBeginning('Task 4');

console.log(tasks);
