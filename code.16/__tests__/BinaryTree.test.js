"use strict";

const BinaryTree = require("../BinaryTree");
const Node = require("../node");

describe("trees test", () => {
  let tree = null;

  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    one.left = two;
    one.right = three;
    two.left = four;
    three.right = five;

    /*
             1
          2      3
        4           5
      
    */

    tree = new BinaryTree(one);
  });
  it("preOrder", () => {
    // root -> left -> right
    let preOrder = tree.preOrder();
    let expected = [1, 2, 4, 3, 5];
    expect(preOrder).toEqual(expected);
  });

  it("postOrder", () => {
    // left -> right -> root
    let postOrder = tree.postOrder();
    let expected = [4, 2, 5, 3, 1];
    expect(postOrder).toEqual(expected);
  });

  it("inOrder", () => {
    // left -> root -> right
    let inOrder = tree.inOrder();
    let expected = [4, 2, 1, 3, 5];
    expect(inOrder).toEqual(expected);
  });

  it("max without data ", () => {
    let tree0 = new BinaryTree();

    expect(tree0.maximumValue()).toEqual("tree is empty");
  });
  it("max with data", () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    let treeMax5 = new BinaryTree(one);

    expect(treeMax5.maximumValue()).toBe(5);
  });
});
