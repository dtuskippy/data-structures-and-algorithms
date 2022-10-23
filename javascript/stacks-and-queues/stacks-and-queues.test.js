const { Stack, Queue } = require('./index');

describe('Stack', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.top.value).toEqual(1);
  });
  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });
  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toEqual(3);
  });
  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual('Empty stack detected');
  });
  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toEqual(3);
  });
  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();

    expect(stack.isEmpty()).toEqual(true);
  });
  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();

    expect(stack.pop()).toEqual('Empty stack detected');
    expect(stack.peek()).toEqual('Empty stack detected');
  });
});

describe('Queue', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);

    expect(queue.front.value).toEqual(1);
  });
  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.back.value).toEqual(3);
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toEqual(1);
  });
  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toEqual(1);
  });
  it('Can successfully empty a stack after multiple pops', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual('Empty queue detected');
  });
  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();

    expect(queue.isEmpty()).toEqual(true);
  });
  it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();

    expect(queue.dequeue()).toEqual('Empty queue detected');
    expect(queue.peek()).toEqual('Empty queue detected');
  });
});





