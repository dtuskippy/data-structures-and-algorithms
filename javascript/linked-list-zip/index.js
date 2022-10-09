'use strict';

class Node {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}

function push(head, value) {
  var newNode = new Node();
  newNode.data = value;
  newNode.next = head;
  head = newNode;
  return head;
}


function zipLists(first, second) {
  var firstCurr = first, secondCurr = second;
  var firstNext, secondNext;

  while (firstCurr !== null && secondCurr !== null) {

    firstNext = firstCurr.next;
    secondNext = secondCurr.next;

    secondCurr.next = firstNext;
    firstCurr.next = secondCurr;

    firstCurr = firstNext;
    secondCurr = secondNext;
  }

  second = secondCurr;
  return second;
}


let first = null, second = null;
first = push(first, 3);
first = push(first, 2);
first = push(first, 1);
console.log('first', JSON.stringify(first));

second = push(second, 8);
second = push(second, 7);
second = push(second, 6);
second = push(second, 5);
second = push(second, 4);
console.log('second', JSON.stringify(second));

second = zipLists(first, second);
console.log('first post-merge', JSON.stringify(first));
console.log('second post-merge', JSON.stringify(second));

module.exports = { Node, push, zipLists };
