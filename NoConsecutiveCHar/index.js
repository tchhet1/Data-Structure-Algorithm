/* 1. Given an array of strings. 
For each string, return the least number of characters to be modified 
so that there are NO consecutive identical characters in any string. 
All strings are non-empty and contain only lowercase English letters a-z. */

/* Example : ab - 0 changes needed as there are no two identical consecutive characters in this string
aaa - change the middle a to something else - so just 1 modification needed
aaaab - change either first and third 'a' to something else, or else change 2nd and 4th 'a' to something else - 2 modifications needed
aaacc - change middle 'a' to something else and change one of the 'c' to something else - so just 2 modifications needed
aaaaabbbcc - change 2nd and 4th 'a', change middle 'b' and change any one of the 'c' - total 4 modifications needed

So, for input as [ab, aaa, aaab, aaacc, aaaaabbbcc], expected output is [0, 1, 2, 2, 4] */

const noConsecutive = (str) => {

    let temp = str[0];
   
    let count = 0;

    for(let i = 1; i < str.length; i++){

        if(temp[temp.length - 1] !== str[i]) {
            temp.push(str[i])
        } else {
            temp.push(0);
            count++;
        }
    }

    return count;

}