// Done by Carlos Amaral (2022/04/21)

/*
Add a numLegs property to the prototype of Dog
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");
