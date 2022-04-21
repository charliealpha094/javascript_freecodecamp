// Done by Carlos Amaral (2022/04/06)

/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

// Finding longest word with a for loop

function findLongestLength(str) {
  // 1st: Split the string into an array of strings
  let ArrStr = str.split(" ");

  // 2nd: Initialize the variable that will hold the length of the longest word
  let longest = 0;

  // 3rd: Initialize the for loop
  for (let i = 0; i < ArrStr.length; i++) {
    if (ArrStr[i].length > longest) {
      longest = ArrStr[i].length;
    }
  }
  return longest;
}

// Finding longest word with sort() Method
function findLongestLength2(str) {
  // 1st: Split the string into an array of strings
  let ArrStr2 = str.split(" ");

  // 2nd: Sort the elements in the newly created array
  let SortedArr = ArrStr2.sort((a, b) => b.length - a.length);

  // 3rd: Return the length of the 1st element in the array
  return longest[0].length;
}
