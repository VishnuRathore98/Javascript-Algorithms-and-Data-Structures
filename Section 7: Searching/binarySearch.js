/* 
Binary Search Exercise:
Write a function called binarySearch which accepts a sorted array and a value and 
returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch.

Examples:

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1

binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
             40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2

binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
             40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) // 16

binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
             40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) // -1
*/

function binarySearch(arr, val){
    if (arr.length===0) {
        return -1;
    }
    let left=0;
    let right=arr.length-1;
    while (left<=right) {
        let middle=Math.floor((left+right)/2);
        console.log(`left: ${left}->${arr[left]}`,`right: ${right}->${arr[right]}`,`middle: ${middle}->${arr[middle]}`);
        if(val === arr[middle]) return middle;
        if (val>arr[middle]) left = middle+1;
        if (val<arr[middle]) right = middle-1;
    }
    return -1; //If not found
}

console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 4));