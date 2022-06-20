//Pair with given difference
function checkPair(arr,diff){
    let map = new Map();
    for(let i = 0;i < arr.length;i++)
        map.set(arr[i],1);
    console.log(map)
    for(let i = 0;i < arr.length;i++){
        if(map.has(arr[i] + diff))
            return 1;
    }
    return 0;
}
console.log(checkPair([5, 10, 3, 2, 50, 80],78))    //!=> 1
console.log(checkPair([-10, 20],30))    //! => 1
console.log(checkPair([-20, 20],30))    //! => 0
//Time Complexity: O(N)
//Space Complexity: O(N)