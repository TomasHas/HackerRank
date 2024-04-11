const Person = function (first, last) {
  //   this.first = first;
  //   this.last = last;
  let firstName = first;
  let lastName = last;

  this.getFullName = function () {
    return `${firstName} ${lastName}`;
  };

  this.getFirstName = function () {
    return `${firstName}`;
  };
  this.getLastName = function () {
    return `${lastName}`;
  };

  this.setFullName = function (first, last) {
    firstName = first;
    lastName = last;
  };

  this.setFirstName = function (first) {
    firstName = first;
  };

  this.setLastName = function (last) {
    lastName = last;
  };
};

const person1 = new Person("Bob", "Ross");
person1.setFullName("Tomas", "Hastrup");
person1.setFirstName("Tomas");
person1.setLastName("Hastrup");

// console.log(person1.getFullName());

// console.log(person1.getFirstName());
// console.log(person1.getLastName());
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(first, last)
