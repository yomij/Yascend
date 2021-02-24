/**
 * Date: 2021/01/04
 * Tag: Stack
 * Question:
 *  735. 行星碰撞
 *  给定一个整数数组 asteroids，表示在同一行的行星。
 *  对于数组中的每一个元素，其绝对值表示行星的大小，正负表示行星的移动方向（正表示向右移动，负表示向左移动）。
 *  每一颗行星以相同的速度移动。
 *  找出碰撞后剩下的所有行星。
 *  碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。
 *  两颗移动方向相同的行星，永远不会发生碰撞
 *
 */
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let stack = []
  for (let i = 0; i < asteroids.length; i++) {
    let item = asteroids[i]
    // 只有栈顶元素大于0（向右）和当前遍历到的元素小于0（向左）时有可能发生碰撞
    if (item < 0 && stack[stack.length - 1] > 0) {
      // 栈中有元素 且 运行方向不同
      while (stack.length && (item ^ stack[stack.length - 1]) < 0) {
        let stackItem = stack[stack.length - 1]
        if (stackItem + item < 0) {
          stack.pop()
        } else if (item + stackItem === 0) {
          // 质量相等 都消除 该元素不用推入栈
          item = 0
          stack.pop()
          break
        } else if (item + stackItem > 0) {
          // 质量小于栈顶元素 被消除 不用推入栈
          item = 0
          break
        }
      }
    }
    item && stack.push(item)
  }
  return stack
}
