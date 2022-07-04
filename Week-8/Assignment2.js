const { insertIntoTree,inOrder } = require("./Trees");

function isBST(root){
    let arr = [];
    inOrder(root,(ele) => arr.push(ele))
    console.log(arr)
    for(let i = 1;i < arr.length;i++){
        if (arr[i] < arr[i-1]) {
            return false
        }
    }
    return true
}

root = insertIntoTree(0,[1,2,3,4,5])
console.log(isBST(root))    //! => false

root = insertIntoTree(0,[3,9,20,null,null,15,7])
console.log(isBST(root))    //! => false

root = insertIntoTree(0,[4,2,5,1,3])
console.log(isBST(root))    //! => true
