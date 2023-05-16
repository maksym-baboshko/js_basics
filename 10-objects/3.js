const user = {
  name: 'Maksym',
  surname: 'Baboshko',
  age: 26,
  getFullName: function () {
    return `${this.name} ${this.surname}`;
  },
};

// const getFullName = user => {
//   return `${user.name} ${user.surname}`;
// };

console.log(user.getFullName());
