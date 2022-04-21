// Done by Carlos Amaral (2022/04/10)

/*
Return an array consisting of the largest number from each provided sub-array.
 For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access 
each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  // 1st: Variable to store the results as an array
  const results = [];

  // 2nd: A for loop to iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // Variable to hold the largest number, initialized to the 1st.
    let largest = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    results[i] = largest;
  }
  return results;
}
