function hasDuplicate(arr){
    var setArr = new Set(arr);
    return setArr.size !== arr.length;
}

console.log(hasDuplicate([12,241,135,53,35,53]))    //!true

console.log(hasDuplicate([135,241,53,35,12]))    //!false