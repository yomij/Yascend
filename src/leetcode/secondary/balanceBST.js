/**
 * Date: 2020/06/29
 * Tag: Tree
 * Question:
 *  1382. 将二叉树变平衡
 *  给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。
 *  如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是 平衡的 。
 *  如果有多种构造方法，请你返回任意一种。
 *
 * Definition for a binary tree node.
 *  function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 *  }
 */

/**
 * @description 先中序遍历树，之后以中序遍历结果构建平衡二叉树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
  let middleOrder = middleOrderTraversal(root)
  return buildTree(middleOrder)
};

// 中序遍历树
function middleOrderTraversal(tree) {
  let result = []
  if (tree.left) result.push(...middleOrderTraversal(tree.left))
  result.push(tree)
  if (tree.right) result.push(...middleOrderTraversal(tree.right))
  return result
}

// 根据中序遍历构建平衡二叉树
function buildTree(orderArray) {
  if (!orderArray.length) return null
  let middle = ~~(orderArray.length / 2)
  let root = orderArray[middle]
  root.left = buildTree(orderArray.slice(0, middle))
  root.right = buildTree(orderArray.slice(middle + 1))
  return root
}

// test
// balanceBST({val: 1, left: null, right: null})
