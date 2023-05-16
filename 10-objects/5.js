const cities = {
  kharkiv: {
    lt: 200,
    temp: 25,
  },
  kyiv: {
    lt: 100,
    temp: 20,
  },
};

let sumTemp = 0;
let citiesCount = Object.keys(cities).length;

for (const key in cities) {
  sumTemp += cities[key].temp;
}

console.log(sumTemp / citiesCount);

for (const key of Object.keys(cities)) {
  sumTemp += cities[key].temp;
}
