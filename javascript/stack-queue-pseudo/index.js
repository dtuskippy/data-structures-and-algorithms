'use strict';

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enQueue(value) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(value);

    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  deQueue() {
    if (this.stack1.length === 0) {
      console.log('Q is Empty');
    }

    let value = this.stack1[this.stack1.length - 1];
    this.stack1.pop();
    return value;
  }
}

let queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);

console.log(queue);
console.log(queue.deQueue());
console.log(queue);
console.log(queue.deQueue());
console.log(queue);
console.log(queue.deQueue());
console.log(queue);

module.exports = Queue;


