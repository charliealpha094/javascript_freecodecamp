// Done by Carlos Amaral (2022/04/29)

/*
The slice method returns a copy of certain elements of an array. It can take 
two arguments, the first gives the index of where to begin the slice, the
second is the index for where to end the slice (and it's non-inclusive). I
*/

/*
Use the slice method in the sliceArray function to return part of the anim 
array given the provided beginSlice and endSlice indices. The function should
return an array.
*/

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  return anim.slice(beginSlice, endSlice);

  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
