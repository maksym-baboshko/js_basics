/* 
  Дан произвольный URL:
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  
  Нужно сделать функцию, которая выводит в консоль:
  - Протокол (https)
  - Доменное имя (developer.mozilla.org)
  - Путь внутри сайта (/en-US/docs/Web/JavaScript)
*/

const logURLDetails = url => {
  const [protocol, shortURL] = url.split('://');
  const [domain, ...path] = shortURL.split('/');
  const updatedPath = path.join('/');

  console.log(protocol);
  console.log(domain);
  console.log(updatedPath);
};

logURLDetails('https://developer.mozilla.org/en-US/docs/Web/JavaScript');
