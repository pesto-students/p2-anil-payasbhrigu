class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

function reverseList(head){
    var curr = head, prev = null, nextNode = null
    while(curr != null){
        nextNode = curr.next
        curr.next = prev
        prev = curr
        curr = nextNode
    }
    return prev
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

console.log("====EX1====")
var head = createLinkedList([1, 2, 3, 4, 5, 6])
head = reverseList(head)
printList(head)
//! => Time Complexity: O(N)
//! => Space Complexity: O(1)

console.log("====EX2====")
head = createLinkedList([2, 7, 8, 9, 10])
head = reverseList(head)
printList(head)
//! => Time Complexity: O(N)
//! => Space Complexity: O(1)