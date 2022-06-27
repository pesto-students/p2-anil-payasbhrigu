var stack_1 = []
var stack_2 = []

class MyQueue {
    constructor() {

        this.push = (value) => {
            stack_1.push(value)
        }

        this.pop = () => {
            while (stack_1.length)
                stack_2.push(stack_1.pop())

            let top = stack_2.pop()

            while (stack_2.length)
                stack_1.push(stack_2.pop())

            console.log(top)
        }
    }
}
    
    
let queue = new MyQueue()

queue.push(2)
queue.push(3)
queue.pop()
queue.push(4)
queue.pop()
//  OUTPUT
// 2
// 3