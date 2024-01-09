// You are given an N-dimensional array (a nested list) and your task is to convert it into a 1D array. 
// The N-dimensional array can have any number of nested lists and each nested list can contain any number of elements. 
// The elements in the nested lists are integers. 
// Write a function that takes an N-dimensional array as input and returns a 1D array.

//input : array = [1, [2, 3], [4, [5, 6]], 7]
//output: [1, 2, 3, 4, 5, 6, 7]

const convertTo1DArr = (arr) => {
    let stack = [...arr];
    let result = [];

    while(stack.length){
        const current = stack.pop();

        if(Array.isArray(current)){
            stack.push(...current);
        } else {
            result.push(current);
        }
    }

    return result;
}

console.log(convertTo1DArr([1, [2, 3], [4, [5, 6]], 7]));








