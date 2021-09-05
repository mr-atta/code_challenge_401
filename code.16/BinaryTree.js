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

  maximumValue() {
    if (!this.root) {
      return "tree is empty";
    }

    // put root in the max
    let max = this.root.value;

    // console.log("max", max);
    // console.log("root", this.root.value);
    // console.log("left", this.root.left.value);
    // console.log("right", this.root.right.value);

    // check
    let check = (node) => {
      if (node.left) {
        check(node.left);
      }
      if (node.right) {
        check(node.right);
      }
      if (node.value > max) {
        max = node.value;
      }
    };
    // call
    check(this.root);

    //returns
    // console.log("max", max);
    // console.log("root", this.root.value);
    // console.log("left", this.root.left.value);
    // console.log("right", this.root.right.value);

    return max;
  }
}

module.exports = BinaryTree;
