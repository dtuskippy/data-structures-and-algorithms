'use strict';

const leftJoin   = require('./index');
const HashTable = require('../hash-tables');

describe('LeftJoin function tests', () => {

  it('Successfully combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic', () => {

    const ht1 = new HashTable();
    const ht2 = new HashTable();

    ht1.set('diligent', 'employed');
    ht1.set('fond', 'enamored');
    ht1.set('guide', 'usher');
    ht1.set('wrath', 'anger');
    ht2.set('diligent', 'idle');
    ht2.set('fond', 'averse');
    ht2.set('guide', 'follow');
    ht2.set('wrath', 'delight');

    expect(leftJoin(ht1, ht2)).toEqual([['guide', 'usher', 'follow'],['fond', 'enamored', 'averse' ],['diligent', 'employed', 'idle'],['wrath', 'anger', 'delight']]);
  });
  it('Successfully appends NULL to result row if no values exist in the right hashmap', () => {
    const ht1 = new HashTable();
    const ht2 = new HashTable();

    ht1.set('diligent', 'employed');
    ht1.set('fond', 'enamored');
    ht1.set('guide', 'usher');
    ht1.set('wrath', 'anger');
    ht2.set('diligent', 'idle');
    ht2.set('fond', 'averse');
    ht2.set('guide', null);
    ht2.set('wrath', null);


    expect(leftJoin(ht1, ht2)).toEqual([['guide', 'usher', null],['fond', 'enamored', 'averse' ],['diligent', 'employed', 'idle'],['wrath', 'anger', null]]);


  });
  it('Using new input tables, successfully combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic', () => {

    const ht3 = new HashTable();
    const ht4 = new HashTable();

    ht3.set('smart', 'clever');
    ht3.set('nice', 'pleasing');
    ht3.set('cold', 'chilled');
    ht4.set('smart', 'clueless');
    ht4.set('nice', 'mean');
    ht4.set('cold', 'boiling');

    expect(leftJoin(ht3, ht4)).toEqual([['nice', 'pleasing', 'mean'],['cold', 'chilled', 'boiling'],['smart','clever','clueless']]);

  });

});



