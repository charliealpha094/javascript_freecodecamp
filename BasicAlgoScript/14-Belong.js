// Done by Carlos Amaral (2022/04/18)

/*
Return the lowest index at which a value (second argument) should be inserted 
into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater 
than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has
been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and 
greater than 5 (index 1).
*/

const getIndexToIns = (arr, num) => {
  // 1st: sort the array
  arr.sort((a, b) => a - b);

  // 2nd: loop through each item of the array
  for (let i = 0; i < arr.length; i++) {
    // 3rd: if the arr item is greater than the num, return the index
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
};

console.log(getIndexToIns([40, 60], 50));

// Other way to solve this
const getIndexToIns2 = (arr, num) => {
  // 1st: Create a new array using concat to conact arr with num
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
};

console.log(getIndexToIns2([23, 35], 25));
