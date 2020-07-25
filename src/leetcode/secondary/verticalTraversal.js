/**
 * Date: 2020/06/28
 * Tag: Double Pointer
 * Question:
 *  987. 二叉树的垂序遍历
 *  给定二叉树，按垂序遍历返回其结点值。
 *  对位于 (X, Y) 的每个结点而言，其左右子结点分别位于 (X-1, Y-1) 和 (X+1, Y-1)。
 *  把一条垂线从 X = -infinity 移动到 X = +infinity ，每当该垂线与结点接触时，我们按从上到下的顺序报告结点的值（ Y 坐标递减）。
 *  如果两个结点位置相同，则首先报告的结点值较小。
 *  按 X 坐标顺序返回非空报告的列表。每个报告都有一个结点值列表。
 *
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
var verticalTraversal = function(root) {
  let read = [ root ] // 遍历树的队列
  let result = {} // 结果
  let minLevel = 0 // 最左边的节点层级
  let maxLevel = 0 // 最右边的节点层级
  root.level = 0 // 初始横向层级为0
  root.ylevel = 0 // 初始纵向层级为0
  while (read.length) { // 开始广度优先遍历
    let node = read.shift()
    // 储存结果
    if (result[node.level]) {
      result[node.level][node.ylevel] = result[node.level][node.ylevel] || []
      result[node.level][node.ylevel].push(node.val)
    } else {
      result[node.level] = []
      result[node.level][node.ylevel] = [ node.val ]
    }
    // 有左节点，标记左节点横向层级-1，纵向+1
    if (node.left) {
      node.left.level = node.level - 1
      node.left.ylevel = node.ylevel + 1
      read.push(node.left)
      // 记录横向最小层级
      minLevel = Math.min(node.level - 1, minLevel)
    }
    // 有右节点，标记右节点横向层级+1，纵向+1
    if (node.right) {
      node.right.level = node.level + 1
      node.right.ylevel = node.ylevel + 1
      read.push(node.right)
      // 记录横向最大层级
      maxLevel = Math.max(node.level + 1, maxLevel)
    }
  }
  for (let i = minLevel; i <= maxLevel; i++) {
    // 对同一横向层级的结果进行排序
    let data = result[i].filter(item => item).map(item => item.sort((a, b) => a - b)).flat(Infinity)
    read.push(data)
  }
  return read
}

let root = {
  'val': 1,
  'left': null,
  'right': null,
}
