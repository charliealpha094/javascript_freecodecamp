// Done by Carlos Amaral (2022/04/18)

/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

const bouncer = (arr) => {
  return arr.filter(Boolean);
};

console.log(bouncer([7, "ate", "", false, 9]));
