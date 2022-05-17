// Done by Carlos Amaral (2022/05/17)

/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus 
the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 
1 and 4 (both inclusive) is 10.
*/

const sumAll = function (arr) {
  // 1st: find the lowest and the biggest number in the array
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);

  // Use a for loop to find the numbers in between
  // Before that, initialize an accumulator variable to hold the sum of the in between numbers
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
};

console.log(sumAll([4, 1]));
console.log(sumAll([3, 9]));
