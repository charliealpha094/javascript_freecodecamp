// Done by Carlos Amaral (2021/05/23)


/* Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.
*/

function nextInLine(arr, item) {
    arr.push(item);
    item = arr.shift();
    return item;
}


var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
