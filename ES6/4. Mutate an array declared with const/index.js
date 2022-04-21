// Done by Carlos Amaral (2021/06/07)


// It is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.



// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.


const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

 // Only change code above this line
}
editInPlace();
