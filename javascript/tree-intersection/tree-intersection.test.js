'use strict';

const { tree_intersection, Node, BinaryTree } = require('./tree-intersection.js');

describe('Tree Intersection Test', () => {

  it('Can successfully return a set of values found in both trees', () => {
    let tree1 = new BinaryTree();
    tree1.root = new Node(10);
    tree1.root.left = new Node(5);
    tree1.root.right = new Node(15);
    tree1.root.left.left = new Node(1);
    tree1.root.left.right = new Node(8);
    tree1.root.right.right = new Node(17);

    let tree2 = new BinaryTree();
    tree2.root = new Node(30);
    tree2.root.left = new Node(5);
    tree2.root.right = new Node(15);
    tree2.root.left.left = new Node(2);
    tree2.root.left.right = new Node(9);
    tree2.root.right.right = new Node(18);

    expect(tree_intersection(tree1, tree2)).toEqual([5, 15]);
  });

  it('Can successfully return a set of values found in both trees', () => {
    let tree1 = new BinaryTree();
    tree1.root = new Node(100);
    tree1.root.left = new Node(7);
    tree1.root.right = new Node(35);
    tree1.root.left.left = new Node(21);
    tree1.root.left.right = new Node(9);
    tree1.root.right.right = new Node(33);

    let tree2 = new BinaryTree();
    tree2.root = new Node(6);
    tree2.root.left = new Node(35);
    tree2.root.right = new Node(105);
    tree2.root.left.left = new Node(12);
    tree2.root.left.right = new Node(96);
    tree2.root.right.right = new Node(7);

    expect(tree_intersection(tree1, tree2)).toEqual([35,7]);
  });

  it('Can successfully return a set of values found in both trees', () => {
    let tree1 = new BinaryTree();
    tree1.root = new Node(100);
    tree1.root.left = new Node(50);
    tree1.root.right = new Node(200);
    tree1.root.left.left = new Node(25);
    tree1.root.left.right = new Node(75);
    tree1.root.right.right = new Node(155);

    let tree2 = new BinaryTree();
    tree2.root = new Node(49);
    tree2.root.left = new Node(73);
    tree2.root.right = new Node(303);
    tree2.root.left.left = new Node(75);
    tree2.root.left.right = new Node(11);
    tree2.root.right.right = new Node(8);

    expect(tree_intersection(tree1, tree2)).toEqual([75]);
  });
});
