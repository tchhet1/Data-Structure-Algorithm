// Given an unsorted array of numbers and another number, 
// you are required to find the index at which the number would be placed 
// if it were to be inserted in a sorted version of the array of numbers.
//([5,4,1,3],2)
//1
const getIndex = (arr, number)=> {
    let sortedArr = arr.sort((a,b) => {
        return a-b;
    })


    if(number < sortedArr[0]){
        sortedArr.unshift(number);
        return sortedArr;
    }

    if(number > sortedArr[sortedArr.length - 1]){
        sortedArr.push(number);
        return sortedArr;
    }

    let halfLength = parseInt(sortedArr.length / 2);
    let leftArray = [];

    for(let i = 0; i < halfLength; i++){
        leftArray.push(sortedArr[i]);
    }


    let rightArr = [];

    for(let i = halfLength; i < sortedArr.length; i++){
        rightArr.push(sortedArr[i]);
    }


    if(number < leftArray[leftArray.length -1]){
        for(let i = 0; i < leftArray.length; i++){
            if(number > leftArray[i]){
                console.log(leftArray[i]);
                continue;
            } else {
                sortedArr.splice(i, 0, number);
                console.log(sortedArr);
                return sortedArr.indexOf(number);
            }
        }
    } else {
        for(let i = 0; i < rightArr.length; i++){
            if(number > rightArr[i]){
                continue;
            } else {
                let insertIndex = sortedArr.indexOf(rightArr[i]);
                sortedArr.splice(insertIndex, 0, number);
                console.log(sortedArr);
                return sortedArr.indexOf(number);
            }
        }
    }

}



/***********Solution No. 2 */

const getIndex2 = (arr, number) =>
    arr.reduce((counter, curr) => (number > curr ? ++counter : counter), 0);

var inputsA = [[10,5,1,3],[16,4,5]];
var inputsB = [2,13]
console.log(getIndex(inputsA[0],inputsB[0]))










