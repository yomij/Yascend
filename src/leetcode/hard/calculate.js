/**
 * Date: 2020/08/27
 * Tag: Double Pointer
 * Question:
 * 224. 基本计算器
 *  实现一个基本的计算器来计算一个简单的字符串表达式的值。
 *  字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格 。
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let opStack = []
  let stack = []
  let cache = ''
  // 转为逆波兰表达式
  for (let i = 0 ; i < s.length; i++) {
    let c = s[i]
    if (c === ' ') continue
    if (c === '(') {
      opStack.push(c)
    } else if (c === '+' || c === '-') {
      let pre = opStack[opStack.length - 1]
      if (pre && pre !== '(') stack.push(opStack.pop())
      opStack.push(c)
    } else if (c === ')') {
      for (let op; opStack.length && (op = opStack.pop()) !== '(';) stack.push(op)
    } else {
      if (/\d/.test(s[i]) && /\d/.test(s[i + 1])) {
        cache += s[i]
        continue
      }
      c = cache + s[i]
      cache = ''
      stack.push(Number(c))
    }
  }
  for (let op; opStack.length && (op = opStack.pop());)  stack.push(op)
  
  // 计算
  let res = []
  let operator = {
    '+': (a, b) => a + b,
    '-': (a, b) => b - a
  }
  for (let i = 0; i < stack.length; i++){
    let token = stack[i]
    let operate = operator[token]
    operate ? res.push(operate(res.pop(), res.pop())) : res.push(token)
  }
  return res[0]
};
