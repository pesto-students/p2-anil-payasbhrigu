/*Implement a function named getNumber which generates a random number. 
If randomNumber is divisible by 5 it will reject the promise else it will resolve the promise. 
Let’s also keep the promise resolution/rejection time as a variable.*/

var getNumber = function() { 
    let randomNumber = Math.floor(Math.random()*100)
    return randomNumber
}

function customPromise(executor) {
    
    let onResolve,onReject;
    let currentState = '';
    this.then =  function(callback) { 
        onResolve = callback;
        return this;
    }
    this.catch = function(callback) { 
        onReject = callback;
        return this;
    }

    function resolve(value) { 
        if (this.currentState === 'pending')
            return;
        if(typeof onResolve == 'function')
            {
                this.currentState = 'fulfilled'
                onResolve(value)
                final(() => console.log('final called'))
            }
    }
    function reject(value) { 
        if (this.currentState === 'pending')
            return;
        if(typeof onReject == 'function')
            {
                this.currentState = 'rejected'
                onReject(value)
                final(() => console.log('final called'))
            }
    }
    function final(callback) {
        this.currentState = 'fulfilled';
        callback();
    }
    executor(resolve,reject);
    
}

let myPromise = new customPromise((resolve,reject)=>{
    setTimeout(() => {
        let val = getNumber();
        console.log(val)
        if(val%5 === 0)
            reject(val);
        else 
            resolve(val);
    }, 2000);
})

myPromise
        .then((val) => console.log(`Resolved: Val should be: ${val}`))
        .catch((val) => console.log(`Rejected : Val was ${val}`))