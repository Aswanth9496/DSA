// Class representing a Node in the BST
class Node {
    constructor(value) {
      this.value = value;  
      this.left = null;   
      this.right = null;   
    }
  }
  



  // Class representing the Binary Search Tree
  class BinarySearchTree {
    constructor() {
      this.root = null; 
    }



  
    // Insert a value into the BST
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode; 
        return this;
      }
  
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined; 
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;  
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;  
            return this;
          }
          current = current.right;
        }
      }
    }
  


    // Search for a value in the BST
    search(value) {
      if (this.root === null) return false;
  
      let current = this.root;
      while (current) {
        if (value === current.value) return true;  
        if (value < current.value) {
          current = current.left;  
        } else {
          current = current.right;
        }
      }
      return false;  
    }



  
    // In-Order Traversal: Left -> Root -> Right
    inOrderTraversal(node = this.root, result = []) {
      if (node) {
        this.inOrderTraversal(node.left, result);
        result.push(node.value);
        this.inOrderTraversal(node.right, result);
      }
      return result;
    }


  
    // Pre-Order Traversal: Root -> Left -> Right
    preOrderTraversal(node = this.root, result = []) {
      if (node) {
        result.push(node.value);
        this.preOrderTraversal(node.left, result);
        this.preOrderTraversal(node.right, result);
      }
      return result;
    }
  


    // Post-Order Traversal: Left -> Right -> Root
    postOrderTraversal(node = this.root, result = []) {
      if (node) {
        this.postOrderTraversal(node.left, result);
        this.postOrderTraversal(node.right, result);
        result.push(node.value);
      }
      return result;
    }
  


    // Find the minimum value in the BST
    findMin() {
      if (!this.root) return null;
  
      let current = this.root;
      while (current.left) {
        current = current.left;  
      }
      return current.value;
    }
  


    // Find the maximum value in the BST
    findMax() {
      if (!this.root) return null;
  
      let current = this.root;
      while (current.right) {
        current = current.right;  
      }
      return current.value;
    }



    findKthSmallest(k) {
        let count = 0; // Counter for nodes visited
        let result = null;
    
        function inOrderTraversal(node) {
          if (!node || result !== null) return;
    
          inOrderTraversal(node.left);
    
          count++;
          if (count === k) {
            result = node.value;
            return;
          }
    
         
          inOrderTraversal(node.right);
        }
    
        inOrderTraversal(this.root);
        return result;
      }
    





  }
  
  // Example Usage
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  bst.insert(13);
  bst.insert(17);
  
  console.log("In-Order Traversal:", bst.inOrderTraversal()); // [3, 5, 7, 10, 13, 15, 17]
  console.log("Pre-Order Traversal:", bst.preOrderTraversal()); // [10, 5, 3, 7, 15, 13, 17]
  console.log("Post-Order Traversal:", bst.postOrderTraversal()); // [3, 7, 5, 13, 17, 15, 10]
  
  console.log("Search 7:", bst.search(7)); // true
  console.log("Search 20:", bst.search(20)); // false
  
  console.log("Minimum value:", bst.findMin()); // 3
  console.log("Maximum value:", bst.findMax()); // 17
  