/**
 * Date: 2023/10/31
 *
 * Title: 107. 二叉树的层序遍历 II
 *
 * 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。
 * （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
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
var levelOrderBottom = function(root) {
    if(!root) return []
    let list = [root]
    const res = []
    while (list.length) {
        const temp = []
        const tempRes = []
        for (let item of list) {
            item.left && temp.push(item.left)
            item.right && temp.push(item.right)
            tempRes.push(item.val)
        }
        res.unshift(tempRes)
        list = temp
    }
    return res
};