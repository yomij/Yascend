/**
 * Date: 2023/11/17
 *
 * Title: 224. 基本计算器
 *
 * Tag: 模拟
 *
 * Desc:
 *
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 *
 * 注意:不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval()
 *
 */


/**
 * // TODO 转后缀表达式 当前超时
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.replace(/ /g, '').replace(/\(-/g,'(0-')
    s = s.startsWith('-') ? '0' + s : s
    const operation = {
        '+': (a, b) => a + b,
        '-': (a, b) => b - a,
        '*': (a, b) => a * b,
        '/': (a, b) => b / a,
    }
    const op = {
        '*': 3,
        '/': 3,
        '+': 2,
        '-': 2,
        '(': 1,
    }
    const n = []
    const o = []
    let temp = ''
    let f = 1
    for (let i= 0; i < s.length; i++) {

        let pre = s[i - 1]
        let c = s[i]
        if (/\d/.test(c)) {
            temp += c
        } else if (temp) {
            n.push(Number((temp || 0)) * f)
            f = 1
            temp = ''
        }
        if (op[c]) {
           if (c !== '(') {
               while ( (op[o[o.length - 1]] || -1) >= op[c]) {
                   n.push(o.pop())
               }
           }
           o.push(c)
        } else if (c === ')') {
            while (o.length) {
                let char = o.pop()
                if (char === '(') break
                n.push(char)
            }
        }
    }
    if (temp) {
        n.push(Number(temp))
    }
    while (o.length) {
        n.push(o.pop())
    }
    let res = [0]
    while (n.length > 0) {
        const token = n.shift()
        let operate = operation[token]
        res.push(operate ? operate(res.pop(), res.pop()) : token)
    }
    return res.pop()
};


console.log(calculate('- (3 + ( -   4 + 5))'))