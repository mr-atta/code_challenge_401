"use strict";

const Animal = require("./node");
const Queue = require("./queue");

class AnimalShelter {
  constructor() {
    this.cat = new Queue();
    this.dog = new Queue();
  }

  // enqueue
  enqueue(Animal) {
    if (Animal.kind === "dog") {
      //
      this.dog.enqueue(Animal);
      return this.dog;
    } else if (Animal.kind === "cat") {
      //
      this.cat.enqueue(Animal);
      return this.cat;
    } else {
      //
      return "must be dog or cat ";
    }
  }

  // dequeue
  dequeue(pref) {
    if (pref.kind === "dog") {
      //
      this.dog.dequeue(pref);
    } else if (pref.kind === "cat") {
      //
      this.cat.dequeue(pref);
    } else {
      //
      return null;
    }
  }
}

let test = new AnimalShelter();

let cat = new Animal("cat");
let dog = new Animal("dog");

// console.log(test.enqueue(dog));
// console.log(test.enqueue(cat));

// console.log(test);

module.exports = { Animal, AnimalShelter };
