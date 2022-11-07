/* 2. Given an array of integers. You take an integer k, and 
go on adding the elements of the array consecutively.
After each addition, the sum must be at least +1. 
Find least possible value of k satisfying this condition.
Example - take this array A = [2, -4, 3, 1]
Suppose k = 3
3 + A[0] = 3 + 2 = 5
5 + A[1] = 5 +(-4) = 1
1 + A[2] = 1 + 3 = 4
4 + A[3] = 4 + 1 = 5
For k = 3, each sum is at least +1. No value of k smaller than 3 will satisfy this condition.
So, answer is k = 3 */


/* min number = -4 less than '0';
index of min -4 = 1;
'5' 
2, 1, -4, -3
k = 5; */




const leastKValue = (arr) => {

    let temp = [];
    let k = 1;
    let bool = true;

    while(bool){

        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            temp.push(element + k);            
        }

        let x = k; 

       temp.sort();

        if(temp[0] > 0){
            bool = false;
        } else {
            k++
        }

    }

    return k;

}