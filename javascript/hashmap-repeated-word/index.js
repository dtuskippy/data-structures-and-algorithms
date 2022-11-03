'use strict';

const HashTable = require('../hash-tables');

function repeatedWord(str) {
  const ht = new HashTable();

  for (let slovo of str.split(' ')) {
    let word = slovo.toLowerCase().replace(/\W+/gi, '');

    if (!ht.has(word)) {
      ht.set(word, 1, (key, value) => value);
    } else {
      return word;
    }
  }
}



let string1 = 'I went to the store to find my dog!?!';
let string2 = 'My cats run wild through the forest and run, and run and run...';
let string3 = 'In the morning I walked down the Boulevard to the rue Soufflot for coffee and brioche. It was a fine morning. The horse-chestnut trees in the Luxembourg gardens were in bloom. There was the pleasant early-morning feeling of a hot day. I read the papers with the coffee and then smoked a cigarette. The flower-women were coming up from the market and arranging their daily stock. Students went by going up to the law school, or down to the Sorbonne. The Boulevard was busy with trams and people going to work.';


console.log('string1 -- expected \'to\': ', repeatedWord(string1));
console.log('string2 -- expected \'run\':', repeatedWord(string2));
console.log('string3: -- expected \'the\':', repeatedWord(string3));


module.exports = repeatedWord;
