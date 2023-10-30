/**
 *
 * Date: 2023/10/30
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
 * 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = []
    for (let n of nums) {
        dp.push(Math.max(n + (dp[dp.length - 2] || 0), dp[dp.length - 1] || 0))
    }
    return Math.max(...dp)
};

console.log(rob([1]))