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
 * @return {number}
 */
var sumNumbers = function(root) {
    let res = 0
    const read = (r, pre = 0) => {
        if (!r) return
        pre = pre * 10 + r.val
        if(!r.left && !r.right) {
            res += pre
            return
        }
        read(r.right, pre)
        read(r.left, pre)
    }
    read(root)
    return res
};