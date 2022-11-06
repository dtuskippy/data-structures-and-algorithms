'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }


  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []); //key value pair here (vertex, the key, values in array are edges)
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex) {
  //find node we want to connect to...
    const neighbors = this.adjacencyList.get(startVertex); //neighbors will be an array of values
    neighbors.push(new Edge(endVertex));
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(root, callback) {
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(queue.length) {
      current = queue.pop();
      //we do something with callback if we need
      if(callback) callback(current.value);

      //grab neighbors
      const neighbors = this.getNeighbors(current);
      for(let edge of neighbors) {
        if(!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
      return visited;
    }
  }
}

const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');
const E = graph.addVertex('E');
const F = graph.addVertex('F');
const G = graph.addVertex('G');
const H = graph.addVertex('H');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(B, G);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(F, H);
graph.addDirectedEdge(C, H);
graph.addDirectedEdge(F, E);

graph.breadthFirst(A, console.log);

