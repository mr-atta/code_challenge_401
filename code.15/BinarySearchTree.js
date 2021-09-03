"use strict";

const Node = require("./node");
const BinaryTree = require("./BinaryTree");

//a (BinarySearchTree) class is inherited from another class (BinaryTree)
class BinarySearchTree extends BinaryTree {
  constructor() {
    super();

    this.root = null;
  }

  add(value) {
    const node = new Node(value);

    const checkAndAdd = (node, currentNode) => {
      if (node.value < currentNode.value) {
        // left side
        if (!currentNode.left) {
          // if we dont have left
          // add
          currentNode.left = node;
        } else {
          // if we have left
          // call
          checkAndAdd(node, currentNode.left);
        }
      } else if (node.value > currentNode.value) {
        // right side
        console.log(node, node.value, currentNode, currentNode.value);
        if (!currentNode.right) {
          // if we dont have right
          // add
          currentNode.right = node;
        } else {
          // if we have right
          // call
          checkAndAdd(node, currentNode.right);
        }
      }
    };
    // start from here
    if (!this.root) {
      this.root = node;
    } else {
      checkAndAdd(node, this.root);
    }
    //
  }

  Contains(value) {
    const search = (value, currentNode) => {
      if (value == currentNode.value) {
        // is the root
        return true;
      } else if (value < currentNode.value) {
        // left
        if (!currentNode.left) {
          return false;
        }
        // call
        return search(value, currentNode.left);
      } else if (value > currentNode.value) {
        // right
        if (!currentNode.right) {
          return false;
        }
        // call
        return search(value, currentNode.right);
      }
    };
    // call with the root
    return search(value, this.root);
  }
}

module.exports = BinarySearchTree;
