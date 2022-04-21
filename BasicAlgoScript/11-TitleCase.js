// Done by Carlos Amaral (2022/04/17)

/*
Return the provided string with the first letter of each word capitalized.
 Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words 
like the and of.
*/

const titleCase = (str) => {
  // 1st: split the string by white spaces
  let newTitle = str.split(" ");
  // 2nd: Create a new variable to hold the final result
  let finalTitle = [];
  // 3rd: Loop the chars of newTitle to make the 1st char of word in UpperCase and the rest in LowerCase
  for (let char in newTitle) {
    finalTitle[char] =
      newTitle[char][0].toUpperCase() + newTitle[char].slice(1).toLowerCase();
  }
  return finalTitle.join(" ");
};

console.log(titleCase("I'm a little tea pot"));
