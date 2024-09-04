
// Approach1: Using while loop
// function insertionSort(arr){
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i-1;
// 
//         while (j>=0 && arr[j]>key) {
//             arr[j+1] = arr[j];
//             j = j-1;
//         }
//         arr[j+1] = key;
//     }
//     return arr;
// }

// Approach2: Using for loop
function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        // Here, we are using var instead of let for hoisting it 
        // so that we can use it outside the loop as we did.
        for(var j = i-1;j>=0 && arr[j]>key;j = j-1)
            {
                arr[j+1] = arr[j];
            }
        arr[j+1] = key;
    }
    return arr;
}


console.log(insertionSort([1,2,12, 11, 13, 5, 6]));