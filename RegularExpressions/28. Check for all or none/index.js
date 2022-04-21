// Done by Carlos Amaral (2021/07/26)

/* Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
*/

let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);
