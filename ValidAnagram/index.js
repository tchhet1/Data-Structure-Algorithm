/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 
Input: s = "anagram", t = "nagaram"
Output: true

*/

const isAnagram = (s, t) => {
    
    // sort the strings
    // check using if condition
    
   let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    
return sortedS == sortedT;
    
};