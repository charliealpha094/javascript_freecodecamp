// Done by Carlos Amaral (2021/06/07)

var magic = function() {
  return new Date();
};

// Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

const magic = () => new Date();
