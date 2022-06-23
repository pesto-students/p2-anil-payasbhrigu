const {createLinkedList, printList, Node} = require('./LinkedListCommonOperations')

function rotateList(head,rotationPoint){
    let index = 1,curr = head
    while(curr != null){
        if(index == rotationPoint)
            break
        index++
        curr = curr.next
    }
    let move = curr.next,newHead = curr.next
    curr.next = null
    while(move.next != null){
        move = move.next
    }
    move.next = head
    head = newHead
    return head
}

console.log("====EX1====")
let head = createLinkedList([2, 4, 7, 8, 9])
head = rotateList(head,3)
printList(head)

console.log("====EX2====")
head = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8])
head = rotateList(head,4)
printList(head)