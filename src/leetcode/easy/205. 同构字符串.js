/**
 * Date: 2023/11/01
 *
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。
 *
 * 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 *
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let m1 = {}
    let m2 = {}
    for (let i = 0; i < s.length; i++) {
        let si = s[i]
        let ti = t[i]
        if ((m1[si] && m1[si] !== ti) || (m2[ti] && m2[ti] !== si)) {
            return false
        }
        m1[si] = ti
        m2[ti] = si
    }
    return true
};