const { insertIntoTree,inOrder } = require("./Trees");

function maximumDepth(root){
    if (root != null) {
        return 1 + Math.max(maximumDepth(root.left),maximumDepth(root.right))
    }
    else return 0
}

let root = insertIntoTree(0,[1,2,3,null,5,6,7,8])   
console.log("Maximum depth: ",maximumDepth(root))   //!   =>    Maximum depth:  3

root = insertIntoTree(0,[3,9,20,null,null,15,7])
console.log("Maximum depth: ",maximumDepth(root))   //!   =>    Maximum depth:  3

root = insertIntoTree(0,[1,null,2])
console.log("Maximum depth: ",maximumDepth(root))   //!   =>    Maximum depth:  2