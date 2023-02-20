// Given an array, find the first integer, which is unique in the array. 
// Unique means the number does not repeat and appears only once in the whole array. 
// Implement your solution in JavaScript and see if it runs correctly!


function findFirstUnique(arr) {
    let i = 0;
 
    while(i < arr.length){
       if(arr.indexOf(arr[i], i + 1) == -1){
          return arr[i];
       }
       i++;
    }
    return null;
 }