const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}!`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Joana";
mary.age = 31;
mary.getsMarried('Lamb');

console.log(mary.greeting());

const jackie = Object.create(personPrototypes, {
  firstName: {value: 'Jackie'},
  lastName: {value: 'Chan'},
  age: {value: 63}
});

console.log(jackie.greeting());