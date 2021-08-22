"use strict";

const LinkList = require("./linked-list-insertions");

describe("LinkList test", () => {
  // done
  it("should create new  LinkList", () => {
    //arrange
    //act
    let testLL = new LinkList();

    //assert
    expect(testLL.head).toBeNull();
    expect(testLL.tail).toBeNull();
  });

  // done
  it("should add node to empty LinkList to the end", () => {
    //arrange
    const val = "first val test";
    //act
    let testLL = new LinkList();
    testLL.append(val);

    //assert
    expect(testLL.head.value).toBe(val);
    expect(testLL.head.next).toBeNull();
  });

  // done
  it("should add node to LinkList with data to the end", () => {
    //arrange
    //act
    let testLL = new LinkList();

    const val1 = "test val one";
    testLL.append(val1);

    const val2 = 5;
    testLL.append(val2);

    //assert
    expect(testLL.head.value).toBe(val1);
    expect(testLL.head.next.value).toBe(val2);

    expect(testLL.head.next.next).toBeNull();
  });

  // before  // done
  it("should add node to LinkList with data before index", () => {
    //arrange
    //act
    let testLL = new LinkList();

    const val1 = 5;
    testLL.append(val1);
    const val2 = 10;
    testLL.append(val2);
    const val3 = 7;
    testLL.insertBefore(val3, 1);

    //assert
    expect(testLL.head.value).toBe(val1);
    expect(testLL.head.next.value).toBe(val3);
    expect(testLL.head.next.next.value).toBe(val2);
  });

  it("should add node to LinkList with data after index", () => {
    //arrange
    //act
    let testLL = new LinkList();

    const val1 = 5;
    testLL.append(val1);
    const val2 = 10;
    testLL.append(val2);
    const val3 = 7;
    testLL.insertAfter(val3, 0);

    //assert
    expect(testLL.head.value).toBe(val1);
    expect(testLL.head.next.value).toBe(val3);
    expect(testLL.head.next.next.value).toBe(val2);
  });
});
