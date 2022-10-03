'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;

  }

  includes(value) {

    // let result = false;

    let current = this.head;
    while(current){
      if(current.value === value) {
        return true;
      }

      current = current.next;
    }
    return false;

    // return result;
  }

  toString() {
    let string = '';

    let current = this.head;
    while(current){
      string += `{ ${current.value} } -> `;
      current = current.next;
    }

    string += 'NULL';

    return string;
  }

  append(value) {
    let newNode = new Node(value);

    if(!this.head){
      this.head = newNode;
      return;
    }

    let current = this.head;

    while(current.next){
      current = current.next;
    }
    current.next = newNode;

  }

  insertBefore(value, newValue) {
    if(!this.head){
      throw new Error('Linked List is Empty');
    }

    if (this.head.value === value){
      this.insert(newValue);
      return;
    }

    let current = this.head;

    while(current){
      if(current.next && current.next.value === value) {
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        current = current.next.next;
      } else {
        current = current.next;
      }
    }

  }

  insertAfter(value, newValue) {
    if(!this.head){
      throw new Error('Linked List is Empty');
    }

    // if (this.head.value === value){
    //   this.insert(newValue);
    //   return;
    // }

    let current = this.head;

    while(current){
      if(current && current.value === value) {
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        current = current.next.next;
      } else {
        current = current.next;
      }
    }

  }


}


let list = new LinkedList();
console.log('empty list', list);

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);

console.log('populated list', list);

let includes = list.includes(2);
console.log('includes test', includes);

console.log('To string', list.toString());

list.append(16);
list.append(16);
list.append(17);
list.append(18);
console.log('Append', JSON.stringify(list));

list.insertBefore(5, 25);
console.log('insertBefore', JSON.stringify(list));

list.insertAfter(2, 33);
console.log('insertAfter', JSON.stringify(list));




module.exports = LinkedList;




// insert after
// arguments: value, new value
// adds a new node with the given new value immediately after the first node that has the value specified
