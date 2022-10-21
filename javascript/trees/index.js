'use strict';

const { NodeWithChildren } = require("domhandler");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// class KaryNode {
//   constructor(value, k) {
//     this.value = value;
//     this.k = k;
//     // in javascript this WORKS!
//     //K: a number that specifies the max number of children any node may have in a k-ary tree. In a binary tree, k = 2.
//     this.children = [];
//     // other languages maybe - also, this is valid JavaScript below
//     // this.children = new Array(k).fill(null);
//   }
// }

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {

    const traverse = (node) => {

      // base case (recursion)
      console.log(node.value);
      // checks left / right -- eject if no left / right node
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    // calls itself (recursion)
    traverse(this.root);
  }

  inOrder(){

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      console.log(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
  }

  postOrder(){

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      console.log(node.value);
    };

    traverse(this.root);
  }

}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

// expect console logs in specific order:  10, 5, 1, 8, 15, 17
console.log('-----Pre-order-----');
tree.preOrder();

// expect output of 1, 5, 8, 10, 15, 17
console.log('-----In-order-----');
tree.inOrder();

// expect output of 1, 8, 5, 17, 15, 10
console.log('-----Post-order-----');
tree.postOrder();

console.log('---sumOdd---');
tree.sumOdd();


module.exports = { Node, BinaryTree};
