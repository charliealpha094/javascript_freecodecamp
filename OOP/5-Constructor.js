// Done by Carlos Amaral (2022/04/20)

/*
Create a constructor, Dog, with properties name, color, and numLegs that are set
to a string, a string, and a number, respectively.
*/

const Dog = () => {
  this.name = "Ollie";
  this.color = "brown";
  this.numLegs = 4;

  return (
    this.name + " is " + this.color + " and has " + this.numLegs + " legs."
  );
};

console.log(Dog());
