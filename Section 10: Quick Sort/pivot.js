// export default function pivot(array, startIndex, endIndex) {

//     let pivotValue = array[startIndex];
//     let pivotIndex = startIndex;

//     for (let i = startIndex+1; i < endIndex; i++) {
//         if (pivotValue>array[i]) {
//             pivotIndex++;
//             let temp = array[pivotIndex];
//             array[pivotIndex] = array[i];
//             array[i] = temp;
//             // console.log(pivotIndex, array[i], array[pivotIndex]);
//         }
//     }
//     let temp = array[pivotIndex];
//     array[pivotIndex] = array[start];
//     array[start] = temp;

//     return pivotIndex;
// }

export default function pivot(array, start = 0, end = array.length - 1) {
  let pivotValue = array[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotValue > array[i]) {
      pivotIndex++;

    //   [array[pivotIndex], array[i]] = [array[i], array[pivotIndex]];
      let temp = array[pivotIndex];
      array[pivotIndex] = array[i];
      array[i] = temp;
    }
  }
//   [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];
    let temp = array[pivotIndex];
    array[pivotIndex] = array[start];
    array[start] = temp;

  return pivotIndex;
}

let array = [6, 8, 5, 2, 1, 4, 7, 3];

console.log(pivot(array, 0, array.length));
