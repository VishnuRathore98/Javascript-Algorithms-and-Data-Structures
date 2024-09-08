// Initial implementation:

// function mergingArrays(arr1, arr2) {
//   let p1 = 0,
//     p2 = 0;
//   let newArr = [];
//   while (p1 < arr1.length && p2 < arr2.length) {
//     if (arr1[p1] < arr2[p2]) {
//       newArr.push(arr1[p1]);
//       p1++;
//     }
//     if (arr1[p1] > arr2[p2]) {
//       newArr.push(arr2[p2]);
//       p2++;
//     }
//     if (arr1[p1] === arr2[p2]) {
//       newArr.push(arr1[p1]);
//       newArr.push(arr2[p2]);
//       p1++;
//       p2++;
//     }
//   }
//   if (p1 < arr1.length) {
//     for (let i = p1; i < arr1.length; i++) {
//       newArr.push(arr1[i]);
//     }
//   }
//   if (p2 < arr2.length) {
//     for (let j = p2; j < arr2.length; j++) {
//       newArr.push(arr2[j]);
//     }
//   }
//   return newArr;
// }

// Refactored version:

function mergingArrays(arr1, arr2) {
  let p1 = 0,
    p2 = 0;
  let newArr = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      newArr.push(arr1[p1]);
      p1++;
    } else {
      newArr.push(arr2[p2]);
      p2++;
    }
  }
  while (p1 < arr1.length) {
    newArr.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    newArr.push(arr2[p2]);
    p2++;
  }
  return newArr;
}

// console.log(mergingArrays([1, 10, 50], [2, 14, 50, 99, 100]));

export default mergingArrays;