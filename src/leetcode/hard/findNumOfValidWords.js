/**
 * Date: 2021/02/26
 * Tag: Bit
 * Question:
 * 1178. 猜字谜
 * 字谜的迷面 puzzle 按字符串形式给出，如果一个单词 word 符合下面两个条件，那么它就可以算作谜底：
 *   单词 word 中包含谜面 puzzle 的第一个字母。
 *   单词 word 中的每一个字母都可以在谜面 puzzle 中找到。
 *
 * 例如，如果字谜的谜面是 "abcdefg"，那么可以作为谜底的单词有 "faced", "cabbage", 和 "baggage"；而 "beefed"
 * （不含字母 "a"）以及 "based"（其中的 "s" 没有出现在谜面中）都不能作为谜底。
 *
 * 返回一个答案数组 answer，数组中的每个元素 answer[i] 是在给出的单词列表 words 中可以作为字谜迷面 puzzles[i] 所对应的谜
 * 底的单词数目。
 */

/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function (words, puzzles) {
  // 转换 将 'daca' => '1101'
  function getBits(word) {
    let res = 0
    for (let c of word) {
      let offset = c.charCodeAt(0) - 97
      res = res | (1 << offset)
    }
    return res
  }
  
  // 记录相同编码出现的次数 如 aabb 和 ab 的编码都是 11
  let map = new Map()
  for (let w of words) {
    let bits = getBits(w)
    if (map.has(bits)) map.set(bits, map.get(bits) + 1)
    else map.set(bits, 1)
  }
  
  let res = new Array(puzzles.length).fill(0)
  for (let i = 0; i < puzzles.length; i++) {
    let p = puzzles[i]
    let pBits = getBits(p)
    // temp表示的是 子集，puzzle的子集
    let temp = pBits
    let first = getBits(p[0])
    while (temp > 0) {
      // temp & first 表示 puzzle的第一位在子集中
      // 如果在的话 就判断 子集在不在map中
      // 子集在map中 就加上对应的次数
      if ((temp & first) && map.has(temp)) {
        res[i] += map.get(temp)
      }
      // 求取下一个子集
      temp = pBits & (temp - 1)
    }
  }
  return res
};
