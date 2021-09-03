"use strict";

let Node = require("../node");

describe("test the Node", () => {
  it("should create new node and the next will be null", () => {
    //arrange
    const value = "somthing";

    //act
    let node = new Node(value);

    //assert
    expect(node.value).toEqual(value);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});
