/* Given an array nums of n integers where nums[i] is in the range [1, n], 
return an array of all the integers in the range [1, n] that do not appear in nums. */

const findDisappearedNumbers = (nums) => {
  
    let set = new Set(nums);
    let result = [];
  
    for(let i = 1; i <= nums.length; i++){
        if(!set.has(i)){
            result.push(i);
        }
    }
  
    return result;
  
  };