/**
 * Date: 2020/07/03
 * Question:
 *  1302. 层数最深叶子节点的和
 *  给你一棵二叉树，请你返回层数最深的叶子节点的和。
 *
 * Definition for a binary tree node.
 *  function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 *  }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  let list = [ root ]
  let result = []
  root.level = 0
  while (list.length) {
    let r = list.shift()
    result[r.level] ? result[r.level].push(r) : result.push([ r ])
    if (r.left) {
      r.left.level = r.level + 1
      list.push(r.left)
    }
    if (r.right) {
      r.right.level = r.level + 1
      list.push(r.right)
    }
  }
  return result.pop().reduce((sum, item) => sum + item.val, 0)
};
