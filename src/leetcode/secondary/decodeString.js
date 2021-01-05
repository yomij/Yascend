/**
 * Date: 2020/12/31
 * Tag: Tree
 * Question:
 *  394. 字符串解码
 *  给定一个经过编码的字符串，返回它解码后的字符串。
 *  编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 *  你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 *  此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 *
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack = []
  for(let c of s) {
    if (c === ']') {
      let s = '', num = 0, bit = 1, c
      while (stack.length) {
        if (typeof (c = stack.pop()) !== "number" && c !== '[') {
          s = c + s
        } else if (c >= 0) {
          num += c * bit
          bit *= 10
          if (typeof stack[stack.length - 1] !== 'number') {
            stack.push(s.repeat(num))
            s = '', num = 0, bit = 1, c
            break
          }
        }
      }
    } else if (c >= 0){
      stack.push(Number(c))
    } else {
      stack.push(c)
    }
  }
  return stack.join('')
};

