/**
 * Date: 2023/11/02
 *
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 *
 * 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 *
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {}
    strs.forEach(i => {
        const key = [...i].sort().join('')
        if (map[key]) {
            map[key].push(i)
        } else {
            map[key] = [i]
        }
    })
    return Object.keys(map).map(i => map[i])
};