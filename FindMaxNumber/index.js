/* Finding the Maximum Number in an Array */

const maxNumber = (array) => {   
    //[2, 3, 1, 10, 40]
    return Math.max(...array);  
  };

maxNumber([2, 3, 1, 10, 40]);

const maxNumber2 = (array) => {   
    //[2, 3, 1, 10, 40]
    let temp = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] > temp){
            temp = array[i];
        }
    }
    return temp;  
};

maxNumber2([2, 3, 1, 10, 40]);