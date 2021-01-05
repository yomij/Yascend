/**
 * Date: 2020/12/17
 * Tag: Tree Stack
 * Question:
 *  103. 二叉树的锯齿形层序遍历
 *  给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *    3
 *   / \
 *  9  20
 *    /  \
 *   15   7
 *
 * 返回锯齿形层序遍历如下：
 * [
 *   [3],
 *   [20,9],
 *   [15,7]
 * ]
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return []
  // 方向:
  // 0 ->
  // 1 <-
  let direction = 0
  let stack = [ root ]
  let cache = []
  let res = [[]]
  while (stack.length) {
    const node = stack.pop()
    res[res.length - 1].push(node.val)
    if (!direction) {
      node.left && cache.push(node.left)
      node.right && cache.push(node.right)
    } else {
      node.right && cache.push(node.right)
      node.left && cache.push(node.left)
    }
    if (stack.length === 0 && cache.length) {
      stack = cache
      cache = []
      res.push([])
      direction = (direction + 1) % 2
    }
  }
  return res
};
