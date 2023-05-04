/* Пользователь хочет приобрести игру в магазине
   Он может это сделать только если:
   - Его баланс больше 1000$ (userBalance) или
   число бонусов больше 100 (userBonusBalance)
   - Пользователь не забанен (isUserBanned)
   - Игра не куплена (isGameExist)
   - Игра в продаже (isGameSelling)
   
   Написать условие для покупки и вывести результат в консоль
*/

const userBalance = 1100;
const userBonusBalance = 90;
const isUserBanned = false;
const isGameExist = false;
const isGameSelling = true;

const hasUserEnoughMoney = userBalance > 1000 || userBonusBalance > 100;
const canUserBuyGame = hasUserEnoughMoney && !isUserBanned && !isGameExist && isGameSelling;

if (canUserBuyGame) {
  console.log('The game has been purchased');
} else {
  console.log("You can't purchase the game");
}
