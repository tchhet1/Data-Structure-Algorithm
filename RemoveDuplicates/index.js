/* 
Given a sorted array, remove the duplicates such that each element appears only once.
Input: array = [1, 1, 2]
Output: [1, 2]

Input: array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
Output: [0, 1, 2, 3, 4] 
*/

const removeDuplicates = (arr) => {

    const set = new Set(arr);
    return Array.from(set);
    
}

removeDuplicates([0, 0, 1, 1, 2]);


const removeDuplicates = (arr) => {
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(result.indexOf(arr[i]) == i){
            result.push(arr[i])
        }
    }

    return result;
       
}
