"use strict";

function fib(n) {
  // first elemint in the array
  let arr = [0, 1];

  // loop from 2 to n+1
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

fib(2);

console.log(fib(2));
console.log(fib(3));
console.log(fib(5));
console.log(fib(8));

module.exports = fib;
