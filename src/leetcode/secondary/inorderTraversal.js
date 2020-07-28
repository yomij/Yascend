/**
 * Date: 2020/07/26
 * Tag: Tree
 * Question:
 *  94. 二叉树的中序遍历
 *  给定一个二叉树，返回它的中序 遍历。
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @description 递归fa
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (root) {
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
  } else {
    return []
  }
}

/**
 * @description 颜色标记法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal1 = function(root) {
  let result = []
  if(!root) return result
  // type 0 表示未遍历过，1表示已经被读过
  let stack = [{node: root, type: 0 }]
  while (stack.length) {
    let stackNode = stack.shift()
    let node = stackNode.node
    if (stackNode.type === 0) { // 依次放入右节点,中间节点,左节点
      node.right && stack.unshift({node: node.right, type: 0})
      stack.unshift({node: node, type: 1})
      node.left && stack.unshift({node: node.left, type: 0})
    } else { // 读过 直接放入结果
      result.push(node.val)
    }
  }
  return result
}


/**
 * @description 迭代法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal2 = function (root) {
  if (!root) return []
  let stack = [root] // 栈队列
  let arr = [] // 结果数组
  let cur = root // 当前元素
  while (stack.length) {
    if (cur.left) {// 有左节点
      stack.push(cur.left) // 入栈
      cur = cur.left // 继续探底
    } else { // 无左节点
      arr.push(stack.pop().val) // 当前节点出栈 添加进结果数组
      if (cur.right) {
        stack.push(cur.right) // 右节点入栈
        cur = cur.right // 遍历右节点
      } else { // 左，自己， 右节点都遍历完毕
        cur = stack[stack.length - 1] // 拿出栈队列得第一个
        if (cur) cur.left = null // 左节点置空 防止一直循环
      }
    }
  }
  return arr
};
