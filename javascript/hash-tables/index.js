'use strict';

class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);

  }

  hash(key) {
    let total = 0;
    let prime = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;

  }

  set(key, value) {
    let index = this.hash(key);
    if(!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this.hash(key);
    if(this.keyMap[index]) {
      for(let i = 0; i < this.keyMap[index].length; i++) {
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  has(key) {
    let index = this.hash(key);
    if(this.keyMap[index]) {
      return true;
    } else {
      return null;
    }
  }

  keys() {
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          if(!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1]);
          }

        }

      }
    }
    return valuesArr;
  }

}

let ht = new HashTable(11);
ht.set('hvezda', 'praha');
ht.set('liberec', 'tygri');
ht.set('brno', 'kometa');
ht.set('plzen', 'skoda');
ht.set('vitkovice', 'ridera');
ht.set('chomutov', 'pirati');
ht.set('zlin', 'berani');
ht.set('kladno', 'rytiri');


console.log(ht);
console.log('get vitkovice', ht.get('vitkovice'));
console.log('keys', ht.keys());
console.log('values', ht.values());
console.log('true', ht.has('zlin'));
console.log('false', ht.has('gizmo'));
console.log('hash', ht.hash('zbraslav'));
console.log('hash', ht.hash('hvezda'));
console.log('hash', ht.hash('brno'));

module.exports = HashTable;
