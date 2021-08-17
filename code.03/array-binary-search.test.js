"use strict";

let searchArrBainary = require("./array-binary-search");

describe("test the code", () => {
  it("should return the specific id of the element if we have the number in the array, and return -1 if we don't have it", () => {
    // the data
    let test1 = [4, 8, 15, 16, 23, 42];
    let test2 = [-131, -82, 0, 27, 42, 68, 179];
    let test3 = [11, 22, 33, 44, 55, 66, 77];
    let test4 = [1, 2, 3, 5, 6, 7];

    // test
    expect(searchArrBainary(test1, 15)).toStrictEqual(2);
    expect(searchArrBainary(test2, 42)).toStrictEqual(4);
    expect(searchArrBainary(test3, 90)).toStrictEqual(-1);
    expect(searchArrBainary(test4, 4)).toStrictEqual(-1);
  });
});
