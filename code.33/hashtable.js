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

  // challenge 33
  leftJoin(left, right) {
    let result = [];
    // loop throw the length of left data
    for (let i = 0; i < left.data.length; i++) {
      if (left.data[i]) {
        // if we have left.data[i]
        // save his key avd value  (Object.)
        const left_Key = Object.keys(left.data[i].head.value);
        const left_Value = Object.values(left.data[i].head.value);

        // push the key and the value to the array
        result.push(left_Key);
        result.push(left_Value);

        if (right.data[i]) {
          // if we have left.data[i]
          // save his key avd value  (Object.)
          const right_Key = Object.keys(right.data[i].head.value);
          const right_Value = Object.values(right.data[i].head.value);

          if (right_Key[0] === left_Key[0]) {
            // push the key to the array
            result.push(right_Value);
          }
        } else {
          // dont have left or right ()
          result.push("null");
        }
      }
    }
    // return the result (array of array)
    return result;
  }
}

module.exports = { Node, LL, Hashtable };
