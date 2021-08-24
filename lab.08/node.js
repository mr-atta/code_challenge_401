"use strict";

class Nodell {
  constructor(value) {
    this.value = value === undefined ? 0 : value;
    // this.next = next === undefined ? null : next;
    // this.value = value;
    this.next = null;
  }
}

module.exports = Nodell;
