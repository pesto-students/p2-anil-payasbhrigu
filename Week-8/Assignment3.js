const { insertIntoTree,inOrder } = require("./Trees");

function levelOrder(root){
    if(root == null)
        return []
    let queue = [],result = [];
    queue.push(root)
    while(true){
        let levelCount = queue.length,level = []
        if(levelCount == 0)
            break
        while(levelCount > 0){
            let node = queue[0]
            if(node.left != null)
                queue.push(node.left)
            if(node.right != null)
                queue.push(node.right)
            level.push(node.data)
            levelCount--;
            queue.shift()
        }
        result.push(level)
    }
    return result
}

root = insertIntoTree(0,[1,2,3,4,5])
console.log(levelOrder(root))   //! => [ [ 1 ], [ 2, 3 ], [ 4, 5 ] ]

root = insertIntoTree(0,[3,9,20,null,null,15,7])
console.log(levelOrder(root))   //! => [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]

root = insertIntoTree(0,[4,2,5,1,3,8,9])
console.log(levelOrder(root))   //! => [ [ 4 ], [ 2, 5 ], [ 1, 3, 8, 9 ] ]