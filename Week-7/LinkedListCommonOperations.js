class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

function printList(head){
    curr = head
    while(curr != null){
        console.log(curr.data)
        curr = curr.next
    }
}

function createLinkedList(arr){
    let curr = null,head = null
    for(let i = 0;i < arr.length;i++){
    let node = new Node(arr[i])
    if(i == 0)
        {
            curr = node
            head = node
        }
    else
        {
            curr.next = node
            curr = curr.next
        }
    }
    return head
}

module.exports = {createLinkedList, printList, Node}