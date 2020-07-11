/**
 * Date: 2020/06/28
 * Question:
  返回 A 的最短的非空连续子数组的长度，该子数组的和至少为 K 。
  如果没有和至少为 K 的非空子数组，返回 -1 。
 */

/**
 * 暴力解法-超时
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function (A, K) {
  let key = 0, ans = Infinity
  for (; ;) {
    let result = 0
    for (let k = key; k < A.length; k++) {
      result += A[k]
      if (result >= K) {
        if (ans === 1) return ans
        if (k - key + 1 < ans) ans = k - key + 1
        break
      }
    }
    if (key === A.length) break
    else key += 1
  }
  return ans === Infinity ? -1 : ans
};

/**
 * @description
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function (A, K) {
  let p = []
  let sumArray = []
  let ans = A.length + 1
  for (let x = 0; x < A.length; x += 1) {
    if (A[x] >= K) return 1 // 存在莫一个大于
    sumArray.push(~~sumArray[x - 1] + A[x])
    if (sumArray[x] >= K) {
      ans = Math.min(ans, x + 1)
    }
    p.push(x)
    while (p.length > 1 &&sumArray[p[p.length - 1]] < sumArray[p[p.length - 2]] ) {
      p.splice(p.length - 2, 1) // 去掉大于当前的
    }
    
    while (p.length && sumArray[p[p.length - 1]] - sumArray[p[0]] >= K) {
      ans = Math.min(ans, p[p.length - 1] - p[0])
      p.shift()
    }
  }
  return ans > A.length ? -1 : ans
};

// 参考解法
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function (A, K) {
  let P = new Array(A.length + 1).fill(0)
  for (let i = 0; i < A.length; i++) {
    P[i + 1] = P[i] + A[i]
  }
  let queue = [], min = A.length + 1;
  for (let j = 0; j < P.length; j++) {
    // 上次的和大于本次的和，即P[j-1]>P[j],则不存取本次的j
    while (queue.length != 0 && P[queue[queue.length - 1]] >= P[j]) {
      queue.pop()
    }
    while (queue.length != 0 && P[j] - P[queue[0]] >= K) {
      // 当本次的P[j]>P[滑动窗口初始值]，则取最小长度
      min = Math.min(j - queue[0], min)
      // 并删除滑动窗口初始值，而后重新push进当前j，则滑动窗口上次结束值为初始值，当前j为滑动窗口结束值
      queue.shift()
    }
    queue.push(j)
  }
  return min < A.length + 1 ? min : -1
};

console.log(shortestSubarray([2,-1,2],3))









