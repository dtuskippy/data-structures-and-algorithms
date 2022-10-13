'use strict';

const { Node, BinaryTree } = require('./index');

describe('Tree', () => {
  it('It will traverse the tree in a root -> left -> right order', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    tree.preOrder();
    expect(tree).toEqual(10, 5, 1, 8, 15, 17);
  });
  // it('Will remove multiple from stack with dequeue method', () => {
  //   let queue = new Queue();
  //   queue.enQueue(1);
  //   queue.enQueue(2);
  //   queue.enQueue(3);
  //   // eslint-disable-next-line quotes
  //   expect(queue).toEqual({"stack1": [3, 2, 1], "stack2": []});
  //   queue.deQueue();
  //   // eslint-disable-next-line quotes
  //   expect(queue).toEqual({"stack1": [3, 2], "stack2": []});
  //   queue.deQueue();
  //   // eslint-disable-next-line quotes
  //   expect(queue).toEqual({"stack1": [3], "stack2": []});
  //   queue.deQueue();
  //   // eslint-disable-next-line quotes
  //   expect(queue).toEqual({"stack1": [], "stack2": []});
  // });
});
