/**
 * Date: 2023/10
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，
 * 请你在该数组中找出 和为目标值 target  的那 两个 整数，
 * 并返回它们的数组下标。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // const arr = [...nums].sort((a, b) => a - b)
    // let a = 0
    // let b = arr.length - 1
    // while(b > a) {
    //     if (arr[b] + arr[a] > target) {
    //         b--
    //     } else if (arr[b] + arr[a] < target) {
    //         a++
    //     } else {
    //         return [nums.indexOf(arr[a]), nums.lastIndexOf(arr[b])]
    //     }
    // }

    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] !== undefined) {
            return [map[target - nums[i]], i]
        }
        map[nums[i]] = i
    }
};
