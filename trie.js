class Trie {

  constructor() {
    this.root = {}; 
  }



  // Insert a word into the Trie
  insert(word) {
    let currentNode = this.root;

    for (let char of word) {
      if (!currentNode[char]) {
        currentNode[char] = {};
      }
      currentNode = currentNode[char];
    }

    
    currentNode.isEnd = (currentNode.isEnd || 0) + 1; 
  }




  // Search for a word in the Trie
  search(word) {
    let currentNode = this.root;

    for (let char of word) {
      if (!currentNode[char]) {
        return false;
      }
      currentNode = currentNode[char];
    }

    return !!currentNode.isEnd;
  }



  // Check if any word starts with the given prefix

  startsWith(prefix) {
    let currentNode = this.root;

    for (let char of prefix) {
      if (!currentNode[char]) {
        return false;
      }
      currentNode = currentNode[char];
    }

    return true;
  }




  // Count the number of words with the given prefix
  countWordsStartingWith(prefix) {
    let currentNode = this.root;

    
    for (let char of prefix) {
      if (!currentNode[char]) {
        return 0; 
      }
      currentNode = currentNode[char];
    }

   
    return this.countWordsFromNode(currentNode);
  }

 


  countWordsFromNode(node) {
    if (!node) return 0;

    let count = node.isEnd || 0; 

    
    for (let char in node) {
      if (char !== "isEnd") {
        count += this.countWordsFromNode(node[char]);
      }
    }

    return count;
  }

  
}
