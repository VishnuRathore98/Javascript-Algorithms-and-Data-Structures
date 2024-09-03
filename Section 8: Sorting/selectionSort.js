import swap from './swap.js';

function selectionSort(arr) {
    let minimum=arr[0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            console.log(arr,minimum);
            if (minimum>arr[j]) {
                minimum=arr[j];
            }
        }
        swap(arr,i,arr.indexOf(minimum));
        minimum=arr[i+1];
    }
    return arr;
}

console.log(selectionSort([34,53,1,23,6,43,2,7]));