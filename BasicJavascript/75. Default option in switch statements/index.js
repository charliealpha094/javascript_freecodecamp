// Done by Carlos Amaral (2021/05/24)


/*
Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff
*/

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff";
      break;
  }



  // Only change code above this line
  return answer;
}

switchOfStuff(1);
