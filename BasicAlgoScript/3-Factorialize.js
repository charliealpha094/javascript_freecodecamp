// Done by Carlos Amaral (2022/04/04)

/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of 
all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.
*/

const factorialize = function (num) {
  // Reject the number if it's less than 0
  if (num < 0) {
    return -1;
  }
  // If number is 0, it's factorial is 1
  else if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
};

// Now with a ternary operator
const factorialize2 = function (num) {
  num < 0 ? -1 : num === 0 ? 1 : num * factorialize2(num - 1);
};
