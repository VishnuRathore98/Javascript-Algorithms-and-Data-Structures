/*

Multiple Pointers - isSubsequence

Write a function called isSubsequence which takes in two strings 
and checks whether the characters in the first string form 
a subsequence of the characters in the second string. 

In other words, the function should check whether the characters 
in the first string appear somewhere in the second string, 
without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)

*/

function isSubsequence(str1, str2){
    let c1 = c2 = 0;
    while(c1<str1.length && c2<str2.length){
        
        if(str1[c1] == str2[c2]) c1++;
        
        c2++;
    }
    return c1 === str1.length;
}

console.log(isSubsequence('abc', 'abracadabra'));


/* 
//isSubsequence Solution - Iterative

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

//isSubsequence Solution - Recursive but not O(1) Space

function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}
*/