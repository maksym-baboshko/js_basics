const isUserRobot = prompt('How much is 7 +/- 15?', '');

switch (true) {
  case isUserRobot === '':
  case isUserRobot === null:
    console.log('The answer is empty');
    break;

  case Number(isUserRobot) === 22:
  case Number(isUserRobot) === -8:
  case isUserRobot === "I'm not a robot":
    console.log('Success');
    break;

  default:
    console.log("You're a robot");
    break;
}
