
/*
Frequency Counter - validAnagram

Given two strings, write a function to determine if the second string 
is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters 
of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)
*/

// Approach 1: mine
/*
function validAnagram(str1, str2){
    
    if (str1.length !== str2.length) {
        return false;
    }
    
    let frequncyCounter1={}
    let frequncyCounter2={}
    
    for(const value of str1){
        frequncyCounter1[value] = (frequncyCounter1[value] || 0) + 1;
    }
    
    for(const value of str2){
        frequncyCounter2[value] = (frequncyCounter2[value] || 0) + 1;
    }
    
    for (let key in frequncyCounter1) {
        if(!(key in frequncyCounter2)){return false;}
        if(frequncyCounter1[key] !== frequncyCounter2[key]){return false ;}
    }
    return true;
  }
*/ 

//   Approach 2: Colt Steele's 

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')