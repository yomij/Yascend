/**
 * Date: 2020/08/03
 * Tag: Tree
 * Question:
 *  114. 二叉树展开为链表
 *  给定一个二叉树，原地将它展开为一个单链表。
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @description 深度优先遍历
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) return
  let stack = [ root ]
  let now = null
  while (stack.length) {
    root = stack.shift()
    if (root.right) stack.unshift(root.right)
    if (root.left) stack.unshift(root.left)
    if (now) {
      now.right = root
      now.left = null
    }
    now = root
  }
};
