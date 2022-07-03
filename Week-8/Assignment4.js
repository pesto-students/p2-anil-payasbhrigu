const { Graph } = require("./Graphs");

let graph = new Graph()

function checkPath(source,destination){
    let queue = [],seen = new Array(graph.numberOfNodes).fill(false),v = source
    queue.push(v)
    seen[v] = true
    while (queue.length) {
        v = queue.shift()
        for(let u of graph.adjacencyList[v]){
            if(!seen[u]){
                seen[u] = true
                queue.push(u)
            }
        }
    }
    return seen[destination]
}

let arr = [[0,1],[1,2],[2,0]]
graph.createUndirectedGraph(arr)
console.log(checkPath(0,2))     //! => true

arr = [[0,1],[0,2],[3,5],[5,4],[4,3]]
graph = new Graph()
graph.createUndirectedGraph(arr)
console.log(checkPath(0,5))     //! => false