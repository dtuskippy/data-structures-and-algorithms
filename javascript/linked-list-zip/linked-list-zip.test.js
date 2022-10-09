'use strict';

'use strict';

const { push, zipLists } = require('./index');

describe('Zip Lists', () => {
  it('Will zip two linked lists', () => {
    let first = null, second = null;
    first = push(first, 3);
    first = push(first, 2);
    first = push(first, 1);

    second = push(second, 8);
    second = push(second, 7);
    second = push(second, 6);
    second = push(second, 5);
    second = push(second, 4);
    second = zipLists(first, second);

    // eslint-disable-next-line quotes
    expect(first).toEqual({"data":1,"next":{"data":4,"next":{"data":2,"next":{"data":5,"next":{"data":3,"next":{"data":6,"next":null}}}}}});
    // eslint-disable-next-line quotes
    expect(second).toEqual({"data":7,"next":{"data":8,"next":null}});
  });

});










