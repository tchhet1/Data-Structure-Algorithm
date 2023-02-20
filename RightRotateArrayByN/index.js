// Implement a function rightRotate(arr,n) that will rotate the given array by n.
// arr = [1,2,3,4,5]
// n = 3

// Output: [3,4,5,1,2]

// Solution 1: split array and concat
function rightRotate(arr,n){
    let result = [];
    let split1 = arr.slice(-(n), arr.length);
    let split2 = arr.slice(0, arr.length - n);
    return [...split1, ...split2]; 
  }

  //Time Complexity O(n)
