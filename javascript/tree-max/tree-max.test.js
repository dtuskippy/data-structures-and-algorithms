'use strict';

const { Node, BinaryTree } = require('./index');

describe('Tree', () => {
  let tree = new BinaryTree();

  it('Can successfully return the maximum value stored in the tree', () => {
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    expect(tree.treeMax()).toEqual(17);
  });
});

