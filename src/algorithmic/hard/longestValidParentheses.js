/**
 * Date: 2020/07/04
 * Question:
 *  32. 最长有效括号
 *  给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 *
 *  输入: "(()"
 *  输出: 2
 *  解释: 最长有效括号子串为 "()"
 */

/**
 * @description 利用栈维护一个匹配成功的数组,结果就是匹配成功的数组中最长的子项的长度
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let list = []
  let resList = []
  let index = 0
  for (let char of s) {
    if (char === ')' && list[0] && list[0].char === '(') {
      let c = list.shift()
      resList[c.index] = 1
      resList.push(1)
    } else {
      list.unshift({index: index, char})
      resList.push(0)
    }
    index ++
  }
  return resList.join('').replace(/0+/g, '|').split('|').reduce((res, index) => Math.max(res, index.length), 0)
}

// test
console.log(longestValidParentheses("(())))))))))))))))))()((((())))))))"))

