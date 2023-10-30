/**
 * Date: 2023/10
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(0).map((_, i) => {
        let arr =  new Array(n).fill(i === 0 ? 1 : 0)
        arr[0] = 1
        return arr
    })
    for (let i = 1; i < n ; i++) {
        for (let j = 1; j < m; j++) {
            dp[j][i] = dp[j][i - 1]  + dp[j - 1][i]
        }
    }
    return dp[m - 1][n - 1]
};

console.log(uniquePaths(3, 7))
