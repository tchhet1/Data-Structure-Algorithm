/* 
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1] 
*/

//loop through the array elements
//if conditiong to check if greater element exists
const replaceElements = (arr) => {
    let max = 0;
    let result = [...arr];
    result.shift();
    
    for(let i = 0; i < arr.length; i++){
            if(i < (arr.length -1)){
                arr[i] = Math.max(...result);
                result.shift();
            } else {
                arr[i] = -1
            }              
        
    }
    
    return arr;
}