/**
 * Date: 2020/09/02
 * Tag: Bit Operation
 * Question:
 *  191. 位1的个数
 *  编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）。
 *
 * 输入：00000000000000000000000000001011
 * 输出：3
 * 解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let res = 0
  // 当不为0的时候
  while (n) {
    // 如果当前位是 1 则 & 1 等于 1
    if (n & 1) res++
    // 处理后右移一位
    n = n >>> 1
  }
  return res
};
