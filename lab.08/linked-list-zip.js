"use strict";

const Node = require("./node");

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;

    /////// test num one will work here
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      /////// test num two will work here
      this.head = node;
      return this;
    }

    let currentOne = this.head;
    /////// test num three will work here
    while (currentOne.next !== null) {
      currentOne = currentOne.next;
    }
    currentOne.next = node;
    return this;
  }

  includes(val) {
    let current = this.head;
    /////// test num four will work here
    while (current.next !== null) {
      if (current.value == val) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  insert(val) {
    let node = new Node(val);
    let current;
    if (!this.head) {
      // IF !this.head OR this.head == null
      this.head = node;
      //   console.log(this.head);
      //   console.log(this.tail);
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;

      //   console.log(this.head);
      //   console.log(this.tail);
    }
    this.length++;

    return this.head;
  }

  insertBefore(value, index) {
    if (index > 0 && index > this.length) {
      // out of the range
      return;
    }

    if (index === 0) {
      // be the head
      this.head = new Node(value, index);
      return;
    }

    const node = new Node(value);
    let previousOne;
    let count = 0;
    let currentOne = this.head;

    while (count < index) {
      previousOne = currentOne;
      count++;
      currentOne = currentOne.next;
    }
    node.next = currentOne;
    previousOne.next = node;

    this.length++;
  }

  insertAfter(value, index) {
    let newInd = index + 1;
    if (newInd > 0 && newInd > this.length) {
      // out of the range
      return;
    }

    if (newInd === 0) {
      // be the head
      this.head = new Node(value, newInd);
      return;
    }

    const node = new Node(value);
    let previousOne;
    let count = 0;
    let currentOne = this.head;

    while (count < newInd) {
      previousOne = currentOne;
      count++;
      currentOne = currentOne.next;
    }
    node.next = currentOne;
    previousOne.next = node;

    this.length++;
  }

  //   kthFromEnd(k) {
  //     let count = 0;
  //     let current = this.head;

  //     let arry = [];

  //     while (current) {
  //       arry.push(current.value);
  //       current = current.next;
  //     }

  //     // console.log(arry);
  //     arry.reverse();
  //     // console.log(arry);

  //     if (k >= arry.length || k < 0) {
  //       return "out of the range";
  //     } else {
  //       console.log(arry[k]);
  //       //   console.log(k);
  //       return arry[k];
  //     }
  //   }
  //
  zipLists(l1, l2) {
    if (!l1.head && !l2.head) {
      return;
    }
    if (!l1.head) {
      return l2;
    }
    if (!l2.head) {
      return l1;
    }

    let LL = new LinkList();

    let cunt = 0;

    if (l1.length > l2.length) {
      cunt = l1.length;
    } else {
      cunt = l2.length;
    }

    LL.append(l1.head.value);
    LL.append(l2.head.value);

    let current1 = l1.head;
    let current2 = l2.head;

    for (let index = 0; index < cunt; index++) {
      /////////////////////////////////////
      if (current1.next) {
        LL.append(current1.next.value);
        current1 = current1.next;
      }
      if (current2.next) {
        LL.append(current2.next.value);
        current1 = current2.next;
      }
      //////////////////////////////////////
    }

    //////////////////////////////////////
    // console.log(current1);
    // console.log(current2);
    // console.log(LL);

    //////////////////////////////////////
    // LL.printData();
    // console.log(LL.head.value);
    // console.log(LL.head.next.value);

    return LL;
  }

  printData() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let newListLL = new LinkList();
let newListLL2 = new LinkList();

newListLL.append(5); // 5
newListLL.append(10); // 5 , 10
newListLL.append(15); // 5 , 10 , 15

newListLL2.append(1); // 5
newListLL2.append(2); // 5 , 10
newListLL2.append(3); // 5 , 10 , 15
// newListLL.kthFromEnd(1);
let newListLLLL = new LinkList();

/////////////////////

newListLLLL.zipLists(newListLL, newListLL2); // done

/////////////////////

// newListLL.printData();
// newListLL2.printData();

// console.log(newListLL);
// console.log(newListLL2);

module.exports = LinkList;
