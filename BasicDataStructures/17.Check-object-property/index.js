// Done by Carlos Amaral (2022/03/30)

/*
Finish writing the function so that it returns true if the object passed to it 
contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.
*/

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  if (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  ) {
    return true;
  } else {
    return false;
  }
}

// Another way (shorter) to solve the exercise
function isEveryoneHere2(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) =>
    userObj.hasOwnProperty(name)
  );
}

console.log(isEveryoneHere(users));
