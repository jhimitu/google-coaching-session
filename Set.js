// [2] Implement a set-like data structure that supports Insert, Remove, and GetRandomElement efficiently.
// Example: If you insert the elements 1, 3, 6, 8 and remove 6, the structure should contain [1, 3, 8].
// Now, GetRandom should return one of 1, 3 or 8 with equal probability.

class Set {
  constructor() {
    this.storage = {};
  }

  insert(value) {
    if (!this.storage.hasOwnProperty(value)) {
      this.storage[value] = true;
    }
  }

  remove(value) {
    if (this.storage.hasOwnProperty(value)) {
      delete this.storage[value];
    } else {
      return 'Not an item';
    }
  }

  getRandomElement() {
    let keys = Object.keys(this.storage);
    return keys[Math.floor(Math.random() * keys.length)];
  }
}

let set = new Set();
set.insert(2);
set.insert(5);
set.insert(3);
set.getRandomElement();
console.log(set.getRandomElement());