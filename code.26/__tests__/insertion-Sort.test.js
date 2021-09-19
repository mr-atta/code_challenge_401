"use strict";

const insertionSort = require("../insertion-Sort");

describe("test", () => {
  it("insertionSort test", () => {
    let arr0 = [8, 4, 23, 42, 16, 15];
    let arr1 = [8, 15, 6];

    // console.log(insertionSort(arr1));

    expect(insertionSort(arr1)).toEqual([6, 8, 15]);
    expect(insertionSort(arr0)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
