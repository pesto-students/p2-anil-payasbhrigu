/*Implement a function named getNumber which generates a random number. 
If randomNumber is divisible by 5 it will reject the promise else it will resolve the promise. 
Let’s also keep the promise resolution/rejection time as a variable.*/

var getNumber = function() { 
    let randomNumber = Math.floor(Math.random()*100)
    return randomNumber
}

function customPromise(executor) {
    
    let onResolve,onReject,onFinally;
    let currentState = '';
    let finallyCalled = false;

    this.then =  function(callback) { 
        onResolve = callback;
        return this;
    }
    this.catch = function(callback) { 
        onReject = callback;
        return this;
    }
    this.finally = function(callback) {
        onFinally = callback;
        finallyCalled = true
        currentState = 'stopped'
    }

    function resolve(value) { 
        if (this.currentState === 'pending')
            return;
        if(typeof onResolve == 'function')
            {
                this.currentState = 'fulfilled'
                onResolve(value)
            }
        if(finallyCalled === true)
            onFinally();
            
    }
    function reject(value) { 
        if (this.currentState === 'pending')
            return;
        if(typeof onReject == 'function')
            {
                this.currentState = 'rejected'
                onReject(value)
            }
        if(finallyCalled === true)
            onFinally();
    }
    executor(resolve,reject);
}

let myPromise = new customPromise((resolve,reject)=>{
    let val = getNumber();
    console.log(val)
    setTimeout(() => {
        if(val%5 === 0)
            reject(val);
        else 
            resolve(val);
    }, 2000);
})

myPromise
        .then((val) => console.log(`Resolved: Val should be: ${val}`))
        .catch((val) => console.log(`Rejected : Val was ${val}`))
        .finally(() => console.log('finally called'))