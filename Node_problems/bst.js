function Node(key) {
  this.key = key;
  this.right = null;
  this.left = null;
}

function BST() {
  this.root = null;
}

BST.prototype.insert = function (root,node) {
  if (this.root == null) {
    this.root = node;
    return;
  }
  if (root == null) {
    root = node;
  } else {
    if (node.key > root.key) {
      if (root.right == null) {
        root.right = node;
      } else {
        insert(root.right,node);
      }
    } else {
      if (root.left == null) {
        root.left = node;
      } else {
        insert(root.left,node);
      }
    }
  }
};

const tree = new BST();
newNode = new Node(10);
newNode2 = new Node(11);
newNode3 = new Node(9);
tree.insert(tree.root,newNode);
tree.insert(tree.root,newNode2);
tree.insert(tree.root,newNode3);
console.log(tree);
