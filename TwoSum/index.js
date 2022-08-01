/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

const TwoSum = (nums, target) => {
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(i + j === target){
                return i, j; 
            }
        }
    }
};

TwoSum([1, 2, 3, 4, 8], 10);


const twoSum = (nums, target) => {
    let i = 0;
    let result = [];
    
    while( i < nums.length) {
        let diff = target - nums[i];
        if(nums.indexOf(diff, i + 1) !== -1) {
            result.push(i);
            result.push(nums.indexOf(diff, i+1));
            return result;
        }
        i++;
    }
    
};