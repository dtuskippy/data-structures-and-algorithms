/* eslint-disable quotes */
'use strict';

const HashTable = require('./index');

describe('Hash Table', () => {
  let ht = new HashTable(11);

  ht.set('hvezda', 'praha');
  ht.set('liberec', 'tygri');
  ht.set('brno', 'kometa');
  ht.set('plzen', 'skoda');
  ht.set('vitkovice', 'ridera');
  ht.set('chomutov', 'pirati');
  ht.set('zlin', 'berani');
  ht.set('kladno', 'rytiri');

  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    expect(ht.has('brno')).toEqual(true);
  });
  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(ht.has('zbraslav')).toEqual(null);
  });
  it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    expect(ht.keys()).toEqual(['kladno','zlin','chomutov','plzen','vitkovice','liberec','hvezda','brno']);
  });
  it('Retrieving based on a key returns the value stored', () => {
    expect(ht.get('zlin')).toEqual('berani');
  });
  it('Successfully hash a key to an in-range value', () => {
    let newHash = ht.hash('zbraslav');

    expect(newHash).toBeGreaterThanOrEqual(0);
    expect(newHash).toBeLessThanOrEqual(11);
  });
  it('Successfully handle a collision within the hashtable', () => {
    expect(ht.hash('hvezda')).toEqual(ht.hash('brno'));

  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(ht.get('brno')).toEqual('kometa');
  });

});



