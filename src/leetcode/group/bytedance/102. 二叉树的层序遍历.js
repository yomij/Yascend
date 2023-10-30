/**
 * Date: 2023/10
 *
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = []
    if (!root) return res
    let stack = [root]
    while (stack.length) {
        let temp = []
        let data = []
        for (let item of stack) {
            data.push(item.val)
            item.left && temp.push(item.left)
            item.right && temp.push(item.right)
        }
        stack = temp
        res.push(data)
    }
    return res
};