/**
 * Date: 2021/02/24
 * Tag: Linked list
 * Question:
 *  剑指 Offer 40. 最小的k个数
 *
 *  输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  if (arr.length <= k) return arr
  let low = 0
  let high = arr.length - 1
  let index = sort(arr, low, high)
  while (index !== k) {
    if (index > k) {
      // 分割的 小于基准的区块 里的值数目大于k
      // 则只需要分割较小的区块即可
      high = index - 1
      index = sort(arr, low, high)
    } else {
      // 分割的 小于基准的区块 里的值数目小于k
      // 则需要继续分割 大于基准的区块里的值
      low = index + 1
      index = sort(arr, low, high)
    }
    // 已经按序排好了 直接break
    if (!index) break
  }
  return arr.slice(0, k)
};

function sort(arr, low, high) {
  if (low >= high) return
  let pivotKey = low
  while (low < high) {
    // 由后向前 找到第一个小于基准的值
    while (low < high && arr[high] >= arr[pivotKey]) high--
    [ arr[pivotKey], arr[high] ] = [ arr[high], arr[pivotKey] ]
    pivotKey = high
    // 由前向后 找到第一个大于基准的值
    while (low < high && arr[low] <= arr[pivotKey]) low++
    [ arr[pivotKey], arr[low] ] = [ arr[low], arr[pivotKey] ]
    pivotKey = low
  }
  return pivotKey
}
