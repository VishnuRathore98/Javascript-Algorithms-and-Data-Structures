import mergingArrays from "./mergingArrays.js";

function mergeSort1(arr){

    if (arr.length<=1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = mergeSort1(arr.slice(0,mid));
    let right = mergeSort1(arr.slice(mid));

    return mergingArrays(left,right);
}

console.log(mergeSort1([4,6,32,1,98,2,74,23]));

// function mergeSort2(arr) {
//     let newArr = arr;
//     function divideArr(arrLen){
//         // console.log(arrLen);
//         newArr = newArr.splice(arrLen);
//         // console.log(newArr);
//         if (arrLen <= 1) {
//             // console.log(newArr);
//             return newArr;
//         }
//         divideArr(arrLen/2);
//     }

//     divideArr(arr.length/2);
//     // arr.splice(divideArr(arr.length));

//     return newArr;
// }

// console.log(mergeSort2([4,6,32,1,98,2,74,23]));
