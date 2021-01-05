const BubbleSort = require('./BubbleSort')
const HeapSort = require('./HeapSort')
const InsertionSort = require('./InsertionSort')
const QuickSort = require('./QuickSort')
const ShellSort = require('./ShellSort')
const MergeSort = require('./MergeSort')

const getRandomArr = function (length) {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push(~~(Math.random() * 100000))
  }
  return arr
}

function run(arr, name = '', fn = () => void 0,time = 10000) {
  let i = time
  console.time(name)
  while (i > 0) {
    fn(arr, 0, arr.length - 1)
    i--
  }
  console.timeEnd(name)
}

const sorts = {
  // BubbleSort,
  HeapSort,
  // InsertionSort,
  QuickSort,
  ShellSort,
  MergeSort,
}

console.time('makeArr')
const arr = getRandomArr(10000000)
console.timeEnd('makeArr')

for (let sort in sorts) {
  run([ ...arr ], sort, sorts[sort], 1)
}
