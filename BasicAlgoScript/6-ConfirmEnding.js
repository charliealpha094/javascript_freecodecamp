// Done by Carlos Amaral (2022/04/15)

/*
Check if a string (first argument, str) ends with the given target string 
(second argument, target).
*/

const confirmEnding = (str, target) => {
  return str.slice(str.length - target.length) === target;
};

console.log(confirmEnding("Bastian", "n"));
