/**
 * Date: 2023/10
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 */

/**
 * @param {string} s
 * @return {number}
 */

// abcda
let lengthOfLongestSubstring = function(s) {
    const map = new Map()
    let start = 0
    let end = 0
    let res = 0
    while(end < s.length) {
        // 有重复的，开始节点后移
        if (map.has(s[end])) {
            start = Math.max(map.get(s[end]) + 1, start)
        }
        // 重置节点下标
        map.set(s[end], end)
        // 计算最大值
        res = Math.max(res, end - start + 1)
        // 结束节点后移
        end++
    }
    return res
}

console.log(lengthOfLongestSubstring('abba'))