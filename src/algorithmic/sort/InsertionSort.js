/**
 * 简单插入排序 - 插入排序
 * 从第一个视为已排序元素开始，从后向前遍历已排序序列，寻找插入位置。
 */

function insertSort(arr) {
  for (let i = 1, j = arr.length; i < j; i++) {
    let cur = arr[i]
    let k = i
    while (k >= 1 && arr[k - 1] > cur) {
      arr[k] = arr[k - 1]
      k--
    }
    arr[k] = cur
  }
  return arr
}

module.exports = insertSort
