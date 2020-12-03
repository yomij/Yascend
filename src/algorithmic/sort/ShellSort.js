/**
 * 希尔排序 - 插入排序
 * 1. 选择一个增量序列t1，t2，…，tk，其中ti > tj，tk=1
 * 2. 按增量序列个数k，对序列进行k 趟排序
 * 3. 每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。
 *    仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。
 */

function shellSort(arr) {
  for (let gap = arr.length; gap > 0; gap = gap >> 1) {
    for (let i = 2 * gap, j = arr.length; i < j; i++) {
      let cur = arr[i]
      let k = i
      while (k >= 1 && arr[k - 1] > cur) {
        arr[k] = arr[k - 1]
        k--
      }
      arr[k] = cur
    }
  }
  return arr
}

module.exports = shellSort
