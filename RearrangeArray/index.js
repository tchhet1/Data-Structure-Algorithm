// Implement a function, reArrange(arr), which sorts the elements so that all the negative elements 
// appear on the left, and all positive elements appear at the right.

//Solution 1
function reArrange(arr) {
  
    return arr.sort((a, b) => a-b);
  }

//Solution 2
  function reArrange(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
      if(Math.sign(arr[i]) == -1){
        result.unshift(arr[i]);
      } else if(Math.sign(arr[i] == 1)){
        result.push(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }

//Solution 3
function reArrange(arr) {
    var leftMostPosEle = 0,
        tmp;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            if (i != leftMostPosEle) {
                tmp = arr[i];
                arr[i] = arr[leftMostPosEle];
                arr[leftMostPosEle] = tmp;
            }
            leftMostPosEle += 1
        }
    }
    return arr;
}

console.log(reArrange([10, -1, 20, 4, 5, -9, -6]))