
// This algorithm is about to compare two arrays and 
// return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.


const diffArrays = (arr1, arr2) => {
    let result = []

    let temp = [...arr1];

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i].indexOf(arr2) > -1){
            temp.shift();
        }
    }
}

diffArrays([0, 1, 10, 20, 30, 40], [0, 1, 5, 10, 15, 20, 25, 30]);