"use strict";

function arrayspliced(arr, val) {
  let output = [];

  let middleIndex = Math.ceil(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    if (middleIndex == i) {
      output.push(val, arr[i]);
    } else {
      output.push(arr[i]);
    }
  }
  return output;
}

let arr1 = [2, 4, 6, -8]; // 5 // [2,4,5,6,-8]
let arr2 = [42, 8, 15, 23, 42]; // 16 // [42,8,15,16,23,42]

arrayspliced(arr1, 5);

console.log(arrayspliced(arr1, 5));
console.log(arrayspliced(arr2, 16));

module.exports = arrayspliced;
