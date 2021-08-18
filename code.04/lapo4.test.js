"use strict";

let fib = require("./lapo4");

describe(" test fib fun ", () => {
  it("should be ele will be added", () => {
    // 2>>1 // 3>>2 // 5>>>5  // 8 >>> 21

    expect(fib(2)).toStrictEqual(1);
    expect(fib(3)).toStrictEqual(2);
    expect(fib(5)).toStrictEqual(5);
    expect(fib(8)).toStrictEqual(21);
  });
});
