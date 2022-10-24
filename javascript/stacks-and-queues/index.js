'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;

  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if(this.top !== null){
      let popNode = this.top;
      this.top = this.top.next;
      popNode.next = null;

      return popNode.value;

    } else {
      return 'Empty stack detected';
    }
  }

  peek() {
    if(this.top !== null) {
      return this.top.value;
    } else {
      return 'Empty stack detected';
    }
  }

  isEmpty() {
    return this.top === null;
  }
}


class Queue {
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value) {

    let newNode = new Node(value);
    if(this.front){
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue() {
    if(this.front !== null){
      let dqNode = this.front;
      this.front = this.front.next;
      dqNode.next = null;

      return dqNode.value;

    } else {
      return 'Empty queue detected';
    }
  }

  peek() {
    if(this.front !== null) {
      return this.front.value;
    } else {
      return 'Empty queue detected';
    }

  }

  isEmpty() {
    return this.front === null;
  }

}


let stack = new Stack();
console.log('Empty stack: ', JSON.stringify(stack));

stack.push(1);
stack.push(2);
stack.push(3);


console.log('Populated stack: ', stack);
console.log('pop: ', stack.pop());
console.log('peek: ', stack.peek());
console.log('isEmpty: ', stack.isEmpty());

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log('queue: ', queue);
console.log('peek: ', queue.peek());
console.log('isEmpty: ', queue.isEmpty());
console.log('dequeue: ', queue.dequeue());

module.exports = { Stack, Queue };


