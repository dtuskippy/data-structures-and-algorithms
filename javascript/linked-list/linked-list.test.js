'use strict';

const LinkedList = require('./index');

describe('Linked List', () => {
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
  it('Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.append(16);

    // eslint-disable-next-line quotes
    expect(JSON.stringify(list)).toEqual("{\"head\":{\"value\":3,\"next\":{\"value\":2,\"next\":{\"value\":1,\"next\":{\"value\":16,\"next\":null}}}}}");
  });
  it('Can successfully add multiple nodes to the end of the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.append(16);
    list.append(17);
    list.append(18);

    // eslint-disable-next-line quotes
    expect(JSON.stringify(list)).toEqual("{\"head\":{\"value\":3,\"next\":{\"value\":2,\"next\":{\"value\":1,\"next\":{\"value\":16,\"next\":{\"value\":17,\"next\":{\"value\":18,\"next\":null}}}}}}}");
  });

});


// Can successfully insert a node before a node located i the middle of a linked list
// Can successfully insert a node before the first node of a linked list
// Can successfully insert after a node in the middle of the linked list
// Can successfully insert a node after the last node of the linked list

