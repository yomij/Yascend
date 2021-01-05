/**
 * Date: 2021/01/01
 * Tag: Stack
 * Question:
 *  402. 移掉K位数字
 *  给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。
 *
 */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let stack = []
  // 遍历数组
  for (let c of num) {
    // 1. 删除的数字不到k个
    // 2. 前一位的数字大于当前位
    while (k && stack[stack.length - 1] > c) {
      // 删除前面大的数字
      stack.pop()
      k--
    }
    // 如果是前置0 就不用放入栈了 避免 [0, ..., 1]这种情况
    if (!stack.length && c === '0') continue
    stack.push(Number(c))
  }
  // 如果删除的个数不到k 则从后删除剩余个数
  k && stack.splice(-k)
  return stack.join('') || '0'
};
