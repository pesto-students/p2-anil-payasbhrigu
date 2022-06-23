const {createLinkedList, printList, Node} = require('./LinkedListCommonOperations')

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