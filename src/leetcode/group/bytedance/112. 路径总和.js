/**
 * Date: 2023/10
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let res = false
    const read = (r, pre = 0) => {
        if (!r || res) return
        pre = pre + r.val
        if(!r.left && !r.right && targetSum === pre) {
            res = true
            return
        }
        read(r.right, pre)
        read(r.left, pre)
    }
    read(root)
    return res
};