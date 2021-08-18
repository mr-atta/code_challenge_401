"use strict";

let arrayspliced = require("./array-insert-shift");

describe("test insertShiftArray", () => {
  it("should be added in hte midle of the array", () => {
    let test1 = [2, 4, 6, -8]; // 5 // [2,4,5,6,-8]
    let test2 = [42, 8, 15, 23, 42]; // 16 // [42,8,15,16,23,42]

    expect(arrayspliced(test1, 5)).toStrictEqual([2, 4, 5, 6, -8]);
    expect(arrayspliced(test2, 16)).toStrictEqual([42, 8, 15, 16, 23, 42]);
  });
});
