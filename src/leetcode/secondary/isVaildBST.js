/**
 * Date: 2020/07/26
 * Tag: Tree
 * Question:
 *  98. 验证二叉搜索树
 *   给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 *   假设一个二叉搜索树具有如下特征：
 *    节点的左子树只包含小于当前节点的数。
 *    节点的右子树只包含大于当前节点的数。
 *    所有左子树和右子树自身必须也是二叉搜索树
 *
 * Definition for singly-linked list.
 *  function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 *  }
 *
 * Definition for a binary tree node.
 *  function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 *  }
 */

/**
 * @description 中序遍历求解
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true
  function isBST (root, min, max) {
    if (!root) return true
    if (min >= root.val || max <= root.val) return false
    // 分左右节点，左边节点不大于根节点，右边节点不小于根节点
    return isBST(root.left, min, root.val) && isBST(root.right, root.val, max)
  }
  return isBST(root, -Infinity, Infinity)
};


var isValidBST1 = function(root) {
  // 中序遍历
  function reader (root) {
    if (!root) return []
    let left = [], right = []
    if (root.left) {
      left = reader(root.left)
    }
    if (root.right) right = reader(root.right)
    return left.concat(root, ...right)
  }
  // 中序遍历得到的是从小到大的节点
  const list = reader(root)
  for (let i = 0; i < list.length - 1; i++) {
    // 如果存在不是从小到大的节点，则不是平衡二叉树
    if (list[i].val >= list[i + 1].val) return false
  }
  return true
};

