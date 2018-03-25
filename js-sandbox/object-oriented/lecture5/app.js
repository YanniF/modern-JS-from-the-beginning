// using ES6
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(n1, n2) {
    return n1 + n2;
  }
}

const mary = new Person('Mary', 'Joana', '11/11/1911');
mary.getsMarried('Juju');

console.log(mary);
console.log(mary.calculateAge());
console.log(Person.addNumbers(3,3));