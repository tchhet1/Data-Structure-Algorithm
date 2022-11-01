/*
 Given an array arr of integers, 
check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M)
Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5. 
*/

const checkIfExist = (arr) => {

    
    
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if( arr[j] * 2 == arr[i]) {
                return true;
            }
        }
    }
    
    return false;
    
};

