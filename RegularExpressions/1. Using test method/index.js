// Done by Carlos Amaral (2021/06/23)

/*
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.
*/


let myString = "Hello World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
