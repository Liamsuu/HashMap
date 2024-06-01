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
      this.table.splice(index, 0, [new Nodes(key, value)]); // will create a new array(bucket) at this index that will store new nodes there, and initialize it with its first node
    } else {
      this.table[index].forEach(element => {
        // will iterate through each node object in here and will update keys value if present, or add new node to array if not.
        if(element.getKey() === key){
          element.changeValue(value);
        }
        else if(this.table.indexOf(element) === this.table.length - 1){
          this.table[index].push(new Nodes(key, value)); // this will only get run if the key was not found in the array after reaching the end
        }
      });
      
    }
  }
}

class Nodes {
  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
  }

  getKey(){
    return this.key;
  }

  getValue(){
    return this.value;
  }

  changeValue(newValue){\
    this.value = newValue;
  }
}