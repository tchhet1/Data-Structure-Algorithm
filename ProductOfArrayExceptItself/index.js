// Given an array, return an array where each index stores the product of all numbers 
// in the array except the number at the index itself.
// arr = [1,2,3,4] Input
// arr = [24,12,8,6] Output

function findProduct(arr) {

    let result = [];
     
     for(let i = 0; i < arr.length; i++){
         let prod = 1;
         for(j = 0; j < arr.length; j++){
 
             if( i !== j){
                 prod = prod * arr[j];
             }
         }
         result.push(prod);
 
     }
     
     return result;
 
 }


 function findProduct(arr){
    var result = []
    var left = 1, currentproduct;
    //To store product of all previous values from currentIndex
    for(var i=0;i<arr.length;i++){
      currentproduct = 1
      //To store current product for index i    
          //compute product of values to the right of i index of list
      for(var j=i+1;j<arr.length;j++){
        currentproduct = currentproduct * arr[j]
      }
      //currentproduct * product of all values to the left of i index
      result.push(currentproduct * left)
      //Updating `left`
      left = left * arr[i]
    }
      
    return result
  }