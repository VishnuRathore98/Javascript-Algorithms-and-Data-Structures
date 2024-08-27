/* 
Frequency Counter - sameFrequency

Write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/

function sameFrequency(num1,num2){
    let num1Freq = {};
    let num2Freq = {};
    while(num1){
      let val = num1%10;
      num1Freq[val] = (num1Freq[val]||0)+1;
      num1 = Math.floor(num1/10);    
      }
    while(num2){
    let val = num2%10;
    num2Freq[val] = (num2Freq[val]||0)+1;
    num2 = Math.floor(num2/10);    
    }
    for (const key in num1Freq) {
        if (!(key in num2Freq)) return false;

        if(num1Freq[key] !== num2Freq[key]) return false;
    }
    return true;
    // console.log("num1Freq: ",num1Freq,"num2Freq: ",num2Freq);
}

console.log(sameFrequency(3589578, 5879385));