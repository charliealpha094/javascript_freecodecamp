// Done by Carlos Amaral (2022/05/11)

/*
Use the sort method in the alphabeticalOrder function to sort the elements of
arr in alphabetical order. The function should return the sorted array.
*/

const alphabeticalOrder = (arr) => {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
};

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
