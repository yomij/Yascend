/**
 * Date: 2020/07/06
 * Question:
 *  1367. 二叉树中的列表
 *  给你一棵以 root 为根的二叉树和一个 head 为第一个节点的链表。
 *  如果在二叉树中，存在一条一直向下的路径，且每个点的数值恰好一一对应以 head 为首的链表中每个节点的值，那么请你返回 True ，否则返回 False 。
 *  一直向下的路径的意思是：从树中某个节点开始，一直连续向下的路径。
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
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  let readNodeList = [ root ]
  let resultNodeList = []
  // 转换为数组
  head = headReader(head)
  // 开始遍历树
  while (readNodeList.length) {
    let readNode = readNodeList.shift()
    if (readNode.left) readNodeList.push(readNode.left)
    if (readNode.right) readNodeList.push(readNode.right)
    // 找到第一个匹配的节点 开始匹配子节点
    if (readNode.val === head[0]) {
      if (head.length - 1 === 0) return true
      readNode.matchingIndex = 0
      resultNodeList.push(readNode)
      while (resultNodeList.length) {
        let node = resultNodeList.shift()
        let index = node.matchingIndex + 1
        // 匹配成功
        if (node.left && node.left.val === head[index]) {
          if (index === head.length - 1) return true
          node.left.matchingIndex = index
          resultNodeList.push(node.left)
        }
        if (node.right && node.right.val === head[index]) {
          if (index === head.length - 1) return true
          node.right.matchingIndex = index
          resultNodeList.push(node.right)
        }
      }
    }
  }
  return false
}

function headReader(head) {
  let result = []
  result.push(head.val)
  if (head.next) result.push(...headReader(head.next))
  return result
}
