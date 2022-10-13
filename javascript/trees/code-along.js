'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    // in javascript this WORKS!
    this.children = [];
    // other languages maybe - also, this is valid JavaScript below
    // this.children = new Array(k).fill(null);
  }
}


class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {  // THIS TRAVERSAL - learn to traverse like you learned linked list... MUSCLE MEMORY

    // recursive helper function //will be root node first time we call it, and traverse over left and then right
    const traverse = (node) => {
      // THIS IS THE BASE CASE - DO THE THING
      console.log(node.value);
      // for us, it will be array push -

      // RECURSIVE cases  ONE WAY
      // looks left if there is left node and serves as an "eject" if no left node exists
      if (node.left) {
        traverse(node.left);
      }
      // looks right if there is right node and serves as an "eject" if no right node exists
      if (node.right) {
        traverse(node.right);
      }

      // // recursive cases  ANOTHER WAY
      // if (node.left) traverse(node.left);
      // if (node.right) traverse(node.right);
    }

    // start the recursive "party"
    traverse(this.root);
  }

  inOrder(){

    // define recursive function
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      // do thing IN ORDER
      console.log(node.value);
      if (node.right) traverse(node.right);
    }
    // get the recursive party started
    traverse(this.root);
  }

  postOrder(){

    // define recursive function
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      // do thing IN ORDER

      if (node.right) traverse(node.right);
      console.log(node.value);
    }

    // get the recursive party started
    traverse(this.root);
  }
}


let tree = new BinaryTree();

tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
// tree.root.right.left = null; doesn't define this for some reason
tree.root.right.right = new Node(17);

//IMPORTANT POINT TO POINT OUT -- ORDER ABOVE IS DIFFERENT THAN PRE-ORDER METHOD -- compare above/log follows:
// 10/10
// 5/5
// 15/1
// 1/8
// 8/15
// 17/17

tree.preOrder();
console.log('-------------------')
tree.inOrder();
console.log('-------------------')
tree.postOrder();

// console.log(JSON.stringify(tree));


