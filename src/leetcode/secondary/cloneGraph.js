/**
 * Date: 2020/08/04
 * Tag: Graph
 * Question:
 *  133. 克隆图
 *  给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。
 *  图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。
 *
 /**
 *  Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @description 图的遍历 广度优先遍历
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  // 新图的起始节点
  if (!node) return
  let root = new Node(node.val)
  // 遍历数组
  let q = [ node ]
  // 旧点和新点的映射
  let newNode = new Map()
  newNode.set(node, root)
  while (q.length) {
    let n = q.shift()
    // 获取新点
    let nn = newNode.get(n)
    // 遍历旧点的邻边节点
    for (let item of n.neighbors) {
      let nNode
      // 有对应的新点
      if (newNode.get(item)) {
        nNode = newNode.get(item)
      } else {
        // 没有就创建对应的新点
        nNode = new Node(item.val)
        // 将没有遍历过的旧点放入队列
        q.push(item)
        // 设置点的映射
        newNode.set(item, nNode)
      }
      // 设置新点的邻居
      nn.neighbors.push(nNode)
    }
  }
  // 返回根节点
  return root
};

// TODO 递归法
