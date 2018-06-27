'use strict';
class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key <= this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin(); // 4
        this.key = successor.key; // root key is 4
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right); //4.replace(6)
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) { //u
    if (this.parent) { // y
      if (this === this.parent.left) { //u
        this.parent.left = node;//u = u
      } else if (this === this.parent.right) {
        this.parent.right = node; //root
      }
      if (node) { //u
        node.parent = this.parent; //y = u
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

function inOrder(bst){
  if(bst.left){
    inOrder(bst.left);
  }
  console.log(bst.key);
  if(bst.right){
    inOrder(bst.right);
  }
}

function preOrder(bst){
  console.log(bst.key);
  if(bst.left){
    preOrder(bst.left);
  }
  if(bst.right){
    preOrder(bst.right);
  }
}

function postOrder(bst){
  if(bst.left){
    postOrder(bst.left);
  }
  if(bst.right){
    postOrder(bst.right)
  }
  console.log(bst.key);
}

let nums = new BinarySearchTree();

nums.insert(25);
nums.insert(15);
nums.insert(50);
nums.insert(10);
nums.insert(24);
nums.insert(35);
nums.insert(70);
nums.insert(4);
nums.insert(12);
nums.insert(18);
nums.insert(31);
nums.insert(44);
nums.insert(66);
nums.insert(90);
nums.insert(22);

// console.log(nums);
postOrder(nums);

