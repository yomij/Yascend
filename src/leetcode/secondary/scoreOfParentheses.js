/**
 * Date: 2021/01/04
 * Tag: Stack
 * Question:
 *  856. 括号的分数
 *  给定一个平衡括号字符串 S，按下述规则计算该字符串的分数。
 *  () 得 1 分。
 *  AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
 *  (A) 得 2 * A 分，其中 A 是平衡括号字符串。
 *
 */

/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
  let stack = []
  for (let c of S) {
    // 碰到 后括号 开始计算当前括号内的总值
    if (c === ')') {
      let temp = 0
      while (stack[stack.length - 1] !== '(') {
        temp += stack.pop()
      }
      // 计算好后 替换栈中最后一个元素 即 当前匹配的前括号
      stack[stack.length - 1] = temp * 2 || 1
    } else  {
      stack.push(c)
    }
  }
  // 返回总值
  return stack.reduce((sum, item) => sum + item, 0)
};
