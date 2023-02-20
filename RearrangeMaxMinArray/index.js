// Implement a function called maxMin(arr), which will rearrange the elements of a sorted array so 
// that the first position will have the largest number, 
// the second will have the smallest, and the third will have the second-largest 
// and so on. In other words, all the odd-numbered indices will have the largest numbers in the 
// array in descending order, and the even-numbered indices will have the smallest numbers in 
// ascending order.

//arr = [1,2,3,4,5]
//arr = [5,1,4,2,3]

//Solution 1
function maxMin(arr){ 
    let i = 1;
      let res = [];
      let len = arr.length;
  
    while(i <= len){
  
      if(i % 2 !== 0){
          res.push(Math.max(...arr));
          arr.pop();
      } else {
          res.push(Math.min(...arr));
          arr.shift();
      }
        console.log(arr);
      i++;
    }
    return res;
  }

  //Solution 2 

const maxMin = () => {

    let result = [];

    for(let i = 0; i < (Math.floor(arr.length / 2)); i++){
        result.push(arr[arr.length - (i + 1)]);
        result.push(arr[i]);
    }

    if(arr.length % 2 !== 0){
        result.push(arr[Math.floor(arr.length / 2)])
    }
}