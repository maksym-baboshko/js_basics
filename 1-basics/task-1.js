/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

const ratePerHourUSD = 80;
const workingHoursPerDay = 5;

const projectHours = 40;

const timeToDeparture = 11;
const availableDays = timeToDeparture - 2; // Time to departure minus weekend
const availableHours = workingHoursPerDay * availableDays;

const amIAvailableForProject = availableHours >= projectHours;
const amountOfMoney = ratePerHourUSD * projectHours;

console.log(amIAvailableForProject ? "I'm available for the project" : "I'm not available for the project");
console.log(`The project will cost ${amountOfMoney}$`);
