// Done by Carlos Amaral (2022/04/01)

/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Carlos"));
