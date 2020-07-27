/**
 * Date: 2020/07/27
 * Tag: Double Pointer
 * Question:
 *  392. 判断子序列
 *  给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 *  你可以认为 s 和 t 中仅包含英文小写字母。
 *  字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。
 *  字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。
 *  （例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 */

/**
 * @description 双指针
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  // s不存在，直接返回
  if (!s) return true
  let subIndex
  let index = subIndex = 0
  while (index < t.length) {
    // 匹配到相等的
    if (t[index] === s[subIndex]) {
      // 指向s的指针向右移
      subIndex++
      // 如果s到头了 就是存在 返回结果
      if (subIndex === s.length) return true
    }
    // t指针想右移
    index++
  }
  // 执行完了，还没有找到就返回
  return false
};
/**
 * @description 通过正则，奇慢无比
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence1 = function(s, t) {
  let regText = ''
  for (let c of s) {
    regText += `${c}.*`
  }
  return new RegExp(regText, 'g').test(t)
};
