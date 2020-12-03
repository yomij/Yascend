/**
 * 冒泡排序 - 交换排序
 * 循环比较相邻元素大小交换，每次循环固定一个位置
 */

const swap = (arr, j, k) => ([ arr[j], arr[k] ] = [ arr[k], arr[j] ])

function bubbleSort(arr) {
  for (let i = 0, j = arr.length - 1; i < j; i++) {
    for (let k = 0, l = arr.length - i; k < l; k++) {
      if (arr[k] > arr[k + 1]) swap(arr, k ,k + 1)
    }
  }
  return arr
}

module.exports = bubbleSort
