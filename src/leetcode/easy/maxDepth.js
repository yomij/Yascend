/**
 * Date: 2020/07/28
 * Tag: Tree
 * Question:
 *  104. 二叉树的最大深度
 *  给定一个二叉树，找出其最大深度。
 *  二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 *  说明: 叶子节点是指没有子节点的节点。
 *
 */

/**
 * @description 深度优先遍历法
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  let stack = [ root ]
  let res = root.level = 1
  while (root.length) {
    let node = stack.shift()
    let level = node.level
    res = Math.max(res, level)
    if (node.left) {
      node.left.level = level + 1
      stack.unshift(node.left)
    }
    if (node.right) {
      node.right.level = level + 1
      stack.unshift(node.right)
    }
  }
  return res
}

/**
 * @description 广度优先遍历法
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth2 = function (root) {
  if (!root) return 0
  let queue = [ root ]
  let res = 0
  while (queue.length) {
    let length = queue.length
    for (let i = 0; i < length; i++) {
      let cur = queue.shift()
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    res++
  }
  return res
}

/**
 * @description 递归法
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth3 = function (root) {
  return root ? Math.max(maxDepth3(root.left), maxDepth3(root.right)) + 1 : 0
}
