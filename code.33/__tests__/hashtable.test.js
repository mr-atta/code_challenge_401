"use strict";

const { LL, Hashtable } = require("../hashtable");

describe("LinkList test", () => {
  // done
  it("should create new  LinkList", () => {
    //arrange
    //act
    let testLL = new LL();

    //assert
    expect(testLL.head).toBeNull();
    expect(testLL.tail).toBeNull();
  });

  // done
  it("should add node to empty LinkList to the end", () => {
    //arrange
    const val = "first val test";
    //act
    let testLL = new LL();
    testLL.add(val);

    //assert
    expect(testLL.head.value).toBe(val);
    expect(testLL.head.next).toBeNull();
  });

  it("should add node to LinkList with data to the end", () => {
    //arrange
    //act
    let testLL = new LL();

    const val1 = "test val one";
    testLL.add(val1);

    const val2 = 5;
    testLL.add(val2);

    //assert
    expect(testLL.head.value).toBe(val1);
    expect(testLL.head.next.value).toBe(val2);

    expect(testLL.head.next.next).toBeNull();
  });

  it("should return string ", () => {
    //arrange
    //act
    let testLL = new LL();

    testLL.add(5);

    //assert
    expect(testLL.toString()).toBe("[object Object]");
  });
});

describe("Hashtable test", () => {
  it("Create Hashtable", () => {
    //arrange
    //act
    let hashTable = new Hashtable(100);
    //assert
    expect(hashTable.size).toEqual(100);
    expect(hashTable.data.length).toBe(100);
  });
  it("check Hashtable", () => {
    //arrange
    //act
    let hashTable = new Hashtable(100);
    //assert
    expect(typeof hashTable.data).toBe("object");
  });
  it("add to Hashtable", () => {
    //arrange
    let hashTable = new Hashtable(100);
    //act
    let key = "test";
    let hash = hashTable.hash(key);
    hashTable.add(key, 20);
    //assert
    expect(hashTable.data.length).toBe(100);
    expect(hashTable.data[hash]).toBeDefined();
  });
  it("returns null for a key that not exist (((get)))", () => {
    //arrange
    let hashTable = new Hashtable(50);
    //act
    let key = "123";

    //assert
    expect(hashTable.get(key)).toBe("dont have value");
  });

  it("returns null for a key that not exist (((contains)))", () => {
    //arrange
    let hashTable = new Hashtable(50);
    //act
    let key = "12";

    //assert
    expect(hashTable.contains(key)).toBe(false);
  });

  it("based on a key returns the value stored (((add,get)))", () => {
    //arrange
    let hashTable = new Hashtable(50);
    //act
    let key = "12";
    hashTable.add("F-Name", "moh");
    let result = hashTable.get("F-Name");
    //assert
    expect(result.head.value).toEqual({ "F-Name": "moh" });
  });

  it("Successfully hash multi keys (((hash)))", () => {
    //arrange
    let hashTable = new Hashtable(50);
    //act
    let key1 = "555";
    let key2 = "55";
    let key3 = "50";

    //assert
    expect(hashTable.hash(key1)).toBe(24);
    expect(hashTable.hash(key2)).toBe(43);
    expect(hashTable.hash(key3)).toBe(8);
  });
});

describe("lef Join", () => {
  let leftData;
  let rightData;
  beforeAll(() => {
    leftData = new Hashtable(1000);
    leftData.add("fond", "enamored");
    leftData.add("warth", "anger");
    leftData.add("diligent", "employed");
    leftData.add("outfit", "garb");
    leftData.add("guide", "usher");

    rightData = new Hashtable(1000);
    rightData.add("fond", "averse");
    rightData.add("warth", "delight");
    rightData.add("diligent", "idle");
    rightData.add("guide", "follow");
    rightData.add("flow", "jam");
  });

  it("Join two hashed table", () => {
    //arrange
    //act

    let hashTable = new Hashtable(10000);

    //assert
    expect(typeof hashTable.leftJoin(leftData, rightData)).toBe("object");
    expect(hashTable.leftJoin(leftData, rightData)).toEqual([
      ["fond"],
      ["enamored"],
      ["averse"],
      ["warth"],
      ["anger"],
      ["delight"],
      ["diligent"],
      ["employed"],
      ["idle"],
      ["outfit"],
      ["garb"],
      "null",
      ["guide"],
      ["usher"],
      ["follow"],
    ]);
  });
});
