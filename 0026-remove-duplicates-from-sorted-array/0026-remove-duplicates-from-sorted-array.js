/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = nums.length;
    let check = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] === check) {
            nums.splice(i, 1);
            k--;
            i--;
        } else {
            check = nums[i + 1];
        }
    }
    return k;
};