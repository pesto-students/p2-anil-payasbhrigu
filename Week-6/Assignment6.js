// 3 sum
function threeSum(arr, target)
{
    arr.sort((a, b) => a - b);
    let result = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length - 2; i++)
    {
        let left = i + 1, right = arr.length - 1;
        while (left < right) {

            let sum = arr[i] + arr[left] + arr[right];
            
            if (Math.abs(target - sum) < Math.abs(target - result))
                result = sum;

            if (sum > target)
                right--;
            else
                left++;
        }
    }
    return result;
}

console.log(threeSum([ -1, 2, 1, -4 ], target = 1))
//Time Complexity: O(N^2)
//Space Complexity: O(1)