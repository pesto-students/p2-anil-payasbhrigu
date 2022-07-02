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
}
module.exports = {Graph}
