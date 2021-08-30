"use strict";

let Nodell = require("../node");

describe("test the Node", () => {
  it("should create new node and the next will be null", () => {
    //arrange
    const value = "somthing";

    //act
    let node = new Nodell(value);

    //assert
    expect(node.kind).toEqual(value);
    expect(node.next).toBe(undefined);
  });
});
