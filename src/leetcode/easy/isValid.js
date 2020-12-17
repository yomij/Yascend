/**
 * Date: 2020/12/17
 * Tag: Tree
 * Question:
 *  20. 有效的括号
 *  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  let stack = []
  const FLAG = ['(', '{', '[', ')', '}', ']']
  for (const c of s) {
    const l = FLAG.indexOf(c)
    if (l - FLAG.length / 2 === stack[stack.length - 1]) stack.pop()
    else stack.push(l)
  }
  return !stack.length
};
