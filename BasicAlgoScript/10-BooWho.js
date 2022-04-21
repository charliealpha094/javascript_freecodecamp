// Done by Carlos Amaral (2022/04/17)

/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

const booWho = (bool) => {
  return typeof bool === "boolean";
};

console.log(booWho(null));
