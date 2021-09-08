"use strict";

const Node = require("./node");

class FizzBuzz {
  constructor(root) {
    this.root = root;
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

  fizzBuzzTree(tree) {
    // Arguments: k-ary tree

    if (!this.root) {
      return "the root is empty !";
    }

    // console.log(this.root);

    let data = [];

    const check = (node) => {
      if (node.value % 3 == 0) {
        // % 3
        node.value = "Fizz";
        data.push(node.value);
      } else if (node.value % 5 == 0) {
        // % 5
        data.push((node.value = "Buzz"));
      } else if (node.value % 3 == 0 && node.value % 5 == 0) {
        // % 3 + % 5
        data.push((node.value = "FizzBuzz"));
      } else {
        data.push(`${node.value}`);
      }

      if (node.left) check(node.left);

      if (node.right) check(node.right);
    };

    check(this.root);

    // Return

    return data;
  }
}

module.exports = FizzBuzz;
