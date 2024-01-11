//Rotate the array by 'n' times. the last element will be first with every rotation and the other elements shift to right.
//[1,2,3,4]
// n = 2
//1st rotation - [4, 1, 2, 3], 2nd rotation - [3, 4, 1, 2]

const rightRotate = (arr, n) => {
   
    for(let i = 0; i < n; i++){
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    return arr;
}

rightRotate([1, 2, 3, 4], 2);