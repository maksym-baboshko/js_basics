/*
  Сделать объект-склад с методами добавления на склад,
  поиска товара по складу и расчетом веса товара
*/

const warehouse = {
  goods: [],
  findGoodById: function (goodId) {
    return this.goods.find(({ id }) => id === goodId);
  },
  addGood: function (good) {
    const existedGood = this.findGoodById(good.id);

    if (existedGood) {
      console.log('The good is already exist');
    } else {
      this.goods.push(good);
    }
  },
  getWeightInKg: function () {
    return this.goods.reduce(
      (acc, good) => acc + (good.weight?.kg ? good.weight.kg : 0),
      0
    );
  },
};

/* goods */

const car = {
  id: 1,
  weight: {
    kg: 1000,
  },
  brand: 'Ford',
};

const chair = {
  id: 2,
  weight: {
    kg: 2,
  },
};

const paper = {
  id: 3,
  color: 'red',
};

warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);

console.log(warehouse.findGoodById(2));
console.log(warehouse.getWeightInKg());
console.log(warehouse.goods);
