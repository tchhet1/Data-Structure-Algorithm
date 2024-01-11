//The majority element is the element that appears more than ⌊n / 2⌋ times. 
//You may assume that the majority element always exists in the array.

const majorityElement = (arr) => {

    const n = parseInt(arr.length / 2);

    let repeat = 1;
    let maxRepeat = 0;
    let sortedArr = arr.sort((a, b) =>  a-b);

    for (let i = 1; i < arr.length; i++) {
        if(sortedArr[i] == sortedArr[i-1]) {
            repeat++;
        } else {
            repeat = 1;
        }

        if(repeat > n){
            maxRepeat = sortedArr[i];
        }

    }
    return maxRepeat;

}

majorityElement([3,2,3]);
