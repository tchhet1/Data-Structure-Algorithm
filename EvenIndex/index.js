//Given an Array of integers, return an Array where every element at an even-indexed position is squared.
//[2, 3, 4, 5, 6] --> [4, 3, 16, 5, 36]

const evenIndex = (arr) => {

    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0) {
            arr[i] = arr[i] * arr[i];
        } 
    }

    return arr;
}



//second solution
let arr = [9, -2, 9, 1, 4, 6, 10];

arr.map((elem, index) => {
    if(index % 2 == 0 ) {
        return elem * elem
    } else {
        return elem
    }
    
})