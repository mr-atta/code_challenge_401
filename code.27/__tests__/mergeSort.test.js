"use strict";

const mergeSort = require("../mergeSort");

describe("test", () => {
  it("mergeSort()", () => {
    let arr = [4, 8, 7, 2, 11, 1, 3];

    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 7, 8, 11]);
  });

  it("sort the array", () => {
    let arr = [8, 4, 23, 42, 16, 15];
    expect(mergeSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it("should retrun empty", () => {
    let arr = [];
    expect(mergeSort(arr)).toEqual(arr);
  });
});
