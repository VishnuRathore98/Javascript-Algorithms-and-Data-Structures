/* 
    Unique value problem
    ---------------------
    
    Implement a function called countUniqueValues, which accepts a sorted
    array, and counts the unique values in the array.
    There can be negative numbers in the array, but it will always be sorted.
*/

// Approach 1: Mine 

/*
function countUniqueValues(arr){
    
    if(arr.length == 0){ return 0};
    
    let left=0;
    let right=1;
    while(right<arr.length){
        if(arr[left] == arr[right]){
            right++;
        }
        else{
            left++;
            arr[left]=arr[right];
        }
    }
    return ++left;
  }
*/

// Approach 2: Colt's 

function countUniqueValues(arr){
    
    if(arr.length == 0) return 0;
    
    let i=0;
    for(let j=0; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i]=arr[j];   
        }
    }
    return i+1;
  }
  
  
  // console.log(countUniqueValues([]));

