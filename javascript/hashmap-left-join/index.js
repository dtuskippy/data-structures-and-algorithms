'use strict';

const HashTable = require('../hash-tables');


function leftJoin(hashTable1, hashTable2){
  let resultArr = [];
  let container = hashTable1.keys();
  let container2 = hashTable2.keys();
  for(let i = 0; i < container.length; i++) {
    let tempArr = [];
    tempArr.push(container[i]);
    tempArr.push(hashTable1.get(container[i]));
    if(!hashTable2.get(container2[i])){
      tempArr.push(null);
    } else {
      tempArr.push(hashTable2.get(container2[i]));
    }
    resultArr.push(tempArr);
  }
  return resultArr;
}


const ht3 = new HashTable();
const ht4 = new HashTable();

ht3.set('smart', 'clever');
ht3.set('nice', 'pleasing');
ht3.set('cold', 'chilled');
ht4.set('smart', 'clueless');
ht4.set('nice', 'mean');
ht4.set('cold', 'boiling');


// const ht1 = new HashTable();
// const ht2 = new HashTable();

// ht1.set('diligent', 'employed');
// ht1.set('fond', 'enamored');
// ht1.set('guide', 'usher');
// ht1.set('wrath', 'anger');
// ht2.set('diligent', 'idle');
// ht2.set('fond', 'averse');
// ht2.set('guide', 'follow');
// ht2.set('wrath', 'delight');


// console.log(ht1.keys());
// console.log(ht2.get('wrath'));
console.log(leftJoin(ht3, ht4));



module.exports = leftJoin;

