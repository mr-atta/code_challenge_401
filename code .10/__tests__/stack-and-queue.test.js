"use strict";

const Stack = require("../stack");

describe("test Stack", () => {
  it("Can successfully push onto a stack", () => {
    // should add a value to the top of the stack
    //arrange
    //act
    //assert

    const stack = new Stack();
    stack.push(1);

    expect(stack.top.value).toBe(1);
  });
  it("Can successfully push multiple values onto a stack", () => {
    //arrange
    //act
    const stack = new Stack();
    stack.push(1);
    stack.push(3);

    //assert
    expect(stack.top.value).toBe(3);

    stack.push(5);
    //assert
    expect(stack.top.value).toBe(5);
  });
  it("Can successfully pop off the stack", () => {
    //arrange
    //act
    const stack = new Stack();
    stack.push(1);
    stack.push(3);
    stack.push(5);

    //assert
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(1);
  });
  it("Can successfully empty a stack after multiple pops", () => {
    //arrange
    //act
    const stack = new Stack();
    stack.push(1);

    //assert
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
  });
  it("Can successfully peek the next item on the stack", () => {
    //arrange
    //act
    const stack = new Stack();
    stack.push(1);
    stack.push(5);

    //assert
    expect(stack.peek().value).toBe(5);
    expect(stack.peek().value).toBe(5);
  });
  it("Can successfully instantiate an empty stack", () => {
    //arrange
    //act
    const stack = new Stack();

    //assert
    expect(stack.peek()).toBeNull();
  });
  it("Calling pop or peek on empty stack raises exception", () => {
    //arrange
    //act
    const stack = new Stack();

    //assert
    expect(stack.pop()).toBeNull();
    expect(stack.isEmpty()).toBe("yes");
  });
});
