'use strict';

const Queue = require('./index');

describe('Queue', () => {
  it('Will insert multiple values into stack with enqueue method', () => {
    let queue = new Queue();
    queue.enQueue(1);
    queue.enQueue(2);
    queue.enQueue(3);
    // eslint-disable-next-line quotes
    expect(queue).toEqual({"stack1": [3, 2, 1], "stack2": []});
  });
  it('Will remove multiple from stack with dequeue method', () => {
    let queue = new Queue();
    queue.enQueue(1);
    queue.enQueue(2);
    queue.enQueue(3);
    // eslint-disable-next-line quotes
    expect(queue).toEqual({"stack1": [3, 2, 1], "stack2": []});
    queue.deQueue();
    // eslint-disable-next-line quotes
    expect(queue).toEqual({"stack1": [3, 2], "stack2": []});
    queue.deQueue();
    // eslint-disable-next-line quotes
    expect(queue).toEqual({"stack1": [3], "stack2": []});
    queue.deQueue();
    // eslint-disable-next-line quotes
    expect(queue).toEqual({"stack1": [], "stack2": []});
  });
});





