"use strict";

// requer Stack
const Stack = require("./stack");

class PseudoQueue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  // enqueue
  enqueue(value) {
    this.stackOne.push(value);
    return this.stackOne.peek();
  }

  // dequeue
  dequeue() {
    while (this.stackTwo.peek() !== "null") {
      return this.stackTwo.pop();
    }

    while (this.stackOne.peek() !== "null") {
      this.stackTwo.push(this.stackOne.pop());
    }
    return this.stackTwo.pop();
  }
}
module.exports = PseudoQueue;
