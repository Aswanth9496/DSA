class Graph {

  constructor() {
    this.adjacencyList = new Map();
  }


  // Add vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    } else {
      console.log(`Vertex ${vertex} already exists.`);
    }
  }



  // Add edge between two vertices
  addEdge(source, destination) {
    if (!this.adjacencyList.has(source)) {
      this.addVertex(source);
    }
    if (!this.adjacencyList.has(destination)) {
      this.addVertex(destination);
    }

   
    this.adjacencyList.get(source).push(destination);
    this.adjacencyList.get(destination).push(source);
  }




  // Display the graph
  display() {
    for (let [vertex, edges] of this.adjacencyList) {
      console.log(`${vertex} -> ${edges.join(', ')}`);
    }
  }




  // Depth First Search (DFS)
  dfs(startVertex) {

    const visited = new Set(); 
    const result = []; 

    const dfsHelper = (vertex) => {
      if (!vertex) return;

      visited.add(vertex);
      result.push(vertex);

      for (let neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };

    dfsHelper(startVertex);
    console.log(`DFS Traversal starting from vertex ${startVertex}:`, result);
    return result;
  }

  // Breadth First Search (BFS)
  bfs(startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    const result = []; 

    visited.add(startVertex);

    while (queue.length) {
      const vertex = queue.shift(); 
      result.push(vertex);

      for (let neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    console.log(`BFS Traversal starting from vertex ${startVertex}:`, result);
    return result;
  }

}




