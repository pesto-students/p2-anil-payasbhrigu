// Max Sum Contiguous Subarray
function maxSumSubArray(arr){
    let maxSum = Number.MIN_SAFE_INTEGER, maxTillNow = arr[0];
    for(let i = 1;i < arr.length; i++){
        maxTillNow = Math.max(arr[i],arr[i]+maxTillNow);
        if(maxTillNow >= maxSum)
            maxSum = maxTillNow;
    }
    return maxSum;
}

console.log("Max Sum from a SubArray is:",maxSumSubArray([1, 2, 3, 4, -10]))  //! => 10
console.log("Max Sum from a SubArray is:",maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  //! => 6
console.log("Max Sum from a SubArray is:",maxSumSubArray([-5,1,9,-3,4,-10]))  //! => 11
//Time Complexity: O(N)
//Space Complexity: O(1)