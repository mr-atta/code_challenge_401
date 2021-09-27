"use strict";

class BinaryTree {
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
}

module.exports = BinaryTree;
