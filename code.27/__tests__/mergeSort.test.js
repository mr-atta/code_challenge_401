"use strict";

const mergeSort = require("../mergeSort");

describe("test", () => {
  it("mergeSort test", () => {
    let arr0 = [8, 4, 23, 42, 16, 15];
    let arr1 = [8, 15, 6];

    // console.log(insertionSort(arr1));

    expect(mergeSort(arr1)).toEqual([6, 8, 15]);
    expect(mergeSort(arr0)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
