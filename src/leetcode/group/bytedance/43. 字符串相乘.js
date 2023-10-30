/**
 * Date: 2023/10
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let val = []
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] === '0') continue
        let f = 0
        let str = ''
        for (let j = num2.length - 1; j >= 0; j--) {
            let v = Number(num2[j]) * Number(num1[i]) + f
            if (v > 9) {
                f = ~~(v / 10)
                v = v % 10
            } else {
                f = 0
            }
            str =  v + str
        }
        f && (str = f + str)
        if (str === '0') {
            continue
        }
        val.push(str + '0'.repeat(num1.length - 1 - i))
    }
    var addStrings = function(num1, num2) {
        if (num2.length > num1.length) [num1, num2] = [num2, num1]
        let f = 0
        let res = ''
        for (let i = num1.length - 1; i >= 0; i--) {
            const shortIdx = i - num1.length + num2.length
            let v = Number(num1[i]) + Number(num2[shortIdx] || 0) + f
            if (v >= 10) {
                f = 1
                v -= 10
            } else {
                f = 0
            }
            res = v + res
        }
        f && (res = f + res)
        return res
    };
    while (val.length > 1) {
        val.push(addStrings(val.pop(), val.pop()))
    }
    return val.pop() || 0
};

console.log(multiply('1320', '0'))