// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

// calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// gets married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
}

const juju = new Person('Juju', 'Jojó', '12/4/1982');
const tutu = new Person('Tutu', 'Totó', '3/9/1976');

console.log(tutu);
console.log(juju.calculateAge());
console.log(juju.getFullName());

juju.getsMarried('Jajá');

console.log(juju.getFullName());
console.log(tutu.hasOwnProperty('firstName'));
console.log(tutu.hasOwnProperty('getFullName'));