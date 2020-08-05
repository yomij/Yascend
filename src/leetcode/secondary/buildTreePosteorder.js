/**
 * Date: 2020/07/26
 * Tag: Tree
 * Question:
 *  106. 从中序与后序遍历序列构造二叉树 (同：剑指 Offer 07. 重建二叉树)
 *   根据一棵树的中序遍历与后序遍历构造二叉树。
 *   注意: 你可以假设树中没有重复的元素。
 *
 *   例如给出：
 *    中序遍历 inorder = [9,3,15,20,7]
 *    后序遍历 postorder = [9,15,7,20,3]
 *  返回如下的二叉树：
 *    3
 *    / \
 *    9  20
 *    /  \
 *   15   7
 *
 * Definition for a binary tree node.
 *  function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 *  }
 */

/**
 * @description 递归找到根节点，左右节点
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  return buildHelper(inorder, postorder)
};
尾巴
function buildHelper(inorder, postorder) {
  // 没有元素直接返回null
  if (!postorder.length) return null
  // 根节点为后序遍历的最后一个节点
  let rootVal = postorder.pop()
  let root = new TreeNode(rootVal)
  let index = inorder.indexOf(rootVal)
  // 中序遍历中，根节点左边左边节点
  // 后序遍历中，前几个就是左边节点
  root.left = buildHelper(
    inorder.slice(0, index),
    postorder.slice(0, index)
  )
  // 中序遍历中，根节点右边的就是右子树
  // 后序遍历中，左节点之后的就是右边节点
  root.right = buildHelper(
    inorder.slice(index + 1),
    postorder.slice(index)
  )
  return root
}
