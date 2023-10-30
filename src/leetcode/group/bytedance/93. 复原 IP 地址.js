/**
 * Date: 2023/10
 *
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
 * 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const res = []
    let t = 0
    const repeat = (start, arr = []) => {
        t++
        if (arr.length === 4) {
            if (start < s.length) {
                return;
            } else {
                res.push(arr.join('.'))
            }
        }
        for (let i = 1; i <= 3; i++) {
            if (
                start + i - 1 >= s.length ||
                i !== 1 && s[start] === '0'
            ) {
                return;
            }
            const n = s.slice(start, start + i)
            if (n > 255) return
            arr.push(n)
            repeat(start + i, arr)
            // 回溯
            arr.pop()
        }
    }
    repeat(0)
    console.log(t)
    return res
};

console.log(restoreIpAddresses('101023'))