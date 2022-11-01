/* Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 Hello World - d, l, r, o, w, 
 */

 const lengthOfLastWord = (str) => {

    let arrayOfStr = str.trim().split(' ');
    return (arrayOfStr[arrayOfStr.length -1]).length;
 }


 const lengthOfLastWord = (str) => {

    let result = 0;
    for(let i = str.length-1; i > 0; i--){
        if(str[i] !== ' ') {
            result++;
        } 

        if(str[i] == ' '){
            return result;
        }
    }
 }




