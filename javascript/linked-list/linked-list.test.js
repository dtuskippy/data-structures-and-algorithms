'use strict';

// Require our linked list implementation
const LinkedList = require('./index');

describe('Linked List', () => {
  // it('works', () => {
  //   expect(true).toBeTruthy();
  // });
  it('Can successfully instantiate an empty linked list', () => {
    let list = new LinkedList();
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toBeNull();
    expect(list.head).toBeFalsy();
  });
  it('Can successfully insert a node in a linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
  });
  it('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);

    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
  });

  it('Returns true if inserted value exists as a Node’s value somewhere within the list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.includes(1)).toEqual(true);
    expect(list.includes(2)).toEqual(true);
    expect(list.includes(3)).toEqual(true);
  });
  it('Returns false if inserted value exists as a Node’s value somewhere within the list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.includes(42)).toEqual(false);
    expect(list.includes(66)).toEqual(false);
    expect(list.includes(102)).toEqual(false);
  });
  it('Returns a string string representing all the values in the Linked List, formatted as: { a } -> { b } -> { c } -> NULL', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.toString()).toEqual('{ 3 } -> { 2 } -> { 1 } -> NULL');
  });

});



