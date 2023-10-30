/**
 * Date: 2023/10
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    const temp = []
    const map = {}
    const repeat = () => {
        if (temp.length === nums.length) {
            res.push([...temp])
            return
        }
        for (let i of nums) {
            if (map[i]) continue;
            map[i] = true
            temp.push(i)
            repeat()
            let s = temp.pop()
            map[s] = false
        }
        return res
    }
    return repeat()
};


console.log(permute([1,2,3]))