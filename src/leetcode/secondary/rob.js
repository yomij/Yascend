/**
 * Date: 2020/08/05
 * Tag: Tree
 * Question:
 *  337. 打家劫舍 III
 *  在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。
 *  这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。
 *  一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。
 *  如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。
 *  计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。
 */

/**
 * @description 树的遍历
 * @param {number[]} nums
 * @return {number[][]}
 */
var rob = function(root) {
  // 缓存节点的最大值，避免重复运算
  let cacheMap = new Map()
  const robber = (root) => {
    // 节点不存在 返回0
    if (!root) return 0
    // 如果缓存中有 直接返回
    if (cacheMap.has(root)) return cacheMap.get(root)
    // 计算盗取根节点的情况
    let withRoot = root.val
    // 盗取了根节点 可以盗取其左右节点的直接子节点
    root.left && (withRoot += (robber(root.left.left) + robber(root.left.right)))
    root.right && (withRoot += (robber(root.right.left) + robber(root.right.right)))
    // 不盗取根节点 则可以盗取它的直接子节点
    let withoutRoot = robber(root.left) + robber(root.right)
    // 最大值是盗取根节点或者不盗取根节点 两个中的最大值
    let max = Math.max(withRoot, withoutRoot)
    // 缓存该节点的最大值
    cacheMap.set(root, max)
    // 返回最大值
    return max
  }
  return robber(root)
};
