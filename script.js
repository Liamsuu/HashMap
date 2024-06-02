class HashMap {
  constructor() {
    this.table = [...Array(16)]; // inititialize array with 16 spaces with undefined value, as it is a POWER OF 2 which is a common convention to follow.
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key) % this.table.length; // this should get a number that will act as index for a 'bucket'(which is an array of values)
    if (this.table[index] === undefined) {
      // if no collision
      this.table.splice(index, 1, [new Nodes(key, value)]); // will create a new array(bucket) at this index that will store new nodes there, and initialize it with its first node
    } else {
      this.table[index].forEach((element) => {
        // will iterate through each node object in here and will update keys value if present, or add new node to array if not.
        if (element.getKey() === key) {
          element.changeValue(value);
        } else if (
          this.table[index].indexOf(element) ===
          this.table[index].length - 1
        ) {
          this.table[index].push(new Nodes(key, value)); // this will only get run if the key was not found in the array after reaching the end
        }
      });
    }
  }

  get(key) {
    const index = this.hash(key) % this.table.length;
    if (this.table[index] === undefined) {
      return null;
    } else {
      for (const element of this.table[index]) {
        if (element.getKey() === key) {
          return element.getValue();
        }
      }
    }
    return null; // in the case that null isnt returned from an empty array, or key is found and value is returned
  }

  has(key) {
    const index = this.hash(key) % this.table.length;
    if (this.table[index] === undefined) {
      return false;
    } else {
      for (const element of this.table[index]) {
        if (element.getKey() === key) {
          return true;
        }
      }
      return false; // in the case that it reaches the end and still has not returned true meaning its not there
    }
  }

  remove(key) {
    const index = this.hash(key) % this.table.length;
    if (this.table[index] !== undefined) {
      this.table[index].forEach((element) => {
        if (element.getKey() === key) {
          this.table[index].splice(this.table[index].indexOf(element), 1);
          if (this.table[index].length === 0) {
            this.table.splice(index, 1, undefined);
          }
        }
      });
    }
  }

  length() {
    let keyCount = 0;

    this.table.forEach((bucket) => {
      if (bucket !== undefined) {
        bucket.forEach((node) => {
          if (node.getKey() !== null) {
            keyCount += 1;
          }
        });
      }
    });

    return keyCount;
  }

  clear() {
    this.table.forEach((bucket) => {
      if (bucket !== undefined) {
        this.table.splice(this.table.indexOf(bucket), 1, undefined);
      }
    });
  }

  keys() {
    let keyArr = [];
    this.table.forEach((bucket) => {
      if (bucket !== undefined) {
        bucket.forEach((node) => {
          if (node.getKey() !== null) {
            keyArr.push(node.getKey());
          }
        });
      }
    });
    return keyArr;
  }

  values() {
    let valueArr = [];
    this.table.forEach((bucket) => {
      if (bucket !== undefined) {
        bucket.forEach((node) => {
          if (node.getValue() !== null) {
            valueArr.push(node.getValue());
          }
        });
      }
    });
    return valueArr;
  }

  entries() {
    let entryArr = [];
    this.table.forEach((bucket) => {
      if (bucket !== undefined) {
        bucket.forEach((node) => {
          if (node.getKey() !== null) {
            entryArr.push([node.getKey(), node.getValue()]);
          }
        });
      }
    });
    return entryArr;
  }
}

class Nodes {
  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
  }

  getKey() {
    return this.key;
  }

  getValue() {
    return this.value;
  }

  changeValue(newValue) {
    this.value = newValue;
  }
}
