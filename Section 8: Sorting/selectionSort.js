import swap from './swap.js';

// Take in consideration how many times each each approach
// executes to sort the elements.

// Selection sort when compared to bubble sort reduces the
// no. of swaps the we need to make.

// Approach1:
// function selectionSort(arr) {
//     let minimum=arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             console.log(arr,minimum);
//             if (minimum>arr[j]) {
//                 minimum=arr[j];
//             }
//         }
//         swap(arr,i,arr.indexOf(minimum));
//         minimum=arr[i+1];
//     }
//     return arr;
// }

// Approach2:
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minimum = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j]<arr[minimum]) {
                minimum = j;
            }
        }
        if (i !== minimum) {
            let tmp = arr[i];
            arr[i] = arr[minimum];
            arr[minimum] = tmp;
        }
    }
    return arr;
}

console.log(selectionSort([34,53,1,23,6,43,2,7]));