'use strict';

const HashTable = require('../hash-tables');
const { Node, BinaryTree } = require('../trees');

function insert(node, treeHT) {
  if (node) {
    treeHT.set(node.value.toString(), node.value);
    insert(node.left, treeHT);
    insert(node.right, treeHT);
  }
  return;
}

function detectHit(node, treeTable, set) {
  if (node) {
    if (treeTable.get(node.value.toString())) {
      set.push(node.value);
    }
    detectHit(node.left, treeTable, set);
    detectHit(node.right, treeTable, set);
  }
  return;
}

function tree_intersection(treeOne, treeTwo){
  let ht = new HashTable(97);
  let interArr = [];
  insert(treeOne.root, ht);
  detectHit(treeTwo.root, ht, interArr);
  return interArr;
}


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


console.log('Tree intersection: ', tree_intersection(tree1, tree2));



module.exports = { tree_intersection, HashTable, Node, BinaryTree };












