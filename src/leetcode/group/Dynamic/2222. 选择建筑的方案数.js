/**
 *
 * Date: 2023/11/03
 *
 * Title: 2222. 选择建筑的方案数
 *
 * 给你一个下标从 0 开始的二进制字符串 s ，它表示一条街沿途的建筑类型，其中：
 * . s[i] = '0' 表示第 i 栋建筑是一栋办公楼，
 * . s[i] = '1' 表示第 i 栋建筑是一间餐厅。
 * 作为市政厅的官员，你需要随机 选择 3 栋建筑。然而，为了确保多样性，选出来的 3 栋建筑 相邻 的两栋不能是同一类型。
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function(s) {
    let z = 0
    let o = 0
    let zo = 0
    let oz = 0
    let res = 0
    for (let c of s) {
        if (c === '0') {
            oz += o
            z++
            res += zo
        } else {
            zo += z
            o++
            res += oz
        }
    }
    return res
};