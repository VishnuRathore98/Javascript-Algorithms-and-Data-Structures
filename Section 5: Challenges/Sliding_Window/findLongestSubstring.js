/* 

Sliding Window - findLongestSubstring

Write a function called findLongestSubstring, which accepts a string 
and returns the length of the longest substring with all distinct characters.

eg.
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)


*/

function findLongestSubstring(str){
    let max=0;
    let p1=p2=0;
    while (p1<str.length) {
        if (str[p1]===str[p2]) {
            max = p2;
            p1++;
            p2=p1+1;
        }
        else{
            p2++;
            p1=0;
        }
    }
}

// console.log(findLongestSubstring('rithmschool'));