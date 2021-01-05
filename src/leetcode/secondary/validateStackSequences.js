/**
 * Date: 2021/01/05
 * Tag: Stack
 * Question:
 *  946. 验证栈序列
 *  给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，只有当它们可能是在最初空栈上进行的推入 push
 *  和弹出 pop 操作序列的结果时返回 true；否则，返回 false 。
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let stack = []
  for (let i of pushed) {
    stack.push(i)
    while (stack.length && stack[stack.length - 1] === popped[0]) {
      popped.shift()
      stack.pop()
    }
  }
  return !stack.length
};
