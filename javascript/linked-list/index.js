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



module.exports = LinkedList;

// Within your Linked List class, include a head property.
// Upon instantiation, an empty Linked List should be created.
// insertions
// The class should contain the following methods

// insert
// Arguments: value
// Returns: nothing
// Adds a new node with that value to the head of the list with an O(1) Time performance.

// includes
// Arguments: value
// Returns: Boolean
// Indicates whether that value exists as a Node’s value somewhere within the list.

// to string
// Arguments: none
// Returns: a string representing all the values in the Linked List, formatted as:
// "{ a } -> { b } -> { c } -> NULL"
