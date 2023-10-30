/**
 * Date: 2023/10
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let a = m - 1
    let b = n - 1
    while(a >= 0 && b >= 0) {
        while (b >= 0 && nums2[b] >= nums1[a]) {
            nums1[a + b + 1] = nums2[b]
            b--
        }
        while (a >= 0 &&nums2[b] < nums1[a]) {
            [nums1[a + b + 1], nums1[a]] = [nums1[a], nums1[a + b + 1]]
            a--
        }
    }
    while (b >= 0) {
        nums1[b] = nums2[b]
        b--
    }
};

console.log(merge([2,7,99,0], 3, [1,2,3,4,5,6], 6))