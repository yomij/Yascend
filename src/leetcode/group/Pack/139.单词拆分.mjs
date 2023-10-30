/**
 * 139.单词拆分
 * Date: 2023/09/08
 * Tag: PACK
 * Link: https://leetcode.cn/problems/word-break
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    let sub = ''
    for (let c of s) {
        sub += c
        for (let w of wordDict) {
            if (
                sub.length >= w.length &&
                dp[sub.length - w.length] &&
                s.startsWith(s.slice(0, sub.length - w.length) + w)
            ) {
                dp[sub.length] = true
            }
        }
    }
    return dp[s.length]
};