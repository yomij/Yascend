/**
 * Date: 2023/11/17
 *
 * Title: 80. 删除有序数组中的重复项 II.js
 *
 * Tag: 数组 双指针
 *
 * Desc:
 *
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
 *
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let res = 0
    let curr = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[curr - 2] !== nums[i]) {
            nums[curr] = nums[i]
            res++
            curr++
        }
    }
    return res
};


removeDuplicates([0,1,2,2,2,2,2,3,4,4,4])