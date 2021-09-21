"use strict";

const quickSort = require("../quickSort");

describe("test", () => {
  it("quickSort()", () => {
    let arr = [4, 8, 7, 2, 11, 1, 3];

    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 7, 8, 11]);
  });

  it("sort the array", () => {
    let arr = [8, 4, 23, 42, 16, 15];
    expect(quickSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it("should retrun empty", () => {
    let arr = [];
    expect(quickSort(arr)).toEqual(arr);
  });
  it(" reverse-sorted array", () => {
    let arr = [30, 25, 10, 7, 5, -5];

    expect(quickSort(arr)).toEqual([-5, 5, 7, 10, 25, 30]);
  });

  it("few uniques", () => {
    let arr = [3, 8, 7, 3, 3, 7];

    expect(quickSort(arr)).toEqual([3, 3, 3, 7, 7, 8]);
  });
});
