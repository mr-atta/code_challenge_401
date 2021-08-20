"use strict";

const Node = require("./node");

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;

    /////// test num one will work here
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      /////// test num two will work here
      this.head = node;
      return this;
    }

    let currentOne = this.head;
    /////// test num three will work here
    while (currentOne.next !== null) {
      currentOne = currentOne.next;
    }
    currentOne.next = node;
    return this;
  }

  includes(val) {
    let current = this.head;
    /////// test num four will work here
    while (current.next !== null) {
      if (current.value == val) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  insert(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      //   console.log(this.head);
      //   console.log(this.tail);
    } else {
      this.tail = node;
      this.tail.next = node;
      //   console.log(this.head);
      //   console.log(this.tail);
    }
    this.length++;
    return this.head;
  }

  toString() {
    //
    let current = this.head;
    let list = "";

    while (current !== null) {
      list = list + `{${current.value}} ->`;
      current = current.next;
    }
    console.log(list);
    return (list = list + "null");
  }
}

let newListLL = new LinkList();

newListLL.insert(5);
// newListLL.includes(5);
newListLL.append(5);

// console.log(newListLL.append(5));

module.exports = LinkList;
