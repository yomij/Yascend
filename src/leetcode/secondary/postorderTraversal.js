/**
 * Date: 2020/12/18
 * Tag: Tree
 * Question:
 *  145. 二叉树的后序遍历
 *  给定一个二叉树，返回它的中序 遍历。
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @description 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (root) {
    return [...inorderTraversal(root.left), ...inorderTraversal(root.right), root.val]
  } else {
    return []
  }
}
