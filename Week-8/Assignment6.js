function findAllPaths(graph,source) {

    let result = [], path = [],n = graph.length - 1;

    dfs(source);
    return result;

    function dfs(source) {

        path.push(source);

        if (source == n) {
            result.push([...path]);
        }

        let adjacentPoints = graph[source];

        for (let i = 0; i < adjacentPoints.length; i++) {
            dfs(adjacentPoints[i]);
        }

        path.pop();
    }

};

console.log(findAllPaths([[1,2],[3],[3],[]],0));    //! =>  [ [ 0, 1, 3 ], [ 0, 2, 3 ] ]
console.log(findAllPaths([[4,3,1],[3,2,4],[3],[4],[]],0));    //! => \n 
//!   [
//!     [ 0, 4 ],
//!     [ 0, 3, 4 ],
//!     [ 0, 1, 3, 4 ],
//!     [ 0, 1, 2, 3, 4 ],
//!     [ 0, 1, 4 ]
//!   ]