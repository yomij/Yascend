/**
 * Date: 2020/08/04
 * Tag: Graph
 * Question:
 *  207. 课程表
 *   你这个学期必须选修 numCourse 门课程，记为 0 到 numCourse-1 。
 *   在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们：[0,1]
 *   给定课程总量以及它们的先决条件，请你判断是否可能完成所有课程的学习？
 *
 */

/**
 * @description
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  // 没门课程的入度
  let inDegree = new Array(numCourses).fill(0)
  // 修习队列
  let queue = []
  // 统计入度
  for (let i = 0; i < prerequisites.length; i++) inDegree[prerequisites[i][0]]++
  // 获得没有前置条件的课程， 可以直接修习
  for (let i = 0; i < inDegree.length; i++) !inDegree[i] && queue.push(i)
  // 这里等于依次修习没有前置条件的课程并把该课程的后置课程入度减1
  while (queue.length) {
    let num = queue.shift()
    // 遍历课程表
    for (let i = 0; i < prerequisites.length; i++) {
      let item = prerequisites[i]
      if (item[1] === num) {
        // 修习课程的后置课程入度减1
        // 如果其入度为0则代表其前置课程已修习完毕，其可以开始修习
        !--inDegree[item[0]] && queue.push(item[0])
      }
    }
  }
  // 如果所有课程的入度都为0，则可以顺利修习完毕
  return !inDegree.some(item => item)
}
