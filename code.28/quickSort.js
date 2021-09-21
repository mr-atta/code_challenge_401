"use strict";

//

function quickSort(arr, left = 0, right = arr.length - 1) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

//

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)];
  let x = left;
  let y = right;
  while (x <= y) {
    while (arr[x] < pivot) {
      x++;
    }
    while (arr[y] > pivot) {
      y--;
    }
    if (x <= y) {
      swap(arr, x, y);
      x++;
      y--;
    }
  }

  return x;
}

//

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

//
let arrtest = [8, 4, 23, 42, 16, 15];

console.log(quickSort(arrtest));

module.exports = quickSort;
