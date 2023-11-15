/**
 * Date: 2023/11/15
 *
 * Title: LCR 175. 计算二叉树的深度
 *
 * Tag: tree
 *
 * Desc:
 *
 * 某公司架构以二叉树形式记录，请返回该公司的层级数。
 *
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
 * @description 递归
 * @param {TreeNode} root
 * @return {number}
 */
var calculateDepth = function(root) {
    if (!root) return 0
    return Math.max(calculateDepth(root.left), calculateDepth(root.right)) + 1
};


/**
 * @description 层序遍历
 * @param {TreeNode} root
 * @return {number}
 */
var calculateDepth1 = function(root) {
    if (!root) return 0
    return Math.max(calculateDepth(root.left), calculateDepth(root.right)) + 1
};


