function createStack() 
{
    let items = [];
    return{
        push(item) {
            items.push(item);
        },
        pop() {
            // console.log(items); //!output : [ 10, 5 ]
            return items.pop();
        }
    };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
console.log(stack.items);    //! => undefined

//! In the earlier code for createStack, the variable items was getting returned as a part of the object that
//! also contained the push() and pop() functions, so items could directly be accessed by the instance of this returned object 
//! created outside, through the createStack function call.
//! But now, putting the variable items outside of the return statement, outside of the object getting returned,
//! it will now only be accessible to the variables or functions that have access to items as part of the lexical scope.
//! So now items won't be accessible outside of its scope i.e createStack() function call.

stack.items = [10,100,1000];
console.log(stack.items)// => [ 10, 100, 1000 ]    //! => This is successfully run because with this we create
//! a new key in the stack object. This is not the same 'items' variable as the one present in the function createStack()

//! For Example,Creating another key:
stack.elements = [1,2,3,4,5]
console.log(stack.elements) //! => [ 1, 2, 3, 4, 5 ]