// Person constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);

  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

 const yanni = new Person("Yanni", "11/30/1989");
 console.log(yanni.calculateAge());

