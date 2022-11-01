/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Input: s = "()"
Output: true 
*/

const isValid = (s) => {
    
    const brack = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    
    if(s.length % 2 !== 0) return false;
       
    let stack = [];

    
    for(let i = 0; i < s.length; i++){
        
        if(s[i] in brack){
            stack.push(s[i]);
        } else {
            let stackBrack = stack.pop();
            
            if(s[i] !== brack[stackBrack]) {
                return false
            }
        }
    }
    
    if(stack.length === 0) {
        return true;
    } else {
        return false;   
    }

};