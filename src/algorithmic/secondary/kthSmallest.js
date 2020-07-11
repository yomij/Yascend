/**
 * Date: 2020/07/01
 * Question:
 *  378. 有序矩阵中第K小的元素
 *  给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
 *  请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。
 *
 * 示例：
 *  matrix = [
 *   [ 1,  5,  9],
 *   [10, 11, 13],
 *   [12, 13, 15]
 * ],
 * k = 8,
 * 返回 13。
 */

/**
 * @description 这里用的是归并排序的思路，排序后取值
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  if(matrix.length < 1) return 0
  let arr = matrix.reduce((a, b) => merge(a, b))
  return arr[k - 1]
};

// 归并排序
function merge(left, right){
  let lLen = left.length
  let rLen = right.length
  let i = 0
  let j = 0
  let res = []
  while(i < left.length && j < right.length){
    if (left[i] < right[j]) {
      res.push(left[i++])
    } else {
      res.push(right[j++])
    }
  }
  while(i < lLen) res.push(left[i++])
  while(j < rLen) res.push(right[j++])
  return res
}

// 附 归并排序完整实现

// function mergeSort(route) {
//   if (route.length < 2) return route
//   let mid = ~~(route.length / 2)
//   let lList = route.slice(0, mid)
//   let rList = route.slice(mid)
//   return merge(mergeSort(lList), mergeSort(rList))
// }
//
// function merge(lList, rList) {
//   let result = []
//   while (lList.length && rList.length) {
//     if (lList[0] < rList[0]) {
//       result.push(rList.shift())
//     } else {
//       result.push(lList.shift())
//     }
//   }
//   while (lList.length) {
//     result.push(lList.shift())
//   }
//   while (rList.length) {
//     result.push(rList.shift())
//   }
//   return result
// }
