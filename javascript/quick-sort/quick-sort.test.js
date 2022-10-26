'use strict';

const quickSort = require('./index');

describe('quickSort', () => {
  it('Can successfully sort an unsorted array with quick sort', () => {

    expect(quickSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);

  });

});
