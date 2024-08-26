
/*
 Write a function called same, which accepts two arrays as input.
 The function should return true if every value in the array 
 has it's corresponding value squared in the second array.
 The frequency of values must be the same.
*/

// Approach 1: Time complexity: O(n^2)

/*
function same(arr1, arr2){
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (const val of arr1) {
        let index = arr2.indexOf(val**2);
        if (index === -1) {
            return false;
        }
        arr2.slice(index,1);
    }
    return true;
}
*/

// Approach 2: Time complexity: O(n)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 4]));
