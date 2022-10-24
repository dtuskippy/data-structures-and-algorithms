'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('./index');

describe('Tree', () => {
  let tree = new BinaryTree();
  let bSTree = new BinarySearchTree();

  it('Can successfully instantiate an empty tree', () => {
    expect(tree.root).toBeNull();
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    tree.root = new Node(10);

    expect(tree.root.value).toEqual(10);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });
  it('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    bSTree.add(10);
    bSTree.add(5);
    bSTree.add(13);

    expect(bSTree.root.value).toEqual(10);
    expect(bSTree.root.left.value).toEqual(5);
    expect(bSTree.root.right.value).toEqual(13);
  });
  it('Can successfully return a collection from a preorder traversal', () => {
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    expect(tree.preOrder()).toEqual([10, 5, 1, 8, 15, 17]);
  });
  it('Can successfully return a collection from an inorder traversal', () => {
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    expect(tree.inOrder()).toEqual([1, 5, 8, 10, 15, 17]);
  });
  it('Can successfully return a collection from a postorder traversal', () => {
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    expect(tree.postOrder()).toEqual([1, 8, 5, 17, 15, 10]);
  });
  it('Returns true	false for the contains method, given an existing or non-existing node value', () => {
    bSTree.add(10);
    bSTree.add(5);
    bSTree.add(13);
    bSTree.add(11);
    bSTree.add(2);
    bSTree.add(16);
    bSTree.add(7);

    expect(bSTree.contains(3)).toEqual(false);
    expect(bSTree.contains(16)).toEqual(true);
  });
});


