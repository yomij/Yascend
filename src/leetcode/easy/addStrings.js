/**
 * Date: 2020/07/08
 * Tag: String
 * Question:
 *  415. 字符串相加
 *  给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 *  注意：
 *  num1 和num2 的长度都小于 5100.
 *  num1 和num2 都只包含数字 0-9.
 *  num1 和num2 都不包含任何前导零。
 *  你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 */

/**
 * @description 利用padStart 填充短字符串
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let index = 0
  if (!num1.length && !num2.length) return '0'
  if (num1.length > num2.length) {
    index = num1.length
    num2 = num2.padStart(index, '0')
  } else {
    index = num2.length
    num1 = num1.padStart(index, '0')
  }
  let res = ''
  let carry = 0
  while (index > 0) {
    index--
    let sum = ~~num1[index] + ~~num2[index] + carry
    if (sum >= 10) {
      carry = 1
      res = sum % 10 + res
    } else {
      carry = 0
      res = sum + res
    }
  }
  return carry === 0 ? res : carry + res
};


/**
 * @description 利用slice 反向遍历
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings1 = function(num1, num2) {
  let str = ''
  const len = Math.max(num1.length, num2.length);
  // 进位
  let carry = 0
  for (let i = -1; i >= -len; i--) {
    const n1 = num1.slice(i, i + 1 || undefined) - 0;
    const n2 = num2.slice(i, i + 1 || undefined) - 0;
    const res = n1 + n2 + carry;
    if (res > 9) {
      carry = 1
      str = res % 10 + str
    } else {
      carry = 0
      str = res + str
    };
  }
  return carry === 0 ? str : carry + str
};
