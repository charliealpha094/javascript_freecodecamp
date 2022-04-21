// Done by Carlos Amaral (2021/07/26)

/* Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
*/


let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
