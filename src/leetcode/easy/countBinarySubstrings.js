/**
 * Date: 2020/07/08
 * Tag: String
 * Question:
 *  696. 计数二进制子串
 *  给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，
 *  并且这些子字符串中的所有0和所有1都是组合在一起的。
 *  重复出现的子串要计算它们出现的次数。
 *
 */

/**
 * @description 01 一次 0011 俩次，转换为统计相邻 1 和 0 出现的次数总和
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  if (!s) return 0
  let i = 0
  let j = 0
  let res = 0
  // 开始查找
  while (i < s.length) {
    let f = s[i]; let sameCount = 0; let diffCount = 0
    while (j < s.length) {
      // 统计字串中的 0 跟 1
      s[j] === f ? sameCount++ : diffCount++
      // 查找到 分界 如 01 或者 10，
      if (s[j] !== f && s[j + 1] === f) {
        // 计算结果，结果加上较小值
        res += Math.min(sameCount, diffCount)
        // 移动 i，j到下一个不同的值的坐标，如 当前是 0 移动到下一个 1，当前是1 移动到 下一个 0
        j = i += sameCount
        // 跳出子循环
        break
      }
      j++
    }
    // 如果遍历结束了
    if (j === s.length) {
      // 直接统计数据
      res += Math.min(sameCount, diffCount)
      break
    }
  }
  return res
};
