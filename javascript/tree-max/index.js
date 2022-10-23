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

  treeMax() {

    if (!this.root) {
      throw new Error('Empty tree');
    }

    let temp = new Node(this.root.value);

    const traverse = (node) => {
      if (node.value > temp.value) temp.value = node.value;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return temp.value;
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

// treeMax expect 17
console.log('treeMax', tree.treeMax());



module.exports = { Node, BinaryTree };
