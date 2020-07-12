/**
 * Date: 2020/07/08
 * Tag: Double Pointer
 * Question:
 *  面试题 16.11. 跳水板.
 *  你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。
 *  返回的长度需要从小到大排列。
 */

/**
 * @description 就是由最小 shorter * k 到 longer * k, 每减去一个shorter就增加一个longer
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
  if (!k) return []
  if (shorter === longer) return [shorter * k]
  let min = shorter * k
  let result = [min]
  while (k > 0) {
    min = min + longer - shorter
    result.push(min)
    k--
  }
  return result
};

/**
 * @description 思路同上
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard1 = function(shorter, longer, k) {
  let result = []
  if (!k) return result
  if (shorter === longer) return [shorter * k]
  for (let i = 0; i <= k; i++) {
    result.push(i * longer + (k - i) * shorter)
  }
  return result
};
