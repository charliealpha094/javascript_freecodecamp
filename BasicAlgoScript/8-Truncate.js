// Done by Carlos Amaral (2022/04/16)

/*
Truncate a string (first argument) if it is longer than the given maximum string 
length (second argument). Return the truncated string with a ... ending.
*/

const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
