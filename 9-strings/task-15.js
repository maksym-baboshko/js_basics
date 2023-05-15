const isPhoneNumber = num => {
  num = num.trim();
  num = num.replace('+38', '');
  num = num.replaceAll('(', '');
  num = num.replaceAll(')', '');
  num = num.replaceAll(' ', '');
  num = num.replaceAll('-', '');

  if (!num.startsWith('0') && num.length !== 9) {
    return false;
  }

  let onlyNumber = true;

  for (const char of num) {
    if (isNaN(Number(char))) {
      onlyNumber = false;
      break;
    }
  }

  return onlyNumber;
};

console.log(isPhoneNumber('+38099247942'));
