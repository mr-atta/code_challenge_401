"use strict";

const BinarySearchTree = require("../BinarySearchTree");
const Node = require("../node");

describe("BinarySearchTree test", () => {
  it("Can successfully instantiate an empty tree", () => {
    let tree = new BinarySearchTree();
    expect(tree.root).toBeNull();
  });

  it("Can successfully instantiate a tree with a single root node", () => {
    let tree = new BinarySearchTree();

    expect(tree.root).toBeNull();

    tree.add(5);

    expect(tree.root.value).toBe(5);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
    expect(tree.Contains(5)).toBe(true);
  });

  it("Can successfully add a left child and right child to a single root node", () => {
    let tree = new BinarySearchTree();
    tree.add(2);
    tree.add(5);
    tree.add(1);

    expect(tree.root.value).toBe(2);
    expect(tree.Contains(2)).toBe(true);
    expect(tree.Contains(5)).toBe(true);
    expect(tree.Contains(1)).toBe(true);

    expect(tree.root.right.value).toBe(5);
    expect(tree.root.left.value).toBe(1);
  });

  it("Can successfully return a collection from a preorder traversal", () => {
    let expextedValue = [20, 11, 3, 9, 14, 31, 62, 57, 72, 90];

    let tree = new BinarySearchTree();

    tree.add(20);
    tree.add(31);
    tree.add(11);
    tree.add(3);
    tree.add(9);
    tree.add(62);
    tree.add(57);
    tree.add(72);
    tree.add(14);
    tree.add(90);

    // console.log(">>>>>>>>>", tree.preOrder());

    expect(tree.preOrder()).toEqual(expextedValue);
  });

  it("Can successfully return a collection from an inorder traversal", () => {
    let expextedValue = [3, 9, 11, 14, 20, 31, 57, 62, 72, 90];

    let tree = new BinarySearchTree();

    tree.add(20);
    tree.add(31);
    tree.add(11);
    tree.add(3);
    tree.add(9);
    tree.add(62);
    tree.add(57);
    tree.add(72);
    tree.add(14);
    tree.add(90);

    expect(tree.inOrder()).toEqual(expextedValue);
  });

  it("Can successfully return a collection from a postorder traversal", () => {
    let expextedValue = [9, 3, 14, 11, 57, 90, 72, 62, 31, 20];

    let tree = new BinarySearchTree();

    tree.add(20);
    tree.add(31);
    tree.add(11);
    tree.add(3);
    tree.add(9);
    tree.add(62);
    tree.add(57);
    tree.add(72);
    tree.add(14);
    tree.add(90);

    expect(tree.postOrder()).toEqual(expextedValue);
  });
});
