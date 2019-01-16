// [1] Given an array of integers, determine whether or not there exist two elements
// in the array (at different positions) whose sum is equal to some target value.
// Examples: [5, 4, 2, 4], 8 --> true [5, 1, 2, 4], 8 --> false

let sumTarget = function(array, target) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      sum = array[i] + array[j];
      console.log(sum);
      if (sum === target) {
        return true;
      }
    }
  }
  return false;
}

// console.log(sumTarget([5, 4, 2, 4], 8));
// console.log(sumTarget([5, 1, 2, 4], 8));