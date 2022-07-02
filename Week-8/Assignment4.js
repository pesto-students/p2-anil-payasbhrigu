const { Graph } = require("./Graphs");

let graph = new Graph()

function createUndirectedGraph(arr){
    let vertices = new Set()
    for(let i = 0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            vertices.add(arr[i][j])
        }
    }
    for(let vertex of vertices){
        graph.addVertex(vertex)
    }
    for(let pair of arr){
        graph.addEdge(pair[0],pair[1])
    }
}

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
graph = new Graph()
createUndirectedGraph(arr)
console.log(checkPath(0,2))     //! => true

arr = [[0,1],[0,2],[3,5],[5,4],[4,3]]
createUndirectedGraph(arr)
console.log(checkPath(0,5))     //! => false