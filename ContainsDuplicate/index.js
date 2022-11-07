/* Given an integer array nums, return true 
if any value appears at least twice in the array, and 
return false if every element is distinct. */


const containsDuplicate = (nums) => {

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        
        if(nums.indexOf(element) !== -1) {
            return true;
        }
    }

    return false;
}