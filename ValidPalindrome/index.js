/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. 

*/

const isPalindrome = (s) => {
    
    if(s.length === 0) return true;
    
    s = s.toLowerCase();
    s = s.replace(/[^a-zA-Z0-9]/g, '');
    
    let i = 0;
    let j = s.length -1;    
    let half = 0;
    
    let len = s.length;    
    if(len % 2 == 0){
        half = len/2;
    } else {
        half = parseInt(len/2) + 1;
    }
    
    while(i < half){
        
        if(s[i] !== s[j]) {
            return false;
        }
        
        i++;
        j--;
    }
    
    return true;
    
};



//ANA - isPalindrome using recursion

const validPalindrome = (str) => {
  
    if(str.length <= 1) return true;

    let len = str.length;

    if(str[0] == str[len -1]){
        return validPalindrome(str.slice(1, -1));
    }
    return false;

}




