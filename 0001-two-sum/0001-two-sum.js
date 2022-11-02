/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let check = target - nums[i];
        if (check in map) {
            return [map[check], i];
        }
        map[nums[i]] = i;
    }
    return null;
};