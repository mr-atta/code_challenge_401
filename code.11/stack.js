"use strict";

const Node = require("./node");

class Stack {
  constructor() {
    this.top = null;
  }

  // push
  push(value) {
    const node = new Node(value);
    if (this.top) {
      node.next = this.top;
    }
    this.top = node;
  }

  // pop
  pop() {
    try {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp.value;
    } catch {
      return "null";
    }
  }

  // peek
  peek() {
    try {
      return this.top.value;
    } catch {
      return "null";
    }
  }

  // isEmpty
  isEmpty() {
    if (this.top) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Stack;
