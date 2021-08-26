"use strict";

const Node = require("./node");

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(ele) {
    let newNode = new Node(ele);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let theFirst = this.first;
      this.first = newNode;
      this.first.next = theFirst;
    }

    return this.size++;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    let theFirst = this.first;

    if (this.first == this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return theFirst.value;
  }

  peek() {
    return this.first;
  }

  isEmpty() {
    if (this.size == 0) {
      return "yes";
    }
  }
}

module.exports = Queue;
