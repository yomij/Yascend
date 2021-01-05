function mergeSort(arr) {
  if (arr.length === 1) return arr
  let mid = arr.length >> 1;
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

function merge(lList, rList) {
  let result = [];
  let i = 0;
  let j = 0;
  const lr = lList.length;
  const rl = rList.length;
  while (i < lr && j < rl) {
    if (lList[i] < rList[j]) {
      result.push(lList[i]);
      i++
    } else {
      result.push(rList[j]);
      j++
    }
  }
  result = result.concat(i < lr ? lList.slice(i) : rList.slice(j));
  return result
}

module.exports = mergeSort;
