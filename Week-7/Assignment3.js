const {createLinkedList, printList, Node} = require('./LinkedListCommonOperations')

function containsLoop(head){
    let slow = head,fast = head
    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast)
            return fast
    }
    return null
}

function removeLoop(head){
    let meet = containsLoop(head)
    if(meet == null)
        return null
    let move = head
    while(move != meet){
        move = move.next
        meet = meet.next
    }
    return meet
}

function createLinkedListWithLoop(head,x){
    let curr = head,index = 1,loopStart = head
    while(curr.next != null){
        if(index == x)
            loopStart = curr
        curr = curr.next
        index++
    }
    curr.next = loopStart
}

let head = createLinkedList([1,8,3,4,5])
createLinkedListWithLoop(head,3)
console.log(head.next.next.next.next.next)  //! => 3
console.log(removeLoop(head))   //! => 3

