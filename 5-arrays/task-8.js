/* 
  Дан произвольный URL:
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  
  Нужно сделать функцию, которая выводит в консоль:
  - Протокол (https)
  - Доменное имя (developer.mozilla.org)
  - Путь внутри сайта (/en-US/docs/Web/JavaScript)
*/

const logURLDetails = url => {
  const [prot, _, domain, ...p] = url.split('/');
  const protocol = prot.split(':')[0];
  const path = `/${p.join('/')}`;

  if (protocol === 'http' || protocol === 'https') {
    if (!domain.includes('.')) return;

    console.log(`Protocol: ${protocol}`);
    console.log(`Domain: ${domain}`);
    console.log(`Path: ${path}`);
  }
};

logURLDetails('https://developer.mozilla.org/en-US/docs/Web/JavaScript');
