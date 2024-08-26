/* 
    Problem: 
    Given a sorted array of integers, write a function called search, 
    that accepts a value and returns the index where the value passed
    to the function is located.
    If the value is not found, return -1.
*/

// Approach 1: Linear search, Time complexity: O(n)

/*
function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==val){
            return val;
        }
    }
    return -1;
}
*/

// Approach 2: Binary search, Time complexity: Log(n)

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log("Value at index: ",search([1,2,3,4,5,6,7,8,9],6));