/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 
Input: s = "anagram", t = "nagaram"
Output: true

*/

/* 
const isAnagram = (s, t) => {
    
    // sort the strings
    // check using if condition
    
   let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    
return sortedS == sortedT;
    
}; 

*/

const isAnagram = (s, t) => {
    
    if(s.length !== t.length) return false;
    
    let x = new Map();
    let y = new Map();
    
    for(let i = 0; i < s.length; i++){
        if(x.has(s[i])) { 
            let val = x.get(s[i]);
            x.set(s[i], val + 1);
        } else {
            x.set(s[i], 1) 
        }
        
        if(y.has(t[i])) { 
            let val = y.get(t[i]);
            y.set(t[i], val + 1);
        } else {
            y.set(t[i], 1) 
        }

    }
    
    var flag = true;
    
    y.forEach(([value, key])=> {
            if(value !== x.get(key)){
                flag = false;
            }
    })

   return flag;    

};

isAnagram('hat', 'mat')