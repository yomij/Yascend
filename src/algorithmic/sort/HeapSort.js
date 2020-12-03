/**
 * 堆排序
 * 1. 将初始待排序关键字序列(R1,R2….Rn)构建成大顶堆，此堆为初始的无序区；
 * 2. 将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,……Rn-1)和新的有序区(Rn),
 *    且满足R[1,2…n-1]<=R[n]；
 * 3. 由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,……Rn-1)调整为新堆，
 *    然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2….Rn-2)和新的有序区(Rn-1,Rn)。
 *    不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。
 */

const Heap = require('../Heap')

function heapSort (arr) {
  let heap = new Heap((a, b) => a - b > 0)
  for (let i = 0, j = arr.length; i < j; i++) {
    heap.push(arr[i])
  }
  for (let i = 0, j = arr.length; i < j; i++) {
    arr[i] = heap.pop()
  }
  return arr
}

module.exports = heapSort
