/**
 * Date: 2020/07/16
 * Tag: Graph
 * Question:
 *  785. 判断二分图
 *  给定一个无向图graph，当这个图为二分图时返回true。
 *  如果我们能将一个图的节点集合分割成两个独立的子集A和B，并使图中的每一条边的两个节点一个来自A集合，一个来自B集合，我们就将这个图称为二分图。
 *  graph将会以邻接表方式给出，graph[i]表示图中与节点i相连的所有节点。
 *  每个节点都是一个在0到graph.length-1之间的整数。
 *  这图中没有自环和平行边： graph[i] 中不存在i，并且graph[i]中没有重复的值。
 *
 */

/**
 * @description 染色法求解
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  // 存储遍历过的顶点的“色值”
  let pointList = new Array(graph.length).fill(undefined)
  // 从第一个开始进行染色
  pointList[0] = 1
  let readList = [0]
  while (readList.length) {
    let point = readList.shift()
    let pointValue = pointList[point]
    // 开始遍历这个当前选取的节点的相连节点
    for (let i = 0; i < graph[point].length; i++) {
      let p = graph[point][i]
      // 如果这个节点没被染过色
      if (!pointList[p]) {
        // 放入这个节点
        readList.unshift(p)
        // 将他染为跟邻接点相反的颜色
        pointList[p] = -pointValue
      } else if (pointValue === pointList[p]) return false // 邻接点颜色和当前节点颜色一样,则不是二分图
    }
    // 图有可能不联通，遍历完当前的节点还有节点没有染色的，则从这个点开始重新遍历
    if (!readList.length) {
      let nextPoint = pointList.indexOf(undefined)
      if (nextPoint > -1) {
        readList.push(nextPoint)
        pointList[nextPoint] = 1
      }
    }
  }
  return true // 遍历完所有节点，则是二分图
};
