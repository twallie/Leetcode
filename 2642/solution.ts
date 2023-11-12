const INFINITY = Number.MAX_SAFE_INTEGER;

class Graph {
  V: number;
  adjacencyMatrix: number[][];

  constructor(n: number, edges: number[][]) {
    this.V = n;
    this.adjacencyMatrix = new Array(n);
    for (let i = 0; i < this.V; i++) {
      this.adjacencyMatrix[i] = new Array(n).fill(0);
    }

    for (let edge of edges) {
      this.addEdge(edge);
    }
  }

  addEdge(edge: number[]): void {
    const from = edge[0];
    const to = edge[1];
    const cost = edge[2];

    this.adjacencyMatrix[from][to] = cost;
  }

  shortestPath(node1: number, node2: number): number {
    let distances: number[] = new Array(this.V).fill(INFINITY);
    let processed: Set<number> = new Set();

    distances[node1] = 0;

    for (let count = 0; count < this.V; count++) {
      let u = this.minDistance(distances, processed);
      if (u == node2 && distances[u] !== INFINITY) {
        return distances[u];
      }
      processed.add(u);

      for (let v = 0; v < this.V; v++) {
        let potentialNewDistance = distances[u] + this.adjacencyMatrix[u][v];
        if (
          !processed.has(v) &&
          this.adjacencyMatrix[u][v] != 0 &&
          distances[u] != INFINITY &&
          potentialNewDistance < distances[v]
        ) {
          distances[v] = potentialNewDistance;
        }
      }
    }

    return -1;
  }

  private minDistance(distances: number[], processed: Set<number>): number {
    let min = INFINITY;
    let minIndex = -1;

    for (let v = 0; v < this.V; v++) {
      if (processed.has(v) == false && distances[v] <= min) {
        min = distances[v];
        minIndex = v;
      }
    }

    return minIndex;
  }
}
