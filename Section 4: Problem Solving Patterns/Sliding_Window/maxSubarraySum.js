/*
    Problem:
    --------
    Write a function called maxSubarraySum which accepts an array of integers 
    and a number num.
    The function should calculate the maximum sum of num consecutive elements 
    in the array.
    eg.     maxSubarraySum([1,2,5,2,8,1,5],2) -> 10
            maxSubarraySum([1,2,5,2,8,1,5],4) -> 17
            maxSubarraySum([4,2,1,6],1) -> 6
            maxSubarraySum([],3) -> null
*/

// Approach 1: Time complexity: O(n^2)
/*
function maxSubarraySum(arr,num){
    if (num>arr.length) return null;

    let max = -Infinity;
    for (let i = 0; i < (arr.length-(num+1)); i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp = temp+arr[i+j];
        }
        if (temp>max) {
            max=temp;
        }
    }
    return max;
}
*/

// Approach 2: Time complexity: O(n)

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum = maxSum + arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1,2,3,4,5],1));
