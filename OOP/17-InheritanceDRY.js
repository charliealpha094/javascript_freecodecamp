// Done by Carlos Amaral (2022/04/22)

const { Carousel } = require("bootstrap");

/*
There's a principle in programming called Don't Repeat Yourself (DRY). 
The reason repeated code is a problem is because any change requires fixing 
code in multiple places.
*/

function Cat(name) {
  this.name = name;
}

Car.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};
