"use strict";

const FizzBuzz = require("../tree-fizz-buzz");
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

    tree = new FizzBuzz(one);
  });

  it("tree-breadth", () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    one.left = two;
    one.right = three;
    three.right = four;
    two.left = five;

    /*
             1
          2      3
        5           4
      
    */

    let tree0 = new FizzBuzz(one);

    let expected = [1, 2, 3, 5, 4];

    expect(tree0.treeBreadthFirst(one)).toEqual(expected);
  });
  it("tree-breadth", () => {
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);
    let node5 = new Node(5);
    let node6 = new Node(6);
    let node7 = new Node(7);
    let node8 = new Node(8);
    let node9 = new Node(9);
    let node10 = new Node(10);
    let node11 = new Node(11);
    let node2_7 = new Node(2);
    let node5_6 = new Node(5);

    node2.left = node7;
    node7.left = node2_7;
    node7.right = node6;

    node6.left = node5_6;
    node6.right = node11;

    node2.right = node5;

    node5.right = node9;

    node9.left = node4;

    /*
              2
           7      5
        2    6         9
            5  11     4
    */

    let tree1 = new FizzBuzz(node2);

    let expected = [2, 7, 5, 2, 6, 9, 5, 11, 4];

    expect(tree1.treeBreadthFirst(node2)).toEqual(expected);
  });
  it("fizzBuzzTree", () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    one.left = two;
    one.right = three;
    three.right = four;
    two.left = five;

    /*
             1
          2      3
        5           4
      
    */

    let tree3 = new FizzBuzz(one);

    let expected = ["1", "2", "Buzz", "Fizz", "4"];

    expect(tree3.fizzBuzzTree(one)).toEqual(expected);
  });
});
