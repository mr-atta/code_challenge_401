"use strict";

const Queue = require("../queue");

describe("test Queue", () => {
  it("Can successfully enqueue into a queue", () => {
    //arrange
    //act
    //assert
    const queue = new Queue();
    queue.enqueue(5);

    expect(queue.first.value).toBe(5);
  });
  it("Can successfully enqueue multiple values into a queue  ", () => {
    //arrange
    //act
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(3);

    //assert
    expect(queue.first.value).toBe(3);

    queue.enqueue(5);
    //assert
    expect(queue.first.value).toBe(5);
  });
  it("Can successfully dequeue out of a queue the expected value", () => {
    //arrange
    //act
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(3);
    queue.enqueue(5);

    //assert
    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(1);
  });
  it("Can successfully peek into a queue, seeing the expected value", () => {
    //arrange
    //act
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(5);

    //assert
    expect(queue.peek().value).toBe(5);
    expect(queue.peek().value).toBe(5);
  });
  it("Can successfully empty a queue after multiple dequeues", () => {
    //arrange
    //act
    const queue = new Queue();

    queue.enqueue(1);

    //assert
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBeNull();
  });
  it("Can successfully instantiate an empty queue", () => {
    //arrange
    //act
    const queue = new Queue();

    //assert
    expect(queue.peek()).toBeNull();
  });
  it("Calling dequeue or peek on empty queue raises exception", () => {
    //arrange
    //act
    const queue = new Queue();

    //assert
    expect(queue.dequeue()).toBeNull();
    expect(queue.isEmpty()).toBe("yes");
  });
});
