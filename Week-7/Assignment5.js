function nextGreaterElement(arr)
{
    let stack = [];
    stack.push(arr[0]);
 
    for (var i = 1;i < arr.length;i++)
    {
        if (!stack.length) {
            stack.push(arr[i]);
            continue;
        }
        while (stack.length && stack[stack.length-1] < arr[i])
        {
            console.log( stack[stack.length-1], "=>", arr[i]);
            stack.pop();
        }
        stack.push(arr[i]);
    }

    while (stack.length) {
        console.log( stack[stack.length-1], "=>", -1);
        stack.pop();
    }
}

let arr = [1,3,2,4];
nextGreaterElement(arr);
//OUTPUT:
// 1 => 3
// 2 => 4
// 3 => 4
// 4 => -1