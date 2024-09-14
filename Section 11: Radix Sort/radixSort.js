import { mostDigits, getDigit } from "./helpers.js";

function radixSort(arr) {
  // Get the no of digits of the largest element in the array
  let largestDigit = mostDigits(arr);// -> 4

  // Run the loop as long as the count of numbers in the largest digit
  for (let i = 0; i < largestDigit; i++) // -> 4 times
  {
    // Create an empty bucket array containing buckets of 0-9 numbers 
    let bucket = Array.from({length:10},()=>[]);  // -> [[],[],[],[],[],[],[],[],[],[]]

    // For every element in the original array get its digit and put
    // it into the relevant sub bucket of the bucket.
    for (const item of arr) // -> 1556
    {
      let digit = getDigit(item, i);// -> 6
      bucket[digit].push(item);// [[],[],[],[],[],[1556],[],[],[],[]]
    }
    
    // Destructure every sub bucket array and put those elements
    // back into the original array by overwriting it.
    arr = [].concat(...bucket); 
    // [[],[],[902],[593],[4],[],[1556,3556,4386,86],[7,8157,9637],[408],[29]] -> [902,593,4,1556,3556,4386,86,7,8157,9637,408,29]
    
  }
  
  // Return the sorted array.
  return arr;// -> [4,7,29,86,408,593,902,1556,3556,4386,8157,9637]
}

console.log(radixSort([1556,4,3556,593,408,4386,902,7,8157,86,9637,29]));