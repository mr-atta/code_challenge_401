"use strict";

const Node = require("./node");

class TreeBreadthFirst {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    // root > left > right
    let data = [];

    const check = (node) => {
      //add
      data.push(node.value);
      //check
      if (node.left) check(node.left);
      if (node.right) check(node.right);
    };

    check(this.root);
    // send
    return data;
  }
  inOrder() {
    // left > root > right

    let data = [];

    const check = (node) => {
      //check
      if (node.left) check(node.left);
      //add
      data.push(node.value);
      //check
      if (node.right) check(node.right);
    };

    check(this.root);
    // send
    return data;
  }
  postOrder() {
    // left > right > root

    let data = [];

    const check = (node) => {
      //check
      if (node.left) check(node.left);
      if (node.right) check(node.right);
      //add
      data.push(node.value);
    };

    check(this.root);
    // send
    return data;
  }

  treeBreadthFirst(tree) {
    if (!this.root) {
      return "the root is empty !";
    }

    let data = [];

    let node = [];
    node.push(tree);

    while (node.length > 0) {
      // remove and take the first tree
      let current = node.shift();
      // push
      data.push(current.value);

      // check left
      if (current.left) {
        node.push(current.left);
      }

      // check right
      if (current.right) {
        node.push(current.right);
      }
    }
    //
    return data;
  }
}

module.exports = TreeBreadthFirst;
