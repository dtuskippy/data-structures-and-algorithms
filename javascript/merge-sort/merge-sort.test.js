'use strict';

const mergeSort = require('./index');

describe('mergeSort', () => {
  it('Can successfully sort an unsorted array with merge sort', () => {

    expect(mergeSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);

  });

});
