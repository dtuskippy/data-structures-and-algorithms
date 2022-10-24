class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {

    let arr = [];
    const traverse = (node) => {
      arr.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return arr;
  }


  inOrder(){

    let arr = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      arr.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return arr;
  }

  postOrder(){

    let arr = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      arr.push(node.value);
    };

    traverse(this.root);
    return arr;
  }

}

class BinarySearchTree extends BinaryTree {

  add(value){
    let newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while(current){
      if(value === current.value) return undefined;
      if(value < current.value){
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if(current.right === null){
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value){
    if(this.root === null) return false;
    let current = this.root,
      found = false;
    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

console.log('TREE', JSON.stringify(tree));

// preOrder expects:  [10, 5, 1, 8, 15, 17]
console.log('preOrder', tree.preOrder());

// inOrder expects: [1, 5, 8, 10, 15, 17]
console.log('inOrder', tree.inOrder());

// postOrder expects: [1, 8, 5, 17, 15, 10]

console.log('postOrder', tree.postOrder());


let bSTree = new BinarySearchTree();
bSTree.add(10);
bSTree.add(5);
bSTree.add(13);
bSTree.add(11);
bSTree.add(2);
bSTree.add(16);
bSTree.add(7);

console.log('binary search tree', JSON.stringify(bSTree));

console.log('contains', bSTree.contains(3)); // expects false

module.exports = { Node, BinaryTree, BinarySearchTree };

