function memoize(fun){
    const cache = new Map();
    return function(...args){
        args.sort();
        const key = args.toString();
        if(cache.has(key)){
            console.log("Present in cache")
            return cache.get(key)
        }
        else{
            console.log("Not Present in cache")
            cache.set(key,fun(...args))
        }
        return cache.get(key);
    };
}

function add(...args){
    let sum = 0;
    for(let i of args){
        sum = sum+i;
    }
    return sum;
}

const memoizeAdd = memoize(add);
console.log(memoizeAdd(1,2,3,4,5));
console.log(memoizeAdd(1,2,4,5,3));