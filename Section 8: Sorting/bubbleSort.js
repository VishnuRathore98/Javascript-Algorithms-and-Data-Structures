// ES-5
function swap1(arr,idx1,idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

// ES-2015
function swap2(arr,idx1,idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
/* 
// Basic Implementation

function bubbleSort(arr) {
    if (arr.length < 2) return 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j]>arr[j+1]) swap1(arr,j,j+1);
        }
    }
    return arr;
}
 */

/* 
// Level1 Optimization: Here we only run for the non sorted values as the last
// values as one pass is complete is sorted already. Don't run till arr.length.

function bubbleSort(arr) {
    if (arr.length < 2) return 0;
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i-1; j++) {
            if (arr[j]>arr[j+1]) swap1(arr,j,j+1);
        }
    }
    return arr;
}
*/

// Level2 Optimization: 

function bubbleSort(arr) {
    
}
console.log(bubbleSort([45,34,11,89,34,67,43,22,74,21]));