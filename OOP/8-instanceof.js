// Done by Carlos Amaral (2022/04/20)

/*
Create a new instance of the House constructor, calling it myHouse and passing a 
number of bedrooms. Then, use instanceof to verify that it is an instance of House.
*/

/*
instanceof allows you to compare an object to a constructor, returning true or
false based on whether or not that object was created with the constructor.
*/

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(7);

myHouse instanceof House;
