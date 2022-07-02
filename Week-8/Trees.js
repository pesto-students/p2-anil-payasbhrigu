
class TreeNode {
    constructor(data) {
        this.data = data
        this.right = null
        this.left = null
    }
}

function insertIntoTree(i,arr){
    let node = null
    if(i < arr.length && arr[i] != null){
        node = new TreeNode(arr[i])
        node.left = insertIntoTree(2*i + 1,arr)
        node.right = insertIntoTree(2*i + 2,arr)
    }
    return node
}

function inOrder(root,callback){
    if(root != null){
        inOrder(root.left,callback)
        callback(root.data)
        inOrder(root.right,callback)
    }
}

module.exports = {insertIntoTree,inOrder}