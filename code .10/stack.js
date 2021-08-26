"use strict";

const Node = require("./node");

class Stack {
  constructor() {
    this.top = null;
    this.last = null;
    this.size = 0;
  }

  push(ele) {
    let newNode = new Node(ele);

    if (!this.top) {
      this.top = newNode;
      this.last = newNode;
    } else {
      let theTop = this.top;
      this.top = newNode;
      this.top.next = theTop;
    }

    return this.size++;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    let theTop = this.top;

    if (this.top == this.last) {
      this.last = null;
    }

    this.top = this.top.next;
    this.size--;

    return theTop.value;
  }

  peek() {
    // if (this.top) {
    //   return this.top.value;
    // } else {
    //   return null;
    // }
    // // OR

    return this.top;
  }

  isEmpty() {
    if (this.size == 0) {
      return "yes";
    }
  }
}

// let stack = new Stack();

module.exports = Stack;
