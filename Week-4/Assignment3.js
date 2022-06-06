let fib = {
    [Symbol.iterator]() {
        let a=0,b=1,c = a + b, i = 0;
        const iterations = n;
        return {
            next() {
                a = b;
                b = c
                c = i < 2 ? i : a + b;
                i+=1;
                return { value: c, done: i > iterations}
            }
        }
    }
}

var n = 10;
const iter = fib[Symbol.iterator]();
console.log("The Fibonacci Series is:")
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
