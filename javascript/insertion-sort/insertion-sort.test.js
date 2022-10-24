'use strict';

const insertionSort = require('./index');

describe('Tree', () => {
  it('Can successfully sort an unsorted array with insertion', () => {

    expect(insertionSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);

  });

});
