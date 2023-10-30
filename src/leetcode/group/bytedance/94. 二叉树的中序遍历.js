/**
 * Date: 2023/10
 *
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) return []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};
