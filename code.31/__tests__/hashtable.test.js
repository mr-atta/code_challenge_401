"use strict";

const { Node, LL, Hashtable } = require("../hashtable");

describe("test Node", () => {
  it("should create new node and the next will be null", () => {
    //arrange
    const value = "somthing";

    //act
    let node = new Node(value);

    //assert
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});

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
//hashmapRepeatedWord
describe("test hashmapRepeatedWord", () => {
  it("hashmapRepeatedWord 1 ", () => {
    //arrange

    let hashTable = new Hashtable(50);

    const value = "Once upon a time, there was a brave princess who...";

    //act

    //assert
    expect(hashTable.hashmapRepeatedWord(value)).toEqual("a");
  });
  it("hashmapRepeatedWord 2 ", () => {
    //arrange

    let hashTable = new Hashtable(50);

    const value2 =
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";

    //act

    //assert
    expect(hashTable.hashmapRepeatedWord(value2)).toEqual("it");
  });
  it("hashmapRepeatedWord 3 ", () => {
    //arrange

    let hashTable = new Hashtable(50);

    const value3 =
      "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";

    //act

    //assert

    expect(hashTable.hashmapRepeatedWord(value3)).toEqual("summer");
  });
  it("hashmapRepeatedWord 4 ", () => {
    //arrange

    let hashTable = new Hashtable(50);

    const value = "Once upon  time, there was a brave asad who";

    //act

    //assert
    expect(hashTable.hashmapRepeatedWord(value)).toEqual("dont haves the word");
  });
});
