// Done by Carlos Amaral (2022/04/16)

/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. For the purpose of this
challenge, do not use the built-in .repeat() method.
*/

const repeatStringNumTimes = (str, num) => {
  // 1st: if num is negative, return empty str
  if (num < 0) {
    return "";
    // 2nd: if num times is equal to 1, return the string one time
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
};

console.log(repeatStringNumTimes("abc", 3));
