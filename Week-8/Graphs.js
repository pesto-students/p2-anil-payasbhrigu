function Graph(){
    this.numberOfNodes = 0;
    this.adjacencyList = {};

    this.addVertex = (node) => {
        this.adjacencyList[node] = [];
        this.numberOfNodes+=1;
    }
    this.addEdge = (node1,node2) => {
        // Since this is an undirected graph
        this.adjacencyList[node1].push(node2)
        this.adjacencyList[node2].push(node1)   
    }
    this.showConnections = ()=>{
        let allNodes = Object.keys(this.adjacencyList)
        // for(let node of allNodes){
        //     let nodeConnections = this.adjacencyList[node]
        //     console.log(node,"==>")
        //     nodeConnections.forEach(element => {
        //         console.log(element)
        //     });
        // }
        return this.adjacencyList
    }

    this.createUndirectedGraph = (arr) => {
        let vertices = new Set()
        for(let i = 0;i<arr.length;i++){
            for(let j=0;j<arr[i].length;j++){
                vertices.add(arr[i][j])
            }
        }
        for(let vertex of vertices){
            this.addVertex(vertex)
        }
        for(let pair of arr){
            this.addEdge(pair[0],pair[1])
        }
    }
}
module.exports = {Graph}
