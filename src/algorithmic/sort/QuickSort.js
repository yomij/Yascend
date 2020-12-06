/**
 * 快速排序 - 交换排序
 *
 * 1. 从数列中挑出一个元素，称为 “基准”（pivot）
 * 2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。
 *    在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
 * 3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
 */
const swap = (arr, i, j) => {
  [ arr[i], arr[j] ] = [ arr[j], arr[i] ]
}

function quickSort(arr, i, j) {
  if (i >= j) return
  let guard = i
  let left = i
  let right = j
  while (left < right) {
    // 从后往前找小的
    while(left < right && arr[right] >= arr[guard]) {
      right--
    }
    swap(arr, right, guard)
    guard = right
    // 从前往后找大的
    while(left < right && arr[left] <= arr[guard]) {
      left++
    }
    swap(arr, left, guard)
    guard = left
  }
  quickSort(arr, i, guard - 1)
  quickSort(arr, guard + 1, j)
  return arr
}

module.exports = quickSort
