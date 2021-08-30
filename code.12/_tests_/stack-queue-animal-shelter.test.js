"use strict";

const { Animal, AnimalShelter } = require("../stack-queue-animal-shelter");

describe("animal shelter", () => {
  test("enqueue dog", () => {
    //arrange
    //act
    let test = new AnimalShelter();
    let dog = new Animal("dog");

    test.enqueue(dog);

    //assert
    expect(test.dog.size).toEqual(1);
  });

  test("dequeue dog", () => {
    //arrange
    //act
    let test = new AnimalShelter();
    let dog = new Animal("dog");
    let dog2 = new Animal("dog");
    test.enqueue(dog);
    test.enqueue(dog2);

    test.dequeue(dog2);

    //assert
    expect(test.dog.size).toEqual(1);
  });

  test("enqueue cat", () => {
    //arrange
    //act
    let test = new AnimalShelter();
    let cat = new Animal("cat");

    test.enqueue(cat);

    //assert
    expect(test.cat.size).toEqual(1);
  });

  test("dequeue cat", () => {
    //arrange
    //act
    let test = new AnimalShelter();
    let cat = new Animal("cat");
    let cat1 = new Animal("cat");

    test.enqueue(cat);
    test.enqueue(cat1);
    test.dequeue(cat1);

    //assert
    expect(test.cat.size).toEqual(1);
  });

  test(" enqueue not cat or dog", () => {
    //arrange
    //act
    let test = new AnimalShelter();
    let lizerd = new Animal("lizerd");

    //assert
    expect(test.enqueue(lizerd)).toEqual("must be dog or cat ");
  });

  test(" dequeue not cat or dog", () => {
    //arrange
    //act
    let test = new AnimalShelter();
    let lizerd = new Animal("lizerd");

    //assert
    expect(test.dequeue(lizerd)).toEqual(null);
  });
});
