"use strict";

const PseudoQueue = require("../stack-queue-pseudo");

describe("seudo queue", () => {
  it("add into a PseudoQueue ", () => {
    //arrange
    const test = 3;
    //act
    const pesu = new PseudoQueue();

    //assert
    expect(pesu.enqueue(test)).toBe(3);
  });

  it("add multiple values into PseudoQueue", () => {
    //arrange
    const test1 = 1;
    const test2 = 3;
    const test3 = 5;

    //act
    const pesu = new PseudoQueue();
    pesu.enqueue(test1);
    pesu.enqueue(test2);
    pesu.enqueue(test3);

    //assert
    expect(pesu.stackOne.top.value).toBe(5);
    expect(pesu.stackOne.top.next.value).toBe(3);
    expect(pesu.stackOne.top.next.next.value).toBe(1);
    expect(pesu.stackOne.top.next.next.next).toBeNull();
  });

  it("dequeue one from the stack", () => {
    //arrange
    //act
    const pesu = new PseudoQueue();
    pesu.enqueue(5); // add

    //assert
    expect(pesu.dequeue()).toBe(5); // test
  });

  it("dequeue multiple", () => {
    //arrange
    //act
    const pesu = new PseudoQueue();
    pesu.enqueue(1);
    pesu.enqueue(3);
    pesu.enqueue(5);

    //assert
    expect(pesu.dequeue()).toBe(1);
    expect(pesu.dequeue()).toBe(3);
    expect(pesu.dequeue()).toBe(5);
  });

  it("dequeue multiple", () => {
    //arrange
    //act
    const pesu = new PseudoQueue();
    pesu.enqueue(1);
    pesu.enqueue(3);
    pesu.dequeue(); // del 1
    pesu.enqueue(5);

    //assert
    expect(pesu.dequeue()).toBe(3); // should del 3
    expect(pesu.dequeue()).toBe(5); // should del 5
  });

  it("dequeue on empty pesu", () => {
    //arrange
    //act
    const pesu = new PseudoQueue();

    //assert
    expect(pesu.dequeue()).toBe("null");
  });
});
