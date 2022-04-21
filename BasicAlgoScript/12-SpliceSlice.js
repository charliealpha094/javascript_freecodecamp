// Done by Carlos Amaral (2022/04/18)

/*
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

const frankenSplice = (arr1, arr2, n) => {
  // 1st: Create a replica of arr2 and assign the result to a new variable
  let newArr = arr2.slice();

  // 2nd: Loop through every item of arr1. Use splice() to insert each item into index n of newArr
  for (let i = 0; i < arr1.length; i++) {
    newArr.splice(n, 0, arr1[i]);
    // 3rd: Increment index n by 1 to ensure that every element of arr1 is placed in newArr in proper position
    n++;
  }
  return newArr;
};
