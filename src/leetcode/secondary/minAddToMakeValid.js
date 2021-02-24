/**
 * Date: 2021/01/05
 * Tag: Stack
 * Question:
 *  921. 使括号有效的最少添加
 *  给定一个由 '(' 和 ')' 括号组成的字符串 S，我们需要添加最少的括号（ '(' 或是 ')'，可以在任何位置），以使得到的括号字符串有效。
 *
 * 输入："((("
 * 输出：3
 *
 * 输入："()))(("
 * 输出：4
 */

/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  let stack = []
  for (let c of S) {
    if (c === ')' && stack[stack.length - 1] === '(') stack.pop()
    else stack.push(c)
  }
  return stack.length
};
