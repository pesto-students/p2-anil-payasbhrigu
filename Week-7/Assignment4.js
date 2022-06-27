function parenthesisChecker(input)
{
    let stack = [];
    for(let i = 0; i < input.length; i++)
    {
        if (input[i] === '{' || input[i] === '[' || input[i] === '('){
            stack.push(input[i]);
            continue;
        }

        if (!stack.length)
            return false;
              
        let top;
        switch (input[i]){
        case ')':
            top = stack.pop();
            if (top == '{' || top == '[')
                return false;
            break;

        case ']':
            top = stack.pop();
            if (top == '(' || top == '{')
                return false;
            break;

        case '}':
            top = stack.pop();
            if (top == '(' || top == '[')
                return false;
            break;
        }
    }
    return !stack.length;
}

let input = "([{}])}";  //! => Expression is not Balanced
  
if (parenthesisChecker(input))
    console.log("Expression is Balanced");
else
    console.log("Expression is not Balanced");

input = "([{}])";  //! => Expression is Balanced

if (parenthesisChecker(input))
    console.log("Expression is Balanced");
else
    console.log("Expression is not Balanced");