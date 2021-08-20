"use strict";

const LinkList = require("./linked-list");

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

  //done
  it("should return Boolean ", () => {
    //arrange
    //act
    let testLL = new LinkList();

    testLL.insert(5);
    testLL.append(5);

    //assert
    expect(testLL.includes(5)).toBe(true);
    expect(testLL.includes(2)).toBe(false);
  });

  //done
  it("should return string ", () => {
    //arrange
    //act
    let testLL = new LinkList();

    testLL.insert(5);
    testLL.append(5);

    //assert
    expect(testLL.toString()).toBe("{5} ->{5} ->null");
  });
});
