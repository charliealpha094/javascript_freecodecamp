// Done by Carlos Amaral (2022/04/22)

/*
Use Object.create to make two instances of Animal named duck and beagle.
*/

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
