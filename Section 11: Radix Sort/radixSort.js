import { mostDigits, getDigit } from "./helpers.js";

function radixSort(arr) {
  let largestDigit = mostDigits(arr);
  for (let i = 0; i < largestDigit; i++) {
    
    let bucket = new Array(largestDigit);
    // console.log(arr);
    for (const item of arr) {
        // console.log(getDigit(item,i));
        let subBucket;
        
        bucket[getDigit(item,i)] = item;
    }
    console.log(bucket);
  }
}

radixSort([1556,4,3556,593,408,4386,902,7,8157,86,9637,29]);