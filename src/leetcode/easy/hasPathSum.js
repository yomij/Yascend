/**
 * Date: 2020/07/07
 * Tag: Tree
 * Question:
 *  112. 路径总和
 *  给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 *
 * Definition for a binary tree node.
 *  function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 *  }
 */

/**
 * @description 遍历树，写入每个节点的sum值，当是子节点的时候判断子节点的sum值，相等则返回
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false
  root.sum = root.val
  let readList = [root]
  while (readList.length) {
    let node = readList.shift()
    if (!node.right && !node.left && node.sum === sum) return true
    if (node.right) {
      node.right.sum = node.sum + node.right.val
      readList.push(node.right)
    }
    if (node.left) {
      node.left.sum = node.sum + node.left.val
      readList.push(node.left)
    }
  }
  return false
};
