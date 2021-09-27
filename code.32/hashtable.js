"use strict";

// Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List
class LL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // add to last
  add(value) {
    // input : take value
    // output : none

    // create new node
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    // pointer
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size += 1;
  }

  //is empty ?
  isempty() {
    return this.size == 0;
  }

  //length
  lengthlist() {
    return this.size;
  }

  values() {
    // return the all data in the LL as array

    let allData = [];

    // pointer
    let current = this.head;
    while (current) {
      allData.push(current.value);
      current = current.next;
    }
    return allData;
  }
}

// Hashtable
class Hashtable {
  constructor(size) {
    this.size = size;
    this.data = new Array(size);
  }

  add(key, value) {
    // Arguments: key, value
    // Returns: nothing
    // This method should hash the key, and add the key and value pair to the table, handling collisions as needed.

    // call hash method with key
    let indx = this.hash(key);

    if (!this.data[indx]) {
      // if we dont have any in data[indx] >> create new LL
      this.data[indx] = new LL();
    }

    // we need to make sure that the key is unique

    // add the pair to the data by LL method add
    let bucket = { [key]: value };
    this.data[indx].add(bucket);
  }

  get(key) {
    // Arguments: key
    // Returns: Value associated with that key in the table

    // call hash method with key
    let indx = this.hash(key);

    //check
    if (!this.data[indx]) {
      return "dont have value";
    } else {
      // return the value of the key
      return this.data[indx];
      //.findOne({ indx })
    }
  }

  contains(key) {
    // Arguments: key
    // Returns: Boolean, indicating if the key exists in the table already.

    // call hash method with key
    let indx = this.hash(key);

    //check
    if (!this.data[indx]) {
      // return f
      return false;
    } else {
      // return t
      return true;
    }
  }

  hash(key) {
    // Arguments: key
    // Returns: hash

    // take the  key >> split to char
    // reduce with start 3 (prime numbers) + ASCII code * prime number then >> % size to be in the rang
    let hash =
      (key.split("").reduce((acc, char) => {
        return acc + char.charCodeAt(0);
      }, 3) *
        977) %
      this.size;

    return hash;
  }

  // challenge 32

  hashmapTreeIntersection(tree1, tree2) {
    if (!tree1.root && !tree2.root) {
      return "dont have trees";
    } else {
      // we have trees
      let count = 0;
      let hash, key;
      let result = [];

      const traverseTree = (node) => {
        // save the value in the key
        key = node.value;
        console.log({ key });
        console.log(typeof key);

        console.log({ count });

        // call add method with the key
        // the node.value will added to the Hashtable
        // shoul be in arrow function
        this.add(key, "none");

        if (count > 0) {
          // after call the fun with root for tree 2 the count will be more than 0

          if (typeof key == number) {
            //save key in the hash
            hash = key;
            // console.log(">>>>>>>>>>>>>>>>>>>>>>>>");
          } else {
            // console.log("ooooooooooooooooooo");
            // call hash method with key
            // console.log({ key });
            this.hash(key);
          }

          if (this.data[hash].head.next) {
            // if we have next to the data[hash] 'two node' >>> common
            // push hash to result
            result.push(hash);
          }
        }
        // if we have left call the fun again with left value to add them to Hashtable
        if (node.left) {
          traverseTree(node.left);
        }
        // if we have right call the fun again with right value to add them to Hashtable
        if (node.right) {
          traverseTree(node.right);
        }
      };
      // call the fun with root for tree 1
      traverseTree(tree1.root);
      // increase the count
      count++;
      // call the fun with root for tree 2
      traverseTree(tree2.root);

      // return the result
      return result;
    }
  }
}

module.exports = { Node, LL, Hashtable };
