/**
 * Date: 2020/06/30
 * Tag: Double Pointer
 * Question:
 *  3. 无重复字符的最长子串
 *  给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 */

/**
 * @description 双指针求解
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0, right = 0, result = 0
  let subStr = '' // 存储子串
  while (right < s.length) {
    // 是否包含这个字符
    let index = subStr.indexOf(s[right])
    if (index === -1) { // 不包含则将字符加入到字串，比较结果
      subStr += s[right]
      result = Math.max(subStr.length, result)
      right++
    } else { // 包含的话，删去字串该字符之前的字符，从该字符开始重新计算
      subStr = subStr.slice(index + 1)
      left += index + 1
    }
  }
  return result
};
