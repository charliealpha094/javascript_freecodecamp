// Done by Carlos Amaral (2021/07/25)

// Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

let sample = "Whitespace is important in separating words";

let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
